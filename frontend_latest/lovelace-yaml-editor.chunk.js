(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["lovelace-yaml-editor"],{

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

/***/ "./src/panels/lovelace/common/structs/is-entity-id.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-entity-id.ts ***!
  \************************************************************/
/*! exports provided: isEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEntityId", function() { return isEntityId; });
function isEntityId(value) {
    if (typeof value !== "string") {
        return "entity id should be a string";
    }
    if (!value.includes(".")) {
        return "entity id should be in the format 'domain.entity'";
    }
    return true;
}


/***/ }),

/***/ "./src/panels/lovelace/common/structs/is-icon.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-icon.ts ***!
  \*******************************************************/
/*! exports provided: isIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIcon", function() { return isIcon; });
function isIcon(value) {
    if (typeof value !== "string") {
        return "icon should be a string";
    }
    if (!value.includes(":")) {
        return "icon should be in the format 'mdi:icon'";
    }
    return true;
}


/***/ }),

/***/ "./src/panels/lovelace/common/structs/struct.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/struct.ts ***!
  \******************************************************/
/*! exports provided: struct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "struct", function() { return struct; });
/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superstruct */ "./node_modules/superstruct/lib/index.es.js");
/* harmony import */ var _is_entity_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-entity-id */ "./src/panels/lovelace/common/structs/is-entity-id.ts");
/* harmony import */ var _is_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-icon */ "./src/panels/lovelace/common/structs/is-icon.ts");



const struct = Object(superstruct__WEBPACK_IMPORTED_MODULE_0__["superstruct"])({
    types: {
        "entity-id": _is_entity_id__WEBPACK_IMPORTED_MODULE_1__["isEntityId"],
        icon: _is_icon__WEBPACK_IMPORTED_MODULE_2__["isIcon"],
    },
});


/***/ }),

