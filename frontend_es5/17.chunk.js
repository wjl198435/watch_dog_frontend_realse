(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/fecha/src/fecha.js":
/*!*****************************************!*\
  !*** ./node_modules/fecha/src/fecha.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Parse or format dates
 * @class fecha
 */
var fecha = {};
var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigits = '\\d\\d?';
var threeDigits = '\\d{3}';
var fourDigits = '\\d{4}';
var word = '[^\\s]+';
var literal = /\[([^]*?)\]/gm;

var noop = function noop() {};

function regexEscape(str) {
  return str.replace(/[|\\{()[^$+*?.-]/g, '\\$&');
}

function shorten(arr, sLen) {
  var newArr = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen));
  }

  return newArr;
}

function monthUpdate(arrName) {
  return function (d, v, i18n) {
    var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());

    if (~index) {
      d.month = index;
    }
  };
}

function pad(val, len) {
  val = String(val);
  len = len || 2;

  while (val.length < len) {
    val = '0' + val;
  }

  return val;
}

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
fecha.i18n = {
  dayNamesShort: dayNamesShort,
  dayNames: dayNames,
  monthNamesShort: monthNamesShort,
  monthNames: monthNames,
  amPm: ['am', 'pm'],
  DoFn: function DoFn(D) {
    return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
  }
};
var formatFlags = {
  D: function D(dateObj) {
    return dateObj.getDate();
  },
  DD: function DD(dateObj) {
    return pad(dateObj.getDate());
  },
  Do: function Do(dateObj, i18n) {
    return i18n.DoFn(dateObj.getDate());
  },
  d: function d(dateObj) {
    return dateObj.getDay();
  },
  dd: function dd(dateObj) {
    return pad(dateObj.getDay());
  },
  ddd: function ddd(dateObj, i18n) {
    return i18n.dayNamesShort[dateObj.getDay()];
  },
  dddd: function dddd(dateObj, i18n) {
    return i18n.dayNames[dateObj.getDay()];
  },
  M: function M(dateObj) {
    return dateObj.getMonth() + 1;
  },
  MM: function MM(dateObj) {
    return pad(dateObj.getMonth() + 1);
  },
  MMM: function MMM(dateObj, i18n) {
    return i18n.monthNamesShort[dateObj.getMonth()];
  },
  MMMM: function MMMM(dateObj, i18n) {
    return i18n.monthNames[dateObj.getMonth()];
  },
  YY: function YY(dateObj) {
    return pad(String(dateObj.getFullYear()), 4).substr(2);
  },
  YYYY: function YYYY(dateObj) {
    return pad(dateObj.getFullYear(), 4);
  },
  h: function h(dateObj) {
    return dateObj.getHours() % 12 || 12;
  },
  hh: function hh(dateObj) {
    return pad(dateObj.getHours() % 12 || 12);
  },
  H: function H(dateObj) {
    return dateObj.getHours();
  },
  HH: function HH(dateObj) {
    return pad(dateObj.getHours());
  },
  m: function m(dateObj) {
    return dateObj.getMinutes();
  },
  mm: function mm(dateObj) {
    return pad(dateObj.getMinutes());
  },
  s: function s(dateObj) {
    return dateObj.getSeconds();
  },
  ss: function ss(dateObj) {
    return pad(dateObj.getSeconds());
  },
  S: function S(dateObj) {
    return Math.round(dateObj.getMilliseconds() / 100);
  },
  SS: function SS(dateObj) {
    return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
  },
  SSS: function SSS(dateObj) {
    return pad(dateObj.getMilliseconds(), 3);
  },
  a: function a(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
  },
  A: function A(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
  },
  ZZ: function ZZ(dateObj) {
    var o = dateObj.getTimezoneOffset();
    return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
  }
};
var parseFlags = {
  D: [twoDigits, function (d, v) {
    d.day = v;
  }],
  Do: [twoDigits + word, function (d, v) {
    d.day = parseInt(v, 10);
  }],
  M: [twoDigits, function (d, v) {
    d.month = v - 1;
  }],
  YY: [twoDigits, function (d, v) {
    var da = new Date(),
        cent = +('' + da.getFullYear()).substr(0, 2);
    d.year = '' + (v > 68 ? cent - 1 : cent) + v;
  }],
  h: [twoDigits, function (d, v) {
    d.hour = v;
  }],
  m: [twoDigits, function (d, v) {
    d.minute = v;
  }],
  s: [twoDigits, function (d, v) {
    d.second = v;
  }],
  YYYY: [fourDigits, function (d, v) {
    d.year = v;
  }],
  S: ['\\d', function (d, v) {
    d.millisecond = v * 100;
  }],
  SS: ['\\d{2}', function (d, v) {
    d.millisecond = v * 10;
  }],
  SSS: [threeDigits, function (d, v) {
    d.millisecond = v;
  }],
  d: [twoDigits, noop],
  ddd: [word, noop],
  MMM: [word, monthUpdate('monthNamesShort')],
  MMMM: [word, monthUpdate('monthNames')],
  a: [word, function (d, v, i18n) {
    var val = v.toLowerCase();

    if (val === i18n.amPm[0]) {
      d.isPm = false;
    } else if (val === i18n.amPm[1]) {
      d.isPm = true;
    }
  }],
  ZZ: ['[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z', function (d, v) {
    var parts = (v + '').match(/([+-]|\d\d)/gi),
        minutes;

    if (parts) {
      minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
      d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
    }
  }]
};
parseFlags.dd = parseFlags.d;
parseFlags.dddd = parseFlags.ddd;
parseFlags.DD = parseFlags.D;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.MM = parseFlags.M;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a; // Some common format strings

fecha.masks = {
  "default": 'ddd MMM DD YYYY HH:mm:ss',
  shortDate: 'M/D/YY',
  mediumDate: 'MMM D, YYYY',
  longDate: 'MMMM D, YYYY',
  fullDate: 'dddd, MMMM D, YYYY',
  shortTime: 'HH:mm',
  mediumTime: 'HH:mm:ss',
  longTime: 'HH:mm:ss.SSS'
};
/***
 * Format a date
 * @method format
 * @param {Date|number} dateObj
 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
 */

fecha.format = function (dateObj, mask, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof dateObj === 'number') {
    dateObj = new Date(dateObj);
  }

  if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
    throw new Error('Invalid Date in fecha.format');
  }

  mask = fecha.masks[mask] || mask || fecha.masks['default'];
  var literals = []; // Make literals inactive by replacing them with ??

  mask = mask.replace(literal, function ($0, $1) {
    literals.push($1);
    return '??';
  }); // Apply formatting rules

  mask = mask.replace(token, function ($0) {
    return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
  }); // Inline literal values back into the formatted value

  return mask.replace(/\?\?/g, function () {
    return literals.shift();
  });
};
/**
 * Parse a date string into an object, changes - into /
 * @method parse
 * @param {string} dateStr Date string
 * @param {string} format Date parse format
 * @returns {Date|boolean}
 */


