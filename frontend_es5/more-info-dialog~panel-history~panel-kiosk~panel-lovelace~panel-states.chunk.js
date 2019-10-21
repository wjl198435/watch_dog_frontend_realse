(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog~panel-history~panel-kiosk~panel-lovelace~panel-states"],{

/***/ "./src/common/datetime/format_date.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_date.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");

// Check for support of native locale string options
function toLocaleDateStringSupportsOptions() {
    try {
        new Date().toLocaleDateString("i");
    }
    catch (e) {
        return e.name === "RangeError";
    }
    return false;
}
/* harmony default export */ __webpack_exports__["default"] = (toLocaleDateStringSupportsOptions()
    ? function (dateObj, locales) {
        return dateObj.toLocaleDateString(locales, {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
    : function (dateObj) { return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumDate"); });


/***/ }),

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");

// Check for support of native locale string options
function toLocaleStringSupportsOptions() {
    try {
        new Date().toLocaleString("i");
    }
    catch (e) {
        return e.name === "RangeError";
    }
    return false;
}
/* harmony default export */ __webpack_exports__["default"] = (toLocaleStringSupportsOptions()
    ? function (dateObj, locales) {
        return dateObj.toLocaleString(locales, {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        });
    }
    : function (dateObj) { return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime"); });


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

/***/ "./src/common/entity/compute_state_display.ts":
/*!****************************************************!*\
  !*** ./src/common/entity/compute_state_display.ts ***!
  \****************************************************/
/*! exports provided: computeStateDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDisplay", function() { return computeStateDisplay; });
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _datetime_format_date_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _datetime_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _datetime_format_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datetime/format_time */ "./src/common/datetime/format_time.ts");




var computeStateDisplay = function (localize, stateObj, language) {
    var display;
    var domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["computeStateDomain"])(stateObj);
    if (domain === "binary_sensor") {
        // Try device class translation, then default binary sensor translation
        if (stateObj.attributes.device_class) {
            display = localize("state." + domain + "." + stateObj.attributes.device_class + "." + stateObj.state);
        }
        if (!display) {
            display = localize("state." + domain + ".default." + stateObj.state);
        }
    }
    else if (stateObj.attributes.unit_of_measurement &&
        !["unknown", "unavailable"].includes(stateObj.state)) {
        display = stateObj.state + " " + stateObj.attributes.unit_of_measurement;
    }
    else if (domain === "input_datetime") {
        var date = void 0;
        if (!stateObj.attributes.has_time) {
            date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day);
            display = Object(_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__["default"])(date, language);
        }
        else if (!stateObj.attributes.has_date) {
            var now = new Date();
            date = new Date(
            // Due to bugs.chromium.org/p/chromium/issues/detail?id=797548
            // don't use artificial 1970 year.
            now.getFullYear(), now.getMonth(), now.getDay(), stateObj.attributes.hour, stateObj.attributes.minute);
            display = Object(_datetime_format_time__WEBPACK_IMPORTED_MODULE_3__["default"])(date, language);
        }
        else {
            date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day, stateObj.attributes.hour, stateObj.attributes.minute);
            display = Object(_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_1__["default"])(date, language);
        }
    }
    else if (domain === "zwave") {
        if (["initializing", "dead"].includes(stateObj.state)) {
            display = localize("state.zwave.query_stage." + stateObj.state, "query_stage", stateObj.attributes.query_stage);
        }
        else {
            display = localize("state.zwave.default." + stateObj.state);
        }
    }
    else {
        display = localize("state." + domain + "." + stateObj.state);
    }
    // Fall back to default, component backend translation, or raw state if nothing else matches.
    if (!display) {
        display =
            localize("state.default." + stateObj.state) ||
                localize("component." + domain + ".state." + stateObj.state) ||
                stateObj.state;
    }
    return display;
};


/***/ }),

/***/ "./src/components/entity/ha-chart-base.js":
/*!************************************************!*\
  !*** ./src/components/entity/ha-chart-base.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n        .chartHeader {\n          padding: 6px 0 0 0;\n          width: 100%;\n          display: flex;\n          flex-direction: row;\n        }\n        .chartHeader > div {\n          vertical-align: top;\n          padding: 0 8px;\n        }\n        .chartHeader > div.chartTitle {\n          padding-top: 8px;\n          flex: 0 0 0;\n          max-width: 30%;\n        }\n        .chartHeader > div.chartLegend {\n          flex: 1 1;\n          min-width: 70%;\n        }\n        :root {\n          user-select: none;\n          -moz-user-select: none;\n          -webkit-user-select: none;\n          -ms-user-select: none;\n        }\n        .chartTooltip {\n          font-size: 90%;\n          opacity: 1;\n          position: absolute;\n          background: rgba(80, 80, 80, 0.9);\n          color: white;\n          border-radius: 3px;\n          pointer-events: none;\n          transform: translate(-50%, 12px);\n          z-index: 1000;\n          width: 200px;\n          transition: opacity 0.15s ease-in-out;\n        }\n        :host([rtl]) .chartTooltip {\n          direction: rtl;\n        }\n        .chartLegend ul,\n        .chartTooltip ul {\n          display: inline-block;\n          padding: 0 0px;\n          margin: 5px 0 0 0;\n          width: 100%;\n        }\n        .chartTooltip li {\n          display: block;\n          white-space: pre-line;\n        }\n        .chartTooltip .title {\n          text-align: center;\n          font-weight: 500;\n        }\n        .chartLegend li {\n          display: inline-block;\n          padding: 0 6px;\n          max-width: 49%;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow: hidden;\n          box-sizing: border-box;\n        }\n        .chartLegend li:nth-child(odd):last-of-type {\n          /* Make last item take full width if it is odd-numbered. */\n          max-width: 100%;\n        }\n        .chartLegend li[data-hidden] {\n          text-decoration: line-through;\n        }\n        .chartLegend em,\n        .chartTooltip em {\n          border-radius: 5px;\n          display: inline-block;\n          height: 10px;\n          margin-right: 4px;\n          width: 10px;\n        }\n        :host([rtl]) .chartTooltip em {\n          margin-right: inherit;\n          margin-left: 4px;\n        }\n        paper-icon-button {\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <template is=\"dom-if\" if=\"[[unit]]\">\n        <div class=\"chartHeader\">\n          <div class=\"chartTitle\">[[unit]]</div>\n          <div class=\"chartLegend\">\n            <ul>\n              <template is=\"dom-repeat\" items=\"[[metas]]\">\n                <li on-click=\"_legendClick\" data-hidden$=\"[[item.hidden]]\">\n                  <em style$=\"background-color:[[item.bgColor]]\"></em>\n                  [[item.label]]\n                </li>\n              </template>\n            </ul>\n          </div>\n        </div>\n      </template>\n      <div id=\"chartTarget\" style=\"height:40px; width:100%\">\n        <canvas id=\"chartCanvas\"></canvas>\n        <div\n          class$=\"chartTooltip [[tooltip.yAlign]]\"\n          style$=\"opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px\"\n        >\n          <div class=\"title\">[[tooltip.title]]</div>\n          <div>\n            <ul>\n              <template is=\"dom-repeat\" items=\"[[tooltip.lines]]\">\n                <li>\n                  <em style$=\"background-color:[[item.bgColor]]\"></em\n                  >[[item.text]]\n                </li>\n              </template>\n            </ul>\n          </div>\n        </div>\n      </div>\n    "]);

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








 // eslint-disable-next-line no-unused-vars

/* global Chart moment Color */

var scriptsLoaded = null;

var HaChartBase =
/*#__PURE__*/
function (_mixinBehaviors) {
  _inherits(HaChartBase, _mixinBehaviors);

  function HaChartBase() {
    _classCallCheck(this, HaChartBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaChartBase).apply(this, arguments));
  }

  _createClass(HaChartBase, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      _get(_getPrototypeOf(HaChartBase.prototype), "connectedCallback", this).call(this);

      this._isAttached = true;
      this.onPropsChange();

      this._resizeListener = function () {
        _this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(_this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__["timeOut"].after(10), function () {
          if (_this._isAttached) {
            _this.resizeChart();
          }
        });
      };

      if (typeof ResizeObserver === "function") {
        this.resizeObserver = new ResizeObserver(function (entries) {
          entries.forEach(function () {
            _this._resizeListener();
          });
        });
        this.resizeObserver.observe(this.$.chartTarget);
      } else {
        this.addEventListener("iron-resize", this._resizeListener);
      }

      if (scriptsLoaded === null) {
        scriptsLoaded = Promise.all(/*! import() | load_chart */[__webpack_require__.e("vendors~load_chart~panel-calendar"), __webpack_require__.e("vendors~load_chart"), __webpack_require__.e("load_chart")]).then(__webpack_require__.bind(null, /*! ../../resources/ha-chart-scripts.js */ "./src/resources/ha-chart-scripts.js"));
      }

      scriptsLoaded.then(function (ChartModule) {
        _this.ChartClass = ChartModule["default"];

        _this.onPropsChange();
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaChartBase.prototype), "disconnectedCallback", this).call(this);

      this._isAttached = false;

      if (this.resizeObserver) {
        this.resizeObserver.unobserve(this.$.chartTarget);
      }

      this.removeEventListener("iron-resize", this._resizeListener);

      if (this._resizeTimer !== undefined) {
        clearInterval(this._resizeTimer);
        this._resizeTimer = undefined;
      }
    }
  }, {
    key: "onPropsChange",
    value: function onPropsChange() {
      if (!this._isAttached || !this.ChartClass || !this.data) {
        return;
      }

      this.drawChart();
    }
  }, {
    key: "_customTooltips",
    value: function _customTooltips(tooltip) {
      // Hide if no tooltip
      if (tooltip.opacity === 0) {
        this.set(["tooltip", "opacity"], 0);
        return;
      } // Set caret Position


      if (tooltip.yAlign) {
        this.set(["tooltip", "yAlign"], tooltip.yAlign);
      } else {
        this.set(["tooltip", "yAlign"], "no-transform");
      }

      var title = tooltip.title ? tooltip.title[0] || "" : "";
      this.set(["tooltip", "title"], title);
      var bodyLines = tooltip.body.map(function (n) {
        return n.lines;
      }); // Set Text

      if (tooltip.body) {
        this.set(["tooltip", "lines"], bodyLines.map(function (body, i) {
          var colors = tooltip.labelColors[i];
          return {
            color: colors.borderColor,
            bgColor: colors.backgroundColor,
            text: body.join("\n")
          };
        }));
      }

      var parentWidth = this.$.chartTarget.clientWidth;
      var positionX = tooltip.caretX;
      var positionY = this._chart.canvas.offsetTop + tooltip.caretY;

      if (tooltip.caretX + 100 > parentWidth) {
        positionX = parentWidth - 100;
      } else if (tooltip.caretX < 100) {
        positionX = 100;
      }

      positionX += this._chart.canvas.offsetLeft; // Display, position, and set styles for font

      this.tooltip = Object.assign({}, this.tooltip, {
        opacity: 1,
        left: "".concat(positionX, "px"),
        top: "".concat(positionY, "px")
      });
    }
  }, {
    key: "_legendClick",
    value: function _legendClick(event) {
      event = event || window.event;
      event.stopPropagation();
      var target = event.target || event.srcElement;

      while (target.nodeName !== "LI") {
        // user clicked child, find parent LI
        target = target.parentElement;
      }

      var index = event.model.itemsIndex;

      var meta = this._chart.getDatasetMeta(index);

      meta.hidden = meta.hidden === null ? !this._chart.data.datasets[index].hidden : null;
      this.set(["metas", index, "hidden"], this._chart.isDatasetVisible(index) ? null : "hidden");

      this._chart.update();
    }
  }, {
    key: "_drawLegend",
    value: function _drawLegend() {
      var _this2 = this;

      var chart = this._chart; // New data for old graph. Keep metadata.

      var preserveVisibility = this._oldIdentifier && this.identifier === this._oldIdentifier;
      this._oldIdentifier = this.identifier;
      this.set("metas", this._chart.data.datasets.map(function (x, i) {
        return {
          label: x.label,
          color: x.color,
          bgColor: x.backgroundColor,
          hidden: preserveVisibility && i < _this2.metas.length ? _this2.metas[i].hidden : !chart.isDatasetVisible(i)
        };
      }));
      var updateNeeded = false;

      if (preserveVisibility) {
        for (var i = 0; i < this.metas.length; i++) {
          var meta = chart.getDatasetMeta(i);
          if (!!meta.hidden !== !!this.metas[i].hidden) updateNeeded = true;
          meta.hidden = this.metas[i].hidden ? true : null;
        }
      }

      if (updateNeeded) {
        chart.update();
      }

      this.unit = this.data.unit;
    }
  }, {
    key: "_formatTickValue",
    value: function _formatTickValue(value, index, values) {
      if (values.length === 0) {
        return value;
      }

      var date = new Date(values[index].value);
      return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__["default"])(date);
    }
  }, {
    key: "drawChart",
    value: function drawChart() {
      var _this3 = this;

      var data = this.data.data;
      var ctx = this.$.chartCanvas;

      if ((!data.datasets || !data.datasets.length) && !this._chart) {
        return;
      }

      if (this.data.type !== "timeline" && data.datasets.length > 0) {
        var cnt = data.datasets.length;
        var colors = this.constructor.getColorList(cnt);

        for (var loopI = 0; loopI < cnt; loopI++) {
          data.datasets[loopI].borderColor = colors[loopI].rgbString();
          data.datasets[loopI].backgroundColor = colors[loopI].alpha(0.6).rgbaString();
        }
      }

      if (this._chart) {
        this._customTooltips({
          opacity: 0
        });

        this._chart.data = data;

        this._chart.update({
          duration: 0
        });

        if (this.isTimeline) {
          this._chart.options.scales.yAxes[0].gridLines.display = data.length > 1;
        } else if (this.data.legend === true) {
          this._drawLegend();
        }

        this.resizeChart();
      } else {
        if (!data.datasets) {
          return;
        }

        this._customTooltips({
          opacity: 0
        });

        var plugins = [{
          afterRender: function afterRender() {
            return _this3._setRendered(true);
          }
        }];
        var options = {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 0
          },
          hover: {
            animationDuration: 0
          },
          responsiveAnimationDuration: 0,
          tooltips: {
            enabled: false,
            custom: this._customTooltips.bind(this)
          },
          legend: {
            display: false
          },
          line: {
            spanGaps: true
          },
          elements: {
            font: "12px 'Roboto', 'sans-serif'"
          },
          ticks: {
            fontFamily: "'Roboto', 'sans-serif'"
          }
        };
        options = Chart.helpers.merge(options, this.data.options);
        options.scales.xAxes[0].ticks.callback = this._formatTickValue;

        if (this.data.type === "timeline") {
          this.set("isTimeline", true);

          if (this.data.colors !== undefined) {
            this._colorFunc = this.constructor.getColorGenerator(this.data.colors.staticColors, this.data.colors.staticColorIndex);
          }

          if (this._colorFunc !== undefined) {
            options.elements.colorFunction = this._colorFunc;
          }

          if (data.datasets.length === 1) {
            if (options.scales.yAxes[0].ticks) {
              options.scales.yAxes[0].ticks.display = false;
            } else {
              options.scales.yAxes[0].ticks = {
                display: false
              };
            }

            if (options.scales.yAxes[0].gridLines) {
              options.scales.yAxes[0].gridLines.display = false;
            } else {
              options.scales.yAxes[0].gridLines = {
                display: false
              };
            }
          }

          this.$.chartTarget.style.height = "50px";
        } else {
          this.$.chartTarget.style.height = "160px";
        }

        var chartData = {
          type: this.data.type,
          data: this.data.data,
          options: options,
          plugins: plugins
        }; // Async resize after dom update

        this._chart = new this.ChartClass(ctx, chartData);

        if (this.isTimeline !== true && this.data.legend === true) {
          this._drawLegend();
        }

        this.resizeChart();
      }
    }
  }, {
    key: "resizeChart",
    value: function resizeChart() {
      if (!this._chart) return; // Chart not ready

      if (this._resizeTimer === undefined) {
        this._resizeTimer = setInterval(this.resizeChart.bind(this), 10);
        return;
      }

      clearInterval(this._resizeTimer);
      this._resizeTimer = undefined;

      this._resizeChart();
    }
  }, {
    key: "_resizeChart",
    value: function _resizeChart() {
      var chartTarget = this.$.chartTarget;
      var options = this.data;
      var data = options.data;

      if (data.datasets.length === 0) {
        return;
      }

      if (!this.isTimeline) {
        this._chart.resize();

        return;
      } // Recalculate chart height for Timeline chart


      var areaTop = this._chart.chartArea.top;
      var areaBot = this._chart.chartArea.bottom;
      var height1 = this._chart.canvas.clientHeight;

      if (areaBot > 0) {
        this._axisHeight = height1 - areaBot + areaTop;
      }

      if (!this._axisHeight) {
        chartTarget.style.height = "50px";

        this._chart.resize();

        this.resizeChart();
        return;
      }

      if (this._axisHeight) {
        var cnt = data.datasets.length;
        var targetHeight = 30 * cnt + this._axisHeight + "px";

        if (chartTarget.style.height !== targetHeight) {
          chartTarget.style.height = targetHeight;
        }

        this._chart.resize();
      }
    } // Get HSL distributed color list

  }, {
    key: "chart",
    get: function get() {
      return this._chart;
    }
  }], [{
    key: "getColorList",
    value: function getColorList(count) {
      var processL = false;

      if (count > 10) {
        processL = true;
        count = Math.ceil(count / 2);
      }

      var h1 = 360 / count;
      var result = [];

      for (var loopI = 0; loopI < count; loopI++) {
        result[loopI] = Color().hsl(h1 * loopI, 80, 38);

        if (processL) {
          result[loopI + count] = Color().hsl(h1 * loopI, 80, 62);
        }
      }

      return result;
    }
  }, {
    key: "getColorGenerator",
    value: function getColorGenerator(staticColors, startIndex) {
      // Known colors for static data,
      // should add for very common state string manually.
      // Palette modified from http://google.github.io/palette.js/ mpn65, Apache 2.0
      var palette = ["ff0029", "66a61e", "377eb8", "984ea3", "00d2d5", "ff7f00", "af8d00", "7f80cd", "b3e900", "c42e60", "a65628", "f781bf", "8dd3c7", "bebada", "fb8072", "80b1d3", "fdb462", "fccde5", "bc80bd", "ffed6f", "c4eaff", "cf8c00", "1b9e77", "d95f02", "e7298a", "e6ab02", "a6761d", "0097ff", "00d067", "f43600", "4ba93b", "5779bb", "927acc", "97ee3f", "bf3947", "9f5b00", "f48758", "8caed6", "f2b94f", "eff26e", "e43872", "d9b100", "9d7a00", "698cff", "d9d9d9", "00d27e", "d06800", "009f82", "c49200", "cbe8ff", "fecddf", "c27eb6", "8cd2ce", "c4b8d9", "f883b0", "a49100", "f48800", "27d0df", "a04a9b"];

      function getColorIndex(idx) {
        // Reuse the color if index too large.
        return Color("#" + palette[idx % palette.length]);
      }

      var colorDict = {};
      var colorIndex = 0;
      if (startIndex > 0) colorIndex = startIndex;

      if (staticColors) {
        Object.keys(staticColors).forEach(function (c) {
          var c1 = staticColors[c];

          if (isFinite(c1)) {
            colorDict[c.toLowerCase()] = getColorIndex(c1);
          } else {
            colorDict[c.toLowerCase()] = Color(staticColors[c]);
          }
        });
      } // Custom color assign


      function getColor(__, data) {
        var ret;
        var name = data[3];
        if (name === null) return Color().hsl(0, 40, 38);
        if (name === undefined) return Color().hsl(120, 40, 38);
        var name1 = name.toLowerCase();

        if (ret === undefined) {
          ret = colorDict[name1];
        }

        if (ret === undefined) {
          ret = getColorIndex(colorIndex);
          colorIndex++;
          colorDict[name1] = ret;
        }

        return ret;
      }

      return getColor;
    }
  }, {
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        data: Object,
        identifier: String,
        rendered: {
          type: Boolean,
          notify: true,
          value: false,
          readOnly: true
        },
        metas: {
          type: Array,
          value: function value() {
            return [];
          }
        },
        tooltip: {
          type: Object,
          value: function value() {
            return {
              opacity: "0",
              left: "0",
              top: "0",
              xPadding: "5",
              yPadding: "3"
            };
          }
        },
        unit: Object,
        rtl: {
          type: Boolean,
          reflectToAttribute: true
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["onPropsChange(data)"];
    }
  }]);

  return HaChartBase;
}(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_6__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]));

