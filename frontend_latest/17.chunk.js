(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
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









const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;
template.setAttribute('strip-whitespace', '');

/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,

  is: 'paper-spinner',

  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});


/***/ }),

/***/ "./src/components/ha-code-editor.ts":
/*!******************************************!*\
  !*** ./src/components/ha-code-editor.ts ***!
  \******************************************/
/*! exports provided: HaCodeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaCodeEditor", function() { return HaCodeEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/codemirror.ondemand */ "./src/resources/codemirror.ondemand.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");




let HaCodeEditor = class HaCodeEditor extends lit_element__WEBPACK_IMPORTED_MODULE_3__["UpdatingElement"] {
    constructor() {
        super(...arguments);
        this.autofocus = false;
        this.rtl = false;
        this.error = false;
        this._value = "";
    }
    set value(value) {
        this._value = value;
    }
    get value() {
        return this.codemirror ? this.codemirror.getValue() : this._value;
    }
    get hasComments() {
        return this.shadowRoot.querySelector("span.cm-comment") ? true : false;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.codemirror) {
            return;
        }
        this.codemirror.refresh();
        if (this.autofocus !== false) {
            this.codemirror.focus();
        }
    }
    update(changedProps) {
        super.update(changedProps);
        if (!this.codemirror) {
            return;
        }
        if (changedProps.has("mode")) {
            this.codemirror.setOption("mode", this.mode);
        }
        if (changedProps.has("autofocus")) {
            this.codemirror.setOption("autofocus", this.autofocus !== false);
        }
        if (changedProps.has("_value") && this._value !== this.value) {
            this.codemirror.setValue(this._value);
        }
        if (changedProps.has("rtl")) {
            this.codemirror.setOption("gutters", this._calcGutters());
            this._setScrollBarDirection();
        }
        if (changedProps.has("error")) {
            this.classList.toggle("error-state", this.error);
        }
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this._load();
    }
    async _load() {
        const loaded = await Object(_resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_1__["loadCodeMirror"])();
        const codeMirror = loaded.codeMirror;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `
    <style>
      ${loaded.codeMirrorCss}
      .CodeMirror {
        height: var(--code-mirror-height, auto);
        direction: var(--code-mirror-direction, ltr);
      }
      .CodeMirror-scroll {
        max-height: var(--code-mirror-max-height, --code-mirror-height);
      }
      .CodeMirror-gutters {
        border-right: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        background-color: var(--paper-dialog-background-color, var(--primary-background-color));
        transition: 0.2s ease border-right;
      }
      :host(.error-state) .CodeMirror-gutters {
        border-color: var(--error-state-color, red);
      }
      .CodeMirror-focused .CodeMirror-gutters {
        border-right: 2px solid var(--paper-input-container-focus-color, var(--primary-color));
      }
      .CodeMirror-linenumber {
        color: var(--paper-dialog-color, var(--primary-text-color));
      }
      .rtl .CodeMirror-vscrollbar {
        right: auto;
        left: 0px;
      }
      .rtl-gutter {
        width: 20px;
      }
    </style>`;
        this.codemirror = codeMirror(shadowRoot, {
            value: this._value,
            lineNumbers: true,
            tabSize: 2,
            mode: this.mode,
            autofocus: this.autofocus !== false,
            viewportMargin: Infinity,
            extraKeys: {
                Tab: "indentMore",
                "Shift-Tab": "indentLess",
            },
            gutters: this._calcGutters(),
        });
        this._setScrollBarDirection();
        this.codemirror.on("changes", () => this._onChange());
    }
    _onChange() {
        const newValue = this.value;
        if (newValue === this._value) {
            return;
        }
        this._value = newValue;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", { value: this._value });
    }
    _calcGutters() {
        return this.rtl ? ["rtl-gutter", "CodeMirror-linenumbers"] : [];
    }
    _setScrollBarDirection() {
        if (this.codemirror) {
            this.codemirror.getWrapperElement().classList.toggle("rtl", this.rtl);
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaCodeEditor.prototype, "mode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaCodeEditor.prototype, "autofocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaCodeEditor.prototype, "rtl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaCodeEditor.prototype, "error", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaCodeEditor.prototype, "_value", void 0);
HaCodeEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-code-editor")
], HaCodeEditor);



/***/ }),