fecha.parse = function (dateStr, format, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof format !== 'string') {
    throw new Error('Invalid format in fecha.parse');
  }

  format = fecha.masks[format] || format; // Avoid regular expression denial of service, fail early for really long strings
  // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS

  if (dateStr.length > 1000) {
    return null;
  }

  var dateInfo = {};
  var parseInfo = [];
  var newFormat = regexEscape(format).replace(token, function ($0) {
    if (parseFlags[$0]) {
      var info = parseFlags[$0];
      parseInfo.push(info[1]);
      return '(' + info[0] + ')';
    }

    return $0;
  });
  var matches = dateStr.match(new RegExp(newFormat, 'i'));

  if (!matches) {
    return null;
  }

  for (var i = 1; i < matches.length; i++) {
    parseInfo[i - 1](dateInfo, matches[i], i18n);
  }

  var today = new Date();

  if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
    dateInfo.hour = +dateInfo.hour + 12;
  } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
    dateInfo.hour = 0;
  }

  var date;

  if (dateInfo.timezoneOffset != null) {
    dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
    date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
  } else {
    date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
  }

  return date;
};

/* harmony default export */ __webpack_exports__["default"] = (fecha);

/***/ }),

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");

// Check for support of native locale string options
function toLocaleTimeStringSupportsOptions() {
    try {
        new Date().toLocaleTimeString("i");
    }
    catch (e) {
        return e.name === "RangeError";
    }
    return false;
}
/* harmony default export */ __webpack_exports__["default"] = (toLocaleTimeStringSupportsOptions()
    ? function (dateObj, locales) {
        return dateObj.toLocaleTimeString(locales, {
            hour: "numeric",
            minute: "2-digit",
        });
    }
    : function (dateObj) { return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime"); });


/***/ }),

/***/ "./src/components/ha-card.ts":
/*!***********************************!*\
  !*** ./src/components/ha-card.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


var HaCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaCard, _super);
    function HaCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HaCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "], ["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HaCard.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <slot></slot>\n    "], ["\n      ",
            "\n      <slot></slot>\n    "])), this.header
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <div class=\"card-header\">", "</div>\n          "], ["\n            <div class=\"card-header\">", "</div>\n          "])), this.header) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaCard.prototype, "header", void 0);
    return HaCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("ha-card", HaCard);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


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




var HaCodeEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaCodeEditor, _super);
    function HaCodeEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autofocus = false;
        _this.rtl = false;
        _this.error = false;
        _this._value = "";
        return _this;
    }
    Object.defineProperty(HaCodeEditor.prototype, "value", {
        get: function () {
            return this.codemirror ? this.codemirror.getValue() : this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaCodeEditor.prototype, "hasComments", {
        get: function () {
            return this.shadowRoot.querySelector("span.cm-comment") ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    HaCodeEditor.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (!this.codemirror) {
            return;
        }
        this.codemirror.refresh();
        if (this.autofocus !== false) {
            this.codemirror.focus();
        }
    };
    HaCodeEditor.prototype.update = function (changedProps) {
        _super.prototype.update.call(this, changedProps);
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
    };
    HaCodeEditor.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        this._load();
    };
    HaCodeEditor.prototype._load = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loaded, codeMirror, shadowRoot;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_1__["loadCodeMirror"])()];
                    case 1:
                        loaded = _a.sent();
                        codeMirror = loaded.codeMirror;
                        shadowRoot = this.attachShadow({ mode: "open" });
                        shadowRoot.innerHTML = "\n    <style>\n      " + loaded.codeMirrorCss + "\n      .CodeMirror {\n        height: var(--code-mirror-height, auto);\n        direction: var(--code-mirror-direction, ltr);\n      }\n      .CodeMirror-scroll {\n        max-height: var(--code-mirror-max-height, --code-mirror-height);\n      }\n      .CodeMirror-gutters {\n        border-right: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        background-color: var(--paper-dialog-background-color, var(--primary-background-color));\n        transition: 0.2s ease border-right;\n      }\n      :host(.error-state) .CodeMirror-gutters {\n        border-color: var(--error-state-color, red);\n      }\n      .CodeMirror-focused .CodeMirror-gutters {\n        border-right: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n      }\n      .CodeMirror-linenumber {\n        color: var(--paper-dialog-color, var(--primary-text-color));\n      }\n      .rtl .CodeMirror-vscrollbar {\n        right: auto;\n        left: 0px;\n      }\n      .rtl-gutter {\n        width: 20px;\n      }\n    </style>";
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
                        this.codemirror.on("changes", function () { return _this._onChange(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HaCodeEditor.prototype._onChange = function () {
        var newValue = this.value;
        if (newValue === this._value) {
            return;
        }
        this._value = newValue;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", { value: this._value });
    };
    HaCodeEditor.prototype._calcGutters = function () {
        return this.rtl ? ["rtl-gutter", "CodeMirror-linenumbers"] : [];
    };
    HaCodeEditor.prototype._setScrollBarDirection = function () {
        if (this.codemirror) {
            this.codemirror.getWrapperElement().classList.toggle("rtl", this.rtl);
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
    return HaCodeEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_3__["UpdatingElement"]));



/***/ }),

/***/ "./src/data/mqtt.ts":
/*!**************************!*\
  !*** ./src/data/mqtt.ts ***!
  \**************************/
/*! exports provided: subscribeMQTTTopic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeMQTTTopic", function() { return subscribeMQTTTopic; });
var subscribeMQTTTopic = function (hass, topic, callback) {
    return hass.connection.subscribeMessage(callback, {
        type: "mqtt/subscribe",
        topic: topic,
    });
};


/***/ }),

/***/ "./src/panels/developer-tools/mqtt/developer-tools-mqtt.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/developer-tools/mqtt/developer-tools-mqtt.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _mqtt_subscribe_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mqtt-subscribe-card */ "./src/panels/developer-tools/mqtt/mqtt-subscribe-card.ts");








