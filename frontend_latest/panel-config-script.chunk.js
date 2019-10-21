(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-script"],{

/***/ "./node_modules/@polymer/paper-item/paper-item-behavior.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-behavior.js ***!
  \*****************************************************************/
/*! exports provided: PaperItemBehaviorImpl, PaperItemBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehaviorImpl", function() { return PaperItemBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehavior", function() { return PaperItemBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
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
`PaperItemBehavior` is a convenience behavior shared by <paper-item> and
<paper-icon-item> that manages the shared control states and attributes of
the items.
*/
/** @polymerBehavior PaperItemBehavior */
const PaperItemBehaviorImpl = {
  hostAttributes: {role: 'option', tabindex: '0'}
};

/** @polymerBehavior */
const PaperItemBehavior =
    [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], PaperItemBehaviorImpl];


/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-shared-styles.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
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




const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);


/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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
[Lists](https://www.google.com/design/spec/components/lists.html)

`<paper-item>` is an interactive list item. By default, it is a horizontal
flexbox.

    <paper-item>Item</paper-item>

Use this element with `<paper-item-body>` to make Material Design styled
two-line and three-line items.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
      <iron-icon icon="warning"></iron-icon>
    </paper-item>

To use `paper-item` as a link, wrap it in an anchor tag. Since `paper-item` will
already receive focus, you may want to prevent the anchor tag from receiving
focus as well by setting its tabindex to -1.

    <a href="https://www.polymer-project.org/" tabindex="-1">
      <paper-item raised>Polymer Project</paper-item>
    </a>

If you are concerned about performance and want to use `paper-item` in a
`paper-listbox` with many items, you can just use a native `button` with the
`paper-item` class applied (provided you have correctly included the shared
styles):

    <style is="custom-style" include="paper-item-shared-styles"></style>

    <paper-listbox>
      <button class="paper-item" role="option">Inbox</button>
      <button class="paper-item" role="option">Starred</button>
      <button class="paper-item" role="option">Sent mail</button>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-min-height` | Minimum height of the item | `48px`
`--paper-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

### Accessibility

This element has `role="listitem"` by default. Depending on usage, it may be
more appropriate to set `role="menuitem"`, `role="menuitemcheckbox"` or
`role="menuitemradio"`.

    <paper-item role="menuitemcheckbox">
      <paper-item-body>
        Show your status
      </paper-item-body>
      <paper-checkbox></paper-checkbox>
    </paper-item>

@group Paper Elements
@element paper-item
@demo demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,

  is: 'paper-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperItemBehavior"]]
});


/***/ }),

/***/ "./src/data/script.ts":
/*!****************************!*\
  !*** ./src/data/script.ts ***!
  \****************************/
/*! exports provided: triggerScript, deleteScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerScript", function() { return triggerScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScript", function() { return deleteScript; });
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");

const triggerScript = (hass, entityId, variables) => hass.callService("script", Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(entityId), variables);
const deleteScript = (hass, objectId) => hass.callApi("DELETE", `config/script/config/${objectId}`);


/***/ }),

/***/ "./src/mixins/navigate-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/navigate-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");



/*
 * @polymerMixin
 * @appliesMixin EventsMixin
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends superClass {
      navigate(...args) {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])(this, ...args);
      }
    }
));


/***/ }),

/***/ "./src/panels/config/js/script.tsx":
/*!*****************************************!*\
  !*** ./src/panels/config/js/script.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScriptEditor; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _script_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script/index */ "./src/panels/config/js/script/index.tsx");





class ScriptEditor extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.sequenceChanged = this.sequenceChanged.bind(this);
    }
    onChange(ev) {
        this.props.onChange(Object.assign(Object.assign({}, this.props.script), { [ev.target.name]: ev.target.value }));
    }
    sequenceChanged(sequence) {
        this.props.onChange(Object.assign(Object.assign({}, this.props.script), { sequence }));
    }
    // @ts-ignore
    render({ script, isWide, hass, localize }) {
        const { alias, sequence } = script;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", { "is-wide": isWide },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { slot: "header" }, alias),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { slot: "introduction" }, "Use scripts to execute a sequence of actions."),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null,
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-content" },
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", { label: "Name", name: "alias", value: alias, "onvalue-changed": this.onChange })))),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", { "is-wide": isWide },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { slot: "header" }, "Sequence"),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { slot: "introduction" },
                    "The sequence of actions of this script.",
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null,
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "https://home-assistant.io/docs/scripts/", target: "_blank" }, "Learn more about available actions."))),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_script_index__WEBPACK_IMPORTED_MODULE_4__["default"], { script: sequence, onChange: this.sequenceChanged, hass: hass, localize: localize }))));
    }
}


/***/ }),

/***/ "./src/panels/config/script/ha-config-script.js":
/*!******************************************************!*\
  !*** ./src/panels/config/script/ha-config-script.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_script_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-script-editor */ "./src/panels/config/script/ha-script-editor.js");
/* harmony import */ var _ha_script_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-script-picker */ "./src/panels/config/script/ha-script-picker.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");