/***/ "./src/panels/lovelace/hui-editor.ts":
/*!*******************************************!*\
  !*** ./src/panels/lovelace/hui-editor.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");














const lovelaceStruct = _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"].interface({
    title: "string?",
    views: ["object"],
    resources: _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"].optional(["object"]),
});
class LovelaceFullConfigEditor extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this._generation = 1;
    }
    static get properties() {
        return {
            hass: {},
            lovelace: {},
            closeEditor: {},
            _saving: {},
            _changed: {},
        };
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <app-header-layout>
        <app-header>
          <app-toolbar>
            <paper-icon-button
              icon="hass:close"
              @click="${this._closeEditor}"
            ></paper-icon-button>
            <div main-title>
              ${this.hass.localize("ui.panel.lovelace.editor.raw_editor.header")}
            </div>
            <div
              class="save-button
              ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
            saved: this._saving === false || this._changed === true,
        })}"
            >
              ${this._changed
            ? this.hass.localize("ui.panel.lovelace.editor.raw_editor.unsaved_changes")
            : this.hass.localize("ui.panel.lovelace.editor.raw_editor.saved")}
            </div>
            <mwc-button raised @click="${this._handleSave}"
              >${this.hass.localize("ui.panel.lovelace.editor.raw_editor.save")}</mwc-button
            >
          </app-toolbar>
        </app-header>
        <div class="content">
          <ha-code-editor
            mode="yaml"
            autofocus
            .rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_13__["computeRTL"])(this.hass)}
            .hass="${this.hass}"
            @value-changed="${this._yamlChanged}"
            @editor-save="${this._handleSave}"
          >
          </ha-code-editor>
        </div>
      </app-header-layout>
    `;
    }
    firstUpdated() {
        this.yamlEditor.value = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeDump(this.lovelace.config);
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_11__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
        :host {
          --code-mirror-height: 100%;
        }

        app-header-layout {
          height: 100vh;
        }

        app-toolbar {
          background-color: var(--dark-background-color, #455a64);
          color: var(--dark-text-color);
        }

        .comments {
          font-size: 16px;
        }

        .content {
          height: calc(100vh - 68px);
        }

        hui-code-editor {
          height: 100%;
        }

        .save-button {
          opacity: 0;
          font-size: 14px;
          padding: 0px 10px;
        }

        .saved {
          opacity: 1;
        }
      `,
        ];
    }
    _yamlChanged() {
        this._changed = !this.yamlEditor
            .codemirror.getDoc()
            .isClean(this._generation);
        if (this._changed && !window.onbeforeunload) {
            window.onbeforeunload = () => {
                return true;
            };
        }
        else if (!this._changed && window.onbeforeunload) {
            window.onbeforeunload = null;
        }
    }
    _closeEditor() {
        if (this._changed) {
            if (!confirm("You have unsaved changes, are you sure you want to exit?")) {
                return;
            }
        }
        window.onbeforeunload = null;
        if (this.closeEditor) {
            this.closeEditor();
        }
    }
    async _handleSave() {
        this._saving = true;
        if (this.yamlEditor.hasComments) {
            if (!confirm("Your config contains comment(s), these will not be saved. Do you want to continue?")) {
                return;
            }
        }
        let value;
        try {
            value = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(this.yamlEditor.value);
        }
        catch (err) {
            alert(`Unable to parse YAML: ${err}`);
            this._saving = false;
            return;
        }
        try {
            value = lovelaceStruct(value);
        }
        catch (err) {
            alert(`Your config is not valid: ${err}`);
            return;
        }
        try {
            await this.lovelace.saveConfig(value);
        }
        catch (err) {
            alert(`Unable to save YAML: ${err}`);
        }
        this._generation = this.yamlEditor
            .codemirror.getDoc()
            .changeGeneration(true);
        window.onbeforeunload = null;
        this._saving = false;
        this._changed = false;
    }
    get yamlEditor() {
        return this.shadowRoot.querySelector("ha-code-editor");
    }
}
customElements.define("hui-editor", LovelaceFullConfigEditor);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG92ZWxhY2UteWFtbC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWVudGl0eS1pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9zdHJ1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9odWktZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvY29kZW1pcnJvci5vbmRlbWFuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkQ29kZU1pcnJvciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvY29kZW1pcnJvci5vbmRlbWFuZFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgVXBkYXRpbmdFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSBcImNvZGVtaXJyb3JcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJlZGl0b3Itc2F2ZVwiOiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb2RlLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEhhQ29kZUVkaXRvciBleHRlbmRzIFVwZGF0aW5nRWxlbWVudCB7XG4gIHB1YmxpYyBjb2RlbWlycm9yPzogRWRpdG9yO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbW9kZT86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGF1dG9mb2N1cyA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcnRsID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlcnJvciA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF92YWx1ZSA9IFwiXCI7XG5cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlbWlycm9yID8gdGhpcy5jb2RlbWlycm9yLmdldFZhbHVlKCkgOiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzQ29tbWVudHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcInNwYW4uY20tY29tbWVudFwiKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICghdGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29kZW1pcnJvci5yZWZyZXNoKCk7XG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoIXRoaXMuY29kZW1pcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwibW9kZVwiKSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldE9wdGlvbihcIm1vZGVcIiwgdGhpcy5tb2RlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJhdXRvZm9jdXNcIikpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRPcHRpb24oXCJhdXRvZm9jdXNcIiwgdGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJfdmFsdWVcIikgJiYgdGhpcy5fdmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwicnRsXCIpKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0T3B0aW9uKFwiZ3V0dGVyc1wiLCB0aGlzLl9jYWxjR3V0dGVycygpKTtcbiAgICAgIHRoaXMuX3NldFNjcm9sbEJhckRpcmVjdGlvbigpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImVycm9yXCIpKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJlcnJvci1zdGF0ZVwiLCB0aGlzLmVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9sb2FkKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9sb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGxvYWRlZCA9IGF3YWl0IGxvYWRDb2RlTWlycm9yKCk7XG5cbiAgICBjb25zdCBjb2RlTWlycm9yID0gbG9hZGVkLmNvZGVNaXJyb3I7XG5cbiAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcblxuICAgIHNoYWRvd1Jvb3QhLmlubmVySFRNTCA9IGBcbiAgICA8c3R5bGU+XG4gICAgICAke2xvYWRlZC5jb2RlTWlycm9yQ3NzfVxuICAgICAgLkNvZGVNaXJyb3Ige1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWNvZGUtbWlycm9yLWhlaWdodCwgYXV0byk7XG4gICAgICAgIGRpcmVjdGlvbjogdmFyKC0tY29kZS1taXJyb3ItZGlyZWN0aW9uLCBsdHIpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3Itc2Nyb2xsIHtcbiAgICAgICAgbWF4LWhlaWdodDogdmFyKC0tY29kZS1taXJyb3ItbWF4LWhlaWdodCwgLS1jb2RlLW1pcnJvci1oZWlnaHQpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItZGlhbG9nLWJhY2tncm91bmQtY29sb3IsIHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcikpO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYm9yZGVyLXJpZ2h0O1xuICAgICAgfVxuICAgICAgOmhvc3QoLmVycm9yLXN0YXRlKSAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1lcnJvci1zdGF0ZS1jb2xvciwgcmVkKTtcbiAgICAgIH1cbiAgICAgIC5Db2RlTWlycm9yLWZvY3VzZWQgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuICAgICAgLnJ0bCAuQ29kZU1pcnJvci12c2Nyb2xsYmFyIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgIH1cbiAgICAgIC5ydGwtZ3V0dGVyIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5gO1xuXG4gICAgdGhpcy5jb2RlbWlycm9yID0gY29kZU1pcnJvcihzaGFkb3dSb290LCB7XG4gICAgICB2YWx1ZTogdGhpcy5fdmFsdWUsXG4gICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcbiAgICAgIHRhYlNpemU6IDIsXG4gICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICBhdXRvZm9jdXM6IHRoaXMuYXV0b2ZvY3VzICE9PSBmYWxzZSxcbiAgICAgIHZpZXdwb3J0TWFyZ2luOiBJbmZpbml0eSxcbiAgICAgIGV4dHJhS2V5czoge1xuICAgICAgICBUYWI6IFwiaW5kZW50TW9yZVwiLFxuICAgICAgICBcIlNoaWZ0LVRhYlwiOiBcImluZGVudExlc3NcIixcbiAgICAgIH0sXG4gICAgICBndXR0ZXJzOiB0aGlzLl9jYWxjR3V0dGVycygpLFxuICAgIH0pO1xuICAgIHRoaXMuX3NldFNjcm9sbEJhckRpcmVjdGlvbigpO1xuICAgIHRoaXMuY29kZW1pcnJvciEub24oXCJjaGFuZ2VzXCIsICgpID0+IHRoaXMuX29uQ2hhbmdlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IHRoaXMuX3ZhbHVlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FsY0d1dHRlcnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnJ0bCA/IFtcInJ0bC1ndXR0ZXJcIiwgXCJDb2RlTWlycm9yLWxpbmVudW1iZXJzXCJdIDogW107XG4gIH1cblxuICBwcml2YXRlIF9zZXRTY3JvbGxCYXJEaXJlY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29kZW1pcnJvcikge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLmdldFdyYXBwZXJFbGVtZW50KCkuY2xhc3NMaXN0LnRvZ2dsZShcInJ0bFwiLCB0aGlzLnJ0bCk7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jb2RlLWVkaXRvclwiOiBIYUNvZGVFZGl0b3I7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0VudGl0eUlkKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnZG9tYWluLmVudGl0eSdcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0ljb24odmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ21kaTppY29uJ1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgc3VwZXJzdHJ1Y3QgfSBmcm9tIFwic3VwZXJzdHJ1Y3RcIjtcbmltcG9ydCB7IGlzRW50aXR5SWQgfSBmcm9tIFwiLi9pcy1lbnRpdHktaWRcIjtcbmltcG9ydCB7IGlzSWNvbiB9IGZyb20gXCIuL2lzLWljb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdCA9IHN1cGVyc3RydWN0KHtcbiAgdHlwZXM6IHtcbiAgICBcImVudGl0eS1pZFwiOiBpc0VudGl0eUlkLFxuICAgIGljb246IGlzSWNvbixcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgVGVtcGxhdGVSZXN1bHQsIENTU1Jlc3VsdCwgY3NzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHlhbWwgZnJvbSBcImpzLXlhbWxcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyLWxheW91dC9hcHAtaGVhZGVyLWxheW91dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5cbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdFwiO1xuaW1wb3J0IHsgTG92ZWxhY2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvclwiO1xuLy8gVGhpcyBpcyBub3QgYSBkdXBsaWNhdGUgaW1wb3J0LCBvbmUgaXMgZm9yIHR5cGVzLCBvbmUgaXMgZm9yIGVsZW1lbnQuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhQ29kZUVkaXRvciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmNvbnN0IGxvdmVsYWNlU3RydWN0ID0gc3RydWN0LmludGVyZmFjZSh7XG4gIHRpdGxlOiBcInN0cmluZz9cIixcbiAgdmlld3M6IFtcIm9iamVjdFwiXSxcbiAgcmVzb3VyY2VzOiBzdHJ1Y3Qub3B0aW9uYWwoW1wib2JqZWN0XCJdKSxcbn0pO1xuXG5jbGFzcyBMb3ZlbGFjZUZ1bGxDb25maWdFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgbG92ZWxhY2U/OiBMb3ZlbGFjZTtcbiAgcHVibGljIGNsb3NlRWRpdG9yPzogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfc2F2aW5nPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2hhbmdlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX2dlbmVyYXRpb24gPSAxO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBsb3ZlbGFjZToge30sXG4gICAgICBjbG9zZUVkaXRvcjoge30sXG4gICAgICBfc2F2aW5nOiB7fSxcbiAgICAgIF9jaGFuZ2VkOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0PlxuICAgICAgICA8YXBwLWhlYWRlcj5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2Nsb3NlRWRpdG9yfVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IuaGVhZGVyXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cInNhdmUtYnV0dG9uXG4gICAgICAgICAgICAgICR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICAgIHNhdmVkOiB0aGlzLl9zYXZpbmchID09PSBmYWxzZSB8fCB0aGlzLl9jaGFuZ2VkID09PSB0cnVlLFxuICAgICAgICAgICAgICB9KX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke3RoaXMuX2NoYW5nZWRcbiAgICAgICAgICAgICAgICA/IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IudW5zYXZlZF9jaGFuZ2VzXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3Iuc2F2ZWRcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG13Yy1idXR0b24gcmFpc2VkIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlU2F2ZX1cIlxuICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3Iuc2F2ZVwiXG4gICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoYS1jb2RlLWVkaXRvclxuICAgICAgICAgICAgbW9kZT1cInlhbWxcIlxuICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAucnRsPSR7Y29tcHV0ZVJUTCh0aGlzLmhhc3MpfVxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3lhbWxDaGFuZ2VkfVwiXG4gICAgICAgICAgICBAZWRpdG9yLXNhdmU9XCIke3RoaXMuX2hhbmRsZVNhdmV9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9oYS1jb2RlLWVkaXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMueWFtbEVkaXRvci52YWx1ZSA9IHlhbWwuc2FmZUR1bXAodGhpcy5sb3ZlbGFjZSEuY29uZmlnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC0tY29kZS1taXJyb3ItaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwLWhlYWRlci1sYXlvdXQge1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtdG9vbGJhciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yLCAjNDU1YTY0KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyay10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tZW50cyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY4cHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaHVpLWNvZGUtZWRpdG9yIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2F2ZS1idXR0b24ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNhdmVkIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cblxuICBwcml2YXRlIF95YW1sQ2hhbmdlZCgpIHtcbiAgICB0aGlzLl9jaGFuZ2VkID0gIXRoaXMueWFtbEVkaXRvclxuICAgICAgLmNvZGVtaXJyb3IhLmdldERvYygpXG4gICAgICAuaXNDbGVhbih0aGlzLl9nZW5lcmF0aW9uKTtcbiAgICBpZiAodGhpcy5fY2hhbmdlZCAmJiAhd2luZG93Lm9uYmVmb3JldW5sb2FkKSB7XG4gICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9jaGFuZ2VkICYmIHdpbmRvdy5vbmJlZm9yZXVubG9hZCkge1xuICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZUVkaXRvcigpIHtcbiAgICBpZiAodGhpcy5fY2hhbmdlZCkge1xuICAgICAgaWYgKFxuICAgICAgICAhY29uZmlybShcIllvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcywgYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGV4aXQ/XCIpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xuICAgIGlmICh0aGlzLmNsb3NlRWRpdG9yKSB7XG4gICAgICB0aGlzLmNsb3NlRWRpdG9yKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlU2F2ZSgpIHtcbiAgICB0aGlzLl9zYXZpbmcgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMueWFtbEVkaXRvci5oYXNDb21tZW50cykge1xuICAgICAgaWYgKFxuICAgICAgICAhY29uZmlybShcbiAgICAgICAgICBcIllvdXIgY29uZmlnIGNvbnRhaW5zIGNvbW1lbnQocyksIHRoZXNlIHdpbGwgbm90IGJlIHNhdmVkLiBEbyB5b3Ugd2FudCB0byBjb250aW51ZT9cIlxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB2YWx1ZTtcbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSB5YW1sLnNhZmVMb2FkKHRoaXMueWFtbEVkaXRvci52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgVW5hYmxlIHRvIHBhcnNlIFlBTUw6ICR7ZXJyfWApO1xuICAgICAgdGhpcy5fc2F2aW5nID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IGxvdmVsYWNlU3RydWN0KHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGBZb3VyIGNvbmZpZyBpcyBub3QgdmFsaWQ6ICR7ZXJyfWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5sb3ZlbGFjZSEuc2F2ZUNvbmZpZyh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgVW5hYmxlIHRvIHNhdmUgWUFNTDogJHtlcnJ9YCk7XG4gICAgfVxuICAgIHRoaXMuX2dlbmVyYXRpb24gPSB0aGlzLnlhbWxFZGl0b3JcbiAgICAgIC5jb2RlbWlycm9yIS5nZXREb2MoKVxuICAgICAgLmNoYW5nZUdlbmVyYXRpb24odHJ1ZSk7XG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gbnVsbDtcbiAgICB0aGlzLl9zYXZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9jaGFuZ2VkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGdldCB5YW1sRWRpdG9yKCk6IEhhQ29kZUVkaXRvciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImhhLWNvZGUtZWRpdG9yXCIpISBhcyBIYUNvZGVFZGl0b3I7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1lZGl0b3JcIjogTG92ZWxhY2VGdWxsQ29uZmlnRWRpdG9yO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImh1aS1lZGl0b3JcIiwgTG92ZWxhY2VGdWxsQ29uZmlnRWRpdG9yKTtcbiIsImludGVyZmFjZSBMb2FkZWRDb2RlTWlycm9yIHtcbiAgY29kZU1pcnJvcjogYW55O1xuICBjb2RlTWlycm9yQ3NzOiBhbnk7XG59XG5cbmxldCBsb2FkZWQ6IFByb21pc2U8TG9hZGVkQ29kZU1pcnJvcj47XG5cbmV4cG9ydCBjb25zdCBsb2FkQ29kZU1pcnJvciA9IGFzeW5jICgpOiBQcm9taXNlPExvYWRlZENvZGVNaXJyb3I+ID0+IHtcbiAgaWYgKCFsb2FkZWQpIHtcbiAgICBsb2FkZWQgPSBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjb2RlbWlycm9yXCIgKi8gXCIuL2NvZGVtaXJyb3JcIik7XG4gIH1cbiAgcmV0dXJuIGxvYWRlZDtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBZUE7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQWtJQTtBQWhJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQURBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFNQTtBQWtMQTtBQWhMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7QUFNQTs7O0FBR0E7Ozs7QUFNQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBOztBQUlBO0FBQ0E7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7O0FDeE5BO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==