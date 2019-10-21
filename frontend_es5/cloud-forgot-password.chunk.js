(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-forgot-password"],{

/***/ "./src/panels/config/cloud/forgot-password/cloud-forgot-password.js":
/*!**************************************************************************!*\
  !*** ./src/panels/config/cloud/forgot-password/cloud-forgot-password.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding-bottom: 24px;\n          direction: ltr;\n        }\n\n        ha-card {\n          max-width: 600px;\n          margin: 0 auto;\n          margin-top: 24px;\n        }\n        h1 {\n          @apply --paper-font-headline;\n          margin: 0;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        .card-actions a {\n          color: var(--primary-text-color);\n        }\n        [hidden] {\n          display: none;\n        }\n      </style>\n      <hass-subpage header=[[localize('ui.panel.config.cloud.forgot_password.title')]]>\n        <div class=\"content\">\n          <ha-card header=[[localize('ui.panel.config.cloud.forgot_password.subtitle')]]>\n            <div class=\"card-content\">\n              <p>\n                [[localize('ui.panel.config.cloud.forgot_password.instructions')]]\n              </p>\n              <div class=\"error\" hidden$=\"[[!_error]]\">[[_error]]</div>\n              <paper-input\n                autofocus=\"\"\n                id=\"email\"\n                label=\"[[localize('ui.panel.config.cloud.forgot_password.email')]]\"\n                value=\"{{email}}\"\n                type=\"email\"\n                on-keydown=\"_keyDown\"\n                error-message=\"[[localize('ui.panel.config.cloud.forgot_password.email_error_msg')]]\"\n              ></paper-input>\n            </div>\n            <div class=\"card-actions\">\n              <ha-progress-button\n                on-click=\"_handleEmailPasswordReset\"\n                progress=\"[[_requestInProgress]]\"\n                >[[localize('ui.panel.config.cloud.forgot_password.send_reset_email')]]</ha-progress-button\n              >\n            </div>\n          </ha-card>\n        </div>\n      </hass-subpage>\n    "]);

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










/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var CloudForgotPassword =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(CloudForgotPassword, _LocalizeMixin);

  function CloudForgotPassword() {
    _classCallCheck(this, CloudForgotPassword);

    return _possibleConstructorReturn(this, _getPrototypeOf(CloudForgotPassword).apply(this, arguments));
  }

  _createClass(CloudForgotPassword, [{
    key: "_emailChanged",
    value: function _emailChanged() {
      this._error = "";
      this.$.email.invalid = false;
    }
  }, {
    key: "_keyDown",
    value: function _keyDown(ev) {
      // validate on enter
      if (ev.keyCode === 13) {
        this._handleEmailPasswordReset();

        ev.preventDefault();
      }
    }
  }, {
    key: "_handleEmailPasswordReset",
    value: function _handleEmailPasswordReset() {
      var _this = this;

      if (!this.email || !this.email.includes("@")) {
        this.$.email.invalid = true;
      }

      if (this.$.email.invalid) return;
      this._requestInProgress = true;
      this.hass.callApi("post", "cloud/forgot_password", {
        email: this.email
      }).then(function () {
        _this._requestInProgress = false;

        _this.fire("cloud-done", {
          flashMessage: "[[localize('ui.panel.config.cloud.forgot_password.check_your_email')]]"
        });
      }, function (err) {
        return _this.setProperties({
          _requestInProgress: false,
          _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
        });
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        email: {
          type: String,
          notify: true,
          observer: "_emailChanged"
        },
        _requestInProgress: {
          type: Boolean,
          value: false
        },
        _error: {
          type: String,
          value: ""
        }
      };
    }
  }]);

  return CloudForgotPassword;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])));

customElements.define("cloud-forgot-password", CloudForgotPassword);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZm9yZ290LXBhc3N3b3JkLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvZm9yZ290LXBhc3N3b3JkL2Nsb3VkLWZvcmdvdC1wYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIENsb3VkRm9yZ290UGFzc3dvcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1hY3Rpb25zIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmZvcmdvdF9wYXNzd29yZC50aXRsZScpXV0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGhhLWNhcmQgaGVhZGVyPVtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5mb3Jnb3RfcGFzc3dvcmQuc3VidGl0bGUnKV1dPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuZm9yZ290X3Bhc3N3b3JkLmluc3RydWN0aW9ucycpXV1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiBoaWRkZW4kPVwiW1shX2Vycm9yXV1cIj5bW19lcnJvcl1dPC9kaXY+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIGF1dG9mb2N1cz1cIlwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuZm9yZ290X3Bhc3N3b3JkLmVtYWlsJyldXVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2VtYWlsfX1cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgb24ta2V5ZG93bj1cIl9rZXlEb3duXCJcbiAgICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmZvcmdvdF9wYXNzd29yZC5lbWFpbF9lcnJvcl9tc2cnKV1dXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGhhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2hhbmRsZUVtYWlsUGFzc3dvcmRSZXNldFwiXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M9XCJbW19yZXF1ZXN0SW5Qcm9ncmVzc11dXCJcbiAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmZvcmdvdF9wYXNzd29yZC5zZW5kX3Jlc2V0X2VtYWlsJyldXTwvaGEtcHJvZ3Jlc3MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2VtYWlsQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9yZXF1ZXN0SW5Qcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgX2Vycm9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfZW1haWxDaGFuZ2VkKCkge1xuICAgIHRoaXMuX2Vycm9yID0gXCJcIjtcbiAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IGZhbHNlO1xuICB9XG5cbiAgX2tleURvd24oZXYpIHtcbiAgICAvLyB2YWxpZGF0ZSBvbiBlbnRlclxuICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5faGFuZGxlRW1haWxQYXNzd29yZFJlc2V0KCk7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVFbWFpbFBhc3N3b3JkUmVzZXQoKSB7XG4gICAgaWYgKCF0aGlzLmVtYWlsIHx8ICF0aGlzLmVtYWlsLmluY2x1ZGVzKFwiQFwiKSkge1xuICAgICAgdGhpcy4kLmVtYWlsLmludmFsaWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiQuZW1haWwuaW52YWxpZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fcmVxdWVzdEluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJjbG91ZC9mb3Jnb3RfcGFzc3dvcmRcIiwge1xuICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgIH0pXG4gICAgICAudGhlbihcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlcXVlc3RJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5maXJlKFwiY2xvdWQtZG9uZVwiLCB7XG4gICAgICAgICAgICBmbGFzaE1lc3NhZ2U6XG4gICAgICAgICAgICAgIFwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmZvcmdvdF9wYXNzd29yZC5jaGVja195b3VyX2VtYWlsJyldXVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PlxuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgICBfcmVxdWVzdEluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgICAgX2Vycm9yOlxuICAgICAgICAgICAgICBlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgID8gZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgIDogXCJVbmtub3duIGVycm9yXCIsXG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiY2xvdWQtZm9yZ290LXBhc3N3b3JkXCIsIENsb3VkRm9yZ290UGFzc3dvcmQpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBbUZBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBU0E7OztBQTdIQTtBQUNBO0FBNERBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBZ0JBOzs7O0FBakZBO0FBQ0E7QUFnSUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==