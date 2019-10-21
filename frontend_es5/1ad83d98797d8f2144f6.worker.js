/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/frontend_es5/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/ts-loader/index.js?!./src/resources/markdown_worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cssfilter/lib/css.js":
/*!*******************************************!*\
  !*** ./node_modules/cssfilter/lib/css.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */
var DEFAULT = __webpack_require__(/*! ./default */ "./node_modules/cssfilter/lib/default.js");

var parseStyle = __webpack_require__(/*! ./parser */ "./node_modules/cssfilter/lib/parser.js");

var _ = __webpack_require__(/*! ./util */ "./node_modules/cssfilter/lib/util.js");
/**
 * 返回值是否为空
 *
 * @param {Object} obj
 * @return {Boolean}
 */


function isNull(obj) {
  return obj === undefined || obj === null;
}
/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */


function shallowCopyObject(obj) {
  var ret = {};

  for (var i in obj) {
    ret[i] = obj[i];
  }

  return ret;
}
/**
 * 创建CSS过滤器
 *
 * @param {Object} options
 *   - {Object} whiteList
 *   - {Function} onAttr
 *   - {Function} onIgnoreAttr
 *   - {Function} safeAttrValue
 */


function FilterCSS(options) {
  options = shallowCopyObject(options || {});
  options.whiteList = options.whiteList || DEFAULT.whiteList;
  options.onAttr = options.onAttr || DEFAULT.onAttr;
  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  this.options = options;
}

FilterCSS.prototype.process = function (css) {
  // 兼容各种奇葩输入
  css = css || '';
  css = css.toString();
  if (!css) return '';
  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onAttr = options.onAttr;
  var onIgnoreAttr = options.onIgnoreAttr;
  var safeAttrValue = options.safeAttrValue;
  var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {
    var check = whiteList[name];
    var isWhite = false;
    if (check === true) isWhite = check;else if (typeof check === 'function') isWhite = check(value);else if (check instanceof RegExp) isWhite = check.test(value);
    if (isWhite !== true) isWhite = false; // 如果过滤后 value 为空则直接忽略

    value = safeAttrValue(name, value);
    if (!value) return;
    var opts = {
      position: position,
      sourcePosition: sourcePosition,
      source: source,
      isWhite: isWhite
    };

    if (isWhite) {
      var ret = onAttr(name, value, opts);

      if (isNull(ret)) {
        return name + ':' + value;
      } else {
        return ret;
      }
    } else {
      var ret = onIgnoreAttr(name, value, opts);

      if (!isNull(ret)) {
        return ret;
      }
    }
  });
  return retCSS;
};

module.exports = FilterCSS;

/***/ }),

/***/ "./node_modules/cssfilter/lib/default.js":
/*!***********************************************!*\
  !*** ./node_modules/cssfilter/lib/default.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */
function getDefaultWhiteList() {
  // 白名单值说明：
  // true: 允许该属性
  // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
  // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
  // 除上面列出的值外均表示不允许
  var whiteList = {};
  whiteList['align-content'] = false; // default: auto

  whiteList['align-items'] = false; // default: auto

  whiteList['align-self'] = false; // default: auto

  whiteList['alignment-adjust'] = false; // default: auto

  whiteList['alignment-baseline'] = false; // default: baseline

  whiteList['all'] = false; // default: depending on individual properties

  whiteList['anchor-point'] = false; // default: none

  whiteList['animation'] = false; // default: depending on individual properties

  whiteList['animation-delay'] = false; // default: 0

  whiteList['animation-direction'] = false; // default: normal

  whiteList['animation-duration'] = false; // default: 0

  whiteList['animation-fill-mode'] = false; // default: none

  whiteList['animation-iteration-count'] = false; // default: 1

  whiteList['animation-name'] = false; // default: none

  whiteList['animation-play-state'] = false; // default: running

  whiteList['animation-timing-function'] = false; // default: ease

  whiteList['azimuth'] = false; // default: center

  whiteList['backface-visibility'] = false; // default: visible

  whiteList['background'] = true; // default: depending on individual properties

  whiteList['background-attachment'] = true; // default: scroll

  whiteList['background-clip'] = true; // default: border-box

  whiteList['background-color'] = true; // default: transparent

  whiteList['background-image'] = true; // default: none

  whiteList['background-origin'] = true; // default: padding-box

  whiteList['background-position'] = true; // default: 0% 0%

  whiteList['background-repeat'] = true; // default: repeat

  whiteList['background-size'] = true; // default: auto

  whiteList['baseline-shift'] = false; // default: baseline

  whiteList['binding'] = false; // default: none

  whiteList['bleed'] = false; // default: 6pt

  whiteList['bookmark-label'] = false; // default: content()

  whiteList['bookmark-level'] = false; // default: none

  whiteList['bookmark-state'] = false; // default: open

  whiteList['border'] = true; // default: depending on individual properties

  whiteList['border-bottom'] = true; // default: depending on individual properties

  whiteList['border-bottom-color'] = true; // default: current color

  whiteList['border-bottom-left-radius'] = true; // default: 0

  whiteList['border-bottom-right-radius'] = true; // default: 0

  whiteList['border-bottom-style'] = true; // default: none

  whiteList['border-bottom-width'] = true; // default: medium

  whiteList['border-collapse'] = true; // default: separate

  whiteList['border-color'] = true; // default: depending on individual properties

  whiteList['border-image'] = true; // default: none

  whiteList['border-image-outset'] = true; // default: 0

  whiteList['border-image-repeat'] = true; // default: stretch

  whiteList['border-image-slice'] = true; // default: 100%

  whiteList['border-image-source'] = true; // default: none

  whiteList['border-image-width'] = true; // default: 1

  whiteList['border-left'] = true; // default: depending on individual properties

  whiteList['border-left-color'] = true; // default: current color

  whiteList['border-left-style'] = true; // default: none

  whiteList['border-left-width'] = true; // default: medium

  whiteList['border-radius'] = true; // default: 0

  whiteList['border-right'] = true; // default: depending on individual properties

  whiteList['border-right-color'] = true; // default: current color

  whiteList['border-right-style'] = true; // default: none

  whiteList['border-right-width'] = true; // default: medium

  whiteList['border-spacing'] = true; // default: 0

  whiteList['border-style'] = true; // default: depending on individual properties

  whiteList['border-top'] = true; // default: depending on individual properties

  whiteList['border-top-color'] = true; // default: current color

  whiteList['border-top-left-radius'] = true; // default: 0

  whiteList['border-top-right-radius'] = true; // default: 0

  whiteList['border-top-style'] = true; // default: none

  whiteList['border-top-width'] = true; // default: medium

  whiteList['border-width'] = true; // default: depending on individual properties

  whiteList['bottom'] = false; // default: auto

  whiteList['box-decoration-break'] = true; // default: slice

  whiteList['box-shadow'] = true; // default: none

  whiteList['box-sizing'] = true; // default: content-box

  whiteList['box-snap'] = true; // default: none

  whiteList['box-suppress'] = true; // default: show

  whiteList['break-after'] = true; // default: auto

  whiteList['break-before'] = true; // default: auto

  whiteList['break-inside'] = true; // default: auto

  whiteList['caption-side'] = false; // default: top

  whiteList['chains'] = false; // default: none

  whiteList['clear'] = true; // default: none

  whiteList['clip'] = false; // default: auto

  whiteList['clip-path'] = false; // default: none

  whiteList['clip-rule'] = false; // default: nonzero

  whiteList['color'] = true; // default: implementation dependent

  whiteList['color-interpolation-filters'] = true; // default: auto

  whiteList['column-count'] = false; // default: auto

  whiteList['column-fill'] = false; // default: balance

  whiteList['column-gap'] = false; // default: normal

  whiteList['column-rule'] = false; // default: depending on individual properties

  whiteList['column-rule-color'] = false; // default: current color

  whiteList['column-rule-style'] = false; // default: medium

  whiteList['column-rule-width'] = false; // default: medium

  whiteList['column-span'] = false; // default: none

  whiteList['column-width'] = false; // default: auto

  whiteList['columns'] = false; // default: depending on individual properties

  whiteList['contain'] = false; // default: none

  whiteList['content'] = false; // default: normal

  whiteList['counter-increment'] = false; // default: none

  whiteList['counter-reset'] = false; // default: none

  whiteList['counter-set'] = false; // default: none

  whiteList['crop'] = false; // default: auto

  whiteList['cue'] = false; // default: depending on individual properties

  whiteList['cue-after'] = false; // default: none

  whiteList['cue-before'] = false; // default: none

  whiteList['cursor'] = false; // default: auto

  whiteList['direction'] = false; // default: ltr

  whiteList['display'] = true; // default: depending on individual properties

  whiteList['display-inside'] = true; // default: auto

  whiteList['display-list'] = true; // default: none

  whiteList['display-outside'] = true; // default: inline-level

  whiteList['dominant-baseline'] = false; // default: auto

  whiteList['elevation'] = false; // default: level

  whiteList['empty-cells'] = false; // default: show

  whiteList['filter'] = false; // default: none

  whiteList['flex'] = false; // default: depending on individual properties

  whiteList['flex-basis'] = false; // default: auto

  whiteList['flex-direction'] = false; // default: row

  whiteList['flex-flow'] = false; // default: depending on individual properties

  whiteList['flex-grow'] = false; // default: 0

  whiteList['flex-shrink'] = false; // default: 1

  whiteList['flex-wrap'] = false; // default: nowrap

  whiteList['float'] = false; // default: none

  whiteList['float-offset'] = false; // default: 0 0

  whiteList['flood-color'] = false; // default: black

  whiteList['flood-opacity'] = false; // default: 1

  whiteList['flow-from'] = false; // default: none

  whiteList['flow-into'] = false; // default: none

  whiteList['font'] = true; // default: depending on individual properties

  whiteList['font-family'] = true; // default: implementation dependent

  whiteList['font-feature-settings'] = true; // default: normal

  whiteList['font-kerning'] = true; // default: auto

  whiteList['font-language-override'] = true; // default: normal

  whiteList['font-size'] = true; // default: medium

  whiteList['font-size-adjust'] = true; // default: none

  whiteList['font-stretch'] = true; // default: normal

  whiteList['font-style'] = true; // default: normal

  whiteList['font-synthesis'] = true; // default: weight style

  whiteList['font-variant'] = true; // default: normal

  whiteList['font-variant-alternates'] = true; // default: normal

  whiteList['font-variant-caps'] = true; // default: normal

  whiteList['font-variant-east-asian'] = true; // default: normal

  whiteList['font-variant-ligatures'] = true; // default: normal

  whiteList['font-variant-numeric'] = true; // default: normal

  whiteList['font-variant-position'] = true; // default: normal

  whiteList['font-weight'] = true; // default: normal

  whiteList['grid'] = false; // default: depending on individual properties

  whiteList['grid-area'] = false; // default: depending on individual properties

  whiteList['grid-auto-columns'] = false; // default: auto

  whiteList['grid-auto-flow'] = false; // default: none

  whiteList['grid-auto-rows'] = false; // default: auto

  whiteList['grid-column'] = false; // default: depending on individual properties

  whiteList['grid-column-end'] = false; // default: auto

  whiteList['grid-column-start'] = false; // default: auto

  whiteList['grid-row'] = false; // default: depending on individual properties

  whiteList['grid-row-end'] = false; // default: auto

  whiteList['grid-row-start'] = false; // default: auto

  whiteList['grid-template'] = false; // default: depending on individual properties

  whiteList['grid-template-areas'] = false; // default: none

  whiteList['grid-template-columns'] = false; // default: none

  whiteList['grid-template-rows'] = false; // default: none

  whiteList['hanging-punctuation'] = false; // default: none

  whiteList['height'] = true; // default: auto

  whiteList['hyphens'] = false; // default: manual

  whiteList['icon'] = false; // default: auto

  whiteList['image-orientation'] = false; // default: auto

  whiteList['image-resolution'] = false; // default: normal

  whiteList['ime-mode'] = false; // default: auto

  whiteList['initial-letters'] = false; // default: normal

  whiteList['inline-box-align'] = false; // default: last

  whiteList['justify-content'] = false; // default: auto

  whiteList['justify-items'] = false; // default: auto

  whiteList['justify-self'] = false; // default: auto

  whiteList['left'] = false; // default: auto

  whiteList['letter-spacing'] = true; // default: normal

  whiteList['lighting-color'] = true; // default: white

  whiteList['line-box-contain'] = false; // default: block inline replaced

  whiteList['line-break'] = false; // default: auto

  whiteList['line-grid'] = false; // default: match-parent

  whiteList['line-height'] = false; // default: normal

  whiteList['line-snap'] = false; // default: none

  whiteList['line-stacking'] = false; // default: depending on individual properties

  whiteList['line-stacking-ruby'] = false; // default: exclude-ruby

  whiteList['line-stacking-shift'] = false; // default: consider-shifts

  whiteList['line-stacking-strategy'] = false; // default: inline-line-height

  whiteList['list-style'] = true; // default: depending on individual properties

  whiteList['list-style-image'] = true; // default: none

  whiteList['list-style-position'] = true; // default: outside

  whiteList['list-style-type'] = true; // default: disc

  whiteList['margin'] = true; // default: depending on individual properties

  whiteList['margin-bottom'] = true; // default: 0

  whiteList['margin-left'] = true; // default: 0

  whiteList['margin-right'] = true; // default: 0

  whiteList['margin-top'] = true; // default: 0

  whiteList['marker-offset'] = false; // default: auto

  whiteList['marker-side'] = false; // default: list-item

  whiteList['marks'] = false; // default: none

  whiteList['mask'] = false; // default: border-box

  whiteList['mask-box'] = false; // default: see individual properties

  whiteList['mask-box-outset'] = false; // default: 0

  whiteList['mask-box-repeat'] = false; // default: stretch

  whiteList['mask-box-slice'] = false; // default: 0 fill

  whiteList['mask-box-source'] = false; // default: none

  whiteList['mask-box-width'] = false; // default: auto

  whiteList['mask-clip'] = false; // default: border-box

  whiteList['mask-image'] = false; // default: none

  whiteList['mask-origin'] = false; // default: border-box

  whiteList['mask-position'] = false; // default: center

  whiteList['mask-repeat'] = false; // default: no-repeat

  whiteList['mask-size'] = false; // default: border-box

  whiteList['mask-source-type'] = false; // default: auto

  whiteList['mask-type'] = false; // default: luminance

  whiteList['max-height'] = true; // default: none

  whiteList['max-lines'] = false; // default: none

  whiteList['max-width'] = true; // default: none

  whiteList['min-height'] = true; // default: 0

  whiteList['min-width'] = true; // default: 0

  whiteList['move-to'] = false; // default: normal

  whiteList['nav-down'] = false; // default: auto

  whiteList['nav-index'] = false; // default: auto

  whiteList['nav-left'] = false; // default: auto

  whiteList['nav-right'] = false; // default: auto

  whiteList['nav-up'] = false; // default: auto

  whiteList['object-fit'] = false; // default: fill

  whiteList['object-position'] = false; // default: 50% 50%

  whiteList['opacity'] = false; // default: 1

  whiteList['order'] = false; // default: 0

  whiteList['orphans'] = false; // default: 2

  whiteList['outline'] = false; // default: depending on individual properties

  whiteList['outline-color'] = false; // default: invert

  whiteList['outline-offset'] = false; // default: 0

  whiteList['outline-style'] = false; // default: none

  whiteList['outline-width'] = false; // default: medium

  whiteList['overflow'] = false; // default: depending on individual properties

  whiteList['overflow-wrap'] = false; // default: normal

  whiteList['overflow-x'] = false; // default: visible

  whiteList['overflow-y'] = false; // default: visible

  whiteList['padding'] = true; // default: depending on individual properties

  whiteList['padding-bottom'] = true; // default: 0

  whiteList['padding-left'] = true; // default: 0

  whiteList['padding-right'] = true; // default: 0

  whiteList['padding-top'] = true; // default: 0

  whiteList['page'] = false; // default: auto

  whiteList['page-break-after'] = false; // default: auto

  whiteList['page-break-before'] = false; // default: auto

  whiteList['page-break-inside'] = false; // default: auto

  whiteList['page-policy'] = false; // default: start

  whiteList['pause'] = false; // default: implementation dependent

  whiteList['pause-after'] = false; // default: implementation dependent

  whiteList['pause-before'] = false; // default: implementation dependent

  whiteList['perspective'] = false; // default: none

  whiteList['perspective-origin'] = false; // default: 50% 50%

  whiteList['pitch'] = false; // default: medium

  whiteList['pitch-range'] = false; // default: 50

  whiteList['play-during'] = false; // default: auto

  whiteList['position'] = false; // default: static

  whiteList['presentation-level'] = false; // default: 0

  whiteList['quotes'] = false; // default: text

  whiteList['region-fragment'] = false; // default: auto

  whiteList['resize'] = false; // default: none

  whiteList['rest'] = false; // default: depending on individual properties

  whiteList['rest-after'] = false; // default: none

  whiteList['rest-before'] = false; // default: none

  whiteList['richness'] = false; // default: 50

  whiteList['right'] = false; // default: auto

  whiteList['rotation'] = false; // default: 0

  whiteList['rotation-point'] = false; // default: 50% 50%

  whiteList['ruby-align'] = false; // default: auto

  whiteList['ruby-merge'] = false; // default: separate

  whiteList['ruby-position'] = false; // default: before

  whiteList['shape-image-threshold'] = false; // default: 0.0

  whiteList['shape-outside'] = false; // default: none

  whiteList['shape-margin'] = false; // default: 0

  whiteList['size'] = false; // default: auto

  whiteList['speak'] = false; // default: auto

  whiteList['speak-as'] = false; // default: normal

  whiteList['speak-header'] = false; // default: once

  whiteList['speak-numeral'] = false; // default: continuous

  whiteList['speak-punctuation'] = false; // default: none

  whiteList['speech-rate'] = false; // default: medium

  whiteList['stress'] = false; // default: 50

  whiteList['string-set'] = false; // default: none

  whiteList['tab-size'] = false; // default: 8

  whiteList['table-layout'] = false; // default: auto

  whiteList['text-align'] = true; // default: start

  whiteList['text-align-last'] = true; // default: auto

  whiteList['text-combine-upright'] = true; // default: none

  whiteList['text-decoration'] = true; // default: none

  whiteList['text-decoration-color'] = true; // default: currentColor

  whiteList['text-decoration-line'] = true; // default: none

  whiteList['text-decoration-skip'] = true; // default: objects

  whiteList['text-decoration-style'] = true; // default: solid

  whiteList['text-emphasis'] = true; // default: depending on individual properties

  whiteList['text-emphasis-color'] = true; // default: currentColor

  whiteList['text-emphasis-position'] = true; // default: over right

  whiteList['text-emphasis-style'] = true; // default: none

  whiteList['text-height'] = true; // default: auto

  whiteList['text-indent'] = true; // default: 0

  whiteList['text-justify'] = true; // default: auto

  whiteList['text-orientation'] = true; // default: mixed

  whiteList['text-overflow'] = true; // default: clip

  whiteList['text-shadow'] = true; // default: none

  whiteList['text-space-collapse'] = true; // default: collapse

  whiteList['text-transform'] = true; // default: none

  whiteList['text-underline-position'] = true; // default: auto

  whiteList['text-wrap'] = true; // default: normal

  whiteList['top'] = false; // default: auto

  whiteList['transform'] = false; // default: none

  whiteList['transform-origin'] = false; // default: 50% 50% 0

  whiteList['transform-style'] = false; // default: flat

  whiteList['transition'] = false; // default: depending on individual properties

  whiteList['transition-delay'] = false; // default: 0s

  whiteList['transition-duration'] = false; // default: 0s

  whiteList['transition-property'] = false; // default: all

  whiteList['transition-timing-function'] = false; // default: ease

  whiteList['unicode-bidi'] = false; // default: normal

  whiteList['vertical-align'] = false; // default: baseline

  whiteList['visibility'] = false; // default: visible

  whiteList['voice-balance'] = false; // default: center

  whiteList['voice-duration'] = false; // default: auto

  whiteList['voice-family'] = false; // default: implementation dependent

  whiteList['voice-pitch'] = false; // default: medium

  whiteList['voice-range'] = false; // default: medium

  whiteList['voice-rate'] = false; // default: normal

  whiteList['voice-stress'] = false; // default: normal

  whiteList['voice-volume'] = false; // default: medium

  whiteList['volume'] = false; // default: medium

  whiteList['white-space'] = false; // default: normal

  whiteList['widows'] = false; // default: 2

  whiteList['width'] = true; // default: auto

  whiteList['will-change'] = false; // default: auto

  whiteList['word-break'] = true; // default: normal

  whiteList['word-spacing'] = true; // default: normal

  whiteList['word-wrap'] = true; // default: normal

  whiteList['wrap-flow'] = false; // default: auto

  whiteList['wrap-through'] = false; // default: wrap

  whiteList['writing-mode'] = false; // default: horizontal-tb

  whiteList['z-index'] = false; // default: auto

  return whiteList;
}
/**
 * 匹配到白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */


function onAttr(name, value, options) {} // do nothing

/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */


function onIgnoreAttr(name, value, options) {// do nothing
}

var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
/**
 * 过滤属性值
 *
 * @param {String} name
 * @param {String} value
 * @return {String}
 */

function safeAttrValue(name, value) {
  if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
  return value;
}

exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onAttr = onAttr;
exports.onIgnoreAttr = onIgnoreAttr;
exports.safeAttrValue = safeAttrValue;

/***/ }),

/***/ "./node_modules/cssfilter/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/cssfilter/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */
var DEFAULT = __webpack_require__(/*! ./default */ "./node_modules/cssfilter/lib/default.js");

var FilterCSS = __webpack_require__(/*! ./css */ "./node_modules/cssfilter/lib/css.js");
/**
 * XSS过滤
 *
 * @param {String} css 要过滤的CSS代码
 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
 * @return {String}
 */


function filterCSS(html, options) {
  var xss = new FilterCSS(options);
  return xss.process(html);
} // 输出


exports = module.exports = filterCSS;
exports.FilterCSS = FilterCSS;

for (var i in DEFAULT) {
  exports[i] = DEFAULT[i];
} // 在浏览器端使用


if (typeof window !== 'undefined') {
  window.filterCSS = module.exports;
}

/***/ }),

/***/ "./node_modules/cssfilter/lib/parser.js":
/*!**********************************************!*\
  !*** ./node_modules/cssfilter/lib/parser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */
var _ = __webpack_require__(/*! ./util */ "./node_modules/cssfilter/lib/util.js");
/**
 * 解析style
 *
 * @param {String} css
 * @param {Function} onAttr 处理属性的函数
 *   参数格式： function (sourcePosition, position, name, value, source)
 * @return {String}
 */


function parseStyle(css, onAttr) {
  css = _.trimRight(css);
  if (css[css.length - 1] !== ';') css += ';';
  var cssLength = css.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i = 0;
  var retCSS = '';

  function addNewAttr() {
    // 如果没有正常的闭合圆括号，则直接忽略当前属性
    if (!isParenthesisOpen) {
      var source = _.trim(css.slice(lastPos, i));

      var j = source.indexOf(':');

      if (j !== -1) {
        var name = _.trim(source.slice(0, j));

        var value = _.trim(source.slice(j + 1)); // 必须有属性名称


        if (name) {
          var ret = onAttr(lastPos, retCSS.length, name, value, source);
          if (ret) retCSS += ret + '; ';
        }
      }
    }

    lastPos = i + 1;
  }

  for (; i < cssLength; i++) {
    var c = css[i];

    if (c === '/' && css[i + 1] === '*') {
      // 备注开始
      var j = css.indexOf('*/', i + 2); // 如果没有正常的备注结束，则后面的部分全部跳过

      if (j === -1) break; // 直接将当前位置调到备注结尾，并且初始化状态

      i = j + 1;
      lastPos = i + 1;
      isParenthesisOpen = false;
    } else if (c === '(') {
      isParenthesisOpen = true;
    } else if (c === ')') {
      isParenthesisOpen = false;
    } else if (c === ';') {
      if (isParenthesisOpen) {// 在圆括号里面，忽略
      } else {
        addNewAttr();
      }
    } else if (c === '\n') {
      addNewAttr();
    }
  }

  return _.trim(retCSS);
}

module.exports = parseStyle;

/***/ }),

/***/ "./node_modules/cssfilter/lib/util.js":
/*!********************************************!*\
  !*** ./node_modules/cssfilter/lib/util.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  indexOf: function indexOf(arr, item) {
    var i, j;

    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }

    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },
  forEach: function forEach(arr, fn, scope) {
    var i, j;

    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }

    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function trim(str) {
    if (String.prototype.trim) {
      return str.trim();
    }

    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  trimRight: function trimRight(str) {
    if (String.prototype.trimRight) {
      return str.trimRight();
    }

    return str.replace(/(\s*$)/g, '');
  }
};

/***/ }),