customElements.define("ha-chart-base", HaChartBase);

/***/ }),

/***/ "./src/components/state-history-chart-line.js":
/*!****************************************************!*\
  !*** ./src/components/state-history-chart-line.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _entity_ha_chart_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity/ha-chart-base */ "./src/components/entity/ha-chart-base.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          overflow: hidden;\n          height: 0;\n          transition: height 0.3s ease-in-out;\n        }\n      </style>\n      <ha-chart-base\n        id=\"chart\"\n        data=\"[[chartData]]\"\n        identifier=\"[[identifier]]\"\n        rendered=\"{{rendered}}\"\n      ></ha-chart-base>\n    "]);

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








var StateHistoryChartLine =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateHistoryChartLine, _LocalizeMixin);

  function StateHistoryChartLine() {
    _classCallCheck(this, StateHistoryChartLine);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateHistoryChartLine).apply(this, arguments));
  }

  _createClass(StateHistoryChartLine, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(StateHistoryChartLine.prototype), "connectedCallback", this).call(this);

      this._isAttached = true;
      this.drawChart();
    }
  }, {
    key: "dataChanged",
    value: function dataChanged() {
      this.drawChart();
    }
  }, {
    key: "_onRenderedChanged",
    value: function _onRenderedChanged(rendered) {
      if (rendered) this.animateHeight();
    }
  }, {
    key: "animateHeight",
    value: function animateHeight() {
      var _this = this;

      requestAnimationFrame(function () {
        return requestAnimationFrame(function () {
          _this.style.height = _this.$.chart.scrollHeight + "px";
        });
      });
    }
  }, {
    key: "drawChart",
    value: function drawChart() {
      var _this2 = this;

      var unit = this.unit;
      var deviceStates = this.data;
      var datasets = [];
      var endTime;

      if (!this._isAttached) {
        return;
      }

      if (deviceStates.length === 0) {
        return;
      }

      function safeParseFloat(value) {
        var parsed = parseFloat(value);
        return isFinite(parsed) ? parsed : null;
      }

      endTime = this.endTime || // Get the highest date from the last date of each device
      new Date(Math.max.apply(null, deviceStates.map(function (devSts) {
        return new Date(devSts.states[devSts.states.length - 1].last_changed);
      })));

      if (endTime > new Date()) {
        endTime = new Date();
      }

      var names = this.names || {};
      deviceStates.forEach(function (states) {
        var domain = states.domain;
        var name = names[states.entity_id] || states.name; // array containing [value1, value2, etc]

        var prevValues;
        var data = [];

        function pushData(timestamp, datavalues) {
          if (!datavalues) return;

          if (timestamp > endTime) {
            // Drop datapoints that are after the requested endTime. This could happen if
            // endTime is "now" and client time is not in sync with server time.
            return;
          }

          data.forEach(function (d, i) {
            d.data.push({
              x: timestamp,
              y: datavalues[i]
            });
          });
          prevValues = datavalues;
        }

        function addColumn(nameY, step, fill) {
          var dataFill = false;
          var dataStep = false;

          if (fill) {
            dataFill = "origin";
          }

          if (step) {
            dataStep = "before";
          }

          data.push({
            label: nameY,
            fill: dataFill,
            steppedLine: dataStep,
            pointRadius: 0,
            data: [],
            unitText: unit
          });
        }

        if (domain === "thermostat" || domain === "climate" || domain === "water_heater") {
          var hasHvacAction = states.states.some(function (state) {
            return state.attributes && state.attributes.hvac_action;
          });
          var isHeating = domain === "climate" && hasHvacAction ? function (state) {
            return state.attributes.hvac_action === "heating";
          } : function (state) {
            return state.state === "heat";
          };
          var isCooling = domain === "climate" && hasHvacAction ? function (state) {
            return state.attributes.hvac_action === "cooling";
          } : function (state) {
            return state.state === "cool";
          };
          var hasHeat = states.states.some(isHeating);
          var hasCool = states.states.some(isCooling); // We differentiate between thermostats that have a target temperature
          // range versus ones that have just a target temperature
          // Using step chart by step-before so manually interpolation not needed.

          var hasTargetRange = states.states.some(function (state) {
            return state.attributes && state.attributes.target_temp_high !== state.attributes.target_temp_low;
          });
          addColumn(name + " current temperature", true);

          if (hasHeat) {
            addColumn(name + " heating", true, true); // The "heating" series uses steppedArea to shade the area below the current
            // temperature when the thermostat is calling for heat.
          }

          if (hasCool) {
            addColumn(name + " cooling", true, true); // The "cooling" series uses steppedArea to shade the area below the current
            // temperature when the thermostat is calling for heat.
          }

          if (hasTargetRange) {
            addColumn(name + " target temperature high", true);
            addColumn(name + " target temperature low", true);
          } else {
            addColumn(name + " target temperature", true);
          }

          states.states.forEach(function (state) {
            if (!state.attributes) return;
            var curTemp = safeParseFloat(state.attributes.current_temperature);
            var series = [curTemp];

            if (hasHeat) {
              series.push(isHeating(state) ? curTemp : null);
            }

            if (hasCool) {
              series.push(isCooling(state) ? curTemp : null);
            }

            if (hasTargetRange) {
              var targetHigh = safeParseFloat(state.attributes.target_temp_high);
              var targetLow = safeParseFloat(state.attributes.target_temp_low);
              series.push(targetHigh, targetLow);
              pushData(new Date(state.last_changed), series);
            } else {
              var target = safeParseFloat(state.attributes.temperature);
              series.push(target);
              pushData(new Date(state.last_changed), series);
            }
          });
        } else {
          // Only disable interpolation for sensors
          var isStep = domain === "sensor";
          addColumn(name, isStep);
          var lastValue = null;
          var lastDate = null;
          var lastNullDate = null; // Process chart data.
          // When state is `unknown`, calculate the value and break the line.

          states.states.forEach(function (state) {
            var value = safeParseFloat(state.state);
            var date = new Date(state.last_changed);

            if (value !== null && lastNullDate !== null) {
              var dateTime = date.getTime();
              var lastNullDateTime = lastNullDate.getTime();
              var lastDateTime = lastDate.getTime();
              var tmpValue = (value - lastValue) * ((lastNullDateTime - lastDateTime) / (dateTime - lastDateTime)) + lastValue;
              pushData(lastNullDate, [tmpValue]);
              pushData(new Date(lastNullDateTime + 1), [null]);
              pushData(date, [value]);
              lastDate = date;
              lastValue = value;
              lastNullDate = null;
            } else if (value !== null && lastNullDate === null) {
              pushData(date, [value]);
              lastDate = date;
              lastValue = value;
            } else if (value === null && lastNullDate === null && lastValue !== null) {
              lastNullDate = date;
            }
          });
        } // Add an entry for final values


        pushData(endTime, prevValues, false); // Concat two arrays

        Array.prototype.push.apply(datasets, data);
      });

      var formatTooltipTitle = function formatTooltipTitle(items, data) {
        var item = items[0];
        var date = data.datasets[item.datasetIndex].data[item.index].x;
        return Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(date, _this2.hass.language);
      };

      var chartOptions = {
        type: "line",
        unit: unit,
        legend: !this.isSingleDevice,
        options: {
          scales: {
            xAxes: [{
              type: "time",
              ticks: {
                major: {
                  fontStyle: "bold"
                }
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 7
              }
            }]
          },
          tooltips: {
            mode: "neareach",
            callbacks: {
              title: formatTooltipTitle
            }
          },
          hover: {
            mode: "neareach"
          },
          layout: {
            padding: {
              top: 5
            }
          },
          elements: {
            line: {
              tension: 0.1,
              pointRadius: 0,
              borderWidth: 1.5
            },
            point: {
              hitRadius: 5
            }
          },
          plugins: {
            filler: {
              propagate: true
            }
          }
        },
        data: {
          labels: [],
          datasets: datasets
        }
      };
      this.chartData = chartOptions;
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
        chartData: Object,
        data: Object,
        names: Object,
        unit: String,
        identifier: String,
        isSingleDevice: {
          type: Boolean,
          value: false
        },
        endTime: Object,
        rendered: {
          type: Boolean,
          value: false,
          observer: "_onRenderedChanged"
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["dataChanged(data, endTime, isSingleDevice)"];
    }
  }]);

  return StateHistoryChartLine;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("state-history-chart-line", StateHistoryChartLine);

/***/ }),

/***/ "./src/components/state-history-chart-timeline.js":
/*!********************************************************!*\
  !*** ./src/components/state-history-chart-timeline.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _entity_ha_chart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity/ha-chart-base */ "./src/components/entity/ha-chart-base.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          opacity: 0;\n          transition: opacity 0.3s ease-in-out;\n        }\n        :host([rendered]) {\n          opacity: 1;\n        }\n\n        ha-chart-base {\n          direction: ltr;\n        }\n      </style>\n      <ha-chart-base\n        data=\"[[chartData]]\"\n        rendered=\"{{rendered}}\"\n        rtl=\"{{rtl}}\"\n      ></ha-chart-base>\n    "]);

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









var StateHistoryChartTimeline =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateHistoryChartTimeline, _LocalizeMixin);

  function StateHistoryChartTimeline() {
    _classCallCheck(this, StateHistoryChartTimeline);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateHistoryChartTimeline).apply(this, arguments));
  }

  _createClass(StateHistoryChartTimeline, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(StateHistoryChartTimeline.prototype), "connectedCallback", this).call(this);

      this._isAttached = true;
      this.drawChart();
    }
  }, {
    key: "dataChanged",
    value: function dataChanged() {
      this.drawChart();
    }
  }, {
    key: "drawChart",
    value: function drawChart() {
      var _this = this;

      var staticColors = {
        on: 1,
        off: 0,
        unavailable: "#a0a0a0",
        unknown: "#606060",
        idle: 2
      };
      var stateHistory = this.data;

      if (!this._isAttached) {
        return;
      }

      if (!stateHistory) {
        stateHistory = [];
      }

      var startTime = new Date(stateHistory.reduce(function (minTime, stateInfo) {
        return Math.min(minTime, new Date(stateInfo.data[0].last_changed));
      }, new Date())); // end time is Math.max(startTime, last_event)

      var endTime = this.endTime || new Date(stateHistory.reduce(function (maxTime, stateInfo) {
        return Math.max(maxTime, new Date(stateInfo.data[stateInfo.data.length - 1].last_changed));
      }, startTime));

      if (endTime > new Date()) {
        endTime = new Date();
      }

      var labels = [];
      var datasets = []; // stateHistory is a list of lists of sorted state objects

      var names = this.names || {};
      stateHistory.forEach(function (stateInfo) {
        var newLastChanged;
        var prevState = null;
        var locState = null;
        var prevLastChanged = startTime;
        var entityDisplay = names[stateInfo.entity_id] || stateInfo.name;
        var dataRow = [];
        stateInfo.data.forEach(function (state) {
          var newState = state.state;
          var timeStamp = new Date(state.last_changed);

          if (newState === undefined || newState === "") {
            newState = null;
          }

          if (timeStamp > endTime) {
            // Drop datapoints that are after the requested endTime. This could happen if
            // endTime is 'now' and client time is not in sync with server time.
            return;
          }

          if (prevState !== null && newState !== prevState) {
            newLastChanged = new Date(state.last_changed);
            dataRow.push([prevLastChanged, newLastChanged, locState, prevState]);
            prevState = newState;
            locState = state.state_localize;
            prevLastChanged = newLastChanged;
          } else if (prevState === null) {
            prevState = newState;
            locState = state.state_localize;
            prevLastChanged = new Date(state.last_changed);
          }
        });

        if (prevState !== null) {
          dataRow.push([prevLastChanged, endTime, locState, prevState]);
        }

        datasets.push({
          data: dataRow
        });
        labels.push(entityDisplay);
      });

      var formatTooltipLabel = function formatTooltipLabel(item, data) {
        var values = data.datasets[item.datasetIndex].data[item.index];
        var start = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(values[0], _this.hass.language);
        var end = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(values[1], _this.hass.language);
        var state = values[2];
        return [state, start, end];
      };

      var chartOptions = {
        type: "timeline",
        options: {
          tooltips: {
            callbacks: {
              label: formatTooltipLabel
            }
          },
          scales: {
            xAxes: [{
              ticks: {
                major: {
                  fontStyle: "bold"
                }
              }
            }],
            yAxes: [{
              afterSetDimensions: function afterSetDimensions(yaxe) {
                yaxe.maxWidth = yaxe.chart.width * 0.18;
              },
              position: this._computeRTL ? "right" : "left"
            }]
          }
        },
        data: {
          labels: labels,
          datasets: datasets
        },
        colors: {
          staticColors: staticColors,
          staticColorIndex: 3
        }
      };
      this.chartData = chartOptions;
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__["computeRTL"])(hass);
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
        hass: {
          type: Object
        },
        chartData: Object,
        data: {
          type: Object,
          observer: "dataChanged"
        },
        names: Object,
        noSingle: Boolean,
        endTime: Date,
        rendered: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },
        rtl: {
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["dataChanged(data, endTime, localize, language)"];
    }
  }]);

  return StateHistoryChartTimeline;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("state-history-chart-timeline", StateHistoryChartTimeline);

/***/ }),

/***/ "./src/components/state-history-charts.js":
/*!************************************************!*\
  !*** ./src/components/state-history-charts.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _state_history_chart_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-history-chart-line */ "./src/components/state-history-chart-line.js");
/* harmony import */ var _state_history_chart_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-history-chart-timeline */ "./src/components/state-history-chart-timeline.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          /* height of single timeline chart = 58px */\n          min-height: 58px;\n        }\n        .info {\n          text-align: center;\n          line-height: 58px;\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <template\n        is=\"dom-if\"\n        class=\"info\"\n        if=\"[[_computeIsLoading(isLoadingData)]]\"\n      >\n        <div class=\"info\">\n          [[localize('ui.components.history_charts.loading_history')]]\n        </div>\n      </template>\n\n      <template\n        is=\"dom-if\"\n        class=\"info\"\n        if=\"[[_computeIsEmpty(isLoadingData, historyData)]]\"\n      >\n        <div class=\"info\">\n          [[localize('ui.components.history_charts.no_history_found')]]\n        </div>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[historyData.timeline.length]]\">\n        <state-history-chart-timeline\n          hass=\"[[hass]]\"\n          data=\"[[historyData.timeline]]\"\n          end-time=\"[[_computeEndTime(endTime, upToNow, historyData)]]\"\n          no-single=\"[[noSingle]]\"\n          names=\"[[names]]\"\n        ></state-history-chart-timeline>\n      </template>\n\n      <template is=\"dom-repeat\" items=\"[[historyData.line]]\">\n        <state-history-chart-line\n          hass=\"[[hass]]\"\n          unit=\"[[item.unit]]\"\n          data=\"[[item.data]]\"\n          identifier=\"[[item.identifier]]\"\n          is-single-device=\"[[_computeIsSingleLineChart(item.data, noSingle)]]\"\n          end-time=\"[[_computeEndTime(endTime, upToNow, historyData)]]\"\n          names=\"[[names]]\"\n        ></state-history-chart-line>\n      </template>\n    "]);

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








var StateHistoryCharts =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateHistoryCharts, _LocalizeMixin);

  function StateHistoryCharts() {
    _classCallCheck(this, StateHistoryCharts);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateHistoryCharts).apply(this, arguments));
  }

  _createClass(StateHistoryCharts, [{
    key: "_computeIsSingleLineChart",
    value: function _computeIsSingleLineChart(data, noSingle) {
      return !noSingle && data && data.length === 1;
    }
  }, {
    key: "_computeIsEmpty",
    value: function _computeIsEmpty(isLoadingData, historyData) {
      var historyDataEmpty = !historyData || !historyData.timeline || !historyData.line || historyData.timeline.length === 0 && historyData.line.length === 0;
      return !isLoadingData && historyDataEmpty;
    }
  }, {
    key: "_computeIsLoading",
    value: function _computeIsLoading(isLoading) {
      return isLoading && !this.historyData;
    }
  }, {
    key: "_computeEndTime",
    value: function _computeEndTime(endTime, upToNow) {
      // We don't really care about the value of historyData, but if it change we want to update
      // endTime.
      return upToNow ? new Date() : endTime;
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
        historyData: {
          type: Object,
          value: null
        },
        names: Object,
        isLoadingData: Boolean,
        endTime: {
          type: Object
        },
        upToNow: Boolean,
        noSingle: Boolean
      };
    }
  }]);

  return StateHistoryCharts;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("state-history-charts", StateHistoryCharts);

/***/ }),

/***/ "./src/data/cached-history.ts":
/*!************************************!*\
  !*** ./src/data/cached-history.ts ***!
  \************************************/
/*! exports provided: getRecent, getRecentWithCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecent", function() { return getRecent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentWithCache", function() { return getRecentWithCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history */ "./src/data/history.ts");