class HaConfigScript extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        ha-script-picker,
        ha-script-editor {
          height: 100%;
        }
      </style>
      <app-route
        route="[[route]]"
        pattern="/edit/:script"
        data="{{_routeData}}"
        active="{{_edittingScript}}"
      ></app-route>
      <app-route
        route="[[route]]"
        pattern="/new"
        active="{{_creatingNew}}"
      ></app-route>

      <template is="dom-if" if="[[!showEditor]]">
        <ha-script-picker
          hass="[[hass]]"
          scripts="[[scripts]]"
          is-wide="[[isWide]]"
        ></ha-script-picker>
      </template>

      <template is="dom-if" if="[[showEditor]]" restamp="">
        <ha-script-editor
          hass="[[hass]]"
          script="[[script]]"
          is-wide="[[isWide]]"
          creating-new="[[_creatingNew]]"
        ></ha-script-editor>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      route: Object,
      isWide: Boolean,
      _routeData: Object,
      _routeMatches: Boolean,
      _creatingNew: Boolean,
      _edittingScript: Boolean,

      scripts: {
        type: Array,
        computed: "computeScripts(hass)",
      },

      script: {
        type: Object,
        computed: "computeScript(scripts, _edittingScript, _routeData)",
      },

      showEditor: {
        type: Boolean,
        computed: "computeShowEditor(_edittingScript, _creatingNew)",
      },
    };
  }

  computeScript(scripts, edittingAddon, routeData) {
    if (!scripts || !edittingAddon) {
      return null;
    }
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].entity_id === routeData.script) {
        return scripts[i];
      }
    }
    return null;
  }

  computeScripts(hass) {
    var scripts = [];

    Object.keys(hass.states).forEach(function(key) {
      var entity = hass.states[key];

      if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["computeStateDomain"])(entity) === "script") {
        scripts.push(entity);
      }
    });

    return scripts.sort(function entitySortBy(entityA, entityB) {
      var nameA = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(entityA);
      var nameB = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(entityB);

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  computeShowEditor(_edittingScript, _creatingNew) {
    return _creatingNew || _edittingScript;
  }
}

customElements.define("ha-config-script", HaConfigScript);


/***/ }),

/***/ "./src/panels/config/script/ha-script-editor.js":
/*!******************************************************!*\
  !*** ./src/panels/config/script/ha-script-editor.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../js/script */ "./src/panels/config/js/script.tsx");
/* harmony import */ var _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/preact/unmount */ "./src/common/preact/unmount.ts");
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../data/script */ "./src/data/script.ts");






















function ScriptEditor(mountEl, props, mergeEl) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_5__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_5__["h"])(_js_script__WEBPACK_IMPORTED_MODULE_9__["default"], props), mountEl, mergeEl);
}

/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin NavigateMixin
 */
class HaScriptEditor extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_13__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="ha-style">
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--google-red-500);
        }
        .content {
          padding-bottom: 20px;
        }
        .triggers,
        .script {
          margin-top: -16px;
        }
        .triggers ha-card,
        .script ha-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        .card-menu {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          color: var(--primary-text-color);
        }
        .card-menu paper-item {
          cursor: pointer;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          margin-bottom: -80px;
          transition: margin-bottom 0.3s;
        }

        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        ha-fab[dirty] {
          margin-bottom: 0;
        }

        ha-fab[rtl] {
          right: auto;
          left: 16px;
        }

        ha-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      </style>
      <ha-app-layout has-scrolling-region="">
        <app-header slot="header" fixed="">
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              on-click="backTapped"
            ></ha-paper-icon-button-arrow-prev>
            <div main-title>[[computeHeader(script)]]</div>
            <template is="dom-if" if="[[!creatingNew]]">
              <paper-icon-button
                icon="hass:delete"
                on-click="_delete"
              ></paper-icon-button>
            </template>
          </app-toolbar>
        </app-header>
        <div class="content">
          <template is="dom-if" if="[[errors]]">
            <div class="errors">[[errors]]</div>
          </template>
          <div id="root"></div>
        </div>
        <ha-fab
          slot="fab"
          is-wide$="[[isWide]]"
          dirty$="[[dirty]]"
          icon="hass:content-save"
          title="[[localize('ui.common.save')]]"
          on-click="saveScript"
          rtl$="[[rtl]]"
        ></ha-fab>
      </ha-app-layout>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      errors: {
        type: Object,
        value: null,
      },

      dirty: {
        type: Boolean,
        value: false,
      },

      config: {
        type: Object,
        value: null,
      },

      script: {
        type: Object,
        observer: "scriptChanged",
      },

      creatingNew: {
        type: Boolean,
        observer: "creatingNewChanged",
      },

      isWide: {
        type: Boolean,
        observer: "_updateComponent",
      },

      _rendered: {
        type: Object,
        value: null,
      },

      _renderScheduled: {
        type: Boolean,
        value: false,
      },

      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(hass)",
      },
    };
  }

  ready() {
    this.configChanged = this.configChanged.bind(this);
    super.ready(); // This call will initialize preact.
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._rendered) {
      Object(_common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__["default"])(this._rendered);
      this._rendered = null;
    }
  }

  configChanged(config) {
    // onChange gets called a lot during initial rendering causing recursing calls.
    if (this._rendered === null) return;
    this.config = config;
    this.errors = null;
    this.dirty = true;
    this._updateComponent();
  }

  scriptChanged(newVal, oldVal) {
    if (!newVal) return;
    if (!this.hass) {
      setTimeout(() => this.scriptChanged(newVal, oldVal), 0);
      return;
    }
    if (oldVal && oldVal.entity_id === newVal.entity_id) {
      return;
    }
    this.hass
      .callApi(
        "get",
        "config/script/config/" + Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__["computeObjectId"])(newVal.entity_id)
      )
      .then(
        (config) => {
          // Normalize data: ensure sequence is a list
          // Happens when people copy paste their scripts into the config
          var value = config.sequence;
          if (value && !Array.isArray(value)) {
            config.sequence = [value];
          }

          this.dirty = false;
          this.config = config;
          this._updateComponent();
        },
        () => {
          alert(
            this.hass.localize(
              "ui.panel.config.script.editor.load_error_not_editable"
            )
          );
          history.back();
        }
      );
  }

  creatingNewChanged(newVal) {
    if (!newVal) {
      return;
    }
    this.dirty = false;
    this.config = {
      alias: this.hass.localize("ui.panel.config.script.editor.default_name"),
      sequence: [{ service: "", data: {} }],
    };
    this._updateComponent();
  }

  backTapped() {
    if (
      this.dirty &&
      // eslint-disable-next-line
      !confirm(
        this.hass.localize("ui.panel.config.common.editor.confirm_unsaved")
      )
    ) {
      return;
    }
    history.back();
  }

  _updateComponent() {
    if (this._renderScheduled || !this.hass || !this.config) return;
    this._renderScheduled = true;
    Promise.resolve().then(() => {
      this._rendered = ScriptEditor(
        this.$.root,
        {
          script: this.config,
          onChange: this.configChanged,
          isWide: this.isWide,
          hass: this.hass,
          localize: this.localize,
        },
        this._rendered
      );
      this._renderScheduled = false;
    });
  }

  async _delete() {
    if (
      !confirm(
        this.hass.localize("ui.panel.config.script.editor.delete_confirm")
      )
    ) {
      return;
    }
    await Object(_data_script__WEBPACK_IMPORTED_MODULE_16__["deleteScript"])(this.hass, Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__["computeObjectId"])(this.script.entity_id));
    history.back();
  }

  saveScript() {
    var id = this.creatingNew
      ? "" + Date.now()
      : Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__["computeObjectId"])(this.script.entity_id);
    this.hass.callApi("post", "config/script/config/" + id, this.config).then(
      () => {
        this.dirty = false;

        if (this.creatingNew) {
          this.navigate(`/config/script/edit/${id}`, true);
        }
      },
      (errors) => {
        this.errors = errors.body.message;
        throw errors;
      }
    );
  }

  computeHeader(script) {
    return script
      ? this.hass.localize(
          "ui.panel.config.script.editor.header",
          "name",
          Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__["computeStateName"])(script)
        )
      : this.hass.localize("ui.panel.config.script.editor.default_name");
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(hass);
  }
}

