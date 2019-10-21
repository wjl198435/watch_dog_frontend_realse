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
    ? (dateObj, locales) => dateObj.toLocaleDateString(locales, {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    : (dateObj) => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumDate"));


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
    ? (dateObj, locales) => dateObj.toLocaleString(locales, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
    })
    : (dateObj) => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime"));


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
    ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
        hour: "numeric",
        minute: "2-digit",
    })
    : (dateObj) => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime"));


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




const computeStateDisplay = (localize, stateObj, language) => {
    let display;
    const domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["computeStateDomain"])(stateObj);
    if (domain === "binary_sensor") {
        // Try device class translation, then default binary sensor translation
        if (stateObj.attributes.device_class) {
            display = localize(`state.${domain}.${stateObj.attributes.device_class}.${stateObj.state}`);
        }
        if (!display) {
            display = localize(`state.${domain}.default.${stateObj.state}`);
        }
    }
    else if (stateObj.attributes.unit_of_measurement &&
        !["unknown", "unavailable"].includes(stateObj.state)) {
        display = stateObj.state + " " + stateObj.attributes.unit_of_measurement;
    }
    else if (domain === "input_datetime") {
        let date;
        if (!stateObj.attributes.has_time) {
            date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day);
            display = Object(_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__["default"])(date, language);
        }
        else if (!stateObj.attributes.has_date) {
            const now = new Date();
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
            display = localize(`state.zwave.query_stage.${stateObj.state}`, "query_stage", stateObj.attributes.query_stage);
        }
        else {
            display = localize(`state.zwave.default.${stateObj.state}`);
        }
    }
    else {
        display = localize(`state.${domain}.${stateObj.state}`);
    }
    // Fall back to default, component backend translation, or raw state if nothing else matches.
    if (!display) {
        display =
            localize(`state.default.${stateObj.state}`) ||
                localize(`component.${domain}.state.${stateObj.state}`) ||
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









// eslint-disable-next-line no-unused-vars
/* global Chart moment Color */

let scriptsLoaded = null;

class HaChartBase extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_6__["mixinBehaviors"])(
  [_polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]],
  _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]
) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        :host {
          display: block;
        }
        .chartHeader {
          padding: 6px 0 0 0;
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .chartHeader > div {
          vertical-align: top;
          padding: 0 8px;
        }
        .chartHeader > div.chartTitle {
          padding-top: 8px;
          flex: 0 0 0;
          max-width: 30%;
        }
        .chartHeader > div.chartLegend {
          flex: 1 1;
          min-width: 70%;
        }
        :root {
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }
        .chartTooltip {
          font-size: 90%;
          opacity: 1;
          position: absolute;
          background: rgba(80, 80, 80, 0.9);
          color: white;
          border-radius: 3px;
          pointer-events: none;
          transform: translate(-50%, 12px);
          z-index: 1000;
          width: 200px;
          transition: opacity 0.15s ease-in-out;
        }
        :host([rtl]) .chartTooltip {
          direction: rtl;
        }
        .chartLegend ul,
        .chartTooltip ul {
          display: inline-block;
          padding: 0 0px;
          margin: 5px 0 0 0;
          width: 100%;
        }
        .chartTooltip li {
          display: block;
          white-space: pre-line;
        }
        .chartTooltip .title {
          text-align: center;
          font-weight: 500;
        }
        .chartLegend li {
          display: inline-block;
          padding: 0 6px;
          max-width: 49%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }
        .chartLegend li:nth-child(odd):last-of-type {
          /* Make last item take full width if it is odd-numbered. */
          max-width: 100%;
        }
        .chartLegend li[data-hidden] {
          text-decoration: line-through;
        }
        .chartLegend em,
        .chartTooltip em {
          border-radius: 5px;
          display: inline-block;
          height: 10px;
          margin-right: 4px;
          width: 10px;
        }
        :host([rtl]) .chartTooltip em {
          margin-right: inherit;
          margin-left: 4px;
        }
        paper-icon-button {
          color: var(--secondary-text-color);
        }
      </style>
      <template is="dom-if" if="[[unit]]">
        <div class="chartHeader">
          <div class="chartTitle">[[unit]]</div>
          <div class="chartLegend">
            <ul>
              <template is="dom-repeat" items="[[metas]]">
                <li on-click="_legendClick" data-hidden$="[[item.hidden]]">
                  <em style$="background-color:[[item.bgColor]]"></em>
                  [[item.label]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </template>
      <div id="chartTarget" style="height:40px; width:100%">
        <canvas id="chartCanvas"></canvas>
        <div
          class$="chartTooltip [[tooltip.yAlign]]"
          style$="opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px"
        >
          <div class="title">[[tooltip.title]]</div>
          <div>
            <ul>
              <template is="dom-repeat" items="[[tooltip.lines]]">
                <li>
                  <em style$="background-color:[[item.bgColor]]"></em
                  >[[item.text]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  get chart() {
    return this._chart;
  }

  static get properties() {
    return {
      data: Object,
      identifier: String,
      rendered: {
        type: Boolean,
        notify: true,
        value: false,
        readOnly: true,
      },
      metas: {
        type: Array,
        value: () => [],
      },
      tooltip: {
        type: Object,
        value: () => ({
          opacity: "0",
          left: "0",
          top: "0",
          xPadding: "5",
          yPadding: "3",
        }),
      },
      unit: Object,
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
      },
    };
  }

  static get observers() {
    return ["onPropsChange(data)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.onPropsChange();
    this._resizeListener = () => {
      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(
        this._debouncer,
        _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__["timeOut"].after(10),
        () => {
          if (this._isAttached) {
            this.resizeChart();
          }
        }
      );
    };

    if (typeof ResizeObserver === "function") {
      this.resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(() => {
          this._resizeListener();
        });
      });
      this.resizeObserver.observe(this.$.chartTarget);
    } else {
      this.addEventListener("iron-resize", this._resizeListener);
    }

    if (scriptsLoaded === null) {
      scriptsLoaded = Promise.all(/*! import() | load_chart */[__webpack_require__.e("vendors~load_chart~panel-calendar"), __webpack_require__.e("vendors~load_chart"), __webpack_require__.e("load_chart")]).then(__webpack_require__.bind(null, /*! ../../resources/ha-chart-scripts.js */ "./src/resources/ha-chart-scripts.js"));
    }
    scriptsLoaded.then((ChartModule) => {
      this.ChartClass = ChartModule.default;
      this.onPropsChange();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
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

  onPropsChange() {
    if (!this._isAttached || !this.ChartClass || !this.data) {
      return;
    }
    this.drawChart();
  }

  _customTooltips(tooltip) {
    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      this.set(["tooltip", "opacity"], 0);
      return;
    }
    // Set caret Position
    if (tooltip.yAlign) {
      this.set(["tooltip", "yAlign"], tooltip.yAlign);
    } else {
      this.set(["tooltip", "yAlign"], "no-transform");
    }

    const title = tooltip.title ? tooltip.title[0] || "" : "";
    this.set(["tooltip", "title"], title);

    const bodyLines = tooltip.body.map((n) => n.lines);

    // Set Text
    if (tooltip.body) {
      this.set(
        ["tooltip", "lines"],
        bodyLines.map((body, i) => {
          const colors = tooltip.labelColors[i];
          return {
            color: colors.borderColor,
            bgColor: colors.backgroundColor,
            text: body.join("\n"),
          };
        })
      );
    }
    const parentWidth = this.$.chartTarget.clientWidth;
    let positionX = tooltip.caretX;
    const positionY = this._chart.canvas.offsetTop + tooltip.caretY;
    if (tooltip.caretX + 100 > parentWidth) {
      positionX = parentWidth - 100;
    } else if (tooltip.caretX < 100) {
      positionX = 100;
    }
    positionX += this._chart.canvas.offsetLeft;
    // Display, position, and set styles for font
    this.tooltip = {
      ...this.tooltip,
      opacity: 1,
      left: `${positionX}px`,
      top: `${positionY}px`,
    };
  }

  _legendClick(event) {
    event = event || window.event;
    event.stopPropagation();
    let target = event.target || event.srcElement;
    while (target.nodeName !== "LI") {
      // user clicked child, find parent LI
      target = target.parentElement;
    }
    const index = event.model.itemsIndex;

    const meta = this._chart.getDatasetMeta(index);
    meta.hidden =
      meta.hidden === null ? !this._chart.data.datasets[index].hidden : null;
    this.set(
      ["metas", index, "hidden"],
      this._chart.isDatasetVisible(index) ? null : "hidden"
    );
    this._chart.update();
  }

  _drawLegend() {
    const chart = this._chart;
    // New data for old graph. Keep metadata.
    const preserveVisibility =
      this._oldIdentifier && this.identifier === this._oldIdentifier;
    this._oldIdentifier = this.identifier;
    this.set(
      "metas",
      this._chart.data.datasets.map((x, i) => ({
        label: x.label,
        color: x.color,
        bgColor: x.backgroundColor,
        hidden:
          preserveVisibility && i < this.metas.length
            ? this.metas[i].hidden
            : !chart.isDatasetVisible(i),
      }))
    );
    let updateNeeded = false;
    if (preserveVisibility) {
      for (let i = 0; i < this.metas.length; i++) {
        const meta = chart.getDatasetMeta(i);
        if (!!meta.hidden !== !!this.metas[i].hidden) updateNeeded = true;
        meta.hidden = this.metas[i].hidden ? true : null;
      }
    }
    if (updateNeeded) {
      chart.update();
    }
    this.unit = this.data.unit;
  }

  _formatTickValue(value, index, values) {
    if (values.length === 0) {
      return value;
    }
    const date = new Date(values[index].value);
    return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__["default"])(date);
  }

  drawChart() {
    const data = this.data.data;
    const ctx = this.$.chartCanvas;

    if ((!data.datasets || !data.datasets.length) && !this._chart) {
      return;
    }
    if (this.data.type !== "timeline" && data.datasets.length > 0) {
      const cnt = data.datasets.length;
      const colors = this.constructor.getColorList(cnt);
      for (let loopI = 0; loopI < cnt; loopI++) {
        data.datasets[loopI].borderColor = colors[loopI].rgbString();
        data.datasets[loopI].backgroundColor = colors[loopI]
          .alpha(0.6)
          .rgbaString();
      }
    }

    if (this._chart) {
      this._customTooltips({ opacity: 0 });
      this._chart.data = data;
      this._chart.update({ duration: 0 });
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
      this._customTooltips({ opacity: 0 });
      const plugins = [{ afterRender: () => this._setRendered(true) }];
      let options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 0,
        },
        hover: {
          animationDuration: 0,
        },
        responsiveAnimationDuration: 0,
        tooltips: {
          enabled: false,
          custom: this._customTooltips.bind(this),
        },
        legend: {
          display: false,
        },
        line: {
          spanGaps: true,
        },
        elements: {
          font: "12px 'Roboto', 'sans-serif'",
        },
        ticks: {
          fontFamily: "'Roboto', 'sans-serif'",
        },
      };
      options = Chart.helpers.merge(options, this.data.options);
      options.scales.xAxes[0].ticks.callback = this._formatTickValue;
      if (this.data.type === "timeline") {
        this.set("isTimeline", true);
        if (this.data.colors !== undefined) {
          this._colorFunc = this.constructor.getColorGenerator(
            this.data.colors.staticColors,
            this.data.colors.staticColorIndex
          );
        }
        if (this._colorFunc !== undefined) {
          options.elements.colorFunction = this._colorFunc;
        }
        if (data.datasets.length === 1) {
          if (options.scales.yAxes[0].ticks) {
            options.scales.yAxes[0].ticks.display = false;
          } else {
            options.scales.yAxes[0].ticks = { display: false };
          }
          if (options.scales.yAxes[0].gridLines) {
            options.scales.yAxes[0].gridLines.display = false;
          } else {
            options.scales.yAxes[0].gridLines = { display: false };
          }
        }
        this.$.chartTarget.style.height = "50px";
      } else {
        this.$.chartTarget.style.height = "160px";
      }
      const chartData = {
        type: this.data.type,
        data: this.data.data,
        options: options,
        plugins: plugins,
      };
      // Async resize after dom update
      this._chart = new this.ChartClass(ctx, chartData);
      if (this.isTimeline !== true && this.data.legend === true) {
        this._drawLegend();
      }
      this.resizeChart();
    }
  }

  resizeChart() {
    if (!this._chart) return;
    // Chart not ready
    if (this._resizeTimer === undefined) {
      this._resizeTimer = setInterval(this.resizeChart.bind(this), 10);
      return;
    }

    clearInterval(this._resizeTimer);
    this._resizeTimer = undefined;

    this._resizeChart();
  }

  _resizeChart() {
    const chartTarget = this.$.chartTarget;

    const options = this.data;
    const data = options.data;

    if (data.datasets.length === 0) {
      return;
    }

    if (!this.isTimeline) {
      this._chart.resize();
      return;
    }

    // Recalculate chart height for Timeline chart
    const areaTop = this._chart.chartArea.top;
    const areaBot = this._chart.chartArea.bottom;
    const height1 = this._chart.canvas.clientHeight;
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
      const cnt = data.datasets.length;
      const targetHeight = 30 * cnt + this._axisHeight + "px";
      if (chartTarget.style.height !== targetHeight) {
        chartTarget.style.height = targetHeight;
      }
      this._chart.resize();
    }
  }

  // Get HSL distributed color list
  static getColorList(count) {
    let processL = false;
    if (count > 10) {
      processL = true;
      count = Math.ceil(count / 2);
    }
    const h1 = 360 / count;
    const result = [];
    for (let loopI = 0; loopI < count; loopI++) {
      result[loopI] = Color().hsl(h1 * loopI, 80, 38);
      if (processL) {
        result[loopI + count] = Color().hsl(h1 * loopI, 80, 62);
      }
    }
    return result;
  }

  static getColorGenerator(staticColors, startIndex) {
    // Known colors for static data,
    // should add for very common state string manually.
    // Palette modified from http://google.github.io/palette.js/ mpn65, Apache 2.0
    const palette = [
      "ff0029",
      "66a61e",
      "377eb8",
      "984ea3",
      "00d2d5",
      "ff7f00",
      "af8d00",
      "7f80cd",
      "b3e900",
      "c42e60",
      "a65628",
      "f781bf",
      "8dd3c7",
      "bebada",
      "fb8072",
      "80b1d3",
      "fdb462",
      "fccde5",
      "bc80bd",
      "ffed6f",
      "c4eaff",
      "cf8c00",
      "1b9e77",
      "d95f02",
      "e7298a",
      "e6ab02",
      "a6761d",
      "0097ff",
      "00d067",
      "f43600",
      "4ba93b",
      "5779bb",
      "927acc",
      "97ee3f",
      "bf3947",
      "9f5b00",
      "f48758",
      "8caed6",
      "f2b94f",
      "eff26e",
      "e43872",
      "d9b100",
      "9d7a00",
      "698cff",
      "d9d9d9",
      "00d27e",
      "d06800",
      "009f82",
      "c49200",
      "cbe8ff",
      "fecddf",
      "c27eb6",
      "8cd2ce",
      "c4b8d9",
      "f883b0",
      "a49100",
      "f48800",
      "27d0df",
      "a04a9b",
    ];
    function getColorIndex(idx) {
      // Reuse the color if index too large.
      return Color("#" + palette[idx % palette.length]);
    }
    const colorDict = {};
    let colorIndex = 0;
    if (startIndex > 0) colorIndex = startIndex;
    if (staticColors) {
      Object.keys(staticColors).forEach((c) => {
        const c1 = staticColors[c];
        if (isFinite(c1)) {
          colorDict[c.toLowerCase()] = getColorIndex(c1);
        } else {
          colorDict[c.toLowerCase()] = Color(staticColors[c]);
        }
      });
    }
    // Custom color assign
    function getColor(__, data) {
      let ret;
      const name = data[3];
      if (name === null) return Color().hsl(0, 40, 38);
      if (name === undefined) return Color().hsl(120, 40, 38);
      const name1 = name.toLowerCase();
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
}
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









class StateHistoryChartLine extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }
      </style>
      <ha-chart-base
        id="chart"
        data="[[chartData]]"
        identifier="[[identifier]]"
        rendered="{{rendered}}"
      ></ha-chart-base>
    `;
  }

  static get properties() {
    return {
      chartData: Object,
      data: Object,
      names: Object,
      unit: String,
      identifier: String,

      isSingleDevice: {
        type: Boolean,
        value: false,
      },

      endTime: Object,
      rendered: {
        type: Boolean,
        value: false,
        observer: "_onRenderedChanged",
      },
    };
  }

  static get observers() {
    return ["dataChanged(data, endTime, isSingleDevice)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.drawChart();
  }

  dataChanged() {
    this.drawChart();
  }

  _onRenderedChanged(rendered) {
    if (rendered) this.animateHeight();
  }

  animateHeight() {
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        this.style.height = this.$.chart.scrollHeight + "px";
      })
    );
  }

  drawChart() {
    const unit = this.unit;
    const deviceStates = this.data;
    const datasets = [];
    let endTime;

    if (!this._isAttached) {
      return;
    }

    if (deviceStates.length === 0) {
      return;
    }

    function safeParseFloat(value) {
      const parsed = parseFloat(value);
      return isFinite(parsed) ? parsed : null;
    }

    endTime =
      this.endTime ||
      // Get the highest date from the last date of each device
      new Date(
        Math.max.apply(
          null,
          deviceStates.map(
            (devSts) =>
              new Date(devSts.states[devSts.states.length - 1].last_changed)
          )
        )
      );
    if (endTime > new Date()) {
      endTime = new Date();
    }

    const names = this.names || {};
    deviceStates.forEach((states) => {
      const domain = states.domain;
      const name = names[states.entity_id] || states.name;
      // array containing [value1, value2, etc]
      let prevValues;
      const data = [];

      function pushData(timestamp, datavalues) {
        if (!datavalues) return;
        if (timestamp > endTime) {
          // Drop datapoints that are after the requested endTime. This could happen if
          // endTime is "now" and client time is not in sync with server time.
          return;
        }
        data.forEach((d, i) => {
          d.data.push({ x: timestamp, y: datavalues[i] });
        });
        prevValues = datavalues;
      }

      function addColumn(nameY, step, fill) {
        let dataFill = false;
        let dataStep = false;
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
          unitText: unit,
        });
      }

      if (
        domain === "thermostat" ||
        domain === "climate" ||
        domain === "water_heater"
      ) {
        const hasHvacAction = states.states.some(
          (state) => state.attributes && state.attributes.hvac_action
        );

        const isHeating =
          domain === "climate" && hasHvacAction
            ? (state) => state.attributes.hvac_action === "heating"
            : (state) => state.state === "heat";
        const isCooling =
          domain === "climate" && hasHvacAction
            ? (state) => state.attributes.hvac_action === "cooling"
            : (state) => state.state === "cool";

        const hasHeat = states.states.some(isHeating);
        const hasCool = states.states.some(isCooling);
        // We differentiate between thermostats that have a target temperature
        // range versus ones that have just a target temperature

        // Using step chart by step-before so manually interpolation not needed.
        const hasTargetRange = states.states.some(
          (state) =>
            state.attributes &&
            state.attributes.target_temp_high !==
              state.attributes.target_temp_low
        );

        addColumn(name + " current temperature", true);
        if (hasHeat) {
          addColumn(name + " heating", true, true);
          // The "heating" series uses steppedArea to shade the area below the current
          // temperature when the thermostat is calling for heat.
        }
        if (hasCool) {
          addColumn(name + " cooling", true, true);
          // The "cooling" series uses steppedArea to shade the area below the current
          // temperature when the thermostat is calling for heat.
        }

        if (hasTargetRange) {
          addColumn(name + " target temperature high", true);
          addColumn(name + " target temperature low", true);
        } else {
          addColumn(name + " target temperature", true);
        }

        states.states.forEach((state) => {
          if (!state.attributes) return;
          const curTemp = safeParseFloat(state.attributes.current_temperature);
          const series = [curTemp];
          if (hasHeat) {
            series.push(isHeating(state) ? curTemp : null);
          }
          if (hasCool) {
            series.push(isCooling(state) ? curTemp : null);
          }
          if (hasTargetRange) {
            const targetHigh = safeParseFloat(
              state.attributes.target_temp_high
            );
            const targetLow = safeParseFloat(state.attributes.target_temp_low);
            series.push(targetHigh, targetLow);
            pushData(new Date(state.last_changed), series);
          } else {
            const target = safeParseFloat(state.attributes.temperature);
            series.push(target);
            pushData(new Date(state.last_changed), series);
          }
        });
      } else {
        // Only disable interpolation for sensors
        const isStep = domain === "sensor";
        addColumn(name, isStep);

        let lastValue = null;
        let lastDate = null;
        let lastNullDate = null;

        // Process chart data.
        // When state is `unknown`, calculate the value and break the line.
        states.states.forEach((state) => {
          const value = safeParseFloat(state.state);
          const date = new Date(state.last_changed);
          if (value !== null && lastNullDate !== null) {
            const dateTime = date.getTime();
            const lastNullDateTime = lastNullDate.getTime();
            const lastDateTime = lastDate.getTime();
            const tmpValue =
              (value - lastValue) *
                ((lastNullDateTime - lastDateTime) /
                  (dateTime - lastDateTime)) +
              lastValue;
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
          } else if (
            value === null &&
            lastNullDate === null &&
            lastValue !== null
          ) {
            lastNullDate = date;
          }
        });
      }

      // Add an entry for final values
      pushData(endTime, prevValues, false);

      // Concat two arrays
      Array.prototype.push.apply(datasets, data);
    });

    const formatTooltipTitle = (items, data) => {
      const item = items[0];
      const date = data.datasets[item.datasetIndex].data[item.index].x;

      return Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(date, this.hass.language);
    };

    const chartOptions = {
      type: "line",
      unit: unit,
      legend: !this.isSingleDevice,
      options: {
        scales: {
          xAxes: [
            {
              type: "time",
              ticks: {
                major: {
                  fontStyle: "bold",
                },
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                maxTicksLimit: 7,
              },
            },
          ],
        },
        tooltips: {
          mode: "neareach",
          callbacks: {
            title: formatTooltipTitle,
          },
        },
        hover: {
          mode: "neareach",
        },
        layout: {
          padding: {
            top: 5,
          },
        },
        elements: {
          line: {
            tension: 0.1,
            pointRadius: 0,
            borderWidth: 1.5,
          },
          point: {
            hitRadius: 5,
          },
        },
        plugins: {
          filler: {
            propagate: true,
          },
        },
      },
      data: {
        labels: [],
        datasets: datasets,
      },
    };
    this.chartData = chartOptions;
  }
}
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











class StateHistoryChartTimeline extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        :host([rendered]) {
          opacity: 1;
        }

        ha-chart-base {
          direction: ltr;
        }
      </style>
      <ha-chart-base
        data="[[chartData]]"
        rendered="{{rendered}}"
        rtl="{{rtl}}"
      ></ha-chart-base>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },
      chartData: Object,
      data: {
        type: Object,
        observer: "dataChanged",
      },
      names: Object,
      noSingle: Boolean,
      endTime: Date,
      rendered: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },
      rtl: {
        reflectToAttribute: true,
        computed: "_computeRTL(hass)",
      },
    };
  }

  static get observers() {
    return ["dataChanged(data, endTime, localize, language)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.drawChart();
  }

  dataChanged() {
    this.drawChart();
  }

  drawChart() {
    const staticColors = {
      on: 1,
      off: 0,
      unavailable: "#a0a0a0",
      unknown: "#606060",
      idle: 2,
    };
    let stateHistory = this.data;

    if (!this._isAttached) {
      return;
    }

    if (!stateHistory) {
      stateHistory = [];
    }

    const startTime = new Date(
      stateHistory.reduce(
        (minTime, stateInfo) =>
          Math.min(minTime, new Date(stateInfo.data[0].last_changed)),
        new Date()
      )
    );

    // end time is Math.max(startTime, last_event)
    let endTime =
      this.endTime ||
      new Date(
        stateHistory.reduce(
          (maxTime, stateInfo) =>
            Math.max(
              maxTime,
              new Date(stateInfo.data[stateInfo.data.length - 1].last_changed)
            ),
          startTime
        )
      );

    if (endTime > new Date()) {
      endTime = new Date();
    }

    const labels = [];
    const datasets = [];
    // stateHistory is a list of lists of sorted state objects
    const names = this.names || {};
    stateHistory.forEach((stateInfo) => {
      let newLastChanged;
      let prevState = null;
      let locState = null;
      let prevLastChanged = startTime;
      const entityDisplay = names[stateInfo.entity_id] || stateInfo.name;

      const dataRow = [];
      stateInfo.data.forEach((state) => {
        let newState = state.state;
        const timeStamp = new Date(state.last_changed);
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
      datasets.push({ data: dataRow });
      labels.push(entityDisplay);
    });

    const formatTooltipLabel = (item, data) => {
      const values = data.datasets[item.datasetIndex].data[item.index];

      const start = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(values[0], this.hass.language);
      const end = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(values[1], this.hass.language);
      const state = values[2];

      return [state, start, end];
    };

    const chartOptions = {
      type: "timeline",
      options: {
        tooltips: {
          callbacks: {
            label: formatTooltipLabel,
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                major: {
                  fontStyle: "bold",
                },
              },
            },
          ],
          yAxes: [
            {
              afterSetDimensions: (yaxe) => {
                yaxe.maxWidth = yaxe.chart.width * 0.18;
              },
              position: this._computeRTL ? "right" : "left",
            },
          ],
        },
      },
      data: {
        labels: labels,
        datasets: datasets,
      },
      colors: {
        staticColors: staticColors,
        staticColorIndex: 3,
      },
    };
    this.chartData = chartOptions;
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__["computeRTL"])(hass);
  }
}
customElements.define(
  "state-history-chart-timeline",
  StateHistoryChartTimeline
);


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









class StateHistoryCharts extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          /* height of single timeline chart = 58px */
          min-height: 58px;
        }
        .info {
          text-align: center;
          line-height: 58px;
          color: var(--secondary-text-color);
        }
      </style>
      <template
        is="dom-if"
        class="info"
        if="[[_computeIsLoading(isLoadingData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.loading_history')]]
        </div>
      </template>

      <template
        is="dom-if"
        class="info"
        if="[[_computeIsEmpty(isLoadingData, historyData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.no_history_found')]]
        </div>
      </template>

      <template is="dom-if" if="[[historyData.timeline.length]]">
        <state-history-chart-timeline
          hass="[[hass]]"
          data="[[historyData.timeline]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          no-single="[[noSingle]]"
          names="[[names]]"
        ></state-history-chart-timeline>
      </template>

      <template is="dom-repeat" items="[[historyData.line]]">
        <state-history-chart-line
          hass="[[hass]]"
          unit="[[item.unit]]"
          data="[[item.data]]"
          identifier="[[item.identifier]]"
          is-single-device="[[_computeIsSingleLineChart(item.data, noSingle)]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          names="[[names]]"
        ></state-history-chart-line>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      historyData: {
        type: Object,
        value: null,
      },
      names: Object,

      isLoadingData: Boolean,

      endTime: {
        type: Object,
      },

      upToNow: Boolean,
      noSingle: Boolean,
    };
  }

  _computeIsSingleLineChart(data, noSingle) {
    return !noSingle && data && data.length === 1;
  }

  _computeIsEmpty(isLoadingData, historyData) {
    const historyDataEmpty =
      !historyData ||
      !historyData.timeline ||
      !historyData.line ||
      (historyData.timeline.length === 0 && historyData.line.length === 0);
    return !isLoadingData && historyDataEmpty;
  }

  _computeIsLoading(isLoading) {
    return isLoading && !this.historyData;
  }

  _computeEndTime(endTime, upToNow) {
    // We don't really care about the value of historyData, but if it change we want to update
    // endTime.
    return upToNow ? new Date() : endTime;
  }
}
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
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./src/data/history.ts");

const RECENT_THRESHOLD = 60000; // 1 minute
const RECENT_CACHE = {};
const stateHistoryCache = {};
// Cached type 1 unction. Without cache config.
const getRecent = (hass, entityId, startTime, endTime, localize, language) => {
    const cacheKey = entityId;
    const cache = RECENT_CACHE[cacheKey];
    if (cache &&
        Date.now() - cache.created < RECENT_THRESHOLD &&
        cache.language === language) {
        return cache.data;
    }
    const prom = Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(hass, entityId, startTime, endTime).then((stateHistory) => Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(hass, stateHistory, localize, language), (err) => {
        delete RECENT_CACHE[entityId];
        throw err;
    });
    RECENT_CACHE[cacheKey] = {
        created: Date.now(),
        language,
        data: prom,
    };
    return prom;
};
// Cache type 2 functionality
function getEmptyCache(language, startTime, endTime) {
    return {
        prom: Promise.resolve({ line: [], timeline: [] }),
        language,
        startTime,
        endTime,
        data: { line: [], timeline: [] },
    };
}
const getRecentWithCache = (hass, entityId, cacheConfig, localize, language) => {
    const cacheKey = cacheConfig.cacheKey;
    const endTime = new Date();
    const startTime = new Date(endTime);
    startTime.setHours(startTime.getHours() - cacheConfig.hoursToShow);
    let toFetchStartTime = startTime;
    let appendingToCache = false;
    let cache = stateHistoryCache[cacheKey];
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
    const curCacheProm = cache.prom;
    const genProm = async () => {
        let fetchedHistory;
        try {
            const results = await Promise.all([
                curCacheProm,
                Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(hass, entityId, toFetchStartTime, endTime, appendingToCache),
            ]);
            fetchedHistory = results[1];
        }
        catch (err) {
            delete stateHistoryCache[cacheKey];
            throw err;
        }
        const stateHistory = Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(hass, fetchedHistory, localize, language);
        if (appendingToCache) {
            mergeLine(stateHistory.line, cache.data.line);
            mergeTimeline(stateHistory.timeline, cache.data.timeline);
            pruneStartTime(startTime, cache.data);
        }
        else {
            cache.data = stateHistory;
        }
        return cache.data;
    };
    cache.prom = genProm();
    cache.startTime = startTime;
    cache.endTime = endTime;
    return cache.prom;
};
const mergeLine = (historyLines, cacheLines) => {
    historyLines.forEach((line) => {
        const unit = line.unit;
        const oldLine = cacheLines.find((cacheLine) => cacheLine.unit === unit);
        if (oldLine) {
            line.data.forEach((entity) => {
                const oldEntity = oldLine.data.find((cacheEntity) => entity.entity_id === cacheEntity.entity_id);
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
const mergeTimeline = (historyTimelines, cacheTimelines) => {
    historyTimelines.forEach((timeline) => {
        const oldTimeline = cacheTimelines.find((cacheTimeline) => cacheTimeline.entity_id === timeline.entity_id);
        if (oldTimeline) {
            oldTimeline.data = oldTimeline.data.concat(timeline.data);
        }
        else {
            cacheTimelines.push(timeline);
        }
    });
};
const pruneArray = (originalStartTime, arr) => {
    if (arr.length === 0) {
        return arr;
    }
    const changedAfterStartTime = arr.findIndex((state) => new Date(state.last_changed) > originalStartTime);
    if (changedAfterStartTime === 0) {
        // If all changes happened after originalStartTime then we are done.
        return arr;
    }
    // If all changes happened at or before originalStartTime. Use last index.
    const updateIndex = changedAfterStartTime === -1 ? arr.length - 1 : changedAfterStartTime - 1;
    arr[updateIndex].last_changed = originalStartTime;
    return arr.slice(updateIndex);
};
const pruneStartTime = (originalStartTime, cacheData) => {
    cacheData.line.forEach((line) => {
        line.data.forEach((entity) => {
            entity.states = pruneArray(originalStartTime, entity.states);
        });
    });
    cacheData.timeline.forEach((timeline) => {
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









/*
 * @appliesMixin LocalizeMixin
 */
class HaStateHistoryData extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get properties() {
    return {
      hass: {
        type: Object,
        observer: "hassChanged",
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
        notify: true,
      },

      data: {
        type: Object,
        value: null,
        readOnly: true,
        notify: true,
      },
    };
  }

  static get observers() {
    return [
      "filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)",
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.filterChangedDebouncer(
      this.filterType,
      this.entityId,
      this.startTime,
      this.endTime,
      this.cacheConfig,
      this.localize
    );
  }

  disconnectedCallback() {
    if (this._refreshTimeoutId) {
      window.clearInterval(this._refreshTimeoutId);
      this._refreshTimeoutId = null;
    }
    super.disconnectedCallback();
  }

  hassChanged(newHass, oldHass) {
    if (!oldHass && !this._madeFirstCall) {
      this.filterChangedDebouncer(
        this.filterType,
        this.entityId,
        this.startTime,
        this.endTime,
        this.cacheConfig,
        this.localize
      );
    }
  }

  filterChangedDebouncer(...args) {
    this._debounceFilterChanged = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(
      this._debounceFilterChanged,
      _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(0),
      () => {
        this.filterChanged(...args);
      }
    );
  }

  filterChanged(
    filterType,
    entityId,
    startTime,
    endTime,
    cacheConfig,
    localize
  ) {
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
    const language = this.hass.language;
    let data;

    if (filterType === "date") {
      if (!startTime || !endTime) return;

      data = Object(_history__WEBPACK_IMPORTED_MODULE_4__["fetchDate"])(this.hass, startTime, endTime).then((dateHistory) =>
        Object(_history__WEBPACK_IMPORTED_MODULE_4__["computeHistory"])(this.hass, dateHistory, localize, language)
      );
    } else if (filterType === "recent-entity") {
      if (!entityId) return;
      if (cacheConfig) {
        data = this.getRecentWithCacheRefresh(
          entityId,
          cacheConfig,
          localize,
          language
        );
      } else {
        data = Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecent"])(
          this.hass,
          entityId,
          startTime,
          endTime,
          localize,
          language
        );
      }
    } else {
      return;
    }
    this._setIsLoading(true);

    data.then((stateHistory) => {
      this._setData(stateHistory);
      this._setIsLoading(false);
    });
  }

  getRecentWithCacheRefresh(entityId, cacheConfig, localize, language) {
    if (this._refreshTimeoutId) {
      window.clearInterval(this._refreshTimeoutId);
      this._refreshTimeoutId = null;
    }
    if (cacheConfig.refresh) {
      this._refreshTimeoutId = window.setInterval(() => {
        Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"])(
          this.hass,
          entityId,
          cacheConfig,
          localize,
          language
        ).then((stateHistory) => {
          this._setData({ ...stateHistory });
        });
      }, cacheConfig.refresh * 1000);
    }
    return Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"])(
      this.hass,
      entityId,
      cacheConfig,
      localize,
      language
    );
  }
}
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



const DOMAINS_USE_LAST_UPDATED = ["climate", "water_heater"];
const LINE_ATTRIBUTES_TO_KEEP = [
    "temperature",
    "current_temperature",
    "target_temp_low",
    "target_temp_high",
    "hvac_action",
];
const fetchRecent = (hass, entityId, startTime, endTime, skipInitialState = false) => {
    let url = "history/period";
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
const fetchDate = (hass, startTime, endTime) => {
    return hass.callApi("GET", `history/period/${startTime.toISOString()}?end_time=${endTime.toISOString()}`);
};
const equalState = (obj1, obj2) => obj1.state === obj2.state &&
    // They either both have an attributes object or not
    (!obj1.attributes ||
        LINE_ATTRIBUTES_TO_KEEP.every((attr) => obj1.attributes[attr] === obj2.attributes[attr]));
const processTimelineEntity = (localize, language, states) => {
    const data = [];
    for (const state of states) {
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
        data,
    };
};
const processLineChartEntities = (unit, entities) => {
    const data = [];
    for (const states of entities) {
        const last = states[states.length - 1];
        const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(last);
        const processedStates = [];
        for (const state of states) {
            let processedState;
            if (DOMAINS_USE_LAST_UPDATED.includes(domain)) {
                processedState = {
                    state: state.state,
                    last_changed: state.last_updated,
                    attributes: {},
                };
                for (const attr of LINE_ATTRIBUTES_TO_KEEP) {
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
            domain,
            name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(last),
            entity_id: last.entity_id,
            states: processedStates,
        });
    }
    return {
        unit,
        identifier: entities.map((states) => states[0].entity_id).join(""),
        data,
    };
};
const computeHistory = (hass, stateHistory, localize, language) => {
    const lineChartDevices = {};
    const timelineDevices = [];
    if (!stateHistory) {
        return { line: [], timeline: [] };
    }
    stateHistory.forEach((stateInfo) => {
        if (stateInfo.length === 0) {
            return;
        }
        const stateWithUnit = stateInfo.find((state) => "unit_of_measurement" in state.attributes);
        let unit;
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
    const unitStates = Object.keys(lineChartDevices).map((unit) => processLineChartEntities(unit, lineChartDevices[unit]));
    return { line: unitStates, timeline: timelineDevices };
};


/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends superClass {
      static get properties() {
        return {
          hass: Object,

          /**
           * Translates a string to the current `language`. Any parameters to the
           * string should be passed in order, as follows:
           * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
           */
          localize: {
            type: Function,
            computed: "__computeLocalize(hass.localize)",
          },
        };
      }

      __computeLocalize(localize) {
        return localize;
      }
    }
));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1oaXN0b3J5fnBhbmVsLWtpb3NrfnBhbmVsLWxvdmVsYWNlfnBhbmVsLXN0YXRlcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1jaGFydC1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0YXRlLWhpc3RvcnktY2hhcnQtbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0YXRlLWhpc3RvcnktY2hhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NhY2hlZC1oaXN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2hhLXN0YXRlLWhpc3RvcnktZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9oaXN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCAodG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZURhdGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwibWVkaXVtRGF0ZVwiKSk7XG4iLCJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCAodG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJoYURhdGVUaW1lXCIpKTtcbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVUaW1lU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJzaG9ydFRpbWVcIikpO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCBmb3JtYXREYXRlIGZyb20gXCIuLi9kYXRldGltZS9mb3JtYXRfZGF0ZVwiO1xuaW1wb3J0IGZvcm1hdFRpbWUgZnJvbSBcIi4uL2RhdGV0aW1lL2Zvcm1hdF90aW1lXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVEaXNwbGF5ID0gKFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKTogc3RyaW5nID0+IHtcbiAgbGV0IGRpc3BsYXk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcblxuICBpZiAoZG9tYWluID09PSBcImJpbmFyeV9zZW5zb3JcIikge1xuICAgIC8vIFRyeSBkZXZpY2UgY2xhc3MgdHJhbnNsYXRpb24sIHRoZW4gZGVmYXVsdCBiaW5hcnkgc2Vuc29yIHRyYW5zbGF0aW9uXG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgICBkaXNwbGF5ID0gbG9jYWxpemUoXG4gICAgICAgIGBzdGF0ZS4ke2RvbWFpbn0uJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZV9jbGFzc30uJHtzdGF0ZU9iai5zdGF0ZX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghZGlzcGxheSkge1xuICAgICAgZGlzcGxheSA9IGxvY2FsaXplKGBzdGF0ZS4ke2RvbWFpbn0uZGVmYXVsdC4ke3N0YXRlT2JqLnN0YXRlfWApO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQgJiZcbiAgICAhW1widW5rbm93blwiLCBcInVuYXZhaWxhYmxlXCJdLmluY2x1ZGVzKHN0YXRlT2JqLnN0YXRlKVxuICApIHtcbiAgICBkaXNwbGF5ID0gc3RhdGVPYmouc3RhdGUgKyBcIiBcIiArIHN0YXRlT2JqLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudDtcbiAgfSBlbHNlIGlmIChkb21haW4gPT09IFwiaW5wdXRfZGF0ZXRpbWVcIikge1xuICAgIGxldCBkYXRlOiBEYXRlO1xuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5oYXNfdGltZSkge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggLSAxLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRheVxuICAgICAgKTtcbiAgICAgIGRpc3BsYXkgPSBmb3JtYXREYXRlKGRhdGUsIGxhbmd1YWdlKTtcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAvLyBEdWUgdG8gYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc5NzU0OFxuICAgICAgICAvLyBkb24ndCB1c2UgYXJ0aWZpY2lhbCAxOTcwIHllYXIuXG4gICAgICAgIG5vdy5nZXRGdWxsWWVhcigpLFxuICAgICAgICBub3cuZ2V0TW9udGgoKSxcbiAgICAgICAgbm93LmdldERheSgpLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubWludXRlXG4gICAgICApO1xuICAgICAgZGlzcGxheSA9IGZvcm1hdFRpbWUoZGF0ZSwgbGFuZ3VhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMueWVhcixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5tb250aCAtIDEsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5LFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubWludXRlXG4gICAgICApO1xuICAgICAgZGlzcGxheSA9IGZvcm1hdERhdGVUaW1lKGRhdGUsIGxhbmd1YWdlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZG9tYWluID09PSBcInp3YXZlXCIpIHtcbiAgICBpZiAoW1wiaW5pdGlhbGl6aW5nXCIsIFwiZGVhZFwiXS5pbmNsdWRlcyhzdGF0ZU9iai5zdGF0ZSkpIHtcbiAgICAgIGRpc3BsYXkgPSBsb2NhbGl6ZShcbiAgICAgICAgYHN0YXRlLnp3YXZlLnF1ZXJ5X3N0YWdlLiR7c3RhdGVPYmouc3RhdGV9YCxcbiAgICAgICAgXCJxdWVyeV9zdGFnZVwiLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnF1ZXJ5X3N0YWdlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5ID0gbG9jYWxpemUoYHN0YXRlLnp3YXZlLmRlZmF1bHQuJHtzdGF0ZU9iai5zdGF0ZX1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheSA9IGxvY2FsaXplKGBzdGF0ZS4ke2RvbWFpbn0uJHtzdGF0ZU9iai5zdGF0ZX1gKTtcbiAgfVxuXG4gIC8vIEZhbGwgYmFjayB0byBkZWZhdWx0LCBjb21wb25lbnQgYmFja2VuZCB0cmFuc2xhdGlvbiwgb3IgcmF3IHN0YXRlIGlmIG5vdGhpbmcgZWxzZSBtYXRjaGVzLlxuICBpZiAoIWRpc3BsYXkpIHtcbiAgICBkaXNwbGF5ID1cbiAgICAgIGxvY2FsaXplKGBzdGF0ZS5kZWZhdWx0LiR7c3RhdGVPYmouc3RhdGV9YCkgfHxcbiAgICAgIGxvY2FsaXplKGBjb21wb25lbnQuJHtkb21haW59LnN0YXRlLiR7c3RhdGVPYmouc3RhdGV9YCkgfHxcbiAgICAgIHN0YXRlT2JqLnN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIGRpc3BsYXk7XG59O1xuIiwiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IElyb25SZXNpemFibGVCZWhhdmlvciB9IGZyb20gXCJAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IERlYm91bmNlciB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgdGltZU91dCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luY1wiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5cbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyogZ2xvYmFsIENoYXJ0IG1vbWVudCBDb2xvciAqL1xuXG5sZXQgc2NyaXB0c0xvYWRlZCA9IG51bGw7XG5cbmNsYXNzIEhhQ2hhcnRCYXNlIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoXG4gIFtJcm9uUmVzaXphYmxlQmVoYXZpb3JdLFxuICBQb2x5bWVyRWxlbWVudFxuKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRIZWFkZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAwIDAgMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0SGVhZGVyID4gZGl2IHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydEhlYWRlciA+IGRpdi5jaGFydFRpdGxlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgIGZsZXg6IDAgMCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMzAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydEhlYWRlciA+IGRpdi5jaGFydExlZ2VuZCB7XG4gICAgICAgICAgZmxleDogMSAxO1xuICAgICAgICAgIG1pbi13aWR0aDogNzAlO1xuICAgICAgICB9XG4gICAgICAgIDpyb290IHtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydFRvb2x0aXAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoODAsIDgwLCA4MCwgMC45KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEycHgpO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5jaGFydFRvb2x0aXAge1xuICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydExlZ2VuZCB1bCxcbiAgICAgICAgLmNoYXJ0VG9vbHRpcCB1bCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMHB4O1xuICAgICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydFRvb2x0aXAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRUb29sdGlwIC50aXRsZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0OSU7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIGxpOm50aC1jaGlsZChvZGQpOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgLyogTWFrZSBsYXN0IGl0ZW0gdGFrZSBmdWxsIHdpZHRoIGlmIGl0IGlzIG9kZC1udW1iZXJlZC4gKi9cbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIGxpW2RhdGEtaGlkZGVuXSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIGVtLFxuICAgICAgICAuY2hhcnRUb29sdGlwIGVtIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbcnRsXSkgLmNoYXJ0VG9vbHRpcCBlbSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbdW5pdF1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydEhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydFRpdGxlXCI+W1t1bml0XV08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnRMZWdlbmRcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1ttZXRhc11dXCI+XG4gICAgICAgICAgICAgICAgPGxpIG9uLWNsaWNrPVwiX2xlZ2VuZENsaWNrXCIgZGF0YS1oaWRkZW4kPVwiW1tpdGVtLmhpZGRlbl1dXCI+XG4gICAgICAgICAgICAgICAgICA8ZW0gc3R5bGUkPVwiYmFja2dyb3VuZC1jb2xvcjpbW2l0ZW0uYmdDb2xvcl1dXCI+PC9lbT5cbiAgICAgICAgICAgICAgICAgIFtbaXRlbS5sYWJlbF1dXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxkaXYgaWQ9XCJjaGFydFRhcmdldFwiIHN0eWxlPVwiaGVpZ2h0OjQwcHg7IHdpZHRoOjEwMCVcIj5cbiAgICAgICAgPGNhbnZhcyBpZD1cImNoYXJ0Q2FudmFzXCI+PC9jYW52YXM+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcyQ9XCJjaGFydFRvb2x0aXAgW1t0b29sdGlwLnlBbGlnbl1dXCJcbiAgICAgICAgICBzdHlsZSQ9XCJvcGFjaXR5OltbdG9vbHRpcC5vcGFjaXR5XV07IHRvcDpbW3Rvb2x0aXAudG9wXV07IGxlZnQ6W1t0b29sdGlwLmxlZnRdXTsgcGFkZGluZzpbW3Rvb2x0aXAueVBhZGRpbmddXXB4IFtbdG9vbHRpcC54UGFkZGluZ11dcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+W1t0b29sdGlwLnRpdGxlXV08L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3Rvb2x0aXAubGluZXNdXVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxlbSBzdHlsZSQ9XCJiYWNrZ3JvdW5kLWNvbG9yOltbaXRlbS5iZ0NvbG9yXV1cIj48L2VtXG4gICAgICAgICAgICAgICAgICA+W1tpdGVtLnRleHRdXVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBnZXQgY2hhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXJ0O1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBPYmplY3QsXG4gICAgICBpZGVudGlmaWVyOiBTdHJpbmcsXG4gICAgICByZW5kZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICB9LFxuICAgICAgbWV0YXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6ICgpID0+ICh7XG4gICAgICAgICAgb3BhY2l0eTogXCIwXCIsXG4gICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgICB4UGFkZGluZzogXCI1XCIsXG4gICAgICAgICAgeVBhZGRpbmc6IFwiM1wiLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgICB1bml0OiBPYmplY3QsXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcIm9uUHJvcHNDaGFuZ2UoZGF0YSlcIl07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMub25Qcm9wc0NoYW5nZSgpO1xuICAgIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgICB0aGlzLl9kZWJvdW5jZXIsXG4gICAgICAgIHRpbWVPdXQuYWZ0ZXIoMTApLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzQXR0YWNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy4kLmNoYXJ0VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaXJvbi1yZXNpemVcIiwgdGhpcy5fcmVzaXplTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGlmIChzY3JpcHRzTG9hZGVkID09PSBudWxsKSB7XG4gICAgICBzY3JpcHRzTG9hZGVkID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibG9hZF9jaGFydFwiICovIFwiLi4vLi4vcmVzb3VyY2VzL2hhLWNoYXJ0LXNjcmlwdHMuanNcIik7XG4gICAgfVxuICAgIHNjcmlwdHNMb2FkZWQudGhlbigoQ2hhcnRNb2R1bGUpID0+IHtcbiAgICAgIHRoaXMuQ2hhcnRDbGFzcyA9IENoYXJ0TW9kdWxlLmRlZmF1bHQ7XG4gICAgICB0aGlzLm9uUHJvcHNDaGFuZ2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLiQuY2hhcnRUYXJnZXQpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlyb24tcmVzaXplXCIsIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyKTtcblxuICAgIGlmICh0aGlzLl9yZXNpemVUaW1lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX3Jlc2l6ZVRpbWVyKTtcbiAgICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIG9uUHJvcHNDaGFuZ2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0F0dGFjaGVkIHx8ICF0aGlzLkNoYXJ0Q2xhc3MgfHwgIXRoaXMuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgX2N1c3RvbVRvb2x0aXBzKHRvb2x0aXApIHtcbiAgICAvLyBIaWRlIGlmIG5vIHRvb2x0aXBcbiAgICBpZiAodG9vbHRpcC5vcGFjaXR5ID09PSAwKSB7XG4gICAgICB0aGlzLnNldChbXCJ0b29sdGlwXCIsIFwib3BhY2l0eVwiXSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNldCBjYXJldCBQb3NpdGlvblxuICAgIGlmICh0b29sdGlwLnlBbGlnbikge1xuICAgICAgdGhpcy5zZXQoW1widG9vbHRpcFwiLCBcInlBbGlnblwiXSwgdG9vbHRpcC55QWxpZ24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldChbXCJ0b29sdGlwXCIsIFwieUFsaWduXCJdLCBcIm5vLXRyYW5zZm9ybVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IHRvb2x0aXAudGl0bGUgPyB0b29sdGlwLnRpdGxlWzBdIHx8IFwiXCIgOiBcIlwiO1xuICAgIHRoaXMuc2V0KFtcInRvb2x0aXBcIiwgXCJ0aXRsZVwiXSwgdGl0bGUpO1xuXG4gICAgY29uc3QgYm9keUxpbmVzID0gdG9vbHRpcC5ib2R5Lm1hcCgobikgPT4gbi5saW5lcyk7XG5cbiAgICAvLyBTZXQgVGV4dFxuICAgIGlmICh0b29sdGlwLmJvZHkpIHtcbiAgICAgIHRoaXMuc2V0KFxuICAgICAgICBbXCJ0b29sdGlwXCIsIFwibGluZXNcIl0sXG4gICAgICAgIGJvZHlMaW5lcy5tYXAoKGJvZHksIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2xvcnMgPSB0b29sdGlwLmxhYmVsQ29sb3JzW2ldO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcjogY29sb3JzLmJvcmRlckNvbG9yLFxuICAgICAgICAgICAgYmdDb2xvcjogY29sb3JzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgIHRleHQ6IGJvZHkuam9pbihcIlxcblwiKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50V2lkdGggPSB0aGlzLiQuY2hhcnRUYXJnZXQuY2xpZW50V2lkdGg7XG4gICAgbGV0IHBvc2l0aW9uWCA9IHRvb2x0aXAuY2FyZXRYO1xuICAgIGNvbnN0IHBvc2l0aW9uWSA9IHRoaXMuX2NoYXJ0LmNhbnZhcy5vZmZzZXRUb3AgKyB0b29sdGlwLmNhcmV0WTtcbiAgICBpZiAodG9vbHRpcC5jYXJldFggKyAxMDAgPiBwYXJlbnRXaWR0aCkge1xuICAgICAgcG9zaXRpb25YID0gcGFyZW50V2lkdGggLSAxMDA7XG4gICAgfSBlbHNlIGlmICh0b29sdGlwLmNhcmV0WCA8IDEwMCkge1xuICAgICAgcG9zaXRpb25YID0gMTAwO1xuICAgIH1cbiAgICBwb3NpdGlvblggKz0gdGhpcy5fY2hhcnQuY2FudmFzLm9mZnNldExlZnQ7XG4gICAgLy8gRGlzcGxheSwgcG9zaXRpb24sIGFuZCBzZXQgc3R5bGVzIGZvciBmb250XG4gICAgdGhpcy50b29sdGlwID0ge1xuICAgICAgLi4udGhpcy50b29sdGlwLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGxlZnQ6IGAke3Bvc2l0aW9uWH1weGAsXG4gICAgICB0b3A6IGAke3Bvc2l0aW9uWX1weGAsXG4gICAgfTtcbiAgfVxuXG4gIF9sZWdlbmRDbGljayhldmVudCkge1xuICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcbiAgICB3aGlsZSAodGFyZ2V0Lm5vZGVOYW1lICE9PSBcIkxJXCIpIHtcbiAgICAgIC8vIHVzZXIgY2xpY2tlZCBjaGlsZCwgZmluZCBwYXJlbnQgTElcbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGV2ZW50Lm1vZGVsLml0ZW1zSW5kZXg7XG5cbiAgICBjb25zdCBtZXRhID0gdGhpcy5fY2hhcnQuZ2V0RGF0YXNldE1ldGEoaW5kZXgpO1xuICAgIG1ldGEuaGlkZGVuID1cbiAgICAgIG1ldGEuaGlkZGVuID09PSBudWxsID8gIXRoaXMuX2NoYXJ0LmRhdGEuZGF0YXNldHNbaW5kZXhdLmhpZGRlbiA6IG51bGw7XG4gICAgdGhpcy5zZXQoXG4gICAgICBbXCJtZXRhc1wiLCBpbmRleCwgXCJoaWRkZW5cIl0sXG4gICAgICB0aGlzLl9jaGFydC5pc0RhdGFzZXRWaXNpYmxlKGluZGV4KSA/IG51bGwgOiBcImhpZGRlblwiXG4gICAgKTtcbiAgICB0aGlzLl9jaGFydC51cGRhdGUoKTtcbiAgfVxuXG4gIF9kcmF3TGVnZW5kKCkge1xuICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5fY2hhcnQ7XG4gICAgLy8gTmV3IGRhdGEgZm9yIG9sZCBncmFwaC4gS2VlcCBtZXRhZGF0YS5cbiAgICBjb25zdCBwcmVzZXJ2ZVZpc2liaWxpdHkgPVxuICAgICAgdGhpcy5fb2xkSWRlbnRpZmllciAmJiB0aGlzLmlkZW50aWZpZXIgPT09IHRoaXMuX29sZElkZW50aWZpZXI7XG4gICAgdGhpcy5fb2xkSWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcjtcbiAgICB0aGlzLnNldChcbiAgICAgIFwibWV0YXNcIixcbiAgICAgIHRoaXMuX2NoYXJ0LmRhdGEuZGF0YXNldHMubWFwKCh4LCBpKSA9PiAoe1xuICAgICAgICBsYWJlbDogeC5sYWJlbCxcbiAgICAgICAgY29sb3I6IHguY29sb3IsXG4gICAgICAgIGJnQ29sb3I6IHguYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBoaWRkZW46XG4gICAgICAgICAgcHJlc2VydmVWaXNpYmlsaXR5ICYmIGkgPCB0aGlzLm1ldGFzLmxlbmd0aFxuICAgICAgICAgICAgPyB0aGlzLm1ldGFzW2ldLmhpZGRlblxuICAgICAgICAgICAgOiAhY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShpKSxcbiAgICAgIH0pKVxuICAgICk7XG4gICAgbGV0IHVwZGF0ZU5lZWRlZCA9IGZhbHNlO1xuICAgIGlmIChwcmVzZXJ2ZVZpc2liaWxpdHkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtZXRhID0gY2hhcnQuZ2V0RGF0YXNldE1ldGEoaSk7XG4gICAgICAgIGlmICghIW1ldGEuaGlkZGVuICE9PSAhIXRoaXMubWV0YXNbaV0uaGlkZGVuKSB1cGRhdGVOZWVkZWQgPSB0cnVlO1xuICAgICAgICBtZXRhLmhpZGRlbiA9IHRoaXMubWV0YXNbaV0uaGlkZGVuID8gdHJ1ZSA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh1cGRhdGVOZWVkZWQpIHtcbiAgICAgIGNoYXJ0LnVwZGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnVuaXQgPSB0aGlzLmRhdGEudW5pdDtcbiAgfVxuXG4gIF9mb3JtYXRUaWNrVmFsdWUodmFsdWUsIGluZGV4LCB2YWx1ZXMpIHtcbiAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWVzW2luZGV4XS52YWx1ZSk7XG4gICAgcmV0dXJuIGZvcm1hdFRpbWUoZGF0ZSk7XG4gIH1cblxuICBkcmF3Q2hhcnQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5kYXRhO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuJC5jaGFydENhbnZhcztcblxuICAgIGlmICgoIWRhdGEuZGF0YXNldHMgfHwgIWRhdGEuZGF0YXNldHMubGVuZ3RoKSAmJiAhdGhpcy5fY2hhcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS50eXBlICE9PSBcInRpbWVsaW5lXCIgJiYgZGF0YS5kYXRhc2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjbnQgPSBkYXRhLmRhdGFzZXRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0Q29sb3JMaXN0KGNudCk7XG4gICAgICBmb3IgKGxldCBsb29wSSA9IDA7IGxvb3BJIDwgY250OyBsb29wSSsrKSB7XG4gICAgICAgIGRhdGEuZGF0YXNldHNbbG9vcEldLmJvcmRlckNvbG9yID0gY29sb3JzW2xvb3BJXS5yZ2JTdHJpbmcoKTtcbiAgICAgICAgZGF0YS5kYXRhc2V0c1tsb29wSV0uYmFja2dyb3VuZENvbG9yID0gY29sb3JzW2xvb3BJXVxuICAgICAgICAgIC5hbHBoYSgwLjYpXG4gICAgICAgICAgLnJnYmFTdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMuX2N1c3RvbVRvb2x0aXBzKHsgb3BhY2l0eTogMCB9KTtcbiAgICAgIHRoaXMuX2NoYXJ0LmRhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5fY2hhcnQudXBkYXRlKHsgZHVyYXRpb246IDAgfSk7XG4gICAgICBpZiAodGhpcy5pc1RpbWVsaW5lKSB7XG4gICAgICAgIHRoaXMuX2NoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcy5kaXNwbGF5ID0gZGF0YS5sZW5ndGggPiAxO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEubGVnZW5kID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX2RyYXdMZWdlbmQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFkYXRhLmRhdGFzZXRzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2N1c3RvbVRvb2x0aXBzKHsgb3BhY2l0eTogMCB9KTtcbiAgICAgIGNvbnN0IHBsdWdpbnMgPSBbeyBhZnRlclJlbmRlcjogKCkgPT4gdGhpcy5fc2V0UmVuZGVyZWQodHJ1ZSkgfV07XG4gICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAwLFxuICAgICAgICB9LFxuICAgICAgICByZXNwb25zaXZlQW5pbWF0aW9uRHVyYXRpb246IDAsXG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgY3VzdG9tOiB0aGlzLl9jdXN0b21Ub29sdGlwcy5iaW5kKHRoaXMpLFxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIHNwYW5HYXBzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgIGZvbnQ6IFwiMTJweCAnUm9ib3RvJywgJ3NhbnMtc2VyaWYnXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgJ3NhbnMtc2VyaWYnXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uob3B0aW9ucywgdGhpcy5kYXRhLm9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0udGlja3MuY2FsbGJhY2sgPSB0aGlzLl9mb3JtYXRUaWNrVmFsdWU7XG4gICAgICBpZiAodGhpcy5kYXRhLnR5cGUgPT09IFwidGltZWxpbmVcIikge1xuICAgICAgICB0aGlzLnNldChcImlzVGltZWxpbmVcIiwgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuY29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLl9jb2xvckZ1bmMgPSB0aGlzLmNvbnN0cnVjdG9yLmdldENvbG9yR2VuZXJhdG9yKFxuICAgICAgICAgICAgdGhpcy5kYXRhLmNvbG9ycy5zdGF0aWNDb2xvcnMsXG4gICAgICAgICAgICB0aGlzLmRhdGEuY29sb3JzLnN0YXRpY0NvbG9ySW5kZXhcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jb2xvckZ1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9wdGlvbnMuZWxlbWVudHMuY29sb3JGdW5jdGlvbiA9IHRoaXMuX2NvbG9yRnVuYztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5kYXRhc2V0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MgPSB7IGRpc3BsYXk6IGZhbHNlIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvcHRpb25zLnNjYWxlcy55QXhlc1swXS5ncmlkTGluZXMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcyA9IHsgZGlzcGxheTogZmFsc2UgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kLmNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kLmNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiMTYwcHhcIjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNoYXJ0RGF0YSA9IHtcbiAgICAgICAgdHlwZTogdGhpcy5kYXRhLnR5cGUsXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YS5kYXRhLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBwbHVnaW5zOiBwbHVnaW5zLFxuICAgICAgfTtcbiAgICAgIC8vIEFzeW5jIHJlc2l6ZSBhZnRlciBkb20gdXBkYXRlXG4gICAgICB0aGlzLl9jaGFydCA9IG5ldyB0aGlzLkNoYXJ0Q2xhc3MoY3R4LCBjaGFydERhdGEpO1xuICAgICAgaWYgKHRoaXMuaXNUaW1lbGluZSAhPT0gdHJ1ZSAmJiB0aGlzLmRhdGEubGVnZW5kID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX2RyYXdMZWdlbmQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICB9XG4gIH1cblxuICByZXNpemVDaGFydCgpIHtcbiAgICBpZiAoIXRoaXMuX2NoYXJ0KSByZXR1cm47XG4gICAgLy8gQ2hhcnQgbm90IHJlYWR5XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5yZXNpemVDaGFydC5iaW5kKHRoaXMpLCAxMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9yZXNpemVUaW1lcik7XG4gICAgdGhpcy5fcmVzaXplVGltZXIgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLl9yZXNpemVDaGFydCgpO1xuICB9XG5cbiAgX3Jlc2l6ZUNoYXJ0KCkge1xuICAgIGNvbnN0IGNoYXJ0VGFyZ2V0ID0gdGhpcy4kLmNoYXJ0VGFyZ2V0O1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgaWYgKGRhdGEuZGF0YXNldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVGltZWxpbmUpIHtcbiAgICAgIHRoaXMuX2NoYXJ0LnJlc2l6ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJlY2FsY3VsYXRlIGNoYXJ0IGhlaWdodCBmb3IgVGltZWxpbmUgY2hhcnRcbiAgICBjb25zdCBhcmVhVG9wID0gdGhpcy5fY2hhcnQuY2hhcnRBcmVhLnRvcDtcbiAgICBjb25zdCBhcmVhQm90ID0gdGhpcy5fY2hhcnQuY2hhcnRBcmVhLmJvdHRvbTtcbiAgICBjb25zdCBoZWlnaHQxID0gdGhpcy5fY2hhcnQuY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICBpZiAoYXJlYUJvdCA+IDApIHtcbiAgICAgIHRoaXMuX2F4aXNIZWlnaHQgPSBoZWlnaHQxIC0gYXJlYUJvdCArIGFyZWFUb3A7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9heGlzSGVpZ2h0KSB7XG4gICAgICBjaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgPSBcIjUwcHhcIjtcbiAgICAgIHRoaXMuX2NoYXJ0LnJlc2l6ZSgpO1xuICAgICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXhpc0hlaWdodCkge1xuICAgICAgY29uc3QgY250ID0gZGF0YS5kYXRhc2V0cy5sZW5ndGg7XG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSAzMCAqIGNudCArIHRoaXMuX2F4aXNIZWlnaHQgKyBcInB4XCI7XG4gICAgICBpZiAoY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ICE9PSB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgfVxuICAgICAgdGhpcy5fY2hhcnQucmVzaXplKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IEhTTCBkaXN0cmlidXRlZCBjb2xvciBsaXN0XG4gIHN0YXRpYyBnZXRDb2xvckxpc3QoY291bnQpIHtcbiAgICBsZXQgcHJvY2Vzc0wgPSBmYWxzZTtcbiAgICBpZiAoY291bnQgPiAxMCkge1xuICAgICAgcHJvY2Vzc0wgPSB0cnVlO1xuICAgICAgY291bnQgPSBNYXRoLmNlaWwoY291bnQgLyAyKTtcbiAgICB9XG4gICAgY29uc3QgaDEgPSAzNjAgLyBjb3VudDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBsb29wSSA9IDA7IGxvb3BJIDwgY291bnQ7IGxvb3BJKyspIHtcbiAgICAgIHJlc3VsdFtsb29wSV0gPSBDb2xvcigpLmhzbChoMSAqIGxvb3BJLCA4MCwgMzgpO1xuICAgICAgaWYgKHByb2Nlc3NMKSB7XG4gICAgICAgIHJlc3VsdFtsb29wSSArIGNvdW50XSA9IENvbG9yKCkuaHNsKGgxICogbG9vcEksIDgwLCA2Mik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0Q29sb3JHZW5lcmF0b3Ioc3RhdGljQ29sb3JzLCBzdGFydEluZGV4KSB7XG4gICAgLy8gS25vd24gY29sb3JzIGZvciBzdGF0aWMgZGF0YSxcbiAgICAvLyBzaG91bGQgYWRkIGZvciB2ZXJ5IGNvbW1vbiBzdGF0ZSBzdHJpbmcgbWFudWFsbHkuXG4gICAgLy8gUGFsZXR0ZSBtb2RpZmllZCBmcm9tIGh0dHA6Ly9nb29nbGUuZ2l0aHViLmlvL3BhbGV0dGUuanMvIG1wbjY1LCBBcGFjaGUgMi4wXG4gICAgY29uc3QgcGFsZXR0ZSA9IFtcbiAgICAgIFwiZmYwMDI5XCIsXG4gICAgICBcIjY2YTYxZVwiLFxuICAgICAgXCIzNzdlYjhcIixcbiAgICAgIFwiOTg0ZWEzXCIsXG4gICAgICBcIjAwZDJkNVwiLFxuICAgICAgXCJmZjdmMDBcIixcbiAgICAgIFwiYWY4ZDAwXCIsXG4gICAgICBcIjdmODBjZFwiLFxuICAgICAgXCJiM2U5MDBcIixcbiAgICAgIFwiYzQyZTYwXCIsXG4gICAgICBcImE2NTYyOFwiLFxuICAgICAgXCJmNzgxYmZcIixcbiAgICAgIFwiOGRkM2M3XCIsXG4gICAgICBcImJlYmFkYVwiLFxuICAgICAgXCJmYjgwNzJcIixcbiAgICAgIFwiODBiMWQzXCIsXG4gICAgICBcImZkYjQ2MlwiLFxuICAgICAgXCJmY2NkZTVcIixcbiAgICAgIFwiYmM4MGJkXCIsXG4gICAgICBcImZmZWQ2ZlwiLFxuICAgICAgXCJjNGVhZmZcIixcbiAgICAgIFwiY2Y4YzAwXCIsXG4gICAgICBcIjFiOWU3N1wiLFxuICAgICAgXCJkOTVmMDJcIixcbiAgICAgIFwiZTcyOThhXCIsXG4gICAgICBcImU2YWIwMlwiLFxuICAgICAgXCJhNjc2MWRcIixcbiAgICAgIFwiMDA5N2ZmXCIsXG4gICAgICBcIjAwZDA2N1wiLFxuICAgICAgXCJmNDM2MDBcIixcbiAgICAgIFwiNGJhOTNiXCIsXG4gICAgICBcIjU3NzliYlwiLFxuICAgICAgXCI5MjdhY2NcIixcbiAgICAgIFwiOTdlZTNmXCIsXG4gICAgICBcImJmMzk0N1wiLFxuICAgICAgXCI5ZjViMDBcIixcbiAgICAgIFwiZjQ4NzU4XCIsXG4gICAgICBcIjhjYWVkNlwiLFxuICAgICAgXCJmMmI5NGZcIixcbiAgICAgIFwiZWZmMjZlXCIsXG4gICAgICBcImU0Mzg3MlwiLFxuICAgICAgXCJkOWIxMDBcIixcbiAgICAgIFwiOWQ3YTAwXCIsXG4gICAgICBcIjY5OGNmZlwiLFxuICAgICAgXCJkOWQ5ZDlcIixcbiAgICAgIFwiMDBkMjdlXCIsXG4gICAgICBcImQwNjgwMFwiLFxuICAgICAgXCIwMDlmODJcIixcbiAgICAgIFwiYzQ5MjAwXCIsXG4gICAgICBcImNiZThmZlwiLFxuICAgICAgXCJmZWNkZGZcIixcbiAgICAgIFwiYzI3ZWI2XCIsXG4gICAgICBcIjhjZDJjZVwiLFxuICAgICAgXCJjNGI4ZDlcIixcbiAgICAgIFwiZjg4M2IwXCIsXG4gICAgICBcImE0OTEwMFwiLFxuICAgICAgXCJmNDg4MDBcIixcbiAgICAgIFwiMjdkMGRmXCIsXG4gICAgICBcImEwNGE5YlwiLFxuICAgIF07XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JJbmRleChpZHgpIHtcbiAgICAgIC8vIFJldXNlIHRoZSBjb2xvciBpZiBpbmRleCB0b28gbGFyZ2UuXG4gICAgICByZXR1cm4gQ29sb3IoXCIjXCIgKyBwYWxldHRlW2lkeCAlIHBhbGV0dGUubGVuZ3RoXSk7XG4gICAgfVxuICAgIGNvbnN0IGNvbG9yRGljdCA9IHt9O1xuICAgIGxldCBjb2xvckluZGV4ID0gMDtcbiAgICBpZiAoc3RhcnRJbmRleCA+IDApIGNvbG9ySW5kZXggPSBzdGFydEluZGV4O1xuICAgIGlmIChzdGF0aWNDb2xvcnMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRpY0NvbG9ycykuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjb25zdCBjMSA9IHN0YXRpY0NvbG9yc1tjXTtcbiAgICAgICAgaWYgKGlzRmluaXRlKGMxKSkge1xuICAgICAgICAgIGNvbG9yRGljdFtjLnRvTG93ZXJDYXNlKCldID0gZ2V0Q29sb3JJbmRleChjMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sb3JEaWN0W2MudG9Mb3dlckNhc2UoKV0gPSBDb2xvcihzdGF0aWNDb2xvcnNbY10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ3VzdG9tIGNvbG9yIGFzc2lnblxuICAgIGZ1bmN0aW9uIGdldENvbG9yKF9fLCBkYXRhKSB7XG4gICAgICBsZXQgcmV0O1xuICAgICAgY29uc3QgbmFtZSA9IGRhdGFbM107XG4gICAgICBpZiAobmFtZSA9PT0gbnVsbCkgcmV0dXJuIENvbG9yKCkuaHNsKDAsIDQwLCAzOCk7XG4gICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gQ29sb3IoKS5oc2woMTIwLCA0MCwgMzgpO1xuICAgICAgY29uc3QgbmFtZTEgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAocmV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0ID0gY29sb3JEaWN0W25hbWUxXTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXQgPSBnZXRDb2xvckluZGV4KGNvbG9ySW5kZXgpO1xuICAgICAgICBjb2xvckluZGV4Kys7XG4gICAgICAgIGNvbG9yRGljdFtuYW1lMV0gPSByZXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q29sb3I7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNoYXJ0LWJhc2VcIiwgSGFDaGFydEJhc2UpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vZW50aXR5L2hhLWNoYXJ0LWJhc2VcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IGZvcm1hdERhdGVUaW1lIGZyb20gXCIuLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuXG5jbGFzcyBTdGF0ZUhpc3RvcnlDaGFydExpbmUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1jaGFydC1iYXNlXG4gICAgICAgIGlkPVwiY2hhcnRcIlxuICAgICAgICBkYXRhPVwiW1tjaGFydERhdGFdXVwiXG4gICAgICAgIGlkZW50aWZpZXI9XCJbW2lkZW50aWZpZXJdXVwiXG4gICAgICAgIHJlbmRlcmVkPVwie3tyZW5kZXJlZH19XCJcbiAgICAgID48L2hhLWNoYXJ0LWJhc2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhcnREYXRhOiBPYmplY3QsXG4gICAgICBkYXRhOiBPYmplY3QsXG4gICAgICBuYW1lczogT2JqZWN0LFxuICAgICAgdW5pdDogU3RyaW5nLFxuICAgICAgaWRlbnRpZmllcjogU3RyaW5nLFxuXG4gICAgICBpc1NpbmdsZURldmljZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBlbmRUaW1lOiBPYmplY3QsXG4gICAgICByZW5kZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiBcIl9vblJlbmRlcmVkQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcImRhdGFDaGFuZ2VkKGRhdGEsIGVuZFRpbWUsIGlzU2luZ2xlRGV2aWNlKVwiXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgfVxuXG4gIGRhdGFDaGFuZ2VkKCkge1xuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBfb25SZW5kZXJlZENoYW5nZWQocmVuZGVyZWQpIHtcbiAgICBpZiAocmVuZGVyZWQpIHRoaXMuYW5pbWF0ZUhlaWdodCgpO1xuICB9XG5cbiAgYW5pbWF0ZUhlaWdodCgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy4kLmNoYXJ0LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGRyYXdDaGFydCgpIHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy51bml0O1xuICAgIGNvbnN0IGRldmljZVN0YXRlcyA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBkYXRhc2V0cyA9IFtdO1xuICAgIGxldCBlbmRUaW1lO1xuXG4gICAgaWYgKCF0aGlzLl9pc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRldmljZVN0YXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYWZlUGFyc2VGbG9hdCh2YWx1ZSkge1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gaXNGaW5pdGUocGFyc2VkKSA/IHBhcnNlZCA6IG51bGw7XG4gICAgfVxuXG4gICAgZW5kVGltZSA9XG4gICAgICB0aGlzLmVuZFRpbWUgfHxcbiAgICAgIC8vIEdldCB0aGUgaGlnaGVzdCBkYXRlIGZyb20gdGhlIGxhc3QgZGF0ZSBvZiBlYWNoIGRldmljZVxuICAgICAgbmV3IERhdGUoXG4gICAgICAgIE1hdGgubWF4LmFwcGx5KFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgZGV2aWNlU3RhdGVzLm1hcChcbiAgICAgICAgICAgIChkZXZTdHMpID0+XG4gICAgICAgICAgICAgIG5ldyBEYXRlKGRldlN0cy5zdGF0ZXNbZGV2U3RzLnN0YXRlcy5sZW5ndGggLSAxXS5sYXN0X2NoYW5nZWQpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIGlmIChlbmRUaW1lID4gbmV3IERhdGUoKSkge1xuICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzIHx8IHt9O1xuICAgIGRldmljZVN0YXRlcy5mb3JFYWNoKChzdGF0ZXMpID0+IHtcbiAgICAgIGNvbnN0IGRvbWFpbiA9IHN0YXRlcy5kb21haW47XG4gICAgICBjb25zdCBuYW1lID0gbmFtZXNbc3RhdGVzLmVudGl0eV9pZF0gfHwgc3RhdGVzLm5hbWU7XG4gICAgICAvLyBhcnJheSBjb250YWluaW5nIFt2YWx1ZTEsIHZhbHVlMiwgZXRjXVxuICAgICAgbGV0IHByZXZWYWx1ZXM7XG4gICAgICBjb25zdCBkYXRhID0gW107XG5cbiAgICAgIGZ1bmN0aW9uIHB1c2hEYXRhKHRpbWVzdGFtcCwgZGF0YXZhbHVlcykge1xuICAgICAgICBpZiAoIWRhdGF2YWx1ZXMpIHJldHVybjtcbiAgICAgICAgaWYgKHRpbWVzdGFtcCA+IGVuZFRpbWUpIHtcbiAgICAgICAgICAvLyBEcm9wIGRhdGFwb2ludHMgdGhhdCBhcmUgYWZ0ZXIgdGhlIHJlcXVlc3RlZCBlbmRUaW1lLiBUaGlzIGNvdWxkIGhhcHBlbiBpZlxuICAgICAgICAgIC8vIGVuZFRpbWUgaXMgXCJub3dcIiBhbmQgY2xpZW50IHRpbWUgaXMgbm90IGluIHN5bmMgd2l0aCBzZXJ2ZXIgdGltZS5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgZC5kYXRhLnB1c2goeyB4OiB0aW1lc3RhbXAsIHk6IGRhdGF2YWx1ZXNbaV0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcmV2VmFsdWVzID0gZGF0YXZhbHVlcztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWRkQ29sdW1uKG5hbWVZLCBzdGVwLCBmaWxsKSB7XG4gICAgICAgIGxldCBkYXRhRmlsbCA9IGZhbHNlO1xuICAgICAgICBsZXQgZGF0YVN0ZXAgPSBmYWxzZTtcbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICBkYXRhRmlsbCA9IFwib3JpZ2luXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICBkYXRhU3RlcCA9IFwiYmVmb3JlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogbmFtZVksXG4gICAgICAgICAgZmlsbDogZGF0YUZpbGwsXG4gICAgICAgICAgc3RlcHBlZExpbmU6IGRhdGFTdGVwLFxuICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxuICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgIHVuaXRUZXh0OiB1bml0LFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBkb21haW4gPT09IFwidGhlcm1vc3RhdFwiIHx8XG4gICAgICAgIGRvbWFpbiA9PT0gXCJjbGltYXRlXCIgfHxcbiAgICAgICAgZG9tYWluID09PSBcIndhdGVyX2hlYXRlclwiXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgaGFzSHZhY0FjdGlvbiA9IHN0YXRlcy5zdGF0ZXMuc29tZShcbiAgICAgICAgICAoc3RhdGUpID0+IHN0YXRlLmF0dHJpYnV0ZXMgJiYgc3RhdGUuYXR0cmlidXRlcy5odmFjX2FjdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGlzSGVhdGluZyA9XG4gICAgICAgICAgZG9tYWluID09PSBcImNsaW1hdGVcIiAmJiBoYXNIdmFjQWN0aW9uXG4gICAgICAgICAgICA/IChzdGF0ZSkgPT4gc3RhdGUuYXR0cmlidXRlcy5odmFjX2FjdGlvbiA9PT0gXCJoZWF0aW5nXCJcbiAgICAgICAgICAgIDogKHN0YXRlKSA9PiBzdGF0ZS5zdGF0ZSA9PT0gXCJoZWF0XCI7XG4gICAgICAgIGNvbnN0IGlzQ29vbGluZyA9XG4gICAgICAgICAgZG9tYWluID09PSBcImNsaW1hdGVcIiAmJiBoYXNIdmFjQWN0aW9uXG4gICAgICAgICAgICA/IChzdGF0ZSkgPT4gc3RhdGUuYXR0cmlidXRlcy5odmFjX2FjdGlvbiA9PT0gXCJjb29saW5nXCJcbiAgICAgICAgICAgIDogKHN0YXRlKSA9PiBzdGF0ZS5zdGF0ZSA9PT0gXCJjb29sXCI7XG5cbiAgICAgICAgY29uc3QgaGFzSGVhdCA9IHN0YXRlcy5zdGF0ZXMuc29tZShpc0hlYXRpbmcpO1xuICAgICAgICBjb25zdCBoYXNDb29sID0gc3RhdGVzLnN0YXRlcy5zb21lKGlzQ29vbGluZyk7XG4gICAgICAgIC8vIFdlIGRpZmZlcmVudGlhdGUgYmV0d2VlbiB0aGVybW9zdGF0cyB0aGF0IGhhdmUgYSB0YXJnZXQgdGVtcGVyYXR1cmVcbiAgICAgICAgLy8gcmFuZ2UgdmVyc3VzIG9uZXMgdGhhdCBoYXZlIGp1c3QgYSB0YXJnZXQgdGVtcGVyYXR1cmVcblxuICAgICAgICAvLyBVc2luZyBzdGVwIGNoYXJ0IGJ5IHN0ZXAtYmVmb3JlIHNvIG1hbnVhbGx5IGludGVycG9sYXRpb24gbm90IG5lZWRlZC5cbiAgICAgICAgY29uc3QgaGFzVGFyZ2V0UmFuZ2UgPSBzdGF0ZXMuc3RhdGVzLnNvbWUoXG4gICAgICAgICAgKHN0YXRlKSA9PlxuICAgICAgICAgICAgc3RhdGUuYXR0cmlidXRlcyAmJlxuICAgICAgICAgICAgc3RhdGUuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoICE9PVxuICAgICAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvd1xuICAgICAgICApO1xuXG4gICAgICAgIGFkZENvbHVtbihuYW1lICsgXCIgY3VycmVudCB0ZW1wZXJhdHVyZVwiLCB0cnVlKTtcbiAgICAgICAgaWYgKGhhc0hlYXQpIHtcbiAgICAgICAgICBhZGRDb2x1bW4obmFtZSArIFwiIGhlYXRpbmdcIiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgLy8gVGhlIFwiaGVhdGluZ1wiIHNlcmllcyB1c2VzIHN0ZXBwZWRBcmVhIHRvIHNoYWRlIHRoZSBhcmVhIGJlbG93IHRoZSBjdXJyZW50XG4gICAgICAgICAgLy8gdGVtcGVyYXR1cmUgd2hlbiB0aGUgdGhlcm1vc3RhdCBpcyBjYWxsaW5nIGZvciBoZWF0LlxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNDb29sKSB7XG4gICAgICAgICAgYWRkQ29sdW1uKG5hbWUgKyBcIiBjb29saW5nXCIsIHRydWUsIHRydWUpO1xuICAgICAgICAgIC8vIFRoZSBcImNvb2xpbmdcIiBzZXJpZXMgdXNlcyBzdGVwcGVkQXJlYSB0byBzaGFkZSB0aGUgYXJlYSBiZWxvdyB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIHRlbXBlcmF0dXJlIHdoZW4gdGhlIHRoZXJtb3N0YXQgaXMgY2FsbGluZyBmb3IgaGVhdC5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNUYXJnZXRSYW5nZSkge1xuICAgICAgICAgIGFkZENvbHVtbihuYW1lICsgXCIgdGFyZ2V0IHRlbXBlcmF0dXJlIGhpZ2hcIiwgdHJ1ZSk7XG4gICAgICAgICAgYWRkQ29sdW1uKG5hbWUgKyBcIiB0YXJnZXQgdGVtcGVyYXR1cmUgbG93XCIsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENvbHVtbihuYW1lICsgXCIgdGFyZ2V0IHRlbXBlcmF0dXJlXCIsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGVzLnN0YXRlcy5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuICAgICAgICAgIGlmICghc3RhdGUuYXR0cmlidXRlcykgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IGN1clRlbXAgPSBzYWZlUGFyc2VGbG9hdChzdGF0ZS5hdHRyaWJ1dGVzLmN1cnJlbnRfdGVtcGVyYXR1cmUpO1xuICAgICAgICAgIGNvbnN0IHNlcmllcyA9IFtjdXJUZW1wXTtcbiAgICAgICAgICBpZiAoaGFzSGVhdCkge1xuICAgICAgICAgICAgc2VyaWVzLnB1c2goaXNIZWF0aW5nKHN0YXRlKSA/IGN1clRlbXAgOiBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhc0Nvb2wpIHtcbiAgICAgICAgICAgIHNlcmllcy5wdXNoKGlzQ29vbGluZyhzdGF0ZSkgPyBjdXJUZW1wIDogbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYXNUYXJnZXRSYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SGlnaCA9IHNhZmVQYXJzZUZsb2F0KFxuICAgICAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2hcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRMb3cgPSBzYWZlUGFyc2VGbG9hdChzdGF0ZS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvdyk7XG4gICAgICAgICAgICBzZXJpZXMucHVzaCh0YXJnZXRIaWdoLCB0YXJnZXRMb3cpO1xuICAgICAgICAgICAgcHVzaERhdGEobmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKSwgc2VyaWVzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2FmZVBhcnNlRmxvYXQoc3RhdGUuYXR0cmlidXRlcy50ZW1wZXJhdHVyZSk7XG4gICAgICAgICAgICBzZXJpZXMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgcHVzaERhdGEobmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKSwgc2VyaWVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT25seSBkaXNhYmxlIGludGVycG9sYXRpb24gZm9yIHNlbnNvcnNcbiAgICAgICAgY29uc3QgaXNTdGVwID0gZG9tYWluID09PSBcInNlbnNvclwiO1xuICAgICAgICBhZGRDb2x1bW4obmFtZSwgaXNTdGVwKTtcblxuICAgICAgICBsZXQgbGFzdFZhbHVlID0gbnVsbDtcbiAgICAgICAgbGV0IGxhc3REYXRlID0gbnVsbDtcbiAgICAgICAgbGV0IGxhc3ROdWxsRGF0ZSA9IG51bGw7XG5cbiAgICAgICAgLy8gUHJvY2VzcyBjaGFydCBkYXRhLlxuICAgICAgICAvLyBXaGVuIHN0YXRlIGlzIGB1bmtub3duYCwgY2FsY3VsYXRlIHRoZSB2YWx1ZSBhbmQgYnJlYWsgdGhlIGxpbmUuXG4gICAgICAgIHN0YXRlcy5zdGF0ZXMuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNhZmVQYXJzZUZsb2F0KHN0YXRlLnN0YXRlKTtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKTtcbiAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgbGFzdE51bGxEYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgbGFzdE51bGxEYXRlVGltZSA9IGxhc3ROdWxsRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBsYXN0RGF0ZVRpbWUgPSBsYXN0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCB0bXBWYWx1ZSA9XG4gICAgICAgICAgICAgICh2YWx1ZSAtIGxhc3RWYWx1ZSkgKlxuICAgICAgICAgICAgICAgICgobGFzdE51bGxEYXRlVGltZSAtIGxhc3REYXRlVGltZSkgL1xuICAgICAgICAgICAgICAgICAgKGRhdGVUaW1lIC0gbGFzdERhdGVUaW1lKSkgK1xuICAgICAgICAgICAgICBsYXN0VmFsdWU7XG4gICAgICAgICAgICBwdXNoRGF0YShsYXN0TnVsbERhdGUsIFt0bXBWYWx1ZV0pO1xuICAgICAgICAgICAgcHVzaERhdGEobmV3IERhdGUobGFzdE51bGxEYXRlVGltZSArIDEpLCBbbnVsbF0pO1xuICAgICAgICAgICAgcHVzaERhdGEoZGF0ZSwgW3ZhbHVlXSk7XG4gICAgICAgICAgICBsYXN0RGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICBsYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGxhc3ROdWxsRGF0ZSA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBsYXN0TnVsbERhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHB1c2hEYXRhKGRhdGUsIFt2YWx1ZV0pO1xuICAgICAgICAgICAgbGFzdERhdGUgPSBkYXRlO1xuICAgICAgICAgICAgbGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHZhbHVlID09PSBudWxsICYmXG4gICAgICAgICAgICBsYXN0TnVsbERhdGUgPT09IG51bGwgJiZcbiAgICAgICAgICAgIGxhc3RWYWx1ZSAhPT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGFzdE51bGxEYXRlID0gZGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgYW4gZW50cnkgZm9yIGZpbmFsIHZhbHVlc1xuICAgICAgcHVzaERhdGEoZW5kVGltZSwgcHJldlZhbHVlcywgZmFsc2UpO1xuXG4gICAgICAvLyBDb25jYXQgdHdvIGFycmF5c1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoZGF0YXNldHMsIGRhdGEpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybWF0VG9vbHRpcFRpdGxlID0gKGl0ZW1zLCBkYXRhKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbMF07XG4gICAgICBjb25zdCBkYXRlID0gZGF0YS5kYXRhc2V0c1tpdGVtLmRhdGFzZXRJbmRleF0uZGF0YVtpdGVtLmluZGV4XS54O1xuXG4gICAgICByZXR1cm4gZm9ybWF0RGF0ZVRpbWUoZGF0ZSwgdGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhcnRPcHRpb25zID0ge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICB1bml0OiB1bml0LFxuICAgICAgbGVnZW5kOiAhdGhpcy5pc1NpbmdsZURldmljZSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgeEF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgbWFqb3I6IHtcbiAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgbW9kZTogXCJuZWFyZWFjaFwiLFxuICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgdGl0bGU6IGZvcm1hdFRvb2x0aXBUaXRsZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIG1vZGU6IFwibmVhcmVhY2hcIixcbiAgICAgICAgfSxcbiAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgdGVuc2lvbjogMC4xLFxuICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMS41LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgIGhpdFJhZGl1czogNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgZmlsbGVyOiB7XG4gICAgICAgICAgICBwcm9wYWdhdGU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW10sXG4gICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0cyxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmNoYXJ0RGF0YSA9IGNoYXJ0T3B0aW9ucztcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtaGlzdG9yeS1jaGFydC1saW5lXCIsIFN0YXRlSGlzdG9yeUNoYXJ0TGluZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgXCIuL2VudGl0eS9oYS1jaGFydC1iYXNlXCI7XG5cbmltcG9ydCBmb3JtYXREYXRlVGltZSBmcm9tIFwiLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuY2xhc3MgU3RhdGVIaXN0b3J5Q2hhcnRUaW1lbGluZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtyZW5kZXJlZF0pIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2hhcnQtYmFzZSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2hhcnQtYmFzZVxuICAgICAgICBkYXRhPVwiW1tjaGFydERhdGFdXVwiXG4gICAgICAgIHJlbmRlcmVkPVwie3tyZW5kZXJlZH19XCJcbiAgICAgICAgcnRsPVwie3tydGx9fVwiXG4gICAgICA+PC9oYS1jaGFydC1iYXNlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIGNoYXJ0RGF0YTogT2JqZWN0LFxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGFDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgbmFtZXM6IE9iamVjdCxcbiAgICAgIG5vU2luZ2xlOiBCb29sZWFuLFxuICAgICAgZW5kVGltZTogRGF0ZSxcbiAgICAgIHJlbmRlcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHJ0bDoge1xuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiZGF0YUNoYW5nZWQoZGF0YSwgZW5kVGltZSwgbG9jYWxpemUsIGxhbmd1YWdlKVwiXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgfVxuXG4gIGRhdGFDaGFuZ2VkKCkge1xuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBkcmF3Q2hhcnQoKSB7XG4gICAgY29uc3Qgc3RhdGljQ29sb3JzID0ge1xuICAgICAgb246IDEsXG4gICAgICBvZmY6IDAsXG4gICAgICB1bmF2YWlsYWJsZTogXCIjYTBhMGEwXCIsXG4gICAgICB1bmtub3duOiBcIiM2MDYwNjBcIixcbiAgICAgIGlkbGU6IDIsXG4gICAgfTtcbiAgICBsZXQgc3RhdGVIaXN0b3J5ID0gdGhpcy5kYXRhO1xuXG4gICAgaWYgKCF0aGlzLl9pc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZUhpc3RvcnkpIHtcbiAgICAgIHN0YXRlSGlzdG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKFxuICAgICAgc3RhdGVIaXN0b3J5LnJlZHVjZShcbiAgICAgICAgKG1pblRpbWUsIHN0YXRlSW5mbykgPT5cbiAgICAgICAgICBNYXRoLm1pbihtaW5UaW1lLCBuZXcgRGF0ZShzdGF0ZUluZm8uZGF0YVswXS5sYXN0X2NoYW5nZWQpKSxcbiAgICAgICAgbmV3IERhdGUoKVxuICAgICAgKVxuICAgICk7XG5cbiAgICAvLyBlbmQgdGltZSBpcyBNYXRoLm1heChzdGFydFRpbWUsIGxhc3RfZXZlbnQpXG4gICAgbGV0IGVuZFRpbWUgPVxuICAgICAgdGhpcy5lbmRUaW1lIHx8XG4gICAgICBuZXcgRGF0ZShcbiAgICAgICAgc3RhdGVIaXN0b3J5LnJlZHVjZShcbiAgICAgICAgICAobWF4VGltZSwgc3RhdGVJbmZvKSA9PlxuICAgICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAgIG1heFRpbWUsXG4gICAgICAgICAgICAgIG5ldyBEYXRlKHN0YXRlSW5mby5kYXRhW3N0YXRlSW5mby5kYXRhLmxlbmd0aCAtIDFdLmxhc3RfY2hhbmdlZClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgc3RhcnRUaW1lXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICBpZiAoZW5kVGltZSA+IG5ldyBEYXRlKCkpIHtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuICAgIGNvbnN0IGRhdGFzZXRzID0gW107XG4gICAgLy8gc3RhdGVIaXN0b3J5IGlzIGEgbGlzdCBvZiBsaXN0cyBvZiBzb3J0ZWQgc3RhdGUgb2JqZWN0c1xuICAgIGNvbnN0IG5hbWVzID0gdGhpcy5uYW1lcyB8fCB7fTtcbiAgICBzdGF0ZUhpc3RvcnkuZm9yRWFjaCgoc3RhdGVJbmZvKSA9PiB7XG4gICAgICBsZXQgbmV3TGFzdENoYW5nZWQ7XG4gICAgICBsZXQgcHJldlN0YXRlID0gbnVsbDtcbiAgICAgIGxldCBsb2NTdGF0ZSA9IG51bGw7XG4gICAgICBsZXQgcHJldkxhc3RDaGFuZ2VkID0gc3RhcnRUaW1lO1xuICAgICAgY29uc3QgZW50aXR5RGlzcGxheSA9IG5hbWVzW3N0YXRlSW5mby5lbnRpdHlfaWRdIHx8IHN0YXRlSW5mby5uYW1lO1xuXG4gICAgICBjb25zdCBkYXRhUm93ID0gW107XG4gICAgICBzdGF0ZUluZm8uZGF0YS5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuICAgICAgICBsZXQgbmV3U3RhdGUgPSBzdGF0ZS5zdGF0ZTtcbiAgICAgICAgY29uc3QgdGltZVN0YW1wID0gbmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKTtcbiAgICAgICAgaWYgKG5ld1N0YXRlID09PSB1bmRlZmluZWQgfHwgbmV3U3RhdGUgPT09IFwiXCIpIHtcbiAgICAgICAgICBuZXdTdGF0ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVTdGFtcCA+IGVuZFRpbWUpIHtcbiAgICAgICAgICAvLyBEcm9wIGRhdGFwb2ludHMgdGhhdCBhcmUgYWZ0ZXIgdGhlIHJlcXVlc3RlZCBlbmRUaW1lLiBUaGlzIGNvdWxkIGhhcHBlbiBpZlxuICAgICAgICAgIC8vIGVuZFRpbWUgaXMgJ25vdycgYW5kIGNsaWVudCB0aW1lIGlzIG5vdCBpbiBzeW5jIHdpdGggc2VydmVyIHRpbWUuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2U3RhdGUgIT09IG51bGwgJiYgbmV3U3RhdGUgIT09IHByZXZTdGF0ZSkge1xuICAgICAgICAgIG5ld0xhc3RDaGFuZ2VkID0gbmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKTtcblxuICAgICAgICAgIGRhdGFSb3cucHVzaChbcHJldkxhc3RDaGFuZ2VkLCBuZXdMYXN0Q2hhbmdlZCwgbG9jU3RhdGUsIHByZXZTdGF0ZV0pO1xuXG4gICAgICAgICAgcHJldlN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgICAgbG9jU3RhdGUgPSBzdGF0ZS5zdGF0ZV9sb2NhbGl6ZTtcbiAgICAgICAgICBwcmV2TGFzdENoYW5nZWQgPSBuZXdMYXN0Q2hhbmdlZDtcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2U3RhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICBwcmV2U3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgICBsb2NTdGF0ZSA9IHN0YXRlLnN0YXRlX2xvY2FsaXplO1xuICAgICAgICAgIHByZXZMYXN0Q2hhbmdlZCA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJldlN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGFSb3cucHVzaChbcHJldkxhc3RDaGFuZ2VkLCBlbmRUaW1lLCBsb2NTdGF0ZSwgcHJldlN0YXRlXSk7XG4gICAgICB9XG4gICAgICBkYXRhc2V0cy5wdXNoKHsgZGF0YTogZGF0YVJvdyB9KTtcbiAgICAgIGxhYmVscy5wdXNoKGVudGl0eURpc3BsYXkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybWF0VG9vbHRpcExhYmVsID0gKGl0ZW0sIGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGRhdGEuZGF0YXNldHNbaXRlbS5kYXRhc2V0SW5kZXhdLmRhdGFbaXRlbS5pbmRleF07XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gZm9ybWF0RGF0ZVRpbWUodmFsdWVzWzBdLCB0aGlzLmhhc3MubGFuZ3VhZ2UpO1xuICAgICAgY29uc3QgZW5kID0gZm9ybWF0RGF0ZVRpbWUodmFsdWVzWzFdLCB0aGlzLmhhc3MubGFuZ3VhZ2UpO1xuICAgICAgY29uc3Qgc3RhdGUgPSB2YWx1ZXNbMl07XG5cbiAgICAgIHJldHVybiBbc3RhdGUsIHN0YXJ0LCBlbmRdO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFydE9wdGlvbnMgPSB7XG4gICAgICB0eXBlOiBcInRpbWVsaW5lXCIsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICBsYWJlbDogZm9ybWF0VG9vbHRpcExhYmVsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgbWFqb3I6IHtcbiAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhZnRlclNldERpbWVuc2lvbnM6ICh5YXhlKSA9PiB7XG4gICAgICAgICAgICAgICAgeWF4ZS5tYXhXaWR0aCA9IHlheGUuY2hhcnQud2lkdGggKiAwLjE4O1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5fY29tcHV0ZVJUTCA/IFwicmlnaHRcIiA6IFwibGVmdFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0cyxcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgc3RhdGljQ29sb3JzOiBzdGF0aWNDb2xvcnMsXG4gICAgICAgIHN0YXRpY0NvbG9ySW5kZXg6IDMsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5jaGFydERhdGEgPSBjaGFydE9wdGlvbnM7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgXCJzdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lXCIsXG4gIFN0YXRlSGlzdG9yeUNoYXJ0VGltZWxpbmVcbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vc3RhdGUtaGlzdG9yeS1jaGFydC1saW5lXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWhpc3RvcnktY2hhcnQtdGltZWxpbmVcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5jbGFzcyBTdGF0ZUhpc3RvcnlDaGFydHMgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAvKiBoZWlnaHQgb2Ygc2luZ2xlIHRpbWVsaW5lIGNoYXJ0ID0gNThweCAqL1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDU4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNThweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHRlbXBsYXRlXG4gICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgY2xhc3M9XCJpbmZvXCJcbiAgICAgICAgaWY9XCJbW19jb21wdXRlSXNMb2FkaW5nKGlzTG9hZGluZ0RhdGEpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNvbXBvbmVudHMuaGlzdG9yeV9jaGFydHMubG9hZGluZ19oaXN0b3J5JyldXVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgIGNsYXNzPVwiaW5mb1wiXG4gICAgICAgIGlmPVwiW1tfY29tcHV0ZUlzRW1wdHkoaXNMb2FkaW5nRGF0YSwgaGlzdG9yeURhdGEpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNvbXBvbmVudHMuaGlzdG9yeV9jaGFydHMubm9faGlzdG9yeV9mb3VuZCcpXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaGlzdG9yeURhdGEudGltZWxpbmUubGVuZ3RoXV1cIj5cbiAgICAgICAgPHN0YXRlLWhpc3RvcnktY2hhcnQtdGltZWxpbmVcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIGRhdGE9XCJbW2hpc3RvcnlEYXRhLnRpbWVsaW5lXV1cIlxuICAgICAgICAgIGVuZC10aW1lPVwiW1tfY29tcHV0ZUVuZFRpbWUoZW5kVGltZSwgdXBUb05vdywgaGlzdG9yeURhdGEpXV1cIlxuICAgICAgICAgIG5vLXNpbmdsZT1cIltbbm9TaW5nbGVdXVwiXG4gICAgICAgICAgbmFtZXM9XCJbW25hbWVzXV1cIlxuICAgICAgICA+PC9zdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1toaXN0b3J5RGF0YS5saW5lXV1cIj5cbiAgICAgICAgPHN0YXRlLWhpc3RvcnktY2hhcnQtbGluZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgdW5pdD1cIltbaXRlbS51bml0XV1cIlxuICAgICAgICAgIGRhdGE9XCJbW2l0ZW0uZGF0YV1dXCJcbiAgICAgICAgICBpZGVudGlmaWVyPVwiW1tpdGVtLmlkZW50aWZpZXJdXVwiXG4gICAgICAgICAgaXMtc2luZ2xlLWRldmljZT1cIltbX2NvbXB1dGVJc1NpbmdsZUxpbmVDaGFydChpdGVtLmRhdGEsIG5vU2luZ2xlKV1dXCJcbiAgICAgICAgICBlbmQtdGltZT1cIltbX2NvbXB1dGVFbmRUaW1lKGVuZFRpbWUsIHVwVG9Ob3csIGhpc3RvcnlEYXRhKV1dXCJcbiAgICAgICAgICBuYW1lcz1cIltbbmFtZXNdXVwiXG4gICAgICAgID48L3N0YXRlLWhpc3RvcnktY2hhcnQtbGluZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaGlzdG9yeURhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG4gICAgICBuYW1lczogT2JqZWN0LFxuXG4gICAgICBpc0xvYWRpbmdEYXRhOiBCb29sZWFuLFxuXG4gICAgICBlbmRUaW1lOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHVwVG9Ob3c6IEJvb2xlYW4sXG4gICAgICBub1NpbmdsZTogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgX2NvbXB1dGVJc1NpbmdsZUxpbmVDaGFydChkYXRhLCBub1NpbmdsZSkge1xuICAgIHJldHVybiAhbm9TaW5nbGUgJiYgZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIF9jb21wdXRlSXNFbXB0eShpc0xvYWRpbmdEYXRhLCBoaXN0b3J5RGF0YSkge1xuICAgIGNvbnN0IGhpc3RvcnlEYXRhRW1wdHkgPVxuICAgICAgIWhpc3RvcnlEYXRhIHx8XG4gICAgICAhaGlzdG9yeURhdGEudGltZWxpbmUgfHxcbiAgICAgICFoaXN0b3J5RGF0YS5saW5lIHx8XG4gICAgICAoaGlzdG9yeURhdGEudGltZWxpbmUubGVuZ3RoID09PSAwICYmIGhpc3RvcnlEYXRhLmxpbmUubGVuZ3RoID09PSAwKTtcbiAgICByZXR1cm4gIWlzTG9hZGluZ0RhdGEgJiYgaGlzdG9yeURhdGFFbXB0eTtcbiAgfVxuXG4gIF9jb21wdXRlSXNMb2FkaW5nKGlzTG9hZGluZykge1xuICAgIHJldHVybiBpc0xvYWRpbmcgJiYgIXRoaXMuaGlzdG9yeURhdGE7XG4gIH1cblxuICBfY29tcHV0ZUVuZFRpbWUoZW5kVGltZSwgdXBUb05vdykge1xuICAgIC8vIFdlIGRvbid0IHJlYWxseSBjYXJlIGFib3V0IHRoZSB2YWx1ZSBvZiBoaXN0b3J5RGF0YSwgYnV0IGlmIGl0IGNoYW5nZSB3ZSB3YW50IHRvIHVwZGF0ZVxuICAgIC8vIGVuZFRpbWUuXG4gICAgcmV0dXJuIHVwVG9Ob3cgPyBuZXcgRGF0ZSgpIDogZW5kVGltZTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtaGlzdG9yeS1jaGFydHNcIiwgU3RhdGVIaXN0b3J5Q2hhcnRzKTtcbiIsImltcG9ydCB7XG4gIGNvbXB1dGVIaXN0b3J5LFxuICBmZXRjaFJlY2VudCxcbiAgSGlzdG9yeVJlc3VsdCxcbiAgVGltZWxpbmVFbnRpdHksXG4gIExpbmVDaGFydFVuaXQsXG59IGZyb20gXCIuL2hpc3RvcnlcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG5pbnRlcmZhY2UgQ2FjaGVDb25maWcge1xuICByZWZyZXNoOiBudW1iZXI7XG4gIGNhY2hlS2V5OiBzdHJpbmc7XG4gIGhvdXJzVG9TaG93OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDYWNoZWRSZXN1bHRzIHtcbiAgcHJvbTogUHJvbWlzZTxIaXN0b3J5UmVzdWx0PjtcbiAgc3RhcnRUaW1lOiBEYXRlO1xuICBlbmRUaW1lOiBEYXRlO1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICBkYXRhOiBIaXN0b3J5UmVzdWx0O1xufVxuXG4vLyBUaGlzIGlzIGEgZGlmZmVyZW50IGludGVyZmFjZSwgYSBkaWZmZXJlbnQgY2FjaGUgOihcbmludGVyZmFjZSBSZWNlbnRDYWNoZVJlc3VsdHMge1xuICBjcmVhdGVkOiBudW1iZXI7XG4gIGxhbmd1YWdlOiBzdHJpbmc7XG4gIGRhdGE6IFByb21pc2U8SGlzdG9yeVJlc3VsdD47XG59XG5cbmNvbnN0IFJFQ0VOVF9USFJFU0hPTEQgPSA2MDAwMDsgLy8gMSBtaW51dGVcbmNvbnN0IFJFQ0VOVF9DQUNIRTogeyBbY2FjaGVLZXk6IHN0cmluZ106IFJlY2VudENhY2hlUmVzdWx0cyB9ID0ge307XG5jb25zdCBzdGF0ZUhpc3RvcnlDYWNoZTogeyBbY2FjaGVLZXk6IHN0cmluZ106IENhY2hlZFJlc3VsdHMgfSA9IHt9O1xuXG4vLyBDYWNoZWQgdHlwZSAxIHVuY3Rpb24uIFdpdGhvdXQgY2FjaGUgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGdldFJlY2VudCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgc3RhcnRUaW1lOiBEYXRlLFxuICBlbmRUaW1lOiBEYXRlLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBsYW5ndWFnZTogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgY2FjaGVLZXkgPSBlbnRpdHlJZDtcbiAgY29uc3QgY2FjaGUgPSBSRUNFTlRfQ0FDSEVbY2FjaGVLZXldO1xuXG4gIGlmIChcbiAgICBjYWNoZSAmJlxuICAgIERhdGUubm93KCkgLSBjYWNoZS5jcmVhdGVkIDwgUkVDRU5UX1RIUkVTSE9MRCAmJlxuICAgIGNhY2hlLmxhbmd1YWdlID09PSBsYW5ndWFnZVxuICApIHtcbiAgICByZXR1cm4gY2FjaGUuZGF0YTtcbiAgfVxuXG4gIGNvbnN0IHByb20gPSBmZXRjaFJlY2VudChoYXNzLCBlbnRpdHlJZCwgc3RhcnRUaW1lLCBlbmRUaW1lKS50aGVuKFxuICAgIChzdGF0ZUhpc3RvcnkpID0+IGNvbXB1dGVIaXN0b3J5KGhhc3MsIHN0YXRlSGlzdG9yeSwgbG9jYWxpemUsIGxhbmd1YWdlKSxcbiAgICAoZXJyKSA9PiB7XG4gICAgICBkZWxldGUgUkVDRU5UX0NBQ0hFW2VudGl0eUlkXTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICk7XG5cbiAgUkVDRU5UX0NBQ0hFW2NhY2hlS2V5XSA9IHtcbiAgICBjcmVhdGVkOiBEYXRlLm5vdygpLFxuICAgIGxhbmd1YWdlLFxuICAgIGRhdGE6IHByb20sXG4gIH07XG4gIHJldHVybiBwcm9tO1xufTtcblxuLy8gQ2FjaGUgdHlwZSAyIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIGdldEVtcHR5Q2FjaGUoXG4gIGxhbmd1YWdlOiBzdHJpbmcsXG4gIHN0YXJ0VGltZTogRGF0ZSxcbiAgZW5kVGltZTogRGF0ZVxuKTogQ2FjaGVkUmVzdWx0cyB7XG4gIHJldHVybiB7XG4gICAgcHJvbTogUHJvbWlzZS5yZXNvbHZlKHsgbGluZTogW10sIHRpbWVsaW5lOiBbXSB9KSxcbiAgICBsYW5ndWFnZSxcbiAgICBzdGFydFRpbWUsXG4gICAgZW5kVGltZSxcbiAgICBkYXRhOiB7IGxpbmU6IFtdLCB0aW1lbGluZTogW10gfSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlY2VudFdpdGhDYWNoZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgY2FjaGVDb25maWc6IENhY2hlQ29uZmlnLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBsYW5ndWFnZTogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgY2FjaGVLZXkgPSBjYWNoZUNvbmZpZy5jYWNoZUtleTtcbiAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKGVuZFRpbWUpO1xuICBzdGFydFRpbWUuc2V0SG91cnMoc3RhcnRUaW1lLmdldEhvdXJzKCkgLSBjYWNoZUNvbmZpZy5ob3Vyc1RvU2hvdyk7XG4gIGxldCB0b0ZldGNoU3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICBsZXQgYXBwZW5kaW5nVG9DYWNoZSA9IGZhbHNlO1xuXG4gIGxldCBjYWNoZSA9IHN0YXRlSGlzdG9yeUNhY2hlW2NhY2hlS2V5XTtcbiAgaWYgKFxuICAgIGNhY2hlICYmXG4gICAgdG9GZXRjaFN0YXJ0VGltZSA+PSBjYWNoZS5zdGFydFRpbWUgJiZcbiAgICB0b0ZldGNoU3RhcnRUaW1lIDw9IGNhY2hlLmVuZFRpbWUgJiZcbiAgICBjYWNoZS5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2VcbiAgKSB7XG4gICAgdG9GZXRjaFN0YXJ0VGltZSA9IGNhY2hlLmVuZFRpbWU7XG4gICAgYXBwZW5kaW5nVG9DYWNoZSA9IHRydWU7XG4gICAgLy8gVGhpcyBwcmV0dHkgbXVjaCBuZXZlciBoYXBwZW5zIGFzIGVuZFRpbWUgaXMgdXN1YWxseSBzZXQgdG8gbm93XG4gICAgaWYgKGVuZFRpbWUgPD0gY2FjaGUuZW5kVGltZSkge1xuICAgICAgcmV0dXJuIGNhY2hlLnByb207XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNhY2hlID0gc3RhdGVIaXN0b3J5Q2FjaGVbY2FjaGVLZXldID0gZ2V0RW1wdHlDYWNoZShcbiAgICAgIGxhbmd1YWdlLFxuICAgICAgc3RhcnRUaW1lLFxuICAgICAgZW5kVGltZVxuICAgICk7XG4gIH1cblxuICBjb25zdCBjdXJDYWNoZVByb20gPSBjYWNoZS5wcm9tO1xuXG4gIGNvbnN0IGdlblByb20gPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGZldGNoZWRIaXN0b3J5OiBIYXNzRW50aXR5W11bXTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBjdXJDYWNoZVByb20sXG4gICAgICAgIGZldGNoUmVjZW50KFxuICAgICAgICAgIGhhc3MsXG4gICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgdG9GZXRjaFN0YXJ0VGltZSxcbiAgICAgICAgICBlbmRUaW1lLFxuICAgICAgICAgIGFwcGVuZGluZ1RvQ2FjaGVcbiAgICAgICAgKSxcbiAgICAgIF0pO1xuICAgICAgZmV0Y2hlZEhpc3RvcnkgPSByZXN1bHRzWzFdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGVsZXRlIHN0YXRlSGlzdG9yeUNhY2hlW2NhY2hlS2V5XTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGVIaXN0b3J5ID0gY29tcHV0ZUhpc3RvcnkoXG4gICAgICBoYXNzLFxuICAgICAgZmV0Y2hlZEhpc3RvcnksXG4gICAgICBsb2NhbGl6ZSxcbiAgICAgIGxhbmd1YWdlXG4gICAgKTtcbiAgICBpZiAoYXBwZW5kaW5nVG9DYWNoZSkge1xuICAgICAgbWVyZ2VMaW5lKHN0YXRlSGlzdG9yeS5saW5lLCBjYWNoZS5kYXRhLmxpbmUpO1xuICAgICAgbWVyZ2VUaW1lbGluZShzdGF0ZUhpc3RvcnkudGltZWxpbmUsIGNhY2hlLmRhdGEudGltZWxpbmUpO1xuICAgICAgcHJ1bmVTdGFydFRpbWUoc3RhcnRUaW1lLCBjYWNoZS5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGUuZGF0YSA9IHN0YXRlSGlzdG9yeTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlLmRhdGE7XG4gIH07XG5cbiAgY2FjaGUucHJvbSA9IGdlblByb20oKTtcbiAgY2FjaGUuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICBjYWNoZS5lbmRUaW1lID0gZW5kVGltZTtcbiAgcmV0dXJuIGNhY2hlLnByb207XG59O1xuXG5jb25zdCBtZXJnZUxpbmUgPSAoXG4gIGhpc3RvcnlMaW5lczogTGluZUNoYXJ0VW5pdFtdLFxuICBjYWNoZUxpbmVzOiBMaW5lQ2hhcnRVbml0W11cbikgPT4ge1xuICBoaXN0b3J5TGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSBsaW5lLnVuaXQ7XG4gICAgY29uc3Qgb2xkTGluZSA9IGNhY2hlTGluZXMuZmluZCgoY2FjaGVMaW5lKSA9PiBjYWNoZUxpbmUudW5pdCA9PT0gdW5pdCk7XG4gICAgaWYgKG9sZExpbmUpIHtcbiAgICAgIGxpbmUuZGF0YS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkRW50aXR5ID0gb2xkTGluZS5kYXRhLmZpbmQoXG4gICAgICAgICAgKGNhY2hlRW50aXR5KSA9PiBlbnRpdHkuZW50aXR5X2lkID09PSBjYWNoZUVudGl0eS5lbnRpdHlfaWRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG9sZEVudGl0eSkge1xuICAgICAgICAgIG9sZEVudGl0eS5zdGF0ZXMgPSBvbGRFbnRpdHkuc3RhdGVzLmNvbmNhdChlbnRpdHkuc3RhdGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbGRMaW5lLmRhdGEucHVzaChlbnRpdHkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVMaW5lcy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBtZXJnZVRpbWVsaW5lID0gKFxuICBoaXN0b3J5VGltZWxpbmVzOiBUaW1lbGluZUVudGl0eVtdLFxuICBjYWNoZVRpbWVsaW5lczogVGltZWxpbmVFbnRpdHlbXVxuKSA9PiB7XG4gIGhpc3RvcnlUaW1lbGluZXMuZm9yRWFjaCgodGltZWxpbmUpID0+IHtcbiAgICBjb25zdCBvbGRUaW1lbGluZSA9IGNhY2hlVGltZWxpbmVzLmZpbmQoXG4gICAgICAoY2FjaGVUaW1lbGluZSkgPT4gY2FjaGVUaW1lbGluZS5lbnRpdHlfaWQgPT09IHRpbWVsaW5lLmVudGl0eV9pZFxuICAgICk7XG4gICAgaWYgKG9sZFRpbWVsaW5lKSB7XG4gICAgICBvbGRUaW1lbGluZS5kYXRhID0gb2xkVGltZWxpbmUuZGF0YS5jb25jYXQodGltZWxpbmUuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlVGltZWxpbmVzLnB1c2godGltZWxpbmUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBwcnVuZUFycmF5ID0gKG9yaWdpbmFsU3RhcnRUaW1lOiBEYXRlLCBhcnIpID0+IHtcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGNvbnN0IGNoYW5nZWRBZnRlclN0YXJ0VGltZSA9IGFyci5maW5kSW5kZXgoXG4gICAgKHN0YXRlKSA9PiBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpID4gb3JpZ2luYWxTdGFydFRpbWVcbiAgKTtcbiAgaWYgKGNoYW5nZWRBZnRlclN0YXJ0VGltZSA9PT0gMCkge1xuICAgIC8vIElmIGFsbCBjaGFuZ2VzIGhhcHBlbmVkIGFmdGVyIG9yaWdpbmFsU3RhcnRUaW1lIHRoZW4gd2UgYXJlIGRvbmUuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8vIElmIGFsbCBjaGFuZ2VzIGhhcHBlbmVkIGF0IG9yIGJlZm9yZSBvcmlnaW5hbFN0YXJ0VGltZS4gVXNlIGxhc3QgaW5kZXguXG4gIGNvbnN0IHVwZGF0ZUluZGV4ID1cbiAgICBjaGFuZ2VkQWZ0ZXJTdGFydFRpbWUgPT09IC0xID8gYXJyLmxlbmd0aCAtIDEgOiBjaGFuZ2VkQWZ0ZXJTdGFydFRpbWUgLSAxO1xuICBhcnJbdXBkYXRlSW5kZXhdLmxhc3RfY2hhbmdlZCA9IG9yaWdpbmFsU3RhcnRUaW1lO1xuICByZXR1cm4gYXJyLnNsaWNlKHVwZGF0ZUluZGV4KTtcbn07XG5cbmNvbnN0IHBydW5lU3RhcnRUaW1lID0gKG9yaWdpbmFsU3RhcnRUaW1lOiBEYXRlLCBjYWNoZURhdGE6IEhpc3RvcnlSZXN1bHQpID0+IHtcbiAgY2FjaGVEYXRhLmxpbmUuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGxpbmUuZGF0YS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgIGVudGl0eS5zdGF0ZXMgPSBwcnVuZUFycmF5KG9yaWdpbmFsU3RhcnRUaW1lLCBlbnRpdHkuc3RhdGVzKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY2FjaGVEYXRhLnRpbWVsaW5lLmZvckVhY2goKHRpbWVsaW5lKSA9PiB7XG4gICAgdGltZWxpbmUuZGF0YSA9IHBydW5lQXJyYXkob3JpZ2luYWxTdGFydFRpbWUsIHRpbWVsaW5lLmRhdGEpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IHsgY29tcHV0ZUhpc3RvcnksIGZldGNoRGF0ZSB9IGZyb20gXCIuL2hpc3RvcnlcIjtcbmltcG9ydCB7IGdldFJlY2VudCwgZ2V0UmVjZW50V2l0aENhY2hlIH0gZnJvbSBcIi4vY2FjaGVkLWhpc3RvcnlcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVN0YXRlSGlzdG9yeURhdGEgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImhhc3NDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBmaWx0ZXJUeXBlOiBTdHJpbmcsXG5cbiAgICAgIGNhY2hlQ29uZmlnOiBPYmplY3QsXG5cbiAgICAgIHN0YXJ0VGltZTogRGF0ZSxcbiAgICAgIGVuZFRpbWU6IERhdGUsXG5cbiAgICAgIGVudGl0eUlkOiBTdHJpbmcsXG5cbiAgICAgIGlzTG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBcImZpbHRlckNoYW5nZWREZWJvdW5jZXIoZmlsdGVyVHlwZSwgZW50aXR5SWQsIHN0YXJ0VGltZSwgZW5kVGltZSwgY2FjaGVDb25maWcsIGxvY2FsaXplKVwiLFxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuZmlsdGVyQ2hhbmdlZERlYm91bmNlcihcbiAgICAgIHRoaXMuZmlsdGVyVHlwZSxcbiAgICAgIHRoaXMuZW50aXR5SWQsXG4gICAgICB0aGlzLnN0YXJ0VGltZSxcbiAgICAgIHRoaXMuZW5kVGltZSxcbiAgICAgIHRoaXMuY2FjaGVDb25maWcsXG4gICAgICB0aGlzLmxvY2FsaXplXG4gICAgKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLl9yZWZyZXNoVGltZW91dElkKSB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9yZWZyZXNoVGltZW91dElkKTtcbiAgICAgIHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgaGFzc0NoYW5nZWQobmV3SGFzcywgb2xkSGFzcykge1xuICAgIGlmICghb2xkSGFzcyAmJiAhdGhpcy5fbWFkZUZpcnN0Q2FsbCkge1xuICAgICAgdGhpcy5maWx0ZXJDaGFuZ2VkRGVib3VuY2VyKFxuICAgICAgICB0aGlzLmZpbHRlclR5cGUsXG4gICAgICAgIHRoaXMuZW50aXR5SWQsXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lLFxuICAgICAgICB0aGlzLmVuZFRpbWUsXG4gICAgICAgIHRoaXMuY2FjaGVDb25maWcsXG4gICAgICAgIHRoaXMubG9jYWxpemVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyQ2hhbmdlZERlYm91bmNlciguLi5hcmdzKSB7XG4gICAgdGhpcy5fZGVib3VuY2VGaWx0ZXJDaGFuZ2VkID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgdGhpcy5fZGVib3VuY2VGaWx0ZXJDaGFuZ2VkLFxuICAgICAgdGltZU91dC5hZnRlcigwKSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJDaGFuZ2VkKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmaWx0ZXJDaGFuZ2VkKFxuICAgIGZpbHRlclR5cGUsXG4gICAgZW50aXR5SWQsXG4gICAgc3RhcnRUaW1lLFxuICAgIGVuZFRpbWUsXG4gICAgY2FjaGVDb25maWcsXG4gICAgbG9jYWxpemVcbiAgKSB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlQ29uZmlnICYmICFjYWNoZUNvbmZpZy5jYWNoZUtleSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWxvY2FsaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hZGVGaXJzdENhbGwgPSB0cnVlO1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5oYXNzLmxhbmd1YWdlO1xuICAgIGxldCBkYXRhO1xuXG4gICAgaWYgKGZpbHRlclR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgICBpZiAoIXN0YXJ0VGltZSB8fCAhZW5kVGltZSkgcmV0dXJuO1xuXG4gICAgICBkYXRhID0gZmV0Y2hEYXRlKHRoaXMuaGFzcywgc3RhcnRUaW1lLCBlbmRUaW1lKS50aGVuKChkYXRlSGlzdG9yeSkgPT5cbiAgICAgICAgY29tcHV0ZUhpc3RvcnkodGhpcy5oYXNzLCBkYXRlSGlzdG9yeSwgbG9jYWxpemUsIGxhbmd1YWdlKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGZpbHRlclR5cGUgPT09IFwicmVjZW50LWVudGl0eVwiKSB7XG4gICAgICBpZiAoIWVudGl0eUlkKSByZXR1cm47XG4gICAgICBpZiAoY2FjaGVDb25maWcpIHtcbiAgICAgICAgZGF0YSA9IHRoaXMuZ2V0UmVjZW50V2l0aENhY2hlUmVmcmVzaChcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICBjYWNoZUNvbmZpZyxcbiAgICAgICAgICBsb2NhbGl6ZSxcbiAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IGdldFJlY2VudChcbiAgICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICAgIGVuZFRpbWUsXG4gICAgICAgICAgbG9jYWxpemUsXG4gICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICBkYXRhLnRoZW4oKHN0YXRlSGlzdG9yeSkgPT4ge1xuICAgICAgdGhpcy5fc2V0RGF0YShzdGF0ZUhpc3RvcnkpO1xuICAgICAgdGhpcy5fc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFJlY2VudFdpdGhDYWNoZVJlZnJlc2goZW50aXR5SWQsIGNhY2hlQ29uZmlnLCBsb2NhbGl6ZSwgbGFuZ3VhZ2UpIHtcbiAgICBpZiAodGhpcy5fcmVmcmVzaFRpbWVvdXRJZCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fcmVmcmVzaFRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9yZWZyZXNoVGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGNhY2hlQ29uZmlnLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBnZXRSZWNlbnRXaXRoQ2FjaGUoXG4gICAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIGNhY2hlQ29uZmlnLFxuICAgICAgICAgIGxvY2FsaXplLFxuICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICkudGhlbigoc3RhdGVIaXN0b3J5KSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2V0RGF0YSh7IC4uLnN0YXRlSGlzdG9yeSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBjYWNoZUNvbmZpZy5yZWZyZXNoICogMTAwMCk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZWNlbnRXaXRoQ2FjaGUoXG4gICAgICB0aGlzLmhhc3MsXG4gICAgICBlbnRpdHlJZCxcbiAgICAgIGNhY2hlQ29uZmlnLFxuICAgICAgbG9jYWxpemUsXG4gICAgICBsYW5ndWFnZVxuICAgICk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXN0YXRlLWhpc3RvcnktZGF0YVwiLCBIYVN0YXRlSGlzdG9yeURhdGEpO1xuIiwiaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRGlzcGxheSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZGlzcGxheVwiO1xuXG5jb25zdCBET01BSU5TX1VTRV9MQVNUX1VQREFURUQgPSBbXCJjbGltYXRlXCIsIFwid2F0ZXJfaGVhdGVyXCJdO1xuY29uc3QgTElORV9BVFRSSUJVVEVTX1RPX0tFRVAgPSBbXG4gIFwidGVtcGVyYXR1cmVcIixcbiAgXCJjdXJyZW50X3RlbXBlcmF0dXJlXCIsXG4gIFwidGFyZ2V0X3RlbXBfbG93XCIsXG4gIFwidGFyZ2V0X3RlbXBfaGlnaFwiLFxuICBcImh2YWNfYWN0aW9uXCIsXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVDaGFydFN0YXRlIHtcbiAgc3RhdGU6IHN0cmluZztcbiAgbGFzdF9jaGFuZ2VkOiBzdHJpbmc7XG4gIGF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVDaGFydEVudGl0eSB7XG4gIGRvbWFpbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBzdGF0ZXM6IExpbmVDaGFydFN0YXRlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUNoYXJ0VW5pdCB7XG4gIHVuaXQ6IHN0cmluZztcbiAgaWRlbnRpZmllcjogc3RyaW5nO1xuICBkYXRhOiBMaW5lQ2hhcnRFbnRpdHlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lbGluZVN0YXRlIHtcbiAgc3RhdGVfbG9jYWxpemU6IHN0cmluZztcbiAgc3RhdGU6IHN0cmluZztcbiAgbGFzdF9jaGFuZ2VkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZWxpbmVFbnRpdHkge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBkYXRhOiBUaW1lbGluZVN0YXRlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9yeVJlc3VsdCB7XG4gIGxpbmU6IExpbmVDaGFydFVuaXRbXTtcbiAgdGltZWxpbmU6IFRpbWVsaW5lRW50aXR5W107XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFJlY2VudCA9IChcbiAgaGFzcyxcbiAgZW50aXR5SWQsXG4gIHN0YXJ0VGltZSxcbiAgZW5kVGltZSxcbiAgc2tpcEluaXRpYWxTdGF0ZSA9IGZhbHNlXG4pOiBQcm9taXNlPEhhc3NFbnRpdHlbXVtdPiA9PiB7XG4gIGxldCB1cmwgPSBcImhpc3RvcnkvcGVyaW9kXCI7XG4gIGlmIChzdGFydFRpbWUpIHtcbiAgICB1cmwgKz0gXCIvXCIgKyBzdGFydFRpbWUudG9JU09TdHJpbmcoKTtcbiAgfVxuICB1cmwgKz0gXCI/ZmlsdGVyX2VudGl0eV9pZD1cIiArIGVudGl0eUlkO1xuICBpZiAoZW5kVGltZSkge1xuICAgIHVybCArPSBcIiZlbmRfdGltZT1cIiArIGVuZFRpbWUudG9JU09TdHJpbmcoKTtcbiAgfVxuICBpZiAoc2tpcEluaXRpYWxTdGF0ZSkge1xuICAgIHVybCArPSBcIiZza2lwX2luaXRpYWxfc3RhdGVcIjtcbiAgfVxuXG4gIHJldHVybiBoYXNzLmNhbGxBcGkoXCJHRVRcIiwgdXJsKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaERhdGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXJ0VGltZTogRGF0ZSxcbiAgZW5kVGltZTogRGF0ZVxuKTogUHJvbWlzZTxIYXNzRW50aXR5W11bXT4gPT4ge1xuICByZXR1cm4gaGFzcy5jYWxsQXBpKFxuICAgIFwiR0VUXCIsXG4gICAgYGhpc3RvcnkvcGVyaW9kLyR7c3RhcnRUaW1lLnRvSVNPU3RyaW5nKCl9P2VuZF90aW1lPSR7ZW5kVGltZS50b0lTT1N0cmluZygpfWBcbiAgKTtcbn07XG5cbmNvbnN0IGVxdWFsU3RhdGUgPSAob2JqMTogTGluZUNoYXJ0U3RhdGUsIG9iajI6IExpbmVDaGFydFN0YXRlKSA9PlxuICBvYmoxLnN0YXRlID09PSBvYmoyLnN0YXRlICYmXG4gIC8vIFRoZXkgZWl0aGVyIGJvdGggaGF2ZSBhbiBhdHRyaWJ1dGVzIG9iamVjdCBvciBub3RcbiAgKCFvYmoxLmF0dHJpYnV0ZXMgfHxcbiAgICBMSU5FX0FUVFJJQlVURVNfVE9fS0VFUC5ldmVyeShcbiAgICAgIChhdHRyKSA9PiBvYmoxLmF0dHJpYnV0ZXMhW2F0dHJdID09PSBvYmoyLmF0dHJpYnV0ZXMhW2F0dHJdXG4gICAgKSk7XG5cbmNvbnN0IHByb2Nlc3NUaW1lbGluZUVudGl0eSA9IChcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgbGFuZ3VhZ2U6IHN0cmluZyxcbiAgc3RhdGVzOiBIYXNzRW50aXR5W11cbik6IFRpbWVsaW5lRW50aXR5ID0+IHtcbiAgY29uc3QgZGF0YTogVGltZWxpbmVTdGF0ZVtdID0gW107XG5cbiAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwICYmIHN0YXRlLnN0YXRlID09PSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0uc3RhdGUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGRhdGEucHVzaCh7XG4gICAgICBzdGF0ZV9sb2NhbGl6ZTogY29tcHV0ZVN0YXRlRGlzcGxheShsb2NhbGl6ZSwgc3RhdGUsIGxhbmd1YWdlKSxcbiAgICAgIHN0YXRlOiBzdGF0ZS5zdGF0ZSxcbiAgICAgIGxhc3RfY2hhbmdlZDogc3RhdGUubGFzdF9jaGFuZ2VkLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlc1swXSksXG4gICAgZW50aXR5X2lkOiBzdGF0ZXNbMF0uZW50aXR5X2lkLFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5jb25zdCBwcm9jZXNzTGluZUNoYXJ0RW50aXRpZXMgPSAoXG4gIHVuaXQsXG4gIGVudGl0aWVzOiBIYXNzRW50aXR5W11bXVxuKTogTGluZUNoYXJ0VW5pdCA9PiB7XG4gIGNvbnN0IGRhdGE6IExpbmVDaGFydEVudGl0eVtdID0gW107XG5cbiAgZm9yIChjb25zdCBzdGF0ZXMgb2YgZW50aXRpZXMpIHtcbiAgICBjb25zdCBsYXN0OiBIYXNzRW50aXR5ID0gc3RhdGVzW3N0YXRlcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4obGFzdCk7XG4gICAgY29uc3QgcHJvY2Vzc2VkU3RhdGVzOiBMaW5lQ2hhcnRTdGF0ZVtdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHN0YXRlIG9mIHN0YXRlcykge1xuICAgICAgbGV0IHByb2Nlc3NlZFN0YXRlOiBMaW5lQ2hhcnRTdGF0ZTtcblxuICAgICAgaWYgKERPTUFJTlNfVVNFX0xBU1RfVVBEQVRFRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgICAgIHByb2Nlc3NlZFN0YXRlID0ge1xuICAgICAgICAgIHN0YXRlOiBzdGF0ZS5zdGF0ZSxcbiAgICAgICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlLmxhc3RfdXBkYXRlZCxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgTElORV9BVFRSSUJVVEVTX1RPX0tFRVApIHtcbiAgICAgICAgICBpZiAoYXR0ciBpbiBzdGF0ZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBwcm9jZXNzZWRTdGF0ZS5hdHRyaWJ1dGVzIVthdHRyXSA9IHN0YXRlLmF0dHJpYnV0ZXNbYXR0cl07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzZWRTdGF0ZSA9IHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHByb2Nlc3NlZFN0YXRlcy5sZW5ndGggPiAxICYmXG4gICAgICAgIGVxdWFsU3RhdGUoXG4gICAgICAgICAgcHJvY2Vzc2VkU3RhdGUsXG4gICAgICAgICAgcHJvY2Vzc2VkU3RhdGVzW3Byb2Nlc3NlZFN0YXRlcy5sZW5ndGggLSAxXVxuICAgICAgICApICYmXG4gICAgICAgIGVxdWFsU3RhdGUocHJvY2Vzc2VkU3RhdGUsIHByb2Nlc3NlZFN0YXRlc1twcm9jZXNzZWRTdGF0ZXMubGVuZ3RoIC0gMl0pXG4gICAgICApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3NlZFN0YXRlcy5wdXNoKHByb2Nlc3NlZFN0YXRlKTtcbiAgICB9XG5cbiAgICBkYXRhLnB1c2goe1xuICAgICAgZG9tYWluLFxuICAgICAgbmFtZTogY29tcHV0ZVN0YXRlTmFtZShsYXN0KSxcbiAgICAgIGVudGl0eV9pZDogbGFzdC5lbnRpdHlfaWQsXG4gICAgICBzdGF0ZXM6IHByb2Nlc3NlZFN0YXRlcyxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdW5pdCxcbiAgICBpZGVudGlmaWVyOiBlbnRpdGllcy5tYXAoKHN0YXRlcykgPT4gc3RhdGVzWzBdLmVudGl0eV9pZCkuam9pbihcIlwiKSxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVIaXN0b3J5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzdGF0ZUhpc3Rvcnk6IEhhc3NFbnRpdHlbXVtdLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBsYW5ndWFnZTogc3RyaW5nXG4pOiBIaXN0b3J5UmVzdWx0ID0+IHtcbiAgY29uc3QgbGluZUNoYXJ0RGV2aWNlczogeyBbdW5pdDogc3RyaW5nXTogSGFzc0VudGl0eVtdW10gfSA9IHt9O1xuICBjb25zdCB0aW1lbGluZURldmljZXM6IFRpbWVsaW5lRW50aXR5W10gPSBbXTtcbiAgaWYgKCFzdGF0ZUhpc3RvcnkpIHtcbiAgICByZXR1cm4geyBsaW5lOiBbXSwgdGltZWxpbmU6IFtdIH07XG4gIH1cblxuICBzdGF0ZUhpc3RvcnkuZm9yRWFjaCgoc3RhdGVJbmZvKSA9PiB7XG4gICAgaWYgKHN0YXRlSW5mby5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZVdpdGhVbml0ID0gc3RhdGVJbmZvLmZpbmQoXG4gICAgICAoc3RhdGUpID0+IFwidW5pdF9vZl9tZWFzdXJlbWVudFwiIGluIHN0YXRlLmF0dHJpYnV0ZXNcbiAgICApO1xuXG4gICAgbGV0IHVuaXQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIGlmIChzdGF0ZVdpdGhVbml0KSB7XG4gICAgICB1bml0ID0gc3RhdGVXaXRoVW5pdC5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChjb21wdXRlU3RhdGVEb21haW4oc3RhdGVJbmZvWzBdKSA9PT0gXCJjbGltYXRlXCIpIHtcbiAgICAgIHVuaXQgPSBoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZTtcbiAgICB9IGVsc2UgaWYgKGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZUluZm9bMF0pID09PSBcIndhdGVyX2hlYXRlclwiKSB7XG4gICAgICB1bml0ID0gaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmU7XG4gICAgfVxuXG4gICAgaWYgKCF1bml0KSB7XG4gICAgICB0aW1lbGluZURldmljZXMucHVzaChcbiAgICAgICAgcHJvY2Vzc1RpbWVsaW5lRW50aXR5KGxvY2FsaXplLCBsYW5ndWFnZSwgc3RhdGVJbmZvKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgaW4gbGluZUNoYXJ0RGV2aWNlcykge1xuICAgICAgbGluZUNoYXJ0RGV2aWNlc1t1bml0XS5wdXNoKHN0YXRlSW5mbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmVDaGFydERldmljZXNbdW5pdF0gPSBbc3RhdGVJbmZvXTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHVuaXRTdGF0ZXMgPSBPYmplY3Qua2V5cyhsaW5lQ2hhcnREZXZpY2VzKS5tYXAoKHVuaXQpID0+XG4gICAgcHJvY2Vzc0xpbmVDaGFydEVudGl0aWVzKHVuaXQsIGxpbmVDaGFydERldmljZXNbdW5pdF0pXG4gICk7XG5cbiAgcmV0dXJuIHsgbGluZTogdW5pdFN0YXRlcywgdGltZWxpbmU6IHRpbWVsaW5lRGV2aWNlcyB9O1xufTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeFZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3TkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0NBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbExBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXNDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFLQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDak9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=