var HaPanelDevMqtt = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPanelDevMqtt, _super);
    function HaPanelDevMqtt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topic = "";
        _this.payload = "";
        _this.inited = false;
        return _this;
    }
    HaPanelDevMqtt.prototype.firstUpdated = function () {
        if (localStorage && localStorage["panel-dev-mqtt-topic"]) {
            this.topic = localStorage["panel-dev-mqtt-topic"];
        }
        if (localStorage && localStorage["panel-dev-mqtt-payload"]) {
            this.payload = localStorage["panel-dev-mqtt-payload"];
        }
        this.inited = true;
    };
    HaPanelDevMqtt.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"content\">\n        <ha-card header=\"Publish a packet\">\n          <div class=\"card-content\">\n            <paper-input\n              label=\"topic\"\n              .value=", "\n              @value-changed=", "\n            ></paper-input>\n\n            <p>Payload (template allowed)</p>\n            <ha-code-editor\n              mode=\"jinja2\"\n              .value=\"", "\"\n              @value-changed=", "\n            ></ha-code-editor>\n          </div>\n          <div class=\"card-actions\">\n            <mwc-button @click=", ">Publish</mwc-button>\n          </div>\n        </ha-card>\n\n        <mqtt-subscribe-card .hass=", "></mqtt-subscribe-card>\n      </div>\n    "], ["\n      <div class=\"content\">\n        <ha-card header=\"Publish a packet\">\n          <div class=\"card-content\">\n            <paper-input\n              label=\"topic\"\n              .value=", "\n              @value-changed=", "\n            ></paper-input>\n\n            <p>Payload (template allowed)</p>\n            <ha-code-editor\n              mode=\"jinja2\"\n              .value=\"", "\"\n              @value-changed=", "\n            ></ha-code-editor>\n          </div>\n          <div class=\"card-actions\">\n            <mwc-button @click=", ">Publish</mwc-button>\n          </div>\n        </ha-card>\n\n        <mqtt-subscribe-card .hass=", "></mqtt-subscribe-card>\n      </div>\n    "])), this.topic, this._handleTopic, this.payload, this._handlePayload, this._publish, this.hass);
    };
    HaPanelDevMqtt.prototype._handleTopic = function (ev) {
        this.topic = ev.detail.value;
        if (localStorage && this.inited) {
            localStorage["panel-dev-mqtt-topic"] = this.topic;
        }
    };
    HaPanelDevMqtt.prototype._handlePayload = function (ev) {
        this.payload = ev.detail.value;
        if (localStorage && this.inited) {
            localStorage["panel-dev-mqtt-payload"] = this.payload;
        }
    };
    HaPanelDevMqtt.prototype._publish = function () {
        if (!this.hass) {
            return;
        }
        this.hass.callService("mqtt", "publish", {
            topic: this.topic,
            payload_template: this.payload,
        });
    };
    Object.defineProperty(HaPanelDevMqtt, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_4__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          padding: 24px 0 32px;\n          max-width: 600px;\n          margin: 0 auto;\n          direction: ltr;\n        }\n\n        mwc-button {\n          background-color: white;\n        }\n\n        mqtt-subscribe-card {\n          display: block;\n          margin: 16px auto;\n        }\n      "], ["\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          padding: 24px 0 32px;\n          max-width: 600px;\n          margin: 0 auto;\n          direction: ltr;\n        }\n\n        mwc-button {\n          background-color: white;\n        }\n\n        mqtt-subscribe-card {\n          display: block;\n          margin: 16px auto;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaPanelDevMqtt.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaPanelDevMqtt.prototype, "topic", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaPanelDevMqtt.prototype, "payload", void 0);
    HaPanelDevMqtt = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("developer-tools-mqtt")
    ], HaPanelDevMqtt);
    return HaPanelDevMqtt;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/developer-tools/mqtt/mqtt-subscribe-card.ts":
/*!****************************************************************!*\
  !*** ./src/panels/developer-tools/mqtt/mqtt-subscribe-card.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _data_mqtt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/mqtt */ "./src/data/mqtt.ts");







var MqttSubscribeCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MqttSubscribeCard, _super);
    function MqttSubscribeCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._topic = "";
        _this._messages = [];
        _this._messageCount = 0;
        return _this;
    }
    MqttSubscribeCard.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        if (this._subscribed) {
            this._subscribed();
            this._subscribed = undefined;
        }
    };
    MqttSubscribeCard.prototype.render = function () {
        var _this = this;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card header=\"Listen to a topic\">\n        <form>\n          <paper-input\n            .label=", "\n            .disabled=", "\n            .value=", "\n            @value-changed=", "\n          ></paper-input>\n          <mwc-button\n            .disabled=", "\n            @click=", "\n            type=\"submit\"\n          >\n            ", "\n          </mwc-button>\n        </form>\n        <div class=\"events\">\n          ", "\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card header=\"Listen to a topic\">\n        <form>\n          <paper-input\n            .label=",
            "\n            .disabled=", "\n            .value=", "\n            @value-changed=", "\n          ></paper-input>\n          <mwc-button\n            .disabled=", "\n            @click=", "\n            type=\"submit\"\n          >\n            ", "\n          </mwc-button>\n        </form>\n        <div class=\"events\">\n          ",
            "\n        </div>\n      </ha-card>\n    "])), this._subscribed
            ? "Listening to"
            : "Topic to subscribe to", this._subscribed !== undefined, this._topic, this._valueChanged, this._topic === "", this._handleSubmit, this._subscribed ? "Stop listening" : "Start listening", this._messages.map(function (msg) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"event\">\n                Message ", " received on <b>", "</b> at\n                ", ":\n                <pre>", "</pre>\n                <div class=\"bottom\">\n                  QoS: ", " - Retain:\n                  ", "\n                </div>\n              </div>\n            "], ["\n              <div class=\"event\">\n                Message ", " received on <b>", "</b> at\n                ", ":\n                <pre>", "</pre>\n                <div class=\"bottom\">\n                  QoS: ", " - Retain:\n                  ", "\n                </div>\n              </div>\n            "])), msg.id, msg.message.topic, Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__["default"])(msg.time, _this.hass.language), msg.payload, msg.message.qos, Boolean(msg.message.retain)); }));
    };
    MqttSubscribeCard.prototype._valueChanged = function (ev) {
        this._topic = ev.detail.value;
    };
    MqttSubscribeCard.prototype._handleSubmit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this._subscribed) return [3 /*break*/, 1];
                        this._subscribed();
                        this._subscribed = undefined;
                        return [3 /*break*/, 3];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, Object(_data_mqtt__WEBPACK_IMPORTED_MODULE_6__["subscribeMQTTTopic"])(this.hass, this._topic, function (message) { return _this._handleMessage(message); })];
                    case 2:
                        _a._subscribed = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MqttSubscribeCard.prototype._handleMessage = function (message) {
        var tail = this._messages.length > 30 ? this._messages.slice(0, 29) : this._messages;
        var payload;
        try {
            payload = JSON.stringify(JSON.parse(message.payload), null, 4);
        }
        catch (e) {
            payload = message.payload;
        }
        this._messages = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
            {
                payload: payload,
                message: message,
                time: new Date(),
                id: this._messageCount++,
            }
        ], tail);
    };
    Object.defineProperty(MqttSubscribeCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      form {\n        display: block;\n        padding: 16px;\n      }\n      paper-input {\n        display: inline-block;\n        width: 200px;\n      }\n      .events {\n        margin: -16px 0;\n        padding: 0 16px;\n      }\n      .event {\n        border-bottom: 1px solid var(--divider-color);\n        padding-bottom: 16px;\n        margin: 16px 0;\n      }\n      .event:last-child {\n        border-bottom: 0;\n      }\n      .bottom {\n        font-size: 80%;\n        color: var(--secondary-text-color);\n      }\n    "], ["\n      form {\n        display: block;\n        padding: 16px;\n      }\n      paper-input {\n        display: inline-block;\n        width: 200px;\n      }\n      .events {\n        margin: -16px 0;\n        padding: 0 16px;\n      }\n      .event {\n        border-bottom: 1px solid var(--divider-color);\n        padding-bottom: 16px;\n        margin: 16px 0;\n      }\n      .event:last-child {\n        border-bottom: 0;\n      }\n      .bottom {\n        font-size: 80%;\n        color: var(--secondary-text-color);\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], MqttSubscribeCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], MqttSubscribeCard.prototype, "_topic", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], MqttSubscribeCard.prototype, "_subscribed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], MqttSubscribeCard.prototype, "_messages", void 0);
    MqttSubscribeCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("mqtt-subscribe-card")
    ], MqttSubscribeCard);
    return MqttSubscribeCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var loaded;