/***/ "./node_modules/marked/lib/marked.js":
/*!*******************************************!*\
  !*** ./node_modules/marked/lib/marked.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2018, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
;

(function (root) {
  'use strict';
  /**
   * Block-Level Grammar
   */

  var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: noop,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
    nptable: noop,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
    + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
    + ')',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    table: noop,
    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
    paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}\.)/;
  block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
  block.item = edit(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
  block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
  block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
  block._comment = /<!--(?!-?>)[\s\S]*?-->/;
  block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.paragraph = edit(block.paragraph).replace('hr', block.hr).replace('heading', block.heading).replace('lheading', block.lheading).replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
  /**
   * Normal Block Grammar
   */

  block.normal = merge({}, block);
  /**
   * GFM Block Grammar
   */

  block.gfm = merge({}, block.normal, {
    fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    paragraph: /^/,
    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
  });
  block.gfm.paragraph = edit(block.paragraph).replace('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|').getRegex();
  /**
   * GFM + Tables Block Grammar
   */

  block.tables = merge({}, block.gfm, {
    nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
    table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
  });
  /**
   * Pedantic grammar
   */

  block.pedantic = merge({}, block.normal, {
    html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
  });
  /**
   * Block Lexer
   */

  function Lexer(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || marked.defaults;
    this.rules = block.normal;

    if (this.options.pedantic) {
      this.rules = block.pedantic;
    } else if (this.options.gfm) {
      if (this.options.tables) {
        this.rules = block.tables;
      } else {
        this.rules = block.gfm;
      }
    }
  }
  /**
   * Expose Block Rules
   */


  Lexer.rules = block;
  /**
   * Static Lex Method
   */

  Lexer.lex = function (src, options) {
    var lexer = new Lexer(options);
    return lexer.lex(src);
  };
  /**
   * Preprocessing
   */


  Lexer.prototype.lex = function (src) {
    src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');
    return this.token(src, true);
  };
  /**
   * Lexing
   */


  Lexer.prototype.token = function (src, top) {
    src = src.replace(/^ +$/gm, '');
    var next, loose, cap, bull, b, item, listStart, listItems, t, space, i, tag, l, isordered, istask, ischecked;

    while (src) {
      // newline
      if (cap = this.rules.newline.exec(src)) {
        src = src.substring(cap[0].length);

        if (cap[0].length > 1) {
          this.tokens.push({
            type: 'space'
          });
        }
      } // code


      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        cap = cap[0].replace(/^ {4}/gm, '');
        this.tokens.push({
          type: 'code',
          text: !this.options.pedantic ? rtrim(cap, '\n') : cap
        });
        continue;
      } // fences (gfm)


      if (cap = this.rules.fences.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'code',
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: cap[3] || ''
        });
        continue;
      } // heading


      if (cap = this.rules.heading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[1].length,
          text: cap[2]
        });
        continue;
      } // table no leading pipe (gfm)


      if (cap = this.rules.nptable.exec(src)) {
        item = {
          type: 'table',
          header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          src = src.substring(cap[0].length);

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = splitCells(item.cells[i], item.header.length);
          }

          this.tokens.push(item);
          continue;
        }
      } // hr


      if (cap = this.rules.hr.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'hr'
        });
        continue;
      } // blockquote


      if (cap = this.rules.blockquote.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'blockquote_start'
        });
        cap = cap[0].replace(/^ *> ?/gm, ''); // Pass `top` to keep the current
        // "toplevel" state. This is exactly
        // how markdown.pl works.

        this.token(cap, top);
        this.tokens.push({
          type: 'blockquote_end'
        });
        continue;
      } // list


      if (cap = this.rules.list.exec(src)) {
        src = src.substring(cap[0].length);
        bull = cap[2];
        isordered = bull.length > 1;
        listStart = {
          type: 'list_start',
          ordered: isordered,
          start: isordered ? +bull : '',
          loose: false
        };
        this.tokens.push(listStart); // Get each top-level item.

        cap = cap[0].match(this.rules.item);
        listItems = [];
        next = false;
        l = cap.length;
        i = 0;

        for (; i < l; i++) {
          item = cap[i]; // Remove the list item's bullet
          // so it is seen as the next token.

          space = item.length;
          item = item.replace(/^ *([*+-]|\d+\.) */, ''); // Outdent whatever the
          // list item contains. Hacky.

          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
          } // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.


          if (i !== l - 1) {
            b = block.bullet.exec(cap[i + 1])[0];

            if (bull.length > 1 ? b.length === 1 : b.length > 1 || this.options.smartLists && b !== bull) {
              src = cap.slice(i + 1).join('\n') + src;
              i = l - 1;
            }
          } // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.


          loose = next || /\n\n(?!\s*$)/.test(item);

          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) loose = next;
          }

          if (loose) {
            listStart.loose = true;
          } // Check for task list items


          istask = /^\[[ xX]\] /.test(item);
          ischecked = undefined;

          if (istask) {
            ischecked = item[1] !== ' ';
            item = item.replace(/^\[[ xX]\] +/, '');
          }

          t = {
            type: 'list_item_start',
            task: istask,
            checked: ischecked,
            loose: loose
          };
          listItems.push(t);
          this.tokens.push(t); // Recurse.

          this.token(item, false);
          this.tokens.push({
            type: 'list_item_end'
          });
        }

        if (listStart.loose) {
          l = listItems.length;
          i = 0;

          for (; i < l; i++) {
            listItems[i].loose = true;
          }
        }

        this.tokens.push({
          type: 'list_end'
        });
        continue;
      } // html


      if (cap = this.rules.html.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: this.options.sanitize ? 'paragraph' : 'html',
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: cap[0]
        });
        continue;
      } // def


      if (top && (cap = this.rules.def.exec(src))) {
        src = src.substring(cap[0].length);
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        tag = cap[1].toLowerCase().replace(/\s+/g, ' ');

        if (!this.tokens.links[tag]) {
          this.tokens.links[tag] = {
            href: cap[2],
            title: cap[3]
          };
        }

        continue;
      } // table (gfm)


      if (cap = this.rules.table.exec(src)) {
        item = {
          type: 'table',
          header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          src = src.substring(cap[0].length);

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = splitCells(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
          }

          this.tokens.push(item);
          continue;
        }
      } // lheading


      if (cap = this.rules.lheading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[2] === '=' ? 1 : 2,
          text: cap[1]
        });
        continue;
      } // top-level paragraph


      if (top && (cap = this.rules.paragraph.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'paragraph',
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
        });
        continue;
      } // text


      if (cap = this.rules.text.exec(src)) {
        // Top-level should never reach here.
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'text',
          text: cap[0]
        });
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return this.tokens;
  };
  /**
   * Inline-Level Grammar
   */


  var inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noop,
    tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    // CDATA section
    link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
    em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noop,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
  }; // list of punctuation marks from common mark spec
  // without ` and ] to workaround Rule 17 (inline code blocks/links)

  inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
  inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();
  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();
  inline._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|`(?!`)|[^\[\]\\`])*?/;
  inline._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
  inline.reflink = edit(inline.reflink).replace('label', inline._label).getRegex();
  /**
   * Normal Inline Grammar
   */

  inline.normal = merge({}, inline);
  /**
   * Pedantic Inline Grammar
   */

  inline.pedantic = merge({}, inline.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
    link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
  });
  /**
   * GFM Inline Grammar
   */

  inline.gfm = merge({}, inline.normal, {
    escape: edit(inline.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^~+(?=\S)([\s\S]*?\S)~+/,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
  });
  inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline.breaks = merge({}, inline.gfm, {
    br: edit(inline.br).replace('{2,}', '*').getRegex(),
    text: edit(inline.gfm.text).replace(/\{2,\}/g, '*').getRegex()
  });
  /**
   * Inline Lexer & Compiler
   */

  function InlineLexer(links, options) {
    this.options = options || marked.defaults;
    this.links = links;
    this.rules = inline.normal;
    this.renderer = this.options.renderer || new Renderer();
    this.renderer.options = this.options;

    if (!this.links) {
      throw new Error('Tokens array requires a `links` property.');
    }

    if (this.options.pedantic) {
      this.rules = inline.pedantic;
    } else if (this.options.gfm) {
      if (this.options.breaks) {
        this.rules = inline.breaks;
      } else {
        this.rules = inline.gfm;
      }
    }
  }
  /**
   * Expose Inline Rules
   */


  InlineLexer.rules = inline;
  /**
   * Static Lexing/Compiling Method
   */

  InlineLexer.output = function (src, links, options) {
    var inline = new InlineLexer(links, options);
    return inline.output(src);
  };
  /**
   * Lexing/Compiling
   */


  InlineLexer.prototype.output = function (src) {
    var out = '',
        link,
        text,
        href,
        title,
        cap,
        prevCapZero;

    while (src) {
      // escape
      if (cap = this.rules.escape.exec(src)) {
        src = src.substring(cap[0].length);
        out += escape(cap[1]);
        continue;
      } // tag


      if (cap = this.rules.tag.exec(src)) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true;
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false;
        }

        if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.inRawBlock = true;
        } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.inRawBlock = false;
        }

        src = src.substring(cap[0].length);
        out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
        continue;
      } // link


      if (cap = this.rules.link.exec(src)) {
        var lastParenIndex = findClosingBracket(cap[2], '()');

        if (lastParenIndex > -1) {
          var linkLen = cap[0].length - (cap[2].length - lastParenIndex) - (cap[3] || '').length;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }

        src = src.substring(cap[0].length);
        this.inLink = true;
        href = cap[2];

        if (this.options.pedantic) {
          link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          } else {
            title = '';
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }

        href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
        out += this.outputLink(cap, {
          href: InlineLexer.escapes(href),
          title: InlineLexer.escapes(title)
        });
        this.inLink = false;
        continue;
      } // reflink, nolink


      if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
        src = src.substring(cap[0].length);
        link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = this.links[link.toLowerCase()];

        if (!link || !link.href) {
          out += cap[0].charAt(0);
          src = cap[0].substring(1) + src;
          continue;
        }

        this.inLink = true;
        out += this.outputLink(cap, link);
        this.inLink = false;
        continue;
      } // strong


      if (cap = this.rules.strong.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      } // em


      if (cap = this.rules.em.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      } // code


      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.codespan(escape(cap[2].trim(), true));
        continue;
      } // br


      if (cap = this.rules.br.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.br();
        continue;
      } // del (gfm)


      if (cap = this.rules.del.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.del(this.output(cap[1]));
        continue;
      } // autolink


      if (cap = this.rules.autolink.exec(src)) {
        src = src.substring(cap[0].length);

        if (cap[2] === '@') {
          text = escape(this.mangle(cap[1]));
          href = 'mailto:' + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }

        out += this.renderer.link(href, null, text);
        continue;
      } // url (gfm)


      if (!this.inLink && (cap = this.rules.url.exec(src))) {
        if (cap[2] === '@') {
          text = escape(cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);

          text = escape(cap[0]);

          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }

        src = src.substring(cap[0].length);
        out += this.renderer.link(href, null, text);
        continue;
      } // text


      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);

        if (this.inRawBlock) {
          out += this.renderer.text(cap[0]);
        } else {
          out += this.renderer.text(escape(this.smartypants(cap[0])));
        }

        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return out;
  };

  InlineLexer.escapes = function (text) {
    return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
  };
  /**
   * Compile Link
   */


  InlineLexer.prototype.outputLink = function (cap, link) {
    var href = link.href,
        title = link.title ? escape(link.title) : null;
    return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
  };
  /**
   * Smartypants Transformations
   */


  InlineLexer.prototype.smartypants = function (text) {
    if (!this.options.smartypants) return text;
    return text // em-dashes
    .replace(/---/g, "\u2014") // en-dashes
    .replace(/--/g, "\u2013") // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
    .replace(/'/g, "\u2019") // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
    .replace(/"/g, "\u201D") // ellipses
    .replace(/\.{3}/g, "\u2026");
  };
  /**
   * Mangle Links
   */


  InlineLexer.prototype.mangle = function (text) {
    if (!this.options.mangle) return text;
    var out = '',
        l = text.length,
        i = 0,
        ch;

    for (; i < l; i++) {
      ch = text.charCodeAt(i);

      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }

      out += '&#' + ch + ';';
    }

    return out;
  };
  /**
   * Renderer
   */


  function Renderer(options) {
    this.options = options || marked.defaults;
  }

  Renderer.prototype.code = function (code, infostring, escaped) {
    var lang = (infostring || '').match(/\S*/)[0];

    if (this.options.highlight) {
      var out = this.options.highlight(code, lang);

      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    if (!lang) {
      return '<pre><code>' + (escaped ? code : escape(code, true)) + '</code></pre>';
    }

    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
  };

  Renderer.prototype.blockquote = function (quote) {
    return '<blockquote>\n' + quote + '</blockquote>\n';
  };

  Renderer.prototype.html = function (html) {
    return html;
  };

  Renderer.prototype.heading = function (text, level, raw, slugger) {
    if (this.options.headerIds) {
      return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
    } // ignore IDs


    return '<h' + level + '>' + text + '</h' + level + '>\n';
  };

  Renderer.prototype.hr = function () {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  };

  Renderer.prototype.list = function (body, ordered, start) {
    var type = ordered ? 'ol' : 'ul',
        startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  };

  Renderer.prototype.listitem = function (text) {
    return '<li>' + text + '</li>\n';
  };

  Renderer.prototype.checkbox = function (checked) {
    return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
  };

  Renderer.prototype.paragraph = function (text) {
    return '<p>' + text + '</p>\n';
  };

  Renderer.prototype.table = function (header, body) {
    if (body) body = '<tbody>' + body + '</tbody>';
    return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
  };

  Renderer.prototype.tablerow = function (content) {
    return '<tr>\n' + content + '</tr>\n';
  };

  Renderer.prototype.tablecell = function (content, flags) {
    var type = flags.header ? 'th' : 'td';
    var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
    return tag + content + '</' + type + '>\n';
  }; // span level renderer


  Renderer.prototype.strong = function (text) {
    return '<strong>' + text + '</strong>';
  };

  Renderer.prototype.em = function (text) {
    return '<em>' + text + '</em>';
  };

  Renderer.prototype.codespan = function (text) {
    return '<code>' + text + '</code>';
  };

  Renderer.prototype.br = function () {
    return this.options.xhtml ? '<br/>' : '<br>';
  };

  Renderer.prototype.del = function (text) {
    return '<del>' + text + '</del>';
  };

  Renderer.prototype.link = function (href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

    if (href === null) {
      return text;
    }

    var out = '<a href="' + escape(href) + '"';

    if (title) {
      out += ' title="' + title + '"';
    }

    out += '>' + text + '</a>';
    return out;
  };

  Renderer.prototype.image = function (href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

    if (href === null) {
      return text;
    }

    var out = '<img src="' + href + '" alt="' + text + '"';

    if (title) {
      out += ' title="' + title + '"';
    }

    out += this.options.xhtml ? '/>' : '>';
    return out;
  };

  Renderer.prototype.text = function (text) {
    return text;
  };
  /**
   * TextRenderer
   * returns only the textual part of the token
   */


  function TextRenderer() {} // no need for block level renderers


  TextRenderer.prototype.strong = TextRenderer.prototype.em = TextRenderer.prototype.codespan = TextRenderer.prototype.del = TextRenderer.prototype.text = function (text) {
    return text;
  };

  TextRenderer.prototype.link = TextRenderer.prototype.image = function (href, title, text) {
    return '' + text;
  };

  TextRenderer.prototype.br = function () {
    return '';
  };
  /**
   * Parsing & Compiling
   */


  function Parser(options) {
    this.tokens = [];
    this.token = null;
    this.options = options || marked.defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */


  Parser.parse = function (src, options) {
    var parser = new Parser(options);
    return parser.parse(src);
  };
  /**
   * Parse Loop
   */


  Parser.prototype.parse = function (src) {
    this.inline = new InlineLexer(src.links, this.options); // use an InlineLexer with a TextRenderer to extract pure text

    this.inlineText = new InlineLexer(src.links, merge({}, this.options, {
      renderer: new TextRenderer()
    }));
    this.tokens = src.reverse();
    var out = '';

    while (this.next()) {
      out += this.tok();
    }

    return out;
  };
  /**
   * Next Token
   */


  Parser.prototype.next = function () {
    return this.token = this.tokens.pop();
  };
  /**
   * Preview Next Token
   */


  Parser.prototype.peek = function () {
    return this.tokens[this.tokens.length - 1] || 0;
  };
  /**
   * Parse Text Tokens
   */


  Parser.prototype.parseText = function () {
    var body = this.token.text;

    while (this.peek().type === 'text') {
      body += '\n' + this.next().text;
    }

    return this.inline.output(body);
  };
  /**
   * Parse Current Token
   */


  Parser.prototype.tok = function () {
    switch (this.token.type) {
      case 'space':
        {
          return '';
        }

      case 'hr':
        {
          return this.renderer.hr();
        }

      case 'heading':
        {
          return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, unescape(this.inlineText.output(this.token.text)), this.slugger);
        }

      case 'code':
        {
          return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
        }

      case 'table':
        {
          var header = '',
              body = '',
              i,
              row,
              cell,
              j; // header

          cell = '';

          for (i = 0; i < this.token.header.length; i++) {
            cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), {
              header: true,
              align: this.token.align[i]
            });
          }

          header += this.renderer.tablerow(cell);

          for (i = 0; i < this.token.cells.length; i++) {
            row = this.token.cells[i];
            cell = '';

            for (j = 0; j < row.length; j++) {
              cell += this.renderer.tablecell(this.inline.output(row[j]), {
                header: false,
                align: this.token.align[j]
              });
            }

            body += this.renderer.tablerow(cell);
          }

          return this.renderer.table(header, body);
        }

      case 'blockquote_start':
        {
          body = '';

          while (this.next().type !== 'blockquote_end') {
            body += this.tok();
          }

          return this.renderer.blockquote(body);
        }

      case 'list_start':
        {
          body = '';
          var ordered = this.token.ordered,
              start = this.token.start;

          while (this.next().type !== 'list_end') {
            body += this.tok();
          }

          return this.renderer.list(body, ordered, start);
        }

      case 'list_item_start':
        {
          body = '';
          var loose = this.token.loose;
          var checked = this.token.checked;
          var task = this.token.task;

          if (this.token.task) {
            body += this.renderer.checkbox(checked);
          }

          while (this.next().type !== 'list_item_end') {
            body += !loose && this.token.type === 'text' ? this.parseText() : this.tok();
          }

          return this.renderer.listitem(body, task, checked);
        }

      case 'html':
        {
          // TODO parse inline content if parameter markdown=1
          return this.renderer.html(this.token.text);
        }

      case 'paragraph':
        {
          return this.renderer.paragraph(this.inline.output(this.token.text));
        }

      case 'text':
        {
          return this.renderer.paragraph(this.parseText());
        }

      default:
        {
          var errMsg = 'Token with "' + this.token.type + '" type was not found.';

          if (this.options.silent) {
            console.log(errMsg);
          } else {
            throw new Error(errMsg);
          }
        }
    }
  };
  /**
   * Slugger generates header id
   */


  function Slugger() {
    this.seen = {};
  }
  /**
   * Convert string to unique id
   */


  Slugger.prototype.slug = function (value) {
    var slug = value.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');

    if (this.seen.hasOwnProperty(slug)) {
      var originalSlug = slug;

      do {
        this.seen[originalSlug]++;
        slug = originalSlug + '-' + this.seen[originalSlug];
      } while (this.seen.hasOwnProperty(slug));
    }

    this.seen[slug] = 0;
    return slug;
  };
  /**
   * Helpers
   */


  function escape(html, encode) {
    if (encode) {
      if (escape.escapeTest.test(html)) {
        return html.replace(escape.escapeReplace, function (ch) {
          return escape.replacements[ch];
        });
      }
    } else {
      if (escape.escapeTestNoEncode.test(html)) {
        return html.replace(escape.escapeReplaceNoEncode, function (ch) {
          return escape.replacements[ch];
        });
      }
    }

    return html;
  }

  escape.escapeTest = /[&<>"']/;
  escape.escapeReplace = /[&<>"']/g;
  escape.replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  escape.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  escape.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;

  function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';

      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }

      return '';
    });
  }

  function edit(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    return {
      replace: function replace(name, val) {
        val = val.source || val;
        val = val.replace(/(^|[^\[])\^/g, '$1');
        regex = regex.replace(name, val);
        return this;
      },
      getRegex: function getRegex() {
        return new RegExp(regex, opt);
      }
    };
  }

  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      try {
        var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
      } catch (e) {
        return null;
      }

      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return null;
      }
    }

    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }

    try {
      href = encodeURI(href).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }

    return href;
  }

  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (/^[^:]+:\/*[^/]*$/.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim(base, '/', true);
      }
    }

    base = baseUrls[' ' + base];

    if (href.slice(0, 2) === '//') {
      return base.replace(/:[\s\S]*/, ':') + href;
    } else if (href.charAt(0) === '/') {
      return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
    } else {
      return base + href;
    }
  }

  var baseUrls = {};
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  function noop() {}

  noop.exec = noop;

  function merge(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];

      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  function splitCells(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false,
          curr = offset;

      while (--curr >= 0 && str[curr] === '\\') {
        escaped = !escaped;
      }

      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
        cells = row.split(/ \|/),
        i = 0;

    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) {
        cells.push('');
      }
    }

    for (; i < cells.length; i++) {
      // leading or trailing whitespace is ignored per the gfm spec
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }

    return cells;
  } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
  // /c*$/ is vulnerable to REDOS.
  // invert: Remove suffix of non-c chars instead. Default falsey.


  function rtrim(str, c, invert) {
    if (str.length === 0) {
      return '';
    } // Length of suffix matching the invert condition.


    var suffLen = 0; // Step left until we fail to match the invert condition.

    while (suffLen < str.length) {
      var currChar = str.charAt(str.length - suffLen - 1);

      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }

    return str.substr(0, str.length - suffLen);
  }

  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }

    var level = 0;

    for (var i = 0; i < str.length; i++) {
      if (str[i] === '\\') {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;

        if (level < 0) {
          return i;
        }
      }
    }

    return -1;
  }
  /**
   * Marked
   */


  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    if (callback || typeof opt === 'function') {
      if (!callback) {
        callback = opt;
        opt = null;
      }

      opt = merge({}, marked.defaults, opt || {});
      var highlight = opt.highlight,
          tokens,
          pending,
          i = 0;

      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      pending = tokens.length;

      var done = function done(err) {
        if (err) {
          opt.highlight = highlight;
          return callback(err);
        }

        var out;

        try {
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }

        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;
      if (!pending) return done();

      for (; i < tokens.length; i++) {
        (function (token) {
          if (token.type !== 'code') {
            return --pending || done();
          }

          return highlight(token.text, token.lang, function (err, code) {
            if (err) return done(err);

            if (code == null || code === token.text) {
              return --pending || done();
            }

            token.text = code;
            token.escaped = true;
            --pending || done();
          });
        })(tokens[i]);
      }

      return;
    }

    try {
      if (opt) opt = merge({}, marked.defaults, opt);
      return Parser.parse(Lexer.lex(src, opt), opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if ((opt || marked.defaults).silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  }
  /**
   * Options
   */


  marked.options = marked.setOptions = function (opt) {
    merge(marked.defaults, opt);
    return marked;
  };

  marked.getDefaults = function () {
    return {
      baseUrl: null,
      breaks: false,
      gfm: true,
      headerIds: true,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: true,
      pedantic: false,
      renderer: new Renderer(),
      sanitize: false,
      sanitizer: null,
      silent: false,
      smartLists: false,
      smartypants: false,
      tables: true,
      xhtml: false
    };
  };

  marked.defaults = marked.getDefaults();
  /**
   * Expose
   */

  marked.Parser = Parser;
  marked.parser = Parser.parse;
  marked.Renderer = Renderer;
  marked.TextRenderer = TextRenderer;
  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;
  marked.InlineLexer = InlineLexer;
  marked.inlineLexer = InlineLexer.output;
  marked.Slugger = Slugger;
  marked.parse = marked;

  if ( true && ( false ? undefined : _typeof(exports)) === 'object') {
    module.exports = marked;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return marked;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this || (typeof window !== 'undefined' ? window : global));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return _assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};


function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __exportStar(m, exports) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}
;
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/ts-loader/index.js?!./src/resources/markdown_worker.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/ts-loader??ref--4-0!./src/resources/markdown_worker.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: renderMarkdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMarkdown", function() { return renderMarkdown; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xss */ "./node_modules/xss/lib/index.js");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_2__);


// @ts-ignore

var whiteListNormal;
var whiteListSvg;
var renderMarkdown = function (content, markedOptions, hassOptions) {
    if (hassOptions === void 0) { hassOptions = {}; }
    if (!whiteListNormal) {
        whiteListNormal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, xss__WEBPACK_IMPORTED_MODULE_2___default.a.whiteList), { "ha-icon": ["icon"] });
    }
    var whiteList;
    if (hassOptions.allowSvg) {
        if (!whiteListSvg) {
            whiteListSvg = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, whiteListNormal), { svg: ["xmlns", "height", "width"], path: ["transform", "stroke", "d"] });
        }
        whiteList = whiteListSvg;
    }
    else {
        whiteList = whiteListNormal;
    }
    return xss__WEBPACK_IMPORTED_MODULE_2___default()(marked__WEBPACK_IMPORTED_MODULE_1___default()(content, markedOptions), {
        whiteList: whiteList,
    });
};

addEventListener('message', function (e) {var ref = e.data;var type = ref.type;var method = ref.method;var id = ref.id;var params = ref.params;var f,p;if (type === 'RPC' && method) {if (f = __webpack_exports__[method]) {p = Promise.resolve().then(function () { return f.apply(__webpack_exports__, params); });} else {p = Promise.reject('No such method');}p.then(function (result) {postMessage({type: 'RPC',id: id,result: result});}).catch(function (e) {var error = {message: e};if (e.stack) {error.message = e.message;error.stack = e.stack;error.name = e.name;}postMessage({type: 'RPC',id: id,error: error});});}});postMessage({type: 'RPC',method: 'ready'});

/***/ }),

/***/ "./node_modules/xss/lib/default.js":
/*!*****************************************!*\
  !*** ./node_modules/xss/lib/default.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * default settings
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */
var FilterCSS = __webpack_require__(/*! cssfilter */ "./node_modules/cssfilter/lib/index.js").FilterCSS;

var getDefaultCSSWhiteList = __webpack_require__(/*! cssfilter */ "./node_modules/cssfilter/lib/index.js").getDefaultWhiteList;

var _ = __webpack_require__(/*! ./util */ "./node_modules/xss/lib/util.js");

function getDefaultWhiteList() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: ["autoplay", "controls", "loop", "preload", "src"],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    ins: ["datetime"],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
  };
}

var defaultCSSFilter = new FilterCSS();
/**
 * default onTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */

function onTag(tag, html, options) {} // do nothing

/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */


function onIgnoreTag(tag, html, options) {} // do nothing

/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */


function onTagAttr(tag, name, value) {} // do nothing

/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */


function onIgnoreTagAttr(tag, name, value) {} // do nothing

/**
 * default escapeHtml function
 *
 * @param {String} html
 */


function escapeHtml(html) {
  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}
/**
 * default safeAttrValue function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @param {Object} cssFilter
 * @return {String}
 */


function safeAttrValue(tag, name, value, cssFilter) {
  // unescape attribute value firstly
  value = friendlyAttrValue(value);

  if (name === "href" || name === "src") {
    // filter `href` and `src` attribute
    // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
    value = _.trim(value);
    if (value === "#") return "#";

    if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value[0] === "#" || value[0] === "/")) {
      return "";
    }
  } else if (name === "background") {
    // filter `background` attribute (maybe no use)
    // `javascript:`
    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;

    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
      return "";
    }
  } else if (name === "style") {
    // `expression()`
    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;

    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
      return "";
    } // `url()`


    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;

    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;

      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    }

    if (cssFilter !== false) {
      cssFilter = cssFilter || defaultCSSFilter;
      value = cssFilter.process(value);
    }
  } // escape `<>"` before returns


  value = escapeAttrValue(value);
  return value;
} // RegExp list


var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
/**
 * escape doube quote
 *
 * @param {String} str
 * @return {String} str
 */

function escapeQuote(str) {
  return str.replace(REGEXP_QUOTE, "&quot;");
}
/**
 * unescape double quote
 *
 * @param {String} str
 * @return {String} str
 */


function unescapeQuote(str) {
  return str.replace(REGEXP_QUOTE_2, '"');
}
/**
 * escape html entities
 *
 * @param {String} str
 * @return {String}
 */


function escapeHtmlEntities(str) {
  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
    return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
  });
}
/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */


function escapeDangerHtml5Entities(str) {
  return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}
/**
 * clear nonprintable characters
 *
 * @param {String} str
 * @return {String}
 */


function clearNonPrintableCharacter(str) {
  var str2 = "";

  for (var i = 0, len = str.length; i < len; i++) {
    str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
  }

  return _.trim(str2);
}
/**
 * get friendly attribute value
 *
 * @param {String} str
 * @return {String}
 */


function friendlyAttrValue(str) {
  str = unescapeQuote(str);
  str = escapeHtmlEntities(str);
  str = escapeDangerHtml5Entities(str);
  str = clearNonPrintableCharacter(str);
  return str;
}
/**
 * unescape attribute value
 *
 * @param {String} str
 * @return {String}
 */


function escapeAttrValue(str) {
  str = escapeQuote(str);
  str = escapeHtml(str);
  return str;
}
/**
 * `onIgnoreTag` function for removing all the tags that are not in whitelist
 */


function onIgnoreTagStripAll() {
  return "";
}
/**
 * remove tag body
 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
 *
 * @param {array} tags
 * @param {function} next
 */


function StripTagBody(tags, next) {
  if (typeof next !== "function") {
    next = function next() {};
  }

  var isRemoveAllTag = !Array.isArray(tags);

  function isRemoveTag(tag) {
    if (isRemoveAllTag) return true;
    return _.indexOf(tags, tag) !== -1;
  }

  var removeList = [];
  var posStart = false;
  return {
    onIgnoreTag: function onIgnoreTag(tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([posStart !== false ? posStart : options.position, end]);
          posStart = false;
          return ret;
        } else {
          if (!posStart) {
            posStart = options.position;
          }

          return "[removed]";
        }
      } else {
        return next(tag, html, options);
      }
    },
    remove: function remove(html) {
      var rethtml = "";
      var lastPos = 0;

      _.forEach(removeList, function (pos) {
        rethtml += html.slice(lastPos, pos[0]);
        lastPos = pos[1];
      });

      rethtml += html.slice(lastPos);
      return rethtml;
    }
  };
}
/**
 * remove html comments
 *
 * @param {String} html
 * @return {String}
 */


function stripCommentTag(html) {
  return html.replace(STRIP_COMMENT_TAG_REGEXP, "");
}

var STRIP_COMMENT_TAG_REGEXP = /<!--[\s\S]*?-->/g;
/**
 * remove invisible characters
 *
 * @param {String} html
 * @return {String}
 */

function stripBlankChar(html) {
  var chars = html.split("");
  chars = chars.filter(function (_char) {
    var c = _char.charCodeAt(0);

    if (c === 127) return false;

    if (c <= 31) {
      if (c === 10 || c === 13) return true;
      return false;
    }

    return true;
  });
  return chars.join("");
}

exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onTag = onTag;
exports.onIgnoreTag = onIgnoreTag;
exports.onTagAttr = onTagAttr;
exports.onIgnoreTagAttr = onIgnoreTagAttr;
exports.safeAttrValue = safeAttrValue;
exports.escapeHtml = escapeHtml;
exports.escapeQuote = escapeQuote;
exports.unescapeQuote = unescapeQuote;
exports.escapeHtmlEntities = escapeHtmlEntities;
exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
exports.friendlyAttrValue = friendlyAttrValue;
exports.escapeAttrValue = escapeAttrValue;
exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
exports.StripTagBody = StripTagBody;
exports.stripCommentTag = stripCommentTag;
exports.stripBlankChar = stripBlankChar;
exports.cssFilter = defaultCSSFilter;
exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;

/***/ }),

/***/ "./node_modules/xss/lib/index.js":
/*!***************************************!*\
  !*** ./node_modules/xss/lib/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */
var DEFAULT = __webpack_require__(/*! ./default */ "./node_modules/xss/lib/default.js");

var parser = __webpack_require__(/*! ./parser */ "./node_modules/xss/lib/parser.js");

var FilterXSS = __webpack_require__(/*! ./xss */ "./node_modules/xss/lib/xss.js");
/**
 * filter xss function
 *
 * @param {String} html
 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
 * @return {String}
 */


function filterXSS(html, options) {
  var xss = new FilterXSS(options);
  return xss.process(html);
}

exports = module.exports = filterXSS;
exports.filterXSS = filterXSS;
exports.FilterXSS = FilterXSS;

for (var i in DEFAULT) {
  exports[i] = DEFAULT[i];
}

for (var i in parser) {
  exports[i] = parser[i];
} // using `xss` on the browser, output `filterXSS` to the globals


if (typeof window !== "undefined") {
  window.filterXSS = module.exports;
} // using `xss` on the WebWorker, output `filterXSS` to the globals


function isWorkerEnv() {
  return typeof self !== 'undefined' && typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
}

if (isWorkerEnv()) {
  self.filterXSS = module.exports;
}

/***/ }),

/***/ "./node_modules/xss/lib/parser.js":
/*!****************************************!*\
  !*** ./node_modules/xss/lib/parser.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Simple HTML Parser
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */
var _ = __webpack_require__(/*! ./util */ "./node_modules/xss/lib/util.js");
/**
 * get tag name
 *
 * @param {String} html e.g. '<a hef="#">'
 * @return {String}
 */


function getTagName(html) {
  var i = _.spaceIndex(html);

  if (i === -1) {
    var tagName = html.slice(1, -1);
  } else {
    var tagName = html.slice(1, i + 1);
  }

  tagName = _.trim(tagName).toLowerCase();
  if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
  if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
  return tagName;
}
/**
 * is close tag?
 *
 * @param {String} html 如：'<a hef="#">'
 * @return {Boolean}
 */


function isClosing(html) {
  return html.slice(0, 2) === "</";
}
/**
 * parse input html and returns processed html
 *
 * @param {String} html
 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
 * @param {Function} escapeHtml
 * @return {String}
 */


function parseTag(html, onTag, escapeHtml) {
  "user strict";

  var rethtml = "";
  var lastPos = 0;
  var tagStart = false;
  var quoteStart = false;
  var currentPos = 0;
  var len = html.length;
  var currentTagName = "";
  var currentHtml = "";

  for (currentPos = 0; currentPos < len; currentPos++) {
    var c = html.charAt(currentPos);

    if (tagStart === false) {
      if (c === "<") {
        tagStart = currentPos;
        continue;
      }
    } else {
      if (quoteStart === false) {
        if (c === "<") {
          rethtml += escapeHtml(html.slice(lastPos, currentPos));
          tagStart = currentPos;
          lastPos = currentPos;
          continue;
        }

        if (c === ">") {
          rethtml += escapeHtml(html.slice(lastPos, tagStart));
          currentHtml = html.slice(tagStart, currentPos + 1);
          currentTagName = getTagName(currentHtml);
          rethtml += onTag(tagStart, rethtml.length, currentTagName, currentHtml, isClosing(currentHtml));
          lastPos = currentPos + 1;
          tagStart = false;
          continue;
        }

        if ((c === '"' || c === "'") && html.charAt(currentPos - 1) === "=") {
          quoteStart = c;
          continue;
        }
      } else {
        if (c === quoteStart) {
          quoteStart = false;
          continue;
        }
      }
    }
  }

  if (lastPos < html.length) {
    rethtml += escapeHtml(html.substr(lastPos));
  }

  return rethtml;
}

var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;
/**
 * parse input attributes and returns processed attributes
 *
 * @param {String} html e.g. `href="#" target="_blank"`
 * @param {Function} onAttr e.g. `function (name, value)`
 * @return {String}
 */

function parseAttr(html, onAttr) {
  "user strict";

  var lastPos = 0;
  var retAttrs = [];
  var tmpName = false;
  var len = html.length;

  function addAttr(name, value) {
    name = _.trim(name);
    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
    if (name.length < 1) return;
    var ret = onAttr(name, value || "");
    if (ret) retAttrs.push(ret);
  } // 逐个分析字符


  for (var i = 0; i < len; i++) {
    var c = html.charAt(i);
    var v, j;

    if (tmpName === false && c === "=") {
      tmpName = html.slice(lastPos, i);
      lastPos = i + 1;
      continue;
    }

    if (tmpName !== false) {
      if (i === lastPos && (c === '"' || c === "'") && html.charAt(i - 1) === "=") {
        j = html.indexOf(c, i + 1);

        if (j === -1) {
          break;
        } else {
          v = _.trim(html.slice(lastPos + 1, j));
          addAttr(tmpName, v);
          tmpName = false;
          i = j;
          lastPos = i + 1;
          continue;
        }
      }
    }

    if (/\s|\n|\t/.test(c)) {
      html = html.replace(/\s|\n|\t/g, " ");

      if (tmpName === false) {
        j = findNextEqual(html, i);

        if (j === -1) {
          v = _.trim(html.slice(lastPos, i));
          addAttr(v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          i = j - 1;
          continue;
        }
      } else {
        j = findBeforeEqual(html, i - 1);

        if (j === -1) {
          v = _.trim(html.slice(lastPos, i));
          v = stripQuoteWrap(v);
          addAttr(tmpName, v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          continue;
        }
      }
    }
  }

  if (lastPos < html.length) {
    if (tmpName === false) {
      addAttr(html.slice(lastPos));
    } else {
      addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
    }
  }

  return _.trim(retAttrs.join(" "));
}

function findNextEqual(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function findBeforeEqual(str, i) {
  for (; i > 0; i--) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function isQuoteWrapString(text) {
  if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
    return true;
  } else {
    return false;
  }
}

function stripQuoteWrap(text) {
  if (isQuoteWrapString(text)) {
    return text.substr(1, text.length - 2);
  } else {
    return text;
  }
}

exports.parseTag = parseTag;
exports.parseAttr = parseAttr;

/***/ }),

/***/ "./node_modules/xss/lib/util.js":
/*!**************************************!*\
  !*** ./node_modules/xss/lib/util.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  indexOf: function indexOf(arr, item) {
    var i, j;

    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }

    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },
  forEach: function forEach(arr, fn, scope) {
    var i, j;

    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }

    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function trim(str) {
    if (String.prototype.trim) {
      return str.trim();
    }

    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function spaceIndex(str) {
    var reg = /\s|\n|\t/;
    var match = reg.exec(str);
    return match ? match.index : -1;
  }
};

/***/ }),

/***/ "./node_modules/xss/lib/xss.js":
/*!*************************************!*\
  !*** ./node_modules/xss/lib/xss.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * filter xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */
var FilterCSS = __webpack_require__(/*! cssfilter */ "./node_modules/cssfilter/lib/index.js").FilterCSS;

var DEFAULT = __webpack_require__(/*! ./default */ "./node_modules/xss/lib/default.js");

var parser = __webpack_require__(/*! ./parser */ "./node_modules/xss/lib/parser.js");

var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;

var _ = __webpack_require__(/*! ./util */ "./node_modules/xss/lib/util.js");
/**
 * returns `true` if the input value is `undefined` or `null`
 *
 * @param {Object} obj
 * @return {Boolean}
 */


function isNull(obj) {
  return obj === undefined || obj === null;
}
/**
 * get attributes for a tag
 *
 * @param {String} html
 * @return {Object}
 *   - {String} html
 *   - {Boolean} closing
 */


function getAttrs(html) {
  var i = _.spaceIndex(html);

  if (i === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/"
    };
  }

  html = _.trim(html.slice(i + 1, -1));
  var isClosing = html[html.length - 1] === "/";
  if (isClosing) html = _.trim(html.slice(0, -1));
  return {
    html: html,
    closing: isClosing
  };
}
/**
 * shallow copy
 *
 * @param {Object} obj
 * @return {Object}
 */