/***/ "./src/panels/developer-tools/template/developer-tools-template.js":
/*!*************************************************************************!*\
  !*** ./src/panels/developer-tools/template/developer-tools-template.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");









class HaPanelDevTemplate extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="ha-style iron-flex iron-positioning"></style>
      <style>
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          padding: 16px;
          direction: ltr;
        }

        .edit-pane {
          margin-right: 16px;
        }

        .edit-pane a {
          color: var(--dark-primary-color);
        }

        .horizontal .edit-pane {
          max-width: 50%;
        }

        .render-pane {
          position: relative;
          max-width: 50%;
        }

        .render-spinner {
          position: absolute;
          top: 8px;
          right: 8px;
        }

        .rendered {
          @apply --paper-font-code1;
          clear: both;
          white-space: pre-wrap;
        }

        .rendered.error {
          color: red;
        }
      </style>

      <div class$="[[computeFormClasses(narrow)]]">
        <div class="edit-pane">
          <p>
            Templates are rendered using the Jinja2 template engine with some
            牧养犬 specific extensions.
          </p>
          <ul>
            <li>
              <a
                href="http://jinja.pocoo.org/docs/dev/templates/"
                target="_blank"
                >Jinja2 template documentation</a
              >
            </li>
            <li>
              <a
                href="https://home-assistant.io/docs/configuration/templating/"
                target="_blank"
                >牧养犬 template extensions</a
              >
            </li>
          </ul>
          <p>Template editor</p>
          <ha-code-editor
            mode="jinja2"
            value="[[template]]"
            error="[[error]]"
            autofocus
            on-value-changed="templateChanged"
          ></ha-code-editor>
        </div>

        <div class="render-pane">
          <paper-spinner
            class="render-spinner"
            active="[[rendering]]"
          ></paper-spinner>
          <pre class$="[[computeRenderedClasses(error)]]">[[processed]]</pre>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      error: {
        type: Boolean,
        value: false,
      },

      rendering: {
        type: Boolean,
        value: false,
      },

      template: {
        type: String,
        /* eslint-disable max-len */
        value: `Imitate available variables:
{% set my_test_json = {
  "temperature": 25,
  "unit": "°C"
} %}

The temperature is {{ my_test_json.temperature }} {{ my_test_json.unit }}.

{% if is_state("device_tracker.paulus", "home") and
      is_state("device_tracker.anne_therese", "home") -%}
  You are both home, you silly
{%- else -%}
  Anne Therese is at {{ states("device_tracker.anne_therese") }}
  Paulus is at {{ states("device_tracker.paulus") }}
{%- endif %}

For loop example:
{% for state in states.sensor -%}
  {%- if loop.first %}The {% elif loop.last %} and the {% else %}, the {% endif -%}
  {{ state.name | lower }} is {{state.state_with_unit}}
{%- endfor %}.`,
        /* eslint-enable max-len */
      },

      processed: {
        type: String,
        value: "",
      },
    };
  }

  ready() {
    super.ready();
    this.renderTemplate();
  }

  computeFormClasses(narrow) {
    return narrow ? "content fit" : "content fit layout horizontal";
  }

  computeRenderedClasses(error) {
    return error ? "error rendered" : "rendered";
  }

  templateChanged(ev) {
    this.template = ev.detail.value;
    if (this.error) {
      this.error = false;
    }
    this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(
      this._debouncer,
      _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(500),
      () => {
        this.renderTemplate();
      }
    );
  }

  renderTemplate() {
    this.rendering = true;

    this.hass.callApi("POST", "template", { template: this.template }).then(
      function(processed) {
        this.processed = processed;
        this.rendering = false;
      }.bind(this),
      function(error) {
        this.processed =
          (error && error.body && error.body.message) ||
          "Unknown error rendering template";
        this.error = true;
        this.rendering = false;
      }.bind(this)
    );
  }
}

customElements.define("developer-tools-template", HaPanelDevTemplate);


/***/ }),

/***/ "./src/resources/codemirror.ondemand.ts":
/*!**********************************************!*\
  !*** ./src/resources/codemirror.ondemand.ts ***!
  \**********************************************/