var loadCodeMirror = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (!loaded) {
            loaded = Promise.all(/*! import() | codemirror */[__webpack_require__.e("vendors~codemirror"), __webpack_require__.e("codemirror")]).then(__webpack_require__.bind(null, /*! ./codemirror */ "./src/resources/codemirror.ts"));
        }
        return [2 /*return*/, loaded];
    });
}); };


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmVjaGEvc3JjL2ZlY2hhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9tcXR0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL21xdHQvZGV2ZWxvcGVyLXRvb2xzLW1xdHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvbXF0dC9tcXR0LXN1YnNjcmliZS1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvY29kZW1pcnJvci5vbmRlbWFuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBhcnNlIG9yIGZvcm1hdCBkYXRlc1xuICogQGNsYXNzIGZlY2hhXG4gKi9cbnZhciBmZWNoYSA9IHt9O1xudmFyIHRva2VuID0gL2R7MSw0fXxNezEsNH18WVkoPzpZWSk/fFN7MSwzfXxEb3xaWnwoW0hoTXNEbV0pXFwxP3xbYUFdfFwiW15cIl0qXCJ8J1teJ10qJy9nO1xudmFyIHR3b0RpZ2l0cyA9ICdcXFxcZFxcXFxkPyc7XG52YXIgdGhyZWVEaWdpdHMgPSAnXFxcXGR7M30nO1xudmFyIGZvdXJEaWdpdHMgPSAnXFxcXGR7NH0nO1xudmFyIHdvcmQgPSAnW15cXFxcc10rJztcbnZhciBsaXRlcmFsID0gL1xcWyhbXl0qPylcXF0vZ207XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHtcbn07XG5cbmZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC9bfFxcXFx7KClbXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBzaG9ydGVuKGFyciwgc0xlbikge1xuICB2YXIgbmV3QXJyID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBuZXdBcnIucHVzaChhcnJbaV0uc3Vic3RyKDAsIHNMZW4pKTtcbiAgfVxuICByZXR1cm4gbmV3QXJyO1xufVxuXG5mdW5jdGlvbiBtb250aFVwZGF0ZShhcnJOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZCwgdiwgaTE4bikge1xuICAgIHZhciBpbmRleCA9IGkxOG5bYXJyTmFtZV0uaW5kZXhPZih2LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdi5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKH5pbmRleCkge1xuICAgICAgZC5tb250aCA9IGluZGV4O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFkKHZhbCwgbGVuKSB7XG4gIHZhbCA9IFN0cmluZyh2YWwpO1xuICBsZW4gPSBsZW4gfHwgMjtcbiAgd2hpbGUgKHZhbC5sZW5ndGggPCBsZW4pIHtcbiAgICB2YWwgPSAnMCcgKyB2YWw7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIGRheU5hbWVzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xudmFyIG1vbnRoTmFtZXMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcbnZhciBtb250aE5hbWVzU2hvcnQgPSBzaG9ydGVuKG1vbnRoTmFtZXMsIDMpO1xudmFyIGRheU5hbWVzU2hvcnQgPSBzaG9ydGVuKGRheU5hbWVzLCAzKTtcbmZlY2hhLmkxOG4gPSB7XG4gIGRheU5hbWVzU2hvcnQ6IGRheU5hbWVzU2hvcnQsXG4gIGRheU5hbWVzOiBkYXlOYW1lcyxcbiAgbW9udGhOYW1lc1Nob3J0OiBtb250aE5hbWVzU2hvcnQsXG4gIG1vbnRoTmFtZXM6IG1vbnRoTmFtZXMsXG4gIGFtUG06IFsnYW0nLCAncG0nXSxcbiAgRG9GbjogZnVuY3Rpb24gRG9GbihEKSB7XG4gICAgcmV0dXJuIEQgKyBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11bRCAlIDEwID4gMyA/IDAgOiAoRCAtIEQgJSAxMCAhPT0gMTApICogRCAlIDEwXTtcbiAgfVxufTtcblxudmFyIGZvcm1hdEZsYWdzID0ge1xuICBEOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0RGF0ZSgpO1xuICB9LFxuICBERDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXREYXRlKCkpO1xuICB9LFxuICBEbzogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLkRvRm4oZGF0ZU9iai5nZXREYXRlKCkpO1xuICB9LFxuICBkOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0RGF5KCk7XG4gIH0sXG4gIGRkOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldERheSgpKTtcbiAgfSxcbiAgZGRkOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGkxOG4uZGF5TmFtZXNTaG9ydFtkYXRlT2JqLmdldERheSgpXTtcbiAgfSxcbiAgZGRkZDogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLmRheU5hbWVzW2RhdGVPYmouZ2V0RGF5KCldO1xuICB9LFxuICBNOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0TW9udGgoKSArIDE7XG4gIH0sXG4gIE1NOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldE1vbnRoKCkgKyAxKTtcbiAgfSxcbiAgTU1NOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGkxOG4ubW9udGhOYW1lc1Nob3J0W2RhdGVPYmouZ2V0TW9udGgoKV07XG4gIH0sXG4gIE1NTU06IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gaTE4bi5tb250aE5hbWVzW2RhdGVPYmouZ2V0TW9udGgoKV07XG4gIH0sXG4gIFlZOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChTdHJpbmcoZGF0ZU9iai5nZXRGdWxsWWVhcigpKSwgNCkuc3Vic3RyKDIpO1xuICB9LFxuICBZWVlZOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldEZ1bGxZZWFyKCksIDQpO1xuICB9LFxuICBoOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0SG91cnMoKSAlIDEyIHx8IDEyO1xuICB9LFxuICBoaDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRIb3VycygpICUgMTIgfHwgMTIpO1xuICB9LFxuICBIOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0SG91cnMoKTtcbiAgfSxcbiAgSEg6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0SG91cnMoKSk7XG4gIH0sXG4gIG06IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRNaW51dGVzKCk7XG4gIH0sXG4gIG1tOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldE1pbnV0ZXMoKSk7XG4gIH0sXG4gIHM6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRTZWNvbmRzKCk7XG4gIH0sXG4gIHNzOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldFNlY29uZHMoKSk7XG4gIH0sXG4gIFM6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRlT2JqLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwKTtcbiAgfSxcbiAgU1M6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKE1hdGgucm91bmQoZGF0ZU9iai5nZXRNaWxsaXNlY29uZHMoKSAvIDEwKSwgMik7XG4gIH0sXG4gIFNTUzogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRNaWxsaXNlY29uZHMoKSwgMyk7XG4gIH0sXG4gIGE6IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRIb3VycygpIDwgMTIgPyBpMThuLmFtUG1bMF0gOiBpMThuLmFtUG1bMV07XG4gIH0sXG4gIEE6IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRIb3VycygpIDwgMTIgPyBpMThuLmFtUG1bMF0udG9VcHBlckNhc2UoKSA6IGkxOG4uYW1QbVsxXS50b1VwcGVyQ2FzZSgpO1xuICB9LFxuICBaWjogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHZhciBvID0gZGF0ZU9iai5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHJldHVybiAobyA+IDAgPyAnLScgOiAnKycpICsgcGFkKE1hdGguZmxvb3IoTWF0aC5hYnMobykgLyA2MCkgKiAxMDAgKyBNYXRoLmFicyhvKSAlIDYwLCA0KTtcbiAgfVxufTtcblxudmFyIHBhcnNlRmxhZ3MgPSB7XG4gIEQ6IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5kYXkgPSB2O1xuICB9XSxcbiAgRG86IFt0d29EaWdpdHMgKyB3b3JkLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQuZGF5ID0gcGFyc2VJbnQodiwgMTApO1xuICB9XSxcbiAgTTogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLm1vbnRoID0gdiAtIDE7XG4gIH1dLFxuICBZWTogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICB2YXIgZGEgPSBuZXcgRGF0ZSgpLCBjZW50ID0gKygnJyArIGRhLmdldEZ1bGxZZWFyKCkpLnN1YnN0cigwLCAyKTtcbiAgICBkLnllYXIgPSAnJyArICh2ID4gNjggPyBjZW50IC0gMSA6IGNlbnQpICsgdjtcbiAgfV0sXG4gIGg6IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5ob3VyID0gdjtcbiAgfV0sXG4gIG06IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taW51dGUgPSB2O1xuICB9XSxcbiAgczogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLnNlY29uZCA9IHY7XG4gIH1dLFxuICBZWVlZOiBbZm91ckRpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLnllYXIgPSB2O1xuICB9XSxcbiAgUzogWydcXFxcZCcsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taWxsaXNlY29uZCA9IHYgKiAxMDA7XG4gIH1dLFxuICBTUzogWydcXFxcZHsyfScsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taWxsaXNlY29uZCA9IHYgKiAxMDtcbiAgfV0sXG4gIFNTUzogW3RocmVlRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQubWlsbGlzZWNvbmQgPSB2O1xuICB9XSxcbiAgZDogW3R3b0RpZ2l0cywgbm9vcF0sXG4gIGRkZDogW3dvcmQsIG5vb3BdLFxuICBNTU06IFt3b3JkLCBtb250aFVwZGF0ZSgnbW9udGhOYW1lc1Nob3J0JyldLFxuICBNTU1NOiBbd29yZCwgbW9udGhVcGRhdGUoJ21vbnRoTmFtZXMnKV0sXG4gIGE6IFt3b3JkLCBmdW5jdGlvbiAoZCwgdiwgaTE4bikge1xuICAgIHZhciB2YWwgPSB2LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHZhbCA9PT0gaTE4bi5hbVBtWzBdKSB7XG4gICAgICBkLmlzUG0gPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbCA9PT0gaTE4bi5hbVBtWzFdKSB7XG4gICAgICBkLmlzUG0gPSB0cnVlO1xuICAgIH1cbiAgfV0sXG4gIFpaOiBbJ1teXFxcXHNdKj9bXFxcXCtcXFxcLV1cXFxcZFxcXFxkOj9cXFxcZFxcXFxkfFteXFxcXHNdKj9aJywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICB2YXIgcGFydHMgPSAodiArICcnKS5tYXRjaCgvKFsrLV18XFxkXFxkKS9naSksIG1pbnV0ZXM7XG5cbiAgICBpZiAocGFydHMpIHtcbiAgICAgIG1pbnV0ZXMgPSArKHBhcnRzWzFdICogNjApICsgcGFyc2VJbnQocGFydHNbMl0sIDEwKTtcbiAgICAgIGQudGltZXpvbmVPZmZzZXQgPSBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xuICAgIH1cbiAgfV1cbn07XG5wYXJzZUZsYWdzLmRkID0gcGFyc2VGbGFncy5kO1xucGFyc2VGbGFncy5kZGRkID0gcGFyc2VGbGFncy5kZGQ7XG5wYXJzZUZsYWdzLkREID0gcGFyc2VGbGFncy5EO1xucGFyc2VGbGFncy5tbSA9IHBhcnNlRmxhZ3MubTtcbnBhcnNlRmxhZ3MuaGggPSBwYXJzZUZsYWdzLkggPSBwYXJzZUZsYWdzLkhIID0gcGFyc2VGbGFncy5oO1xucGFyc2VGbGFncy5NTSA9IHBhcnNlRmxhZ3MuTTtcbnBhcnNlRmxhZ3Muc3MgPSBwYXJzZUZsYWdzLnM7XG5wYXJzZUZsYWdzLkEgPSBwYXJzZUZsYWdzLmE7XG5cblxuLy8gU29tZSBjb21tb24gZm9ybWF0IHN0cmluZ3NcbmZlY2hhLm1hc2tzID0ge1xuICBkZWZhdWx0OiAnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzJyxcbiAgc2hvcnREYXRlOiAnTS9EL1lZJyxcbiAgbWVkaXVtRGF0ZTogJ01NTSBELCBZWVlZJyxcbiAgbG9uZ0RhdGU6ICdNTU1NIEQsIFlZWVknLFxuICBmdWxsRGF0ZTogJ2RkZGQsIE1NTU0gRCwgWVlZWScsXG4gIHNob3J0VGltZTogJ0hIOm1tJyxcbiAgbWVkaXVtVGltZTogJ0hIOm1tOnNzJyxcbiAgbG9uZ1RpbWU6ICdISDptbTpzcy5TU1MnXG59O1xuXG4vKioqXG4gKiBGb3JtYXQgYSBkYXRlXG4gKiBAbWV0aG9kIGZvcm1hdFxuICogQHBhcmFtIHtEYXRlfG51bWJlcn0gZGF0ZU9ialxuICogQHBhcmFtIHtzdHJpbmd9IG1hc2sgRm9ybWF0IG9mIHRoZSBkYXRlLCBpLmUuICdtbS1kZC15eScgb3IgJ3Nob3J0RGF0ZSdcbiAqL1xuZmVjaGEuZm9ybWF0ID0gZnVuY3Rpb24gKGRhdGVPYmosIG1hc2ssIGkxOG5TZXR0aW5ncykge1xuICB2YXIgaTE4biA9IGkxOG5TZXR0aW5ncyB8fCBmZWNoYS5pMThuO1xuXG4gIGlmICh0eXBlb2YgZGF0ZU9iaiA9PT0gJ251bWJlcicpIHtcbiAgICBkYXRlT2JqID0gbmV3IERhdGUoZGF0ZU9iaik7XG4gIH1cblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGVPYmopICE9PSAnW29iamVjdCBEYXRlXScgfHwgaXNOYU4oZGF0ZU9iai5nZXRUaW1lKCkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIERhdGUgaW4gZmVjaGEuZm9ybWF0Jyk7XG4gIH1cblxuICBtYXNrID0gZmVjaGEubWFza3NbbWFza10gfHwgbWFzayB8fCBmZWNoYS5tYXNrc1snZGVmYXVsdCddO1xuXG4gIHZhciBsaXRlcmFscyA9IFtdO1xuXG4gIC8vIE1ha2UgbGl0ZXJhbHMgaW5hY3RpdmUgYnkgcmVwbGFjaW5nIHRoZW0gd2l0aCA/P1xuICBtYXNrID0gbWFzay5yZXBsYWNlKGxpdGVyYWwsIGZ1bmN0aW9uKCQwLCAkMSkge1xuICAgIGxpdGVyYWxzLnB1c2goJDEpO1xuICAgIHJldHVybiAnPz8nO1xuICB9KTtcbiAgLy8gQXBwbHkgZm9ybWF0dGluZyBydWxlc1xuICBtYXNrID0gbWFzay5yZXBsYWNlKHRva2VuLCBmdW5jdGlvbiAoJDApIHtcbiAgICByZXR1cm4gJDAgaW4gZm9ybWF0RmxhZ3MgPyBmb3JtYXRGbGFnc1skMF0oZGF0ZU9iaiwgaTE4bikgOiAkMC5zbGljZSgxLCAkMC5sZW5ndGggLSAxKTtcbiAgfSk7XG4gIC8vIElubGluZSBsaXRlcmFsIHZhbHVlcyBiYWNrIGludG8gdGhlIGZvcm1hdHRlZCB2YWx1ZVxuICByZXR1cm4gbWFzay5yZXBsYWNlKC9cXD9cXD8vZywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxpdGVyYWxzLnNoaWZ0KCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBQYXJzZSBhIGRhdGUgc3RyaW5nIGludG8gYW4gb2JqZWN0LCBjaGFuZ2VzIC0gaW50byAvXG4gKiBAbWV0aG9kIHBhcnNlXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVN0ciBEYXRlIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCBEYXRlIHBhcnNlIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV8Ym9vbGVhbn1cbiAqL1xuZmVjaGEucGFyc2UgPSBmdW5jdGlvbiAoZGF0ZVN0ciwgZm9ybWF0LCBpMThuU2V0dGluZ3MpIHtcbiAgdmFyIGkxOG4gPSBpMThuU2V0dGluZ3MgfHwgZmVjaGEuaTE4bjtcblxuICBpZiAodHlwZW9mIGZvcm1hdCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZm9ybWF0IGluIGZlY2hhLnBhcnNlJyk7XG4gIH1cblxuICBmb3JtYXQgPSBmZWNoYS5tYXNrc1tmb3JtYXRdIHx8IGZvcm1hdDtcblxuICAvLyBBdm9pZCByZWd1bGFyIGV4cHJlc3Npb24gZGVuaWFsIG9mIHNlcnZpY2UsIGZhaWwgZWFybHkgZm9yIHJlYWxseSBsb25nIHN0cmluZ3NcbiAgLy8gaHR0cHM6Ly93d3cub3dhc3Aub3JnL2luZGV4LnBocC9SZWd1bGFyX2V4cHJlc3Npb25fRGVuaWFsX29mX1NlcnZpY2VfLV9SZURvU1xuICBpZiAoZGF0ZVN0ci5sZW5ndGggPiAxMDAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgZGF0ZUluZm8gPSB7fTtcbiAgdmFyIHBhcnNlSW5mbyA9IFtdO1xuICB2YXIgbmV3Rm9ybWF0ID0gcmVnZXhFc2NhcGUoZm9ybWF0KS5yZXBsYWNlKHRva2VuLCBmdW5jdGlvbiAoJDApIHtcbiAgICBpZiAocGFyc2VGbGFnc1skMF0pIHtcbiAgICAgIHZhciBpbmZvID0gcGFyc2VGbGFnc1skMF07XG4gICAgICBwYXJzZUluZm8ucHVzaChpbmZvWzFdKTtcbiAgICAgIHJldHVybiAnKCcgKyBpbmZvWzBdICsgJyknO1xuICAgIH1cblxuICAgIHJldHVybiAkMDtcbiAgfSk7XG4gIHZhciBtYXRjaGVzID0gZGF0ZVN0ci5tYXRjaChuZXcgUmVnRXhwKG5ld0Zvcm1hdCwgJ2knKSk7XG4gIGlmICghbWF0Y2hlcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFyc2VJbmZvW2kgLSAxXShkYXRlSW5mbywgbWF0Y2hlc1tpXSwgaTE4bik7XG4gIH1cblxuICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBpZiAoZGF0ZUluZm8uaXNQbSA9PT0gdHJ1ZSAmJiBkYXRlSW5mby5ob3VyICE9IG51bGwgJiYgK2RhdGVJbmZvLmhvdXIgIT09IDEyKSB7XG4gICAgZGF0ZUluZm8uaG91ciA9ICtkYXRlSW5mby5ob3VyICsgMTI7XG4gIH0gZWxzZSBpZiAoZGF0ZUluZm8uaXNQbSA9PT0gZmFsc2UgJiYgK2RhdGVJbmZvLmhvdXIgPT09IDEyKSB7XG4gICAgZGF0ZUluZm8uaG91ciA9IDA7XG4gIH1cblxuICB2YXIgZGF0ZTtcbiAgaWYgKGRhdGVJbmZvLnRpbWV6b25lT2Zmc2V0ICE9IG51bGwpIHtcbiAgICBkYXRlSW5mby5taW51dGUgPSArKGRhdGVJbmZvLm1pbnV0ZSB8fCAwKSAtICtkYXRlSW5mby50aW1lem9uZU9mZnNldDtcbiAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZUluZm8ueWVhciB8fCB0b2RheS5nZXRGdWxsWWVhcigpLCBkYXRlSW5mby5tb250aCB8fCAwLCBkYXRlSW5mby5kYXkgfHwgMSxcbiAgICAgIGRhdGVJbmZvLmhvdXIgfHwgMCwgZGF0ZUluZm8ubWludXRlIHx8IDAsIGRhdGVJbmZvLnNlY29uZCB8fCAwLCBkYXRlSW5mby5taWxsaXNlY29uZCB8fCAwKSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGVJbmZvLnllYXIgfHwgdG9kYXkuZ2V0RnVsbFllYXIoKSwgZGF0ZUluZm8ubW9udGggfHwgMCwgZGF0ZUluZm8uZGF5IHx8IDEsXG4gICAgICBkYXRlSW5mby5ob3VyIHx8IDAsIGRhdGVJbmZvLm1pbnV0ZSB8fCAwLCBkYXRlSW5mby5zZWNvbmQgfHwgMCwgZGF0ZUluZm8ubWlsbGlzZWNvbmQgfHwgMCk7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZWNoYTtcbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVUaW1lU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJzaG9ydFRpbWVcIikpO1xuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGVhZGVyPzogc3RyaW5nO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1iYWNrZ3JvdW5kLFxuICAgICAgICAgIHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpXG4gICAgICAgICk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhLWNhcmQtYm9yZGVyLXJhZGl1cywgMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1ib3gtc2hhZG93LFxuICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMilcbiAgICAgICAgKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1oZWFkZXIsXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtaGVhZGVyKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1jb2xvciwgLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taGEtY2FyZC1oZWFkZXItZm9udC1mYW1pbHksIGluaGVyaXQpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWZvbnQtc2l6ZSwgMjRweCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIHBhZGRpbmc6IDI0cHggMTZweCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQ6bm90KDpmaXJzdC1jaGlsZCkpLFxuICAgICAgc2xvdDpub3QoOmZpcnN0LWNoaWxkKTo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1hY3Rpb25zKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuaGVhZGVyXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPiR7dGhpcy5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IGh0bWxgYH1cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhcmRcIiwgSGFDYXJkKTtcbiIsImltcG9ydCB7IGxvYWRDb2RlTWlycm9yIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9jb2RlbWlycm9yLm9uZGVtYW5kXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBVcGRhdGluZ0VsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tIFwiY29kZW1pcnJvclwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImVkaXRvci1zYXZlXCI6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcImhhLWNvZGUtZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSGFDb2RlRWRpdG9yIGV4dGVuZHMgVXBkYXRpbmdFbGVtZW50IHtcbiAgcHVibGljIGNvZGVtaXJyb3I/OiBFZGl0b3I7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBtb2RlPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgYXV0b2ZvY3VzID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBydGwgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGVycm9yID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3ZhbHVlID0gXCJcIjtcblxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvZGVtaXJyb3IgPyB0aGlzLmNvZGVtaXJyb3IuZ2V0VmFsdWUoKSA6IHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBoYXNDb21tZW50cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5jbS1jb21tZW50XCIpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKCF0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb2RlbWlycm9yLnJlZnJlc2goKTtcbiAgICBpZiAodGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3IuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmICghdGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJtb2RlXCIpKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0T3B0aW9uKFwibW9kZVwiLCB0aGlzLm1vZGUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImF1dG9mb2N1c1wiKSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldE9wdGlvbihcImF1dG9mb2N1c1wiLCB0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIl92YWx1ZVwiKSAmJiB0aGlzLl92YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJydGxcIikpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRPcHRpb24oXCJndXR0ZXJzXCIsIHRoaXMuX2NhbGNHdXR0ZXJzKCkpO1xuICAgICAgdGhpcy5fc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiZXJyb3JcIikpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImVycm9yLXN0YXRlXCIsIHRoaXMuZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2xvYWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2xvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbG9hZGVkID0gYXdhaXQgbG9hZENvZGVNaXJyb3IoKTtcblxuICAgIGNvbnN0IGNvZGVNaXJyb3IgPSBsb2FkZWQuY29kZU1pcnJvcjtcblxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xuXG4gICAgc2hhZG93Um9vdCEuaW5uZXJIVE1MID0gYFxuICAgIDxzdHlsZT5cbiAgICAgICR7bG9hZGVkLmNvZGVNaXJyb3JDc3N9XG4gICAgICAuQ29kZU1pcnJvciB7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY29kZS1taXJyb3ItaGVpZ2h0LCBhdXRvKTtcbiAgICAgICAgZGlyZWN0aW9uOiB2YXIoLS1jb2RlLW1pcnJvci1kaXJlY3Rpb24sIGx0cik7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1zY3JvbGwge1xuICAgICAgICBtYXgtaGVpZ2h0OiB2YXIoLS1jb2RlLW1pcnJvci1tYXgtaGVpZ2h0LCAtLWNvZGUtbWlycm9yLWhlaWdodCk7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBib3JkZXItcmlnaHQ7XG4gICAgICB9XG4gICAgICA6aG9zdCguZXJyb3Itc3RhdGUpIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWVycm9yLXN0YXRlLWNvbG9yLCByZWQpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3ItZm9jdXNlZCAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1saW5lbnVtYmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICAucnRsIC5Db2RlTWlycm9yLXZzY3JvbGxiYXIge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgLnJ0bC1ndXR0ZXIge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPmA7XG5cbiAgICB0aGlzLmNvZGVtaXJyb3IgPSBjb2RlTWlycm9yKHNoYWRvd1Jvb3QsIHtcbiAgICAgIHZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgICAgdGFiU2l6ZTogMixcbiAgICAgIG1vZGU6IHRoaXMubW9kZSxcbiAgICAgIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlLFxuICAgICAgdmlld3BvcnRNYXJnaW46IEluZmluaXR5LFxuICAgICAgZXh0cmFLZXlzOiB7XG4gICAgICAgIFRhYjogXCJpbmRlbnRNb3JlXCIsXG4gICAgICAgIFwiU2hpZnQtVGFiXCI6IFwiaW5kZW50TGVzc1wiLFxuICAgICAgfSxcbiAgICAgIGd1dHRlcnM6IHRoaXMuX2NhbGNHdXR0ZXJzKCksXG4gICAgfSk7XG4gICAgdGhpcy5fc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk7XG4gICAgdGhpcy5jb2RlbWlycm9yIS5vbihcImNoYW5nZXNcIiwgKCkgPT4gdGhpcy5fb25DaGFuZ2UoKSk7XG4gIH1cblxuICBwcml2YXRlIF9vbkNoYW5nZSgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlID09PSB0aGlzLl92YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogdGhpcy5fdmFsdWUgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jYWxjR3V0dGVycygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMucnRsID8gW1wicnRsLWd1dHRlclwiLCBcIkNvZGVNaXJyb3ItbGluZW51bWJlcnNcIl0gOiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFNjcm9sbEJhckRpcmVjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3IuZ2V0V3JhcHBlckVsZW1lbnQoKS5jbGFzc0xpc3QudG9nZ2xlKFwicnRsXCIsIHRoaXMucnRsKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNvZGUtZWRpdG9yXCI6IEhhQ29kZUVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1RVFRNZXNzYWdlIHtcbiAgdG9waWM6IHN0cmluZztcbiAgcGF5bG9hZDogc3RyaW5nO1xuICBxb3M6IG51bWJlcjtcbiAgcmV0YWluOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVNUVRUVG9waWMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHRvcGljOiBzdHJpbmcsXG4gIGNhbGxiYWNrOiAobWVzc2FnZTogTVFUVE1lc3NhZ2UpID0+IHZvaWRcbikgPT4ge1xuICByZXR1cm4gaGFzcy5jb25uZWN0aW9uLnN1YnNjcmliZU1lc3NhZ2U8TVFUVE1lc3NhZ2U+KGNhbGxiYWNrLCB7XG4gICAgdHlwZTogXCJtcXR0L3N1YnNjcmliZVwiLFxuICAgIHRvcGljLFxuICB9KTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBjdXN0b21FbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY29kZS1lZGl0b3JcIjtcbmltcG9ydCBcIi4vbXF0dC1zdWJzY3JpYmUtY2FyZFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImRldmVsb3Blci10b29scy1tcXR0XCIpXG5jbGFzcyBIYVBhbmVsRGV2TXF0dCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSB0b3BpYyA9IFwiXCI7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBwYXlsb2FkID0gXCJcIjtcblxuICBwcml2YXRlIGluaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2VbXCJwYW5lbC1kZXYtbXF0dC10b3BpY1wiXSkge1xuICAgICAgdGhpcy50b3BpYyA9IGxvY2FsU3RvcmFnZVtcInBhbmVsLWRldi1tcXR0LXRvcGljXCJdO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZVtcInBhbmVsLWRldi1tcXR0LXBheWxvYWRcIl0pIHtcbiAgICAgIHRoaXMucGF5bG9hZCA9IGxvY2FsU3RvcmFnZVtcInBhbmVsLWRldi1tcXR0LXBheWxvYWRcIl07XG4gICAgfVxuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiUHVibGlzaCBhIHBhY2tldFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cInRvcGljXCJcbiAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy50b3BpY31cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVUb3BpY31cbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuXG4gICAgICAgICAgICA8cD5QYXlsb2FkICh0ZW1wbGF0ZSBhbGxvd2VkKTwvcD5cbiAgICAgICAgICAgIDxoYS1jb2RlLWVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwiamluamEyXCJcbiAgICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLnBheWxvYWR9XCJcbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVQYXlsb2FkfVxuICAgICAgICAgICAgPjwvaGEtY29kZS1lZGl0b3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fcHVibGlzaH0+UHVibGlzaDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuXG4gICAgICAgIDxtcXR0LXN1YnNjcmliZS1jYXJkIC5oYXNzPSR7dGhpcy5oYXNzfT48L21xdHQtc3Vic2NyaWJlLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVG9waWMoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgdGhpcy50b3BpYyA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAobG9jYWxTdG9yYWdlICYmIHRoaXMuaW5pdGVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbXCJwYW5lbC1kZXYtbXF0dC10b3BpY1wiXSA9IHRoaXMudG9waWM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUGF5bG9hZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICB0aGlzLnBheWxvYWQgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKGxvY2FsU3RvcmFnZSAmJiB0aGlzLmluaXRlZCkge1xuICAgICAgbG9jYWxTdG9yYWdlW1wicGFuZWwtZGV2LW1xdHQtcGF5bG9hZFwiXSA9IHRoaXMucGF5bG9hZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wdWJsaXNoKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcIm1xdHRcIiwgXCJwdWJsaXNoXCIsIHtcbiAgICAgIHRvcGljOiB0aGlzLnRvcGljLFxuICAgICAgcGF5bG9hZF90ZW1wbGF0ZTogdGhpcy5wYXlsb2FkLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4IDAgMzJweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBtcXR0LXN1YnNjcmliZS1jYXJkIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDE2cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkZXZlbG9wZXItdG9vbHMtbXF0dFwiOiBIYVBhbmVsRGV2TXF0dDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIHByb3BlcnR5LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IGZvcm1hdF90aW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcblxuaW1wb3J0IHsgc3Vic2NyaWJlTVFUVFRvcGljLCBNUVRUTWVzc2FnZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL21xdHRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJtcXR0LXN1YnNjcmliZS1jYXJkXCIpXG5jbGFzcyBNcXR0U3Vic2NyaWJlQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdG9waWMgPSBcIlwiO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3N1YnNjcmliZWQ/OiAoKSA9PiB2b2lkO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX21lc3NhZ2VzOiBBcnJheTx7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBtZXNzYWdlOiBNUVRUTWVzc2FnZTtcbiAgICBwYXlsb2FkOiBzdHJpbmc7XG4gICAgdGltZTogRGF0ZTtcbiAgfT4gPSBbXTtcblxuICBwcml2YXRlIF9tZXNzYWdlQ291bnQgPSAwO1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl9zdWJzY3JpYmVkKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVkKCk7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiTGlzdGVuIHRvIGEgdG9waWNcIj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAubGFiZWw9JHt0aGlzLl9zdWJzY3JpYmVkXG4gICAgICAgICAgICAgID8gXCJMaXN0ZW5pbmcgdG9cIlxuICAgICAgICAgICAgICA6IFwiVG9waWMgdG8gc3Vic2NyaWJlIHRvXCJ9XG4gICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLl9zdWJzY3JpYmVkICE9PSB1bmRlZmluZWR9XG4gICAgICAgICAgICAudmFsdWU9JHt0aGlzLl90b3BpY31cbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLl90b3BpYyA9PT0gXCJcIn1cbiAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5fc3Vic2NyaWJlZCA/IFwiU3RvcCBsaXN0ZW5pbmdcIiA6IFwiU3RhcnQgbGlzdGVuaW5nXCJ9XG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHNcIj5cbiAgICAgICAgICAke3RoaXMuX21lc3NhZ2VzLm1hcChcbiAgICAgICAgICAgIChtc2cpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgIE1lc3NhZ2UgJHttc2cuaWR9IHJlY2VpdmVkIG9uIDxiPiR7bXNnLm1lc3NhZ2UudG9waWN9PC9iPiBhdFxuICAgICAgICAgICAgICAgICR7Zm9ybWF0X3RpbWUobXNnLnRpbWUsIHRoaXMuaGFzcyEubGFuZ3VhZ2UpfTpcbiAgICAgICAgICAgICAgICA8cHJlPiR7bXNnLnBheWxvYWR9PC9wcmU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgUW9TOiAke21zZy5tZXNzYWdlLnFvc30gLSBSZXRhaW46XG4gICAgICAgICAgICAgICAgICAke0Jvb2xlYW4obXNnLm1lc3NhZ2UucmV0YWluKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl90b3BpYyA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2hhbmRsZVN1Ym1pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5fc3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlZCgpO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlZCA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlZCA9IGF3YWl0IHN1YnNjcmliZU1RVFRUb3BpYyhcbiAgICAgICAgdGhpcy5oYXNzISxcbiAgICAgICAgdGhpcy5fdG9waWMsXG4gICAgICAgIChtZXNzYWdlKSA9PiB0aGlzLl9oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1lc3NhZ2UobWVzc2FnZTogTVFUVE1lc3NhZ2UpIHtcbiAgICBjb25zdCB0YWlsID1cbiAgICAgIHRoaXMuX21lc3NhZ2VzLmxlbmd0aCA+IDMwID8gdGhpcy5fbWVzc2FnZXMuc2xpY2UoMCwgMjkpIDogdGhpcy5fbWVzc2FnZXM7XG4gICAgbGV0IHBheWxvYWQ6IHN0cmluZztcbiAgICB0cnkge1xuICAgICAgcGF5bG9hZCA9IEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UobWVzc2FnZS5wYXlsb2FkKSwgbnVsbCwgNCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcGF5bG9hZCA9IG1lc3NhZ2UucGF5bG9hZDtcbiAgICB9XG4gICAgdGhpcy5fbWVzc2FnZXMgPSBbXG4gICAgICB7XG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgIGlkOiB0aGlzLl9tZXNzYWdlQ291bnQrKyxcbiAgICAgIH0sXG4gICAgICAuLi50YWlsLFxuICAgIF07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBmb3JtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG4gICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgICAgLmV2ZW50cyB7XG4gICAgICAgIG1hcmdpbjogLTE2cHggMDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgfVxuICAgICAgLmV2ZW50IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICB9XG4gICAgICAuZXZlbnQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICAuYm90dG9tIHtcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwibXF0dC1zdWJzY3JpYmUtY2FyZFwiOiBNcXR0U3Vic2NyaWJlQ2FyZDtcbiAgfVxufVxuIiwiaW50ZXJmYWNlIExvYWRlZENvZGVNaXJyb3Ige1xuICBjb2RlTWlycm9yOiBhbnk7XG4gIGNvZGVNaXJyb3JDc3M6IGFueTtcbn1cblxubGV0IGxvYWRlZDogUHJvbWlzZTxMb2FkZWRDb2RlTWlycm9yPjtcblxuZXhwb3J0IGNvbnN0IGxvYWRDb2RlTWlycm9yID0gYXN5bmMgKCk6IFByb21pc2U8TG9hZGVkQ29kZU1pcnJvcj4gPT4ge1xuICBpZiAoIWxvYWRlZCkge1xuICAgIGxvYWRlZCA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvZGVtaXJyb3JcIiAqLyBcIi4vY29kZW1pcnJvclwiKTtcbiAgfVxuICByZXR1cm4gbG9hZGVkO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxGQTtBQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXREQTtBQXdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9UQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBU0E7QUFBQTtBQUFBOztBQTZEQTtBQTFEQTtBQUFBO0FBQ0E7QUE2Q0E7OztBQUFBO0FBRUE7QUFDQTtBQUtBO0FBSEE7QUFNQTtBQTNEQTtBQUFBO0FBQUE7QUE0REE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFrSUE7QUFoSUE7QUFJQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBQ0E7OztBQUFBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUNBOztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcklBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBREE7QUFDQTtBQXdJQTtBQUFBO0FBeElBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFTQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFFQTs7QUE0RkE7QUExRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXlCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF1QkE7QUFDQTs7O0FBQUE7QUFqR0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBbUdBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFJQTtBQU9BOztBQWtIQTtBQWhIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQU1BO0FBMEJBO0FBM0JBO0FBQ0E7QUE4QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTs7QUFBQTs7Ozs7O0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUEwQkE7OztBQUFBO0FBOUhBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFLQTtBQVpBO0FBREE7QUFDQTtBQWdJQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==