function shallowCopyObject(obj) {
  var ret = {};

  for (var i in obj) {
    ret[i] = obj[i];
  }

  return ret;
}
/**
 * FilterXSS class
 *
 * @param {Object} options
 *        whiteList, onTag, onTagAttr, onIgnoreTag,
 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
 */


function FilterXSS(options) {
  options = shallowCopyObject(options || {});

  if (options.stripIgnoreTag) {
    if (options.onIgnoreTag) {
      console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time');
    }

    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
  }

  options.whiteList = options.whiteList || DEFAULT.whiteList;
  options.onTag = options.onTag || DEFAULT.onTag;
  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
  this.options = options;

  if (options.css === false) {
    this.cssFilter = false;
  } else {
    options.css = options.css || {};
    this.cssFilter = new FilterCSS(options.css);
  }
}
/**
 * start process and returns result
 *
 * @param {String} html
 * @return {String}
 */


FilterXSS.prototype.process = function (html) {
  // compatible with the input
  html = html || "";
  html = html.toString();
  if (!html) return "";
  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onTag = options.onTag;
  var onIgnoreTag = options.onIgnoreTag;
  var onTagAttr = options.onTagAttr;
  var onIgnoreTagAttr = options.onIgnoreTagAttr;
  var safeAttrValue = options.safeAttrValue;
  var escapeHtml = options.escapeHtml;
  var cssFilter = me.cssFilter; // remove invisible characters

  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  } // remove html comments


  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  } // if enable stripIgnoreTagBody


  var stripIgnoreTagBody = false;

  if (options.stripIgnoreTagBody) {
    var stripIgnoreTagBody = DEFAULT.StripTagBody(options.stripIgnoreTagBody, onIgnoreTag);
    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
  }

  var retHtml = parseTag(html, function (sourcePosition, position, tag, html, isClosing) {
    var info = {
      sourcePosition: sourcePosition,
      position: position,
      isClosing: isClosing,
      isWhite: whiteList.hasOwnProperty(tag)
    }; // call `onTag()`

    var ret = onTag(tag, html, info);
    if (!isNull(ret)) return ret;

    if (info.isWhite) {
      if (info.isClosing) {
        return "</" + tag + ">";
      }

      var attrs = getAttrs(html);
      var whiteAttrList = whiteList[tag];
      var attrsHtml = parseAttr(attrs.html, function (name, value) {
        // call `onTagAttr()`
        var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
        var ret = onTagAttr(tag, name, value, isWhiteAttr);
        if (!isNull(ret)) return ret;

        if (isWhiteAttr) {
          // call `safeAttrValue()`
          value = safeAttrValue(tag, name, value, cssFilter);

          if (value) {
            return name + '="' + value + '"';
          } else {
            return name;
          }
        } else {
          // call `onIgnoreTagAttr()`
          var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
          if (!isNull(ret)) return ret;
          return;
        }
      }); // build new tag html

      var html = "<" + tag;
      if (attrsHtml) html += " " + attrsHtml;
      if (attrs.closing) html += " /";
      html += ">";
      return html;
    } else {
      // call `onIgnoreTag()`
      var ret = onIgnoreTag(tag, html, info);
      if (!isNull(ret)) return ret;
      return escapeHtml(html);
    }
  }, escapeHtml); // if enable stripIgnoreTagBody

  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }

  return retHtml;
};