customElements.define("ha-script-editor", HaScriptEditor);


/***/ }),

/***/ "./src/panels/config/script/ha-script-picker.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/script/ha-script-picker.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/script */ "./src/data/script.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../util/toast */ "./src/util/toast.ts");













let HaScriptPicker = class HaScriptPicker extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hass-subpage
        .header=${this.hass.localize("ui.panel.config.script.caption")}
      >
        <ha-config-section .isWide=${this.isWide}>
          <div slot="header">
            ${this.hass.localize("ui.panel.config.script.picker.header")}
          </div>
          <div slot="introduction">
            ${this.hass.localize("ui.panel.config.script.picker.introduction")}
            <p>
              <a
                href="https://home-assistant.io/docs/scripts/editor/"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.script.picker.learn_more")}
              </a>
            </p>
          </div>

          <ha-card
            header="${this.hass.localize("ui.panel.config.script.picker.pick_script")}"
          >
            ${this.scripts.length === 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                  <div class="card-content">
                    <p>
                      ${this.hass.localize("ui.panel.config.script.picker.no_scripts")}
                    </p>
                  </div>
                `
            : this.scripts.map((script) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                    <div class="script">
                      <paper-icon-button
                        .script=${script}
                        icon="hass:play"
                        @click=${this._runScript}
                      ></paper-icon-button>
                      <paper-item-body>
                        <div>${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(script)}</div>
                      </paper-item-body>
                      <div class="actions">
                        <a href=${`/config/script/edit/${script.entity_id}`}>
                          <paper-icon-button
                            icon="hass:pencil"
                          ></paper-icon-button>
                        </a>
                      </div>
                    </div>
                  `)}
          </ha-card>
        </ha-config-section>

        <a href="/config/script/new">
          <ha-fab
            slot="fab"
            ?is-wide=${this.isWide}
            icon="hass:plus"
            title="${this.hass.localize("ui.panel.config.script.picker.add_script")}"
            ?rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTL"])(this.hass)}
          ></ha-fab>
        </a>
      </hass-subpage>
    `;
    }
    async _runScript(ev) {
        const script = ev.currentTarget.script;
        await Object(_data_script__WEBPACK_IMPORTED_MODULE_11__["triggerScript"])(this.hass, script.entity_id);
        Object(_util_toast__WEBPACK_IMPORTED_MODULE_12__["showToast"])(this, {
            message: this.hass.localize("ui.notification_toast.triggered", "name", Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(script)),
        });
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_10__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
        :host {
          display: block;
        }

        ha-card {
          padding-bottom: 8px;
          margin-bottom: 56px;
        }

        .script {
          display: flex;
          flex-direction: horizontal;
          align-items: center;
          padding: 0 8px;
          margin: 4px 0;
        }

        .script > *:first-child {
          margin-right: 8px;
        }

        .script a[href],
        paper-icon-button {
          color: var(--primary-text-color);
        }

        .actions {
          display: flex;
        }

        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }

        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        ha-fab[rtl] {
          right: auto;
          left: 16px;
        }

        ha-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        a {
          color: var(--primary-color);
        }
      `,
        ];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaScriptPicker.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaScriptPicker.prototype, "scripts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaScriptPicker.prototype, "isWide", void 0);
HaScriptPicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-script-picker")
], HaScriptPicker);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNjcmlwdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvc2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbmF2aWdhdGUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zY3JpcHQvaGEtY29uZmlnLXNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zY3JpcHQvaGEtc2NyaXB0LWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zY3JpcHQvaGEtc2NyaXB0LXBpY2tlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkJ1dHRvblN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWJ1dHRvbi1zdGF0ZS5qcyc7XG5pbXBvcnQge0lyb25Db250cm9sU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5qcyc7XG5cbi8qXG5gUGFwZXJJdGVtQmVoYXZpb3JgIGlzIGEgY29udmVuaWVuY2UgYmVoYXZpb3Igc2hhcmVkIGJ5IDxwYXBlci1pdGVtPiBhbmRcbjxwYXBlci1pY29uLWl0ZW0+IHRoYXQgbWFuYWdlcyB0aGUgc2hhcmVkIGNvbnRyb2wgc3RhdGVzIGFuZCBhdHRyaWJ1dGVzIG9mXG50aGUgaXRlbXMuXG4qL1xuLyoqIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJJdGVtQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckl0ZW1CZWhhdmlvckltcGwgPSB7XG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ29wdGlvbicsIHRhYmluZGV4OiAnMCd9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVySXRlbUJlaGF2aW9yID1cbiAgICBbSXJvbkJ1dHRvblN0YXRlLCBJcm9uQ29udHJvbFN0YXRlLCBQYXBlckl0ZW1CZWhhdmlvckltcGxdO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4kX2RvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0LCAucGFwZXItaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgNDhweCk7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAucGFwZXItaXRlbSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pLCAucGFwZXItaXRlbVtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguaXJvbi1zZWxlY3RlZCksIC5wYXBlci1pdGVtLmlyb24tc2VsZWN0ZWQge1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHQsIGJvbGQpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pLCAucGFwZXItaXRlbVtkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvciwgdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpmb2N1cyksIC5wYXBlci1pdGVtOmZvY3VzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZm9jdXNlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmZvY3VzKTpiZWZvcmUsIC5wYXBlci1pdGVtOmZvY3VzOmJlZm9yZSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG5cbiAgICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1kaXZpZGVyLW9wYWNpdHkpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0xpc3RzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvbGlzdHMuaHRtbClcblxuYDxwYXBlci1pdGVtPmAgaXMgYW4gaW50ZXJhY3RpdmUgbGlzdCBpdGVtLiBCeSBkZWZhdWx0LCBpdCBpcyBhIGhvcml6b250YWxcbmZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5JdGVtPC9wYXBlci1pdGVtPlxuXG5Vc2UgdGhpcyBlbGVtZW50IHdpdGggYDxwYXBlci1pdGVtLWJvZHk+YCB0byBtYWtlIE1hdGVyaWFsIERlc2lnbiBzdHlsZWRcbnR3by1saW5lIGFuZCB0aHJlZS1saW5lIGl0ZW1zLlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UbyB1c2UgYHBhcGVyLWl0ZW1gIGFzIGEgbGluaywgd3JhcCBpdCBpbiBhbiBhbmNob3IgdGFnLiBTaW5jZSBgcGFwZXItaXRlbWAgd2lsbFxuYWxyZWFkeSByZWNlaXZlIGZvY3VzLCB5b3UgbWF5IHdhbnQgdG8gcHJldmVudCB0aGUgYW5jaG9yIHRhZyBmcm9tIHJlY2VpdmluZ1xuZm9jdXMgYXMgd2VsbCBieSBzZXR0aW5nIGl0cyB0YWJpbmRleCB0byAtMS5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnL1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgIDxwYXBlci1pdGVtIHJhaXNlZD5Qb2x5bWVyIFByb2plY3Q8L3BhcGVyLWl0ZW0+XG4gICAgPC9hPlxuXG5JZiB5b3UgYXJlIGNvbmNlcm5lZCBhYm91dCBwZXJmb3JtYW5jZSBhbmQgd2FudCB0byB1c2UgYHBhcGVyLWl0ZW1gIGluIGFcbmBwYXBlci1saXN0Ym94YCB3aXRoIG1hbnkgaXRlbXMsIHlvdSBjYW4ganVzdCB1c2UgYSBuYXRpdmUgYGJ1dHRvbmAgd2l0aCB0aGVcbmBwYXBlci1pdGVtYCBjbGFzcyBhcHBsaWVkIChwcm92aWRlZCB5b3UgaGF2ZSBjb3JyZWN0bHkgaW5jbHVkZWQgdGhlIHNoYXJlZFxuc3R5bGVzKTpcblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuXG4gICAgPHBhcGVyLWxpc3Rib3g+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5JbmJveDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U3RhcnJlZDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U2VudCBtYWlsPC9idXR0b24+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIHRoZSBpdGVtIHwgYDQ4cHhgXG5gLS1wYXBlci1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cblRoaXMgZWxlbWVudCBoYXMgYHJvbGU9XCJsaXN0aXRlbVwiYCBieSBkZWZhdWx0LiBEZXBlbmRpbmcgb24gdXNhZ2UsIGl0IG1heSBiZVxubW9yZSBhcHByb3ByaWF0ZSB0byBzZXQgYHJvbGU9XCJtZW51aXRlbVwiYCwgYHJvbGU9XCJtZW51aXRlbWNoZWNrYm94XCJgIG9yXG5gcm9sZT1cIm1lbnVpdGVtcmFkaW9cImAuXG5cbiAgICA8cGFwZXItaXRlbSByb2xlPVwibWVudWl0ZW1jaGVja2JveFwiPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgU2hvdyB5b3VyIHN0YXR1c1xuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8cGFwZXItY2hlY2tib3g+PC9wYXBlci1jaGVja2JveD5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaXRlbVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50QWN0aW9uIHtcbiAgZXZlbnQ6IHN0cmluZztcbiAgZXZlbnRfZGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIGV2ZW50X2RhdGFfdGVtcGxhdGU/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUFjdGlvbiB7XG4gIGRldmljZV9pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCB0cmlnZ2VyU2NyaXB0ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB2YXJpYWJsZXM/OiB7fVxuKSA9PiBoYXNzLmNhbGxTZXJ2aWNlKFwic2NyaXB0XCIsIGNvbXB1dGVPYmplY3RJZChlbnRpdHlJZCksIHZhcmlhYmxlcyk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVTY3JpcHQgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgb2JqZWN0SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvc2NyaXB0L2NvbmZpZy8ke29iamVjdElkfWApO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbi8qXG4gKiBAcG9seW1lck1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBuYXZpZ2F0ZSguLi5hcmdzKSB7XG4gICAgICAgIG5hdmlnYXRlKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBTY3JpcHQgZnJvbSBcIi4vc2NyaXB0L2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmlwdEVkaXRvciBleHRlbmRzIENvbXBvbmVudDx7XG4gIG9uQ2hhbmdlOiAoLi4uYXJnczogYW55W10pID0+IGFueTtcbiAgc2NyaXB0OiBhbnk7XG4gIGlzV2lkZTogYW55O1xuICBoYXNzOiBhbnk7XG4gIGxvY2FsaXplOiBhbnk7XG59PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VxdWVuY2VDaGFuZ2VkID0gdGhpcy5zZXF1ZW5jZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZShldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgLi4udGhpcy5wcm9wcy5zY3JpcHQsXG4gICAgICBbZXYudGFyZ2V0Lm5hbWVdOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2VxdWVuY2VDaGFuZ2VkKHNlcXVlbmNlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IC4uLnRoaXMucHJvcHMuc2NyaXB0LCBzZXF1ZW5jZSB9KTtcbiAgfVxuXG4gIC8vIEB0cy1pZ25vcmVcbiAgcHVibGljIHJlbmRlcih7IHNjcmlwdCwgaXNXaWRlLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBhbGlhcywgc2VxdWVuY2UgfSA9IHNjcmlwdDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT17aXNXaWRlfT5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+e2FsaWFzfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICBVc2Ugc2NyaXB0cyB0byBleGVjdXRlIGEgc2VxdWVuY2Ugb2YgYWN0aW9ucy5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImFsaWFzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWxpYXN9XG4gICAgICAgICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPXtpc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5TZXF1ZW5jZTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICBUaGUgc2VxdWVuY2Ugb2YgYWN0aW9ucyBvZiB0aGlzIHNjcmlwdC5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ob21lLWFzc2lzdGFudC5pby9kb2NzL3NjcmlwdHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgTGVhcm4gbW9yZSBhYm91dCBhdmFpbGFibGUgYWN0aW9ucy5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8U2NyaXB0XG4gICAgICAgICAgICBzY3JpcHQ9e3NlcXVlbmNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2VxdWVuY2VDaGFuZ2VkfVxuICAgICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLXJvdXRlL2FwcC1yb3V0ZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1zY3JpcHQtZWRpdG9yXCI7XG5pbXBvcnQgXCIuL2hhLXNjcmlwdC1waWNrZXJcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcblxuY2xhc3MgSGFDb25maWdTY3JpcHQgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGhhLXNjcmlwdC1waWNrZXIsXG4gICAgICAgIGhhLXNjcmlwdC1lZGl0b3Ige1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBwYXR0ZXJuPVwiL2VkaXQvOnNjcmlwdFwiXG4gICAgICAgIGRhdGE9XCJ7e19yb3V0ZURhdGF9fVwiXG4gICAgICAgIGFjdGl2ZT1cInt7X2VkaXR0aW5nU2NyaXB0fX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuICAgICAgPGFwcC1yb3V0ZVxuICAgICAgICByb3V0ZT1cIltbcm91dGVdXVwiXG4gICAgICAgIHBhdHRlcm49XCIvbmV3XCJcbiAgICAgICAgYWN0aXZlPVwie3tfY3JlYXRpbmdOZXd9fVwiXG4gICAgICA+PC9hcHAtcm91dGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shc2hvd0VkaXRvcl1dXCI+XG4gICAgICAgIDxoYS1zY3JpcHQtcGlja2VyXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBzY3JpcHRzPVwiW1tzY3JpcHRzXV1cIlxuICAgICAgICAgIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCJcbiAgICAgICAgPjwvaGEtc2NyaXB0LXBpY2tlcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzaG93RWRpdG9yXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgIDxoYS1zY3JpcHQtZWRpdG9yXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBzY3JpcHQ9XCJbW3NjcmlwdF1dXCJcbiAgICAgICAgICBpcy13aWRlPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgICAgY3JlYXRpbmctbmV3PVwiW1tfY3JlYXRpbmdOZXddXVwiXG4gICAgICAgID48L2hhLXNjcmlwdC1lZGl0b3I+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHJvdXRlOiBPYmplY3QsXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG4gICAgICBfcm91dGVEYXRhOiBPYmplY3QsXG4gICAgICBfcm91dGVNYXRjaGVzOiBCb29sZWFuLFxuICAgICAgX2NyZWF0aW5nTmV3OiBCb29sZWFuLFxuICAgICAgX2VkaXR0aW5nU2NyaXB0OiBCb29sZWFuLFxuXG4gICAgICBzY3JpcHRzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlU2NyaXB0cyhoYXNzKVwiLFxuICAgICAgfSxcblxuICAgICAgc2NyaXB0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVNjcmlwdChzY3JpcHRzLCBfZWRpdHRpbmdTY3JpcHQsIF9yb3V0ZURhdGEpXCIsXG4gICAgICB9LFxuXG4gICAgICBzaG93RWRpdG9yOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVTaG93RWRpdG9yKF9lZGl0dGluZ1NjcmlwdCwgX2NyZWF0aW5nTmV3KVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVNjcmlwdChzY3JpcHRzLCBlZGl0dGluZ0FkZG9uLCByb3V0ZURhdGEpIHtcbiAgICBpZiAoIXNjcmlwdHMgfHwgIWVkaXR0aW5nQWRkb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzY3JpcHRzW2ldLmVudGl0eV9pZCA9PT0gcm91dGVEYXRhLnNjcmlwdCkge1xuICAgICAgICByZXR1cm4gc2NyaXB0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb21wdXRlU2NyaXB0cyhoYXNzKSB7XG4gICAgdmFyIHNjcmlwdHMgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGVudGl0eSA9IGhhc3Muc3RhdGVzW2tleV07XG5cbiAgICAgIGlmIChjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KSA9PT0gXCJzY3JpcHRcIikge1xuICAgICAgICBzY3JpcHRzLnB1c2goZW50aXR5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzY3JpcHRzLnNvcnQoZnVuY3Rpb24gZW50aXR5U29ydEJ5KGVudGl0eUEsIGVudGl0eUIpIHtcbiAgICAgIHZhciBuYW1lQSA9IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5QSk7XG4gICAgICB2YXIgbmFtZUIgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eUIpO1xuXG4gICAgICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZVNob3dFZGl0b3IoX2VkaXR0aW5nU2NyaXB0LCBfY3JlYXRpbmdOZXcpIHtcbiAgICByZXR1cm4gX2NyZWF0aW5nTmV3IHx8IF9lZGl0dGluZ1NjcmlwdDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctc2NyaXB0XCIsIEhhQ29uZmlnU2NyaXB0KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYS1hcHAtbGF5b3V0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZmFiXCI7XG5cbmltcG9ydCBTY3JpcHQgZnJvbSBcIi4uL2pzL3NjcmlwdFwiO1xuaW1wb3J0IHVubW91bnRQcmVhY3QgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvdW5tb3VudFwiO1xuXG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IE5hdmlnYXRlTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9uYXZpZ2F0ZS1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgeyBkZWxldGVTY3JpcHQgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zY3JpcHRcIjtcblxuZnVuY3Rpb24gU2NyaXB0RWRpdG9yKG1vdW50RWwsIHByb3BzLCBtZXJnZUVsKSB7XG4gIHJldHVybiByZW5kZXIoaChTY3JpcHQsIHByb3BzKSwgbW91bnRFbCwgbWVyZ2VFbCk7XG59XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTmF2aWdhdGVNaXhpblxuICovXG5jbGFzcyBIYVNjcmlwdEVkaXRvciBleHRlbmRzIExvY2FsaXplTWl4aW4oTmF2aWdhdGVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgLmVycm9ycyB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAudHJpZ2dlcnMsXG4gICAgICAgIC5zY3JpcHQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICB9XG4gICAgICAgIC50cmlnZ2VycyBoYS1jYXJkLFxuICAgICAgICAuc2NyaXB0IGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFkZC1jYXJkIG13Yy1idXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1tZW51IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtbWVudSBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbltzbG90PVwiaW50cm9kdWN0aW9uXCJdIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBoYS1mYWIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtODBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4tYm90dG9tIDAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbaXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltkaXJ0eV0ge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbcnRsXSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltydGxdW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1hcHAtbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPVwiXCI+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD1cIlwiPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwiYmFja1RhcHBlZFwiXG4gICAgICAgICAgICA+PC9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2PlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPltbY29tcHV0ZUhlYWRlcihzY3JpcHQpXV08L2Rpdj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shY3JlYXRpbmdOZXddXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RlbGV0ZVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2Vycm9yc11dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JzXCI+W1tlcnJvcnNdXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPGRpdiBpZD1cInJvb3RcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoYS1mYWJcbiAgICAgICAgICBzbG90PVwiZmFiXCJcbiAgICAgICAgICBpcy13aWRlJD1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgIGRpcnR5JD1cIltbZGlydHldXVwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6Y29udGVudC1zYXZlXCJcbiAgICAgICAgICB0aXRsZT1cIltbbG9jYWxpemUoJ3VpLmNvbW1vbi5zYXZlJyldXVwiXG4gICAgICAgICAgb24tY2xpY2s9XCJzYXZlU2NyaXB0XCJcbiAgICAgICAgICBydGwkPVwiW1tydGxdXVwiXG4gICAgICAgID48L2hhLWZhYj5cbiAgICAgIDwvaGEtYXBwLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGVycm9yczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgZGlydHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuXG4gICAgICBzY3JpcHQ6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzY3JpcHRDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBjcmVhdGluZ05ldzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogXCJjcmVhdGluZ05ld0NoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGlzV2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogXCJfdXBkYXRlQ29tcG9uZW50XCIsXG4gICAgICB9LFxuXG4gICAgICBfcmVuZGVyZWQ6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIF9yZW5kZXJTY2hlZHVsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHRoaXMuY29uZmlnQ2hhbmdlZCA9IHRoaXMuY29uZmlnQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHN1cGVyLnJlYWR5KCk7IC8vIFRoaXMgY2FsbCB3aWxsIGluaXRpYWxpemUgcHJlYWN0LlxuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fcmVuZGVyZWQpIHtcbiAgICAgIHVubW91bnRQcmVhY3QodGhpcy5fcmVuZGVyZWQpO1xuICAgICAgdGhpcy5fcmVuZGVyZWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNvbmZpZ0NoYW5nZWQoY29uZmlnKSB7XG4gICAgLy8gb25DaGFuZ2UgZ2V0cyBjYWxsZWQgYSBsb3QgZHVyaW5nIGluaXRpYWwgcmVuZGVyaW5nIGNhdXNpbmcgcmVjdXJzaW5nIGNhbGxzLlxuICAgIGlmICh0aGlzLl9yZW5kZXJlZCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuZXJyb3JzID0gbnVsbDtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLl91cGRhdGVDb21wb25lbnQoKTtcbiAgfVxuXG4gIHNjcmlwdENoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2NyaXB0Q2hhbmdlZChuZXdWYWwsIG9sZFZhbCksIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob2xkVmFsICYmIG9sZFZhbC5lbnRpdHlfaWQgPT09IG5ld1ZhbC5lbnRpdHlfaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcbiAgICAgICAgXCJnZXRcIixcbiAgICAgICAgXCJjb25maWcvc2NyaXB0L2NvbmZpZy9cIiArIGNvbXB1dGVPYmplY3RJZChuZXdWYWwuZW50aXR5X2lkKVxuICAgICAgKVxuICAgICAgLnRoZW4oXG4gICAgICAgIChjb25maWcpID0+IHtcbiAgICAgICAgICAvLyBOb3JtYWxpemUgZGF0YTogZW5zdXJlIHNlcXVlbmNlIGlzIGEgbGlzdFxuICAgICAgICAgIC8vIEhhcHBlbnMgd2hlbiBwZW9wbGUgY29weSBwYXN0ZSB0aGVpciBzY3JpcHRzIGludG8gdGhlIGNvbmZpZ1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGNvbmZpZy5zZXF1ZW5jZTtcbiAgICAgICAgICBpZiAodmFsdWUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBjb25maWcuc2VxdWVuY2UgPSBbdmFsdWVdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgICB0aGlzLl91cGRhdGVDb21wb25lbnQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLmxvYWRfZXJyb3Jfbm90X2VkaXRhYmxlXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICAgIGhpc3RvcnkuYmFjaygpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgY3JlYXRpbmdOZXdDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghbmV3VmFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIGFsaWFzOiB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmVkaXRvci5kZWZhdWx0X25hbWVcIiksXG4gICAgICBzZXF1ZW5jZTogW3sgc2VydmljZTogXCJcIiwgZGF0YToge30gfV0sXG4gICAgfTtcbiAgICB0aGlzLl91cGRhdGVDb21wb25lbnQoKTtcbiAgfVxuXG4gIGJhY2tUYXBwZWQoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5kaXJ0eSAmJlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAhY29uZmlybShcbiAgICAgICAgdGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNvbW1vbi5lZGl0b3IuY29uZmlybV91bnNhdmVkXCIpXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgX3VwZGF0ZUNvbXBvbmVudCgpIHtcbiAgICBpZiAodGhpcy5fcmVuZGVyU2NoZWR1bGVkIHx8ICF0aGlzLmhhc3MgfHwgIXRoaXMuY29uZmlnKSByZXR1cm47XG4gICAgdGhpcy5fcmVuZGVyU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVkID0gU2NyaXB0RWRpdG9yKFxuICAgICAgICB0aGlzLiQucm9vdCxcbiAgICAgICAge1xuICAgICAgICAgIHNjcmlwdDogdGhpcy5jb25maWcsXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMuY29uZmlnQ2hhbmdlZCxcbiAgICAgICAgICBpc1dpZGU6IHRoaXMuaXNXaWRlLFxuICAgICAgICAgIGhhc3M6IHRoaXMuaGFzcyxcbiAgICAgICAgICBsb2NhbGl6ZTogdGhpcy5sb2NhbGl6ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRcbiAgICAgICk7XG4gICAgICB0aGlzLl9yZW5kZXJTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9kZWxldGUoKSB7XG4gICAgaWYgKFxuICAgICAgIWNvbmZpcm0oXG4gICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLmRlbGV0ZV9jb25maXJtXCIpXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IGRlbGV0ZVNjcmlwdCh0aGlzLmhhc3MsIGNvbXB1dGVPYmplY3RJZCh0aGlzLnNjcmlwdC5lbnRpdHlfaWQpKTtcbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIHNhdmVTY3JpcHQoKSB7XG4gICAgdmFyIGlkID0gdGhpcy5jcmVhdGluZ05ld1xuICAgICAgPyBcIlwiICsgRGF0ZS5ub3coKVxuICAgICAgOiBjb21wdXRlT2JqZWN0SWQodGhpcy5zY3JpcHQuZW50aXR5X2lkKTtcbiAgICB0aGlzLmhhc3MuY2FsbEFwaShcInBvc3RcIiwgXCJjb25maWcvc2NyaXB0L2NvbmZpZy9cIiArIGlkLCB0aGlzLmNvbmZpZykudGhlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmNyZWF0aW5nTmV3KSB7XG4gICAgICAgICAgdGhpcy5uYXZpZ2F0ZShgL2NvbmZpZy9zY3JpcHQvZWRpdC8ke2lkfWAsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKGVycm9ycykgPT4ge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycy5ib2R5Lm1lc3NhZ2U7XG4gICAgICAgIHRocm93IGVycm9ycztcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZUhlYWRlcihzY3JpcHQpIHtcbiAgICByZXR1cm4gc2NyaXB0XG4gICAgICA/IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLmhlYWRlclwiLFxuICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgIGNvbXB1dGVTdGF0ZU5hbWUoc2NyaXB0KVxuICAgICAgICApXG4gICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuZWRpdG9yLmRlZmF1bHRfbmFtZVwiKTtcbiAgfVxuXG4gIF9jb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zY3JpcHQtZWRpdG9yXCIsIEhhU2NyaXB0RWRpdG9yKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWZhYlwiO1xuXG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRyaWdnZXJTY3JpcHQgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zY3JpcHRcIjtcbmltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsL3RvYXN0XCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtc2NyaXB0LXBpY2tlclwiKVxuY2xhc3MgSGFTY3JpcHRQaWNrZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2NyaXB0cyE6IEhhc3NFbnRpdHlbXTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICAuaGVhZGVyPSR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5jYXB0aW9uXCIpfVxuICAgICAgPlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT0ke3RoaXMuaXNXaWRlfT5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIuaGVhZGVyXCIpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LnBpY2tlci5pbnRyb2R1Y3Rpb25cIil9XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ob21lLWFzc2lzdGFudC5pby9kb2NzL3NjcmlwdHMvZWRpdG9yL1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LnBpY2tlci5sZWFybl9tb3JlXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgICAgaGVhZGVyPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIucGlja19zY3JpcHRcIlxuICAgICAgICAgICAgKX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5zY3JpcHRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LnBpY2tlci5ub19zY3JpcHRzXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogdGhpcy5zY3JpcHRzLm1hcChcbiAgICAgICAgICAgICAgICAgIChzY3JpcHQpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY3JpcHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zY3JpcHQ9JHtzY3JpcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3J1blNjcmlwdH1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke2NvbXB1dGVTdGF0ZU5hbWUoc2NyaXB0KX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0ke2AvY29uZmlnL3NjcmlwdC9lZGl0LyR7c2NyaXB0LmVudGl0eV9pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cGVuY2lsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxhIGhyZWY9XCIvY29uZmlnL3NjcmlwdC9uZXdcIj5cbiAgICAgICAgICA8aGEtZmFiXG4gICAgICAgICAgICBzbG90PVwiZmFiXCJcbiAgICAgICAgICAgID9pcy13aWRlPSR7dGhpcy5pc1dpZGV9XG4gICAgICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIuYWRkX3NjcmlwdFwiXG4gICAgICAgICAgICApfVwiXG4gICAgICAgICAgICA/cnRsPSR7Y29tcHV0ZVJUTCh0aGlzLmhhc3MpfVxuICAgICAgICAgID48L2hhLWZhYj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3J1blNjcmlwdChldikge1xuICAgIGNvbnN0IHNjcmlwdCA9IGV2LmN1cnJlbnRUYXJnZXQuc2NyaXB0IGFzIEhhc3NFbnRpdHk7XG4gICAgYXdhaXQgdHJpZ2dlclNjcmlwdCh0aGlzLmhhc3MsIHNjcmlwdC5lbnRpdHlfaWQpO1xuICAgIHNob3dUb2FzdCh0aGlzLCB7XG4gICAgICBtZXNzYWdlOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgIFwidWkubm90aWZpY2F0aW9uX3RvYXN0LnRyaWdnZXJlZFwiLFxuICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgY29tcHV0ZVN0YXRlTmFtZShzY3JpcHQpXG4gICAgICApLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NyaXB0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBob3Jpem9udGFsO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JpcHQgPiAqOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JpcHQgYVtocmVmXSxcbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW3J0bF0ge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbcnRsXVtpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtc2NyaXB0LXBpY2tlclwiOiBIYVNjcmlwdFBpY2tlcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQU1BOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFLQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVVBO0FBU0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBS0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7OztBQU1BOzs7Ozs7QUFRQTs7QUFJQTtBQUNBOzs7QUFHQTs7O0FBS0E7QUFDQTs7O0FBSUE7O0FBRUE7OztBQUdBOzs7QUFHQTs7Ozs7OztBQU9BOzs7Ozs7O0FBUUE7O0FBRUE7QUFHQTs7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REE7QUFDQTtBQUNBO0FBQ0E7QUE1SkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9