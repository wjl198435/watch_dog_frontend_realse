(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["voice-command-dialog"],{

/***/ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js ***!
  \******************************************************************************/
/*! exports provided: PaperDialogBehaviorImpl, PaperDialogBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperDialogBehaviorImpl", function() { return PaperDialogBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperDialogBehavior", function() { return PaperDialogBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-overlay-behavior.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
  Use `Polymer.PaperDialogBehavior` and `paper-dialog-shared-styles.html` to
  implement a Material Design dialog.

  For example, if `<paper-dialog-impl>` implements this behavior:

      <paper-dialog-impl>
          <h2>Header</h2>
          <div>Dialog body</div>
          <div class="buttons">
              <paper-button dialog-dismiss>Cancel</paper-button>
              <paper-button dialog-confirm>Accept</paper-button>
          </div>
      </paper-dialog-impl>

  `paper-dialog-shared-styles.html` provide styles for a header, content area,
  and an action area for buttons. Use the `<h2>` tag for the header and the
  `buttons` class for the action area. You can use the `paper-dialog-scrollable`
  element (in its own repository) if you need a scrolling content area.

  Use the `dialog-dismiss` and `dialog-confirm` attributes on interactive
  controls to close the dialog. If the user dismisses the dialog with
  `dialog-confirm`, the `closingReason` will update to include `confirmed:
  true`.

  ### Accessibility

  This element has `role="dialog"` by default. Depending on the context, it may
  be more appropriate to override this attribute with `role="alertdialog"`.

  If `modal` is set, the element will prevent the focus from exiting the
  element. It will also ensure that focus remains in the dialog.

  @hero hero.svg
  @demo demo/index.html
  @polymerBehavior PaperDialogBehavior
 */
const PaperDialogBehaviorImpl = {

  hostAttributes: {'role': 'dialog', 'tabindex': '-1'},

  properties: {

    /**
     * If `modal` is true, this implies `no-cancel-on-outside-click`,
     * `no-cancel-on-esc-key` and `with-backdrop`.
     */
    modal: {type: Boolean, value: false},

    __readied: {type: Boolean, value: false}

  },

  observers: ['_modalChanged(modal, __readied)'],

  listeners: {'tap': '_onDialogClick'},

  /**
   * @return {void}
   */
  ready: function() {
    // Only now these properties can be read.
    this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick;
    this.__prevNoCancelOnEscKey = this.noCancelOnEscKey;
    this.__prevWithBackdrop = this.withBackdrop;
    this.__readied = true;
  },

  _modalChanged: function(modal, readied) {
    // modal implies noCancelOnOutsideClick, noCancelOnEscKey and withBackdrop.
    // We need to wait for the element to be ready before we can read the
    // properties values.
    if (!readied) {
      return;
    }

    if (modal) {
      this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick;
      this.__prevNoCancelOnEscKey = this.noCancelOnEscKey;
      this.__prevWithBackdrop = this.withBackdrop;
      this.noCancelOnOutsideClick = true;
      this.noCancelOnEscKey = true;
      this.withBackdrop = true;
    } else {
      // If the value was changed to false, let it false.
      this.noCancelOnOutsideClick =
          this.noCancelOnOutsideClick && this.__prevNoCancelOnOutsideClick;
      this.noCancelOnEscKey =
          this.noCancelOnEscKey && this.__prevNoCancelOnEscKey;
      this.withBackdrop = this.withBackdrop && this.__prevWithBackdrop;
    }
  },

  _updateClosingReasonConfirmed: function(confirmed) {
    this.closingReason = this.closingReason || {};
    this.closingReason.confirmed = confirmed;
  },

  /**
   * Will dismiss the dialog if user clicked on an element with dialog-dismiss
   * or dialog-confirm attribute.
   */
  _onDialogClick: function(event) {
    // Search for the element with dialog-confirm or dialog-dismiss,
    // from the root target until this (excluded).
    var path = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(event).path;
    for (var i = 0, l = path.indexOf(this); i < l; i++) {
      var target = path[i];
      if (target.hasAttribute &&
          (target.hasAttribute('dialog-dismiss') ||
           target.hasAttribute('dialog-confirm'))) {
        this._updateClosingReasonConfirmed(
            target.hasAttribute('dialog-confirm'));
        this.close();
        event.stopPropagation();
        break;
      }
    }
  }

};

/** @polymerBehavior */
const PaperDialogBehavior =
    [_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronOverlayBehavior"], PaperDialogBehaviorImpl];


/***/ }),

/***/ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_paper_styles_shadow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/shadow.js */ "./node_modules/@polymer/paper-styles/shadow.js");
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
### Styling