var RECENT_THRESHOLD = 60000; // 1 minute
var RECENT_CACHE = {};
var stateHistoryCache = {};
// Cached type 1 unction. Without cache config.
var getRecent = function (hass, entityId, startTime, endTime, localize, language) {
    var cacheKey = entityId;
    var cache = RECENT_CACHE[cacheKey];
    if (cache &&
        Date.now() - cache.created < RECENT_THRESHOLD &&
        cache.language === language) {
        return cache.data;
    }
    var prom = Object(_history__WEBPACK_IMPORTED_MODULE_1__["fetchRecent"])(hass, entityId, startTime, endTime).then(function (stateHistory) { return Object(_history__WEBPACK_IMPORTED_MODULE_1__["computeHistory"])(hass, stateHistory, localize, language); }, function (err) {
        delete RECENT_CACHE[entityId];
        throw err;
    });
    RECENT_CACHE[cacheKey] = {
        created: Date.now(),
        language: language,
        data: prom,
    };
    return prom;
};
// Cache type 2 functionality
function getEmptyCache(language, startTime, endTime) {
    return {
        prom: Promise.resolve({ line: [], timeline: [] }),
        language: language,
        startTime: startTime,
        endTime: endTime,
        data: { line: [], timeline: [] },
    };
}
var getRecentWithCache = function (hass, entityId, cacheConfig, localize, language) {
    var cacheKey = cacheConfig.cacheKey;
    var endTime = new Date();
    var startTime = new Date(endTime);
    startTime.setHours(startTime.getHours() - cacheConfig.hoursToShow);
    var toFetchStartTime = startTime;
    var appendingToCache = false;
    var cache = stateHistoryCache[cacheKey];
    if (cache &&
        toFetchStartTime >= cache.startTime &&
        toFetchStartTime <= cache.endTime &&
        cache.language === language) {
        toFetchStartTime = cache.endTime;
        appendingToCache = true;
        // This pretty much never happens as endTime is usually set to now
        if (endTime <= cache.endTime) {
            return cache.prom;
        }
    }
    else {
        cache = stateHistoryCache[cacheKey] = getEmptyCache(language, startTime, endTime);
    }
    var curCacheProm = cache.prom;
    var genProm = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
        var fetchedHistory, results, err_1, stateHistory;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Promise.all([
                            curCacheProm,
                            Object(_history__WEBPACK_IMPORTED_MODULE_1__["fetchRecent"])(hass, entityId, toFetchStartTime, endTime, appendingToCache),
                        ])];
                case 1:
                    results = _a.sent();
                    fetchedHistory = results[1];
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    delete stateHistoryCache[cacheKey];
                    throw err_1;
                case 3:
                    stateHistory = Object(_history__WEBPACK_IMPORTED_MODULE_1__["computeHistory"])(hass, fetchedHistory, localize, language);
                    if (appendingToCache) {
                        mergeLine(stateHistory.line, cache.data.line);
                        mergeTimeline(stateHistory.timeline, cache.data.timeline);
                        pruneStartTime(startTime, cache.data);
                    }
                    else {
                        cache.data = stateHistory;
                    }
                    return [2 /*return*/, cache.data];
            }
        });
    }); };
    cache.prom = genProm();
    cache.startTime = startTime;
    cache.endTime = endTime;
    return cache.prom;
};
var mergeLine = function (historyLines, cacheLines) {
    historyLines.forEach(function (line) {
        var unit = line.unit;
        var oldLine = cacheLines.find(function (cacheLine) { return cacheLine.unit === unit; });
        if (oldLine) {
            line.data.forEach(function (entity) {
                var oldEntity = oldLine.data.find(function (cacheEntity) { return entity.entity_id === cacheEntity.entity_id; });
                if (oldEntity) {
                    oldEntity.states = oldEntity.states.concat(entity.states);
                }
                else {
                    oldLine.data.push(entity);
                }
            });
        }
        else {
            cacheLines.push(line);
        }
    });
};
var mergeTimeline = function (historyTimelines, cacheTimelines) {
    historyTimelines.forEach(function (timeline) {
        var oldTimeline = cacheTimelines.find(function (cacheTimeline) { return cacheTimeline.entity_id === timeline.entity_id; });
        if (oldTimeline) {
            oldTimeline.data = oldTimeline.data.concat(timeline.data);
        }
        else {
            cacheTimelines.push(timeline);
        }
    });
};
var pruneArray = function (originalStartTime, arr) {
    if (arr.length === 0) {
        return arr;
    }
    var changedAfterStartTime = arr.findIndex(function (state) { return new Date(state.last_changed) > originalStartTime; });
    if (changedAfterStartTime === 0) {
        // If all changes happened after originalStartTime then we are done.
        return arr;
    }
    // If all changes happened at or before originalStartTime. Use last index.
    var updateIndex = changedAfterStartTime === -1 ? arr.length - 1 : changedAfterStartTime - 1;
    arr[updateIndex].last_changed = originalStartTime;
    return arr.slice(updateIndex);
};
var pruneStartTime = function (originalStartTime, cacheData) {
    cacheData.line.forEach(function (line) {
        line.data.forEach(function (entity) {
            entity.states = pruneArray(originalStartTime, entity.states);
        });
    });
    cacheData.timeline.forEach(function (timeline) {
        timeline.data = pruneArray(originalStartTime, timeline.data);
    });
};


/***/ }),

/***/ "./src/data/ha-state-history-data.js":
/*!*******************************************!*\
  !*** ./src/data/ha-state-history-data.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history */ "./src/data/history.ts");
/* harmony import */ var _cached_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cached-history */ "./src/data/cached-history.ts");
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







/*
 * @appliesMixin LocalizeMixin
 */

var HaStateHistoryData =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaStateHistoryData, _LocalizeMixin);

  function HaStateHistoryData() {
    _classCallCheck(this, HaStateHistoryData);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaStateHistoryData).apply(this, arguments));
  }

  _createClass(HaStateHistoryData, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaStateHistoryData.prototype), "connectedCallback", this).call(this);

      this.filterChangedDebouncer(this.filterType, this.entityId, this.startTime, this.endTime, this.cacheConfig, this.localize);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this._refreshTimeoutId) {
        window.clearInterval(this._refreshTimeoutId);
        this._refreshTimeoutId = null;
      }

      _get(_getPrototypeOf(HaStateHistoryData.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "hassChanged",
    value: function hassChanged(newHass, oldHass) {
      if (!oldHass && !this._madeFirstCall) {
        this.filterChangedDebouncer(this.filterType, this.entityId, this.startTime, this.endTime, this.cacheConfig, this.localize);
      }
    }
  }, {
    key: "filterChangedDebouncer",
    value: function filterChangedDebouncer() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this._debounceFilterChanged = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this._debounceFilterChanged, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(0), function () {
        _this.filterChanged.apply(_this, args);
      });
    }
  }, {
    key: "filterChanged",
    value: function filterChanged(filterType, entityId, startTime, endTime, cacheConfig, localize) {
      var _this2 = this;

      if (!this.hass) {
        return;
      }

      if (cacheConfig && !cacheConfig.cacheKey) {
        return;
      }

      if (!localize) {
        return;
      }

      this._madeFirstCall = true;
      var language = this.hass.language;
      var data;

      if (filterType === "date") {
        if (!startTime || !endTime) return;
        data = Object(_history__WEBPACK_IMPORTED_MODULE_4__["fetchDate"])(this.hass, startTime, endTime).then(function (dateHistory) {
          return Object(_history__WEBPACK_IMPORTED_MODULE_4__["computeHistory"])(_this2.hass, dateHistory, localize, language);
        });
      } else if (filterType === "recent-entity") {
        if (!entityId) return;

        if (cacheConfig) {
          data = this.getRecentWithCacheRefresh(entityId, cacheConfig, localize, language);
        } else {
          data = Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecent"])(this.hass, entityId, startTime, endTime, localize, language);
        }
      } else {
        return;
      }

      this._setIsLoading(true);

      data.then(function (stateHistory) {
        _this2._setData(stateHistory);

        _this2._setIsLoading(false);
      });
    }
  }, {
    key: "getRecentWithCacheRefresh",
    value: function getRecentWithCacheRefresh(entityId, cacheConfig, localize, language) {
      var _this3 = this;

      if (this._refreshTimeoutId) {
        window.clearInterval(this._refreshTimeoutId);
        this._refreshTimeoutId = null;
      }

      if (cacheConfig.refresh) {
        this._refreshTimeoutId = window.setInterval(function () {
          Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"])(_this3.hass, entityId, cacheConfig, localize, language).then(function (stateHistory) {
            _this3._setData(Object.assign({}, stateHistory));
          });
        }, cacheConfig.refresh * 1000);
      }

      return Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"])(this.hass, entityId, cacheConfig, localize, language);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object,
          observer: "hassChanged"
        },
        filterType: String,
        cacheConfig: Object,
        startTime: Date,
        endTime: Date,
        entityId: String,
        isLoading: {
          type: Boolean,
          value: true,
          readOnly: true,
          notify: true
        },
        data: {
          type: Object,
          value: null,
          readOnly: true,
          notify: true
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)"];
    }
  }]);

  return HaStateHistoryData;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-state-history-data", HaStateHistoryData);

/***/ }),

/***/ "./src/data/history.ts":
/*!*****************************!*\
  !*** ./src/data/history.ts ***!
  \*****************************/