/*! exports provided: loadCodeMirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCodeMirror", function() { return loadCodeMirror; });
let loaded;
const loadCodeMirror = async () => {
    if (!loaded) {
        loaded = Promise.all(/*! import() | codemirror */[__webpack_require__.e("vendors~codemirror"), __webpack_require__.e("codemirror")]).then(__webpack_require__.bind(null, /*! ./codemirror */ "./src/resources/codemirror.ts"));
    }
    return loaded;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL3RlbXBsYXRlL2RldmVsb3Blci10b29scy10ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL2NvZGVtaXJyb3Iub25kZW1hbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICcuL3BhcGVyLXNwaW5uZXItc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlclNwaW5uZXJCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1zcGlubmVyLWJlaGF2aW9yLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLXNwaW5uZXItc3R5bGVzXCI+PC9zdHlsZT5cblxuICA8ZGl2IGlkPVwic3Bpbm5lckNvbnRhaW5lclwiIGNsYXNzLW5hbWU9XCJbW19fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXMoYWN0aXZlLCBfX2Nvb2xpbmdEb3duKV1dXCIgb24tYW5pbWF0aW9uZW5kPVwiX19yZXNldFwiIG9uLXdlYmtpdC1hbmltYXRpb24tZW5kPVwiX19yZXNldFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUHJvZ3Jlc3MgJlxuYWN0aXZpdHldKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9wcm9ncmVzcy1hY3Rpdml0eS5odG1sKVxuXG5FbGVtZW50IHByb3ZpZGluZyBhIG11bHRpcGxlIGNvbG9yIG1hdGVyaWFsIGRlc2lnbiBjaXJjdWxhciBzcGlubmVyLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuVGhlIGRlZmF1bHQgc3Bpbm5lciBjeWNsZXMgYmV0d2VlbiBmb3VyIGxheWVycyBvZiBjb2xvcnM7IGJ5IGRlZmF1bHQgdGhleSBhcmVcbmJsdWUsIHJlZCwgeWVsbG93IGFuZCBncmVlbi4gSXQgY2FuIGJlIGN1c3RvbWl6ZWQgdG8gY3ljbGUgYmV0d2VlbiBmb3VyXG5kaWZmZXJlbnQgY29sb3JzLiBVc2UgPHBhcGVyLXNwaW5uZXItbGl0ZT4gZm9yIHNpbmdsZSBjb2xvciBzcGlubmVycy5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQWx0IGF0dHJpYnV0ZSBzaG91bGQgYmUgc2V0IHRvIHByb3ZpZGUgYWRlcXVhdGUgY29udGV4dCBmb3IgYWNjZXNzaWJpbGl0eS4gSWZcbm5vdCBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG8gJ2xvYWRpbmcnLiBFbXB0eSBhbHQgY2FuIGJlIHByb3ZpZGVkIHRvIG1hcmsgdGhlXG5lbGVtZW50IGFzIGRlY29yYXRpdmUgaWYgYWx0ZXJuYXRpdmUgY29udGVudCBpcyBwcm92aWRlZCBpbiBhbm90aGVyIGZvcm0gKGUuZy4gYVxudGV4dCBibG9jayBmb2xsb3dpbmcgdGhlIHNwaW5uZXIpLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWx0PVwiTG9hZGluZyBjb250YWN0cyBsaXN0XCIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMS1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZmlyc3Qgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ibHVlLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMi1jb2xvcmAgfCBDb2xvciBvZiB0aGUgc2Vjb25kIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtcmVkLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMy1jb2xvcmAgfCBDb2xvciBvZiB0aGUgdGhpcmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS15ZWxsb3ctNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci00LWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmb3VydGggc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ncmVlbi01MDBgXG5gLS1wYXBlci1zcGlubmVyLXN0cm9rZS13aWR0aGAgfCBUaGUgd2lkdGggb2YgdGhlIHNwaW5uZXIgc3Ryb2tlIHwgM3B4XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItc3Bpbm5lclxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItc3Bpbm5lcicsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJTcGlubmVyQmVoYXZpb3JdXG59KTtcbiIsImltcG9ydCB7IGxvYWRDb2RlTWlycm9yIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9jb2RlbWlycm9yLm9uZGVtYW5kXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBVcGRhdGluZ0VsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tIFwiY29kZW1pcnJvclwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImVkaXRvci1zYXZlXCI6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcImhhLWNvZGUtZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSGFDb2RlRWRpdG9yIGV4dGVuZHMgVXBkYXRpbmdFbGVtZW50IHtcbiAgcHVibGljIGNvZGVtaXJyb3I/OiBFZGl0b3I7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBtb2RlPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgYXV0b2ZvY3VzID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBydGwgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGVycm9yID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3ZhbHVlID0gXCJcIjtcblxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvZGVtaXJyb3IgPyB0aGlzLmNvZGVtaXJyb3IuZ2V0VmFsdWUoKSA6IHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBoYXNDb21tZW50cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5jbS1jb21tZW50XCIpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKCF0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb2RlbWlycm9yLnJlZnJlc2goKTtcbiAgICBpZiAodGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3IuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmICghdGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJtb2RlXCIpKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0T3B0aW9uKFwibW9kZVwiLCB0aGlzLm1vZGUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImF1dG9mb2N1c1wiKSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldE9wdGlvbihcImF1dG9mb2N1c1wiLCB0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIl92YWx1ZVwiKSAmJiB0aGlzLl92YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJydGxcIikpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRPcHRpb24oXCJndXR0ZXJzXCIsIHRoaXMuX2NhbGNHdXR0ZXJzKCkpO1xuICAgICAgdGhpcy5fc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiZXJyb3JcIikpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImVycm9yLXN0YXRlXCIsIHRoaXMuZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2xvYWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2xvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbG9hZGVkID0gYXdhaXQgbG9hZENvZGVNaXJyb3IoKTtcblxuICAgIGNvbnN0IGNvZGVNaXJyb3IgPSBsb2FkZWQuY29kZU1pcnJvcjtcblxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xuXG4gICAgc2hhZG93Um9vdCEuaW5uZXJIVE1MID0gYFxuICAgIDxzdHlsZT5cbiAgICAgICR7bG9hZGVkLmNvZGVNaXJyb3JDc3N9XG4gICAgICAuQ29kZU1pcnJvciB7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY29kZS1taXJyb3ItaGVpZ2h0LCBhdXRvKTtcbiAgICAgICAgZGlyZWN0aW9uOiB2YXIoLS1jb2RlLW1pcnJvci1kaXJlY3Rpb24sIGx0cik7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1zY3JvbGwge1xuICAgICAgICBtYXgtaGVpZ2h0OiB2YXIoLS1jb2RlLW1pcnJvci1tYXgtaGVpZ2h0LCAtLWNvZGUtbWlycm9yLWhlaWdodCk7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBib3JkZXItcmlnaHQ7XG4gICAgICB9XG4gICAgICA6aG9zdCguZXJyb3Itc3RhdGUpIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWVycm9yLXN0YXRlLWNvbG9yLCByZWQpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3ItZm9jdXNlZCAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1saW5lbnVtYmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICAucnRsIC5Db2RlTWlycm9yLXZzY3JvbGxiYXIge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgLnJ0bC1ndXR0ZXIge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPmA7XG5cbiAgICB0aGlzLmNvZGVtaXJyb3IgPSBjb2RlTWlycm9yKHNoYWRvd1Jvb3QsIHtcbiAgICAgIHZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgICAgdGFiU2l6ZTogMixcbiAgICAgIG1vZGU6IHRoaXMubW9kZSxcbiAgICAgIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlLFxuICAgICAgdmlld3BvcnRNYXJnaW46IEluZmluaXR5LFxuICAgICAgZXh0cmFLZXlzOiB7XG4gICAgICAgIFRhYjogXCJpbmRlbnRNb3JlXCIsXG4gICAgICAgIFwiU2hpZnQtVGFiXCI6IFwiaW5kZW50TGVzc1wiLFxuICAgICAgfSxcbiAgICAgIGd1dHRlcnM6IHRoaXMuX2NhbGNHdXR0ZXJzKCksXG4gICAgfSk7XG4gICAgdGhpcy5fc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk7XG4gICAgdGhpcy5jb2RlbWlycm9yIS5vbihcImNoYW5nZXNcIiwgKCkgPT4gdGhpcy5fb25DaGFuZ2UoKSk7XG4gIH1cblxuICBwcml2YXRlIF9vbkNoYW5nZSgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlID09PSB0aGlzLl92YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogdGhpcy5fdmFsdWUgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jYWxjR3V0dGVycygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMucnRsID8gW1wicnRsLWd1dHRlclwiLCBcIkNvZGVNaXJyb3ItbGluZW51bWJlcnNcIl0gOiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFNjcm9sbEJhckRpcmVjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3IuZ2V0V3JhcHBlckVsZW1lbnQoKS5jbGFzc0xpc3QudG9nZ2xlKFwicnRsXCIsIHRoaXMucnRsKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNvZGUtZWRpdG9yXCI6IEhhQ29kZUVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5jbGFzcyBIYVBhbmVsRGV2VGVtcGxhdGUgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlIGlyb24tZmxleCBpcm9uLXBvc2l0aW9uaW5nXCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lZGl0LXBhbmUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lZGl0LXBhbmUgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuaG9yaXpvbnRhbCAuZWRpdC1wYW5lIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZW5kZXItcGFuZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlbmRlci1zcGlubmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZW5kZXJlZCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb2RlMTtcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAucmVuZGVyZWQuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlRm9ybUNsYXNzZXMobmFycm93KV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXBhbmVcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRlbXBsYXRlcyBhcmUgcmVuZGVyZWQgdXNpbmcgdGhlIEppbmphMiB0ZW1wbGF0ZSBlbmdpbmUgd2l0aCBzb21lXG4gICAgICAgICAgICDniaflhbvniqwgc3BlY2lmaWMgZXh0ZW5zaW9ucy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vamluamEucG9jb28ub3JnL2RvY3MvZGV2L3RlbXBsYXRlcy9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgPkppbmphMiB0ZW1wbGF0ZSBkb2N1bWVudGF0aW9uPC9hXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9jb25maWd1cmF0aW9uL3RlbXBsYXRpbmcvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgID7niaflhbvniqwgdGVtcGxhdGUgZXh0ZW5zaW9uczwvYVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHA+VGVtcGxhdGUgZWRpdG9yPC9wPlxuICAgICAgICAgIDxoYS1jb2RlLWVkaXRvclxuICAgICAgICAgICAgbW9kZT1cImppbmphMlwiXG4gICAgICAgICAgICB2YWx1ZT1cIltbdGVtcGxhdGVdXVwiXG4gICAgICAgICAgICBlcnJvcj1cIltbZXJyb3JdXVwiXG4gICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgIG9uLXZhbHVlLWNoYW5nZWQ9XCJ0ZW1wbGF0ZUNoYW5nZWRcIlxuICAgICAgICAgID48L2hhLWNvZGUtZWRpdG9yPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVuZGVyLXBhbmVcIj5cbiAgICAgICAgICA8cGFwZXItc3Bpbm5lclxuICAgICAgICAgICAgY2xhc3M9XCJyZW5kZXItc3Bpbm5lclwiXG4gICAgICAgICAgICBhY3RpdmU9XCJbW3JlbmRlcmluZ11dXCJcbiAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgIDxwcmUgY2xhc3MkPVwiW1tjb21wdXRlUmVuZGVyZWRDbGFzc2VzKGVycm9yKV1dXCI+W1twcm9jZXNzZWRdXTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgZXJyb3I6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgcmVuZGVyaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgICAgICB2YWx1ZTogYEltaXRhdGUgYXZhaWxhYmxlIHZhcmlhYmxlczpcbnslIHNldCBteV90ZXN0X2pzb24gPSB7XG4gIFwidGVtcGVyYXR1cmVcIjogMjUsXG4gIFwidW5pdFwiOiBcIsKwQ1wiXG59ICV9XG5cblRoZSB0ZW1wZXJhdHVyZSBpcyB7eyBteV90ZXN0X2pzb24udGVtcGVyYXR1cmUgfX0ge3sgbXlfdGVzdF9qc29uLnVuaXQgfX0uXG5cbnslIGlmIGlzX3N0YXRlKFwiZGV2aWNlX3RyYWNrZXIucGF1bHVzXCIsIFwiaG9tZVwiKSBhbmRcbiAgICAgIGlzX3N0YXRlKFwiZGV2aWNlX3RyYWNrZXIuYW5uZV90aGVyZXNlXCIsIFwiaG9tZVwiKSAtJX1cbiAgWW91IGFyZSBib3RoIGhvbWUsIHlvdSBzaWxseVxueyUtIGVsc2UgLSV9XG4gIEFubmUgVGhlcmVzZSBpcyBhdCB7eyBzdGF0ZXMoXCJkZXZpY2VfdHJhY2tlci5hbm5lX3RoZXJlc2VcIikgfX1cbiAgUGF1bHVzIGlzIGF0IHt7IHN0YXRlcyhcImRldmljZV90cmFja2VyLnBhdWx1c1wiKSB9fVxueyUtIGVuZGlmICV9XG5cbkZvciBsb29wIGV4YW1wbGU6XG57JSBmb3Igc3RhdGUgaW4gc3RhdGVzLnNlbnNvciAtJX1cbiAgeyUtIGlmIGxvb3AuZmlyc3QgJX1UaGUgeyUgZWxpZiBsb29wLmxhc3QgJX0gYW5kIHRoZSB7JSBlbHNlICV9LCB0aGUgeyUgZW5kaWYgLSV9XG4gIHt7IHN0YXRlLm5hbWUgfCBsb3dlciB9fSBpcyB7e3N0YXRlLnN0YXRlX3dpdGhfdW5pdH19XG57JS0gZW5kZm9yICV9LmAsXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuICAgICAgfSxcblxuICAgICAgcHJvY2Vzc2VkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoKTtcbiAgfVxuXG4gIGNvbXB1dGVGb3JtQ2xhc3NlcyhuYXJyb3cpIHtcbiAgICByZXR1cm4gbmFycm93ID8gXCJjb250ZW50IGZpdFwiIDogXCJjb250ZW50IGZpdCBsYXlvdXQgaG9yaXpvbnRhbFwiO1xuICB9XG5cbiAgY29tcHV0ZVJlbmRlcmVkQ2xhc3NlcyhlcnJvcikge1xuICAgIHJldHVybiBlcnJvciA/IFwiZXJyb3IgcmVuZGVyZWRcIiA6IFwicmVuZGVyZWRcIjtcbiAgfVxuXG4gIHRlbXBsYXRlQ2hhbmdlZChldikge1xuICAgIHRoaXMudGVtcGxhdGUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKHRoaXMuZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fZGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgdGhpcy5fZGVib3VuY2VyLFxuICAgICAgdGltZU91dC5hZnRlcig1MDApLFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclRlbXBsYXRlKCkge1xuICAgIHRoaXMucmVuZGVyaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuaGFzcy5jYWxsQXBpKFwiUE9TVFwiLCBcInRlbXBsYXRlXCIsIHsgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUgfSkudGhlbihcbiAgICAgIGZ1bmN0aW9uKHByb2Nlc3NlZCkge1xuICAgICAgICB0aGlzLnByb2Nlc3NlZCA9IHByb2Nlc3NlZDtcbiAgICAgICAgdGhpcy5yZW5kZXJpbmcgPSBmYWxzZTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkID1cbiAgICAgICAgICAoZXJyb3IgJiYgZXJyb3IuYm9keSAmJiBlcnJvci5ib2R5Lm1lc3NhZ2UpIHx8XG4gICAgICAgICAgXCJVbmtub3duIGVycm9yIHJlbmRlcmluZyB0ZW1wbGF0ZVwiO1xuICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJpbmcgPSBmYWxzZTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZGV2ZWxvcGVyLXRvb2xzLXRlbXBsYXRlXCIsIEhhUGFuZWxEZXZUZW1wbGF0ZSk7XG4iLCJpbnRlcmZhY2UgTG9hZGVkQ29kZU1pcnJvciB7XG4gIGNvZGVNaXJyb3I6IGFueTtcbiAgY29kZU1pcnJvckNzczogYW55O1xufVxuXG5sZXQgbG9hZGVkOiBQcm9taXNlPExvYWRlZENvZGVNaXJyb3I+O1xuXG5leHBvcnQgY29uc3QgbG9hZENvZGVNaXJyb3IgPSBhc3luYyAoKTogUHJvbWlzZTxMb2FkZWRDb2RlTWlycm9yPiA9PiB7XG4gIGlmICghbG9hZGVkKSB7XG4gICAgbG9hZGVkID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29kZW1pcnJvclwiICovIFwiLi9jb2RlbWlycm9yXCIpO1xuICB9XG4gIHJldHVybiBsb2FkZWQ7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQ0E7QUFDQTtBQWVBO0FBQUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFrSUE7QUFoSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0SUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDak1BO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==