The following custom properties and mixins are available for styling.

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-background-color` | Dialog background color | `--primary-background-color`
`--paper-dialog-color` | Dialog foreground color | `--primary-text-color`
`--paper-dialog` | Mixin applied to the dialog | `{}`
`--paper-dialog-title` | Mixin applied to the title (`<h2>`) element | `{}`
`--paper-dialog-button-color` | Button area foreground color | `--default-primary-color`
*/





const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="paper-dialog-shared-styles">
  <template>
    <style>
      :host {
        display: block;
        margin: 24px 40px;

        background: var(--paper-dialog-background-color, var(--primary-background-color));
        color: var(--paper-dialog-color, var(--primary-text-color));

        @apply --paper-font-body1;
        @apply --shadow-elevation-16dp;
        @apply --paper-dialog;
      }

      :host > ::slotted(*) {
        margin-top: 20px;
        padding: 0 24px;
      }

      :host > ::slotted(.no-padding) {
        padding: 0;
      }

      
      :host > ::slotted(*:first-child) {
        margin-top: 24px;
      }

      :host > ::slotted(*:last-child) {
        margin-bottom: 24px;
      }

      /* In 1.x, this selector was \`:host > ::content h2\`. In 2.x <slot> allows
      to select direct children only, which increases the weight of this
      selector, so we have to re-define first-child/last-child margins below. */
      :host > ::slotted(h2) {
        position: relative;
        margin: 0;

        @apply --paper-font-title;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-top. */
      :host > ::slotted(h2:first-child) {
        margin-top: 24px;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-bottom. */
      :host > ::slotted(h2:last-child) {
        margin-bottom: 24px;
        @apply --paper-dialog-title;
      }

      :host > ::slotted(.paper-dialog-buttons),
      :host > ::slotted(.buttons) {
        position: relative;
        padding: 8px 8px 8px 24px;
        margin: 0;

        color: var(--paper-dialog-button-color, var(--primary-color));

        @apply --layout-horizontal;
        @apply --layout-end-justified;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);


/***/ }),

/***/ "./src/dialogs/ha-voice-command-dialog.js":
/*!************************************************!*\
  !*** ./src/dialogs/ha-voice-command-dialog.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_shared_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-shared-styles */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/dialog-mixin */ "./src/mixins/dialog-mixin.js");








/*
 * @appliesMixin DialogMixin
 */
class HaVoiceCommandDialog extends Object(_mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="paper-dialog-shared-styles">
        iron-icon {
          margin-right: 8px;
        }

        .content {
          width: 450px;
          min-height: 80px;
          font-size: 18px;
          padding: 16px;
        }

        .messages {
          max-height: 50vh;
          overflow: auto;
        }

        .messages::after {
          content: "";
          clear: both;
          display: block;
        }

        .message {
          clear: both;
          margin: 8px 0;
          padding: 8px;
          border-radius: 15px;
        }

        .message.user {
          margin-left: 24px;
          float: right;
          text-align: right;
          border-bottom-right-radius: 0px;
          background-color: var(--light-primary-color);
          color: var(--primary-text-color);
        }

        .message.hass {
          margin-right: 24px;
          float: left;
          border-bottom-left-radius: 0px;
          background-color: var(--primary-color);
          color: var(--text-primary-color);
        }

        .message.error {
          background-color: var(--google-red-500);
          color: var(--text-primary-color);
        }

        .icon {
          text-align: center;
        }

        .icon paper-icon-button {
          height: 52px;
          width: 52px;
        }

        .interimTranscript {
          color: darkgrey;
        }

        [hidden] {
          display: none;
        }

        :host {
          border-radius: 2px;
        }

        @media all and (max-width: 450px) {
          :host {
            margin: 0;
            width: 100%;
            max-height: calc(100% - 64px);

            position: fixed !important;
            bottom: 0px;
            left: 0px;
            right: 0px;
            overflow: scroll;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
          }

          .content {
            width: auto;
          }

          .messages {
            max-height: 68vh;
          }
        }
      </style>

      <div class="content">
        <div class="messages" id="messages">
          <template is="dom-repeat" items="[[_conversation]]" as="message">
            <div class$="[[_computeMessageClasses(message)]]">
              [[message.text]]
            </div>
          </template>
        </div>
        <template is="dom-if" if="[[results]]">
          <div class="messages">
            <div class="message user">
              <span>{{results.final}}</span>
              <span class="interimTranscript">[[results.interim]]</span> …
            </div>
          </div>
        </template>
        <div class="icon" hidden$="[[results]]">
          <paper-icon-button
            icon="hass:text-to-speech"
            on-click="startListening"
          ></paper-icon-button>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      results: {
        type: Object,
        value: null,
        observer: "_scrollMessagesBottom",
      },

      _conversation: {
        type: Array,
        value: function() {
          return [{ who: "hass", text: "How can I help?" }];
        },
        observer: "_scrollMessagesBottom",
      },
    };
  }

  static get observers() {
    return ["dialogOpenChanged(opened)"];
  }

  showDialog() {
    this.opened = true;
  }

  initRecognition() {
    /* eslint-disable new-cap */
    this.recognition = new webkitSpeechRecognition();
    /* eslint-enable new-cap */

    this.recognition.onstart = function() {
      this.results = {
        final: "",
        interim: "",
      };
    }.bind(this);
    this.recognition.onerror = function() {
      this.recognition.abort();
      var text = this.results.final || this.results.interim;
      this.results = null;
      if (text === "") {
        text = "<牧养犬 did not hear anything>";
      }
      this.push("_conversation", { who: "user", text: text, error: true });
    }.bind(this);
    this.recognition.onend = function() {
      // Already handled by onerror
      if (this.results == null) {
        return;
      }
      var text = this.results.final || this.results.interim;
      this.results = null;
      this.push("_conversation", { who: "user", text: text });

      this.hass.callApi("post", "conversation/process", { text: text }).then(
        function(response) {
          this.push("_conversation", {
            who: "hass",
            text: response.speech.plain.speech,
          });
        }.bind(this),
        function() {
          this.set(
            ["_conversation", this._conversation.length - 1, "error"],
            true
          );
        }.bind(this)
      );
    }.bind(this);

    this.recognition.onresult = function(event) {
      var oldResults = this.results;
      var finalTranscript = "";
      var interimTranscript = "";

      for (var ind = event.resultIndex; ind < event.results.length; ind++) {
        if (event.results[ind].isFinal) {
          finalTranscript += event.results[ind][0].transcript;
        } else {
          interimTranscript += event.results[ind][0].transcript;
        }
      }

      this.results = {
        interim: interimTranscript,
        final: oldResults.final + finalTranscript,
      };
    }.bind(this);
  }

  startListening() {
    if (!this.recognition) {
      this.initRecognition();
    }

    this.results = {
      interim: "",
      final: "",
    };
    this.recognition.start();
  }

  _scrollMessagesBottom() {
    setTimeout(() => {
      this.$.messages.scrollTop = this.$.messages.scrollHeight;

      if (this.$.messages.scrollTop !== 0) {
        this.$.dialog.fire("iron-resize");
      }
    }, 10);
  }

  dialogOpenChanged(newVal) {
    if (newVal) {
      this.startListening();
    } else if (!newVal && this.results) {
      this.recognition.abort();
    }
  }

  _computeMessageClasses(message) {
    return "message " + message.who + (message.error ? " error" : "");
  }
}

customElements.define("ha-voice-command-dialog", HaVoiceCommandDialog);


/***/ }),

/***/ "./src/mixins/dialog-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/dialog-mixin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-mixin */ "./src/mixins/events-mixin.js");




/**
 * @polymerMixin
 * @appliesMixin EventsMixin
 * @appliesMixin PaperDialogBehavior
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__["mixinBehaviors"])(
      [_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"], _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__["PaperDialogBehavior"]],
      superClass
    ) {
      static get properties() {
        return {
          withBackdrop: {
            type: Boolean,
            value: true,
          },
        };
      }
    }
));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm9pY2UtY29tbWFuZC1kaWFsb2cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLWJlaGF2aW9yL3BhcGVyLWRpYWxvZy1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLWJlaGF2aW9yL3BhcGVyLWRpYWxvZy1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2hhLXZvaWNlLWNvbW1hbmQtZGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZGlhbG9nLW1peGluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uT3ZlcmxheUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1vdmVybGF5LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuXG4vKipcbiAgVXNlIGBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgIGFuZCBgcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXMuaHRtbGAgdG9cbiAgaW1wbGVtZW50IGEgTWF0ZXJpYWwgRGVzaWduIGRpYWxvZy5cblxuICBGb3IgZXhhbXBsZSwgaWYgYDxwYXBlci1kaWFsb2ctaW1wbD5gIGltcGxlbWVudHMgdGhpcyBiZWhhdmlvcjpcblxuICAgICAgPHBhcGVyLWRpYWxvZy1pbXBsPlxuICAgICAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgICAgIDxkaXY+RGlhbG9nIGJvZHk8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICA8cGFwZXItYnV0dG9uIGRpYWxvZy1kaXNtaXNzPkNhbmNlbDwvcGFwZXItYnV0dG9uPlxuICAgICAgICAgICAgICA8cGFwZXItYnV0dG9uIGRpYWxvZy1jb25maXJtPkFjY2VwdDwvcGFwZXItYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuICBgcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXMuaHRtbGAgcHJvdmlkZSBzdHlsZXMgZm9yIGEgaGVhZGVyLCBjb250ZW50IGFyZWEsXG4gIGFuZCBhbiBhY3Rpb24gYXJlYSBmb3IgYnV0dG9ucy4gVXNlIHRoZSBgPGgyPmAgdGFnIGZvciB0aGUgaGVhZGVyIGFuZCB0aGVcbiAgYGJ1dHRvbnNgIGNsYXNzIGZvciB0aGUgYWN0aW9uIGFyZWEuIFlvdSBjYW4gdXNlIHRoZSBgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgXG4gIGVsZW1lbnQgKGluIGl0cyBvd24gcmVwb3NpdG9yeSkgaWYgeW91IG5lZWQgYSBzY3JvbGxpbmcgY29udGVudCBhcmVhLlxuXG4gIFVzZSB0aGUgYGRpYWxvZy1kaXNtaXNzYCBhbmQgYGRpYWxvZy1jb25maXJtYCBhdHRyaWJ1dGVzIG9uIGludGVyYWN0aXZlXG4gIGNvbnRyb2xzIHRvIGNsb3NlIHRoZSBkaWFsb2cuIElmIHRoZSB1c2VyIGRpc21pc3NlcyB0aGUgZGlhbG9nIHdpdGhcbiAgYGRpYWxvZy1jb25maXJtYCwgdGhlIGBjbG9zaW5nUmVhc29uYCB3aWxsIHVwZGF0ZSB0byBpbmNsdWRlIGBjb25maXJtZWQ6XG4gIHRydWVgLlxuXG4gICMjIyBBY2Nlc3NpYmlsaXR5XG5cbiAgVGhpcyBlbGVtZW50IGhhcyBgcm9sZT1cImRpYWxvZ1wiYCBieSBkZWZhdWx0LiBEZXBlbmRpbmcgb24gdGhlIGNvbnRleHQsIGl0IG1heVxuICBiZSBtb3JlIGFwcHJvcHJpYXRlIHRvIG92ZXJyaWRlIHRoaXMgYXR0cmlidXRlIHdpdGggYHJvbGU9XCJhbGVydGRpYWxvZ1wiYC5cblxuICBJZiBgbW9kYWxgIGlzIHNldCwgdGhlIGVsZW1lbnQgd2lsbCBwcmV2ZW50IHRoZSBmb2N1cyBmcm9tIGV4aXRpbmcgdGhlXG4gIGVsZW1lbnQuIEl0IHdpbGwgYWxzbyBlbnN1cmUgdGhhdCBmb2N1cyByZW1haW5zIGluIHRoZSBkaWFsb2cuXG5cbiAgQGhlcm8gaGVyby5zdmdcbiAgQGRlbW8gZGVtby9pbmRleC5odG1sXG4gIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJEaWFsb2dCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJEaWFsb2dCZWhhdmlvckltcGwgPSB7XG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHsncm9sZSc6ICdkaWFsb2cnLCAndGFiaW5kZXgnOiAnLTEnfSxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBJZiBgbW9kYWxgIGlzIHRydWUsIHRoaXMgaW1wbGllcyBgbm8tY2FuY2VsLW9uLW91dHNpZGUtY2xpY2tgLFxuICAgICAqIGBuby1jYW5jZWwtb24tZXNjLWtleWAgYW5kIGB3aXRoLWJhY2tkcm9wYC5cbiAgICAgKi9cbiAgICBtb2RhbDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICBfX3JlYWRpZWQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9XG5cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX21vZGFsQ2hhbmdlZChtb2RhbCwgX19yZWFkaWVkKSddLFxuXG4gIGxpc3RlbmVyczogeyd0YXAnOiAnX29uRGlhbG9nQ2xpY2snfSxcblxuICAvKipcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBPbmx5IG5vdyB0aGVzZSBwcm9wZXJ0aWVzIGNhbiBiZSByZWFkLlxuICAgIHRoaXMuX19wcmV2Tm9DYW5jZWxPbk91dHNpZGVDbGljayA9IHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljaztcbiAgICB0aGlzLl9fcHJldk5vQ2FuY2VsT25Fc2NLZXkgPSB0aGlzLm5vQ2FuY2VsT25Fc2NLZXk7XG4gICAgdGhpcy5fX3ByZXZXaXRoQmFja2Ryb3AgPSB0aGlzLndpdGhCYWNrZHJvcDtcbiAgICB0aGlzLl9fcmVhZGllZCA9IHRydWU7XG4gIH0sXG5cbiAgX21vZGFsQ2hhbmdlZDogZnVuY3Rpb24obW9kYWwsIHJlYWRpZWQpIHtcbiAgICAvLyBtb2RhbCBpbXBsaWVzIG5vQ2FuY2VsT25PdXRzaWRlQ2xpY2ssIG5vQ2FuY2VsT25Fc2NLZXkgYW5kIHdpdGhCYWNrZHJvcC5cbiAgICAvLyBXZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBlbGVtZW50IHRvIGJlIHJlYWR5IGJlZm9yZSB3ZSBjYW4gcmVhZCB0aGVcbiAgICAvLyBwcm9wZXJ0aWVzIHZhbHVlcy5cbiAgICBpZiAoIXJlYWRpZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIHRoaXMuX19wcmV2Tm9DYW5jZWxPbk91dHNpZGVDbGljayA9IHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljaztcbiAgICAgIHRoaXMuX19wcmV2Tm9DYW5jZWxPbkVzY0tleSA9IHRoaXMubm9DYW5jZWxPbkVzY0tleTtcbiAgICAgIHRoaXMuX19wcmV2V2l0aEJhY2tkcm9wID0gdGhpcy53aXRoQmFja2Ryb3A7XG4gICAgICB0aGlzLm5vQ2FuY2VsT25PdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgdGhpcy5ub0NhbmNlbE9uRXNjS2V5ID0gdHJ1ZTtcbiAgICAgIHRoaXMud2l0aEJhY2tkcm9wID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIHdhcyBjaGFuZ2VkIHRvIGZhbHNlLCBsZXQgaXQgZmFsc2UuXG4gICAgICB0aGlzLm5vQ2FuY2VsT25PdXRzaWRlQ2xpY2sgPVxuICAgICAgICAgIHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljayAmJiB0aGlzLl9fcHJldk5vQ2FuY2VsT25PdXRzaWRlQ2xpY2s7XG4gICAgICB0aGlzLm5vQ2FuY2VsT25Fc2NLZXkgPVxuICAgICAgICAgIHRoaXMubm9DYW5jZWxPbkVzY0tleSAmJiB0aGlzLl9fcHJldk5vQ2FuY2VsT25Fc2NLZXk7XG4gICAgICB0aGlzLndpdGhCYWNrZHJvcCA9IHRoaXMud2l0aEJhY2tkcm9wICYmIHRoaXMuX19wcmV2V2l0aEJhY2tkcm9wO1xuICAgIH1cbiAgfSxcblxuICBfdXBkYXRlQ2xvc2luZ1JlYXNvbkNvbmZpcm1lZDogZnVuY3Rpb24oY29uZmlybWVkKSB7XG4gICAgdGhpcy5jbG9zaW5nUmVhc29uID0gdGhpcy5jbG9zaW5nUmVhc29uIHx8IHt9O1xuICAgIHRoaXMuY2xvc2luZ1JlYXNvbi5jb25maXJtZWQgPSBjb25maXJtZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdpbGwgZGlzbWlzcyB0aGUgZGlhbG9nIGlmIHVzZXIgY2xpY2tlZCBvbiBhbiBlbGVtZW50IHdpdGggZGlhbG9nLWRpc21pc3NcbiAgICogb3IgZGlhbG9nLWNvbmZpcm0gYXR0cmlidXRlLlxuICAgKi9cbiAgX29uRGlhbG9nQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gU2VhcmNoIGZvciB0aGUgZWxlbWVudCB3aXRoIGRpYWxvZy1jb25maXJtIG9yIGRpYWxvZy1kaXNtaXNzLFxuICAgIC8vIGZyb20gdGhlIHJvb3QgdGFyZ2V0IHVudGlsIHRoaXMgKGV4Y2x1ZGVkKS5cbiAgICB2YXIgcGF0aCA9IGRvbShldmVudCkucGF0aDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBhdGguaW5kZXhPZih0aGlzKTsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIHRhcmdldCA9IHBhdGhbaV07XG4gICAgICBpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSAmJlxuICAgICAgICAgICh0YXJnZXQuaGFzQXR0cmlidXRlKCdkaWFsb2ctZGlzbWlzcycpIHx8XG4gICAgICAgICAgIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RpYWxvZy1jb25maXJtJykpKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNsb3NpbmdSZWFzb25Db25maXJtZWQoXG4gICAgICAgICAgICB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaWFsb2ctY29uZmlybScpKTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJEaWFsb2dCZWhhdmlvciA9XG4gICAgW0lyb25PdmVybGF5QmVoYXZpb3IsIFBhcGVyRGlhbG9nQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nLlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1kaWFsb2ctYmFja2dyb3VuZC1jb2xvcmAgfCBEaWFsb2cgYmFja2dyb3VuZCBjb2xvciB8IGAtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcmBcbmAtLXBhcGVyLWRpYWxvZy1jb2xvcmAgfCBEaWFsb2cgZm9yZWdyb3VuZCBjb2xvciB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWRpYWxvZ2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBkaWFsb2cgfCBge31gXG5gLS1wYXBlci1kaWFsb2ctdGl0bGVgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGl0bGUgKGA8aDI+YCkgZWxlbWVudCB8IGB7fWBcbmAtLXBhcGVyLWRpYWxvZy1idXR0b24tY29sb3JgIHwgQnV0dG9uIGFyZWEgZm9yZWdyb3VuZCBjb2xvciB8IGAtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcmBcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3NoYWRvdy5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWRpYWxvZy1zaGFyZWQtc3R5bGVzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDI0cHggNDBweDtcblxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlci1kaWFsb2ctYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMTZkcDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoLm5vLXBhZGRpbmcpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCo6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAvKiBJbiAxLngsIHRoaXMgc2VsZWN0b3Igd2FzIFxcYDpob3N0ID4gOjpjb250ZW50IGgyXFxgLiBJbiAyLnggPHNsb3Q+IGFsbG93c1xuICAgICAgdG8gc2VsZWN0IGRpcmVjdCBjaGlsZHJlbiBvbmx5LCB3aGljaCBpbmNyZWFzZXMgdGhlIHdlaWdodCBvZiB0aGlzXG4gICAgICBzZWxlY3Rvciwgc28gd2UgaGF2ZSB0byByZS1kZWZpbmUgZmlyc3QtY2hpbGQvbGFzdC1jaGlsZCBtYXJnaW5zIGJlbG93LiAqL1xuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoaDIpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC10aXRsZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nLXRpdGxlO1xuICAgICAgfVxuXG4gICAgICAvKiBBcHBseSBtaXhpbiBhZ2FpbiwgaW4gY2FzZSBpdCBzZXRzIG1hcmdpbi10b3AuICovXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChoMjpmaXJzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctdGl0bGU7XG4gICAgICB9XG5cbiAgICAgIC8qIEFwcGx5IG1peGluIGFnYWluLCBpbiBjYXNlIGl0IHNldHMgbWFyZ2luLWJvdHRvbS4gKi9cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKGgyOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nLXRpdGxlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgucGFwZXItZGlhbG9nLWJ1dHRvbnMpLFxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoLmJ1dHRvbnMpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAyNHB4O1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1idXR0b24tY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWVuZC1qdXN0aWZpZWQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgRGlhbG9nTWl4aW4gZnJvbSBcIi4uL21peGlucy9kaWFsb2ctbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRGlhbG9nTWl4aW5cbiAqL1xuY2xhc3MgSGFWb2ljZUNvbW1hbmREaWFsb2cgZXh0ZW5kcyBEaWFsb2dNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1kaWFsb2ctc2hhcmVkLXN0eWxlc1wiPlxuICAgICAgICBpcm9uLWljb24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2VzIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2VzOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UudXNlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAubWVzc2FnZS5oYXNzIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UuZXJyb3Ige1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludGVyaW1UcmFuc2NyaXB0IHtcbiAgICAgICAgICBjb2xvcjogZGFya2dyZXk7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG5cbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lc3NhZ2VzIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDY4dmg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZXNcIiBpZD1cIm1lc3NhZ2VzXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfY29udmVyc2F0aW9uXV1cIiBhcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MkPVwiW1tfY29tcHV0ZU1lc3NhZ2VDbGFzc2VzKG1lc3NhZ2UpXV1cIj5cbiAgICAgICAgICAgICAgW1ttZXNzYWdlLnRleHRdXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tyZXN1bHRzXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlIHVzZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e3tyZXN1bHRzLmZpbmFsfX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW50ZXJpbVRyYW5zY3JpcHRcIj5bW3Jlc3VsdHMuaW50ZXJpbV1dPC9zcGFuPiDigKZcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiIGhpZGRlbiQ9XCJbW3Jlc3VsdHNdXVwiPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6dGV4dC10by1zcGVlY2hcIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJzdGFydExpc3RlbmluZ1wiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgcmVzdWx0czoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBvYnNlcnZlcjogXCJfc2Nyb2xsTWVzc2FnZXNCb3R0b21cIixcbiAgICAgIH0sXG5cbiAgICAgIF9jb252ZXJzYXRpb246IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gW3sgd2hvOiBcImhhc3NcIiwgdGV4dDogXCJIb3cgY2FuIEkgaGVscD9cIiB9XTtcbiAgICAgICAgfSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3Njcm9sbE1lc3NhZ2VzQm90dG9tXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiZGlhbG9nT3BlbkNoYW5nZWQob3BlbmVkKVwiXTtcbiAgfVxuXG4gIHNob3dEaWFsb2coKSB7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICB9XG5cbiAgaW5pdFJlY29nbml0aW9uKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cbiAgICB0aGlzLnJlY29nbml0aW9uID0gbmV3IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuZXctY2FwICovXG5cbiAgICB0aGlzLnJlY29nbml0aW9uLm9uc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucmVzdWx0cyA9IHtcbiAgICAgICAgZmluYWw6IFwiXCIsXG4gICAgICAgIGludGVyaW06IFwiXCIsXG4gICAgICB9O1xuICAgIH0uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlY29nbml0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucmVjb2duaXRpb24uYWJvcnQoKTtcbiAgICAgIHZhciB0ZXh0ID0gdGhpcy5yZXN1bHRzLmZpbmFsIHx8IHRoaXMucmVzdWx0cy5pbnRlcmltO1xuICAgICAgdGhpcy5yZXN1bHRzID0gbnVsbDtcbiAgICAgIGlmICh0ZXh0ID09PSBcIlwiKSB7XG4gICAgICAgIHRleHQgPSBcIjzniaflhbvniqwgZGlkIG5vdCBoZWFyIGFueXRoaW5nPlwiO1xuICAgICAgfVxuICAgICAgdGhpcy5wdXNoKFwiX2NvbnZlcnNhdGlvblwiLCB7IHdobzogXCJ1c2VyXCIsIHRleHQ6IHRleHQsIGVycm9yOiB0cnVlIH0pO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlY29nbml0aW9uLm9uZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBBbHJlYWR5IGhhbmRsZWQgYnkgb25lcnJvclxuICAgICAgaWYgKHRoaXMucmVzdWx0cyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB0ZXh0ID0gdGhpcy5yZXN1bHRzLmZpbmFsIHx8IHRoaXMucmVzdWx0cy5pbnRlcmltO1xuICAgICAgdGhpcy5yZXN1bHRzID0gbnVsbDtcbiAgICAgIHRoaXMucHVzaChcIl9jb252ZXJzYXRpb25cIiwgeyB3aG86IFwidXNlclwiLCB0ZXh0OiB0ZXh0IH0pO1xuXG4gICAgICB0aGlzLmhhc3MuY2FsbEFwaShcInBvc3RcIiwgXCJjb252ZXJzYXRpb24vcHJvY2Vzc1wiLCB7IHRleHQ6IHRleHQgfSkudGhlbihcbiAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICB0aGlzLnB1c2goXCJfY29udmVyc2F0aW9uXCIsIHtcbiAgICAgICAgICAgIHdobzogXCJoYXNzXCIsXG4gICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5zcGVlY2gucGxhaW4uc3BlZWNoLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuc2V0KFxuICAgICAgICAgICAgW1wiX2NvbnZlcnNhdGlvblwiLCB0aGlzLl9jb252ZXJzYXRpb24ubGVuZ3RoIC0gMSwgXCJlcnJvclwiXSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZWNvZ25pdGlvbi5vbnJlc3VsdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgb2xkUmVzdWx0cyA9IHRoaXMucmVzdWx0cztcbiAgICAgIHZhciBmaW5hbFRyYW5zY3JpcHQgPSBcIlwiO1xuICAgICAgdmFyIGludGVyaW1UcmFuc2NyaXB0ID0gXCJcIjtcblxuICAgICAgZm9yICh2YXIgaW5kID0gZXZlbnQucmVzdWx0SW5kZXg7IGluZCA8IGV2ZW50LnJlc3VsdHMubGVuZ3RoOyBpbmQrKykge1xuICAgICAgICBpZiAoZXZlbnQucmVzdWx0c1tpbmRdLmlzRmluYWwpIHtcbiAgICAgICAgICBmaW5hbFRyYW5zY3JpcHQgKz0gZXZlbnQucmVzdWx0c1tpbmRdWzBdLnRyYW5zY3JpcHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW50ZXJpbVRyYW5zY3JpcHQgKz0gZXZlbnQucmVzdWx0c1tpbmRdWzBdLnRyYW5zY3JpcHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXN1bHRzID0ge1xuICAgICAgICBpbnRlcmltOiBpbnRlcmltVHJhbnNjcmlwdCxcbiAgICAgICAgZmluYWw6IG9sZFJlc3VsdHMuZmluYWwgKyBmaW5hbFRyYW5zY3JpcHQsXG4gICAgICB9O1xuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIGlmICghdGhpcy5yZWNvZ25pdGlvbikge1xuICAgICAgdGhpcy5pbml0UmVjb2duaXRpb24oKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc3VsdHMgPSB7XG4gICAgICBpbnRlcmltOiBcIlwiLFxuICAgICAgZmluYWw6IFwiXCIsXG4gICAgfTtcbiAgICB0aGlzLnJlY29nbml0aW9uLnN0YXJ0KCk7XG4gIH1cblxuICBfc2Nyb2xsTWVzc2FnZXNCb3R0b20oKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiQubWVzc2FnZXMuc2Nyb2xsVG9wID0gdGhpcy4kLm1lc3NhZ2VzLnNjcm9sbEhlaWdodDtcblxuICAgICAgaWYgKHRoaXMuJC5tZXNzYWdlcy5zY3JvbGxUb3AgIT09IDApIHtcbiAgICAgICAgdGhpcy4kLmRpYWxvZy5maXJlKFwiaXJvbi1yZXNpemVcIik7XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgZGlhbG9nT3BlbkNoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5zdGFydExpc3RlbmluZygpO1xuICAgIH0gZWxzZSBpZiAoIW5ld1ZhbCAmJiB0aGlzLnJlc3VsdHMpIHtcbiAgICAgIHRoaXMucmVjb2duaXRpb24uYWJvcnQoKTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZU1lc3NhZ2VDbGFzc2VzKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gXCJtZXNzYWdlIFwiICsgbWVzc2FnZS53aG8gKyAobWVzc2FnZS5lcnJvciA/IFwiIGVycm9yXCIgOiBcIlwiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS12b2ljZS1jb21tYW5kLWRpYWxvZ1wiLCBIYVZvaWNlQ29tbWFuZERpYWxvZyk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBQYXBlckRpYWxvZ0JlaGF2aW9yIH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctYmVoYXZpb3JcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi9ldmVudHMtbWl4aW5cIjtcbi8qKlxuICogQHBvbHltZXJNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBQYXBlckRpYWxvZ0JlaGF2aW9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoXG4gICAgICBbRXZlbnRzTWl4aW4sIFBhcGVyRGlhbG9nQmVoYXZpb3JdLFxuICAgICAgc3VwZXJDbGFzc1xuICAgICkge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpdGhCYWNrZHJvcDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDelFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==