/*! exports provided: fetchRecent, fetchDate, computeHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecent", function() { return fetchRecent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDate", function() { return fetchDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHistory", function() { return computeHistory; });
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");



var DOMAINS_USE_LAST_UPDATED = ["climate", "water_heater"];
var LINE_ATTRIBUTES_TO_KEEP = [
    "temperature",
    "current_temperature",
    "target_temp_low",
    "target_temp_high",
    "hvac_action",
];
var fetchRecent = function (hass, entityId, startTime, endTime, skipInitialState) {
    if (skipInitialState === void 0) { skipInitialState = false; }
    var url = "history/period";
    if (startTime) {
        url += "/" + startTime.toISOString();
    }
    url += "?filter_entity_id=" + entityId;
    if (endTime) {
        url += "&end_time=" + endTime.toISOString();
    }
    if (skipInitialState) {
        url += "&skip_initial_state";
    }
    return hass.callApi("GET", url);
};
var fetchDate = function (hass, startTime, endTime) {
    return hass.callApi("GET", "history/period/" + startTime.toISOString() + "?end_time=" + endTime.toISOString());
};
var equalState = function (obj1, obj2) {
    return obj1.state === obj2.state &&
        // They either both have an attributes object or not
        (!obj1.attributes ||
            LINE_ATTRIBUTES_TO_KEEP.every(function (attr) { return obj1.attributes[attr] === obj2.attributes[attr]; }));
};
var processTimelineEntity = function (localize, language, states) {
    var data = [];
    for (var _i = 0, states_1 = states; _i < states_1.length; _i++) {
        var state = states_1[_i];
        if (data.length > 0 && state.state === data[data.length - 1].state) {
            continue;
        }
        data.push({
            state_localize: Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__["computeStateDisplay"])(localize, state, language),
            state: state.state,
            last_changed: state.last_changed,
        });
    }
    return {
        name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(states[0]),
        entity_id: states[0].entity_id,
        data: data,
    };
};
var processLineChartEntities = function (unit, entities) {
    var data = [];
    for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
        var states = entities_1[_i];
        var last = states[states.length - 1];
        var domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(last);
        var processedStates = [];
        for (var _a = 0, states_2 = states; _a < states_2.length; _a++) {
            var state = states_2[_a];
            var processedState = void 0;
            if (DOMAINS_USE_LAST_UPDATED.includes(domain)) {
                processedState = {
                    state: state.state,
                    last_changed: state.last_updated,
                    attributes: {},
                };
                for (var _b = 0, LINE_ATTRIBUTES_TO_KEEP_1 = LINE_ATTRIBUTES_TO_KEEP; _b < LINE_ATTRIBUTES_TO_KEEP_1.length; _b++) {
                    var attr = LINE_ATTRIBUTES_TO_KEEP_1[_b];
                    if (attr in state.attributes) {
                        processedState.attributes[attr] = state.attributes[attr];
                    }
                }
            }
            else {
                processedState = state;
            }
            if (processedStates.length > 1 &&
                equalState(processedState, processedStates[processedStates.length - 1]) &&
                equalState(processedState, processedStates[processedStates.length - 2])) {
                continue;
            }
            processedStates.push(processedState);
        }
        data.push({
            domain: domain,
            name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(last),
            entity_id: last.entity_id,
            states: processedStates,
        });
    }
    return {
        unit: unit,
        identifier: entities.map(function (states) { return states[0].entity_id; }).join(""),
        data: data,
    };
};
var computeHistory = function (hass, stateHistory, localize, language) {
    var lineChartDevices = {};
    var timelineDevices = [];
    if (!stateHistory) {
        return { line: [], timeline: [] };
    }
    stateHistory.forEach(function (stateInfo) {
        if (stateInfo.length === 0) {
            return;
        }
        var stateWithUnit = stateInfo.find(function (state) { return "unit_of_measurement" in state.attributes; });
        var unit;
        if (stateWithUnit) {
            unit = stateWithUnit.attributes.unit_of_measurement;
        }
        else if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateInfo[0]) === "climate") {
            unit = hass.config.unit_system.temperature;
        }
        else if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateInfo[0]) === "water_heater") {
            unit = hass.config.unit_system.temperature;
        }
        if (!unit) {
            timelineDevices.push(processTimelineEntity(localize, language, stateInfo));
        }
        else if (unit in lineChartDevices) {
            lineChartDevices[unit].push(stateInfo);
        }
        else {
            lineChartDevices[unit] = [stateInfo];
        }
    });
    var unitStates = Object.keys(lineChartDevices).map(function (unit) {
        return processLineChartEntities(unit, lineChartDevices[unit]);
    });
    return { line: unitStates, timeline: timelineDevices };
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1oaXN0b3J5fnBhbmVsLWtpb3NrfnBhbmVsLWxvdmVsYWNlfnBhbmVsLXN0YXRlcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1jaGFydC1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0YXRlLWhpc3RvcnktY2hhcnQtbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0YXRlLWhpc3RvcnktY2hhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NhY2hlZC1oaXN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2hhLXN0YXRlLWhpc3RvcnktZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9oaXN0b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcIm1lZGl1bURhdGVcIikpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwiaGFEYXRlVGltZVwiKSk7XG4iLCJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlVGltZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwic2hvcnRUaW1lXCIpKTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IGZvcm1hdERhdGVUaW1lIGZyb20gXCIuLi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5pbXBvcnQgZm9ybWF0RGF0ZSBmcm9tIFwiLi4vZGF0ZXRpbWUvZm9ybWF0X2RhdGVcIjtcbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gXCIuLi9kYXRldGltZS9mb3JtYXRfdGltZVwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlRGlzcGxheSA9IChcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHksXG4gIGxhbmd1YWdlOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIGxldCBkaXNwbGF5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKGRvbWFpbiA9PT0gXCJiaW5hcnlfc2Vuc29yXCIpIHtcbiAgICAvLyBUcnkgZGV2aWNlIGNsYXNzIHRyYW5zbGF0aW9uLCB0aGVuIGRlZmF1bHQgYmluYXJ5IHNlbnNvciB0cmFuc2xhdGlvblxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcykge1xuICAgICAgZGlzcGxheSA9IGxvY2FsaXplKFxuICAgICAgICBgc3RhdGUuJHtkb21haW59LiR7c3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3N9LiR7c3RhdGVPYmouc3RhdGV9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWRpc3BsYXkpIHtcbiAgICAgIGRpc3BsYXkgPSBsb2NhbGl6ZShgc3RhdGUuJHtkb21haW59LmRlZmF1bHQuJHtzdGF0ZU9iai5zdGF0ZX1gKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgc3RhdGVPYmouYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50ICYmXG4gICAgIVtcInVua25vd25cIiwgXCJ1bmF2YWlsYWJsZVwiXS5pbmNsdWRlcyhzdGF0ZU9iai5zdGF0ZSlcbiAgKSB7XG4gICAgZGlzcGxheSA9IHN0YXRlT2JqLnN0YXRlICsgXCIgXCIgKyBzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQ7XG4gIH0gZWxzZSBpZiAoZG9tYWluID09PSBcImlucHV0X2RhdGV0aW1lXCIpIHtcbiAgICBsZXQgZGF0ZTogRGF0ZTtcbiAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy55ZWFyLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1vbnRoIC0gMSxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5kYXlcbiAgICAgICk7XG4gICAgICBkaXNwbGF5ID0gZm9ybWF0RGF0ZShkYXRlLCBsYW5ndWFnZSk7XG4gICAgfSBlbHNlIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgLy8gRHVlIHRvIGJ1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTc1NDhcbiAgICAgICAgLy8gZG9uJ3QgdXNlIGFydGlmaWNpYWwgMTk3MCB5ZWFyLlxuICAgICAgICBub3cuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgbm93LmdldE1vbnRoKCksXG4gICAgICAgIG5vdy5nZXREYXkoKSxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5ob3VyLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbnV0ZVxuICAgICAgKTtcbiAgICAgIGRpc3BsYXkgPSBmb3JtYXRUaW1lKGRhdGUsIGxhbmd1YWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggLSAxLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRheSxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5ob3VyLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbnV0ZVxuICAgICAgKTtcbiAgICAgIGRpc3BsYXkgPSBmb3JtYXREYXRlVGltZShkYXRlLCBsYW5ndWFnZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gXCJ6d2F2ZVwiKSB7XG4gICAgaWYgKFtcImluaXRpYWxpemluZ1wiLCBcImRlYWRcIl0uaW5jbHVkZXMoc3RhdGVPYmouc3RhdGUpKSB7XG4gICAgICBkaXNwbGF5ID0gbG9jYWxpemUoXG4gICAgICAgIGBzdGF0ZS56d2F2ZS5xdWVyeV9zdGFnZS4ke3N0YXRlT2JqLnN0YXRlfWAsXG4gICAgICAgIFwicXVlcnlfc3RhZ2VcIixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5xdWVyeV9zdGFnZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheSA9IGxvY2FsaXplKGBzdGF0ZS56d2F2ZS5kZWZhdWx0LiR7c3RhdGVPYmouc3RhdGV9YCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRpc3BsYXkgPSBsb2NhbGl6ZShgc3RhdGUuJHtkb21haW59LiR7c3RhdGVPYmouc3RhdGV9YCk7XG4gIH1cblxuICAvLyBGYWxsIGJhY2sgdG8gZGVmYXVsdCwgY29tcG9uZW50IGJhY2tlbmQgdHJhbnNsYXRpb24sIG9yIHJhdyBzdGF0ZSBpZiBub3RoaW5nIGVsc2UgbWF0Y2hlcy5cbiAgaWYgKCFkaXNwbGF5KSB7XG4gICAgZGlzcGxheSA9XG4gICAgICBsb2NhbGl6ZShgc3RhdGUuZGVmYXVsdC4ke3N0YXRlT2JqLnN0YXRlfWApIHx8XG4gICAgICBsb2NhbGl6ZShgY29tcG9uZW50LiR7ZG9tYWlufS5zdGF0ZS4ke3N0YXRlT2JqLnN0YXRlfWApIHx8XG4gICAgICBzdGF0ZU9iai5zdGF0ZTtcbiAgfVxuXG4gIHJldHVybiBkaXNwbGF5O1xufTtcbiIsImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBJcm9uUmVzaXphYmxlQmVoYXZpb3IgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IvaXJvbi1yZXNpemFibGUtYmVoYXZpb3JcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IHRpbWVPdXQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmNcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuXG5pbXBvcnQgZm9ybWF0VGltZSBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF90aW1lXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qIGdsb2JhbCBDaGFydCBtb21lbnQgQ29sb3IgKi9cblxubGV0IHNjcmlwdHNMb2FkZWQgPSBudWxsO1xuXG5jbGFzcyBIYUNoYXJ0QmFzZSBleHRlbmRzIG1peGluQmVoYXZpb3JzKFxuICBbSXJvblJlc2l6YWJsZUJlaGF2aW9yXSxcbiAgUG9seW1lckVsZW1lbnRcbikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0SGVhZGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMCAwIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydEhlYWRlciA+IGRpdiB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRIZWFkZXIgPiBkaXYuY2hhcnRUaXRsZSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICBmbGV4OiAwIDAgMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRIZWFkZXIgPiBkaXYuY2hhcnRMZWdlbmQge1xuICAgICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgICBtaW4td2lkdGg6IDcwJTtcbiAgICAgICAgfVxuICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRUb29sdGlwIHtcbiAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDgwLCA4MCwgODAsIDAuOSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMnB4KTtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtydGxdKSAuY2hhcnRUb29sdGlwIHtcbiAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgdWwsXG4gICAgICAgIC5jaGFydFRvb2x0aXAgdWwge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwIDBweDtcbiAgICAgICAgICBtYXJnaW46IDVweCAwIDAgMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRUb29sdGlwIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0VG9vbHRpcCAudGl0bGUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydExlZ2VuZCBsaSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICAgIG1heC13aWR0aDogNDklO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydExlZ2VuZCBsaTpudGgtY2hpbGQob2RkKTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgIC8qIE1ha2UgbGFzdCBpdGVtIHRha2UgZnVsbCB3aWR0aCBpZiBpdCBpcyBvZGQtbnVtYmVyZWQuICovXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydExlZ2VuZCBsaVtkYXRhLWhpZGRlbl0ge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydExlZ2VuZCBlbSxcbiAgICAgICAgLmNoYXJ0VG9vbHRpcCBlbSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5jaGFydFRvb2x0aXAgZW0ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogaW5oZXJpdDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3VuaXRdXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnRIZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnRUaXRsZVwiPltbdW5pdF1dPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0TGVnZW5kXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbbWV0YXNdXVwiPlxuICAgICAgICAgICAgICAgIDxsaSBvbi1jbGljaz1cIl9sZWdlbmRDbGlja1wiIGRhdGEtaGlkZGVuJD1cIltbaXRlbS5oaWRkZW5dXVwiPlxuICAgICAgICAgICAgICAgICAgPGVtIHN0eWxlJD1cImJhY2tncm91bmQtY29sb3I6W1tpdGVtLmJnQ29sb3JdXVwiPjwvZW0+XG4gICAgICAgICAgICAgICAgICBbW2l0ZW0ubGFiZWxdXVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8ZGl2IGlkPVwiY2hhcnRUYXJnZXRcIiBzdHlsZT1cImhlaWdodDo0MHB4OyB3aWR0aDoxMDAlXCI+XG4gICAgICAgIDxjYW52YXMgaWQ9XCJjaGFydENhbnZhc1wiPjwvY2FudmFzPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3MkPVwiY2hhcnRUb29sdGlwIFtbdG9vbHRpcC55QWxpZ25dXVwiXG4gICAgICAgICAgc3R5bGUkPVwib3BhY2l0eTpbW3Rvb2x0aXAub3BhY2l0eV1dOyB0b3A6W1t0b29sdGlwLnRvcF1dOyBsZWZ0OltbdG9vbHRpcC5sZWZ0XV07IHBhZGRpbmc6W1t0b29sdGlwLnlQYWRkaW5nXV1weCBbW3Rvb2x0aXAueFBhZGRpbmddXXB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPltbdG9vbHRpcC50aXRsZV1dPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1t0b29sdGlwLmxpbmVzXV1cIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZW0gc3R5bGUkPVwiYmFja2dyb3VuZC1jb2xvcjpbW2l0ZW0uYmdDb2xvcl1dXCI+PC9lbVxuICAgICAgICAgICAgICAgICAgPltbaXRlbS50ZXh0XV1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgZ2V0IGNoYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl9jaGFydDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogT2JqZWN0LFxuICAgICAgaWRlbnRpZmllcjogU3RyaW5nLFxuICAgICAgcmVuZGVyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIG1ldGFzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogKCkgPT4gW10sXG4gICAgICB9LFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiAoKSA9PiAoe1xuICAgICAgICAgIG9wYWNpdHk6IFwiMFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgICAgeFBhZGRpbmc6IFwiNVwiLFxuICAgICAgICAgIHlQYWRkaW5nOiBcIjNcIixcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAgdW5pdDogT2JqZWN0LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJvblByb3BzQ2hhbmdlKGRhdGEpXCJdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9uUHJvcHNDaGFuZ2UoKTtcbiAgICB0aGlzLl9yZXNpemVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2RlYm91bmNlciA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgICAgdGhpcy5fZGVib3VuY2VyLFxuICAgICAgICB0aW1lT3V0LmFmdGVyKDEwKSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9pc0F0dGFjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUNoYXJ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9yZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuJC5jaGFydFRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImlyb24tcmVzaXplXCIsIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBpZiAoc2NyaXB0c0xvYWRlZCA9PT0gbnVsbCkge1xuICAgICAgc2NyaXB0c0xvYWRlZCA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxvYWRfY2hhcnRcIiAqLyBcIi4uLy4uL3Jlc291cmNlcy9oYS1jaGFydC1zY3JpcHRzLmpzXCIpO1xuICAgIH1cbiAgICBzY3JpcHRzTG9hZGVkLnRoZW4oKENoYXJ0TW9kdWxlKSA9PiB7XG4gICAgICB0aGlzLkNoYXJ0Q2xhc3MgPSBDaGFydE1vZHVsZS5kZWZhdWx0O1xuICAgICAgdGhpcy5vblByb3BzQ2hhbmdlKCk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5yZXNpemVPYnNlcnZlcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy4kLmNoYXJ0VGFyZ2V0KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpcm9uLXJlc2l6ZVwiLCB0aGlzLl9yZXNpemVMaXN0ZW5lcik7XG5cbiAgICBpZiAodGhpcy5fcmVzaXplVGltZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9yZXNpemVUaW1lcik7XG4gICAgICB0aGlzLl9yZXNpemVUaW1lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBvblByb3BzQ2hhbmdlKCkge1xuICAgIGlmICghdGhpcy5faXNBdHRhY2hlZCB8fCAhdGhpcy5DaGFydENsYXNzIHx8ICF0aGlzLmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgfVxuXG4gIF9jdXN0b21Ub29sdGlwcyh0b29sdGlwKSB7XG4gICAgLy8gSGlkZSBpZiBubyB0b29sdGlwXG4gICAgaWYgKHRvb2x0aXAub3BhY2l0eSA9PT0gMCkge1xuICAgICAgdGhpcy5zZXQoW1widG9vbHRpcFwiLCBcIm9wYWNpdHlcIl0sIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTZXQgY2FyZXQgUG9zaXRpb25cbiAgICBpZiAodG9vbHRpcC55QWxpZ24pIHtcbiAgICAgIHRoaXMuc2V0KFtcInRvb2x0aXBcIiwgXCJ5QWxpZ25cIl0sIHRvb2x0aXAueUFsaWduKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXQoW1widG9vbHRpcFwiLCBcInlBbGlnblwiXSwgXCJuby10cmFuc2Zvcm1cIik7XG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGUgPSB0b29sdGlwLnRpdGxlID8gdG9vbHRpcC50aXRsZVswXSB8fCBcIlwiIDogXCJcIjtcbiAgICB0aGlzLnNldChbXCJ0b29sdGlwXCIsIFwidGl0bGVcIl0sIHRpdGxlKTtcblxuICAgIGNvbnN0IGJvZHlMaW5lcyA9IHRvb2x0aXAuYm9keS5tYXAoKG4pID0+IG4ubGluZXMpO1xuXG4gICAgLy8gU2V0IFRleHRcbiAgICBpZiAodG9vbHRpcC5ib2R5KSB7XG4gICAgICB0aGlzLnNldChcbiAgICAgICAgW1widG9vbHRpcFwiLCBcImxpbmVzXCJdLFxuICAgICAgICBib2R5TGluZXMubWFwKChib2R5LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29sb3JzID0gdG9vbHRpcC5sYWJlbENvbG9yc1tpXTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3I6IGNvbG9ycy5ib3JkZXJDb2xvcixcbiAgICAgICAgICAgIGJnQ29sb3I6IGNvbG9ycy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICB0ZXh0OiBib2R5LmpvaW4oXCJcXG5cIiksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudFdpZHRoID0gdGhpcy4kLmNoYXJ0VGFyZ2V0LmNsaWVudFdpZHRoO1xuICAgIGxldCBwb3NpdGlvblggPSB0b29sdGlwLmNhcmV0WDtcbiAgICBjb25zdCBwb3NpdGlvblkgPSB0aGlzLl9jaGFydC5jYW52YXMub2Zmc2V0VG9wICsgdG9vbHRpcC5jYXJldFk7XG4gICAgaWYgKHRvb2x0aXAuY2FyZXRYICsgMTAwID4gcGFyZW50V2lkdGgpIHtcbiAgICAgIHBvc2l0aW9uWCA9IHBhcmVudFdpZHRoIC0gMTAwO1xuICAgIH0gZWxzZSBpZiAodG9vbHRpcC5jYXJldFggPCAxMDApIHtcbiAgICAgIHBvc2l0aW9uWCA9IDEwMDtcbiAgICB9XG4gICAgcG9zaXRpb25YICs9IHRoaXMuX2NoYXJ0LmNhbnZhcy5vZmZzZXRMZWZ0O1xuICAgIC8vIERpc3BsYXksIHBvc2l0aW9uLCBhbmQgc2V0IHN0eWxlcyBmb3IgZm9udFxuICAgIHRoaXMudG9vbHRpcCA9IHtcbiAgICAgIC4uLnRoaXMudG9vbHRpcCxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBsZWZ0OiBgJHtwb3NpdGlvblh9cHhgLFxuICAgICAgdG9wOiBgJHtwb3NpdGlvbll9cHhgLFxuICAgIH07XG4gIH1cblxuICBfbGVnZW5kQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldC5ub2RlTmFtZSAhPT0gXCJMSVwiKSB7XG4gICAgICAvLyB1c2VyIGNsaWNrZWQgY2hpbGQsIGZpbmQgcGFyZW50IExJXG4gICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBldmVudC5tb2RlbC5pdGVtc0luZGV4O1xuXG4gICAgY29uc3QgbWV0YSA9IHRoaXMuX2NoYXJ0LmdldERhdGFzZXRNZXRhKGluZGV4KTtcbiAgICBtZXRhLmhpZGRlbiA9XG4gICAgICBtZXRhLmhpZGRlbiA9PT0gbnVsbCA/ICF0aGlzLl9jaGFydC5kYXRhLmRhdGFzZXRzW2luZGV4XS5oaWRkZW4gOiBudWxsO1xuICAgIHRoaXMuc2V0KFxuICAgICAgW1wibWV0YXNcIiwgaW5kZXgsIFwiaGlkZGVuXCJdLFxuICAgICAgdGhpcy5fY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShpbmRleCkgPyBudWxsIDogXCJoaWRkZW5cIlxuICAgICk7XG4gICAgdGhpcy5fY2hhcnQudXBkYXRlKCk7XG4gIH1cblxuICBfZHJhd0xlZ2VuZCgpIHtcbiAgICBjb25zdCBjaGFydCA9IHRoaXMuX2NoYXJ0O1xuICAgIC8vIE5ldyBkYXRhIGZvciBvbGQgZ3JhcGguIEtlZXAgbWV0YWRhdGEuXG4gICAgY29uc3QgcHJlc2VydmVWaXNpYmlsaXR5ID1cbiAgICAgIHRoaXMuX29sZElkZW50aWZpZXIgJiYgdGhpcy5pZGVudGlmaWVyID09PSB0aGlzLl9vbGRJZGVudGlmaWVyO1xuICAgIHRoaXMuX29sZElkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXI7XG4gICAgdGhpcy5zZXQoXG4gICAgICBcIm1ldGFzXCIsXG4gICAgICB0aGlzLl9jaGFydC5kYXRhLmRhdGFzZXRzLm1hcCgoeCwgaSkgPT4gKHtcbiAgICAgICAgbGFiZWw6IHgubGFiZWwsXG4gICAgICAgIGNvbG9yOiB4LmNvbG9yLFxuICAgICAgICBiZ0NvbG9yOiB4LmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgaGlkZGVuOlxuICAgICAgICAgIHByZXNlcnZlVmlzaWJpbGl0eSAmJiBpIDwgdGhpcy5tZXRhcy5sZW5ndGhcbiAgICAgICAgICAgID8gdGhpcy5tZXRhc1tpXS5oaWRkZW5cbiAgICAgICAgICAgIDogIWNoYXJ0LmlzRGF0YXNldFZpc2libGUoaSksXG4gICAgICB9KSlcbiAgICApO1xuICAgIGxldCB1cGRhdGVOZWVkZWQgPSBmYWxzZTtcbiAgICBpZiAocHJlc2VydmVWaXNpYmlsaXR5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWV0YXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWV0YSA9IGNoYXJ0LmdldERhdGFzZXRNZXRhKGkpO1xuICAgICAgICBpZiAoISFtZXRhLmhpZGRlbiAhPT0gISF0aGlzLm1ldGFzW2ldLmhpZGRlbikgdXBkYXRlTmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgbWV0YS5oaWRkZW4gPSB0aGlzLm1ldGFzW2ldLmhpZGRlbiA/IHRydWUgOiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodXBkYXRlTmVlZGVkKSB7XG4gICAgICBjaGFydC51cGRhdGUoKTtcbiAgICB9XG4gICAgdGhpcy51bml0ID0gdGhpcy5kYXRhLnVuaXQ7XG4gIH1cblxuICBfZm9ybWF0VGlja1ZhbHVlKHZhbHVlLCBpbmRleCwgdmFsdWVzKSB7XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlc1tpbmRleF0udmFsdWUpO1xuICAgIHJldHVybiBmb3JtYXRUaW1lKGRhdGUpO1xuICB9XG5cbiAgZHJhd0NoYXJ0KCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuZGF0YTtcbiAgICBjb25zdCBjdHggPSB0aGlzLiQuY2hhcnRDYW52YXM7XG5cbiAgICBpZiAoKCFkYXRhLmRhdGFzZXRzIHx8ICFkYXRhLmRhdGFzZXRzLmxlbmd0aCkgJiYgIXRoaXMuX2NoYXJ0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEudHlwZSAhPT0gXCJ0aW1lbGluZVwiICYmIGRhdGEuZGF0YXNldHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY250ID0gZGF0YS5kYXRhc2V0cy5sZW5ndGg7XG4gICAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmNvbnN0cnVjdG9yLmdldENvbG9yTGlzdChjbnQpO1xuICAgICAgZm9yIChsZXQgbG9vcEkgPSAwOyBsb29wSSA8IGNudDsgbG9vcEkrKykge1xuICAgICAgICBkYXRhLmRhdGFzZXRzW2xvb3BJXS5ib3JkZXJDb2xvciA9IGNvbG9yc1tsb29wSV0ucmdiU3RyaW5nKCk7XG4gICAgICAgIGRhdGEuZGF0YXNldHNbbG9vcEldLmJhY2tncm91bmRDb2xvciA9IGNvbG9yc1tsb29wSV1cbiAgICAgICAgICAuYWxwaGEoMC42KVxuICAgICAgICAgIC5yZ2JhU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLl9jdXN0b21Ub29sdGlwcyh7IG9wYWNpdHk6IDAgfSk7XG4gICAgICB0aGlzLl9jaGFydC5kYXRhID0gZGF0YTtcbiAgICAgIHRoaXMuX2NoYXJ0LnVwZGF0ZSh7IGR1cmF0aW9uOiAwIH0pO1xuICAgICAgaWYgKHRoaXMuaXNUaW1lbGluZSkge1xuICAgICAgICB0aGlzLl9jaGFydC5vcHRpb25zLnNjYWxlcy55QXhlc1swXS5ncmlkTGluZXMuZGlzcGxheSA9IGRhdGEubGVuZ3RoID4gMTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmxlZ2VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9kcmF3TGVnZW5kKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc2l6ZUNoYXJ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZGF0YS5kYXRhc2V0cykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jdXN0b21Ub29sdGlwcyh7IG9wYWNpdHk6IDAgfSk7XG4gICAgICBjb25zdCBwbHVnaW5zID0gW3sgYWZ0ZXJSZW5kZXI6ICgpID0+IHRoaXMuX3NldFJlbmRlcmVkKHRydWUpIH1dO1xuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2l2ZUFuaW1hdGlvbkR1cmF0aW9uOiAwLFxuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGN1c3RvbTogdGhpcy5fY3VzdG9tVG9vbHRpcHMuYmluZCh0aGlzKSxcbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBzcGFuR2FwczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICBmb250OiBcIjEycHggJ1JvYm90bycsICdzYW5zLXNlcmlmJ1wiLFxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsICdzYW5zLXNlcmlmJ1wiLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKG9wdGlvbnMsIHRoaXMuZGF0YS5vcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLnRpY2tzLmNhbGxiYWNrID0gdGhpcy5fZm9ybWF0VGlja1ZhbHVlO1xuICAgICAgaWYgKHRoaXMuZGF0YS50eXBlID09PSBcInRpbWVsaW5lXCIpIHtcbiAgICAgICAgdGhpcy5zZXQoXCJpc1RpbWVsaW5lXCIsIHRydWUpO1xuICAgICAgICBpZiAodGhpcy5kYXRhLmNvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5fY29sb3JGdW5jID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRDb2xvckdlbmVyYXRvcihcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jb2xvcnMuc3RhdGljQ29sb3JzLFxuICAgICAgICAgICAgdGhpcy5kYXRhLmNvbG9ycy5zdGF0aWNDb2xvckluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29sb3JGdW5jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvcHRpb25zLmVsZW1lbnRzLmNvbG9yRnVuY3Rpb24gPSB0aGlzLl9jb2xvckZ1bmM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuZGF0YXNldHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzID0geyBkaXNwbGF5OiBmYWxzZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNjYWxlcy55QXhlc1swXS5ncmlkTGluZXMuZGlzcGxheSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zLnNjYWxlcy55QXhlc1swXS5ncmlkTGluZXMgPSB7IGRpc3BsYXk6IGZhbHNlIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuJC5jaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgPSBcIjUwcHhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJC5jaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgPSBcIjE2MHB4XCI7XG4gICAgICB9XG4gICAgICBjb25zdCBjaGFydERhdGEgPSB7XG4gICAgICAgIHR5cGU6IHRoaXMuZGF0YS50eXBlLFxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEuZGF0YSxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgIH07XG4gICAgICAvLyBBc3luYyByZXNpemUgYWZ0ZXIgZG9tIHVwZGF0ZVxuICAgICAgdGhpcy5fY2hhcnQgPSBuZXcgdGhpcy5DaGFydENsYXNzKGN0eCwgY2hhcnREYXRhKTtcbiAgICAgIGlmICh0aGlzLmlzVGltZWxpbmUgIT09IHRydWUgJiYgdGhpcy5kYXRhLmxlZ2VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9kcmF3TGVnZW5kKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc2l6ZUNoYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplQ2hhcnQoKSB7XG4gICAgaWYgKCF0aGlzLl9jaGFydCkgcmV0dXJuO1xuICAgIC8vIENoYXJ0IG5vdCByZWFkeVxuICAgIGlmICh0aGlzLl9yZXNpemVUaW1lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9yZXNpemVUaW1lciA9IHNldEludGVydmFsKHRoaXMucmVzaXplQ2hhcnQuYmluZCh0aGlzKSwgMTApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcmVzaXplVGltZXIpO1xuICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5fcmVzaXplQ2hhcnQoKTtcbiAgfVxuXG4gIF9yZXNpemVDaGFydCgpIHtcbiAgICBjb25zdCBjaGFydFRhcmdldCA9IHRoaXMuJC5jaGFydFRhcmdldDtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmRhdGE7XG4gICAgY29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIGlmIChkYXRhLmRhdGFzZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1RpbWVsaW5lKSB7XG4gICAgICB0aGlzLl9jaGFydC5yZXNpemUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSZWNhbGN1bGF0ZSBjaGFydCBoZWlnaHQgZm9yIFRpbWVsaW5lIGNoYXJ0XG4gICAgY29uc3QgYXJlYVRvcCA9IHRoaXMuX2NoYXJ0LmNoYXJ0QXJlYS50b3A7XG4gICAgY29uc3QgYXJlYUJvdCA9IHRoaXMuX2NoYXJ0LmNoYXJ0QXJlYS5ib3R0b207XG4gICAgY29uc3QgaGVpZ2h0MSA9IHRoaXMuX2NoYXJ0LmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgaWYgKGFyZWFCb3QgPiAwKSB7XG4gICAgICB0aGlzLl9heGlzSGVpZ2h0ID0gaGVpZ2h0MSAtIGFyZWFCb3QgKyBhcmVhVG9wO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fYXhpc0hlaWdodCkge1xuICAgICAgY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XG4gICAgICB0aGlzLl9jaGFydC5yZXNpemUoKTtcbiAgICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F4aXNIZWlnaHQpIHtcbiAgICAgIGNvbnN0IGNudCA9IGRhdGEuZGF0YXNldHMubGVuZ3RoO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gMzAgKiBjbnQgKyB0aGlzLl9heGlzSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgaWYgKGNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCAhPT0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICAgIGNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCA9IHRhcmdldEhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NoYXJ0LnJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdldCBIU0wgZGlzdHJpYnV0ZWQgY29sb3IgbGlzdFxuICBzdGF0aWMgZ2V0Q29sb3JMaXN0KGNvdW50KSB7XG4gICAgbGV0IHByb2Nlc3NMID0gZmFsc2U7XG4gICAgaWYgKGNvdW50ID4gMTApIHtcbiAgICAgIHByb2Nlc3NMID0gdHJ1ZTtcbiAgICAgIGNvdW50ID0gTWF0aC5jZWlsKGNvdW50IC8gMik7XG4gICAgfVxuICAgIGNvbnN0IGgxID0gMzYwIC8gY291bnQ7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgbG9vcEkgPSAwOyBsb29wSSA8IGNvdW50OyBsb29wSSsrKSB7XG4gICAgICByZXN1bHRbbG9vcEldID0gQ29sb3IoKS5oc2woaDEgKiBsb29wSSwgODAsIDM4KTtcbiAgICAgIGlmIChwcm9jZXNzTCkge1xuICAgICAgICByZXN1bHRbbG9vcEkgKyBjb3VudF0gPSBDb2xvcigpLmhzbChoMSAqIGxvb3BJLCA4MCwgNjIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGdldENvbG9yR2VuZXJhdG9yKHN0YXRpY0NvbG9ycywgc3RhcnRJbmRleCkge1xuICAgIC8vIEtub3duIGNvbG9ycyBmb3Igc3RhdGljIGRhdGEsXG4gICAgLy8gc2hvdWxkIGFkZCBmb3IgdmVyeSBjb21tb24gc3RhdGUgc3RyaW5nIG1hbnVhbGx5LlxuICAgIC8vIFBhbGV0dGUgbW9kaWZpZWQgZnJvbSBodHRwOi8vZ29vZ2xlLmdpdGh1Yi5pby9wYWxldHRlLmpzLyBtcG42NSwgQXBhY2hlIDIuMFxuICAgIGNvbnN0IHBhbGV0dGUgPSBbXG4gICAgICBcImZmMDAyOVwiLFxuICAgICAgXCI2NmE2MWVcIixcbiAgICAgIFwiMzc3ZWI4XCIsXG4gICAgICBcIjk4NGVhM1wiLFxuICAgICAgXCIwMGQyZDVcIixcbiAgICAgIFwiZmY3ZjAwXCIsXG4gICAgICBcImFmOGQwMFwiLFxuICAgICAgXCI3ZjgwY2RcIixcbiAgICAgIFwiYjNlOTAwXCIsXG4gICAgICBcImM0MmU2MFwiLFxuICAgICAgXCJhNjU2MjhcIixcbiAgICAgIFwiZjc4MWJmXCIsXG4gICAgICBcIjhkZDNjN1wiLFxuICAgICAgXCJiZWJhZGFcIixcbiAgICAgIFwiZmI4MDcyXCIsXG4gICAgICBcIjgwYjFkM1wiLFxuICAgICAgXCJmZGI0NjJcIixcbiAgICAgIFwiZmNjZGU1XCIsXG4gICAgICBcImJjODBiZFwiLFxuICAgICAgXCJmZmVkNmZcIixcbiAgICAgIFwiYzRlYWZmXCIsXG4gICAgICBcImNmOGMwMFwiLFxuICAgICAgXCIxYjllNzdcIixcbiAgICAgIFwiZDk1ZjAyXCIsXG4gICAgICBcImU3Mjk4YVwiLFxuICAgICAgXCJlNmFiMDJcIixcbiAgICAgIFwiYTY3NjFkXCIsXG4gICAgICBcIjAwOTdmZlwiLFxuICAgICAgXCIwMGQwNjdcIixcbiAgICAgIFwiZjQzNjAwXCIsXG4gICAgICBcIjRiYTkzYlwiLFxuICAgICAgXCI1Nzc5YmJcIixcbiAgICAgIFwiOTI3YWNjXCIsXG4gICAgICBcIjk3ZWUzZlwiLFxuICAgICAgXCJiZjM5NDdcIixcbiAgICAgIFwiOWY1YjAwXCIsXG4gICAgICBcImY0ODc1OFwiLFxuICAgICAgXCI4Y2FlZDZcIixcbiAgICAgIFwiZjJiOTRmXCIsXG4gICAgICBcImVmZjI2ZVwiLFxuICAgICAgXCJlNDM4NzJcIixcbiAgICAgIFwiZDliMTAwXCIsXG4gICAgICBcIjlkN2EwMFwiLFxuICAgICAgXCI2OThjZmZcIixcbiAgICAgIFwiZDlkOWQ5XCIsXG4gICAgICBcIjAwZDI3ZVwiLFxuICAgICAgXCJkMDY4MDBcIixcbiAgICAgIFwiMDA5ZjgyXCIsXG4gICAgICBcImM0OTIwMFwiLFxuICAgICAgXCJjYmU4ZmZcIixcbiAgICAgIFwiZmVjZGRmXCIsXG4gICAgICBcImMyN2ViNlwiLFxuICAgICAgXCI4Y2QyY2VcIixcbiAgICAgIFwiYzRiOGQ5XCIsXG4gICAgICBcImY4ODNiMFwiLFxuICAgICAgXCJhNDkxMDBcIixcbiAgICAgIFwiZjQ4ODAwXCIsXG4gICAgICBcIjI3ZDBkZlwiLFxuICAgICAgXCJhMDRhOWJcIixcbiAgICBdO1xuICAgIGZ1bmN0aW9uIGdldENvbG9ySW5kZXgoaWR4KSB7XG4gICAgICAvLyBSZXVzZSB0aGUgY29sb3IgaWYgaW5kZXggdG9vIGxhcmdlLlxuICAgICAgcmV0dXJuIENvbG9yKFwiI1wiICsgcGFsZXR0ZVtpZHggJSBwYWxldHRlLmxlbmd0aF0pO1xuICAgIH1cbiAgICBjb25zdCBjb2xvckRpY3QgPSB7fTtcbiAgICBsZXQgY29sb3JJbmRleCA9IDA7XG4gICAgaWYgKHN0YXJ0SW5kZXggPiAwKSBjb2xvckluZGV4ID0gc3RhcnRJbmRleDtcbiAgICBpZiAoc3RhdGljQ29sb3JzKSB7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0aWNDb2xvcnMpLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3QgYzEgPSBzdGF0aWNDb2xvcnNbY107XG4gICAgICAgIGlmIChpc0Zpbml0ZShjMSkpIHtcbiAgICAgICAgICBjb2xvckRpY3RbYy50b0xvd2VyQ2FzZSgpXSA9IGdldENvbG9ySW5kZXgoYzEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbG9yRGljdFtjLnRvTG93ZXJDYXNlKCldID0gQ29sb3Ioc3RhdGljQ29sb3JzW2NdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEN1c3RvbSBjb2xvciBhc3NpZ25cbiAgICBmdW5jdGlvbiBnZXRDb2xvcihfXywgZGF0YSkge1xuICAgICAgbGV0IHJldDtcbiAgICAgIGNvbnN0IG5hbWUgPSBkYXRhWzNdO1xuICAgICAgaWYgKG5hbWUgPT09IG51bGwpIHJldHVybiBDb2xvcigpLmhzbCgwLCA0MCwgMzgpO1xuICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIENvbG9yKCkuaHNsKDEyMCwgNDAsIDM4KTtcbiAgICAgIGNvbnN0IG5hbWUxID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHJldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldCA9IGNvbG9yRGljdFtuYW1lMV07XG4gICAgICB9XG4gICAgICBpZiAocmV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0ID0gZ2V0Q29sb3JJbmRleChjb2xvckluZGV4KTtcbiAgICAgICAgY29sb3JJbmRleCsrO1xuICAgICAgICBjb2xvckRpY3RbbmFtZTFdID0gcmV0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgcmV0dXJuIGdldENvbG9yO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jaGFydC1iYXNlXCIsIEhhQ2hhcnRCYXNlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2VudGl0eS9oYS1jaGFydC1iYXNlXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBmb3JtYXREYXRlVGltZSBmcm9tIFwiLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcblxuY2xhc3MgU3RhdGVIaXN0b3J5Q2hhcnRMaW5lIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2hhcnQtYmFzZVxuICAgICAgICBpZD1cImNoYXJ0XCJcbiAgICAgICAgZGF0YT1cIltbY2hhcnREYXRhXV1cIlxuICAgICAgICBpZGVudGlmaWVyPVwiW1tpZGVudGlmaWVyXV1cIlxuICAgICAgICByZW5kZXJlZD1cInt7cmVuZGVyZWR9fVwiXG4gICAgICA+PC9oYS1jaGFydC1iYXNlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0RGF0YTogT2JqZWN0LFxuICAgICAgZGF0YTogT2JqZWN0LFxuICAgICAgbmFtZXM6IE9iamVjdCxcbiAgICAgIHVuaXQ6IFN0cmluZyxcbiAgICAgIGlkZW50aWZpZXI6IFN0cmluZyxcblxuICAgICAgaXNTaW5nbGVEZXZpY2U6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZW5kVGltZTogT2JqZWN0LFxuICAgICAgcmVuZGVyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBvYnNlcnZlcjogXCJfb25SZW5kZXJlZENoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJkYXRhQ2hhbmdlZChkYXRhLCBlbmRUaW1lLCBpc1NpbmdsZURldmljZSlcIl07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBkYXRhQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgX29uUmVuZGVyZWRDaGFuZ2VkKHJlbmRlcmVkKSB7XG4gICAgaWYgKHJlbmRlcmVkKSB0aGlzLmFuaW1hdGVIZWlnaHQoKTtcbiAgfVxuXG4gIGFuaW1hdGVIZWlnaHQoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IHRoaXMuJC5jaGFydC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBkcmF3Q2hhcnQoKSB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMudW5pdDtcbiAgICBjb25zdCBkZXZpY2VTdGF0ZXMgPSB0aGlzLmRhdGE7XG4gICAgY29uc3QgZGF0YXNldHMgPSBbXTtcbiAgICBsZXQgZW5kVGltZTtcblxuICAgIGlmICghdGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkZXZpY2VTdGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2FmZVBhcnNlRmxvYXQodmFsdWUpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgcmV0dXJuIGlzRmluaXRlKHBhcnNlZCkgPyBwYXJzZWQgOiBudWxsO1xuICAgIH1cblxuICAgIGVuZFRpbWUgPVxuICAgICAgdGhpcy5lbmRUaW1lIHx8XG4gICAgICAvLyBHZXQgdGhlIGhpZ2hlc3QgZGF0ZSBmcm9tIHRoZSBsYXN0IGRhdGUgb2YgZWFjaCBkZXZpY2VcbiAgICAgIG5ldyBEYXRlKFxuICAgICAgICBNYXRoLm1heC5hcHBseShcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGRldmljZVN0YXRlcy5tYXAoXG4gICAgICAgICAgICAoZGV2U3RzKSA9PlxuICAgICAgICAgICAgICBuZXcgRGF0ZShkZXZTdHMuc3RhdGVzW2RldlN0cy5zdGF0ZXMubGVuZ3RoIC0gMV0ubGFzdF9jaGFuZ2VkKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICBpZiAoZW5kVGltZSA+IG5ldyBEYXRlKCkpIHtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWVzID0gdGhpcy5uYW1lcyB8fCB7fTtcbiAgICBkZXZpY2VTdGF0ZXMuZm9yRWFjaCgoc3RhdGVzKSA9PiB7XG4gICAgICBjb25zdCBkb21haW4gPSBzdGF0ZXMuZG9tYWluO1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVzW3N0YXRlcy5lbnRpdHlfaWRdIHx8IHN0YXRlcy5uYW1lO1xuICAgICAgLy8gYXJyYXkgY29udGFpbmluZyBbdmFsdWUxLCB2YWx1ZTIsIGV0Y11cbiAgICAgIGxldCBwcmV2VmFsdWVzO1xuICAgICAgY29uc3QgZGF0YSA9IFtdO1xuXG4gICAgICBmdW5jdGlvbiBwdXNoRGF0YSh0aW1lc3RhbXAsIGRhdGF2YWx1ZXMpIHtcbiAgICAgICAgaWYgKCFkYXRhdmFsdWVzKSByZXR1cm47XG4gICAgICAgIGlmICh0aW1lc3RhbXAgPiBlbmRUaW1lKSB7XG4gICAgICAgICAgLy8gRHJvcCBkYXRhcG9pbnRzIHRoYXQgYXJlIGFmdGVyIHRoZSByZXF1ZXN0ZWQgZW5kVGltZS4gVGhpcyBjb3VsZCBoYXBwZW4gaWZcbiAgICAgICAgICAvLyBlbmRUaW1lIGlzIFwibm93XCIgYW5kIGNsaWVudCB0aW1lIGlzIG5vdCBpbiBzeW5jIHdpdGggc2VydmVyIHRpbWUuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCwgaSkgPT4ge1xuICAgICAgICAgIGQuZGF0YS5wdXNoKHsgeDogdGltZXN0YW1wLCB5OiBkYXRhdmFsdWVzW2ldIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJldlZhbHVlcyA9IGRhdGF2YWx1ZXM7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZENvbHVtbihuYW1lWSwgc3RlcCwgZmlsbCkge1xuICAgICAgICBsZXQgZGF0YUZpbGwgPSBmYWxzZTtcbiAgICAgICAgbGV0IGRhdGFTdGVwID0gZmFsc2U7XG4gICAgICAgIGlmIChmaWxsKSB7XG4gICAgICAgICAgZGF0YUZpbGwgPSBcIm9yaWdpblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgZGF0YVN0ZXAgPSBcImJlZm9yZVwiO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IG5hbWVZLFxuICAgICAgICAgIGZpbGw6IGRhdGFGaWxsLFxuICAgICAgICAgIHN0ZXBwZWRMaW5lOiBkYXRhU3RlcCxcbiAgICAgICAgICBwb2ludFJhZGl1czogMCxcbiAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICB1bml0VGV4dDogdW5pdCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgZG9tYWluID09PSBcInRoZXJtb3N0YXRcIiB8fFxuICAgICAgICBkb21haW4gPT09IFwiY2xpbWF0ZVwiIHx8XG4gICAgICAgIGRvbWFpbiA9PT0gXCJ3YXRlcl9oZWF0ZXJcIlxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGhhc0h2YWNBY3Rpb24gPSBzdGF0ZXMuc3RhdGVzLnNvbWUoXG4gICAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5hdHRyaWJ1dGVzICYmIHN0YXRlLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb25cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpc0hlYXRpbmcgPVxuICAgICAgICAgIGRvbWFpbiA9PT0gXCJjbGltYXRlXCIgJiYgaGFzSHZhY0FjdGlvblxuICAgICAgICAgICAgPyAoc3RhdGUpID0+IHN0YXRlLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb24gPT09IFwiaGVhdGluZ1wiXG4gICAgICAgICAgICA6IChzdGF0ZSkgPT4gc3RhdGUuc3RhdGUgPT09IFwiaGVhdFwiO1xuICAgICAgICBjb25zdCBpc0Nvb2xpbmcgPVxuICAgICAgICAgIGRvbWFpbiA9PT0gXCJjbGltYXRlXCIgJiYgaGFzSHZhY0FjdGlvblxuICAgICAgICAgICAgPyAoc3RhdGUpID0+IHN0YXRlLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb24gPT09IFwiY29vbGluZ1wiXG4gICAgICAgICAgICA6IChzdGF0ZSkgPT4gc3RhdGUuc3RhdGUgPT09IFwiY29vbFwiO1xuXG4gICAgICAgIGNvbnN0IGhhc0hlYXQgPSBzdGF0ZXMuc3RhdGVzLnNvbWUoaXNIZWF0aW5nKTtcbiAgICAgICAgY29uc3QgaGFzQ29vbCA9IHN0YXRlcy5zdGF0ZXMuc29tZShpc0Nvb2xpbmcpO1xuICAgICAgICAvLyBXZSBkaWZmZXJlbnRpYXRlIGJldHdlZW4gdGhlcm1vc3RhdHMgdGhhdCBoYXZlIGEgdGFyZ2V0IHRlbXBlcmF0dXJlXG4gICAgICAgIC8vIHJhbmdlIHZlcnN1cyBvbmVzIHRoYXQgaGF2ZSBqdXN0IGEgdGFyZ2V0IHRlbXBlcmF0dXJlXG5cbiAgICAgICAgLy8gVXNpbmcgc3RlcCBjaGFydCBieSBzdGVwLWJlZm9yZSBzbyBtYW51YWxseSBpbnRlcnBvbGF0aW9uIG5vdCBuZWVkZWQuXG4gICAgICAgIGNvbnN0IGhhc1RhcmdldFJhbmdlID0gc3RhdGVzLnN0YXRlcy5zb21lKFxuICAgICAgICAgIChzdGF0ZSkgPT5cbiAgICAgICAgICAgIHN0YXRlLmF0dHJpYnV0ZXMgJiZcbiAgICAgICAgICAgIHN0YXRlLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaCAhPT1cbiAgICAgICAgICAgICAgc3RhdGUuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3dcbiAgICAgICAgKTtcblxuICAgICAgICBhZGRDb2x1bW4obmFtZSArIFwiIGN1cnJlbnQgdGVtcGVyYXR1cmVcIiwgdHJ1ZSk7XG4gICAgICAgIGlmIChoYXNIZWF0KSB7XG4gICAgICAgICAgYWRkQ29sdW1uKG5hbWUgKyBcIiBoZWF0aW5nXCIsIHRydWUsIHRydWUpO1xuICAgICAgICAgIC8vIFRoZSBcImhlYXRpbmdcIiBzZXJpZXMgdXNlcyBzdGVwcGVkQXJlYSB0byBzaGFkZSB0aGUgYXJlYSBiZWxvdyB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIHRlbXBlcmF0dXJlIHdoZW4gdGhlIHRoZXJtb3N0YXQgaXMgY2FsbGluZyBmb3IgaGVhdC5cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQ29vbCkge1xuICAgICAgICAgIGFkZENvbHVtbihuYW1lICsgXCIgY29vbGluZ1wiLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAvLyBUaGUgXCJjb29saW5nXCIgc2VyaWVzIHVzZXMgc3RlcHBlZEFyZWEgdG8gc2hhZGUgdGhlIGFyZWEgYmVsb3cgdGhlIGN1cnJlbnRcbiAgICAgICAgICAvLyB0ZW1wZXJhdHVyZSB3aGVuIHRoZSB0aGVybW9zdGF0IGlzIGNhbGxpbmcgZm9yIGhlYXQuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzVGFyZ2V0UmFuZ2UpIHtcbiAgICAgICAgICBhZGRDb2x1bW4obmFtZSArIFwiIHRhcmdldCB0ZW1wZXJhdHVyZSBoaWdoXCIsIHRydWUpO1xuICAgICAgICAgIGFkZENvbHVtbihuYW1lICsgXCIgdGFyZ2V0IHRlbXBlcmF0dXJlIGxvd1wiLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDb2x1bW4obmFtZSArIFwiIHRhcmdldCB0ZW1wZXJhdHVyZVwiLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlcy5zdGF0ZXMuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAgICAgICBpZiAoIXN0YXRlLmF0dHJpYnV0ZXMpIHJldHVybjtcbiAgICAgICAgICBjb25zdCBjdXJUZW1wID0gc2FmZVBhcnNlRmxvYXQoc3RhdGUuYXR0cmlidXRlcy5jdXJyZW50X3RlbXBlcmF0dXJlKTtcbiAgICAgICAgICBjb25zdCBzZXJpZXMgPSBbY3VyVGVtcF07XG4gICAgICAgICAgaWYgKGhhc0hlYXQpIHtcbiAgICAgICAgICAgIHNlcmllcy5wdXNoKGlzSGVhdGluZyhzdGF0ZSkgPyBjdXJUZW1wIDogbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYXNDb29sKSB7XG4gICAgICAgICAgICBzZXJpZXMucHVzaChpc0Nvb2xpbmcoc3RhdGUpID8gY3VyVGVtcCA6IG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFzVGFyZ2V0UmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEhpZ2ggPSBzYWZlUGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgc3RhdGUuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0TG93ID0gc2FmZVBhcnNlRmxvYXQoc3RhdGUuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3cpO1xuICAgICAgICAgICAgc2VyaWVzLnB1c2godGFyZ2V0SGlnaCwgdGFyZ2V0TG93KTtcbiAgICAgICAgICAgIHB1c2hEYXRhKG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCksIHNlcmllcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHNhZmVQYXJzZUZsb2F0KHN0YXRlLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUpO1xuICAgICAgICAgICAgc2VyaWVzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIHB1c2hEYXRhKG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCksIHNlcmllcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9ubHkgZGlzYWJsZSBpbnRlcnBvbGF0aW9uIGZvciBzZW5zb3JzXG4gICAgICAgIGNvbnN0IGlzU3RlcCA9IGRvbWFpbiA9PT0gXCJzZW5zb3JcIjtcbiAgICAgICAgYWRkQ29sdW1uKG5hbWUsIGlzU3RlcCk7XG5cbiAgICAgICAgbGV0IGxhc3RWYWx1ZSA9IG51bGw7XG4gICAgICAgIGxldCBsYXN0RGF0ZSA9IG51bGw7XG4gICAgICAgIGxldCBsYXN0TnVsbERhdGUgPSBudWxsO1xuXG4gICAgICAgIC8vIFByb2Nlc3MgY2hhcnQgZGF0YS5cbiAgICAgICAgLy8gV2hlbiBzdGF0ZSBpcyBgdW5rbm93bmAsIGNhbGN1bGF0ZSB0aGUgdmFsdWUgYW5kIGJyZWFrIHRoZSBsaW5lLlxuICAgICAgICBzdGF0ZXMuc3RhdGVzLmZvckVhY2goKHN0YXRlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBzYWZlUGFyc2VGbG9hdChzdGF0ZS5zdGF0ZSk7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIGxhc3ROdWxsRGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROdWxsRGF0ZVRpbWUgPSBsYXN0TnVsbERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgbGFzdERhdGVUaW1lID0gbGFzdERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgdG1wVmFsdWUgPVxuICAgICAgICAgICAgICAodmFsdWUgLSBsYXN0VmFsdWUpICpcbiAgICAgICAgICAgICAgICAoKGxhc3ROdWxsRGF0ZVRpbWUgLSBsYXN0RGF0ZVRpbWUpIC9cbiAgICAgICAgICAgICAgICAgIChkYXRlVGltZSAtIGxhc3REYXRlVGltZSkpICtcbiAgICAgICAgICAgICAgbGFzdFZhbHVlO1xuICAgICAgICAgICAgcHVzaERhdGEobGFzdE51bGxEYXRlLCBbdG1wVmFsdWVdKTtcbiAgICAgICAgICAgIHB1c2hEYXRhKG5ldyBEYXRlKGxhc3ROdWxsRGF0ZVRpbWUgKyAxKSwgW251bGxdKTtcbiAgICAgICAgICAgIHB1c2hEYXRhKGRhdGUsIFt2YWx1ZV0pO1xuICAgICAgICAgICAgbGFzdERhdGUgPSBkYXRlO1xuICAgICAgICAgICAgbGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBsYXN0TnVsbERhdGUgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IG51bGwgJiYgbGFzdE51bGxEYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICBwdXNoRGF0YShkYXRlLCBbdmFsdWVdKTtcbiAgICAgICAgICAgIGxhc3REYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICB2YWx1ZSA9PT0gbnVsbCAmJlxuICAgICAgICAgICAgbGFzdE51bGxEYXRlID09PSBudWxsICYmXG4gICAgICAgICAgICBsYXN0VmFsdWUgIT09IG51bGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGxhc3ROdWxsRGF0ZSA9IGRhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGFuIGVudHJ5IGZvciBmaW5hbCB2YWx1ZXNcbiAgICAgIHB1c2hEYXRhKGVuZFRpbWUsIHByZXZWYWx1ZXMsIGZhbHNlKTtcblxuICAgICAgLy8gQ29uY2F0IHR3byBhcnJheXNcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGRhdGFzZXRzLCBkYXRhKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvcm1hdFRvb2x0aXBUaXRsZSA9IChpdGVtcywgZGF0YSkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zWzBdO1xuICAgICAgY29uc3QgZGF0ZSA9IGRhdGEuZGF0YXNldHNbaXRlbS5kYXRhc2V0SW5kZXhdLmRhdGFbaXRlbS5pbmRleF0ueDtcblxuICAgICAgcmV0dXJuIGZvcm1hdERhdGVUaW1lKGRhdGUsIHRoaXMuaGFzcy5sYW5ndWFnZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYXJ0T3B0aW9ucyA9IHtcbiAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgdW5pdDogdW5pdCxcbiAgICAgIGxlZ2VuZDogIXRoaXMuaXNTaW5nbGVEZXZpY2UsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidGltZVwiLFxuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIG1ham9yOiB7XG4gICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA3LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIG1vZGU6IFwibmVhcmVhY2hcIixcbiAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiBmb3JtYXRUb29sdGlwVGl0bGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBtb2RlOiBcIm5lYXJlYWNoXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgIHRlbnNpb246IDAuMSxcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEuNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICBoaXRSYWRpdXM6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgIGZpbGxlcjoge1xuICAgICAgICAgICAgcHJvcGFnYXRlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IFtdLFxuICAgICAgICBkYXRhc2V0czogZGF0YXNldHMsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5jaGFydERhdGEgPSBjaGFydE9wdGlvbnM7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWhpc3RvcnktY2hhcnQtbGluZVwiLCBTdGF0ZUhpc3RvcnlDaGFydExpbmUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IFwiLi9lbnRpdHkvaGEtY2hhcnQtYmFzZVwiO1xuXG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmNsYXNzIFN0YXRlSGlzdG9yeUNoYXJ0VGltZWxpbmUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbcmVuZGVyZWRdKSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNoYXJ0LWJhc2Uge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNoYXJ0LWJhc2VcbiAgICAgICAgZGF0YT1cIltbY2hhcnREYXRhXV1cIlxuICAgICAgICByZW5kZXJlZD1cInt7cmVuZGVyZWR9fVwiXG4gICAgICAgIHJ0bD1cInt7cnRsfX1cIlxuICAgICAgPjwvaGEtY2hhcnQtYmFzZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBjaGFydERhdGE6IE9iamVjdCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRhQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIG5hbWVzOiBPYmplY3QsXG4gICAgICBub1NpbmdsZTogQm9vbGVhbixcbiAgICAgIGVuZFRpbWU6IERhdGUsXG4gICAgICByZW5kZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBydGw6IHtcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTChoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcImRhdGFDaGFuZ2VkKGRhdGEsIGVuZFRpbWUsIGxvY2FsaXplLCBsYW5ndWFnZSlcIl07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBkYXRhQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgZHJhd0NoYXJ0KCkge1xuICAgIGNvbnN0IHN0YXRpY0NvbG9ycyA9IHtcbiAgICAgIG9uOiAxLFxuICAgICAgb2ZmOiAwLFxuICAgICAgdW5hdmFpbGFibGU6IFwiI2EwYTBhMFwiLFxuICAgICAgdW5rbm93bjogXCIjNjA2MDYwXCIsXG4gICAgICBpZGxlOiAyLFxuICAgIH07XG4gICAgbGV0IHN0YXRlSGlzdG9yeSA9IHRoaXMuZGF0YTtcblxuICAgIGlmICghdGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3RhdGVIaXN0b3J5KSB7XG4gICAgICBzdGF0ZUhpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShcbiAgICAgIHN0YXRlSGlzdG9yeS5yZWR1Y2UoXG4gICAgICAgIChtaW5UaW1lLCBzdGF0ZUluZm8pID0+XG4gICAgICAgICAgTWF0aC5taW4obWluVGltZSwgbmV3IERhdGUoc3RhdGVJbmZvLmRhdGFbMF0ubGFzdF9jaGFuZ2VkKSksXG4gICAgICAgIG5ldyBEYXRlKClcbiAgICAgIClcbiAgICApO1xuXG4gICAgLy8gZW5kIHRpbWUgaXMgTWF0aC5tYXgoc3RhcnRUaW1lLCBsYXN0X2V2ZW50KVxuICAgIGxldCBlbmRUaW1lID1cbiAgICAgIHRoaXMuZW5kVGltZSB8fFxuICAgICAgbmV3IERhdGUoXG4gICAgICAgIHN0YXRlSGlzdG9yeS5yZWR1Y2UoXG4gICAgICAgICAgKG1heFRpbWUsIHN0YXRlSW5mbykgPT5cbiAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICBtYXhUaW1lLFxuICAgICAgICAgICAgICBuZXcgRGF0ZShzdGF0ZUluZm8uZGF0YVtzdGF0ZUluZm8uZGF0YS5sZW5ndGggLSAxXS5sYXN0X2NoYW5nZWQpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHN0YXJ0VGltZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgaWYgKGVuZFRpbWUgPiBuZXcgRGF0ZSgpKSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcbiAgICBjb25zdCBkYXRhc2V0cyA9IFtdO1xuICAgIC8vIHN0YXRlSGlzdG9yeSBpcyBhIGxpc3Qgb2YgbGlzdHMgb2Ygc29ydGVkIHN0YXRlIG9iamVjdHNcbiAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXMgfHwge307XG4gICAgc3RhdGVIaXN0b3J5LmZvckVhY2goKHN0YXRlSW5mbykgPT4ge1xuICAgICAgbGV0IG5ld0xhc3RDaGFuZ2VkO1xuICAgICAgbGV0IHByZXZTdGF0ZSA9IG51bGw7XG4gICAgICBsZXQgbG9jU3RhdGUgPSBudWxsO1xuICAgICAgbGV0IHByZXZMYXN0Q2hhbmdlZCA9IHN0YXJ0VGltZTtcbiAgICAgIGNvbnN0IGVudGl0eURpc3BsYXkgPSBuYW1lc1tzdGF0ZUluZm8uZW50aXR5X2lkXSB8fCBzdGF0ZUluZm8ubmFtZTtcblxuICAgICAgY29uc3QgZGF0YVJvdyA9IFtdO1xuICAgICAgc3RhdGVJbmZvLmRhdGEuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gc3RhdGUuc3RhdGU7XG4gICAgICAgIGNvbnN0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG4gICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gdW5kZWZpbmVkIHx8IG5ld1N0YXRlID09PSBcIlwiKSB7XG4gICAgICAgICAgbmV3U3RhdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lU3RhbXAgPiBlbmRUaW1lKSB7XG4gICAgICAgICAgLy8gRHJvcCBkYXRhcG9pbnRzIHRoYXQgYXJlIGFmdGVyIHRoZSByZXF1ZXN0ZWQgZW5kVGltZS4gVGhpcyBjb3VsZCBoYXBwZW4gaWZcbiAgICAgICAgICAvLyBlbmRUaW1lIGlzICdub3cnIGFuZCBjbGllbnQgdGltZSBpcyBub3QgaW4gc3luYyB3aXRoIHNlcnZlciB0aW1lLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldlN0YXRlICE9PSBudWxsICYmIG5ld1N0YXRlICE9PSBwcmV2U3RhdGUpIHtcbiAgICAgICAgICBuZXdMYXN0Q2hhbmdlZCA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG5cbiAgICAgICAgICBkYXRhUm93LnB1c2goW3ByZXZMYXN0Q2hhbmdlZCwgbmV3TGFzdENoYW5nZWQsIGxvY1N0YXRlLCBwcmV2U3RhdGVdKTtcblxuICAgICAgICAgIHByZXZTdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICAgIGxvY1N0YXRlID0gc3RhdGUuc3RhdGVfbG9jYWxpemU7XG4gICAgICAgICAgcHJldkxhc3RDaGFuZ2VkID0gbmV3TGFzdENoYW5nZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAocHJldlN0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgcHJldlN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgICAgbG9jU3RhdGUgPSBzdGF0ZS5zdGF0ZV9sb2NhbGl6ZTtcbiAgICAgICAgICBwcmV2TGFzdENoYW5nZWQgPSBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHByZXZTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhUm93LnB1c2goW3ByZXZMYXN0Q2hhbmdlZCwgZW5kVGltZSwgbG9jU3RhdGUsIHByZXZTdGF0ZV0pO1xuICAgICAgfVxuICAgICAgZGF0YXNldHMucHVzaCh7IGRhdGE6IGRhdGFSb3cgfSk7XG4gICAgICBsYWJlbHMucHVzaChlbnRpdHlEaXNwbGF5KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvcm1hdFRvb2x0aXBMYWJlbCA9IChpdGVtLCBkYXRhKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBkYXRhLmRhdGFzZXRzW2l0ZW0uZGF0YXNldEluZGV4XS5kYXRhW2l0ZW0uaW5kZXhdO1xuXG4gICAgICBjb25zdCBzdGFydCA9IGZvcm1hdERhdGVUaW1lKHZhbHVlc1swXSwgdGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgICAgIGNvbnN0IGVuZCA9IGZvcm1hdERhdGVUaW1lKHZhbHVlc1sxXSwgdGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgICAgIGNvbnN0IHN0YXRlID0gdmFsdWVzWzJdO1xuXG4gICAgICByZXR1cm4gW3N0YXRlLCBzdGFydCwgZW5kXTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhcnRPcHRpb25zID0ge1xuICAgICAgdHlwZTogXCJ0aW1lbGluZVwiLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgbGFiZWw6IGZvcm1hdFRvb2x0aXBMYWJlbCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIG1ham9yOiB7XG4gICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYWZ0ZXJTZXREaW1lbnNpb25zOiAoeWF4ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHlheGUubWF4V2lkdGggPSB5YXhlLmNoYXJ0LndpZHRoICogMC4xODtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuX2NvbXB1dGVSVEwgPyBcInJpZ2h0XCIgOiBcImxlZnRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICBkYXRhc2V0czogZGF0YXNldHMsXG4gICAgICB9LFxuICAgICAgY29sb3JzOiB7XG4gICAgICAgIHN0YXRpY0NvbG9yczogc3RhdGljQ29sb3JzLFxuICAgICAgICBzdGF0aWNDb2xvckluZGV4OiAzLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMuY2hhcnREYXRhID0gY2hhcnRPcHRpb25zO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gIFwic3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZVwiLFxuICBTdGF0ZUhpc3RvcnlDaGFydFRpbWVsaW5lXG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL3N0YXRlLWhpc3RvcnktY2hhcnQtbGluZVwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgU3RhdGVIaXN0b3J5Q2hhcnRzIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgLyogaGVpZ2h0IG9mIHNpbmdsZSB0aW1lbGluZSBjaGFydCA9IDU4cHggKi9cbiAgICAgICAgICBtaW4taGVpZ2h0OiA1OHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbmZvIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgIGNsYXNzPVwiaW5mb1wiXG4gICAgICAgIGlmPVwiW1tfY29tcHV0ZUlzTG9hZGluZyhpc0xvYWRpbmdEYXRhKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLmhpc3RvcnlfY2hhcnRzLmxvYWRpbmdfaGlzdG9yeScpXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGVcbiAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICBjbGFzcz1cImluZm9cIlxuICAgICAgICBpZj1cIltbX2NvbXB1dGVJc0VtcHR5KGlzTG9hZGluZ0RhdGEsIGhpc3RvcnlEYXRhKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLmhpc3RvcnlfY2hhcnRzLm5vX2hpc3RvcnlfZm91bmQnKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hpc3RvcnlEYXRhLnRpbWVsaW5lLmxlbmd0aF1dXCI+XG4gICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBkYXRhPVwiW1toaXN0b3J5RGF0YS50aW1lbGluZV1dXCJcbiAgICAgICAgICBlbmQtdGltZT1cIltbX2NvbXB1dGVFbmRUaW1lKGVuZFRpbWUsIHVwVG9Ob3csIGhpc3RvcnlEYXRhKV1dXCJcbiAgICAgICAgICBuby1zaW5nbGU9XCJbW25vU2luZ2xlXV1cIlxuICAgICAgICAgIG5hbWVzPVwiW1tuYW1lc11dXCJcbiAgICAgICAgPjwvc3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZT5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbaGlzdG9yeURhdGEubGluZV1dXCI+XG4gICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmVcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHVuaXQ9XCJbW2l0ZW0udW5pdF1dXCJcbiAgICAgICAgICBkYXRhPVwiW1tpdGVtLmRhdGFdXVwiXG4gICAgICAgICAgaWRlbnRpZmllcj1cIltbaXRlbS5pZGVudGlmaWVyXV1cIlxuICAgICAgICAgIGlzLXNpbmdsZS1kZXZpY2U9XCJbW19jb21wdXRlSXNTaW5nbGVMaW5lQ2hhcnQoaXRlbS5kYXRhLCBub1NpbmdsZSldXVwiXG4gICAgICAgICAgZW5kLXRpbWU9XCJbW19jb21wdXRlRW5kVGltZShlbmRUaW1lLCB1cFRvTm93LCBoaXN0b3J5RGF0YSldXVwiXG4gICAgICAgICAgbmFtZXM9XCJbW25hbWVzXV1cIlxuICAgICAgICA+PC9zdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGhpc3RvcnlEYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuICAgICAgbmFtZXM6IE9iamVjdCxcblxuICAgICAgaXNMb2FkaW5nRGF0YTogQm9vbGVhbixcblxuICAgICAgZW5kVGltZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICB1cFRvTm93OiBCb29sZWFuLFxuICAgICAgbm9TaW5nbGU6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlSXNTaW5nbGVMaW5lQ2hhcnQoZGF0YSwgbm9TaW5nbGUpIHtcbiAgICByZXR1cm4gIW5vU2luZ2xlICYmIGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDE7XG4gIH1cblxuICBfY29tcHV0ZUlzRW1wdHkoaXNMb2FkaW5nRGF0YSwgaGlzdG9yeURhdGEpIHtcbiAgICBjb25zdCBoaXN0b3J5RGF0YUVtcHR5ID1cbiAgICAgICFoaXN0b3J5RGF0YSB8fFxuICAgICAgIWhpc3RvcnlEYXRhLnRpbWVsaW5lIHx8XG4gICAgICAhaGlzdG9yeURhdGEubGluZSB8fFxuICAgICAgKGhpc3RvcnlEYXRhLnRpbWVsaW5lLmxlbmd0aCA9PT0gMCAmJiBoaXN0b3J5RGF0YS5saW5lLmxlbmd0aCA9PT0gMCk7XG4gICAgcmV0dXJuICFpc0xvYWRpbmdEYXRhICYmIGhpc3RvcnlEYXRhRW1wdHk7XG4gIH1cblxuICBfY29tcHV0ZUlzTG9hZGluZyhpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gaXNMb2FkaW5nICYmICF0aGlzLmhpc3RvcnlEYXRhO1xuICB9XG5cbiAgX2NvbXB1dGVFbmRUaW1lKGVuZFRpbWUsIHVwVG9Ob3cpIHtcbiAgICAvLyBXZSBkb24ndCByZWFsbHkgY2FyZSBhYm91dCB0aGUgdmFsdWUgb2YgaGlzdG9yeURhdGEsIGJ1dCBpZiBpdCBjaGFuZ2Ugd2Ugd2FudCB0byB1cGRhdGVcbiAgICAvLyBlbmRUaW1lLlxuICAgIHJldHVybiB1cFRvTm93ID8gbmV3IERhdGUoKSA6IGVuZFRpbWU7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWhpc3RvcnktY2hhcnRzXCIsIFN0YXRlSGlzdG9yeUNoYXJ0cyk7XG4iLCJpbXBvcnQge1xuICBjb21wdXRlSGlzdG9yeSxcbiAgZmV0Y2hSZWNlbnQsXG4gIEhpc3RvcnlSZXN1bHQsXG4gIFRpbWVsaW5lRW50aXR5LFxuICBMaW5lQ2hhcnRVbml0LFxufSBmcm9tIFwiLi9oaXN0b3J5XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuaW50ZXJmYWNlIENhY2hlQ29uZmlnIHtcbiAgcmVmcmVzaDogbnVtYmVyO1xuICBjYWNoZUtleTogc3RyaW5nO1xuICBob3Vyc1RvU2hvdzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2FjaGVkUmVzdWx0cyB7XG4gIHByb206IFByb21pc2U8SGlzdG9yeVJlc3VsdD47XG4gIHN0YXJ0VGltZTogRGF0ZTtcbiAgZW5kVGltZTogRGF0ZTtcbiAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgZGF0YTogSGlzdG9yeVJlc3VsdDtcbn1cblxuLy8gVGhpcyBpcyBhIGRpZmZlcmVudCBpbnRlcmZhY2UsIGEgZGlmZmVyZW50IGNhY2hlIDooXG5pbnRlcmZhY2UgUmVjZW50Q2FjaGVSZXN1bHRzIHtcbiAgY3JlYXRlZDogbnVtYmVyO1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICBkYXRhOiBQcm9taXNlPEhpc3RvcnlSZXN1bHQ+O1xufVxuXG5jb25zdCBSRUNFTlRfVEhSRVNIT0xEID0gNjAwMDA7IC8vIDEgbWludXRlXG5jb25zdCBSRUNFTlRfQ0FDSEU6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBSZWNlbnRDYWNoZVJlc3VsdHMgfSA9IHt9O1xuY29uc3Qgc3RhdGVIaXN0b3J5Q2FjaGU6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBDYWNoZWRSZXN1bHRzIH0gPSB7fTtcblxuLy8gQ2FjaGVkIHR5cGUgMSB1bmN0aW9uLiBXaXRob3V0IGNhY2hlIGNvbmZpZy5cbmV4cG9ydCBjb25zdCBnZXRSZWNlbnQgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHN0YXJ0VGltZTogRGF0ZSxcbiAgZW5kVGltZTogRGF0ZSxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IGNhY2hlS2V5ID0gZW50aXR5SWQ7XG4gIGNvbnN0IGNhY2hlID0gUkVDRU5UX0NBQ0hFW2NhY2hlS2V5XTtcblxuICBpZiAoXG4gICAgY2FjaGUgJiZcbiAgICBEYXRlLm5vdygpIC0gY2FjaGUuY3JlYXRlZCA8IFJFQ0VOVF9USFJFU0hPTEQgJiZcbiAgICBjYWNoZS5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2VcbiAgKSB7XG4gICAgcmV0dXJuIGNhY2hlLmRhdGE7XG4gIH1cblxuICBjb25zdCBwcm9tID0gZmV0Y2hSZWNlbnQoaGFzcywgZW50aXR5SWQsIHN0YXJ0VGltZSwgZW5kVGltZSkudGhlbihcbiAgICAoc3RhdGVIaXN0b3J5KSA9PiBjb21wdXRlSGlzdG9yeShoYXNzLCBzdGF0ZUhpc3RvcnksIGxvY2FsaXplLCBsYW5ndWFnZSksXG4gICAgKGVycikgPT4ge1xuICAgICAgZGVsZXRlIFJFQ0VOVF9DQUNIRVtlbnRpdHlJZF07XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICApO1xuXG4gIFJFQ0VOVF9DQUNIRVtjYWNoZUtleV0gPSB7XG4gICAgY3JlYXRlZDogRGF0ZS5ub3coKSxcbiAgICBsYW5ndWFnZSxcbiAgICBkYXRhOiBwcm9tLFxuICB9O1xuICByZXR1cm4gcHJvbTtcbn07XG5cbi8vIENhY2hlIHR5cGUgMiBmdW5jdGlvbmFsaXR5XG5mdW5jdGlvbiBnZXRFbXB0eUNhY2hlKFxuICBsYW5ndWFnZTogc3RyaW5nLFxuICBzdGFydFRpbWU6IERhdGUsXG4gIGVuZFRpbWU6IERhdGVcbik6IENhY2hlZFJlc3VsdHMge1xuICByZXR1cm4ge1xuICAgIHByb206IFByb21pc2UucmVzb2x2ZSh7IGxpbmU6IFtdLCB0aW1lbGluZTogW10gfSksXG4gICAgbGFuZ3VhZ2UsXG4gICAgc3RhcnRUaW1lLFxuICAgIGVuZFRpbWUsXG4gICAgZGF0YTogeyBsaW5lOiBbXSwgdGltZWxpbmU6IFtdIH0sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZWNlbnRXaXRoQ2FjaGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIGNhY2hlQ29uZmlnOiBDYWNoZUNvbmZpZyxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IGNhY2hlS2V5ID0gY2FjaGVDb25maWcuY2FjaGVLZXk7XG4gIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShlbmRUaW1lKTtcbiAgc3RhcnRUaW1lLnNldEhvdXJzKHN0YXJ0VGltZS5nZXRIb3VycygpIC0gY2FjaGVDb25maWcuaG91cnNUb1Nob3cpO1xuICBsZXQgdG9GZXRjaFN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgbGV0IGFwcGVuZGluZ1RvQ2FjaGUgPSBmYWxzZTtcblxuICBsZXQgY2FjaGUgPSBzdGF0ZUhpc3RvcnlDYWNoZVtjYWNoZUtleV07XG4gIGlmIChcbiAgICBjYWNoZSAmJlxuICAgIHRvRmV0Y2hTdGFydFRpbWUgPj0gY2FjaGUuc3RhcnRUaW1lICYmXG4gICAgdG9GZXRjaFN0YXJ0VGltZSA8PSBjYWNoZS5lbmRUaW1lICYmXG4gICAgY2FjaGUubGFuZ3VhZ2UgPT09IGxhbmd1YWdlXG4gICkge1xuICAgIHRvRmV0Y2hTdGFydFRpbWUgPSBjYWNoZS5lbmRUaW1lO1xuICAgIGFwcGVuZGluZ1RvQ2FjaGUgPSB0cnVlO1xuICAgIC8vIFRoaXMgcHJldHR5IG11Y2ggbmV2ZXIgaGFwcGVucyBhcyBlbmRUaW1lIGlzIHVzdWFsbHkgc2V0IHRvIG5vd1xuICAgIGlmIChlbmRUaW1lIDw9IGNhY2hlLmVuZFRpbWUpIHtcbiAgICAgIHJldHVybiBjYWNoZS5wcm9tO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjYWNoZSA9IHN0YXRlSGlzdG9yeUNhY2hlW2NhY2hlS2V5XSA9IGdldEVtcHR5Q2FjaGUoXG4gICAgICBsYW5ndWFnZSxcbiAgICAgIHN0YXJ0VGltZSxcbiAgICAgIGVuZFRpbWVcbiAgICApO1xuICB9XG5cbiAgY29uc3QgY3VyQ2FjaGVQcm9tID0gY2FjaGUucHJvbTtcblxuICBjb25zdCBnZW5Qcm9tID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBmZXRjaGVkSGlzdG9yeTogSGFzc0VudGl0eVtdW107XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgY3VyQ2FjaGVQcm9tLFxuICAgICAgICBmZXRjaFJlY2VudChcbiAgICAgICAgICBoYXNzLFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIHRvRmV0Y2hTdGFydFRpbWUsXG4gICAgICAgICAgZW5kVGltZSxcbiAgICAgICAgICBhcHBlbmRpbmdUb0NhY2hlXG4gICAgICAgICksXG4gICAgICBdKTtcbiAgICAgIGZldGNoZWRIaXN0b3J5ID0gcmVzdWx0c1sxXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRlbGV0ZSBzdGF0ZUhpc3RvcnlDYWNoZVtjYWNoZUtleV07XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIGNvbnN0IHN0YXRlSGlzdG9yeSA9IGNvbXB1dGVIaXN0b3J5KFxuICAgICAgaGFzcyxcbiAgICAgIGZldGNoZWRIaXN0b3J5LFxuICAgICAgbG9jYWxpemUsXG4gICAgICBsYW5ndWFnZVxuICAgICk7XG4gICAgaWYgKGFwcGVuZGluZ1RvQ2FjaGUpIHtcbiAgICAgIG1lcmdlTGluZShzdGF0ZUhpc3RvcnkubGluZSwgY2FjaGUuZGF0YS5saW5lKTtcbiAgICAgIG1lcmdlVGltZWxpbmUoc3RhdGVIaXN0b3J5LnRpbWVsaW5lLCBjYWNoZS5kYXRhLnRpbWVsaW5lKTtcbiAgICAgIHBydW5lU3RhcnRUaW1lKHN0YXJ0VGltZSwgY2FjaGUuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlLmRhdGEgPSBzdGF0ZUhpc3Rvcnk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZS5kYXRhO1xuICB9O1xuXG4gIGNhY2hlLnByb20gPSBnZW5Qcm9tKCk7XG4gIGNhY2hlLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgY2FjaGUuZW5kVGltZSA9IGVuZFRpbWU7XG4gIHJldHVybiBjYWNoZS5wcm9tO1xufTtcblxuY29uc3QgbWVyZ2VMaW5lID0gKFxuICBoaXN0b3J5TGluZXM6IExpbmVDaGFydFVuaXRbXSxcbiAgY2FjaGVMaW5lczogTGluZUNoYXJ0VW5pdFtdXG4pID0+IHtcbiAgaGlzdG9yeUxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjb25zdCB1bml0ID0gbGluZS51bml0O1xuICAgIGNvbnN0IG9sZExpbmUgPSBjYWNoZUxpbmVzLmZpbmQoKGNhY2hlTGluZSkgPT4gY2FjaGVMaW5lLnVuaXQgPT09IHVuaXQpO1xuICAgIGlmIChvbGRMaW5lKSB7XG4gICAgICBsaW5lLmRhdGEuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IG9sZEVudGl0eSA9IG9sZExpbmUuZGF0YS5maW5kKFxuICAgICAgICAgIChjYWNoZUVudGl0eSkgPT4gZW50aXR5LmVudGl0eV9pZCA9PT0gY2FjaGVFbnRpdHkuZW50aXR5X2lkXG4gICAgICAgICk7XG4gICAgICAgIGlmIChvbGRFbnRpdHkpIHtcbiAgICAgICAgICBvbGRFbnRpdHkuc3RhdGVzID0gb2xkRW50aXR5LnN0YXRlcy5jb25jYXQoZW50aXR5LnN0YXRlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2xkTGluZS5kYXRhLnB1c2goZW50aXR5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlTGluZXMucHVzaChsaW5lKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbWVyZ2VUaW1lbGluZSA9IChcbiAgaGlzdG9yeVRpbWVsaW5lczogVGltZWxpbmVFbnRpdHlbXSxcbiAgY2FjaGVUaW1lbGluZXM6IFRpbWVsaW5lRW50aXR5W11cbikgPT4ge1xuICBoaXN0b3J5VGltZWxpbmVzLmZvckVhY2goKHRpbWVsaW5lKSA9PiB7XG4gICAgY29uc3Qgb2xkVGltZWxpbmUgPSBjYWNoZVRpbWVsaW5lcy5maW5kKFxuICAgICAgKGNhY2hlVGltZWxpbmUpID0+IGNhY2hlVGltZWxpbmUuZW50aXR5X2lkID09PSB0aW1lbGluZS5lbnRpdHlfaWRcbiAgICApO1xuICAgIGlmIChvbGRUaW1lbGluZSkge1xuICAgICAgb2xkVGltZWxpbmUuZGF0YSA9IG9sZFRpbWVsaW5lLmRhdGEuY29uY2F0KHRpbWVsaW5lLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZVRpbWVsaW5lcy5wdXNoKHRpbWVsaW5lKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcHJ1bmVBcnJheSA9IChvcmlnaW5hbFN0YXJ0VGltZTogRGF0ZSwgYXJyKSA9PiB7XG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBjb25zdCBjaGFuZ2VkQWZ0ZXJTdGFydFRpbWUgPSBhcnIuZmluZEluZGV4KFxuICAgIChzdGF0ZSkgPT4gbmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKSA+IG9yaWdpbmFsU3RhcnRUaW1lXG4gICk7XG4gIGlmIChjaGFuZ2VkQWZ0ZXJTdGFydFRpbWUgPT09IDApIHtcbiAgICAvLyBJZiBhbGwgY2hhbmdlcyBoYXBwZW5lZCBhZnRlciBvcmlnaW5hbFN0YXJ0VGltZSB0aGVuIHdlIGFyZSBkb25lLlxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvLyBJZiBhbGwgY2hhbmdlcyBoYXBwZW5lZCBhdCBvciBiZWZvcmUgb3JpZ2luYWxTdGFydFRpbWUuIFVzZSBsYXN0IGluZGV4LlxuICBjb25zdCB1cGRhdGVJbmRleCA9XG4gICAgY2hhbmdlZEFmdGVyU3RhcnRUaW1lID09PSAtMSA/IGFyci5sZW5ndGggLSAxIDogY2hhbmdlZEFmdGVyU3RhcnRUaW1lIC0gMTtcbiAgYXJyW3VwZGF0ZUluZGV4XS5sYXN0X2NoYW5nZWQgPSBvcmlnaW5hbFN0YXJ0VGltZTtcbiAgcmV0dXJuIGFyci5zbGljZSh1cGRhdGVJbmRleCk7XG59O1xuXG5jb25zdCBwcnVuZVN0YXJ0VGltZSA9IChvcmlnaW5hbFN0YXJ0VGltZTogRGF0ZSwgY2FjaGVEYXRhOiBIaXN0b3J5UmVzdWx0KSA9PiB7XG4gIGNhY2hlRGF0YS5saW5lLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBsaW5lLmRhdGEuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICBlbnRpdHkuc3RhdGVzID0gcHJ1bmVBcnJheShvcmlnaW5hbFN0YXJ0VGltZSwgZW50aXR5LnN0YXRlcyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNhY2hlRGF0YS50aW1lbGluZS5mb3JFYWNoKCh0aW1lbGluZSkgPT4ge1xuICAgIHRpbWVsaW5lLmRhdGEgPSBwcnVuZUFycmF5KG9yaWdpbmFsU3RhcnRUaW1lLCB0aW1lbGluZS5kYXRhKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgdGltZU91dCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luY1wiO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVIaXN0b3J5LCBmZXRjaERhdGUgfSBmcm9tIFwiLi9oaXN0b3J5XCI7XG5pbXBvcnQgeyBnZXRSZWNlbnQsIGdldFJlY2VudFdpdGhDYWNoZSB9IGZyb20gXCIuL2NhY2hlZC1oaXN0b3J5XCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFTdGF0ZUhpc3RvcnlEYXRhIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJoYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZmlsdGVyVHlwZTogU3RyaW5nLFxuXG4gICAgICBjYWNoZUNvbmZpZzogT2JqZWN0LFxuXG4gICAgICBzdGFydFRpbWU6IERhdGUsXG4gICAgICBlbmRUaW1lOiBEYXRlLFxuXG4gICAgICBlbnRpdHlJZDogU3RyaW5nLFxuXG4gICAgICBpc0xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgXCJmaWx0ZXJDaGFuZ2VkRGVib3VuY2VyKGZpbHRlclR5cGUsIGVudGl0eUlkLCBzdGFydFRpbWUsIGVuZFRpbWUsIGNhY2hlQ29uZmlnLCBsb2NhbGl6ZSlcIixcbiAgICBdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLmZpbHRlckNoYW5nZWREZWJvdW5jZXIoXG4gICAgICB0aGlzLmZpbHRlclR5cGUsXG4gICAgICB0aGlzLmVudGl0eUlkLFxuICAgICAgdGhpcy5zdGFydFRpbWUsXG4gICAgICB0aGlzLmVuZFRpbWUsXG4gICAgICB0aGlzLmNhY2hlQ29uZmlnLFxuICAgICAgdGhpcy5sb2NhbGl6ZVxuICAgICk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5fcmVmcmVzaFRpbWVvdXRJZCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fcmVmcmVzaFRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9yZWZyZXNoVGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGhhc3NDaGFuZ2VkKG5ld0hhc3MsIG9sZEhhc3MpIHtcbiAgICBpZiAoIW9sZEhhc3MgJiYgIXRoaXMuX21hZGVGaXJzdENhbGwpIHtcbiAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlZERlYm91bmNlcihcbiAgICAgICAgdGhpcy5maWx0ZXJUeXBlLFxuICAgICAgICB0aGlzLmVudGl0eUlkLFxuICAgICAgICB0aGlzLnN0YXJ0VGltZSxcbiAgICAgICAgdGhpcy5lbmRUaW1lLFxuICAgICAgICB0aGlzLmNhY2hlQ29uZmlnLFxuICAgICAgICB0aGlzLmxvY2FsaXplXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckNoYW5nZWREZWJvdW5jZXIoLi4uYXJncykge1xuICAgIHRoaXMuX2RlYm91bmNlRmlsdGVyQ2hhbmdlZCA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgIHRoaXMuX2RlYm91bmNlRmlsdGVyQ2hhbmdlZCxcbiAgICAgIHRpbWVPdXQuYWZ0ZXIoMCksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlZCguLi5hcmdzKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZmlsdGVyQ2hhbmdlZChcbiAgICBmaWx0ZXJUeXBlLFxuICAgIGVudGl0eUlkLFxuICAgIHN0YXJ0VGltZSxcbiAgICBlbmRUaW1lLFxuICAgIGNhY2hlQ29uZmlnLFxuICAgIGxvY2FsaXplXG4gICkge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZUNvbmZpZyAmJiAhY2FjaGVDb25maWcuY2FjaGVLZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFsb2NhbGl6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tYWRlRmlyc3RDYWxsID0gdHJ1ZTtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMuaGFzcy5sYW5ndWFnZTtcbiAgICBsZXQgZGF0YTtcblxuICAgIGlmIChmaWx0ZXJUeXBlID09PSBcImRhdGVcIikge1xuICAgICAgaWYgKCFzdGFydFRpbWUgfHwgIWVuZFRpbWUpIHJldHVybjtcblxuICAgICAgZGF0YSA9IGZldGNoRGF0ZSh0aGlzLmhhc3MsIHN0YXJ0VGltZSwgZW5kVGltZSkudGhlbigoZGF0ZUhpc3RvcnkpID0+XG4gICAgICAgIGNvbXB1dGVIaXN0b3J5KHRoaXMuaGFzcywgZGF0ZUhpc3RvcnksIGxvY2FsaXplLCBsYW5ndWFnZSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChmaWx0ZXJUeXBlID09PSBcInJlY2VudC1lbnRpdHlcIikge1xuICAgICAgaWYgKCFlbnRpdHlJZCkgcmV0dXJuO1xuICAgICAgaWYgKGNhY2hlQ29uZmlnKSB7XG4gICAgICAgIGRhdGEgPSB0aGlzLmdldFJlY2VudFdpdGhDYWNoZVJlZnJlc2goXG4gICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgY2FjaGVDb25maWcsXG4gICAgICAgICAgbG9jYWxpemUsXG4gICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBnZXRSZWNlbnQoXG4gICAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgICBlbmRUaW1lLFxuICAgICAgICAgIGxvY2FsaXplLFxuICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgZGF0YS50aGVuKChzdGF0ZUhpc3RvcnkpID0+IHtcbiAgICAgIHRoaXMuX3NldERhdGEoc3RhdGVIaXN0b3J5KTtcbiAgICAgIHRoaXMuX3NldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRSZWNlbnRXaXRoQ2FjaGVSZWZyZXNoKGVudGl0eUlkLCBjYWNoZUNvbmZpZywgbG9jYWxpemUsIGxhbmd1YWdlKSB7XG4gICAgaWYgKHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fcmVmcmVzaFRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIGlmIChjYWNoZUNvbmZpZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLl9yZWZyZXNoVGltZW91dElkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgZ2V0UmVjZW50V2l0aENhY2hlKFxuICAgICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICBjYWNoZUNvbmZpZyxcbiAgICAgICAgICBsb2NhbGl6ZSxcbiAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICApLnRoZW4oKHN0YXRlSGlzdG9yeSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NldERhdGEoeyAuLi5zdGF0ZUhpc3RvcnkgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgY2FjaGVDb25maWcucmVmcmVzaCAqIDEwMDApO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVjZW50V2l0aENhY2hlKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgZW50aXR5SWQsXG4gICAgICBjYWNoZUNvbmZpZyxcbiAgICAgIGxvY2FsaXplLFxuICAgICAgbGFuZ3VhZ2VcbiAgICApO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zdGF0ZS1oaXN0b3J5LWRhdGFcIiwgSGFTdGF0ZUhpc3RvcnlEYXRhKTtcbiIsImltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURpc3BsYXkgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2Rpc3BsYXlcIjtcblxuY29uc3QgRE9NQUlOU19VU0VfTEFTVF9VUERBVEVEID0gW1wiY2xpbWF0ZVwiLCBcIndhdGVyX2hlYXRlclwiXTtcbmNvbnN0IExJTkVfQVRUUklCVVRFU19UT19LRUVQID0gW1xuICBcInRlbXBlcmF0dXJlXCIsXG4gIFwiY3VycmVudF90ZW1wZXJhdHVyZVwiLFxuICBcInRhcmdldF90ZW1wX2xvd1wiLFxuICBcInRhcmdldF90ZW1wX2hpZ2hcIixcbiAgXCJodmFjX2FjdGlvblwiLFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2hhcnRTdGF0ZSB7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGxhc3RfY2hhbmdlZDogc3RyaW5nO1xuICBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2hhcnRFbnRpdHkge1xuICBkb21haW46IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgc3RhdGVzOiBMaW5lQ2hhcnRTdGF0ZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVDaGFydFVuaXQge1xuICB1bml0OiBzdHJpbmc7XG4gIGlkZW50aWZpZXI6IHN0cmluZztcbiAgZGF0YTogTGluZUNoYXJ0RW50aXR5W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZWxpbmVTdGF0ZSB7XG4gIHN0YXRlX2xvY2FsaXplOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGxhc3RfY2hhbmdlZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lRW50aXR5IHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgZGF0YTogVGltZWxpbmVTdGF0ZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlSZXN1bHQge1xuICBsaW5lOiBMaW5lQ2hhcnRVbml0W107XG4gIHRpbWVsaW5lOiBUaW1lbGluZUVudGl0eVtdO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hSZWNlbnQgPSAoXG4gIGhhc3MsXG4gIGVudGl0eUlkLFxuICBzdGFydFRpbWUsXG4gIGVuZFRpbWUsXG4gIHNraXBJbml0aWFsU3RhdGUgPSBmYWxzZVxuKTogUHJvbWlzZTxIYXNzRW50aXR5W11bXT4gPT4ge1xuICBsZXQgdXJsID0gXCJoaXN0b3J5L3BlcmlvZFwiO1xuICBpZiAoc3RhcnRUaW1lKSB7XG4gICAgdXJsICs9IFwiL1wiICsgc3RhcnRUaW1lLnRvSVNPU3RyaW5nKCk7XG4gIH1cbiAgdXJsICs9IFwiP2ZpbHRlcl9lbnRpdHlfaWQ9XCIgKyBlbnRpdHlJZDtcbiAgaWYgKGVuZFRpbWUpIHtcbiAgICB1cmwgKz0gXCImZW5kX3RpbWU9XCIgKyBlbmRUaW1lLnRvSVNPU3RyaW5nKCk7XG4gIH1cbiAgaWYgKHNraXBJbml0aWFsU3RhdGUpIHtcbiAgICB1cmwgKz0gXCImc2tpcF9pbml0aWFsX3N0YXRlXCI7XG4gIH1cblxuICByZXR1cm4gaGFzcy5jYWxsQXBpKFwiR0VUXCIsIHVybCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYXRlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzdGFydFRpbWU6IERhdGUsXG4gIGVuZFRpbWU6IERhdGVcbik6IFByb21pc2U8SGFzc0VudGl0eVtdW10+ID0+IHtcbiAgcmV0dXJuIGhhc3MuY2FsbEFwaShcbiAgICBcIkdFVFwiLFxuICAgIGBoaXN0b3J5L3BlcmlvZC8ke3N0YXJ0VGltZS50b0lTT1N0cmluZygpfT9lbmRfdGltZT0ke2VuZFRpbWUudG9JU09TdHJpbmcoKX1gXG4gICk7XG59O1xuXG5jb25zdCBlcXVhbFN0YXRlID0gKG9iajE6IExpbmVDaGFydFN0YXRlLCBvYmoyOiBMaW5lQ2hhcnRTdGF0ZSkgPT5cbiAgb2JqMS5zdGF0ZSA9PT0gb2JqMi5zdGF0ZSAmJlxuICAvLyBUaGV5IGVpdGhlciBib3RoIGhhdmUgYW4gYXR0cmlidXRlcyBvYmplY3Qgb3Igbm90XG4gICghb2JqMS5hdHRyaWJ1dGVzIHx8XG4gICAgTElORV9BVFRSSUJVVEVTX1RPX0tFRVAuZXZlcnkoXG4gICAgICAoYXR0cikgPT4gb2JqMS5hdHRyaWJ1dGVzIVthdHRyXSA9PT0gb2JqMi5hdHRyaWJ1dGVzIVthdHRyXVxuICAgICkpO1xuXG5jb25zdCBwcm9jZXNzVGltZWxpbmVFbnRpdHkgPSAoXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGxhbmd1YWdlOiBzdHJpbmcsXG4gIHN0YXRlczogSGFzc0VudGl0eVtdXG4pOiBUaW1lbGluZUVudGl0eSA9PiB7XG4gIGNvbnN0IGRhdGE6IFRpbWVsaW5lU3RhdGVbXSA9IFtdO1xuXG4gIGZvciAoY29uc3Qgc3RhdGUgb2Ygc3RhdGVzKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCAmJiBzdGF0ZS5zdGF0ZSA9PT0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLnN0YXRlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBkYXRhLnB1c2goe1xuICAgICAgc3RhdGVfbG9jYWxpemU6IGNvbXB1dGVTdGF0ZURpc3BsYXkobG9jYWxpemUsIHN0YXRlLCBsYW5ndWFnZSksXG4gICAgICBzdGF0ZTogc3RhdGUuc3RhdGUsXG4gICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlLmxhc3RfY2hhbmdlZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogY29tcHV0ZVN0YXRlTmFtZShzdGF0ZXNbMF0pLFxuICAgIGVudGl0eV9pZDogc3RhdGVzWzBdLmVudGl0eV9pZCxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuY29uc3QgcHJvY2Vzc0xpbmVDaGFydEVudGl0aWVzID0gKFxuICB1bml0LFxuICBlbnRpdGllczogSGFzc0VudGl0eVtdW11cbik6IExpbmVDaGFydFVuaXQgPT4ge1xuICBjb25zdCBkYXRhOiBMaW5lQ2hhcnRFbnRpdHlbXSA9IFtdO1xuXG4gIGZvciAoY29uc3Qgc3RhdGVzIG9mIGVudGl0aWVzKSB7XG4gICAgY29uc3QgbGFzdDogSGFzc0VudGl0eSA9IHN0YXRlc1tzdGF0ZXMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKGxhc3QpO1xuICAgIGNvbnN0IHByb2Nlc3NlZFN0YXRlczogTGluZUNoYXJ0U3RhdGVbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICAgIGxldCBwcm9jZXNzZWRTdGF0ZTogTGluZUNoYXJ0U3RhdGU7XG5cbiAgICAgIGlmIChET01BSU5TX1VTRV9MQVNUX1VQREFURUQuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgICAgICBwcm9jZXNzZWRTdGF0ZSA9IHtcbiAgICAgICAgICBzdGF0ZTogc3RhdGUuc3RhdGUsXG4gICAgICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZS5sYXN0X3VwZGF0ZWQsXG4gICAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBhdHRyIG9mIExJTkVfQVRUUklCVVRFU19UT19LRUVQKSB7XG4gICAgICAgICAgaWYgKGF0dHIgaW4gc3RhdGUuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgcHJvY2Vzc2VkU3RhdGUuYXR0cmlidXRlcyFbYXR0cl0gPSBzdGF0ZS5hdHRyaWJ1dGVzW2F0dHJdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzc2VkU3RhdGUgPSBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzZWRTdGF0ZXMubGVuZ3RoID4gMSAmJlxuICAgICAgICBlcXVhbFN0YXRlKFxuICAgICAgICAgIHByb2Nlc3NlZFN0YXRlLFxuICAgICAgICAgIHByb2Nlc3NlZFN0YXRlc1twcm9jZXNzZWRTdGF0ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSAmJlxuICAgICAgICBlcXVhbFN0YXRlKHByb2Nlc3NlZFN0YXRlLCBwcm9jZXNzZWRTdGF0ZXNbcHJvY2Vzc2VkU3RhdGVzLmxlbmd0aCAtIDJdKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9jZXNzZWRTdGF0ZXMucHVzaChwcm9jZXNzZWRTdGF0ZSk7XG4gICAgfVxuXG4gICAgZGF0YS5wdXNoKHtcbiAgICAgIGRvbWFpbixcbiAgICAgIG5hbWU6IGNvbXB1dGVTdGF0ZU5hbWUobGFzdCksXG4gICAgICBlbnRpdHlfaWQ6IGxhc3QuZW50aXR5X2lkLFxuICAgICAgc3RhdGVzOiBwcm9jZXNzZWRTdGF0ZXMsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVuaXQsXG4gICAgaWRlbnRpZmllcjogZW50aXRpZXMubWFwKChzdGF0ZXMpID0+IHN0YXRlc1swXS5lbnRpdHlfaWQpLmpvaW4oXCJcIiksXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlSGlzdG9yeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc3RhdGVIaXN0b3J5OiBIYXNzRW50aXR5W11bXSxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKTogSGlzdG9yeVJlc3VsdCA9PiB7XG4gIGNvbnN0IGxpbmVDaGFydERldmljZXM6IHsgW3VuaXQ6IHN0cmluZ106IEhhc3NFbnRpdHlbXVtdIH0gPSB7fTtcbiAgY29uc3QgdGltZWxpbmVEZXZpY2VzOiBUaW1lbGluZUVudGl0eVtdID0gW107XG4gIGlmICghc3RhdGVIaXN0b3J5KSB7XG4gICAgcmV0dXJuIHsgbGluZTogW10sIHRpbWVsaW5lOiBbXSB9O1xuICB9XG5cbiAgc3RhdGVIaXN0b3J5LmZvckVhY2goKHN0YXRlSW5mbykgPT4ge1xuICAgIGlmIChzdGF0ZUluZm8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVXaXRoVW5pdCA9IHN0YXRlSW5mby5maW5kKFxuICAgICAgKHN0YXRlKSA9PiBcInVuaXRfb2ZfbWVhc3VyZW1lbnRcIiBpbiBzdGF0ZS5hdHRyaWJ1dGVzXG4gICAgKTtcblxuICAgIGxldCB1bml0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoc3RhdGVXaXRoVW5pdCkge1xuICAgICAgdW5pdCA9IHN0YXRlV2l0aFVuaXQuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50O1xuICAgIH0gZWxzZSBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlSW5mb1swXSkgPT09IFwiY2xpbWF0ZVwiKSB7XG4gICAgICB1bml0ID0gaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmU7XG4gICAgfSBlbHNlIGlmIChjb21wdXRlU3RhdGVEb21haW4oc3RhdGVJbmZvWzBdKSA9PT0gXCJ3YXRlcl9oZWF0ZXJcIikge1xuICAgICAgdW5pdCA9IGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlO1xuICAgIH1cblxuICAgIGlmICghdW5pdCkge1xuICAgICAgdGltZWxpbmVEZXZpY2VzLnB1c2goXG4gICAgICAgIHByb2Nlc3NUaW1lbGluZUVudGl0eShsb2NhbGl6ZSwgbGFuZ3VhZ2UsIHN0YXRlSW5mbylcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh1bml0IGluIGxpbmVDaGFydERldmljZXMpIHtcbiAgICAgIGxpbmVDaGFydERldmljZXNbdW5pdF0ucHVzaChzdGF0ZUluZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lQ2hhcnREZXZpY2VzW3VuaXRdID0gW3N0YXRlSW5mb107XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB1bml0U3RhdGVzID0gT2JqZWN0LmtleXMobGluZUNoYXJ0RGV2aWNlcykubWFwKCh1bml0KSA9PlxuICAgIHByb2Nlc3NMaW5lQ2hhcnRFbnRpdGllcyh1bml0LCBsaW5lQ2hhcnREZXZpY2VzW3VuaXRdKVxuICApO1xuXG4gIHJldHVybiB7IGxpbmU6IHVuaXRTdGF0ZXMsIHRpbWVsaW5lOiB0aW1lbGluZURldmljZXMgfTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBT0E7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUErS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzVUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBdkJBO0FBMkJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQTdXQTtBQUNBO0FBQ0E7OztBQTZXQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTREQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUF2bUJBO0FBQ0E7QUFnSUE7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQXhCQTtBQTZCQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBN0tBO0FBQ0E7QUE0bUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNuQkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQThDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBRkE7QUFTQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBWkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQTVDQTtBQWtEQTtBQUNBO0FBQ0E7QUFGQTtBQXREQTtBQTJEQTtBQUNBOzs7QUE1VUE7QUFDQTtBQWdCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWJBO0FBbUJBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUE1Q0E7QUFDQTtBQThVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFZBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQXNEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBTUE7QUFJQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVhBO0FBTkE7QUEwQkE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWhDQTtBQXFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQTVNQTtBQUNBO0FBcUJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQWpCQTtBQXNCQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBcERBO0FBQ0E7QUE4TUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQStFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQW5HQTtBQUNBO0FBdURBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBZkE7QUFpQkE7Ozs7QUE3RUE7QUFDQTtBQXFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBZ0NBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBRUE7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBT0E7O0FBVEE7QUFVQTs7OztBQUVBO0FBQ0E7O0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxT0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQXVDQTtBQUNBO0FBQ0E7QUFBQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUVBOzs7QUFHQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7OztBQW5LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBdEJBO0FBNkJBOzs7QUFFQTtBQUNBO0FBR0E7Ozs7QUFyQ0E7QUFDQTtBQXFLQTs7Ozs7Ozs7Ozs7O0FDbExBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXNDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUtBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9