module.exports = FilterXSS;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMWFkODNkOTg3OTdkOGYyMTQ0ZjYud29ya2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3NmaWx0ZXIvbGliL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzZmlsdGVyL2xpYi9kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3NmaWx0ZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3NmaWx0ZXIvbGliL3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzZmlsdGVyL2xpYi91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXJrZWQvbGliL21hcmtlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9tYXJrZG93bl93b3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hzcy9saWIvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHNzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHNzL2xpYi9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hzcy9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHNzL2xpYi94c3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZnJvbnRlbmRfZXM1L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL25vZGVfbW9kdWxlcy93b3JrZXJpemUtbG9hZGVyL2Rpc3QvcnBjLXdvcmtlci1sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPyEuL3NyYy9yZXNvdXJjZXMvbWFya2Rvd25fd29ya2VyLnRzXCIpO1xuIiwiLyoqXG4gKiBjc3NmaWx0ZXJcbiAqXG4gKiBAYXV0aG9yIOiAgembtzxsZWl6b25nbWluQGdtYWlsLmNvbT5cbiAqL1xuXG52YXIgREVGQVVMVCA9IHJlcXVpcmUoJy4vZGVmYXVsdCcpO1xudmFyIHBhcnNlU3R5bGUgPSByZXF1aXJlKCcuL3BhcnNlcicpO1xudmFyIF8gPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuXG4vKipcbiAqIOi/lOWbnuWAvOaYr+WQpuS4uuepulxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTnVsbCAob2JqKSB7XG4gIHJldHVybiAob2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiDmtYXmi7fotJ3lr7nosaFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5T2JqZWN0IChvYmopIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIHJldFtpXSA9IG9ialtpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIOWIm+W7ukNTU+i/h+a7pOWZqFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiAgIC0ge09iamVjdH0gd2hpdGVMaXN0XG4gKiAgIC0ge0Z1bmN0aW9ufSBvbkF0dHJcbiAqICAgLSB7RnVuY3Rpb259IG9uSWdub3JlQXR0clxuICogICAtIHtGdW5jdGlvbn0gc2FmZUF0dHJWYWx1ZVxuICovXG5mdW5jdGlvbiBGaWx0ZXJDU1MgKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IHNoYWxsb3dDb3B5T2JqZWN0KG9wdGlvbnMgfHwge30pO1xuICBvcHRpb25zLndoaXRlTGlzdCA9IG9wdGlvbnMud2hpdGVMaXN0IHx8IERFRkFVTFQud2hpdGVMaXN0O1xuICBvcHRpb25zLm9uQXR0ciA9IG9wdGlvbnMub25BdHRyIHx8IERFRkFVTFQub25BdHRyO1xuICBvcHRpb25zLm9uSWdub3JlQXR0ciA9IG9wdGlvbnMub25JZ25vcmVBdHRyIHx8IERFRkFVTFQub25JZ25vcmVBdHRyO1xuICBvcHRpb25zLnNhZmVBdHRyVmFsdWUgPSBvcHRpb25zLnNhZmVBdHRyVmFsdWUgfHwgREVGQVVMVC5zYWZlQXR0clZhbHVlO1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xufVxuXG5GaWx0ZXJDU1MucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIOWFvOWuueWQhOenjeWlh+iRqei+k+WFpVxuICBjc3MgPSBjc3MgfHwgJyc7XG4gIGNzcyA9IGNzcy50b1N0cmluZygpO1xuICBpZiAoIWNzcykgcmV0dXJuICcnO1xuXG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBvcHRpb25zID0gbWUub3B0aW9ucztcbiAgdmFyIHdoaXRlTGlzdCA9IG9wdGlvbnMud2hpdGVMaXN0O1xuICB2YXIgb25BdHRyID0gb3B0aW9ucy5vbkF0dHI7XG4gIHZhciBvbklnbm9yZUF0dHIgPSBvcHRpb25zLm9uSWdub3JlQXR0cjtcbiAgdmFyIHNhZmVBdHRyVmFsdWUgPSBvcHRpb25zLnNhZmVBdHRyVmFsdWU7XG5cbiAgdmFyIHJldENTUyA9IHBhcnNlU3R5bGUoY3NzLCBmdW5jdGlvbiAoc291cmNlUG9zaXRpb24sIHBvc2l0aW9uLCBuYW1lLCB2YWx1ZSwgc291cmNlKSB7XG5cbiAgICB2YXIgY2hlY2sgPSB3aGl0ZUxpc3RbbmFtZV07XG4gICAgdmFyIGlzV2hpdGUgPSBmYWxzZTtcbiAgICBpZiAoY2hlY2sgPT09IHRydWUpIGlzV2hpdGUgPSBjaGVjaztcbiAgICBlbHNlIGlmICh0eXBlb2YgY2hlY2sgPT09ICdmdW5jdGlvbicpIGlzV2hpdGUgPSBjaGVjayh2YWx1ZSk7XG4gICAgZWxzZSBpZiAoY2hlY2sgaW5zdGFuY2VvZiBSZWdFeHApIGlzV2hpdGUgPSBjaGVjay50ZXN0KHZhbHVlKTtcbiAgICBpZiAoaXNXaGl0ZSAhPT0gdHJ1ZSkgaXNXaGl0ZSA9IGZhbHNlO1xuXG4gICAgLy8g5aaC5p6c6L+H5ruk5ZCOIHZhbHVlIOS4uuepuuWImeebtOaOpeW/veeVpVxuICAgIHZhbHVlID0gc2FmZUF0dHJWYWx1ZShuYW1lLCB2YWx1ZSk7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gICAgdmFyIG9wdHMgPSB7XG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBzb3VyY2VQb3NpdGlvbjogc291cmNlUG9zaXRpb24sXG4gICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgIGlzV2hpdGU6IGlzV2hpdGVcbiAgICB9O1xuXG4gICAgaWYgKGlzV2hpdGUpIHtcblxuICAgICAgdmFyIHJldCA9IG9uQXR0cihuYW1lLCB2YWx1ZSwgb3B0cyk7XG4gICAgICBpZiAoaXNOdWxsKHJldCkpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUgKyAnOicgKyB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgcmV0ID0gb25JZ25vcmVBdHRyKG5hbWUsIHZhbHVlLCBvcHRzKTtcbiAgICAgIGlmICghaXNOdWxsKHJldCkpIHtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cblxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJldENTUztcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJDU1M7XG4iLCIvKipcbiAqIGNzc2ZpbHRlclxuICpcbiAqIEBhdXRob3Ig6ICB6Zu3PGxlaXpvbmdtaW5AZ21haWwuY29tPlxuICovXG5cbmZ1bmN0aW9uIGdldERlZmF1bHRXaGl0ZUxpc3QgKCkge1xuICAvLyDnmb3lkI3ljZXlgLzor7TmmI7vvJpcbiAgLy8gdHJ1ZTog5YWB6K646K+l5bGe5oCnXG4gIC8vIEZ1bmN0aW9uOiBmdW5jdGlvbiAodmFsKSB7IH0g6L+U5ZuedHJ1ZeihqOekuuWFgeiuuOivpeWxnuaAp++8jOWFtuS7luWAvOWdh+ihqOekuuS4jeWFgeiuuFxuICAvLyBSZWdFeHA6IHJlZ2V4cC50ZXN0KHZhbCkg6L+U5ZuedHJ1ZeihqOekuuWFgeiuuOivpeWxnuaAp++8jOWFtuS7luWAvOWdh+ihqOekuuS4jeWFgeiuuFxuICAvLyDpmaTkuIrpnaLliJflh7rnmoTlgLzlpJblnYfooajnpLrkuI3lhYHorrhcbiAgdmFyIHdoaXRlTGlzdCA9IHt9O1xuXG4gIHdoaXRlTGlzdFsnYWxpZ24tY29udGVudCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydhbGlnbi1pdGVtcyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydhbGlnbi1zZWxmJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2FsaWdubWVudC1hZGp1c3QnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnYWxpZ25tZW50LWJhc2VsaW5lJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYmFzZWxpbmVcbiAgd2hpdGVMaXN0WydhbGwnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnYW5jaG9yLXBvaW50J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2FuaW1hdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydhbmltYXRpb24tZGVsYXknXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnYW5pbWF0aW9uLWRpcmVjdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2FuaW1hdGlvbi1kdXJhdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydhbmltYXRpb24tZmlsbC1tb2RlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAxXG4gIHdoaXRlTGlzdFsnYW5pbWF0aW9uLW5hbWUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYW5pbWF0aW9uLXBsYXktc3RhdGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBydW5uaW5nXG4gIHdoaXRlTGlzdFsnYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGVhc2VcbiAgd2hpdGVMaXN0WydhemltdXRoJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogY2VudGVyXG4gIHdoaXRlTGlzdFsnYmFja2ZhY2UtdmlzaWJpbGl0eSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHZpc2libGVcbiAgd2hpdGVMaXN0WydiYWNrZ3JvdW5kJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnYmFja2dyb3VuZC1hdHRhY2htZW50J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBzY3JvbGxcbiAgd2hpdGVMaXN0WydiYWNrZ3JvdW5kLWNsaXAnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGJvcmRlci1ib3hcbiAgd2hpdGVMaXN0WydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiB0cmFuc3BhcmVudFxuICB3aGl0ZUxpc3RbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydiYWNrZ3JvdW5kLW9yaWdpbiddID0gdHJ1ZTsgLy8gZGVmYXVsdDogcGFkZGluZy1ib3hcbiAgd2hpdGVMaXN0WydiYWNrZ3JvdW5kLXBvc2l0aW9uJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwJSAwJVxuICB3aGl0ZUxpc3RbJ2JhY2tncm91bmQtcmVwZWF0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiByZXBlYXRcbiAgd2hpdGVMaXN0WydiYWNrZ3JvdW5kLXNpemUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydiYXNlbGluZS1zaGlmdCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGJhc2VsaW5lXG4gIHdoaXRlTGlzdFsnYmluZGluZyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydibGVlZCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDZwdFxuICB3aGl0ZUxpc3RbJ2Jvb2ttYXJrLWxhYmVsJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogY29udGVudCgpXG4gIHdoaXRlTGlzdFsnYm9va21hcmstbGV2ZWwnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYm9va21hcmstc3RhdGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBvcGVuXG4gIHdoaXRlTGlzdFsnYm9yZGVyJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWJvdHRvbSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2JvcmRlci1ib3R0b20tY29sb3InXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGN1cnJlbnQgY29sb3JcbiAgd2hpdGVMaXN0Wydib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0Wydib3JkZXItYm90dG9tLXN0eWxlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWJvdHRvbS13aWR0aCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWNvbGxhcHNlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBzZXBhcmF0ZVxuICB3aGl0ZUxpc3RbJ2JvcmRlci1jb2xvciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2JvcmRlci1pbWFnZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2JvcmRlci1pbWFnZS1vdXRzZXQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0Wydib3JkZXItaW1hZ2UtcmVwZWF0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBzdHJldGNoXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWltYWdlLXNsaWNlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAxMDAlXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWltYWdlLXNvdXJjZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2JvcmRlci1pbWFnZS13aWR0aCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMVxuICB3aGl0ZUxpc3RbJ2JvcmRlci1sZWZ0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWxlZnQtY29sb3InXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGN1cnJlbnQgY29sb3JcbiAgd2hpdGVMaXN0Wydib3JkZXItbGVmdC1zdHlsZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2JvcmRlci1sZWZ0LXdpZHRoJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0Wydib3JkZXItcmFkaXVzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXJpZ2h0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXJpZ2h0LWNvbG9yJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBjdXJyZW50IGNvbG9yXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXJpZ2h0LXN0eWxlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXJpZ2h0LXdpZHRoJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0Wydib3JkZXItc3BhY2luZyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ2JvcmRlci1zdHlsZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2JvcmRlci10b3AnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wydib3JkZXItdG9wLWNvbG9yJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBjdXJyZW50IGNvbG9yXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXRvcC1zdHlsZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2JvcmRlci10b3Atd2lkdGgnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ2JvcmRlci13aWR0aCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2JvdHRvbSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wydib3gtZGVjb3JhdGlvbi1icmVhayddID0gdHJ1ZTsgLy8gZGVmYXVsdDogc2xpY2VcbiAgd2hpdGVMaXN0Wydib3gtc2hhZG93J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYm94LXNpemluZyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogY29udGVudC1ib3hcbiAgd2hpdGVMaXN0Wydib3gtc25hcCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2JveC1zdXBwcmVzcyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogc2hvd1xuICB3aGl0ZUxpc3RbJ2JyZWFrLWFmdGVyJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnYnJlYWstYmVmb3JlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnYnJlYWstaW5zaWRlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnY2FwdGlvbi1zaWRlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogdG9wXG4gIHdoaXRlTGlzdFsnY2hhaW5zJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2NsZWFyJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnY2xpcCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydjbGlwLXBhdGgnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnY2xpcC1ydWxlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uemVyb1xuICB3aGl0ZUxpc3RbJ2NvbG9yJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbnRcbiAgd2hpdGVMaXN0Wydjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wydjb2x1bW4tY291bnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnY29sdW1uLWZpbGwnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBiYWxhbmNlXG4gIHdoaXRlTGlzdFsnY29sdW1uLWdhcCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2NvbHVtbi1ydWxlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2NvbHVtbi1ydWxlLWNvbG9yJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogY3VycmVudCBjb2xvclxuICB3aGl0ZUxpc3RbJ2NvbHVtbi1ydWxlLXN0eWxlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsnY29sdW1uLXJ1bGUtd2lkdGgnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0Wydjb2x1bW4tc3BhbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydjb2x1bW4td2lkdGgnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnY29sdW1ucyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wydjb250YWluJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2NvbnRlbnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydjb3VudGVyLWluY3JlbWVudCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydjb3VudGVyLXJlc2V0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2NvdW50ZXItc2V0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2Nyb3AnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnY3VlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2N1ZS1hZnRlciddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydjdWUtYmVmb3JlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2N1cnNvciddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydkaXJlY3Rpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBsdHJcbiAgd2hpdGVMaXN0WydkaXNwbGF5J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnZGlzcGxheS1pbnNpZGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydkaXNwbGF5LWxpc3QnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydkaXNwbGF5LW91dHNpZGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGlubGluZS1sZXZlbFxuICB3aGl0ZUxpc3RbJ2RvbWluYW50LWJhc2VsaW5lJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2VsZXZhdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGxldmVsXG4gIHdoaXRlTGlzdFsnZW1wdHktY2VsbHMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBzaG93XG4gIHdoaXRlTGlzdFsnZmlsdGVyJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2ZsZXgnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnZmxleC1iYXNpcyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydmbGV4LWRpcmVjdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHJvd1xuICB3aGl0ZUxpc3RbJ2ZsZXgtZmxvdyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydmbGV4LWdyb3cnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnZmxleC1zaHJpbmsnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAxXG4gIHdoaXRlTGlzdFsnZmxleC13cmFwJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm93cmFwXG4gIHdoaXRlTGlzdFsnZmxvYXQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnZmxvYXQtb2Zmc2V0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMCAwXG4gIHdoaXRlTGlzdFsnZmxvb2QtY29sb3InXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBibGFja1xuICB3aGl0ZUxpc3RbJ2Zsb29kLW9wYWNpdHknXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAxXG4gIHdoaXRlTGlzdFsnZmxvdy1mcm9tJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2Zsb3ctaW50byddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydmb250J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnZm9udC1mYW1pbHknXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGltcGxlbWVudGF0aW9uIGRlcGVuZGVudFxuICB3aGl0ZUxpc3RbJ2ZvbnQtZmVhdHVyZS1zZXR0aW5ncyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnZm9udC1rZXJuaW5nJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnZm9udC1sYW5ndWFnZS1vdmVycmlkZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnZm9udC1zaXplJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0Wydmb250LXNpemUtYWRqdXN0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnZm9udC1zdHJldGNoJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydmb250LXN0eWxlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydmb250LXN5bnRoZXNpcyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogd2VpZ2h0IHN0eWxlXG4gIHdoaXRlTGlzdFsnZm9udC12YXJpYW50J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydmb250LXZhcmlhbnQtYWx0ZXJuYXRlcyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnZm9udC12YXJpYW50LWNhcHMnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2ZvbnQtdmFyaWFudC1lYXN0LWFzaWFuJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydmb250LXZhcmlhbnQtbGlnYXR1cmVzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydmb250LXZhcmlhbnQtbnVtZXJpYyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnZm9udC12YXJpYW50LXBvc2l0aW9uJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydmb250LXdlaWdodCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnZ3JpZCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydncmlkLWFyZWEnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnZ3JpZC1hdXRvLWNvbHVtbnMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnZ3JpZC1hdXRvLWZsb3cnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnZ3JpZC1hdXRvLXJvd3MnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnZ3JpZC1jb2x1bW4nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnZ3JpZC1jb2x1bW4tZW5kJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2dyaWQtY29sdW1uLXN0YXJ0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2dyaWQtcm93J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2dyaWQtcm93LWVuZCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydncmlkLXJvdy1zdGFydCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydncmlkLXRlbXBsYXRlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2dyaWQtdGVtcGxhdGUtYXJlYXMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2dyaWQtdGVtcGxhdGUtcm93cyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydoYW5naW5nLXB1bmN0dWF0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2hlaWdodCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2h5cGhlbnMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBtYW51YWxcbiAgd2hpdGVMaXN0WydpY29uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2ltYWdlLW9yaWVudGF0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2ltYWdlLXJlc29sdXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0WydpbWUtbW9kZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wydpbml0aWFsLWxldHRlcnMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0WydpbmxpbmUtYm94LWFsaWduJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbGFzdFxuICB3aGl0ZUxpc3RbJ2p1c3RpZnktY29udGVudCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydqdXN0aWZ5LWl0ZW1zJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2p1c3RpZnktc2VsZiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydsZWZ0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2xldHRlci1zcGFjaW5nJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0WydsaWdodGluZy1jb2xvciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogd2hpdGVcbiAgd2hpdGVMaXN0WydsaW5lLWJveC1jb250YWluJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYmxvY2sgaW5saW5lIHJlcGxhY2VkXG4gIHdoaXRlTGlzdFsnbGluZS1icmVhayddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydsaW5lLWdyaWQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBtYXRjaC1wYXJlbnRcbiAgd2hpdGVMaXN0WydsaW5lLWhlaWdodCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2xpbmUtc25hcCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydsaW5lLXN0YWNraW5nJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2xpbmUtc3RhY2tpbmctcnVieSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGV4Y2x1ZGUtcnVieVxuICB3aGl0ZUxpc3RbJ2xpbmUtc3RhY2tpbmctc2hpZnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBjb25zaWRlci1zaGlmdHNcbiAgd2hpdGVMaXN0WydsaW5lLXN0YWNraW5nLXN0cmF0ZWd5J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogaW5saW5lLWxpbmUtaGVpZ2h0XG4gIHdoaXRlTGlzdFsnbGlzdC1zdHlsZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2xpc3Qtc3R5bGUtaW1hZ2UnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydsaXN0LXN0eWxlLXBvc2l0aW9uJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBvdXRzaWRlXG4gIHdoaXRlTGlzdFsnbGlzdC1zdHlsZS10eXBlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkaXNjXG4gIHdoaXRlTGlzdFsnbWFyZ2luJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnbWFyZ2luLWJvdHRvbSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ21hcmdpbi1sZWZ0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnbWFyZ2luLXJpZ2h0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnbWFyZ2luLXRvcCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ21hcmtlci1vZmZzZXQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnbWFya2VyLXNpZGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBsaXN0LWl0ZW1cbiAgd2hpdGVMaXN0WydtYXJrcyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydtYXNrJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYm9yZGVyLWJveFxuICB3aGl0ZUxpc3RbJ21hc2stYm94J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogc2VlIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ21hc2stYm94LW91dHNldCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydtYXNrLWJveC1yZXBlYXQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBzdHJldGNoXG4gIHdoaXRlTGlzdFsnbWFzay1ib3gtc2xpY2UnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwIGZpbGxcbiAgd2hpdGVMaXN0WydtYXNrLWJveC1zb3VyY2UnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnbWFzay1ib3gtd2lkdGgnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnbWFzay1jbGlwJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYm9yZGVyLWJveFxuICB3aGl0ZUxpc3RbJ21hc2staW1hZ2UnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnbWFzay1vcmlnaW4nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBib3JkZXItYm94XG4gIHdoaXRlTGlzdFsnbWFzay1wb3NpdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGNlbnRlclxuICB3aGl0ZUxpc3RbJ21hc2stcmVwZWF0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm8tcmVwZWF0XG4gIHdoaXRlTGlzdFsnbWFzay1zaXplJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYm9yZGVyLWJveFxuICB3aGl0ZUxpc3RbJ21hc2stc291cmNlLXR5cGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnbWFzay10eXBlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbHVtaW5hbmNlXG4gIHdoaXRlTGlzdFsnbWF4LWhlaWdodCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ21heC1saW5lcyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydtYXgtd2lkdGgnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydtaW4taGVpZ2h0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnbWluLXdpZHRoJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnbW92ZS10byddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ25hdi1kb3duJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ25hdi1pbmRleCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WyduYXYtbGVmdCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WyduYXYtcmlnaHQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnbmF2LXVwJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ29iamVjdC1maXQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBmaWxsXG4gIHdoaXRlTGlzdFsnb2JqZWN0LXBvc2l0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogNTAlIDUwJVxuICB3aGl0ZUxpc3RbJ29wYWNpdHknXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAxXG4gIHdoaXRlTGlzdFsnb3JkZXInXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnb3JwaGFucyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDJcbiAgd2hpdGVMaXN0WydvdXRsaW5lJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ291dGxpbmUtY29sb3InXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBpbnZlcnRcbiAgd2hpdGVMaXN0WydvdXRsaW5lLW9mZnNldCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydvdXRsaW5lLXN0eWxlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ291dGxpbmUtd2lkdGgnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0WydvdmVyZmxvdyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydvdmVyZmxvdy13cmFwJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnb3ZlcmZsb3cteCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHZpc2libGVcbiAgd2hpdGVMaXN0WydvdmVyZmxvdy15J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogdmlzaWJsZVxuICB3aGl0ZUxpc3RbJ3BhZGRpbmcnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydwYWRkaW5nLWJvdHRvbSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ3BhZGRpbmctbGVmdCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ3BhZGRpbmctcmlnaHQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydwYWRkaW5nLXRvcCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ3BhZ2UnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsncGFnZS1icmVhay1hZnRlciddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydwYWdlLWJyZWFrLWJlZm9yZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydwYWdlLWJyZWFrLWluc2lkZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydwYWdlLXBvbGljeSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHN0YXJ0XG4gIHdoaXRlTGlzdFsncGF1c2UnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbnRcbiAgd2hpdGVMaXN0WydwYXVzZS1hZnRlciddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGltcGxlbWVudGF0aW9uIGRlcGVuZGVudFxuICB3aGl0ZUxpc3RbJ3BhdXNlLWJlZm9yZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGltcGxlbWVudGF0aW9uIGRlcGVuZGVudFxuICB3aGl0ZUxpc3RbJ3BlcnNwZWN0aXZlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3BlcnNwZWN0aXZlLW9yaWdpbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDUwJSA1MCVcbiAgd2hpdGVMaXN0WydwaXRjaCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ3BpdGNoLXJhbmdlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogNTBcbiAgd2hpdGVMaXN0WydwbGF5LWR1cmluZyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wydwb3NpdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHN0YXRpY1xuICB3aGl0ZUxpc3RbJ3ByZXNlbnRhdGlvbi1sZXZlbCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydxdW90ZXMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiB0ZXh0XG4gIHdoaXRlTGlzdFsncmVnaW9uLWZyYWdtZW50J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3Jlc2l6ZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydyZXN0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ3Jlc3QtYWZ0ZXInXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsncmVzdC1iZWZvcmUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsncmljaG5lc3MnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiA1MFxuICB3aGl0ZUxpc3RbJ3JpZ2h0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3JvdGF0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ3JvdGF0aW9uLXBvaW50J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogNTAlIDUwJVxuICB3aGl0ZUxpc3RbJ3J1YnktYWxpZ24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsncnVieS1tZXJnZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHNlcGFyYXRlXG4gIHdoaXRlTGlzdFsncnVieS1wb3NpdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGJlZm9yZVxuICB3aGl0ZUxpc3RbJ3NoYXBlLWltYWdlLXRocmVzaG9sZCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDAuMFxuICB3aGl0ZUxpc3RbJ3NoYXBlLW91dHNpZGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnc2hhcGUtbWFyZ2luJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ3NpemUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnc3BlYWsnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnc3BlYWstYXMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0WydzcGVhay1oZWFkZXInXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBvbmNlXG4gIHdoaXRlTGlzdFsnc3BlYWstbnVtZXJhbCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGNvbnRpbnVvdXNcbiAgd2hpdGVMaXN0WydzcGVhay1wdW5jdHVhdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydzcGVlY2gtcmF0ZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ3N0cmVzcyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDUwXG4gIHdoaXRlTGlzdFsnc3RyaW5nLXNldCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wyd0YWItc2l6ZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDhcbiAgd2hpdGVMaXN0Wyd0YWJsZS1sYXlvdXQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsndGV4dC1hbGlnbiddID0gdHJ1ZTsgLy8gZGVmYXVsdDogc3RhcnRcbiAgd2hpdGVMaXN0Wyd0ZXh0LWFsaWduLWxhc3QnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wyd0ZXh0LWNvbWJpbmUtdXByaWdodCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3RleHQtZGVjb3JhdGlvbiddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3RleHQtZGVjb3JhdGlvbi1jb2xvciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogY3VycmVudENvbG9yXG4gIHdoaXRlTGlzdFsndGV4dC1kZWNvcmF0aW9uLWxpbmUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wyd0ZXh0LWRlY29yYXRpb24tc2tpcCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogb2JqZWN0c1xuICB3aGl0ZUxpc3RbJ3RleHQtZGVjb3JhdGlvbi1zdHlsZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogc29saWRcbiAgd2hpdGVMaXN0Wyd0ZXh0LWVtcGhhc2lzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsndGV4dC1lbXBoYXNpcy1jb2xvciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogY3VycmVudENvbG9yXG4gIHdoaXRlTGlzdFsndGV4dC1lbXBoYXNpcy1wb3NpdGlvbiddID0gdHJ1ZTsgLy8gZGVmYXVsdDogb3ZlciByaWdodFxuICB3aGl0ZUxpc3RbJ3RleHQtZW1waGFzaXMtc3R5bGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wyd0ZXh0LWhlaWdodCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3RleHQtaW5kZW50J10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsndGV4dC1qdXN0aWZ5J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsndGV4dC1vcmllbnRhdGlvbiddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbWl4ZWRcbiAgd2hpdGVMaXN0Wyd0ZXh0LW92ZXJmbG93J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBjbGlwXG4gIHdoaXRlTGlzdFsndGV4dC1zaGFkb3cnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wyd0ZXh0LXNwYWNlLWNvbGxhcHNlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBjb2xsYXBzZVxuICB3aGl0ZUxpc3RbJ3RleHQtdHJhbnNmb3JtJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsndGV4dC11bmRlcmxpbmUtcG9zaXRpb24nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wyd0ZXh0LXdyYXAnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ3RvcCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wyd0cmFuc2Zvcm0nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsndHJhbnNmb3JtLW9yaWdpbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDUwJSA1MCUgMFxuICB3aGl0ZUxpc3RbJ3RyYW5zZm9ybS1zdHlsZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGZsYXRcbiAgd2hpdGVMaXN0Wyd0cmFuc2l0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ3RyYW5zaXRpb24tZGVsYXknXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwc1xuICB3aGl0ZUxpc3RbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwc1xuICB3aGl0ZUxpc3RbJ3RyYW5zaXRpb24tcHJvcGVydHknXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhbGxcbiAgd2hpdGVMaXN0Wyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGVhc2VcbiAgd2hpdGVMaXN0Wyd1bmljb2RlLWJpZGknXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wyd2ZXJ0aWNhbC1hbGlnbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGJhc2VsaW5lXG4gIHdoaXRlTGlzdFsndmlzaWJpbGl0eSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHZpc2libGVcbiAgd2hpdGVMaXN0Wyd2b2ljZS1iYWxhbmNlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogY2VudGVyXG4gIHdoaXRlTGlzdFsndm9pY2UtZHVyYXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsndm9pY2UtZmFtaWx5J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogaW1wbGVtZW50YXRpb24gZGVwZW5kZW50XG4gIHdoaXRlTGlzdFsndm9pY2UtcGl0Y2gnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0Wyd2b2ljZS1yYW5nZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ3ZvaWNlLXJhdGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wyd2b2ljZS1zdHJlc3MnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wyd2b2ljZS12b2x1bWUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0Wyd2b2x1bWUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0Wyd3aGl0ZS1zcGFjZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ3dpZG93cyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDJcbiAgd2hpdGVMaXN0Wyd3aWR0aCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3dpbGwtY2hhbmdlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3dvcmQtYnJlYWsnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ3dvcmQtc3BhY2luZyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnd29yZC13cmFwJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wyd3cmFwLWZsb3cnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnd3JhcC10aHJvdWdoJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogd3JhcFxuICB3aGl0ZUxpc3RbJ3dyaXRpbmctbW9kZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGhvcml6b250YWwtdGJcbiAgd2hpdGVMaXN0Wyd6LWluZGV4J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuXG4gIHJldHVybiB3aGl0ZUxpc3Q7XG59XG5cblxuLyoqXG4gKiDljLnphY3liLDnmb3lkI3ljZXkuIrnmoTkuIDkuKrlsZ7mgKfml7ZcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBvbkF0dHIgKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gIC8vIGRvIG5vdGhpbmdcbn1cblxuLyoqXG4gKiDljLnphY3liLDkuI3lnKjnmb3lkI3ljZXkuIrnmoTkuIDkuKrlsZ7mgKfml7ZcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBvbklnbm9yZUF0dHIgKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gIC8vIGRvIG5vdGhpbmdcbn1cblxudmFyIFJFR0VYUF9VUkxfSkFWQVNDUklQVCA9IC9qYXZhc2NyaXB0XFxzKlxcOi9pbWc7XG5cbi8qKlxuICog6L+H5ruk5bGe5oCn5YC8XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBzYWZlQXR0clZhbHVlKG5hbWUsIHZhbHVlKSB7XG4gIGlmIChSRUdFWFBfVVJMX0pBVkFTQ1JJUFQudGVzdCh2YWx1ZSkpIHJldHVybiAnJztcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5cbmV4cG9ydHMud2hpdGVMaXN0ID0gZ2V0RGVmYXVsdFdoaXRlTGlzdCgpO1xuZXhwb3J0cy5nZXREZWZhdWx0V2hpdGVMaXN0ID0gZ2V0RGVmYXVsdFdoaXRlTGlzdDtcbmV4cG9ydHMub25BdHRyID0gb25BdHRyO1xuZXhwb3J0cy5vbklnbm9yZUF0dHIgPSBvbklnbm9yZUF0dHI7XG5leHBvcnRzLnNhZmVBdHRyVmFsdWUgPSBzYWZlQXR0clZhbHVlO1xuIiwiLyoqXG4gKiBjc3NmaWx0ZXJcbiAqXG4gKiBAYXV0aG9yIOiAgembtzxsZWl6b25nbWluQGdtYWlsLmNvbT5cbiAqL1xuXG52YXIgREVGQVVMVCA9IHJlcXVpcmUoJy4vZGVmYXVsdCcpO1xudmFyIEZpbHRlckNTUyA9IHJlcXVpcmUoJy4vY3NzJyk7XG5cblxuLyoqXG4gKiBYU1Pov4fmu6RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY3NzIOimgei/h+a7pOeahENTU+S7o+eggVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMg6YCJ6aG577yad2hpdGVMaXN0LCBvbkF0dHIsIG9uSWdub3JlQXR0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBmaWx0ZXJDU1MgKGh0bWwsIG9wdGlvbnMpIHtcbiAgdmFyIHhzcyA9IG5ldyBGaWx0ZXJDU1Mob3B0aW9ucyk7XG4gIHJldHVybiB4c3MucHJvY2VzcyhodG1sKTtcbn1cblxuXG4vLyDovpPlh7pcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZpbHRlckNTUztcbmV4cG9ydHMuRmlsdGVyQ1NTID0gRmlsdGVyQ1NTO1xuZm9yICh2YXIgaSBpbiBERUZBVUxUKSBleHBvcnRzW2ldID0gREVGQVVMVFtpXTtcblxuLy8g5Zyo5rWP6KeI5Zmo56uv5L2/55SoXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LmZpbHRlckNTUyA9IG1vZHVsZS5leHBvcnRzO1xufVxuIiwiLyoqXG4gKiBjc3NmaWx0ZXJcbiAqXG4gKiBAYXV0aG9yIOiAgembtzxsZWl6b25nbWluQGdtYWlsLmNvbT5cbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5cbi8qKlxuICog6Kej5p6Qc3R5bGVcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY3NzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkF0dHIg5aSE55CG5bGe5oCn55qE5Ye95pWwXG4gKiAgIOWPguaVsOagvOW8j++8miBmdW5jdGlvbiAoc291cmNlUG9zaXRpb24sIHBvc2l0aW9uLCBuYW1lLCB2YWx1ZSwgc291cmNlKVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBwYXJzZVN0eWxlIChjc3MsIG9uQXR0cikge1xuICBjc3MgPSBfLnRyaW1SaWdodChjc3MpO1xuICBpZiAoY3NzW2Nzcy5sZW5ndGggLSAxXSAhPT0gJzsnKSBjc3MgKz0gJzsnO1xuICB2YXIgY3NzTGVuZ3RoID0gY3NzLmxlbmd0aDtcbiAgdmFyIGlzUGFyZW50aGVzaXNPcGVuID0gZmFsc2U7XG4gIHZhciBsYXN0UG9zID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmV0Q1NTID0gJyc7XG5cbiAgZnVuY3Rpb24gYWRkTmV3QXR0ciAoKSB7XG4gICAgLy8g5aaC5p6c5rKh5pyJ5q2j5bi455qE6Zet5ZCI5ZyG5ous5Y+377yM5YiZ55u05o6l5b+955Wl5b2T5YmN5bGe5oCnXG4gICAgaWYgKCFpc1BhcmVudGhlc2lzT3Blbikge1xuICAgICAgdmFyIHNvdXJjZSA9IF8udHJpbShjc3Muc2xpY2UobGFzdFBvcywgaSkpO1xuICAgICAgdmFyIGogPSBzb3VyY2UuaW5kZXhPZignOicpO1xuICAgICAgaWYgKGogIT09IC0xKSB7XG4gICAgICAgIHZhciBuYW1lID0gXy50cmltKHNvdXJjZS5zbGljZSgwLCBqKSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IF8udHJpbShzb3VyY2Uuc2xpY2UoaiArIDEpKTtcbiAgICAgICAgLy8g5b+F6aG75pyJ5bGe5oCn5ZCN56ewXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgdmFyIHJldCA9IG9uQXR0cihsYXN0UG9zLCByZXRDU1MubGVuZ3RoLCBuYW1lLCB2YWx1ZSwgc291cmNlKTtcbiAgICAgICAgICBpZiAocmV0KSByZXRDU1MgKz0gcmV0ICsgJzsgJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsYXN0UG9zID0gaSArIDE7XG4gIH1cblxuICBmb3IgKDsgaSA8IGNzc0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGMgPSBjc3NbaV07XG4gICAgaWYgKGMgPT09ICcvJyAmJiBjc3NbaSArIDFdID09PSAnKicpIHtcbiAgICAgIC8vIOWkh+azqOW8gOWni1xuICAgICAgdmFyIGogPSBjc3MuaW5kZXhPZignKi8nLCBpICsgMik7XG4gICAgICAvLyDlpoLmnpzmsqHmnInmraPluLjnmoTlpIfms6jnu5PmnZ/vvIzliJnlkI7pnaLnmoTpg6jliIblhajpg6jot7Pov4dcbiAgICAgIGlmIChqID09PSAtMSkgYnJlYWs7XG4gICAgICAvLyDnm7TmjqXlsIblvZPliY3kvY3nva7osIPliLDlpIfms6jnu5PlsL7vvIzlubbkuJTliJ3lp4vljJbnirbmgIFcbiAgICAgIGkgPSBqICsgMTtcbiAgICAgIGxhc3RQb3MgPSBpICsgMTtcbiAgICAgIGlzUGFyZW50aGVzaXNPcGVuID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChjID09PSAnKCcpIHtcbiAgICAgIGlzUGFyZW50aGVzaXNPcGVuID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGMgPT09ICcpJykge1xuICAgICAgaXNQYXJlbnRoZXNpc09wZW4gPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGMgPT09ICc7Jykge1xuICAgICAgaWYgKGlzUGFyZW50aGVzaXNPcGVuKSB7XG4gICAgICAgIC8vIOWcqOWchuaLrOWPt+mHjOmdou+8jOW/veeVpVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkTmV3QXR0cigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYyA9PT0gJ1xcbicpIHtcbiAgICAgIGFkZE5ld0F0dHIoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gXy50cmltKHJldENTUyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VTdHlsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBpbmRleE9mOiBmdW5jdGlvbiAoYXJyLCBpdGVtKSB7XG4gICAgdmFyIGksIGo7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgICByZXR1cm4gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgfVxuICAgIGZvciAoaSA9IDAsIGogPSBhcnIubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpZiAoYXJyW2ldID09PSBpdGVtKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH0sXG4gIGZvckVhY2g6IGZ1bmN0aW9uIChhcnIsIGZuLCBzY29wZSkge1xuICAgIHZhciBpLCBqO1xuICAgIGlmIChBcnJheS5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgICAgcmV0dXJuIGFyci5mb3JFYWNoKGZuLCBzY29wZSk7XG4gICAgfVxuICAgIGZvciAoaSA9IDAsIGogPSBhcnIubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBmbi5jYWxsKHNjb3BlLCBhcnJbaV0sIGksIGFycik7XG4gICAgfVxuICB9LFxuICB0cmltOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgaWYgKFN0cmluZy5wcm90b3R5cGUudHJpbSkge1xuICAgICAgcmV0dXJuIHN0ci50cmltKCk7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csICcnKTtcbiAgfSxcbiAgdHJpbVJpZ2h0OiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgaWYgKFN0cmluZy5wcm90b3R5cGUudHJpbVJpZ2h0KSB7XG4gICAgICByZXR1cm4gc3RyLnRyaW1SaWdodCgpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXHMqJCkvZywgJycpO1xuICB9XG59O1xuIiwiLyoqXG4gKiBtYXJrZWQgLSBhIG1hcmtkb3duIHBhcnNlclxuICogQ29weXJpZ2h0IChjKSAyMDExLTIwMTgsIENocmlzdG9waGVyIEplZmZyZXkuIChNSVQgTGljZW5zZWQpXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFya2VkanMvbWFya2VkXG4gKi9cblxuOyhmdW5jdGlvbihyb290KSB7XG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQmxvY2stTGV2ZWwgR3JhbW1hclxuICovXG5cbnZhciBibG9jayA9IHtcbiAgbmV3bGluZTogL15cXG4rLyxcbiAgY29kZTogL14oIHs0fVteXFxuXStcXG4qKSsvLFxuICBmZW5jZXM6IG5vb3AsXG4gIGhyOiAvXiB7MCwzfSgoPzotICopezMsfXwoPzpfICopezMsfXwoPzpcXCogKil7Myx9KSg/Olxcbit8JCkvLFxuICBoZWFkaW5nOiAvXiAqKCN7MSw2fSkgKihbXlxcbl0rPykgKig/OiMrICopPyg/Olxcbit8JCkvLFxuICBucHRhYmxlOiBub29wLFxuICBibG9ja3F1b3RlOiAvXiggezAsM30+ID8ocGFyYWdyYXBofFteXFxuXSopKD86XFxufCQpKSsvLFxuICBsaXN0OiAvXiggezAsM30pKGJ1bGwpIFtcXHNcXFNdKz8oPzpocnxkZWZ8XFxuezIsfSg/ISApKD8hXFwxYnVsbCApXFxuKnxcXHMqJCkvLFxuICBodG1sOiAnXiB7MCwzfSg/OicgLy8gb3B0aW9uYWwgaW5kZW50YXRpb25cbiAgICArICc8KHNjcmlwdHxwcmV8c3R5bGUpW1xcXFxzPl1bXFxcXHNcXFxcU10qPyg/OjwvXFxcXDE+W15cXFxcbl0qXFxcXG4rfCQpJyAvLyAoMSlcbiAgICArICd8Y29tbWVudFteXFxcXG5dKihcXFxcbit8JCknIC8vICgyKVxuICAgICsgJ3w8XFxcXD9bXFxcXHNcXFxcU10qP1xcXFw/PlxcXFxuKicgLy8gKDMpXG4gICAgKyAnfDwhW0EtWl1bXFxcXHNcXFxcU10qPz5cXFxcbionIC8vICg0KVxuICAgICsgJ3w8IVxcXFxbQ0RBVEFcXFxcW1tcXFxcc1xcXFxTXSo/XFxcXF1cXFxcXT5cXFxcbionIC8vICg1KVxuICAgICsgJ3w8Lz8odGFnKSg/OiArfFxcXFxufC8/PilbXFxcXHNcXFxcU10qPyg/OlxcXFxuezIsfXwkKScgLy8gKDYpXG4gICAgKyAnfDwoPyFzY3JpcHR8cHJlfHN0eWxlKShbYS16XVtcXFxcdy1dKikoPzphdHRyaWJ1dGUpKj8gKi8/Pig/PVsgXFxcXHRdKig/OlxcXFxufCQpKVtcXFxcc1xcXFxTXSo/KD86XFxcXG57Mix9fCQpJyAvLyAoNykgb3BlbiB0YWdcbiAgICArICd8PC8oPyFzY3JpcHR8cHJlfHN0eWxlKVthLXpdW1xcXFx3LV0qXFxcXHMqPig/PVsgXFxcXHRdKig/OlxcXFxufCQpKVtcXFxcc1xcXFxTXSo/KD86XFxcXG57Mix9fCQpJyAvLyAoNykgY2xvc2luZyB0YWdcbiAgICArICcpJyxcbiAgZGVmOiAvXiB7MCwzfVxcWyhsYWJlbClcXF06ICpcXG4/ICo8PyhbXlxccz5dKyk+Pyg/Oig/OiArXFxuPyAqfCAqXFxuICopKHRpdGxlKSk/ICooPzpcXG4rfCQpLyxcbiAgdGFibGU6IG5vb3AsXG4gIGxoZWFkaW5nOiAvXihbXlxcbl0rKVxcbiAqKD18LSl7Mix9ICooPzpcXG4rfCQpLyxcbiAgcGFyYWdyYXBoOiAvXihbXlxcbl0rKD86XFxuKD8haHJ8aGVhZGluZ3xsaGVhZGluZ3wgezAsM30+fDxcXC8/KD86dGFnKSg/OiArfFxcbnxcXC8/Pil8PCg/OnNjcmlwdHxwcmV8c3R5bGV8IS0tKSlbXlxcbl0rKSopLyxcbiAgdGV4dDogL15bXlxcbl0rL1xufTtcblxuYmxvY2suX2xhYmVsID0gLyg/IVxccypcXF0pKD86XFxcXFtcXFtcXF1dfFteXFxbXFxdXSkrLztcbmJsb2NrLl90aXRsZSA9IC8oPzpcIig/OlxcXFxcIj98W15cIlxcXFxdKSpcInwnW14nXFxuXSooPzpcXG5bXidcXG5dKykqXFxuPyd8XFwoW14oKV0qXFwpKS87XG5ibG9jay5kZWYgPSBlZGl0KGJsb2NrLmRlZilcbiAgLnJlcGxhY2UoJ2xhYmVsJywgYmxvY2suX2xhYmVsKVxuICAucmVwbGFjZSgndGl0bGUnLCBibG9jay5fdGl0bGUpXG4gIC5nZXRSZWdleCgpO1xuXG5ibG9jay5idWxsZXQgPSAvKD86WyorLV18XFxkezEsOX1cXC4pLztcbmJsb2NrLml0ZW0gPSAvXiggKikoYnVsbCkgP1teXFxuXSooPzpcXG4oPyFcXDFidWxsID8pW15cXG5dKikqLztcbmJsb2NrLml0ZW0gPSBlZGl0KGJsb2NrLml0ZW0sICdnbScpXG4gIC5yZXBsYWNlKC9idWxsL2csIGJsb2NrLmJ1bGxldClcbiAgLmdldFJlZ2V4KCk7XG5cbmJsb2NrLmxpc3QgPSBlZGl0KGJsb2NrLmxpc3QpXG4gIC5yZXBsYWNlKC9idWxsL2csIGJsb2NrLmJ1bGxldClcbiAgLnJlcGxhY2UoJ2hyJywgJ1xcXFxuKyg/PVxcXFwxPyg/Oig/Oi0gKil7Myx9fCg/Ol8gKil7Myx9fCg/OlxcXFwqICopezMsfSkoPzpcXFxcbit8JCkpJylcbiAgLnJlcGxhY2UoJ2RlZicsICdcXFxcbisoPz0nICsgYmxvY2suZGVmLnNvdXJjZSArICcpJylcbiAgLmdldFJlZ2V4KCk7XG5cbmJsb2NrLl90YWcgPSAnYWRkcmVzc3xhcnRpY2xlfGFzaWRlfGJhc2V8YmFzZWZvbnR8YmxvY2txdW90ZXxib2R5fGNhcHRpb24nXG4gICsgJ3xjZW50ZXJ8Y29sfGNvbGdyb3VwfGRkfGRldGFpbHN8ZGlhbG9nfGRpcnxkaXZ8ZGx8ZHR8ZmllbGRzZXR8ZmlnY2FwdGlvbidcbiAgKyAnfGZpZ3VyZXxmb290ZXJ8Zm9ybXxmcmFtZXxmcmFtZXNldHxoWzEtNl18aGVhZHxoZWFkZXJ8aHJ8aHRtbHxpZnJhbWUnXG4gICsgJ3xsZWdlbmR8bGl8bGlua3xtYWlufG1lbnV8bWVudWl0ZW18bWV0YXxuYXZ8bm9mcmFtZXN8b2x8b3B0Z3JvdXB8b3B0aW9uJ1xuICArICd8cHxwYXJhbXxzZWN0aW9ufHNvdXJjZXxzdW1tYXJ5fHRhYmxlfHRib2R5fHRkfHRmb290fHRofHRoZWFkfHRpdGxlfHRyJ1xuICArICd8dHJhY2t8dWwnO1xuYmxvY2suX2NvbW1lbnQgPSAvPCEtLSg/IS0/PilbXFxzXFxTXSo/LS0+LztcbmJsb2NrLmh0bWwgPSBlZGl0KGJsb2NrLmh0bWwsICdpJylcbiAgLnJlcGxhY2UoJ2NvbW1lbnQnLCBibG9jay5fY29tbWVudClcbiAgLnJlcGxhY2UoJ3RhZycsIGJsb2NrLl90YWcpXG4gIC5yZXBsYWNlKCdhdHRyaWJ1dGUnLCAvICtbYS16QS1aOl9dW1xcdy46LV0qKD86ICo9ICpcIlteXCJcXG5dKlwifCAqPSAqJ1teJ1xcbl0qJ3wgKj0gKlteXFxzXCInPTw+YF0rKT8vKVxuICAuZ2V0UmVnZXgoKTtcblxuYmxvY2sucGFyYWdyYXBoID0gZWRpdChibG9jay5wYXJhZ3JhcGgpXG4gIC5yZXBsYWNlKCdocicsIGJsb2NrLmhyKVxuICAucmVwbGFjZSgnaGVhZGluZycsIGJsb2NrLmhlYWRpbmcpXG4gIC5yZXBsYWNlKCdsaGVhZGluZycsIGJsb2NrLmxoZWFkaW5nKVxuICAucmVwbGFjZSgndGFnJywgYmxvY2suX3RhZykgLy8gcGFycyBjYW4gYmUgaW50ZXJydXB0ZWQgYnkgdHlwZSAoNikgaHRtbCBibG9ja3NcbiAgLmdldFJlZ2V4KCk7XG5cbmJsb2NrLmJsb2NrcXVvdGUgPSBlZGl0KGJsb2NrLmJsb2NrcXVvdGUpXG4gIC5yZXBsYWNlKCdwYXJhZ3JhcGgnLCBibG9jay5wYXJhZ3JhcGgpXG4gIC5nZXRSZWdleCgpO1xuXG4vKipcbiAqIE5vcm1hbCBCbG9jayBHcmFtbWFyXG4gKi9cblxuYmxvY2subm9ybWFsID0gbWVyZ2Uoe30sIGJsb2NrKTtcblxuLyoqXG4gKiBHRk0gQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLmdmbSA9IG1lcmdlKHt9LCBibG9jay5ub3JtYWwsIHtcbiAgZmVuY2VzOiAvXiB7MCwzfShgezMsfXx+ezMsfSkoW15gXFxuXSopXFxuKD86fChbXFxzXFxTXSo/KVxcbikoPzogezAsM31cXDFbfmBdKiAqKD86XFxuK3wkKXwkKS8sXG4gIHBhcmFncmFwaDogL14vLFxuICBoZWFkaW5nOiAvXiAqKCN7MSw2fSkgKyhbXlxcbl0rPykgKiMqICooPzpcXG4rfCQpL1xufSk7XG5cbmJsb2NrLmdmbS5wYXJhZ3JhcGggPSBlZGl0KGJsb2NrLnBhcmFncmFwaClcbiAgLnJlcGxhY2UoJyg/IScsICcoPyEnXG4gICAgKyBibG9jay5nZm0uZmVuY2VzLnNvdXJjZS5yZXBsYWNlKCdcXFxcMScsICdcXFxcMicpICsgJ3wnXG4gICAgKyBibG9jay5saXN0LnNvdXJjZS5yZXBsYWNlKCdcXFxcMScsICdcXFxcMycpICsgJ3wnKVxuICAuZ2V0UmVnZXgoKTtcblxuLyoqXG4gKiBHRk0gKyBUYWJsZXMgQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLnRhYmxlcyA9IG1lcmdlKHt9LCBibG9jay5nZm0sIHtcbiAgbnB0YWJsZTogL14gKihbXnxcXG4gXS4qXFx8LiopXFxuICooWy06XSsgKlxcfFstfCA6XSopKD86XFxuKCg/Oi4qW14+XFxuIF0uKig/OlxcbnwkKSkqKVxcbip8JCkvLFxuICB0YWJsZTogL14gKlxcfCguKylcXG4gKlxcfD8oICpbLTpdK1stfCA6XSopKD86XFxuKCg/OiAqW14+XFxuIF0uKig/OlxcbnwkKSkqKVxcbip8JCkvXG59KTtcblxuLyoqXG4gKiBQZWRhbnRpYyBncmFtbWFyXG4gKi9cblxuYmxvY2sucGVkYW50aWMgPSBtZXJnZSh7fSwgYmxvY2subm9ybWFsLCB7XG4gIGh0bWw6IGVkaXQoXG4gICAgJ14gKig/OmNvbW1lbnQgKig/OlxcXFxufFxcXFxzKiQpJ1xuICAgICsgJ3w8KHRhZylbXFxcXHNcXFxcU10rPzwvXFxcXDE+ICooPzpcXFxcbnsyLH18XFxcXHMqJCknIC8vIGNsb3NlZCB0YWdcbiAgICArICd8PHRhZyg/OlwiW15cIl0qXCJ8XFwnW15cXCddKlxcJ3xcXFxcc1teXFwnXCIvPlxcXFxzXSopKj8vPz4gKig/OlxcXFxuezIsfXxcXFxccyokKSknKVxuICAgIC5yZXBsYWNlKCdjb21tZW50JywgYmxvY2suX2NvbW1lbnQpXG4gICAgLnJlcGxhY2UoL3RhZy9nLCAnKD8hKD86J1xuICAgICAgKyAnYXxlbXxzdHJvbmd8c21hbGx8c3xjaXRlfHF8ZGZufGFiYnJ8ZGF0YXx0aW1lfGNvZGV8dmFyfHNhbXB8a2JkfHN1YidcbiAgICAgICsgJ3xzdXB8aXxifHV8bWFya3xydWJ5fHJ0fHJwfGJkaXxiZG98c3Bhbnxicnx3YnJ8aW5zfGRlbHxpbWcpJ1xuICAgICAgKyAnXFxcXGIpXFxcXHcrKD8hOnxbXlxcXFx3XFxcXHNAXSpAKVxcXFxiJylcbiAgICAuZ2V0UmVnZXgoKSxcbiAgZGVmOiAvXiAqXFxbKFteXFxdXSspXFxdOiAqPD8oW15cXHM+XSspPj8oPzogKyhbXCIoXVteXFxuXStbXCIpXSkpPyAqKD86XFxuK3wkKS9cbn0pO1xuXG4vKipcbiAqIEJsb2NrIExleGVyXG4gKi9cblxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xuICB0aGlzLnRva2VucyA9IFtdO1xuICB0aGlzLnRva2Vucy5saW5rcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xuICB0aGlzLnJ1bGVzID0gYmxvY2subm9ybWFsO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICB0aGlzLnJ1bGVzID0gYmxvY2sucGVkYW50aWM7XG4gIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmdmbSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGFibGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzID0gYmxvY2sudGFibGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bGVzID0gYmxvY2suZ2ZtO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBCbG9jayBSdWxlc1xuICovXG5cbkxleGVyLnJ1bGVzID0gYmxvY2s7XG5cbi8qKlxuICogU3RhdGljIExleCBNZXRob2RcbiAqL1xuXG5MZXhlci5sZXggPSBmdW5jdGlvbihzcmMsIG9wdGlvbnMpIHtcbiAgdmFyIGxleGVyID0gbmV3IExleGVyKG9wdGlvbnMpO1xuICByZXR1cm4gbGV4ZXIubGV4KHNyYyk7XG59O1xuXG4vKipcbiAqIFByZXByb2Nlc3NpbmdcbiAqL1xuXG5MZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24oc3JjKSB7XG4gIHNyYyA9IHNyY1xuICAgIC5yZXBsYWNlKC9cXHJcXG58XFxyL2csICdcXG4nKVxuICAgIC5yZXBsYWNlKC9cXHQvZywgJyAgICAnKVxuICAgIC5yZXBsYWNlKC9cXHUwMGEwL2csICcgJylcbiAgICAucmVwbGFjZSgvXFx1MjQyNC9nLCAnXFxuJyk7XG5cbiAgcmV0dXJuIHRoaXMudG9rZW4oc3JjLCB0cnVlKTtcbn07XG5cbi8qKlxuICogTGV4aW5nXG4gKi9cblxuTGV4ZXIucHJvdG90eXBlLnRva2VuID0gZnVuY3Rpb24oc3JjLCB0b3ApIHtcbiAgc3JjID0gc3JjLnJlcGxhY2UoL14gKyQvZ20sICcnKTtcbiAgdmFyIG5leHQsXG4gICAgICBsb29zZSxcbiAgICAgIGNhcCxcbiAgICAgIGJ1bGwsXG4gICAgICBiLFxuICAgICAgaXRlbSxcbiAgICAgIGxpc3RTdGFydCxcbiAgICAgIGxpc3RJdGVtcyxcbiAgICAgIHQsXG4gICAgICBzcGFjZSxcbiAgICAgIGksXG4gICAgICB0YWcsXG4gICAgICBsLFxuICAgICAgaXNvcmRlcmVkLFxuICAgICAgaXN0YXNrLFxuICAgICAgaXNjaGVja2VkO1xuXG4gIHdoaWxlIChzcmMpIHtcbiAgICAvLyBuZXdsaW5lXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubmV3bGluZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBpZiAoY2FwWzBdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3NwYWNlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb2RlXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuY29kZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBjYXAgPSBjYXBbMF0ucmVwbGFjZSgvXiB7NH0vZ20sICcnKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgIHRleHQ6ICF0aGlzLm9wdGlvbnMucGVkYW50aWNcbiAgICAgICAgICA/IHJ0cmltKGNhcCwgJ1xcbicpXG4gICAgICAgICAgOiBjYXBcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZmVuY2VzIChnZm0pXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuZmVuY2VzLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgIGxhbmc6IGNhcFsyXSA/IGNhcFsyXS50cmltKCkgOiBjYXBbMl0sXG4gICAgICAgIHRleHQ6IGNhcFszXSB8fCAnJ1xuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBoZWFkaW5nXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaGVhZGluZy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgICAgICBkZXB0aDogY2FwWzFdLmxlbmd0aCxcbiAgICAgICAgdGV4dDogY2FwWzJdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRhYmxlIG5vIGxlYWRpbmcgcGlwZSAoZ2ZtKVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLm5wdGFibGUuZXhlYyhzcmMpKSB7XG4gICAgICBpdGVtID0ge1xuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBoZWFkZXI6IHNwbGl0Q2VsbHMoY2FwWzFdLnJlcGxhY2UoL14gKnwgKlxcfCAqJC9nLCAnJykpLFxuICAgICAgICBhbGlnbjogY2FwWzJdLnJlcGxhY2UoL14gKnxcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGNlbGxzOiBjYXBbM10gPyBjYXBbM10ucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJykgOiBbXVxuICAgICAgfTtcblxuICAgICAgaWYgKGl0ZW0uaGVhZGVyLmxlbmd0aCA9PT0gaXRlbS5hbGlnbi5sZW5ndGgpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5hbGlnbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICgvXiAqLSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ3JpZ2h0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2NlbnRlcic7XG4gICAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2xlZnQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGl0ZW0uY2VsbHNbaV0gPSBzcGxpdENlbGxzKGl0ZW0uY2VsbHNbaV0sIGl0ZW0uaGVhZGVyLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhyXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaHIuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdocidcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gYmxvY2txdW90ZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrcXVvdGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2Jsb2NrcXVvdGVfc3RhcnQnXG4gICAgICB9KTtcblxuICAgICAgY2FwID0gY2FwWzBdLnJlcGxhY2UoL14gKj4gPy9nbSwgJycpO1xuXG4gICAgICAvLyBQYXNzIGB0b3BgIHRvIGtlZXAgdGhlIGN1cnJlbnRcbiAgICAgIC8vIFwidG9wbGV2ZWxcIiBzdGF0ZS4gVGhpcyBpcyBleGFjdGx5XG4gICAgICAvLyBob3cgbWFya2Rvd24ucGwgd29ya3MuXG4gICAgICB0aGlzLnRva2VuKGNhcCwgdG9wKTtcblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdibG9ja3F1b3RlX2VuZCdcbiAgICAgIH0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBsaXN0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubGlzdC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBidWxsID0gY2FwWzJdO1xuICAgICAgaXNvcmRlcmVkID0gYnVsbC5sZW5ndGggPiAxO1xuXG4gICAgICBsaXN0U3RhcnQgPSB7XG4gICAgICAgIHR5cGU6ICdsaXN0X3N0YXJ0JyxcbiAgICAgICAgb3JkZXJlZDogaXNvcmRlcmVkLFxuICAgICAgICBzdGFydDogaXNvcmRlcmVkID8gK2J1bGwgOiAnJyxcbiAgICAgICAgbG9vc2U6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKGxpc3RTdGFydCk7XG5cbiAgICAgIC8vIEdldCBlYWNoIHRvcC1sZXZlbCBpdGVtLlxuICAgICAgY2FwID0gY2FwWzBdLm1hdGNoKHRoaXMucnVsZXMuaXRlbSk7XG5cbiAgICAgIGxpc3RJdGVtcyA9IFtdO1xuICAgICAgbmV4dCA9IGZhbHNlO1xuICAgICAgbCA9IGNhcC5sZW5ndGg7XG4gICAgICBpID0gMDtcblxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IGNhcFtpXTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGxpc3QgaXRlbSdzIGJ1bGxldFxuICAgICAgICAvLyBzbyBpdCBpcyBzZWVuIGFzIHRoZSBuZXh0IHRva2VuLlxuICAgICAgICBzcGFjZSA9IGl0ZW0ubGVuZ3RoO1xuICAgICAgICBpdGVtID0gaXRlbS5yZXBsYWNlKC9eICooWyorLV18XFxkK1xcLikgKi8sICcnKTtcblxuICAgICAgICAvLyBPdXRkZW50IHdoYXRldmVyIHRoZVxuICAgICAgICAvLyBsaXN0IGl0ZW0gY29udGFpbnMuIEhhY2t5LlxuICAgICAgICBpZiAofml0ZW0uaW5kZXhPZignXFxuICcpKSB7XG4gICAgICAgICAgc3BhY2UgLT0gaXRlbS5sZW5ndGg7XG4gICAgICAgICAgaXRlbSA9ICF0aGlzLm9wdGlvbnMucGVkYW50aWNcbiAgICAgICAgICAgID8gaXRlbS5yZXBsYWNlKG5ldyBSZWdFeHAoJ14gezEsJyArIHNwYWNlICsgJ30nLCAnZ20nKSwgJycpXG4gICAgICAgICAgICA6IGl0ZW0ucmVwbGFjZSgvXiB7MSw0fS9nbSwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIG5leHQgbGlzdCBpdGVtIGJlbG9uZ3MgaGVyZS5cbiAgICAgICAgLy8gQmFja3BlZGFsIGlmIGl0IGRvZXMgbm90IGJlbG9uZyBpbiB0aGlzIGxpc3QuXG4gICAgICAgIGlmIChpICE9PSBsIC0gMSkge1xuICAgICAgICAgIGIgPSBibG9jay5idWxsZXQuZXhlYyhjYXBbaSArIDFdKVswXTtcbiAgICAgICAgICBpZiAoYnVsbC5sZW5ndGggPiAxID8gYi5sZW5ndGggPT09IDFcbiAgICAgICAgICAgIDogKGIubGVuZ3RoID4gMSB8fCAodGhpcy5vcHRpb25zLnNtYXJ0TGlzdHMgJiYgYiAhPT0gYnVsbCkpKSB7XG4gICAgICAgICAgICBzcmMgPSBjYXAuc2xpY2UoaSArIDEpLmpvaW4oJ1xcbicpICsgc3JjO1xuICAgICAgICAgICAgaSA9IGwgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERldGVybWluZSB3aGV0aGVyIGl0ZW0gaXMgbG9vc2Ugb3Igbm90LlxuICAgICAgICAvLyBVc2U6IC8oXnxcXG4pKD8hIClbXlxcbl0rXFxuXFxuKD8hXFxzKiQpL1xuICAgICAgICAvLyBmb3IgZGlzY291bnQgYmVoYXZpb3IuXG4gICAgICAgIGxvb3NlID0gbmV4dCB8fCAvXFxuXFxuKD8hXFxzKiQpLy50ZXN0KGl0ZW0pO1xuICAgICAgICBpZiAoaSAhPT0gbCAtIDEpIHtcbiAgICAgICAgICBuZXh0ID0gaXRlbS5jaGFyQXQoaXRlbS5sZW5ndGggLSAxKSA9PT0gJ1xcbic7XG4gICAgICAgICAgaWYgKCFsb29zZSkgbG9vc2UgPSBuZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxvb3NlKSB7XG4gICAgICAgICAgbGlzdFN0YXJ0Lmxvb3NlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciB0YXNrIGxpc3QgaXRlbXNcbiAgICAgICAgaXN0YXNrID0gL15cXFtbIHhYXVxcXSAvLnRlc3QoaXRlbSk7XG4gICAgICAgIGlzY2hlY2tlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGlzdGFzaykge1xuICAgICAgICAgIGlzY2hlY2tlZCA9IGl0ZW1bMV0gIT09ICcgJztcbiAgICAgICAgICBpdGVtID0gaXRlbS5yZXBsYWNlKC9eXFxbWyB4WF1cXF0gKy8sICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdHlwZTogJ2xpc3RfaXRlbV9zdGFydCcsXG4gICAgICAgICAgdGFzazogaXN0YXNrLFxuICAgICAgICAgIGNoZWNrZWQ6IGlzY2hlY2tlZCxcbiAgICAgICAgICBsb29zZTogbG9vc2VcbiAgICAgICAgfTtcblxuICAgICAgICBsaXN0SXRlbXMucHVzaCh0KTtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh0KTtcblxuICAgICAgICAvLyBSZWN1cnNlLlxuICAgICAgICB0aGlzLnRva2VuKGl0ZW0sIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnbGlzdF9pdGVtX2VuZCdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0U3RhcnQubG9vc2UpIHtcbiAgICAgICAgbCA9IGxpc3RJdGVtcy5sZW5ndGg7XG4gICAgICAgIGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGxpc3RJdGVtc1tpXS5sb29zZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaXN0X2VuZCdcbiAgICAgIH0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBodG1sXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaHRtbC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgICAgPyAncGFyYWdyYXBoJ1xuICAgICAgICAgIDogJ2h0bWwnLFxuICAgICAgICBwcmU6ICF0aGlzLm9wdGlvbnMuc2FuaXRpemVyXG4gICAgICAgICAgJiYgKGNhcFsxXSA9PT0gJ3ByZScgfHwgY2FwWzFdID09PSAnc2NyaXB0JyB8fCBjYXBbMV0gPT09ICdzdHlsZScpLFxuICAgICAgICB0ZXh0OiBjYXBbMF1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZGVmXG4gICAgaWYgKHRvcCAmJiAoY2FwID0gdGhpcy5ydWxlcy5kZWYuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGlmIChjYXBbM10pIGNhcFszXSA9IGNhcFszXS5zdWJzdHJpbmcoMSwgY2FwWzNdLmxlbmd0aCAtIDEpO1xuICAgICAgdGFnID0gY2FwWzFdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICAgICAgaWYgKCF0aGlzLnRva2Vucy5saW5rc1t0YWddKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLmxpbmtzW3RhZ10gPSB7XG4gICAgICAgICAgaHJlZjogY2FwWzJdLFxuICAgICAgICAgIHRpdGxlOiBjYXBbM11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRhYmxlIChnZm0pXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMudGFibGUuZXhlYyhzcmMpKSB7XG4gICAgICBpdGVtID0ge1xuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBoZWFkZXI6IHNwbGl0Q2VsbHMoY2FwWzFdLnJlcGxhY2UoL14gKnwgKlxcfCAqJC9nLCAnJykpLFxuICAgICAgICBhbGlnbjogY2FwWzJdLnJlcGxhY2UoL14gKnxcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGNlbGxzOiBjYXBbM10gPyBjYXBbM10ucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJykgOiBbXVxuICAgICAgfTtcblxuICAgICAgaWYgKGl0ZW0uaGVhZGVyLmxlbmd0aCA9PT0gaXRlbS5hbGlnbi5sZW5ndGgpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5hbGlnbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICgvXiAqLSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ3JpZ2h0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2NlbnRlcic7XG4gICAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2xlZnQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGl0ZW0uY2VsbHNbaV0gPSBzcGxpdENlbGxzKFxuICAgICAgICAgICAgaXRlbS5jZWxsc1tpXS5yZXBsYWNlKC9eICpcXHwgKnwgKlxcfCAqJC9nLCAnJyksXG4gICAgICAgICAgICBpdGVtLmhlYWRlci5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChpdGVtKTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsaGVhZGluZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmxoZWFkaW5nLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnaGVhZGluZycsXG4gICAgICAgIGRlcHRoOiBjYXBbMl0gPT09ICc9JyA/IDEgOiAyLFxuICAgICAgICB0ZXh0OiBjYXBbMV1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdG9wLWxldmVsIHBhcmFncmFwaFxuICAgIGlmICh0b3AgJiYgKGNhcCA9IHRoaXMucnVsZXMucGFyYWdyYXBoLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgIHRleHQ6IGNhcFsxXS5jaGFyQXQoY2FwWzFdLmxlbmd0aCAtIDEpID09PSAnXFxuJ1xuICAgICAgICAgID8gY2FwWzFdLnNsaWNlKDAsIC0xKVxuICAgICAgICAgIDogY2FwWzFdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRleHRcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50ZXh0LmV4ZWMoc3JjKSkge1xuICAgICAgLy8gVG9wLWxldmVsIHNob3VsZCBuZXZlciByZWFjaCBoZXJlLlxuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6IGNhcFswXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXRlIGxvb3Agb24gYnl0ZTogJyArIHNyYy5jaGFyQ29kZUF0KDApKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy50b2tlbnM7XG59O1xuXG4vKipcbiAqIElubGluZS1MZXZlbCBHcmFtbWFyXG4gKi9cblxudmFyIGlubGluZSA9IHtcbiAgZXNjYXBlOiAvXlxcXFwoWyFcIiMkJSYnKCkqKyxcXC0uLzo7PD0+P0BcXFtcXF1cXFxcXl9ge3x9fl0pLyxcbiAgYXV0b2xpbms6IC9ePChzY2hlbWU6W15cXHNcXHgwMC1cXHgxZjw+XSp8ZW1haWwpPi8sXG4gIHVybDogbm9vcCxcbiAgdGFnOiAnXmNvbW1lbnQnXG4gICAgKyAnfF48L1thLXpBLVpdW1xcXFx3Oi1dKlxcXFxzKj4nIC8vIHNlbGYtY2xvc2luZyB0YWdcbiAgICArICd8XjxbYS16QS1aXVtcXFxcdy1dKig/OmF0dHJpYnV0ZSkqP1xcXFxzKi8/PicgLy8gb3BlbiB0YWdcbiAgICArICd8XjxcXFxcP1tcXFxcc1xcXFxTXSo/XFxcXD8+JyAvLyBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBlLmcuIDw/cGhwID8+XG4gICAgKyAnfF48IVthLXpBLVpdK1xcXFxzW1xcXFxzXFxcXFNdKj8+JyAvLyBkZWNsYXJhdGlvbiwgZS5nLiA8IURPQ1RZUEUgaHRtbD5cbiAgICArICd8XjwhXFxcXFtDREFUQVxcXFxbW1xcXFxzXFxcXFNdKj9cXFxcXVxcXFxdPicsIC8vIENEQVRBIHNlY3Rpb25cbiAgbGluazogL14hP1xcWyhsYWJlbClcXF1cXChocmVmKD86XFxzKyh0aXRsZSkpP1xccypcXCkvLFxuICByZWZsaW5rOiAvXiE/XFxbKGxhYmVsKVxcXVxcWyg/IVxccypcXF0pKCg/OlxcXFxbXFxbXFxdXT98W15cXFtcXF1cXFxcXSkrKVxcXS8sXG4gIG5vbGluazogL14hP1xcWyg/IVxccypcXF0pKCg/OlxcW1teXFxbXFxdXSpcXF18XFxcXFtcXFtcXF1dfFteXFxbXFxdXSkqKVxcXSg/OlxcW1xcXSk/LyxcbiAgc3Ryb25nOiAvXl9fKFteXFxzX10pX18oPyFfKXxeXFwqXFwqKFteXFxzKl0pXFwqXFwqKD8hXFwqKXxeX18oW15cXHNdW1xcc1xcU10qP1teXFxzXSlfXyg/IV8pfF5cXCpcXCooW15cXHNdW1xcc1xcU10qP1teXFxzXSlcXCpcXCooPyFcXCopLyxcbiAgZW06IC9eXyhbXlxcc19dKV8oPyFfKXxeXFwqKFteXFxzKlwiPFxcW10pXFwqKD8hXFwqKXxeXyhbXlxcc11bXFxzXFxTXSo/W15cXHNfXSlfKD8hX3xbXlxcc3B1bmN0dWF0aW9uXSl8Xl8oW15cXHNfXVtcXHNcXFNdKj9bXlxcc10pXyg/IV98W15cXHNwdW5jdHVhdGlvbl0pfF5cXCooW15cXHNcIjxcXFtdW1xcc1xcU10qP1teXFxzKl0pXFwqKD8hXFwqKXxeXFwqKFteXFxzKlwiPFxcW11bXFxzXFxTXSo/W15cXHNdKVxcKig/IVxcKikvLFxuICBjb2RlOiAvXihgKykoW15gXXxbXmBdW1xcc1xcU10qP1teYF0pXFwxKD8hYCkvLFxuICBicjogL14oIHsyLH18XFxcXClcXG4oPyFcXHMqJCkvLFxuICBkZWw6IG5vb3AsXG4gIHRleHQ6IC9eKGArfFteYF0pKD86W1xcc1xcU10qPyg/Oig/PVtcXFxcPCFcXFtgKl18XFxiX3wkKXxbXiBdKD89IHsyLH1cXG4pKXwoPz0gezIsfVxcbikpL1xufTtcblxuLy8gbGlzdCBvZiBwdW5jdHVhdGlvbiBtYXJrcyBmcm9tIGNvbW1vbiBtYXJrIHNwZWNcbi8vIHdpdGhvdXQgYCBhbmQgXSB0byB3b3JrYXJvdW5kIFJ1bGUgMTcgKGlubGluZSBjb2RlIGJsb2Nrcy9saW5rcylcbmlubGluZS5fcHVuY3R1YXRpb24gPSAnIVwiIyQlJlxcJygpKissXFxcXC0uLzo7PD0+P0BcXFxcW15fe3x9fic7XG5pbmxpbmUuZW0gPSBlZGl0KGlubGluZS5lbSkucmVwbGFjZSgvcHVuY3R1YXRpb24vZywgaW5saW5lLl9wdW5jdHVhdGlvbikuZ2V0UmVnZXgoKTtcblxuaW5saW5lLl9lc2NhcGVzID0gL1xcXFwoWyFcIiMkJSYnKCkqKyxcXC0uLzo7PD0+P0BcXFtcXF1cXFxcXl9ge3x9fl0pL2c7XG5cbmlubGluZS5fc2NoZW1lID0gL1thLXpBLVpdW2EtekEtWjAtOSsuLV17MSwzMX0vO1xuaW5saW5lLl9lbWFpbCA9IC9bYS16QS1aMC05LiEjJCUmJyorLz0/Xl9ge3x9fi1dKyhAKVthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykrKD8hWy1fXSkvO1xuaW5saW5lLmF1dG9saW5rID0gZWRpdChpbmxpbmUuYXV0b2xpbmspXG4gIC5yZXBsYWNlKCdzY2hlbWUnLCBpbmxpbmUuX3NjaGVtZSlcbiAgLnJlcGxhY2UoJ2VtYWlsJywgaW5saW5lLl9lbWFpbClcbiAgLmdldFJlZ2V4KCk7XG5cbmlubGluZS5fYXR0cmlidXRlID0gL1xccytbYS16QS1aOl9dW1xcdy46LV0qKD86XFxzKj1cXHMqXCJbXlwiXSpcInxcXHMqPVxccyonW14nXSonfFxccyo9XFxzKlteXFxzXCInPTw+YF0rKT8vO1xuXG5pbmxpbmUudGFnID0gZWRpdChpbmxpbmUudGFnKVxuICAucmVwbGFjZSgnY29tbWVudCcsIGJsb2NrLl9jb21tZW50KVxuICAucmVwbGFjZSgnYXR0cmlidXRlJywgaW5saW5lLl9hdHRyaWJ1dGUpXG4gIC5nZXRSZWdleCgpO1xuXG5pbmxpbmUuX2xhYmVsID0gLyg/OlxcW1teXFxbXFxdXSpcXF18XFxcXFtcXFtcXF1dP3xgW15gXSpgfGAoPyFgKXxbXlxcW1xcXVxcXFxgXSkqPy87XG5pbmxpbmUuX2hyZWYgPSAvXFxzKig8KD86XFxcXFs8Pl0/fFteXFxzPD5cXFxcXSkqPnxbXlxcc1xceDAwLVxceDFmXSopLztcbmlubGluZS5fdGl0bGUgPSAvXCIoPzpcXFxcXCI/fFteXCJcXFxcXSkqXCJ8Jyg/OlxcXFwnP3xbXidcXFxcXSkqJ3xcXCgoPzpcXFxcXFwpP3xbXilcXFxcXSkqXFwpLztcblxuaW5saW5lLmxpbmsgPSBlZGl0KGlubGluZS5saW5rKVxuICAucmVwbGFjZSgnbGFiZWwnLCBpbmxpbmUuX2xhYmVsKVxuICAucmVwbGFjZSgnaHJlZicsIGlubGluZS5faHJlZilcbiAgLnJlcGxhY2UoJ3RpdGxlJywgaW5saW5lLl90aXRsZSlcbiAgLmdldFJlZ2V4KCk7XG5cbmlubGluZS5yZWZsaW5rID0gZWRpdChpbmxpbmUucmVmbGluaylcbiAgLnJlcGxhY2UoJ2xhYmVsJywgaW5saW5lLl9sYWJlbClcbiAgLmdldFJlZ2V4KCk7XG5cbi8qKlxuICogTm9ybWFsIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLm5vcm1hbCA9IG1lcmdlKHt9LCBpbmxpbmUpO1xuXG4vKipcbiAqIFBlZGFudGljIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLnBlZGFudGljID0gbWVyZ2Uoe30sIGlubGluZS5ub3JtYWwsIHtcbiAgc3Ryb25nOiAvXl9fKD89XFxTKShbXFxzXFxTXSo/XFxTKV9fKD8hXyl8XlxcKlxcKig/PVxcUykoW1xcc1xcU10qP1xcUylcXCpcXCooPyFcXCopLyxcbiAgZW06IC9eXyg/PVxcUykoW1xcc1xcU10qP1xcUylfKD8hXyl8XlxcKig/PVxcUykoW1xcc1xcU10qP1xcUylcXCooPyFcXCopLyxcbiAgbGluazogZWRpdCgvXiE/XFxbKGxhYmVsKVxcXVxcKCguKj8pXFwpLylcbiAgICAucmVwbGFjZSgnbGFiZWwnLCBpbmxpbmUuX2xhYmVsKVxuICAgIC5nZXRSZWdleCgpLFxuICByZWZsaW5rOiBlZGl0KC9eIT9cXFsobGFiZWwpXFxdXFxzKlxcWyhbXlxcXV0qKVxcXS8pXG4gICAgLnJlcGxhY2UoJ2xhYmVsJywgaW5saW5lLl9sYWJlbClcbiAgICAuZ2V0UmVnZXgoKVxufSk7XG5cbi8qKlxuICogR0ZNIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLmdmbSA9IG1lcmdlKHt9LCBpbmxpbmUubm9ybWFsLCB7XG4gIGVzY2FwZTogZWRpdChpbmxpbmUuZXNjYXBlKS5yZXBsYWNlKCddKScsICd+fF0pJykuZ2V0UmVnZXgoKSxcbiAgX2V4dGVuZGVkX2VtYWlsOiAvW0EtWmEtejAtOS5fKy1dKyhAKVthLXpBLVowLTktX10rKD86XFwuW2EtekEtWjAtOS1fXSpbYS16QS1aMC05XSkrKD8hWy1fXSkvLFxuICB1cmw6IC9eKCg/OmZ0cHxodHRwcz8pOlxcL1xcL3x3d3dcXC4pKD86W2EtekEtWjAtOVxcLV0rXFwuPykrW15cXHM8XSp8XmVtYWlsLyxcbiAgX2JhY2twZWRhbDogLyg/OltePyEuLDo7Kl9+KCkmXSt8XFwoW14pXSpcXCl8Jig/IVthLXpBLVowLTldKzskKXxbPyEuLDo7Kl9+KV0rKD8hJCkpKy8sXG4gIGRlbDogL15+Kyg/PVxcUykoW1xcc1xcU10qP1xcUyl+Ky8sXG4gIHRleHQ6IC9eKGArfFteYF0pKD86W1xcc1xcU10qPyg/Oig/PVtcXFxcPCFcXFtgKn5dfFxcYl98aHR0cHM/OlxcL1xcL3xmdHA6XFwvXFwvfHd3d1xcLnwkKXxbXiBdKD89IHsyLH1cXG4pfFteYS16QS1aMC05LiEjJCUmJyorXFwvPT9fYHtcXHx9fi1dKD89W2EtekEtWjAtOS4hIyQlJicqK1xcLz0/X2B7XFx8fX4tXStAKSl8KD89IHsyLH1cXG58W2EtekEtWjAtOS4hIyQlJicqK1xcLz0/X2B7XFx8fX4tXStAKSkvXG59KTtcblxuaW5saW5lLmdmbS51cmwgPSBlZGl0KGlubGluZS5nZm0udXJsLCAnaScpXG4gIC5yZXBsYWNlKCdlbWFpbCcsIGlubGluZS5nZm0uX2V4dGVuZGVkX2VtYWlsKVxuICAuZ2V0UmVnZXgoKTtcbi8qKlxuICogR0ZNICsgTGluZSBCcmVha3MgSW5saW5lIEdyYW1tYXJcbiAqL1xuXG5pbmxpbmUuYnJlYWtzID0gbWVyZ2Uoe30sIGlubGluZS5nZm0sIHtcbiAgYnI6IGVkaXQoaW5saW5lLmJyKS5yZXBsYWNlKCd7Mix9JywgJyonKS5nZXRSZWdleCgpLFxuICB0ZXh0OiBlZGl0KGlubGluZS5nZm0udGV4dCkucmVwbGFjZSgvXFx7MixcXH0vZywgJyonKS5nZXRSZWdleCgpXG59KTtcblxuLyoqXG4gKiBJbmxpbmUgTGV4ZXIgJiBDb21waWxlclxuICovXG5cbmZ1bmN0aW9uIElubGluZUxleGVyKGxpbmtzLCBvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xuICB0aGlzLmxpbmtzID0gbGlua3M7XG4gIHRoaXMucnVsZXMgPSBpbmxpbmUubm9ybWFsO1xuICB0aGlzLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyIHx8IG5ldyBSZW5kZXJlcigpO1xuICB0aGlzLnJlbmRlcmVyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgaWYgKCF0aGlzLmxpbmtzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUb2tlbnMgYXJyYXkgcmVxdWlyZXMgYSBgbGlua3NgIHByb3BlcnR5LicpO1xuICB9XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5wZWRhbnRpYykge1xuICAgIHRoaXMucnVsZXMgPSBpbmxpbmUucGVkYW50aWM7XG4gIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmdmbSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYnJlYWtzKSB7XG4gICAgICB0aGlzLnJ1bGVzID0gaW5saW5lLmJyZWFrcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcyA9IGlubGluZS5nZm07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXhwb3NlIElubGluZSBSdWxlc1xuICovXG5cbklubGluZUxleGVyLnJ1bGVzID0gaW5saW5lO1xuXG4vKipcbiAqIFN0YXRpYyBMZXhpbmcvQ29tcGlsaW5nIE1ldGhvZFxuICovXG5cbklubGluZUxleGVyLm91dHB1dCA9IGZ1bmN0aW9uKHNyYywgbGlua3MsIG9wdGlvbnMpIHtcbiAgdmFyIGlubGluZSA9IG5ldyBJbmxpbmVMZXhlcihsaW5rcywgb3B0aW9ucyk7XG4gIHJldHVybiBpbmxpbmUub3V0cHV0KHNyYyk7XG59O1xuXG4vKipcbiAqIExleGluZy9Db21waWxpbmdcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUub3V0cHV0ID0gZnVuY3Rpb24oc3JjKSB7XG4gIHZhciBvdXQgPSAnJyxcbiAgICAgIGxpbmssXG4gICAgICB0ZXh0LFxuICAgICAgaHJlZixcbiAgICAgIHRpdGxlLFxuICAgICAgY2FwLFxuICAgICAgcHJldkNhcFplcm87XG5cbiAgd2hpbGUgKHNyYykge1xuICAgIC8vIGVzY2FwZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmVzY2FwZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50YWcuZXhlYyhzcmMpKSB7XG4gICAgICBpZiAoIXRoaXMuaW5MaW5rICYmIC9ePGEgL2kudGVzdChjYXBbMF0pKSB7XG4gICAgICAgIHRoaXMuaW5MaW5rID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbkxpbmsgJiYgL148XFwvYT4vaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pblJhd0Jsb2NrICYmIC9ePChwcmV8Y29kZXxrYmR8c2NyaXB0KShcXHN8PikvaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5pblJhd0Jsb2NrID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pblJhd0Jsb2NrICYmIC9ePFxcLyhwcmV8Y29kZXxrYmR8c2NyaXB0KShcXHN8PikvaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5pblJhd0Jsb2NrID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgID8gdGhpcy5vcHRpb25zLnNhbml0aXplclxuICAgICAgICAgID8gdGhpcy5vcHRpb25zLnNhbml0aXplcihjYXBbMF0pXG4gICAgICAgICAgOiBlc2NhcGUoY2FwWzBdKVxuICAgICAgICA6IGNhcFswXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGxpbmtcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5saW5rLmV4ZWMoc3JjKSkge1xuICAgICAgdmFyIGxhc3RQYXJlbkluZGV4ID0gZmluZENsb3NpbmdCcmFja2V0KGNhcFsyXSwgJygpJyk7XG4gICAgICBpZiAobGFzdFBhcmVuSW5kZXggPiAtMSkge1xuICAgICAgICB2YXIgbGlua0xlbiA9IGNhcFswXS5sZW5ndGggLSAoY2FwWzJdLmxlbmd0aCAtIGxhc3RQYXJlbkluZGV4KSAtIChjYXBbM10gfHwgJycpLmxlbmd0aDtcbiAgICAgICAgY2FwWzJdID0gY2FwWzJdLnN1YnN0cmluZygwLCBsYXN0UGFyZW5JbmRleCk7XG4gICAgICAgIGNhcFswXSA9IGNhcFswXS5zdWJzdHJpbmcoMCwgbGlua0xlbikudHJpbSgpO1xuICAgICAgICBjYXBbM10gPSAnJztcbiAgICAgIH1cbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLmluTGluayA9IHRydWU7XG4gICAgICBocmVmID0gY2FwWzJdO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wZWRhbnRpYykge1xuICAgICAgICBsaW5rID0gL14oW14nXCJdKlteXFxzXSlcXHMrKFsnXCJdKSguKilcXDIvLmV4ZWMoaHJlZik7XG5cbiAgICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgICBocmVmID0gbGlua1sxXTtcbiAgICAgICAgICB0aXRsZSA9IGxpbmtbM107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGl0bGUgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGUgPSBjYXBbM10gPyBjYXBbM10uc2xpY2UoMSwgLTEpIDogJyc7XG4gICAgICB9XG4gICAgICBocmVmID0gaHJlZi50cmltKCkucmVwbGFjZSgvXjwoW1xcc1xcU10qKT4kLywgJyQxJyk7XG4gICAgICBvdXQgKz0gdGhpcy5vdXRwdXRMaW5rKGNhcCwge1xuICAgICAgICBocmVmOiBJbmxpbmVMZXhlci5lc2NhcGVzKGhyZWYpLFxuICAgICAgICB0aXRsZTogSW5saW5lTGV4ZXIuZXNjYXBlcyh0aXRsZSlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHJlZmxpbmssIG5vbGlua1xuICAgIGlmICgoY2FwID0gdGhpcy5ydWxlcy5yZWZsaW5rLmV4ZWMoc3JjKSlcbiAgICAgICAgfHwgKGNhcCA9IHRoaXMucnVsZXMubm9saW5rLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBsaW5rID0gKGNhcFsyXSB8fCBjYXBbMV0pLnJlcGxhY2UoL1xccysvZywgJyAnKTtcbiAgICAgIGxpbmsgPSB0aGlzLmxpbmtzW2xpbmsudG9Mb3dlckNhc2UoKV07XG4gICAgICBpZiAoIWxpbmsgfHwgIWxpbmsuaHJlZikge1xuICAgICAgICBvdXQgKz0gY2FwWzBdLmNoYXJBdCgwKTtcbiAgICAgICAgc3JjID0gY2FwWzBdLnN1YnN0cmluZygxKSArIHNyYztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB0aGlzLmluTGluayA9IHRydWU7XG4gICAgICBvdXQgKz0gdGhpcy5vdXRwdXRMaW5rKGNhcCwgbGluayk7XG4gICAgICB0aGlzLmluTGluayA9IGZhbHNlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gc3Ryb25nXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuc3Ryb25nLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLnN0cm9uZyh0aGlzLm91dHB1dChjYXBbNF0gfHwgY2FwWzNdIHx8IGNhcFsyXSB8fCBjYXBbMV0pKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGVtXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuZW0uZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuZW0odGhpcy5vdXRwdXQoY2FwWzZdIHx8IGNhcFs1XSB8fCBjYXBbNF0gfHwgY2FwWzNdIHx8IGNhcFsyXSB8fCBjYXBbMV0pKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGNvZGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5jb2RlLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmNvZGVzcGFuKGVzY2FwZShjYXBbMl0udHJpbSgpLCB0cnVlKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBiclxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmJyLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmJyKCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBkZWwgKGdmbSlcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5kZWwuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuZGVsKHRoaXMub3V0cHV0KGNhcFsxXSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gYXV0b2xpbmtcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5hdXRvbGluay5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBpZiAoY2FwWzJdID09PSAnQCcpIHtcbiAgICAgICAgdGV4dCA9IGVzY2FwZSh0aGlzLm1hbmdsZShjYXBbMV0pKTtcbiAgICAgICAgaHJlZiA9ICdtYWlsdG86JyArIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ID0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICAgIGhyZWYgPSB0ZXh0O1xuICAgICAgfVxuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIubGluayhocmVmLCBudWxsLCB0ZXh0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHVybCAoZ2ZtKVxuICAgIGlmICghdGhpcy5pbkxpbmsgJiYgKGNhcCA9IHRoaXMucnVsZXMudXJsLmV4ZWMoc3JjKSkpIHtcbiAgICAgIGlmIChjYXBbMl0gPT09ICdAJykge1xuICAgICAgICB0ZXh0ID0gZXNjYXBlKGNhcFswXSk7XG4gICAgICAgIGhyZWYgPSAnbWFpbHRvOicgKyB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG8gZXh0ZW5kZWQgYXV0b2xpbmsgcGF0aCB2YWxpZGF0aW9uXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBwcmV2Q2FwWmVybyA9IGNhcFswXTtcbiAgICAgICAgICBjYXBbMF0gPSB0aGlzLnJ1bGVzLl9iYWNrcGVkYWwuZXhlYyhjYXBbMF0pWzBdO1xuICAgICAgICB9IHdoaWxlIChwcmV2Q2FwWmVybyAhPT0gY2FwWzBdKTtcbiAgICAgICAgdGV4dCA9IGVzY2FwZShjYXBbMF0pO1xuICAgICAgICBpZiAoY2FwWzFdID09PSAnd3d3LicpIHtcbiAgICAgICAgICBocmVmID0gJ2h0dHA6Ly8nICsgdGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBocmVmID0gdGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmxpbmsoaHJlZiwgbnVsbCwgdGV4dCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0ZXh0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMudGV4dC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBpZiAodGhpcy5pblJhd0Jsb2NrKSB7XG4gICAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLnRleHQoY2FwWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLnRleHQoZXNjYXBlKHRoaXMuc21hcnR5cGFudHMoY2FwWzBdKSkpO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0ZSBsb29wIG9uIGJ5dGU6ICcgKyBzcmMuY2hhckNvZGVBdCgwKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbklubGluZUxleGVyLmVzY2FwZXMgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiB0ZXh0ID8gdGV4dC5yZXBsYWNlKElubGluZUxleGVyLnJ1bGVzLl9lc2NhcGVzLCAnJDEnKSA6IHRleHQ7XG59O1xuXG4vKipcbiAqIENvbXBpbGUgTGlua1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5vdXRwdXRMaW5rID0gZnVuY3Rpb24oY2FwLCBsaW5rKSB7XG4gIHZhciBocmVmID0gbGluay5ocmVmLFxuICAgICAgdGl0bGUgPSBsaW5rLnRpdGxlID8gZXNjYXBlKGxpbmsudGl0bGUpIDogbnVsbDtcblxuICByZXR1cm4gY2FwWzBdLmNoYXJBdCgwKSAhPT0gJyEnXG4gICAgPyB0aGlzLnJlbmRlcmVyLmxpbmsoaHJlZiwgdGl0bGUsIHRoaXMub3V0cHV0KGNhcFsxXSkpXG4gICAgOiB0aGlzLnJlbmRlcmVyLmltYWdlKGhyZWYsIHRpdGxlLCBlc2NhcGUoY2FwWzFdKSk7XG59O1xuXG4vKipcbiAqIFNtYXJ0eXBhbnRzIFRyYW5zZm9ybWF0aW9uc1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5zbWFydHlwYW50cyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgaWYgKCF0aGlzLm9wdGlvbnMuc21hcnR5cGFudHMpIHJldHVybiB0ZXh0O1xuICByZXR1cm4gdGV4dFxuICAgIC8vIGVtLWRhc2hlc1xuICAgIC5yZXBsYWNlKC8tLS0vZywgJ1xcdTIwMTQnKVxuICAgIC8vIGVuLWRhc2hlc1xuICAgIC5yZXBsYWNlKC8tLS9nLCAnXFx1MjAxMycpXG4gICAgLy8gb3BlbmluZyBzaW5nbGVzXG4gICAgLnJlcGxhY2UoLyhefFstXFx1MjAxNC8oXFxbe1wiXFxzXSknL2csICckMVxcdTIwMTgnKVxuICAgIC8vIGNsb3Npbmcgc2luZ2xlcyAmIGFwb3N0cm9waGVzXG4gICAgLnJlcGxhY2UoLycvZywgJ1xcdTIwMTknKVxuICAgIC8vIG9wZW5pbmcgZG91Ymxlc1xuICAgIC5yZXBsYWNlKC8oXnxbLVxcdTIwMTQvKFxcW3tcXHUyMDE4XFxzXSlcIi9nLCAnJDFcXHUyMDFjJylcbiAgICAvLyBjbG9zaW5nIGRvdWJsZXNcbiAgICAucmVwbGFjZSgvXCIvZywgJ1xcdTIwMWQnKVxuICAgIC8vIGVsbGlwc2VzXG4gICAgLnJlcGxhY2UoL1xcLnszfS9nLCAnXFx1MjAyNicpO1xufTtcblxuLyoqXG4gKiBNYW5nbGUgTGlua3NcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUubWFuZ2xlID0gZnVuY3Rpb24odGV4dCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5tYW5nbGUpIHJldHVybiB0ZXh0O1xuICB2YXIgb3V0ID0gJycsXG4gICAgICBsID0gdGV4dC5sZW5ndGgsXG4gICAgICBpID0gMCxcbiAgICAgIGNoO1xuXG4gIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgY2ggPSB0ZXh0LmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgIGNoID0gJ3gnICsgY2gudG9TdHJpbmcoMTYpO1xuICAgIH1cbiAgICBvdXQgKz0gJyYjJyArIGNoICsgJzsnO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogUmVuZGVyZXJcbiAqL1xuXG5mdW5jdGlvbiBSZW5kZXJlcihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xufVxuXG5SZW5kZXJlci5wcm90b3R5cGUuY29kZSA9IGZ1bmN0aW9uKGNvZGUsIGluZm9zdHJpbmcsIGVzY2FwZWQpIHtcbiAgdmFyIGxhbmcgPSAoaW5mb3N0cmluZyB8fCAnJykubWF0Y2goL1xcUyovKVswXTtcbiAgaWYgKHRoaXMub3B0aW9ucy5oaWdobGlnaHQpIHtcbiAgICB2YXIgb3V0ID0gdGhpcy5vcHRpb25zLmhpZ2hsaWdodChjb2RlLCBsYW5nKTtcbiAgICBpZiAob3V0ICE9IG51bGwgJiYgb3V0ICE9PSBjb2RlKSB7XG4gICAgICBlc2NhcGVkID0gdHJ1ZTtcbiAgICAgIGNvZGUgPSBvdXQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFsYW5nKSB7XG4gICAgcmV0dXJuICc8cHJlPjxjb2RlPidcbiAgICAgICsgKGVzY2FwZWQgPyBjb2RlIDogZXNjYXBlKGNvZGUsIHRydWUpKVxuICAgICAgKyAnPC9jb2RlPjwvcHJlPic7XG4gIH1cblxuICByZXR1cm4gJzxwcmU+PGNvZGUgY2xhc3M9XCInXG4gICAgKyB0aGlzLm9wdGlvbnMubGFuZ1ByZWZpeFxuICAgICsgZXNjYXBlKGxhbmcsIHRydWUpXG4gICAgKyAnXCI+J1xuICAgICsgKGVzY2FwZWQgPyBjb2RlIDogZXNjYXBlKGNvZGUsIHRydWUpKVxuICAgICsgJzwvY29kZT48L3ByZT5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmJsb2NrcXVvdGUgPSBmdW5jdGlvbihxdW90ZSkge1xuICByZXR1cm4gJzxibG9ja3F1b3RlPlxcbicgKyBxdW90ZSArICc8L2Jsb2NrcXVvdGU+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICByZXR1cm4gaHRtbDtcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5oZWFkaW5nID0gZnVuY3Rpb24odGV4dCwgbGV2ZWwsIHJhdywgc2x1Z2dlcikge1xuICBpZiAodGhpcy5vcHRpb25zLmhlYWRlcklkcykge1xuICAgIHJldHVybiAnPGgnXG4gICAgICArIGxldmVsXG4gICAgICArICcgaWQ9XCInXG4gICAgICArIHRoaXMub3B0aW9ucy5oZWFkZXJQcmVmaXhcbiAgICAgICsgc2x1Z2dlci5zbHVnKHJhdylcbiAgICAgICsgJ1wiPidcbiAgICAgICsgdGV4dFxuICAgICAgKyAnPC9oJ1xuICAgICAgKyBsZXZlbFxuICAgICAgKyAnPlxcbic7XG4gIH1cbiAgLy8gaWdub3JlIElEc1xuICByZXR1cm4gJzxoJyArIGxldmVsICsgJz4nICsgdGV4dCArICc8L2gnICsgbGV2ZWwgKyAnPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaHIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy54aHRtbCA/ICc8aHIvPlxcbicgOiAnPGhyPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uKGJvZHksIG9yZGVyZWQsIHN0YXJ0KSB7XG4gIHZhciB0eXBlID0gb3JkZXJlZCA/ICdvbCcgOiAndWwnLFxuICAgICAgc3RhcnRhdHQgPSAob3JkZXJlZCAmJiBzdGFydCAhPT0gMSkgPyAoJyBzdGFydD1cIicgKyBzdGFydCArICdcIicpIDogJyc7XG4gIHJldHVybiAnPCcgKyB0eXBlICsgc3RhcnRhdHQgKyAnPlxcbicgKyBib2R5ICsgJzwvJyArIHR5cGUgKyAnPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUubGlzdGl0ZW0gPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPGxpPicgKyB0ZXh0ICsgJzwvbGk+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5jaGVja2JveCA9IGZ1bmN0aW9uKGNoZWNrZWQpIHtcbiAgcmV0dXJuICc8aW5wdXQgJ1xuICAgICsgKGNoZWNrZWQgPyAnY2hlY2tlZD1cIlwiICcgOiAnJylcbiAgICArICdkaXNhYmxlZD1cIlwiIHR5cGU9XCJjaGVja2JveFwiJ1xuICAgICsgKHRoaXMub3B0aW9ucy54aHRtbCA/ICcgLycgOiAnJylcbiAgICArICc+ICc7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUucGFyYWdyYXBoID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxwPicgKyB0ZXh0ICsgJzwvcD5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRhYmxlID0gZnVuY3Rpb24oaGVhZGVyLCBib2R5KSB7XG4gIGlmIChib2R5KSBib2R5ID0gJzx0Ym9keT4nICsgYm9keSArICc8L3Rib2R5Pic7XG5cbiAgcmV0dXJuICc8dGFibGU+XFxuJ1xuICAgICsgJzx0aGVhZD5cXG4nXG4gICAgKyBoZWFkZXJcbiAgICArICc8L3RoZWFkPlxcbidcbiAgICArIGJvZHlcbiAgICArICc8L3RhYmxlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudGFibGVyb3cgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gIHJldHVybiAnPHRyPlxcbicgKyBjb250ZW50ICsgJzwvdHI+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS50YWJsZWNlbGwgPSBmdW5jdGlvbihjb250ZW50LCBmbGFncykge1xuICB2YXIgdHlwZSA9IGZsYWdzLmhlYWRlciA/ICd0aCcgOiAndGQnO1xuICB2YXIgdGFnID0gZmxhZ3MuYWxpZ25cbiAgICA/ICc8JyArIHR5cGUgKyAnIGFsaWduPVwiJyArIGZsYWdzLmFsaWduICsgJ1wiPidcbiAgICA6ICc8JyArIHR5cGUgKyAnPic7XG4gIHJldHVybiB0YWcgKyBjb250ZW50ICsgJzwvJyArIHR5cGUgKyAnPlxcbic7XG59O1xuXG4vLyBzcGFuIGxldmVsIHJlbmRlcmVyXG5SZW5kZXJlci5wcm90b3R5cGUuc3Ryb25nID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxzdHJvbmc+JyArIHRleHQgKyAnPC9zdHJvbmc+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5lbSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8ZW0+JyArIHRleHQgKyAnPC9lbT4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmNvZGVzcGFuID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxjb2RlPicgKyB0ZXh0ICsgJzwvY29kZT4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmJyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLm9wdGlvbnMueGh0bWwgPyAnPGJyLz4nIDogJzxicj4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmRlbCA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8ZGVsPicgKyB0ZXh0ICsgJzwvZGVsPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUubGluayA9IGZ1bmN0aW9uKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gIGhyZWYgPSBjbGVhblVybCh0aGlzLm9wdGlvbnMuc2FuaXRpemUsIHRoaXMub3B0aW9ucy5iYXNlVXJsLCBocmVmKTtcbiAgaWYgKGhyZWYgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuICB2YXIgb3V0ID0gJzxhIGhyZWY9XCInICsgZXNjYXBlKGhyZWYpICsgJ1wiJztcbiAgaWYgKHRpdGxlKSB7XG4gICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICB9XG4gIG91dCArPSAnPicgKyB0ZXh0ICsgJzwvYT4nO1xuICByZXR1cm4gb3V0O1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmltYWdlID0gZnVuY3Rpb24oaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgaHJlZiA9IGNsZWFuVXJsKHRoaXMub3B0aW9ucy5zYW5pdGl6ZSwgdGhpcy5vcHRpb25zLmJhc2VVcmwsIGhyZWYpO1xuICBpZiAoaHJlZiA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgdmFyIG91dCA9ICc8aW1nIHNyYz1cIicgKyBocmVmICsgJ1wiIGFsdD1cIicgKyB0ZXh0ICsgJ1wiJztcbiAgaWYgKHRpdGxlKSB7XG4gICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICB9XG4gIG91dCArPSB0aGlzLm9wdGlvbnMueGh0bWwgPyAnLz4nIDogJz4nO1xuICByZXR1cm4gb3V0O1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiB0ZXh0O1xufTtcblxuLyoqXG4gKiBUZXh0UmVuZGVyZXJcbiAqIHJldHVybnMgb25seSB0aGUgdGV4dHVhbCBwYXJ0IG9mIHRoZSB0b2tlblxuICovXG5cbmZ1bmN0aW9uIFRleHRSZW5kZXJlcigpIHt9XG5cbi8vIG5vIG5lZWQgZm9yIGJsb2NrIGxldmVsIHJlbmRlcmVyc1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLnN0cm9uZyA9XG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmVtID1cblRleHRSZW5kZXJlci5wcm90b3R5cGUuY29kZXNwYW4gPVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5kZWwgPVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgcmV0dXJuIHRleHQ7XG59O1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmxpbmsgPVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5pbWFnZSA9IGZ1bmN0aW9uKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gIHJldHVybiAnJyArIHRleHQ7XG59O1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmJyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJztcbn07XG5cbi8qKlxuICogUGFyc2luZyAmIENvbXBpbGluZ1xuICovXG5cbmZ1bmN0aW9uIFBhcnNlcihvcHRpb25zKSB7XG4gIHRoaXMudG9rZW5zID0gW107XG4gIHRoaXMudG9rZW4gPSBudWxsO1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5vcHRpb25zLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyIHx8IG5ldyBSZW5kZXJlcigpO1xuICB0aGlzLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyO1xuICB0aGlzLnJlbmRlcmVyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gIHRoaXMuc2x1Z2dlciA9IG5ldyBTbHVnZ2VyKCk7XG59XG5cbi8qKlxuICogU3RhdGljIFBhcnNlIE1ldGhvZFxuICovXG5cblBhcnNlci5wYXJzZSA9IGZ1bmN0aW9uKHNyYywgb3B0aW9ucykge1xuICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihvcHRpb25zKTtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZShzcmMpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBMb29wXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHNyYykge1xuICB0aGlzLmlubGluZSA9IG5ldyBJbmxpbmVMZXhlcihzcmMubGlua3MsIHRoaXMub3B0aW9ucyk7XG4gIC8vIHVzZSBhbiBJbmxpbmVMZXhlciB3aXRoIGEgVGV4dFJlbmRlcmVyIHRvIGV4dHJhY3QgcHVyZSB0ZXh0XG4gIHRoaXMuaW5saW5lVGV4dCA9IG5ldyBJbmxpbmVMZXhlcihcbiAgICBzcmMubGlua3MsXG4gICAgbWVyZ2Uoe30sIHRoaXMub3B0aW9ucywge3JlbmRlcmVyOiBuZXcgVGV4dFJlbmRlcmVyKCl9KVxuICApO1xuICB0aGlzLnRva2VucyA9IHNyYy5yZXZlcnNlKCk7XG5cbiAgdmFyIG91dCA9ICcnO1xuICB3aGlsZSAodGhpcy5uZXh0KCkpIHtcbiAgICBvdXQgKz0gdGhpcy50b2soKTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIE5leHQgVG9rZW5cbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudG9rZW4gPSB0aGlzLnRva2Vucy5wb3AoKTtcbn07XG5cbi8qKlxuICogUHJldmlldyBOZXh0IFRva2VuXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLnRva2Vucy5sZW5ndGggLSAxXSB8fCAwO1xufTtcblxuLyoqXG4gKiBQYXJzZSBUZXh0IFRva2Vuc1xuICovXG5cblBhcnNlci5wcm90b3R5cGUucGFyc2VUZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBib2R5ID0gdGhpcy50b2tlbi50ZXh0O1xuXG4gIHdoaWxlICh0aGlzLnBlZWsoKS50eXBlID09PSAndGV4dCcpIHtcbiAgICBib2R5ICs9ICdcXG4nICsgdGhpcy5uZXh0KCkudGV4dDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmlubGluZS5vdXRwdXQoYm9keSk7XG59O1xuXG4vKipcbiAqIFBhcnNlIEN1cnJlbnQgVG9rZW5cbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnRvayA9IGZ1bmN0aW9uKCkge1xuICBzd2l0Y2ggKHRoaXMudG9rZW4udHlwZSkge1xuICAgIGNhc2UgJ3NwYWNlJzoge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjYXNlICdocic6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmhyKCk7XG4gICAgfVxuICAgIGNhc2UgJ2hlYWRpbmcnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5oZWFkaW5nKFxuICAgICAgICB0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi50ZXh0KSxcbiAgICAgICAgdGhpcy50b2tlbi5kZXB0aCxcbiAgICAgICAgdW5lc2NhcGUodGhpcy5pbmxpbmVUZXh0Lm91dHB1dCh0aGlzLnRva2VuLnRleHQpKSxcbiAgICAgICAgdGhpcy5zbHVnZ2VyKTtcbiAgICB9XG4gICAgY2FzZSAnY29kZSc6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmNvZGUodGhpcy50b2tlbi50ZXh0LFxuICAgICAgICB0aGlzLnRva2VuLmxhbmcsXG4gICAgICAgIHRoaXMudG9rZW4uZXNjYXBlZCk7XG4gICAgfVxuICAgIGNhc2UgJ3RhYmxlJzoge1xuICAgICAgdmFyIGhlYWRlciA9ICcnLFxuICAgICAgICAgIGJvZHkgPSAnJyxcbiAgICAgICAgICBpLFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBjZWxsLFxuICAgICAgICAgIGo7XG5cbiAgICAgIC8vIGhlYWRlclxuICAgICAgY2VsbCA9ICcnO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudG9rZW4uaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNlbGwgKz0gdGhpcy5yZW5kZXJlci50YWJsZWNlbGwoXG4gICAgICAgICAgdGhpcy5pbmxpbmUub3V0cHV0KHRoaXMudG9rZW4uaGVhZGVyW2ldKSxcbiAgICAgICAgICB7IGhlYWRlcjogdHJ1ZSwgYWxpZ246IHRoaXMudG9rZW4uYWxpZ25baV0gfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaGVhZGVyICs9IHRoaXMucmVuZGVyZXIudGFibGVyb3coY2VsbCk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRva2VuLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdyA9IHRoaXMudG9rZW4uY2VsbHNbaV07XG5cbiAgICAgICAgY2VsbCA9ICcnO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY2VsbCArPSB0aGlzLnJlbmRlcmVyLnRhYmxlY2VsbChcbiAgICAgICAgICAgIHRoaXMuaW5saW5lLm91dHB1dChyb3dbal0pLFxuICAgICAgICAgICAgeyBoZWFkZXI6IGZhbHNlLCBhbGlnbjogdGhpcy50b2tlbi5hbGlnbltqXSB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkgKz0gdGhpcy5yZW5kZXJlci50YWJsZXJvdyhjZWxsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnRhYmxlKGhlYWRlciwgYm9keSk7XG4gICAgfVxuICAgIGNhc2UgJ2Jsb2NrcXVvdGVfc3RhcnQnOiB7XG4gICAgICBib2R5ID0gJyc7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnYmxvY2txdW90ZV9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuYmxvY2txdW90ZShib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnbGlzdF9zdGFydCc6IHtcbiAgICAgIGJvZHkgPSAnJztcbiAgICAgIHZhciBvcmRlcmVkID0gdGhpcy50b2tlbi5vcmRlcmVkLFxuICAgICAgICAgIHN0YXJ0ID0gdGhpcy50b2tlbi5zdGFydDtcblxuICAgICAgd2hpbGUgKHRoaXMubmV4dCgpLnR5cGUgIT09ICdsaXN0X2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0KGJvZHksIG9yZGVyZWQsIHN0YXJ0KTtcbiAgICB9XG4gICAgY2FzZSAnbGlzdF9pdGVtX3N0YXJ0Jzoge1xuICAgICAgYm9keSA9ICcnO1xuICAgICAgdmFyIGxvb3NlID0gdGhpcy50b2tlbi5sb29zZTtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy50b2tlbi5jaGVja2VkO1xuICAgICAgdmFyIHRhc2sgPSB0aGlzLnRva2VuLnRhc2s7XG5cbiAgICAgIGlmICh0aGlzLnRva2VuLnRhc2spIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnJlbmRlcmVyLmNoZWNrYm94KGNoZWNrZWQpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodGhpcy5uZXh0KCkudHlwZSAhPT0gJ2xpc3RfaXRlbV9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gIWxvb3NlICYmIHRoaXMudG9rZW4udHlwZSA9PT0gJ3RleHQnXG4gICAgICAgICAgPyB0aGlzLnBhcnNlVGV4dCgpXG4gICAgICAgICAgOiB0aGlzLnRvaygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdGl0ZW0oYm9keSwgdGFzaywgY2hlY2tlZCk7XG4gICAgfVxuICAgIGNhc2UgJ2h0bWwnOiB7XG4gICAgICAvLyBUT0RPIHBhcnNlIGlubGluZSBjb250ZW50IGlmIHBhcmFtZXRlciBtYXJrZG93bj0xXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5odG1sKHRoaXMudG9rZW4udGV4dCk7XG4gICAgfVxuICAgIGNhc2UgJ3BhcmFncmFwaCc6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBhcmFncmFwaCh0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi50ZXh0KSk7XG4gICAgfVxuICAgIGNhc2UgJ3RleHQnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wYXJhZ3JhcGgodGhpcy5wYXJzZVRleHQoKSk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHZhciBlcnJNc2cgPSAnVG9rZW4gd2l0aCBcIicgKyB0aGlzLnRva2VuLnR5cGUgKyAnXCIgdHlwZSB3YXMgbm90IGZvdW5kLic7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNpbGVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJNc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNsdWdnZXIgZ2VuZXJhdGVzIGhlYWRlciBpZFxuICovXG5cbmZ1bmN0aW9uIFNsdWdnZXIgKCkge1xuICB0aGlzLnNlZW4gPSB7fTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHN0cmluZyB0byB1bmlxdWUgaWRcbiAqL1xuXG5TbHVnZ2VyLnByb3RvdHlwZS5zbHVnID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBzbHVnID0gdmFsdWVcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC50cmltKClcbiAgICAucmVwbGFjZSgvW1xcdTIwMDAtXFx1MjA2RlxcdTJFMDAtXFx1MkU3RlxcXFwnIVwiIyQlJigpKissLi86Ozw9Pj9AW1xcXV5ge3x9fl0vZywgJycpXG4gICAgLnJlcGxhY2UoL1xccy9nLCAnLScpO1xuXG4gIGlmICh0aGlzLnNlZW4uaGFzT3duUHJvcGVydHkoc2x1ZykpIHtcbiAgICB2YXIgb3JpZ2luYWxTbHVnID0gc2x1ZztcbiAgICBkbyB7XG4gICAgICB0aGlzLnNlZW5bb3JpZ2luYWxTbHVnXSsrO1xuICAgICAgc2x1ZyA9IG9yaWdpbmFsU2x1ZyArICctJyArIHRoaXMuc2VlbltvcmlnaW5hbFNsdWddO1xuICAgIH0gd2hpbGUgKHRoaXMuc2Vlbi5oYXNPd25Qcm9wZXJ0eShzbHVnKSk7XG4gIH1cbiAgdGhpcy5zZWVuW3NsdWddID0gMDtcblxuICByZXR1cm4gc2x1Zztcbn07XG5cbi8qKlxuICogSGVscGVyc1xuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShodG1sLCBlbmNvZGUpIHtcbiAgaWYgKGVuY29kZSkge1xuICAgIGlmIChlc2NhcGUuZXNjYXBlVGVzdC50ZXN0KGh0bWwpKSB7XG4gICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKGVzY2FwZS5lc2NhcGVSZXBsYWNlLCBmdW5jdGlvbiAoY2gpIHsgcmV0dXJuIGVzY2FwZS5yZXBsYWNlbWVudHNbY2hdOyB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVzY2FwZS5lc2NhcGVUZXN0Tm9FbmNvZGUudGVzdChodG1sKSkge1xuICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZShlc2NhcGUuZXNjYXBlUmVwbGFjZU5vRW5jb2RlLCBmdW5jdGlvbiAoY2gpIHsgcmV0dXJuIGVzY2FwZS5yZXBsYWNlbWVudHNbY2hdOyB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaHRtbDtcbn1cblxuZXNjYXBlLmVzY2FwZVRlc3QgPSAvWyY8PlwiJ10vO1xuZXNjYXBlLmVzY2FwZVJlcGxhY2UgPSAvWyY8PlwiJ10vZztcbmVzY2FwZS5yZXBsYWNlbWVudHMgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmIzM5Oydcbn07XG5cbmVzY2FwZS5lc2NhcGVUZXN0Tm9FbmNvZGUgPSAvWzw+XCInXXwmKD8hIz9cXHcrOykvO1xuZXNjYXBlLmVzY2FwZVJlcGxhY2VOb0VuY29kZSA9IC9bPD5cIiddfCYoPyEjP1xcdys7KS9nO1xuXG5mdW5jdGlvbiB1bmVzY2FwZShodG1sKSB7XG4gIC8vIGV4cGxpY2l0bHkgbWF0Y2ggZGVjaW1hbCwgaGV4LCBhbmQgbmFtZWQgSFRNTCBlbnRpdGllc1xuICByZXR1cm4gaHRtbC5yZXBsYWNlKC8mKCMoPzpcXGQrKXwoPzojeFswLTlBLUZhLWZdKyl8KD86XFx3KykpOz8vaWcsIGZ1bmN0aW9uKF8sIG4pIHtcbiAgICBuID0gbi50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChuID09PSAnY29sb24nKSByZXR1cm4gJzonO1xuICAgIGlmIChuLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICByZXR1cm4gbi5jaGFyQXQoMSkgPT09ICd4J1xuICAgICAgICA/IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQobi5zdWJzdHJpbmcoMiksIDE2KSlcbiAgICAgICAgOiBTdHJpbmcuZnJvbUNoYXJDb2RlKCtuLnN1YnN0cmluZygxKSk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXQocmVnZXgsIG9wdCkge1xuICByZWdleCA9IHJlZ2V4LnNvdXJjZSB8fCByZWdleDtcbiAgb3B0ID0gb3B0IHx8ICcnO1xuICByZXR1cm4ge1xuICAgIHJlcGxhY2U6IGZ1bmN0aW9uKG5hbWUsIHZhbCkge1xuICAgICAgdmFsID0gdmFsLnNvdXJjZSB8fCB2YWw7XG4gICAgICB2YWwgPSB2YWwucmVwbGFjZSgvKF58W15cXFtdKVxcXi9nLCAnJDEnKTtcbiAgICAgIHJlZ2V4ID0gcmVnZXgucmVwbGFjZShuYW1lLCB2YWwpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRSZWdleDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleCwgb3B0KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsZWFuVXJsKHNhbml0aXplLCBiYXNlLCBocmVmKSB7XG4gIGlmIChzYW5pdGl6ZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcHJvdCA9IGRlY29kZVVSSUNvbXBvbmVudCh1bmVzY2FwZShocmVmKSlcbiAgICAgICAgLnJlcGxhY2UoL1teXFx3Ol0vZywgJycpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAocHJvdC5pbmRleE9mKCdqYXZhc2NyaXB0OicpID09PSAwIHx8IHByb3QuaW5kZXhPZigndmJzY3JpcHQ6JykgPT09IDAgfHwgcHJvdC5pbmRleE9mKCdkYXRhOicpID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgaWYgKGJhc2UgJiYgIW9yaWdpbkluZGVwZW5kZW50VXJsLnRlc3QoaHJlZikpIHtcbiAgICBocmVmID0gcmVzb2x2ZVVybChiYXNlLCBocmVmKTtcbiAgfVxuICB0cnkge1xuICAgIGhyZWYgPSBlbmNvZGVVUkkoaHJlZikucmVwbGFjZSgvJTI1L2csICclJyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gaHJlZjtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVVybChiYXNlLCBocmVmKSB7XG4gIGlmICghYmFzZVVybHNbJyAnICsgYmFzZV0pIHtcbiAgICAvLyB3ZSBjYW4gaWdub3JlIGV2ZXJ5dGhpbmcgaW4gYmFzZSBhZnRlciB0aGUgbGFzdCBzbGFzaCBvZiBpdHMgcGF0aCBjb21wb25lbnQsXG4gICAgLy8gYnV0IHdlIG1pZ2h0IG5lZWQgdG8gYWRkIF90aGF0X1xuICAgIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tM1xuICAgIGlmICgvXlteOl0rOlxcLypbXi9dKiQvLnRlc3QoYmFzZSkpIHtcbiAgICAgIGJhc2VVcmxzWycgJyArIGJhc2VdID0gYmFzZSArICcvJztcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZVVybHNbJyAnICsgYmFzZV0gPSBydHJpbShiYXNlLCAnLycsIHRydWUpO1xuICAgIH1cbiAgfVxuICBiYXNlID0gYmFzZVVybHNbJyAnICsgYmFzZV07XG5cbiAgaWYgKGhyZWYuc2xpY2UoMCwgMikgPT09ICcvLycpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC86W1xcc1xcU10qLywgJzonKSArIGhyZWY7XG4gIH0gZWxzZSBpZiAoaHJlZi5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoLyg6XFwvKlteL10qKVtcXHNcXFNdKi8sICckMScpICsgaHJlZjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZSArIGhyZWY7XG4gIH1cbn1cbnZhciBiYXNlVXJscyA9IHt9O1xudmFyIG9yaWdpbkluZGVwZW5kZW50VXJsID0gL14kfF5bYS16XVthLXowLTkrLi1dKjp8Xls/I10vaTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5ub29wLmV4ZWMgPSBub29wO1xuXG5mdW5jdGlvbiBtZXJnZShvYmopIHtcbiAgdmFyIGkgPSAxLFxuICAgICAgdGFyZ2V0LFxuICAgICAga2V5O1xuXG4gIGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGFyZ2V0ID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAoa2V5IGluIHRhcmdldCkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSB0YXJnZXRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBzcGxpdENlbGxzKHRhYmxlUm93LCBjb3VudCkge1xuICAvLyBlbnN1cmUgdGhhdCBldmVyeSBjZWxsLWRlbGltaXRpbmcgcGlwZSBoYXMgYSBzcGFjZVxuICAvLyBiZWZvcmUgaXQgdG8gZGlzdGluZ3Vpc2ggaXQgZnJvbSBhbiBlc2NhcGVkIHBpcGVcbiAgdmFyIHJvdyA9IHRhYmxlUm93LnJlcGxhY2UoL1xcfC9nLCBmdW5jdGlvbiAobWF0Y2gsIG9mZnNldCwgc3RyKSB7XG4gICAgICAgIHZhciBlc2NhcGVkID0gZmFsc2UsXG4gICAgICAgICAgICBjdXJyID0gb2Zmc2V0O1xuICAgICAgICB3aGlsZSAoLS1jdXJyID49IDAgJiYgc3RyW2N1cnJdID09PSAnXFxcXCcpIGVzY2FwZWQgPSAhZXNjYXBlZDtcbiAgICAgICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgICAgICAvLyBvZGQgbnVtYmVyIG9mIHNsYXNoZXMgbWVhbnMgfCBpcyBlc2NhcGVkXG4gICAgICAgICAgLy8gc28gd2UgbGVhdmUgaXQgYWxvbmVcbiAgICAgICAgICByZXR1cm4gJ3wnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFkZCBzcGFjZSBiZWZvcmUgdW5lc2NhcGVkIHxcbiAgICAgICAgICByZXR1cm4gJyB8JztcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBjZWxscyA9IHJvdy5zcGxpdCgvIFxcfC8pLFxuICAgICAgaSA9IDA7XG5cbiAgaWYgKGNlbGxzLmxlbmd0aCA+IGNvdW50KSB7XG4gICAgY2VsbHMuc3BsaWNlKGNvdW50KTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoY2VsbHMubGVuZ3RoIDwgY291bnQpIGNlbGxzLnB1c2goJycpO1xuICB9XG5cbiAgZm9yICg7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgIC8vIGxlYWRpbmcgb3IgdHJhaWxpbmcgd2hpdGVzcGFjZSBpcyBpZ25vcmVkIHBlciB0aGUgZ2ZtIHNwZWNcbiAgICBjZWxsc1tpXSA9IGNlbGxzW2ldLnRyaW0oKS5yZXBsYWNlKC9cXFxcXFx8L2csICd8Jyk7XG4gIH1cbiAgcmV0dXJuIGNlbGxzO1xufVxuXG4vLyBSZW1vdmUgdHJhaWxpbmcgJ2Mncy4gRXF1aXZhbGVudCB0byBzdHIucmVwbGFjZSgvYyokLywgJycpLlxuLy8gL2MqJC8gaXMgdnVsbmVyYWJsZSB0byBSRURPUy5cbi8vIGludmVydDogUmVtb3ZlIHN1ZmZpeCBvZiBub24tYyBjaGFycyBpbnN0ZWFkLiBEZWZhdWx0IGZhbHNleS5cbmZ1bmN0aW9uIHJ0cmltKHN0ciwgYywgaW52ZXJ0KSB7XG4gIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gTGVuZ3RoIG9mIHN1ZmZpeCBtYXRjaGluZyB0aGUgaW52ZXJ0IGNvbmRpdGlvbi5cbiAgdmFyIHN1ZmZMZW4gPSAwO1xuXG4gIC8vIFN0ZXAgbGVmdCB1bnRpbCB3ZSBmYWlsIHRvIG1hdGNoIHRoZSBpbnZlcnQgY29uZGl0aW9uLlxuICB3aGlsZSAoc3VmZkxlbiA8IHN0ci5sZW5ndGgpIHtcbiAgICB2YXIgY3VyckNoYXIgPSBzdHIuY2hhckF0KHN0ci5sZW5ndGggLSBzdWZmTGVuIC0gMSk7XG4gICAgaWYgKGN1cnJDaGFyID09PSBjICYmICFpbnZlcnQpIHtcbiAgICAgIHN1ZmZMZW4rKztcbiAgICB9IGVsc2UgaWYgKGN1cnJDaGFyICE9PSBjICYmIGludmVydCkge1xuICAgICAgc3VmZkxlbisrO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gc3VmZkxlbik7XG59XG5cbmZ1bmN0aW9uIGZpbmRDbG9zaW5nQnJhY2tldChzdHIsIGIpIHtcbiAgaWYgKHN0ci5pbmRleE9mKGJbMV0pID09PSAtMSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgbGV2ZWwgPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJykge1xuICAgICAgaSsrO1xuICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSBiWzBdKSB7XG4gICAgICBsZXZlbCsrO1xuICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSBiWzFdKSB7XG4gICAgICBsZXZlbC0tO1xuICAgICAgaWYgKGxldmVsIDwgMCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIE1hcmtlZFxuICovXG5cbmZ1bmN0aW9uIG1hcmtlZChzcmMsIG9wdCwgY2FsbGJhY2spIHtcbiAgLy8gdGhyb3cgZXJyb3IgaW4gY2FzZSBvZiBub24gc3RyaW5nIGlucHV0XG4gIGlmICh0eXBlb2Ygc3JjID09PSAndW5kZWZpbmVkJyB8fCBzcmMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21hcmtlZCgpOiBpbnB1dCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkIG9yIG51bGwnKTtcbiAgfVxuICBpZiAodHlwZW9mIHNyYyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21hcmtlZCgpOiBpbnB1dCBwYXJhbWV0ZXIgaXMgb2YgdHlwZSAnXG4gICAgICArIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzcmMpICsgJywgc3RyaW5nIGV4cGVjdGVkJyk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2sgfHwgdHlwZW9mIG9wdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0O1xuICAgICAgb3B0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBvcHQgPSBtZXJnZSh7fSwgbWFya2VkLmRlZmF1bHRzLCBvcHQgfHwge30pO1xuXG4gICAgdmFyIGhpZ2hsaWdodCA9IG9wdC5oaWdobGlnaHQsXG4gICAgICAgIHRva2VucyxcbiAgICAgICAgcGVuZGluZyxcbiAgICAgICAgaSA9IDA7XG5cbiAgICB0cnkge1xuICAgICAgdG9rZW5zID0gTGV4ZXIubGV4KHNyYywgb3B0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZSk7XG4gICAgfVxuXG4gICAgcGVuZGluZyA9IHRva2Vucy5sZW5ndGg7XG5cbiAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBvcHQuaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0O1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG91dDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgb3V0ID0gUGFyc2VyLnBhcnNlKHRva2Vucywgb3B0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyID0gZTtcbiAgICAgIH1cblxuICAgICAgb3B0LmhpZ2hsaWdodCA9IGhpZ2hsaWdodDtcblxuICAgICAgcmV0dXJuIGVyclxuICAgICAgICA/IGNhbGxiYWNrKGVycilcbiAgICAgICAgOiBjYWxsYmFjayhudWxsLCBvdXQpO1xuICAgIH07XG5cbiAgICBpZiAoIWhpZ2hsaWdodCB8fCBoaWdobGlnaHQubGVuZ3RoIDwgMykge1xuICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICB9XG5cbiAgICBkZWxldGUgb3B0LmhpZ2hsaWdodDtcblxuICAgIGlmICghcGVuZGluZykgcmV0dXJuIGRvbmUoKTtcblxuICAgIGZvciAoOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuLnR5cGUgIT09ICdjb2RlJykge1xuICAgICAgICAgIHJldHVybiAtLXBlbmRpbmcgfHwgZG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaWdobGlnaHQodG9rZW4udGV4dCwgdG9rZW4ubGFuZywgZnVuY3Rpb24oZXJyLCBjb2RlKSB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgICAgICBpZiAoY29kZSA9PSBudWxsIHx8IGNvZGUgPT09IHRva2VuLnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiAtLXBlbmRpbmcgfHwgZG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0b2tlbi50ZXh0ID0gY29kZTtcbiAgICAgICAgICB0b2tlbi5lc2NhcGVkID0gdHJ1ZTtcbiAgICAgICAgICAtLXBlbmRpbmcgfHwgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKHRva2Vuc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdCkgb3B0ID0gbWVyZ2Uoe30sIG1hcmtlZC5kZWZhdWx0cywgb3B0KTtcbiAgICByZXR1cm4gUGFyc2VyLnBhcnNlKExleGVyLmxleChzcmMsIG9wdCksIG9wdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlLm1lc3NhZ2UgKz0gJ1xcblBsZWFzZSByZXBvcnQgdGhpcyB0byBodHRwczovL2dpdGh1Yi5jb20vbWFya2VkanMvbWFya2VkLic7XG4gICAgaWYgKChvcHQgfHwgbWFya2VkLmRlZmF1bHRzKS5zaWxlbnQpIHtcbiAgICAgIHJldHVybiAnPHA+QW4gZXJyb3Igb2NjdXJyZWQ6PC9wPjxwcmU+J1xuICAgICAgICArIGVzY2FwZShlLm1lc3NhZ2UgKyAnJywgdHJ1ZSlcbiAgICAgICAgKyAnPC9wcmU+JztcbiAgICB9XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG4vKipcbiAqIE9wdGlvbnNcbiAqL1xuXG5tYXJrZWQub3B0aW9ucyA9XG5tYXJrZWQuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdCkge1xuICBtZXJnZShtYXJrZWQuZGVmYXVsdHMsIG9wdCk7XG4gIHJldHVybiBtYXJrZWQ7XG59O1xuXG5tYXJrZWQuZ2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgYmFzZVVybDogbnVsbCxcbiAgICBicmVha3M6IGZhbHNlLFxuICAgIGdmbTogdHJ1ZSxcbiAgICBoZWFkZXJJZHM6IHRydWUsXG4gICAgaGVhZGVyUHJlZml4OiAnJyxcbiAgICBoaWdobGlnaHQ6IG51bGwsXG4gICAgbGFuZ1ByZWZpeDogJ2xhbmd1YWdlLScsXG4gICAgbWFuZ2xlOiB0cnVlLFxuICAgIHBlZGFudGljOiBmYWxzZSxcbiAgICByZW5kZXJlcjogbmV3IFJlbmRlcmVyKCksXG4gICAgc2FuaXRpemU6IGZhbHNlLFxuICAgIHNhbml0aXplcjogbnVsbCxcbiAgICBzaWxlbnQ6IGZhbHNlLFxuICAgIHNtYXJ0TGlzdHM6IGZhbHNlLFxuICAgIHNtYXJ0eXBhbnRzOiBmYWxzZSxcbiAgICB0YWJsZXM6IHRydWUsXG4gICAgeGh0bWw6IGZhbHNlXG4gIH07XG59O1xuXG5tYXJrZWQuZGVmYXVsdHMgPSBtYXJrZWQuZ2V0RGVmYXVsdHMoKTtcblxuLyoqXG4gKiBFeHBvc2VcbiAqL1xuXG5tYXJrZWQuUGFyc2VyID0gUGFyc2VyO1xubWFya2VkLnBhcnNlciA9IFBhcnNlci5wYXJzZTtcblxubWFya2VkLlJlbmRlcmVyID0gUmVuZGVyZXI7XG5tYXJrZWQuVGV4dFJlbmRlcmVyID0gVGV4dFJlbmRlcmVyO1xuXG5tYXJrZWQuTGV4ZXIgPSBMZXhlcjtcbm1hcmtlZC5sZXhlciA9IExleGVyLmxleDtcblxubWFya2VkLklubGluZUxleGVyID0gSW5saW5lTGV4ZXI7XG5tYXJrZWQuaW5saW5lTGV4ZXIgPSBJbmxpbmVMZXhlci5vdXRwdXQ7XG5cbm1hcmtlZC5TbHVnZ2VyID0gU2x1Z2dlcjtcblxubWFya2VkLnBhcnNlID0gbWFya2VkO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gbWFya2VkO1xufSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gbWFya2VkOyB9KTtcbn0gZWxzZSB7XG4gIHJvb3QubWFya2VkID0gbWFya2VkO1xufVxufSkodGhpcyB8fCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgbWFya2VkIGZyb20gXCJtYXJrZWRcIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBmaWx0ZXJYU1MgZnJvbSBcInhzc1wiO1xudmFyIHdoaXRlTGlzdE5vcm1hbDtcbnZhciB3aGl0ZUxpc3RTdmc7XG5leHBvcnQgdmFyIHJlbmRlck1hcmtkb3duID0gZnVuY3Rpb24gKGNvbnRlbnQsIG1hcmtlZE9wdGlvbnMsIGhhc3NPcHRpb25zKSB7XG4gICAgaWYgKGhhc3NPcHRpb25zID09PSB2b2lkIDApIHsgaGFzc09wdGlvbnMgPSB7fTsgfVxuICAgIGlmICghd2hpdGVMaXN0Tm9ybWFsKSB7XG4gICAgICAgIHdoaXRlTGlzdE5vcm1hbCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBmaWx0ZXJYU1Mud2hpdGVMaXN0KSwgeyBcImhhLWljb25cIjogW1wiaWNvblwiXSB9KTtcbiAgICB9XG4gICAgdmFyIHdoaXRlTGlzdDtcbiAgICBpZiAoaGFzc09wdGlvbnMuYWxsb3dTdmcpIHtcbiAgICAgICAgaWYgKCF3aGl0ZUxpc3RTdmcpIHtcbiAgICAgICAgICAgIHdoaXRlTGlzdFN2ZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB3aGl0ZUxpc3ROb3JtYWwpLCB7IHN2ZzogW1wieG1sbnNcIiwgXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXSwgcGF0aDogW1widHJhbnNmb3JtXCIsIFwic3Ryb2tlXCIsIFwiZFwiXSB9KTtcbiAgICAgICAgfVxuICAgICAgICB3aGl0ZUxpc3QgPSB3aGl0ZUxpc3RTdmc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3aGl0ZUxpc3QgPSB3aGl0ZUxpc3ROb3JtYWw7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJYU1MobWFya2VkKGNvbnRlbnQsIG1hcmtlZE9wdGlvbnMpLCB7XG4gICAgICAgIHdoaXRlTGlzdDogd2hpdGVMaXN0LFxuICAgIH0pO1xufTtcblxuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7dmFyIHJlZiA9IGUuZGF0YTt2YXIgdHlwZSA9IHJlZi50eXBlO3ZhciBtZXRob2QgPSByZWYubWV0aG9kO3ZhciBpZCA9IHJlZi5pZDt2YXIgcGFyYW1zID0gcmVmLnBhcmFtczt2YXIgZixwO2lmICh0eXBlID09PSAnUlBDJyAmJiBtZXRob2QpIHtpZiAoZiA9IF9fd2VicGFja19leHBvcnRzX19bbWV0aG9kXSkge3AgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGYuYXBwbHkoX193ZWJwYWNrX2V4cG9ydHNfXywgcGFyYW1zKTsgfSk7fSBlbHNlIHtwID0gUHJvbWlzZS5yZWplY3QoJ05vIHN1Y2ggbWV0aG9kJyk7fXAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7cG9zdE1lc3NhZ2Uoe3R5cGU6ICdSUEMnLGlkOiBpZCxyZXN1bHQ6IHJlc3VsdH0pO30pLmNhdGNoKGZ1bmN0aW9uIChlKSB7dmFyIGVycm9yID0ge21lc3NhZ2U6IGV9O2lmIChlLnN0YWNrKSB7ZXJyb3IubWVzc2FnZSA9IGUubWVzc2FnZTtlcnJvci5zdGFjayA9IGUuc3RhY2s7ZXJyb3IubmFtZSA9IGUubmFtZTt9cG9zdE1lc3NhZ2Uoe3R5cGU6ICdSUEMnLGlkOiBpZCxlcnJvcjogZXJyb3J9KTt9KTt9fSk7cG9zdE1lc3NhZ2Uoe3R5cGU6ICdSUEMnLG1ldGhvZDogJ3JlYWR5J30pOyIsIi8qKlxuICogZGVmYXVsdCBzZXR0aW5nc1xuICpcbiAqIEBhdXRob3IgWm9uZ21pbiBMZWk8bGVpem9uZ21pbkBnbWFpbC5jb20+XG4gKi9cblxudmFyIEZpbHRlckNTUyA9IHJlcXVpcmUoXCJjc3NmaWx0ZXJcIikuRmlsdGVyQ1NTO1xudmFyIGdldERlZmF1bHRDU1NXaGl0ZUxpc3QgPSByZXF1aXJlKFwiY3NzZmlsdGVyXCIpLmdldERlZmF1bHRXaGl0ZUxpc3Q7XG52YXIgXyA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRXaGl0ZUxpc3QoKSB7XG4gIHJldHVybiB7XG4gICAgYTogW1widGFyZ2V0XCIsIFwiaHJlZlwiLCBcInRpdGxlXCJdLFxuICAgIGFiYnI6IFtcInRpdGxlXCJdLFxuICAgIGFkZHJlc3M6IFtdLFxuICAgIGFyZWE6IFtcInNoYXBlXCIsIFwiY29vcmRzXCIsIFwiaHJlZlwiLCBcImFsdFwiXSxcbiAgICBhcnRpY2xlOiBbXSxcbiAgICBhc2lkZTogW10sXG4gICAgYXVkaW86IFtcImF1dG9wbGF5XCIsIFwiY29udHJvbHNcIiwgXCJsb29wXCIsIFwicHJlbG9hZFwiLCBcInNyY1wiXSxcbiAgICBiOiBbXSxcbiAgICBiZGk6IFtcImRpclwiXSxcbiAgICBiZG86IFtcImRpclwiXSxcbiAgICBiaWc6IFtdLFxuICAgIGJsb2NrcXVvdGU6IFtcImNpdGVcIl0sXG4gICAgYnI6IFtdLFxuICAgIGNhcHRpb246IFtdLFxuICAgIGNlbnRlcjogW10sXG4gICAgY2l0ZTogW10sXG4gICAgY29kZTogW10sXG4gICAgY29sOiBbXCJhbGlnblwiLCBcInZhbGlnblwiLCBcInNwYW5cIiwgXCJ3aWR0aFwiXSxcbiAgICBjb2xncm91cDogW1wiYWxpZ25cIiwgXCJ2YWxpZ25cIiwgXCJzcGFuXCIsIFwid2lkdGhcIl0sXG4gICAgZGQ6IFtdLFxuICAgIGRlbDogW1wiZGF0ZXRpbWVcIl0sXG4gICAgZGV0YWlsczogW1wib3BlblwiXSxcbiAgICBkaXY6IFtdLFxuICAgIGRsOiBbXSxcbiAgICBkdDogW10sXG4gICAgZW06IFtdLFxuICAgIGZvbnQ6IFtcImNvbG9yXCIsIFwic2l6ZVwiLCBcImZhY2VcIl0sXG4gICAgZm9vdGVyOiBbXSxcbiAgICBoMTogW10sXG4gICAgaDI6IFtdLFxuICAgIGgzOiBbXSxcbiAgICBoNDogW10sXG4gICAgaDU6IFtdLFxuICAgIGg2OiBbXSxcbiAgICBoZWFkZXI6IFtdLFxuICAgIGhyOiBbXSxcbiAgICBpOiBbXSxcbiAgICBpbWc6IFtcInNyY1wiLCBcImFsdFwiLCBcInRpdGxlXCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIl0sXG4gICAgaW5zOiBbXCJkYXRldGltZVwiXSxcbiAgICBsaTogW10sXG4gICAgbWFyazogW10sXG4gICAgbmF2OiBbXSxcbiAgICBvbDogW10sXG4gICAgcDogW10sXG4gICAgcHJlOiBbXSxcbiAgICBzOiBbXSxcbiAgICBzZWN0aW9uOiBbXSxcbiAgICBzbWFsbDogW10sXG4gICAgc3BhbjogW10sXG4gICAgc3ViOiBbXSxcbiAgICBzdXA6IFtdLFxuICAgIHN0cm9uZzogW10sXG4gICAgdGFibGU6IFtcIndpZHRoXCIsIFwiYm9yZGVyXCIsIFwiYWxpZ25cIiwgXCJ2YWxpZ25cIl0sXG4gICAgdGJvZHk6IFtcImFsaWduXCIsIFwidmFsaWduXCJdLFxuICAgIHRkOiBbXCJ3aWR0aFwiLCBcInJvd3NwYW5cIiwgXCJjb2xzcGFuXCIsIFwiYWxpZ25cIiwgXCJ2YWxpZ25cIl0sXG4gICAgdGZvb3Q6IFtcImFsaWduXCIsIFwidmFsaWduXCJdLFxuICAgIHRoOiBbXCJ3aWR0aFwiLCBcInJvd3NwYW5cIiwgXCJjb2xzcGFuXCIsIFwiYWxpZ25cIiwgXCJ2YWxpZ25cIl0sXG4gICAgdGhlYWQ6IFtcImFsaWduXCIsIFwidmFsaWduXCJdLFxuICAgIHRyOiBbXCJyb3dzcGFuXCIsIFwiYWxpZ25cIiwgXCJ2YWxpZ25cIl0sXG4gICAgdHQ6IFtdLFxuICAgIHU6IFtdLFxuICAgIHVsOiBbXSxcbiAgICB2aWRlbzogW1wiYXV0b3BsYXlcIiwgXCJjb250cm9sc1wiLCBcImxvb3BcIiwgXCJwcmVsb2FkXCIsIFwic3JjXCIsIFwiaGVpZ2h0XCIsIFwid2lkdGhcIl1cbiAgfTtcbn1cblxudmFyIGRlZmF1bHRDU1NGaWx0ZXIgPSBuZXcgRmlsdGVyQ1NTKCk7XG5cbi8qKlxuICogZGVmYXVsdCBvblRhZyBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBvblRhZyh0YWcsIGh0bWwsIG9wdGlvbnMpIHtcbiAgLy8gZG8gbm90aGluZ1xufVxuXG4vKipcbiAqIGRlZmF1bHQgb25JZ25vcmVUYWcgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb25JZ25vcmVUYWcodGFnLCBodG1sLCBvcHRpb25zKSB7XG4gIC8vIGRvIG5vdGhpbmdcbn1cblxuLyoqXG4gKiBkZWZhdWx0IG9uVGFnQXR0ciBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb25UYWdBdHRyKHRhZywgbmFtZSwgdmFsdWUpIHtcbiAgLy8gZG8gbm90aGluZ1xufVxuXG4vKipcbiAqIGRlZmF1bHQgb25JZ25vcmVUYWdBdHRyIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBvbklnbm9yZVRhZ0F0dHIodGFnLCBuYW1lLCB2YWx1ZSkge1xuICAvLyBkbyBub3RoaW5nXG59XG5cbi8qKlxuICogZGVmYXVsdCBlc2NhcGVIdG1sIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqL1xuZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sKSB7XG4gIHJldHVybiBodG1sLnJlcGxhY2UoUkVHRVhQX0xULCBcIiZsdDtcIikucmVwbGFjZShSRUdFWFBfR1QsIFwiJmd0O1wiKTtcbn1cblxuLyoqXG4gKiBkZWZhdWx0IHNhZmVBdHRyVmFsdWUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gY3NzRmlsdGVyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNhZmVBdHRyVmFsdWUodGFnLCBuYW1lLCB2YWx1ZSwgY3NzRmlsdGVyKSB7XG4gIC8vIHVuZXNjYXBlIGF0dHJpYnV0ZSB2YWx1ZSBmaXJzdGx5XG4gIHZhbHVlID0gZnJpZW5kbHlBdHRyVmFsdWUodmFsdWUpO1xuXG4gIGlmIChuYW1lID09PSBcImhyZWZcIiB8fCBuYW1lID09PSBcInNyY1wiKSB7XG4gICAgLy8gZmlsdGVyIGBocmVmYCBhbmQgYHNyY2AgYXR0cmlidXRlXG4gICAgLy8gb25seSBhbGxvdyB0aGUgdmFsdWUgdGhhdCBzdGFydHMgd2l0aCBgaHR0cDovL2AgfCBgaHR0cHM6Ly9gIHwgYG1haWx0bzpgIHwgYC9gIHwgYCNgXG4gICAgdmFsdWUgPSBfLnRyaW0odmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PT0gXCIjXCIpIHJldHVybiBcIiNcIjtcbiAgICBpZiAoXG4gICAgICAhKFxuICAgICAgICB2YWx1ZS5zdWJzdHIoMCwgNykgPT09IFwiaHR0cDovL1wiIHx8XG4gICAgICAgIHZhbHVlLnN1YnN0cigwLCA4KSA9PT0gXCJodHRwczovL1wiIHx8XG4gICAgICAgIHZhbHVlLnN1YnN0cigwLCA3KSA9PT0gXCJtYWlsdG86XCIgfHxcbiAgICAgICAgdmFsdWUuc3Vic3RyKDAsIDQpID09PSBcInRlbDpcIiB8fFxuICAgICAgICB2YWx1ZVswXSA9PT0gXCIjXCIgfHxcbiAgICAgICAgdmFsdWVbMF0gPT09IFwiL1wiXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJiYWNrZ3JvdW5kXCIpIHtcbiAgICAvLyBmaWx0ZXIgYGJhY2tncm91bmRgIGF0dHJpYnV0ZSAobWF5YmUgbm8gdXNlKVxuICAgIC8vIGBqYXZhc2NyaXB0OmBcbiAgICBSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl80Lmxhc3RJbmRleCA9IDA7XG4gICAgaWYgKFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzQudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChuYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAvLyBgZXhwcmVzc2lvbigpYFxuICAgIFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzcubGFzdEluZGV4ID0gMDtcbiAgICBpZiAoUkVHRVhQX0RFRkFVTFRfT05fVEFHX0FUVFJfNy50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIC8vIGB1cmwoKWBcbiAgICBSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl84Lmxhc3RJbmRleCA9IDA7XG4gICAgaWYgKFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzgudGVzdCh2YWx1ZSkpIHtcbiAgICAgIFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzQubGFzdEluZGV4ID0gMDtcbiAgICAgIGlmIChSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl80LnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3NzRmlsdGVyICE9PSBmYWxzZSkge1xuICAgICAgY3NzRmlsdGVyID0gY3NzRmlsdGVyIHx8IGRlZmF1bHRDU1NGaWx0ZXI7XG4gICAgICB2YWx1ZSA9IGNzc0ZpbHRlci5wcm9jZXNzKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2NhcGUgYDw+XCJgIGJlZm9yZSByZXR1cm5zXG4gIHZhbHVlID0gZXNjYXBlQXR0clZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vLyBSZWdFeHAgbGlzdFxudmFyIFJFR0VYUF9MVCA9IC88L2c7XG52YXIgUkVHRVhQX0dUID0gLz4vZztcbnZhciBSRUdFWFBfUVVPVEUgPSAvXCIvZztcbnZhciBSRUdFWFBfUVVPVEVfMiA9IC8mcXVvdDsvZztcbnZhciBSRUdFWFBfQVRUUl9WQUxVRV8xID0gLyYjKFthLXpBLVowLTldKik7Py9naW07XG52YXIgUkVHRVhQX0FUVFJfVkFMVUVfQ09MT04gPSAvJmNvbG9uOz8vZ2ltO1xudmFyIFJFR0VYUF9BVFRSX1ZBTFVFX05FV0xJTkUgPSAvJm5ld2xpbmU7Py9naW07XG52YXIgUkVHRVhQX0RFRkFVTFRfT05fVEFHX0FUVFJfMyA9IC9cXC9cXCp8XFwqXFwvL2dtO1xudmFyIFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzQgPSAvKChqXFxzKmFcXHMqdlxccyphfHZcXHMqYnxsXFxzKmlcXHMqdlxccyplKVxccypzXFxzKmNcXHMqclxccyppXFxzKnBcXHMqdFxccyp8bVxccypvXFxzKmNcXHMqaFxccyphKVxcOi9naTtcbnZhciBSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl81ID0gL15bXFxzXCInYF0qKGRcXHMqYVxccyp0XFxzKmFcXHMqKVxcOi9naTtcbnZhciBSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl82ID0gL15bXFxzXCInYF0qKGRcXHMqYVxccyp0XFxzKmFcXHMqKVxcOlxccyppbWFnZVxcLy9naTtcbnZhciBSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl83ID0gL2VcXHMqeFxccypwXFxzKnJcXHMqZVxccypzXFxzKnNcXHMqaVxccypvXFxzKm5cXHMqXFwoLiovZ2k7XG52YXIgUkVHRVhQX0RFRkFVTFRfT05fVEFHX0FUVFJfOCA9IC91XFxzKnJcXHMqbFxccypcXCguKi9naTtcblxuLyoqXG4gKiBlc2NhcGUgZG91YmUgcXVvdGVcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHN0clxuICovXG5mdW5jdGlvbiBlc2NhcGVRdW90ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFR0VYUF9RVU9URSwgXCImcXVvdDtcIik7XG59XG5cbi8qKlxuICogdW5lc2NhcGUgZG91YmxlIHF1b3RlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfSBzdHJcbiAqL1xuZnVuY3Rpb24gdW5lc2NhcGVRdW90ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFR0VYUF9RVU9URV8yLCAnXCInKTtcbn1cblxuLyoqXG4gKiBlc2NhcGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlSHRtbEVudGl0aWVzKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVHRVhQX0FUVFJfVkFMVUVfMSwgZnVuY3Rpb24gcmVwbGFjZVVuaWNvZGUoc3RyLCBjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGVbMF0gPT09IFwieFwiIHx8IGNvZGVbMF0gPT09IFwiWFwiXG4gICAgICA/IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoY29kZS5zdWJzdHIoMSksIDE2KSlcbiAgICAgIDogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChjb2RlLCAxMCkpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBlc2NhcGUgaHRtbDUgbmV3IGRhbmdlciBlbnRpdGllc1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlRGFuZ2VySHRtbDVFbnRpdGllcyhzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKFJFR0VYUF9BVFRSX1ZBTFVFX0NPTE9OLCBcIjpcIilcbiAgICAucmVwbGFjZShSRUdFWFBfQVRUUl9WQUxVRV9ORVdMSU5FLCBcIiBcIik7XG59XG5cbi8qKlxuICogY2xlYXIgbm9ucHJpbnRhYmxlIGNoYXJhY3RlcnNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNsZWFyTm9uUHJpbnRhYmxlQ2hhcmFjdGVyKHN0cikge1xuICB2YXIgc3RyMiA9IFwiXCI7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBzdHIyICs9IHN0ci5jaGFyQ29kZUF0KGkpIDwgMzIgPyBcIiBcIiA6IHN0ci5jaGFyQXQoaSk7XG4gIH1cbiAgcmV0dXJuIF8udHJpbShzdHIyKTtcbn1cblxuLyoqXG4gKiBnZXQgZnJpZW5kbHkgYXR0cmlidXRlIHZhbHVlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBmcmllbmRseUF0dHJWYWx1ZShzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGVRdW90ZShzdHIpO1xuICBzdHIgPSBlc2NhcGVIdG1sRW50aXRpZXMoc3RyKTtcbiAgc3RyID0gZXNjYXBlRGFuZ2VySHRtbDVFbnRpdGllcyhzdHIpO1xuICBzdHIgPSBjbGVhck5vblByaW50YWJsZUNoYXJhY3RlcihzdHIpO1xuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIHVuZXNjYXBlIGF0dHJpYnV0ZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlQXR0clZhbHVlKHN0cikge1xuICBzdHIgPSBlc2NhcGVRdW90ZShzdHIpO1xuICBzdHIgPSBlc2NhcGVIdG1sKHN0cik7XG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogYG9uSWdub3JlVGFnYCBmdW5jdGlvbiBmb3IgcmVtb3ZpbmcgYWxsIHRoZSB0YWdzIHRoYXQgYXJlIG5vdCBpbiB3aGl0ZWxpc3RcbiAqL1xuZnVuY3Rpb24gb25JZ25vcmVUYWdTdHJpcEFsbCgpIHtcbiAgcmV0dXJuIFwiXCI7XG59XG5cbi8qKlxuICogcmVtb3ZlIHRhZyBib2R5XG4gKiBzcGVjaWZ5IGEgYHRhZ3NgIGxpc3QsIGlmIHRoZSB0YWcgaXMgbm90IGluIHRoZSBgdGFnc2AgbGlzdCB0aGVuIHByb2Nlc3MgYnkgdGhlIHNwZWNpZnkgZnVuY3Rpb24gKG9wdGlvbmFsKVxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IHRhZ3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG5leHRcbiAqL1xuZnVuY3Rpb24gU3RyaXBUYWdCb2R5KHRhZ3MsIG5leHQpIHtcbiAgaWYgKHR5cGVvZiBuZXh0ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBuZXh0ID0gZnVuY3Rpb24oKSB7fTtcbiAgfVxuXG4gIHZhciBpc1JlbW92ZUFsbFRhZyA9ICFBcnJheS5pc0FycmF5KHRhZ3MpO1xuICBmdW5jdGlvbiBpc1JlbW92ZVRhZyh0YWcpIHtcbiAgICBpZiAoaXNSZW1vdmVBbGxUYWcpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBfLmluZGV4T2YodGFncywgdGFnKSAhPT0gLTE7XG4gIH1cblxuICB2YXIgcmVtb3ZlTGlzdCA9IFtdO1xuICB2YXIgcG9zU3RhcnQgPSBmYWxzZTtcblxuICByZXR1cm4ge1xuICAgIG9uSWdub3JlVGFnOiBmdW5jdGlvbih0YWcsIGh0bWwsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChpc1JlbW92ZVRhZyh0YWcpKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmlzQ2xvc2luZykge1xuICAgICAgICAgIHZhciByZXQgPSBcIlsvcmVtb3ZlZF1cIjtcbiAgICAgICAgICB2YXIgZW5kID0gb3B0aW9ucy5wb3NpdGlvbiArIHJldC5sZW5ndGg7XG4gICAgICAgICAgcmVtb3ZlTGlzdC5wdXNoKFtcbiAgICAgICAgICAgIHBvc1N0YXJ0ICE9PSBmYWxzZSA/IHBvc1N0YXJ0IDogb3B0aW9ucy5wb3NpdGlvbixcbiAgICAgICAgICAgIGVuZFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHBvc1N0YXJ0ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXBvc1N0YXJ0KSB7XG4gICAgICAgICAgICBwb3NTdGFydCA9IG9wdGlvbnMucG9zaXRpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBcIltyZW1vdmVkXVwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV4dCh0YWcsIGh0bWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihodG1sKSB7XG4gICAgICB2YXIgcmV0aHRtbCA9IFwiXCI7XG4gICAgICB2YXIgbGFzdFBvcyA9IDA7XG4gICAgICBfLmZvckVhY2gocmVtb3ZlTGlzdCwgZnVuY3Rpb24ocG9zKSB7XG4gICAgICAgIHJldGh0bWwgKz0gaHRtbC5zbGljZShsYXN0UG9zLCBwb3NbMF0pO1xuICAgICAgICBsYXN0UG9zID0gcG9zWzFdO1xuICAgICAgfSk7XG4gICAgICByZXRodG1sICs9IGh0bWwuc2xpY2UobGFzdFBvcyk7XG4gICAgICByZXR1cm4gcmV0aHRtbDtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogcmVtb3ZlIGh0bWwgY29tbWVudHNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBzdHJpcENvbW1lbnRUYWcoaHRtbCkge1xuICByZXR1cm4gaHRtbC5yZXBsYWNlKFNUUklQX0NPTU1FTlRfVEFHX1JFR0VYUCwgXCJcIik7XG59XG52YXIgU1RSSVBfQ09NTUVOVF9UQUdfUkVHRVhQID0gLzwhLS1bXFxzXFxTXSo/LS0+L2c7XG5cbi8qKlxuICogcmVtb3ZlIGludmlzaWJsZSBjaGFyYWN0ZXJzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc3RyaXBCbGFua0NoYXIoaHRtbCkge1xuICB2YXIgY2hhcnMgPSBodG1sLnNwbGl0KFwiXCIpO1xuICBjaGFycyA9IGNoYXJzLmZpbHRlcihmdW5jdGlvbihjaGFyKSB7XG4gICAgdmFyIGMgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGMgPT09IDEyNykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChjIDw9IDMxKSB7XG4gICAgICBpZiAoYyA9PT0gMTAgfHwgYyA9PT0gMTMpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiBjaGFycy5qb2luKFwiXCIpO1xufVxuXG5leHBvcnRzLndoaXRlTGlzdCA9IGdldERlZmF1bHRXaGl0ZUxpc3QoKTtcbmV4cG9ydHMuZ2V0RGVmYXVsdFdoaXRlTGlzdCA9IGdldERlZmF1bHRXaGl0ZUxpc3Q7XG5leHBvcnRzLm9uVGFnID0gb25UYWc7XG5leHBvcnRzLm9uSWdub3JlVGFnID0gb25JZ25vcmVUYWc7XG5leHBvcnRzLm9uVGFnQXR0ciA9IG9uVGFnQXR0cjtcbmV4cG9ydHMub25JZ25vcmVUYWdBdHRyID0gb25JZ25vcmVUYWdBdHRyO1xuZXhwb3J0cy5zYWZlQXR0clZhbHVlID0gc2FmZUF0dHJWYWx1ZTtcbmV4cG9ydHMuZXNjYXBlSHRtbCA9IGVzY2FwZUh0bWw7XG5leHBvcnRzLmVzY2FwZVF1b3RlID0gZXNjYXBlUXVvdGU7XG5leHBvcnRzLnVuZXNjYXBlUXVvdGUgPSB1bmVzY2FwZVF1b3RlO1xuZXhwb3J0cy5lc2NhcGVIdG1sRW50aXRpZXMgPSBlc2NhcGVIdG1sRW50aXRpZXM7XG5leHBvcnRzLmVzY2FwZURhbmdlckh0bWw1RW50aXRpZXMgPSBlc2NhcGVEYW5nZXJIdG1sNUVudGl0aWVzO1xuZXhwb3J0cy5jbGVhck5vblByaW50YWJsZUNoYXJhY3RlciA9IGNsZWFyTm9uUHJpbnRhYmxlQ2hhcmFjdGVyO1xuZXhwb3J0cy5mcmllbmRseUF0dHJWYWx1ZSA9IGZyaWVuZGx5QXR0clZhbHVlO1xuZXhwb3J0cy5lc2NhcGVBdHRyVmFsdWUgPSBlc2NhcGVBdHRyVmFsdWU7XG5leHBvcnRzLm9uSWdub3JlVGFnU3RyaXBBbGwgPSBvbklnbm9yZVRhZ1N0cmlwQWxsO1xuZXhwb3J0cy5TdHJpcFRhZ0JvZHkgPSBTdHJpcFRhZ0JvZHk7XG5leHBvcnRzLnN0cmlwQ29tbWVudFRhZyA9IHN0cmlwQ29tbWVudFRhZztcbmV4cG9ydHMuc3RyaXBCbGFua0NoYXIgPSBzdHJpcEJsYW5rQ2hhcjtcbmV4cG9ydHMuY3NzRmlsdGVyID0gZGVmYXVsdENTU0ZpbHRlcjtcbmV4cG9ydHMuZ2V0RGVmYXVsdENTU1doaXRlTGlzdCA9IGdldERlZmF1bHRDU1NXaGl0ZUxpc3Q7XG4iLCIvKipcbiAqIHhzc1xuICpcbiAqIEBhdXRob3IgWm9uZ21pbiBMZWk8bGVpem9uZ21pbkBnbWFpbC5jb20+XG4gKi9cblxudmFyIERFRkFVTFQgPSByZXF1aXJlKFwiLi9kZWZhdWx0XCIpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoXCIuL3BhcnNlclwiKTtcbnZhciBGaWx0ZXJYU1MgPSByZXF1aXJlKFwiLi94c3NcIik7XG5cbi8qKlxuICogZmlsdGVyIHhzcyBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyB7IHdoaXRlTGlzdCwgb25UYWcsIG9uVGFnQXR0ciwgb25JZ25vcmVUYWcsIG9uSWdub3JlVGFnQXR0ciwgc2FmZUF0dHJWYWx1ZSwgZXNjYXBlSHRtbCB9XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZpbHRlclhTUyhodG1sLCBvcHRpb25zKSB7XG4gIHZhciB4c3MgPSBuZXcgRmlsdGVyWFNTKG9wdGlvbnMpO1xuICByZXR1cm4geHNzLnByb2Nlc3MoaHRtbCk7XG59XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZpbHRlclhTUztcbmV4cG9ydHMuZmlsdGVyWFNTID0gZmlsdGVyWFNTO1xuZXhwb3J0cy5GaWx0ZXJYU1MgPSBGaWx0ZXJYU1M7XG5mb3IgKHZhciBpIGluIERFRkFVTFQpIGV4cG9ydHNbaV0gPSBERUZBVUxUW2ldO1xuZm9yICh2YXIgaSBpbiBwYXJzZXIpIGV4cG9ydHNbaV0gPSBwYXJzZXJbaV07XG5cbi8vIHVzaW5nIGB4c3NgIG9uIHRoZSBicm93c2VyLCBvdXRwdXQgYGZpbHRlclhTU2AgdG8gdGhlIGdsb2JhbHNcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHdpbmRvdy5maWx0ZXJYU1MgPSBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gdXNpbmcgYHhzc2Agb24gdGhlIFdlYldvcmtlciwgb3V0cHV0IGBmaWx0ZXJYU1NgIHRvIHRoZSBnbG9iYWxzXG5mdW5jdGlvbiBpc1dvcmtlckVudigpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZTtcbn1cbmlmIChpc1dvcmtlckVudigpKSB7XG4gIHNlbGYuZmlsdGVyWFNTID0gbW9kdWxlLmV4cG9ydHM7XG59XG4iLCIvKipcbiAqIFNpbXBsZSBIVE1MIFBhcnNlclxuICpcbiAqIEBhdXRob3IgWm9uZ21pbiBMZWk8bGVpem9uZ21pbkBnbWFpbC5jb20+XG4gKi9cblxudmFyIF8gPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuXG4vKipcbiAqIGdldCB0YWcgbmFtZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sIGUuZy4gJzxhIGhlZj1cIiNcIj4nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldFRhZ05hbWUoaHRtbCkge1xuICB2YXIgaSA9IF8uc3BhY2VJbmRleChodG1sKTtcbiAgaWYgKGkgPT09IC0xKSB7XG4gICAgdmFyIHRhZ05hbWUgPSBodG1sLnNsaWNlKDEsIC0xKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnTmFtZSA9IGh0bWwuc2xpY2UoMSwgaSArIDEpO1xuICB9XG4gIHRhZ05hbWUgPSBfLnRyaW0odGFnTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHRhZ05hbWUuc2xpY2UoMCwgMSkgPT09IFwiL1wiKSB0YWdOYW1lID0gdGFnTmFtZS5zbGljZSgxKTtcbiAgaWYgKHRhZ05hbWUuc2xpY2UoLTEpID09PSBcIi9cIikgdGFnTmFtZSA9IHRhZ05hbWUuc2xpY2UoMCwgLTEpO1xuICByZXR1cm4gdGFnTmFtZTtcbn1cblxuLyoqXG4gKiBpcyBjbG9zZSB0YWc/XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWwg5aaC77yaJzxhIGhlZj1cIiNcIj4nXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0Nsb3NpbmcoaHRtbCkge1xuICByZXR1cm4gaHRtbC5zbGljZSgwLCAyKSA9PT0gXCI8L1wiO1xufVxuXG4vKipcbiAqIHBhcnNlIGlucHV0IGh0bWwgYW5kIHJldHVybnMgcHJvY2Vzc2VkIGh0bWxcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gb25UYWcgZS5nLiBmdW5jdGlvbiAoc291cmNlUG9zaXRpb24sIHBvc2l0aW9uLCB0YWcsIGh0bWwsIGlzQ2xvc2luZylcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVzY2FwZUh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcGFyc2VUYWcoaHRtbCwgb25UYWcsIGVzY2FwZUh0bWwpIHtcbiAgXCJ1c2VyIHN0cmljdFwiO1xuXG4gIHZhciByZXRodG1sID0gXCJcIjtcbiAgdmFyIGxhc3RQb3MgPSAwO1xuICB2YXIgdGFnU3RhcnQgPSBmYWxzZTtcbiAgdmFyIHF1b3RlU3RhcnQgPSBmYWxzZTtcbiAgdmFyIGN1cnJlbnRQb3MgPSAwO1xuICB2YXIgbGVuID0gaHRtbC5sZW5ndGg7XG4gIHZhciBjdXJyZW50VGFnTmFtZSA9IFwiXCI7XG4gIHZhciBjdXJyZW50SHRtbCA9IFwiXCI7XG5cbiAgZm9yIChjdXJyZW50UG9zID0gMDsgY3VycmVudFBvcyA8IGxlbjsgY3VycmVudFBvcysrKSB7XG4gICAgdmFyIGMgPSBodG1sLmNoYXJBdChjdXJyZW50UG9zKTtcbiAgICBpZiAodGFnU3RhcnQgPT09IGZhbHNlKSB7XG4gICAgICBpZiAoYyA9PT0gXCI8XCIpIHtcbiAgICAgICAgdGFnU3RhcnQgPSBjdXJyZW50UG9zO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHF1b3RlU3RhcnQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChjID09PSBcIjxcIikge1xuICAgICAgICAgIHJldGh0bWwgKz0gZXNjYXBlSHRtbChodG1sLnNsaWNlKGxhc3RQb3MsIGN1cnJlbnRQb3MpKTtcbiAgICAgICAgICB0YWdTdGFydCA9IGN1cnJlbnRQb3M7XG4gICAgICAgICAgbGFzdFBvcyA9IGN1cnJlbnRQb3M7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgICAgcmV0aHRtbCArPSBlc2NhcGVIdG1sKGh0bWwuc2xpY2UobGFzdFBvcywgdGFnU3RhcnQpKTtcbiAgICAgICAgICBjdXJyZW50SHRtbCA9IGh0bWwuc2xpY2UodGFnU3RhcnQsIGN1cnJlbnRQb3MgKyAxKTtcbiAgICAgICAgICBjdXJyZW50VGFnTmFtZSA9IGdldFRhZ05hbWUoY3VycmVudEh0bWwpO1xuICAgICAgICAgIHJldGh0bWwgKz0gb25UYWcoXG4gICAgICAgICAgICB0YWdTdGFydCxcbiAgICAgICAgICAgIHJldGh0bWwubGVuZ3RoLFxuICAgICAgICAgICAgY3VycmVudFRhZ05hbWUsXG4gICAgICAgICAgICBjdXJyZW50SHRtbCxcbiAgICAgICAgICAgIGlzQ2xvc2luZyhjdXJyZW50SHRtbClcbiAgICAgICAgICApO1xuICAgICAgICAgIGxhc3RQb3MgPSBjdXJyZW50UG9zICsgMTtcbiAgICAgICAgICB0YWdTdGFydCA9IGZhbHNlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYyA9PT0gJ1wiJyB8fCBjID09PSBcIidcIikgJiYgaHRtbC5jaGFyQXQoY3VycmVudFBvcyAtIDEpID09PSBcIj1cIikge1xuICAgICAgICAgIHF1b3RlU3RhcnQgPSBjO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYyA9PT0gcXVvdGVTdGFydCkge1xuICAgICAgICAgIHF1b3RlU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAobGFzdFBvcyA8IGh0bWwubGVuZ3RoKSB7XG4gICAgcmV0aHRtbCArPSBlc2NhcGVIdG1sKGh0bWwuc3Vic3RyKGxhc3RQb3MpKTtcbiAgfVxuXG4gIHJldHVybiByZXRodG1sO1xufVxuXG52YXIgUkVHRVhQX0lMTEVHQUxfQVRUUl9OQU1FID0gL1teYS16QS1aMC05XzpcXC5cXC1dL2dpbTtcblxuLyoqXG4gKiBwYXJzZSBpbnB1dCBhdHRyaWJ1dGVzIGFuZCByZXR1cm5zIHByb2Nlc3NlZCBhdHRyaWJ1dGVzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWwgZS5nLiBgaHJlZj1cIiNcIiB0YXJnZXQ9XCJfYmxhbmtcImBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQXR0ciBlLmcuIGBmdW5jdGlvbiAobmFtZSwgdmFsdWUpYFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBwYXJzZUF0dHIoaHRtbCwgb25BdHRyKSB7XG4gIFwidXNlciBzdHJpY3RcIjtcblxuICB2YXIgbGFzdFBvcyA9IDA7XG4gIHZhciByZXRBdHRycyA9IFtdO1xuICB2YXIgdG1wTmFtZSA9IGZhbHNlO1xuICB2YXIgbGVuID0gaHRtbC5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gYWRkQXR0cihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBfLnRyaW0obmFtZSk7XG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZShSRUdFWFBfSUxMRUdBTF9BVFRSX05BTUUsIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG5hbWUubGVuZ3RoIDwgMSkgcmV0dXJuO1xuICAgIHZhciByZXQgPSBvbkF0dHIobmFtZSwgdmFsdWUgfHwgXCJcIik7XG4gICAgaWYgKHJldCkgcmV0QXR0cnMucHVzaChyZXQpO1xuICB9XG5cbiAgLy8g6YCQ5Liq5YiG5p6Q5a2X56ymXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYyA9IGh0bWwuY2hhckF0KGkpO1xuICAgIHZhciB2LCBqO1xuICAgIGlmICh0bXBOYW1lID09PSBmYWxzZSAmJiBjID09PSBcIj1cIikge1xuICAgICAgdG1wTmFtZSA9IGh0bWwuc2xpY2UobGFzdFBvcywgaSk7XG4gICAgICBsYXN0UG9zID0gaSArIDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHRtcE5hbWUgIT09IGZhbHNlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGkgPT09IGxhc3RQb3MgJiZcbiAgICAgICAgKGMgPT09ICdcIicgfHwgYyA9PT0gXCInXCIpICYmXG4gICAgICAgIGh0bWwuY2hhckF0KGkgLSAxKSA9PT0gXCI9XCJcbiAgICAgICkge1xuICAgICAgICBqID0gaHRtbC5pbmRleE9mKGMsIGkgKyAxKTtcbiAgICAgICAgaWYgKGogPT09IC0xKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdiA9IF8udHJpbShodG1sLnNsaWNlKGxhc3RQb3MgKyAxLCBqKSk7XG4gICAgICAgICAgYWRkQXR0cih0bXBOYW1lLCB2KTtcbiAgICAgICAgICB0bXBOYW1lID0gZmFsc2U7XG4gICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAxO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgvXFxzfFxcbnxcXHQvLnRlc3QoYykpIHtcbiAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcc3xcXG58XFx0L2csIFwiIFwiKTtcbiAgICAgIGlmICh0bXBOYW1lID09PSBmYWxzZSkge1xuICAgICAgICBqID0gZmluZE5leHRFcXVhbChodG1sLCBpKTtcbiAgICAgICAgaWYgKGogPT09IC0xKSB7XG4gICAgICAgICAgdiA9IF8udHJpbShodG1sLnNsaWNlKGxhc3RQb3MsIGkpKTtcbiAgICAgICAgICBhZGRBdHRyKHYpO1xuICAgICAgICAgIHRtcE5hbWUgPSBmYWxzZTtcbiAgICAgICAgICBsYXN0UG9zID0gaSArIDE7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaSA9IGogLSAxO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqID0gZmluZEJlZm9yZUVxdWFsKGh0bWwsIGkgLSAxKTtcbiAgICAgICAgaWYgKGogPT09IC0xKSB7XG4gICAgICAgICAgdiA9IF8udHJpbShodG1sLnNsaWNlKGxhc3RQb3MsIGkpKTtcbiAgICAgICAgICB2ID0gc3RyaXBRdW90ZVdyYXAodik7XG4gICAgICAgICAgYWRkQXR0cih0bXBOYW1lLCB2KTtcbiAgICAgICAgICB0bXBOYW1lID0gZmFsc2U7XG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAxO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGxhc3RQb3MgPCBodG1sLmxlbmd0aCkge1xuICAgIGlmICh0bXBOYW1lID09PSBmYWxzZSkge1xuICAgICAgYWRkQXR0cihodG1sLnNsaWNlKGxhc3RQb3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQXR0cih0bXBOYW1lLCBzdHJpcFF1b3RlV3JhcChfLnRyaW0oaHRtbC5zbGljZShsYXN0UG9zKSkpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gXy50cmltKHJldEF0dHJzLmpvaW4oXCIgXCIpKTtcbn1cblxuZnVuY3Rpb24gZmluZE5leHRFcXVhbChzdHIsIGkpIHtcbiAgZm9yICg7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYyA9IHN0cltpXTtcbiAgICBpZiAoYyA9PT0gXCIgXCIpIGNvbnRpbnVlO1xuICAgIGlmIChjID09PSBcIj1cIikgcmV0dXJuIGk7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRCZWZvcmVFcXVhbChzdHIsIGkpIHtcbiAgZm9yICg7IGkgPiAwOyBpLS0pIHtcbiAgICB2YXIgYyA9IHN0cltpXTtcbiAgICBpZiAoYyA9PT0gXCIgXCIpIGNvbnRpbnVlO1xuICAgIGlmIChjID09PSBcIj1cIikgcmV0dXJuIGk7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUXVvdGVXcmFwU3RyaW5nKHRleHQpIHtcbiAgaWYgKFxuICAgICh0ZXh0WzBdID09PSAnXCInICYmIHRleHRbdGV4dC5sZW5ndGggLSAxXSA9PT0gJ1wiJykgfHxcbiAgICAodGV4dFswXSA9PT0gXCInXCIgJiYgdGV4dFt0ZXh0Lmxlbmd0aCAtIDFdID09PSBcIidcIilcbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwUXVvdGVXcmFwKHRleHQpIHtcbiAgaWYgKGlzUXVvdGVXcmFwU3RyaW5nKHRleHQpKSB7XG4gICAgcmV0dXJuIHRleHQuc3Vic3RyKDEsIHRleHQubGVuZ3RoIC0gMik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cbn1cblxuZXhwb3J0cy5wYXJzZVRhZyA9IHBhcnNlVGFnO1xuZXhwb3J0cy5wYXJzZUF0dHIgPSBwYXJzZUF0dHI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5kZXhPZjogZnVuY3Rpb24oYXJyLCBpdGVtKSB7XG4gICAgdmFyIGksIGo7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgICByZXR1cm4gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgfVxuICAgIGZvciAoaSA9IDAsIGogPSBhcnIubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpZiAoYXJyW2ldID09PSBpdGVtKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH0sXG4gIGZvckVhY2g6IGZ1bmN0aW9uKGFyciwgZm4sIHNjb3BlKSB7XG4gICAgdmFyIGksIGo7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgICByZXR1cm4gYXJyLmZvckVhY2goZm4sIHNjb3BlKTtcbiAgICB9XG4gICAgZm9yIChpID0gMCwgaiA9IGFyci5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGZuLmNhbGwoc2NvcGUsIGFycltpXSwgaSwgYXJyKTtcbiAgICB9XG4gIH0sXG4gIHRyaW06IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChTdHJpbmcucHJvdG90eXBlLnRyaW0pIHtcbiAgICAgIHJldHVybiBzdHIudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCBcIlwiKTtcbiAgfSxcbiAgc3BhY2VJbmRleDogZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHJlZyA9IC9cXHN8XFxufFxcdC87XG4gICAgdmFyIG1hdGNoID0gcmVnLmV4ZWMoc3RyKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaC5pbmRleCA6IC0xO1xuICB9XG59O1xuIiwiLyoqXG4gKiBmaWx0ZXIgeHNzXG4gKlxuICogQGF1dGhvciBab25nbWluIExlaTxsZWl6b25nbWluQGdtYWlsLmNvbT5cbiAqL1xuXG52YXIgRmlsdGVyQ1NTID0gcmVxdWlyZShcImNzc2ZpbHRlclwiKS5GaWx0ZXJDU1M7XG52YXIgREVGQVVMVCA9IHJlcXVpcmUoXCIuL2RlZmF1bHRcIik7XG52YXIgcGFyc2VyID0gcmVxdWlyZShcIi4vcGFyc2VyXCIpO1xudmFyIHBhcnNlVGFnID0gcGFyc2VyLnBhcnNlVGFnO1xudmFyIHBhcnNlQXR0ciA9IHBhcnNlci5wYXJzZUF0dHI7XG52YXIgXyA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbi8qKlxuICogcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGB1bmRlZmluZWRgIG9yIGBudWxsYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbDtcbn1cblxuLyoqXG4gKiBnZXQgYXR0cmlidXRlcyBmb3IgYSB0YWdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7T2JqZWN0fVxuICogICAtIHtTdHJpbmd9IGh0bWxcbiAqICAgLSB7Qm9vbGVhbn0gY2xvc2luZ1xuICovXG5mdW5jdGlvbiBnZXRBdHRycyhodG1sKSB7XG4gIHZhciBpID0gXy5zcGFjZUluZGV4KGh0bWwpO1xuICBpZiAoaSA9PT0gLTEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHRtbDogXCJcIixcbiAgICAgIGNsb3Npbmc6IGh0bWxbaHRtbC5sZW5ndGggLSAyXSA9PT0gXCIvXCJcbiAgICB9O1xuICB9XG4gIGh0bWwgPSBfLnRyaW0oaHRtbC5zbGljZShpICsgMSwgLTEpKTtcbiAgdmFyIGlzQ2xvc2luZyA9IGh0bWxbaHRtbC5sZW5ndGggLSAxXSA9PT0gXCIvXCI7XG4gIGlmIChpc0Nsb3NpbmcpIGh0bWwgPSBfLnRyaW0oaHRtbC5zbGljZSgwLCAtMSkpO1xuICByZXR1cm4ge1xuICAgIGh0bWw6IGh0bWwsXG4gICAgY2xvc2luZzogaXNDbG9zaW5nXG4gIH07XG59XG5cbi8qKlxuICogc2hhbGxvdyBjb3B5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBzaGFsbG93Q29weU9iamVjdChvYmopIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIHJldFtpXSA9IG9ialtpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIEZpbHRlclhTUyBjbGFzc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiAgICAgICAgd2hpdGVMaXN0LCBvblRhZywgb25UYWdBdHRyLCBvbklnbm9yZVRhZyxcbiAqICAgICAgICBvbklnbm9yZVRhZ0F0dHIsIHNhZmVBdHRyVmFsdWUsIGVzY2FwZUh0bWxcbiAqICAgICAgICBzdHJpcElnbm9yZVRhZ0JvZHksIGFsbG93Q29tbWVudFRhZywgc3RyaXBCbGFua0NoYXJcbiAqICAgICAgICBjc3N7d2hpdGVMaXN0LCBvbkF0dHIsIG9uSWdub3JlQXR0cn0gYGNzcz1mYWxzZWAgbWVhbnMgZG9uJ3QgdXNlIGBjc3NmaWx0ZXJgXG4gKi9cbmZ1bmN0aW9uIEZpbHRlclhTUyhvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBzaGFsbG93Q29weU9iamVjdChvcHRpb25zIHx8IHt9KTtcblxuICBpZiAob3B0aW9ucy5zdHJpcElnbm9yZVRhZykge1xuICAgIGlmIChvcHRpb25zLm9uSWdub3JlVGFnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnTm90ZXM6IGNhbm5vdCB1c2UgdGhlc2UgdHdvIG9wdGlvbnMgXCJzdHJpcElnbm9yZVRhZ1wiIGFuZCBcIm9uSWdub3JlVGFnXCIgYXQgdGhlIHNhbWUgdGltZSdcbiAgICAgICk7XG4gICAgfVxuICAgIG9wdGlvbnMub25JZ25vcmVUYWcgPSBERUZBVUxULm9uSWdub3JlVGFnU3RyaXBBbGw7XG4gIH1cblxuICBvcHRpb25zLndoaXRlTGlzdCA9IG9wdGlvbnMud2hpdGVMaXN0IHx8IERFRkFVTFQud2hpdGVMaXN0O1xuICBvcHRpb25zLm9uVGFnID0gb3B0aW9ucy5vblRhZyB8fCBERUZBVUxULm9uVGFnO1xuICBvcHRpb25zLm9uVGFnQXR0ciA9IG9wdGlvbnMub25UYWdBdHRyIHx8IERFRkFVTFQub25UYWdBdHRyO1xuICBvcHRpb25zLm9uSWdub3JlVGFnID0gb3B0aW9ucy5vbklnbm9yZVRhZyB8fCBERUZBVUxULm9uSWdub3JlVGFnO1xuICBvcHRpb25zLm9uSWdub3JlVGFnQXR0ciA9IG9wdGlvbnMub25JZ25vcmVUYWdBdHRyIHx8IERFRkFVTFQub25JZ25vcmVUYWdBdHRyO1xuICBvcHRpb25zLnNhZmVBdHRyVmFsdWUgPSBvcHRpb25zLnNhZmVBdHRyVmFsdWUgfHwgREVGQVVMVC5zYWZlQXR0clZhbHVlO1xuICBvcHRpb25zLmVzY2FwZUh0bWwgPSBvcHRpb25zLmVzY2FwZUh0bWwgfHwgREVGQVVMVC5lc2NhcGVIdG1sO1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gIGlmIChvcHRpb25zLmNzcyA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLmNzc0ZpbHRlciA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMuY3NzID0gb3B0aW9ucy5jc3MgfHwge307XG4gICAgdGhpcy5jc3NGaWx0ZXIgPSBuZXcgRmlsdGVyQ1NTKG9wdGlvbnMuY3NzKTtcbiAgfVxufVxuXG4vKipcbiAqIHN0YXJ0IHByb2Nlc3MgYW5kIHJldHVybnMgcmVzdWx0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuRmlsdGVyWFNTLnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24oaHRtbCkge1xuICAvLyBjb21wYXRpYmxlIHdpdGggdGhlIGlucHV0XG4gIGh0bWwgPSBodG1sIHx8IFwiXCI7XG4gIGh0bWwgPSBodG1sLnRvU3RyaW5nKCk7XG4gIGlmICghaHRtbCkgcmV0dXJuIFwiXCI7XG5cbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIG9wdGlvbnMgPSBtZS5vcHRpb25zO1xuICB2YXIgd2hpdGVMaXN0ID0gb3B0aW9ucy53aGl0ZUxpc3Q7XG4gIHZhciBvblRhZyA9IG9wdGlvbnMub25UYWc7XG4gIHZhciBvbklnbm9yZVRhZyA9IG9wdGlvbnMub25JZ25vcmVUYWc7XG4gIHZhciBvblRhZ0F0dHIgPSBvcHRpb25zLm9uVGFnQXR0cjtcbiAgdmFyIG9uSWdub3JlVGFnQXR0ciA9IG9wdGlvbnMub25JZ25vcmVUYWdBdHRyO1xuICB2YXIgc2FmZUF0dHJWYWx1ZSA9IG9wdGlvbnMuc2FmZUF0dHJWYWx1ZTtcbiAgdmFyIGVzY2FwZUh0bWwgPSBvcHRpb25zLmVzY2FwZUh0bWw7XG4gIHZhciBjc3NGaWx0ZXIgPSBtZS5jc3NGaWx0ZXI7XG5cbiAgLy8gcmVtb3ZlIGludmlzaWJsZSBjaGFyYWN0ZXJzXG4gIGlmIChvcHRpb25zLnN0cmlwQmxhbmtDaGFyKSB7XG4gICAgaHRtbCA9IERFRkFVTFQuc3RyaXBCbGFua0NoYXIoaHRtbCk7XG4gIH1cblxuICAvLyByZW1vdmUgaHRtbCBjb21tZW50c1xuICBpZiAoIW9wdGlvbnMuYWxsb3dDb21tZW50VGFnKSB7XG4gICAgaHRtbCA9IERFRkFVTFQuc3RyaXBDb21tZW50VGFnKGh0bWwpO1xuICB9XG5cbiAgLy8gaWYgZW5hYmxlIHN0cmlwSWdub3JlVGFnQm9keVxuICB2YXIgc3RyaXBJZ25vcmVUYWdCb2R5ID0gZmFsc2U7XG4gIGlmIChvcHRpb25zLnN0cmlwSWdub3JlVGFnQm9keSkge1xuICAgIHZhciBzdHJpcElnbm9yZVRhZ0JvZHkgPSBERUZBVUxULlN0cmlwVGFnQm9keShcbiAgICAgIG9wdGlvbnMuc3RyaXBJZ25vcmVUYWdCb2R5LFxuICAgICAgb25JZ25vcmVUYWdcbiAgICApO1xuICAgIG9uSWdub3JlVGFnID0gc3RyaXBJZ25vcmVUYWdCb2R5Lm9uSWdub3JlVGFnO1xuICB9XG5cbiAgdmFyIHJldEh0bWwgPSBwYXJzZVRhZyhcbiAgICBodG1sLFxuICAgIGZ1bmN0aW9uKHNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbiwgdGFnLCBodG1sLCBpc0Nsb3NpbmcpIHtcbiAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICBzb3VyY2VQb3NpdGlvbjogc291cmNlUG9zaXRpb24sXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgaXNDbG9zaW5nOiBpc0Nsb3NpbmcsXG4gICAgICAgIGlzV2hpdGU6IHdoaXRlTGlzdC5oYXNPd25Qcm9wZXJ0eSh0YWcpXG4gICAgICB9O1xuXG4gICAgICAvLyBjYWxsIGBvblRhZygpYFxuICAgICAgdmFyIHJldCA9IG9uVGFnKHRhZywgaHRtbCwgaW5mbyk7XG4gICAgICBpZiAoIWlzTnVsbChyZXQpKSByZXR1cm4gcmV0O1xuXG4gICAgICBpZiAoaW5mby5pc1doaXRlKSB7XG4gICAgICAgIGlmIChpbmZvLmlzQ2xvc2luZykge1xuICAgICAgICAgIHJldHVybiBcIjwvXCIgKyB0YWcgKyBcIj5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhdHRycyA9IGdldEF0dHJzKGh0bWwpO1xuICAgICAgICB2YXIgd2hpdGVBdHRyTGlzdCA9IHdoaXRlTGlzdFt0YWddO1xuICAgICAgICB2YXIgYXR0cnNIdG1sID0gcGFyc2VBdHRyKGF0dHJzLmh0bWwsIGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgLy8gY2FsbCBgb25UYWdBdHRyKClgXG4gICAgICAgICAgdmFyIGlzV2hpdGVBdHRyID0gXy5pbmRleE9mKHdoaXRlQXR0ckxpc3QsIG5hbWUpICE9PSAtMTtcbiAgICAgICAgICB2YXIgcmV0ID0gb25UYWdBdHRyKHRhZywgbmFtZSwgdmFsdWUsIGlzV2hpdGVBdHRyKTtcbiAgICAgICAgICBpZiAoIWlzTnVsbChyZXQpKSByZXR1cm4gcmV0O1xuXG4gICAgICAgICAgaWYgKGlzV2hpdGVBdHRyKSB7XG4gICAgICAgICAgICAvLyBjYWxsIGBzYWZlQXR0clZhbHVlKClgXG4gICAgICAgICAgICB2YWx1ZSA9IHNhZmVBdHRyVmFsdWUodGFnLCBuYW1lLCB2YWx1ZSwgY3NzRmlsdGVyKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gbmFtZSArICc9XCInICsgdmFsdWUgKyAnXCInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNhbGwgYG9uSWdub3JlVGFnQXR0cigpYFxuICAgICAgICAgICAgdmFyIHJldCA9IG9uSWdub3JlVGFnQXR0cih0YWcsIG5hbWUsIHZhbHVlLCBpc1doaXRlQXR0cik7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbChyZXQpKSByZXR1cm4gcmV0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYnVpbGQgbmV3IHRhZyBodG1sXG4gICAgICAgIHZhciBodG1sID0gXCI8XCIgKyB0YWc7XG4gICAgICAgIGlmIChhdHRyc0h0bWwpIGh0bWwgKz0gXCIgXCIgKyBhdHRyc0h0bWw7XG4gICAgICAgIGlmIChhdHRycy5jbG9zaW5nKSBodG1sICs9IFwiIC9cIjtcbiAgICAgICAgaHRtbCArPSBcIj5cIjtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjYWxsIGBvbklnbm9yZVRhZygpYFxuICAgICAgICB2YXIgcmV0ID0gb25JZ25vcmVUYWcodGFnLCBodG1sLCBpbmZvKTtcbiAgICAgICAgaWYgKCFpc051bGwocmV0KSkgcmV0dXJuIHJldDtcbiAgICAgICAgcmV0dXJuIGVzY2FwZUh0bWwoaHRtbCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlc2NhcGVIdG1sXG4gICk7XG5cbiAgLy8gaWYgZW5hYmxlIHN0cmlwSWdub3JlVGFnQm9keVxuICBpZiAoc3RyaXBJZ25vcmVUYWdCb2R5KSB7XG4gICAgcmV0SHRtbCA9IHN0cmlwSWdub3JlVGFnQm9keS5yZW1vdmUocmV0SHRtbCk7XG4gIH1cblxuICByZXR1cm4gcmV0SHRtbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyWFNTO1xuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOzs7OztBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUM3R0E7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFHQTs7Ozs7Ozs7OztBQVFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN1lBOzs7OztBQU1BO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9CQTs7Ozs7QUFNQTtBQUdBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWpDQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUEwQkE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFNQTtBQU1BO0FBQ0E7QUFNQTtBQUFBO0FBT0E7QUFJQTs7OztBQUlBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFTQTtBQVhBO0FBY0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBc0JBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUlBOzs7O0FBSUE7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQVdBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBR0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUFBO0FBR0E7QUFHQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFHQTtBQTRHQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFBQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsV0FFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4cERBOzs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBWEE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakJBO0FBQ0E7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25NQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQkE7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9EQTtBQWlFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUdBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUdBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUdBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUdBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQS9CQTtBQWlDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDOVpBOzs7OztBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZDQTs7Ozs7QUFNQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzlPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQ0E7Ozs7Ozs7Ozs7O0FDQUE7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==