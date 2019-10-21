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
/******/ 	__webpack_require__.p = "/frontend_latest/";
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
function isNull (obj) {
  return (obj === undefined || obj === null);
}

/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject (obj) {
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
function FilterCSS (options) {
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
    if (check === true) isWhite = check;
    else if (typeof check === 'function') isWhite = check(value);
    else if (check instanceof RegExp) isWhite = check.test(value);
    if (isWhite !== true) isWhite = false;

    // 如果过滤后 value 为空则直接忽略
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

function getDefaultWhiteList () {
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
function onAttr (name, value, options) {
  // do nothing
}

/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onIgnoreAttr (name, value, options) {
  // do nothing
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
function filterCSS (html, options) {
  var xss = new FilterCSS(options);
  return xss.process(html);
}


// 输出
exports = module.exports = filterCSS;
exports.FilterCSS = FilterCSS;
for (var i in DEFAULT) exports[i] = DEFAULT[i];

// 在浏览器端使用
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
function parseStyle (css, onAttr) {
  css = _.trimRight(css);
  if (css[css.length - 1] !== ';') css += ';';
  var cssLength = css.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i = 0;
  var retCSS = '';

  function addNewAttr () {
    // 如果没有正常的闭合圆括号，则直接忽略当前属性
    if (!isParenthesisOpen) {
      var source = _.trim(css.slice(lastPos, i));
      var j = source.indexOf(':');
      if (j !== -1) {
        var name = _.trim(source.slice(0, j));
        var value = _.trim(source.slice(j + 1));
        // 必须有属性名称
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
      var j = css.indexOf('*/', i + 2);
      // 如果没有正常的备注结束，则后面的部分全部跳过
      if (j === -1) break;
      // 直接将当前位置调到备注结尾，并且初始化状态
      i = j + 1;
      lastPos = i + 1;
      isParenthesisOpen = false;
    } else if (c === '(') {
      isParenthesisOpen = true;
    } else if (c === ')') {
      isParenthesisOpen = false;
    } else if (c === ';') {
      if (isParenthesisOpen) {
        // 在圆括号里面，忽略
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
  indexOf: function (arr, item) {
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
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  trimRight: function (str) {
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

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2018, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

;(function(root) {
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
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}\.)/;
block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
block.item = edit(block.item, 'gm')
  .replace(/bull/g, block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?-->/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block.paragraph)
  .replace('hr', block.hr)
  .replace('heading', block.heading)
  .replace('lheading', block.lheading)
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

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

block.gfm.paragraph = edit(block.paragraph)
  .replace('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  .getRegex();

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
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
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

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top) {
  src = src.replace(/^ +$/gm, '');
  var next,
      loose,
      cap,
      bull,
      b,
      item,
      listStart,
      listItems,
      t,
      space,
      i,
      tag,
      l,
      isordered,
      istask,
      ischecked;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? rtrim(cap, '\n')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2] ? cap[2].trim() : cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
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
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
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

      this.tokens.push(listStart);

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      listItems = [];
      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) */, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull.length > 1 ? b.length === 1
            : (b.length > 1 || (this.options.smartLists && b !== bull))) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        if (loose) {
          listStart.loose = true;
        }

        // Check for task list items
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
        this.tokens.push(t);

        // Recurse.
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
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
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
    }

    // table (gfm)
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
          item.cells[i] = splitCells(
            item.cells[i].replace(/^ *\| *| *\| *$/g, ''),
            item.header.length);
        }

        this.tokens.push(item);

        continue;
      }
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
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
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
  em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noop,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
};

// list of punctuation marks from common mark spec
// without ` and ] to workaround Rule 17 (inline code blocks/links)
inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', block._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|`(?!`)|[^\[\]\\`])*?/;
inline._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .getRegex();

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
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
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

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
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

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
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
    }

    // tag
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
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0];
      continue;
    }

    // link
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
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
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
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2].trim(), true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // autolink
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
    }

    // url (gfm)
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
    }

    // text
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

InlineLexer.escapes = function(text) {
  return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = link.href,
      title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
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

Renderer.prototype.code = function(code, infostring, escaped) {
  var lang = (infostring || '').match(/\S*/)[0];
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw, slugger) {
  if (this.options.headerIds) {
    return '<h'
      + level
      + ' id="'
      + this.options.headerPrefix
      + slugger.slug(raw)
      + '">'
      + text
      + '</h'
      + level
      + '>\n';
  }
  // ignore IDs
  return '<h' + level + '>' + text + '</h' + level + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered, start) {
  var type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
  return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.checkbox = function(checked) {
  return '<input '
    + (checked ? 'checked="" ' : '')
    + 'disabled="" type="checkbox"'
    + (this.options.xhtml ? ' /' : '')
    + '> ';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  if (body) body = '<tbody>' + body + '</tbody>';

  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + body
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' align="' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
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

Renderer.prototype.image = function(href, title, text) {
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

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * TextRenderer
 * returns only the textual part of the token
 */

function TextRenderer() {}

// no need for block level renderers

TextRenderer.prototype.strong =
TextRenderer.prototype.em =
TextRenderer.prototype.codespan =
TextRenderer.prototype.del =
TextRenderer.prototype.text = function (text) {
  return text;
};

TextRenderer.prototype.link =
TextRenderer.prototype.image = function(href, title, text) {
  return '' + text;
};

TextRenderer.prototype.br = function() {
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

Parser.parse = function(src, options) {
  var parser = new Parser(options);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options);
  // use an InlineLexer with a TextRenderer to extract pure text
  this.inlineText = new InlineLexer(
    src.links,
    merge({}, this.options, {renderer: new TextRenderer()})
  );
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

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        unescape(this.inlineText.output(this.token.text)),
        this.slugger);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = '',
          body = '',
          i,
          row,
          cell,
          j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      body = '';
      var ordered = this.token.ordered,
          start = this.token.start;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered, start);
    }
    case 'list_item_start': {
      body = '';
      var loose = this.token.loose;
      var checked = this.token.checked;
      var task = this.token.task;

      if (this.token.task) {
        body += this.renderer.checkbox(checked);
      }

      while (this.next().type !== 'list_item_end') {
        body += !loose && this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }
      return this.renderer.listitem(body, task, checked);
    }
    case 'html': {
      // TODO parse inline content if parameter markdown=1
      return this.renderer.html(this.token.text);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
    default: {
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

function Slugger () {
  this.seen = {};
}

/**
 * Convert string to unique id
 */

Slugger.prototype.slug = function (value) {
  var slug = value
    .toLowerCase()
    .trim()
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/\s/g, '-');

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
      return html.replace(escape.escapeReplace, function (ch) { return escape.replacements[ch]; });
    }
  } else {
    if (escape.escapeTestNoEncode.test(html)) {
      return html.replace(escape.escapeReplaceNoEncode, function (ch) { return escape.replacements[ch]; });
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
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || '';
  return {
    replace: function(name, val) {
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, '$1');
      regex = regex.replace(name, val);
      return this;
    },
    getRegex: function() {
      return new RegExp(regex, opt);
    }
  };
}

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
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
        while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
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
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

// Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.
function rtrim(str, c, invert) {
  if (str.length === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  var suffLen = 0;

  // Step left until we fail to match the invert condition.
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
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
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

    var done = function(err) {
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

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
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
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
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

if (true) {
  module.exports = marked;
} else {}
})(this || (typeof window !== 'undefined' ? window : global));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
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
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xss */ "./node_modules/xss/lib/index.js");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_1__);

// @ts-ignore

let whiteListNormal;
let whiteListSvg;
const renderMarkdown = (content, markedOptions, hassOptions = {}) => {
    if (!whiteListNormal) {
        whiteListNormal = Object.assign(Object.assign({}, xss__WEBPACK_IMPORTED_MODULE_1___default.a.whiteList), { "ha-icon": ["icon"] });
    }
    let whiteList;
    if (hassOptions.allowSvg) {
        if (!whiteListSvg) {
            whiteListSvg = Object.assign(Object.assign({}, whiteListNormal), { svg: ["xmlns", "height", "width"], path: ["transform", "stroke", "d"] });
        }
        whiteList = whiteListSvg;
    }
    else {
        whiteList = whiteListNormal;
    }
    return xss__WEBPACK_IMPORTED_MODULE_1___default()(marked__WEBPACK_IMPORTED_MODULE_0___default()(content, markedOptions), {
        whiteList,
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
function onTag(tag, html, options) {
  // do nothing
}

/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onIgnoreTag(tag, html, options) {
  // do nothing
}

/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onIgnoreTagAttr(tag, name, value) {
  // do nothing
}

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
    if (
      !(
        value.substr(0, 7) === "http://" ||
        value.substr(0, 8) === "https://" ||
        value.substr(0, 7) === "mailto:" ||
        value.substr(0, 4) === "tel:" ||
        value[0] === "#" ||
        value[0] === "/"
      )
    ) {
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
    }
    // `url()`
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
  }

  // escape `<>"` before returns
  value = escapeAttrValue(value);
  return value;
}

// RegExp list
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
    return code[0] === "x" || code[0] === "X"
      ? String.fromCharCode(parseInt(code.substr(1), 16))
      : String.fromCharCode(parseInt(code, 10));
  });
}

/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeDangerHtml5Entities(str) {
  return str
    .replace(REGEXP_ATTR_VALUE_COLON, ":")
    .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
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
    next = function() {};
  }

  var isRemoveAllTag = !Array.isArray(tags);
  function isRemoveTag(tag) {
    if (isRemoveAllTag) return true;
    return _.indexOf(tags, tag) !== -1;
  }

  var removeList = [];
  var posStart = false;

  return {
    onIgnoreTag: function(tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([
            posStart !== false ? posStart : options.position,
            end
          ]);
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
    remove: function(html) {
      var rethtml = "";
      var lastPos = 0;
      _.forEach(removeList, function(pos) {
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
  chars = chars.filter(function(char) {
    var c = char.charCodeAt(0);
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
for (var i in DEFAULT) exports[i] = DEFAULT[i];
for (var i in parser) exports[i] = parser[i];

// using `xss` on the browser, output `filterXSS` to the globals
if (typeof window !== "undefined") {
  window.filterXSS = module.exports;
}

// using `xss` on the WebWorker, output `filterXSS` to the globals
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
          rethtml += onTag(
            tagStart,
            rethtml.length,
            currentTagName,
            currentHtml,
            isClosing(currentHtml)
          );
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
  }

  // 逐个分析字符
  for (var i = 0; i < len; i++) {
    var c = html.charAt(i);
    var v, j;
    if (tmpName === false && c === "=") {
      tmpName = html.slice(lastPos, i);
      lastPos = i + 1;
      continue;
    }
    if (tmpName !== false) {
      if (
        i === lastPos &&
        (c === '"' || c === "'") &&
        html.charAt(i - 1) === "="
      ) {
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
  if (
    (text[0] === '"' && text[text.length - 1] === '"') ||
    (text[0] === "'" && text[text.length - 1] === "'")
  ) {
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
  indexOf: function(arr, item) {
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
  forEach: function(arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function(str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function(str) {
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
      console.error(
        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
      );
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
FilterXSS.prototype.process = function(html) {
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
  var cssFilter = me.cssFilter;

  // remove invisible characters
  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  }

  // remove html comments
  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  }

  // if enable stripIgnoreTagBody
  var stripIgnoreTagBody = false;
  if (options.stripIgnoreTagBody) {
    var stripIgnoreTagBody = DEFAULT.StripTagBody(
      options.stripIgnoreTagBody,
      onIgnoreTag
    );
    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
  }

  var retHtml = parseTag(
    html,
    function(sourcePosition, position, tag, html, isClosing) {
      var info = {
        sourcePosition: sourcePosition,
        position: position,
        isClosing: isClosing,
        isWhite: whiteList.hasOwnProperty(tag)
      };

      // call `onTag()`
      var ret = onTag(tag, html, info);
      if (!isNull(ret)) return ret;

      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }

        var attrs = getAttrs(html);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr(attrs.html, function(name, value) {
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
        });

        // build new tag html
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
    },
    escapeHtml
  );

  // if enable stripIgnoreTagBody
  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }

  return retHtml;
};

module.exports = FilterXSS;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDNmZDQ5MGIwY2QxNDBjZGUwOTkud29ya2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3NmaWx0ZXIvbGliL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzZmlsdGVyL2xpYi9kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3NmaWx0ZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3NmaWx0ZXIvbGliL3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzZmlsdGVyL2xpYi91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXJrZWQvbGliL21hcmtlZC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvbWFya2Rvd25fd29ya2VyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94c3MvbGliL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hzcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hzcy9saWIvcGFyc2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94c3MvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hzcy9saWIveHNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Zyb250ZW5kX2xhdGVzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ub2RlX21vZHVsZXMvd29ya2VyaXplLWxvYWRlci9kaXN0L3JwYy13b3JrZXItbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8hLi9zcmMvcmVzb3VyY2VzL21hcmtkb3duX3dvcmtlci50c1wiKTtcbiIsIi8qKlxuICogY3NzZmlsdGVyXG4gKlxuICogQGF1dGhvciDogIHpm7c8bGVpem9uZ21pbkBnbWFpbC5jb20+XG4gKi9cblxudmFyIERFRkFVTFQgPSByZXF1aXJlKCcuL2RlZmF1bHQnKTtcbnZhciBwYXJzZVN0eWxlID0gcmVxdWlyZSgnLi9wYXJzZXInKTtcbnZhciBfID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cblxuLyoqXG4gKiDov5Tlm57lgLzmmK/lkKbkuLrnqbpcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc051bGwgKG9iaikge1xuICByZXR1cm4gKG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICog5rWF5ou36LSd5a+56LGhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBzaGFsbG93Q29weU9iamVjdCAob2JqKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICByZXRbaV0gPSBvYmpbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiDliJvlu7pDU1Pov4fmu6TlmahcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogICAtIHtPYmplY3R9IHdoaXRlTGlzdFxuICogICAtIHtGdW5jdGlvbn0gb25BdHRyXG4gKiAgIC0ge0Z1bmN0aW9ufSBvbklnbm9yZUF0dHJcbiAqICAgLSB7RnVuY3Rpb259IHNhZmVBdHRyVmFsdWVcbiAqL1xuZnVuY3Rpb24gRmlsdGVyQ1NTIChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBzaGFsbG93Q29weU9iamVjdChvcHRpb25zIHx8IHt9KTtcbiAgb3B0aW9ucy53aGl0ZUxpc3QgPSBvcHRpb25zLndoaXRlTGlzdCB8fCBERUZBVUxULndoaXRlTGlzdDtcbiAgb3B0aW9ucy5vbkF0dHIgPSBvcHRpb25zLm9uQXR0ciB8fCBERUZBVUxULm9uQXR0cjtcbiAgb3B0aW9ucy5vbklnbm9yZUF0dHIgPSBvcHRpb25zLm9uSWdub3JlQXR0ciB8fCBERUZBVUxULm9uSWdub3JlQXR0cjtcbiAgb3B0aW9ucy5zYWZlQXR0clZhbHVlID0gb3B0aW9ucy5zYWZlQXR0clZhbHVlIHx8IERFRkFVTFQuc2FmZUF0dHJWYWx1ZTtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn1cblxuRmlsdGVyQ1NTLnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyDlhbzlrrnlkITnp43lpYfokanovpPlhaVcbiAgY3NzID0gY3NzIHx8ICcnO1xuICBjc3MgPSBjc3MudG9TdHJpbmcoKTtcbiAgaWYgKCFjc3MpIHJldHVybiAnJztcblxuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgb3B0aW9ucyA9IG1lLm9wdGlvbnM7XG4gIHZhciB3aGl0ZUxpc3QgPSBvcHRpb25zLndoaXRlTGlzdDtcbiAgdmFyIG9uQXR0ciA9IG9wdGlvbnMub25BdHRyO1xuICB2YXIgb25JZ25vcmVBdHRyID0gb3B0aW9ucy5vbklnbm9yZUF0dHI7XG4gIHZhciBzYWZlQXR0clZhbHVlID0gb3B0aW9ucy5zYWZlQXR0clZhbHVlO1xuXG4gIHZhciByZXRDU1MgPSBwYXJzZVN0eWxlKGNzcywgZnVuY3Rpb24gKHNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbiwgbmFtZSwgdmFsdWUsIHNvdXJjZSkge1xuXG4gICAgdmFyIGNoZWNrID0gd2hpdGVMaXN0W25hbWVdO1xuICAgIHZhciBpc1doaXRlID0gZmFsc2U7XG4gICAgaWYgKGNoZWNrID09PSB0cnVlKSBpc1doaXRlID0gY2hlY2s7XG4gICAgZWxzZSBpZiAodHlwZW9mIGNoZWNrID09PSAnZnVuY3Rpb24nKSBpc1doaXRlID0gY2hlY2sodmFsdWUpO1xuICAgIGVsc2UgaWYgKGNoZWNrIGluc3RhbmNlb2YgUmVnRXhwKSBpc1doaXRlID0gY2hlY2sudGVzdCh2YWx1ZSk7XG4gICAgaWYgKGlzV2hpdGUgIT09IHRydWUpIGlzV2hpdGUgPSBmYWxzZTtcblxuICAgIC8vIOWmguaenOi/h+a7pOWQjiB2YWx1ZSDkuLrnqbrliJnnm7TmjqXlv73nlaVcbiAgICB2YWx1ZSA9IHNhZmVBdHRyVmFsdWUobmFtZSwgdmFsdWUpO1xuICAgIGlmICghdmFsdWUpIHJldHVybjtcblxuICAgIHZhciBvcHRzID0ge1xuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgc291cmNlUG9zaXRpb246IHNvdXJjZVBvc2l0aW9uLFxuICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICBpc1doaXRlOiBpc1doaXRlXG4gICAgfTtcblxuICAgIGlmIChpc1doaXRlKSB7XG5cbiAgICAgIHZhciByZXQgPSBvbkF0dHIobmFtZSwgdmFsdWUsIG9wdHMpO1xuICAgICAgaWYgKGlzTnVsbChyZXQpKSB7XG4gICAgICAgIHJldHVybiBuYW1lICsgJzonICsgdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdmFyIHJldCA9IG9uSWdub3JlQXR0cihuYW1lLCB2YWx1ZSwgb3B0cyk7XG4gICAgICBpZiAoIWlzTnVsbChyZXQpKSB7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG5cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXRDU1M7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyQ1NTO1xuIiwiLyoqXG4gKiBjc3NmaWx0ZXJcbiAqXG4gKiBAYXV0aG9yIOiAgembtzxsZWl6b25nbWluQGdtYWlsLmNvbT5cbiAqL1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0V2hpdGVMaXN0ICgpIHtcbiAgLy8g55m95ZCN5Y2V5YC86K+05piO77yaXG4gIC8vIHRydWU6IOWFgeiuuOivpeWxnuaAp1xuICAvLyBGdW5jdGlvbjogZnVuY3Rpb24gKHZhbCkgeyB9IOi/lOWbnnRydWXooajnpLrlhYHorrjor6XlsZ7mgKfvvIzlhbbku5blgLzlnYfooajnpLrkuI3lhYHorrhcbiAgLy8gUmVnRXhwOiByZWdleHAudGVzdCh2YWwpIOi/lOWbnnRydWXooajnpLrlhYHorrjor6XlsZ7mgKfvvIzlhbbku5blgLzlnYfooajnpLrkuI3lhYHorrhcbiAgLy8g6Zmk5LiK6Z2i5YiX5Ye655qE5YC85aSW5Z2H6KGo56S65LiN5YWB6K64XG4gIHZhciB3aGl0ZUxpc3QgPSB7fTtcblxuICB3aGl0ZUxpc3RbJ2FsaWduLWNvbnRlbnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnYWxpZ24taXRlbXMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnYWxpZ24tc2VsZiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydhbGlnbm1lbnQtYWRqdXN0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2FsaWdubWVudC1iYXNlbGluZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGJhc2VsaW5lXG4gIHdoaXRlTGlzdFsnYWxsJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2FuY2hvci1wb2ludCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydhbmltYXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnYW5pbWF0aW9uLWRlbGF5J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ2FuaW1hdGlvbi1kaXJlY3Rpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0WydhbmltYXRpb24tZHVyYXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnYW5pbWF0aW9uLWZpbGwtbW9kZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydhbmltYXRpb24taXRlcmF0aW9uLWNvdW50J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMVxuICB3aGl0ZUxpc3RbJ2FuaW1hdGlvbi1uYW1lJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2FuaW1hdGlvbi1wbGF5LXN0YXRlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogcnVubmluZ1xuICB3aGl0ZUxpc3RbJ2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBlYXNlXG4gIHdoaXRlTGlzdFsnYXppbXV0aCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGNlbnRlclxuICB3aGl0ZUxpc3RbJ2JhY2tmYWNlLXZpc2liaWxpdHknXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiB2aXNpYmxlXG4gIHdoaXRlTGlzdFsnYmFja2dyb3VuZCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2JhY2tncm91bmQtYXR0YWNobWVudCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogc2Nyb2xsXG4gIHdoaXRlTGlzdFsnYmFja2dyb3VuZC1jbGlwJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBib3JkZXItYm94XG4gIHdoaXRlTGlzdFsnYmFja2dyb3VuZC1jb2xvciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogdHJhbnNwYXJlbnRcbiAgd2hpdGVMaXN0WydiYWNrZ3JvdW5kLWltYWdlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYmFja2dyb3VuZC1vcmlnaW4nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IHBhZGRpbmctYm94XG4gIHdoaXRlTGlzdFsnYmFja2dyb3VuZC1wb3NpdGlvbiddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMCUgMCVcbiAgd2hpdGVMaXN0WydiYWNrZ3JvdW5kLXJlcGVhdCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogcmVwZWF0XG4gIHdoaXRlTGlzdFsnYmFja2dyb3VuZC1zaXplJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnYmFzZWxpbmUtc2hpZnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBiYXNlbGluZVxuICB3aGl0ZUxpc3RbJ2JpbmRpbmcnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYmxlZWQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiA2cHRcbiAgd2hpdGVMaXN0Wydib29rbWFyay1sYWJlbCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGNvbnRlbnQoKVxuICB3aGl0ZUxpc3RbJ2Jvb2ttYXJrLWxldmVsJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2Jvb2ttYXJrLXN0YXRlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogb3BlblxuICB3aGl0ZUxpc3RbJ2JvcmRlciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2JvcmRlci1ib3R0b20nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wydib3JkZXItYm90dG9tLWNvbG9yJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBjdXJyZW50IGNvbG9yXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWJvdHRvbS1zdHlsZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2JvcmRlci1ib3R0b20td2lkdGgnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ2JvcmRlci1jb2xsYXBzZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogc2VwYXJhdGVcbiAgd2hpdGVMaXN0Wydib3JkZXItY29sb3InXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wydib3JkZXItaW1hZ2UnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydib3JkZXItaW1hZ2Utb3V0c2V0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWltYWdlLXJlcGVhdCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogc3RyZXRjaFxuICB3aGl0ZUxpc3RbJ2JvcmRlci1pbWFnZS1zbGljZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMTAwJVxuICB3aGl0ZUxpc3RbJ2JvcmRlci1pbWFnZS1zb3VyY2UnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydib3JkZXItaW1hZ2Utd2lkdGgnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDFcbiAgd2hpdGVMaXN0Wydib3JkZXItbGVmdCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2JvcmRlci1sZWZ0LWNvbG9yJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBjdXJyZW50IGNvbG9yXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWxlZnQtc3R5bGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydib3JkZXItbGVmdC13aWR0aCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXJhZGl1cyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ2JvcmRlci1yaWdodCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2JvcmRlci1yaWdodC1jb2xvciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogY3VycmVudCBjb2xvclxuICB3aGl0ZUxpc3RbJ2JvcmRlci1yaWdodC1zdHlsZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2JvcmRlci1yaWdodC13aWR0aCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXNwYWNpbmcnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0Wydib3JkZXItc3R5bGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wydib3JkZXItdG9wJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXRvcC1jb2xvciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogY3VycmVudCBjb2xvclxuICB3aGl0ZUxpc3RbJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0Wydib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ2JvcmRlci10b3Atc3R5bGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydib3JkZXItdG9wLXdpZHRoJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0Wydib3JkZXItd2lkdGgnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wydib3R0b20nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnYm94LWRlY29yYXRpb24tYnJlYWsnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IHNsaWNlXG4gIHdoaXRlTGlzdFsnYm94LXNoYWRvdyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2JveC1zaXppbmcnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGNvbnRlbnQtYm94XG4gIHdoaXRlTGlzdFsnYm94LXNuYXAnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydib3gtc3VwcHJlc3MnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IHNob3dcbiAgd2hpdGVMaXN0WydicmVhay1hZnRlciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2JyZWFrLWJlZm9yZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2JyZWFrLWluc2lkZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2NhcHRpb24tc2lkZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHRvcFxuICB3aGl0ZUxpc3RbJ2NoYWlucyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydjbGVhciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2NsaXAnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnY2xpcC1wYXRoJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2NsaXAtcnVsZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbnplcm9cbiAgd2hpdGVMaXN0Wydjb2xvciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogaW1wbGVtZW50YXRpb24gZGVwZW5kZW50XG4gIHdoaXRlTGlzdFsnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnY29sdW1uLWNvdW50J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2NvbHVtbi1maWxsJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYmFsYW5jZVxuICB3aGl0ZUxpc3RbJ2NvbHVtbi1nYXAnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydjb2x1bW4tcnVsZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wydjb2x1bW4tcnVsZS1jb2xvciddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGN1cnJlbnQgY29sb3JcbiAgd2hpdGVMaXN0Wydjb2x1bW4tcnVsZS1zdHlsZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ2NvbHVtbi1ydWxlLXdpZHRoJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsnY29sdW1uLXNwYW4nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnY29sdW1uLXdpZHRoJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2NvbHVtbnMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnY29udGFpbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydjb250ZW50J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnY291bnRlci1pbmNyZW1lbnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnY291bnRlci1yZXNldCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydjb3VudGVyLXNldCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydjcm9wJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2N1ZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydjdWUtYWZ0ZXInXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnY3VlLWJlZm9yZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydjdXJzb3InXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnZGlyZWN0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbHRyXG4gIHdoaXRlTGlzdFsnZGlzcGxheSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2Rpc3BsYXktaW5zaWRlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnZGlzcGxheS1saXN0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnZGlzcGxheS1vdXRzaWRlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBpbmxpbmUtbGV2ZWxcbiAgd2hpdGVMaXN0Wydkb21pbmFudC1iYXNlbGluZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydlbGV2YXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBsZXZlbFxuICB3aGl0ZUxpc3RbJ2VtcHR5LWNlbGxzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogc2hvd1xuICB3aGl0ZUxpc3RbJ2ZpbHRlciddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydmbGV4J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2ZsZXgtYmFzaXMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnZmxleC1kaXJlY3Rpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiByb3dcbiAgd2hpdGVMaXN0WydmbGV4LWZsb3cnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnZmxleC1ncm93J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ2ZsZXgtc2hyaW5rJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMVxuICB3aGl0ZUxpc3RbJ2ZsZXgtd3JhcCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vd3JhcFxuICB3aGl0ZUxpc3RbJ2Zsb2F0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2Zsb2F0LW9mZnNldCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDAgMFxuICB3aGl0ZUxpc3RbJ2Zsb29kLWNvbG9yJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYmxhY2tcbiAgd2hpdGVMaXN0WydmbG9vZC1vcGFjaXR5J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMVxuICB3aGl0ZUxpc3RbJ2Zsb3ctZnJvbSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydmbG93LWludG8nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnZm9udCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2ZvbnQtZmFtaWx5J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbnRcbiAgd2hpdGVMaXN0Wydmb250LWZlYXR1cmUtc2V0dGluZ3MnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2ZvbnQta2VybmluZyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2ZvbnQtbGFuZ3VhZ2Utb3ZlcnJpZGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2ZvbnQtc2l6ZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsnZm9udC1zaXplLWFkanVzdCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2ZvbnQtc3RyZXRjaCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnZm9udC1zdHlsZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnZm9udC1zeW50aGVzaXMnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IHdlaWdodCBzdHlsZVxuICB3aGl0ZUxpc3RbJ2ZvbnQtdmFyaWFudCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnZm9udC12YXJpYW50LWFsdGVybmF0ZXMnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2ZvbnQtdmFyaWFudC1jYXBzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydmb250LXZhcmlhbnQtZWFzdC1hc2lhbiddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnZm9udC12YXJpYW50LWxpZ2F0dXJlcyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnZm9udC12YXJpYW50LW51bWVyaWMnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2ZvbnQtdmFyaWFudC1wb3NpdGlvbiddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnZm9udC13ZWlnaHQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2dyaWQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnZ3JpZC1hcmVhJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2dyaWQtYXV0by1jb2x1bW5zJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2dyaWQtYXV0by1mbG93J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2dyaWQtYXV0by1yb3dzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2dyaWQtY29sdW1uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2dyaWQtY29sdW1uLWVuZCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydncmlkLWNvbHVtbi1zdGFydCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydncmlkLXJvdyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydncmlkLXJvdy1lbmQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnZ3JpZC1yb3ctc3RhcnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnZ3JpZC10ZW1wbGF0ZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydncmlkLXRlbXBsYXRlLWFyZWFzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydncmlkLXRlbXBsYXRlLXJvd3MnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnaGFuZ2luZy1wdW5jdHVhdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydoZWlnaHQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydoeXBoZW5zJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbWFudWFsXG4gIHdoaXRlTGlzdFsnaWNvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydpbWFnZS1vcmllbnRhdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydpbWFnZS1yZXNvbHV0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnaW1lLW1vZGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnaW5pdGlhbC1sZXR0ZXJzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnaW5saW5lLWJveC1hbGlnbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGxhc3RcbiAgd2hpdGVMaXN0WydqdXN0aWZ5LWNvbnRlbnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnanVzdGlmeS1pdGVtcyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydqdXN0aWZ5LXNlbGYnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnbGVmdCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydsZXR0ZXItc3BhY2luZyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnbGlnaHRpbmctY29sb3InXSA9IHRydWU7IC8vIGRlZmF1bHQ6IHdoaXRlXG4gIHdoaXRlTGlzdFsnbGluZS1ib3gtY29udGFpbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGJsb2NrIGlubGluZSByZXBsYWNlZFxuICB3aGl0ZUxpc3RbJ2xpbmUtYnJlYWsnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnbGluZS1ncmlkJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbWF0Y2gtcGFyZW50XG4gIHdoaXRlTGlzdFsnbGluZS1oZWlnaHQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0WydsaW5lLXNuYXAnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnbGluZS1zdGFja2luZyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydsaW5lLXN0YWNraW5nLXJ1YnknXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBleGNsdWRlLXJ1YnlcbiAgd2hpdGVMaXN0WydsaW5lLXN0YWNraW5nLXNoaWZ0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogY29uc2lkZXItc2hpZnRzXG4gIHdoaXRlTGlzdFsnbGluZS1zdGFja2luZy1zdHJhdGVneSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGlubGluZS1saW5lLWhlaWdodFxuICB3aGl0ZUxpc3RbJ2xpc3Qtc3R5bGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydsaXN0LXN0eWxlLWltYWdlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnbGlzdC1zdHlsZS1wb3NpdGlvbiddID0gdHJ1ZTsgLy8gZGVmYXVsdDogb3V0c2lkZVxuICB3aGl0ZUxpc3RbJ2xpc3Qtc3R5bGUtdHlwZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGlzY1xuICB3aGl0ZUxpc3RbJ21hcmdpbiddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ21hcmdpbi1ib3R0b20nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydtYXJnaW4tbGVmdCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ21hcmdpbi1yaWdodCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ21hcmdpbi10b3AnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydtYXJrZXItb2Zmc2V0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ21hcmtlci1zaWRlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbGlzdC1pdGVtXG4gIHdoaXRlTGlzdFsnbWFya3MnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnbWFzayddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGJvcmRlci1ib3hcbiAgd2hpdGVMaXN0WydtYXNrLWJveCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHNlZSBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydtYXNrLWJveC1vdXRzZXQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnbWFzay1ib3gtcmVwZWF0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogc3RyZXRjaFxuICB3aGl0ZUxpc3RbJ21hc2stYm94LXNsaWNlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMCBmaWxsXG4gIHdoaXRlTGlzdFsnbWFzay1ib3gtc291cmNlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ21hc2stYm94LXdpZHRoJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ21hc2stY2xpcCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGJvcmRlci1ib3hcbiAgd2hpdGVMaXN0WydtYXNrLWltYWdlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ21hc2stb3JpZ2luJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYm9yZGVyLWJveFxuICB3aGl0ZUxpc3RbJ21hc2stcG9zaXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBjZW50ZXJcbiAgd2hpdGVMaXN0WydtYXNrLXJlcGVhdCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vLXJlcGVhdFxuICB3aGl0ZUxpc3RbJ21hc2stc2l6ZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGJvcmRlci1ib3hcbiAgd2hpdGVMaXN0WydtYXNrLXNvdXJjZS10eXBlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ21hc2stdHlwZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGx1bWluYW5jZVxuICB3aGl0ZUxpc3RbJ21heC1oZWlnaHQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydtYXgtbGluZXMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnbWF4LXdpZHRoJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnbWluLWhlaWdodCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ21pbi13aWR0aCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ21vdmUtdG8nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0WyduYXYtZG93biddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WyduYXYtaW5kZXgnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnbmF2LWxlZnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnbmF2LXJpZ2h0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ25hdi11cCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydvYmplY3QtZml0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZmlsbFxuICB3aGl0ZUxpc3RbJ29iamVjdC1wb3NpdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDUwJSA1MCVcbiAgd2hpdGVMaXN0WydvcGFjaXR5J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMVxuICB3aGl0ZUxpc3RbJ29yZGVyJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ29ycGhhbnMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAyXG4gIHdoaXRlTGlzdFsnb3V0bGluZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydvdXRsaW5lLWNvbG9yJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogaW52ZXJ0XG4gIHdoaXRlTGlzdFsnb3V0bGluZS1vZmZzZXQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnb3V0bGluZS1zdHlsZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydvdXRsaW5lLXdpZHRoJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsnb3ZlcmZsb3cnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnb3ZlcmZsb3ctd3JhcCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ292ZXJmbG93LXgnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiB2aXNpYmxlXG4gIHdoaXRlTGlzdFsnb3ZlcmZsb3cteSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHZpc2libGVcbiAgd2hpdGVMaXN0WydwYWRkaW5nJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsncGFkZGluZy1ib3R0b20nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydwYWRkaW5nLWxlZnQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydwYWRkaW5nLXJpZ2h0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsncGFkZGluZy10b3AnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydwYWdlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3BhZ2UtYnJlYWstYWZ0ZXInXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsncGFnZS1icmVhay1iZWZvcmUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsncGFnZS1icmVhay1pbnNpZGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsncGFnZS1wb2xpY3knXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBzdGFydFxuICB3aGl0ZUxpc3RbJ3BhdXNlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogaW1wbGVtZW50YXRpb24gZGVwZW5kZW50XG4gIHdoaXRlTGlzdFsncGF1c2UtYWZ0ZXInXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbnRcbiAgd2hpdGVMaXN0WydwYXVzZS1iZWZvcmUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbnRcbiAgd2hpdGVMaXN0WydwZXJzcGVjdGl2ZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydwZXJzcGVjdGl2ZS1vcmlnaW4nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiA1MCUgNTAlXG4gIHdoaXRlTGlzdFsncGl0Y2gnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0WydwaXRjaC1yYW5nZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDUwXG4gIHdoaXRlTGlzdFsncGxheS1kdXJpbmcnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsncG9zaXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBzdGF0aWNcbiAgd2hpdGVMaXN0WydwcmVzZW50YXRpb24tbGV2ZWwnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsncXVvdGVzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogdGV4dFxuICB3aGl0ZUxpc3RbJ3JlZ2lvbi1mcmFnbWVudCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydyZXNpemUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsncmVzdCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydyZXN0LWFmdGVyJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3Jlc3QtYmVmb3JlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3JpY2huZXNzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogNTBcbiAgd2hpdGVMaXN0WydyaWdodCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wydyb3RhdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0Wydyb3RhdGlvbi1wb2ludCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDUwJSA1MCVcbiAgd2hpdGVMaXN0WydydWJ5LWFsaWduJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3J1YnktbWVyZ2UnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBzZXBhcmF0ZVxuICB3aGl0ZUxpc3RbJ3J1YnktcG9zaXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBiZWZvcmVcbiAgd2hpdGVMaXN0WydzaGFwZS1pbWFnZS10aHJlc2hvbGQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwLjBcbiAgd2hpdGVMaXN0WydzaGFwZS1vdXRzaWRlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3NoYXBlLW1hcmdpbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydzaXplJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3NwZWFrJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3NwZWFrLWFzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnc3BlYWstaGVhZGVyJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogb25jZVxuICB3aGl0ZUxpc3RbJ3NwZWFrLW51bWVyYWwnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBjb250aW51b3VzXG4gIHdoaXRlTGlzdFsnc3BlYWstcHVuY3R1YXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnc3BlZWNoLXJhdGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0WydzdHJlc3MnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiA1MFxuICB3aGl0ZUxpc3RbJ3N0cmluZy1zZXQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsndGFiLXNpemUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiA4XG4gIHdoaXRlTGlzdFsndGFibGUtbGF5b3V0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3RleHQtYWxpZ24nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IHN0YXJ0XG4gIHdoaXRlTGlzdFsndGV4dC1hbGlnbi1sYXN0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsndGV4dC1jb21iaW5lLXVwcmlnaHQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wyd0ZXh0LWRlY29yYXRpb24nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wyd0ZXh0LWRlY29yYXRpb24tY29sb3InXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGN1cnJlbnRDb2xvclxuICB3aGl0ZUxpc3RbJ3RleHQtZGVjb3JhdGlvbi1saW5lJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsndGV4dC1kZWNvcmF0aW9uLXNraXAnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG9iamVjdHNcbiAgd2hpdGVMaXN0Wyd0ZXh0LWRlY29yYXRpb24tc3R5bGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IHNvbGlkXG4gIHdoaXRlTGlzdFsndGV4dC1lbXBoYXNpcyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ3RleHQtZW1waGFzaXMtY29sb3InXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGN1cnJlbnRDb2xvclxuICB3aGl0ZUxpc3RbJ3RleHQtZW1waGFzaXMtcG9zaXRpb24nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG92ZXIgcmlnaHRcbiAgd2hpdGVMaXN0Wyd0ZXh0LWVtcGhhc2lzLXN0eWxlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsndGV4dC1oZWlnaHQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wyd0ZXh0LWluZGVudCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ3RleHQtanVzdGlmeSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3RleHQtb3JpZW50YXRpb24nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG1peGVkXG4gIHdoaXRlTGlzdFsndGV4dC1vdmVyZmxvdyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogY2xpcFxuICB3aGl0ZUxpc3RbJ3RleHQtc2hhZG93J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsndGV4dC1zcGFjZS1jb2xsYXBzZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogY29sbGFwc2VcbiAgd2hpdGVMaXN0Wyd0ZXh0LXRyYW5zZm9ybSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3RleHQtdW5kZXJsaW5lLXBvc2l0aW9uJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsndGV4dC13cmFwJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wyd0b3AnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsndHJhbnNmb3JtJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3RyYW5zZm9ybS1vcmlnaW4nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiA1MCUgNTAlIDBcbiAgd2hpdGVMaXN0Wyd0cmFuc2Zvcm0tc3R5bGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBmbGF0XG4gIHdoaXRlTGlzdFsndHJhbnNpdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wyd0cmFuc2l0aW9uLWRlbGF5J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMHNcbiAgd2hpdGVMaXN0Wyd0cmFuc2l0aW9uLWR1cmF0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMHNcbiAgd2hpdGVMaXN0Wyd0cmFuc2l0aW9uLXByb3BlcnR5J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYWxsXG4gIHdoaXRlTGlzdFsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBlYXNlXG4gIHdoaXRlTGlzdFsndW5pY29kZS1iaWRpJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsndmVydGljYWwtYWxpZ24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBiYXNlbGluZVxuICB3aGl0ZUxpc3RbJ3Zpc2liaWxpdHknXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiB2aXNpYmxlXG4gIHdoaXRlTGlzdFsndm9pY2UtYmFsYW5jZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGNlbnRlclxuICB3aGl0ZUxpc3RbJ3ZvaWNlLWR1cmF0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3ZvaWNlLWZhbWlseSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGltcGxlbWVudGF0aW9uIGRlcGVuZGVudFxuICB3aGl0ZUxpc3RbJ3ZvaWNlLXBpdGNoJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsndm9pY2UtcmFuZ2UnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0Wyd2b2ljZS1yYXRlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsndm9pY2Utc3RyZXNzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsndm9pY2Utdm9sdW1lJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsndm9sdW1lJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsnd2hpdGUtc3BhY2UnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wyd3aWRvd3MnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAyXG4gIHdoaXRlTGlzdFsnd2lkdGgnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wyd3aWxsLWNoYW5nZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wyd3b3JkLWJyZWFrJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wyd3b3JkLXNwYWNpbmcnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ3dvcmQtd3JhcCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnd3JhcC1mbG93J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3dyYXAtdGhyb3VnaCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHdyYXBcbiAgd2hpdGVMaXN0Wyd3cml0aW5nLW1vZGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBob3Jpem9udGFsLXRiXG4gIHdoaXRlTGlzdFsnei1pbmRleCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cblxuICByZXR1cm4gd2hpdGVMaXN0O1xufVxuXG5cbi8qKlxuICog5Yy56YWN5Yiw55m95ZCN5Y2V5LiK55qE5LiA5Liq5bGe5oCn5pe2XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb25BdHRyIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAvLyBkbyBub3RoaW5nXG59XG5cbi8qKlxuICog5Yy56YWN5Yiw5LiN5Zyo55m95ZCN5Y2V5LiK55qE5LiA5Liq5bGe5oCn5pe2XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb25JZ25vcmVBdHRyIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAvLyBkbyBub3RoaW5nXG59XG5cbnZhciBSRUdFWFBfVVJMX0pBVkFTQ1JJUFQgPSAvamF2YXNjcmlwdFxccypcXDovaW1nO1xuXG4vKipcbiAqIOi/h+a7pOWxnuaAp+WAvFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc2FmZUF0dHJWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAoUkVHRVhQX1VSTF9KQVZBU0NSSVBULnRlc3QodmFsdWUpKSByZXR1cm4gJyc7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuXG5leHBvcnRzLndoaXRlTGlzdCA9IGdldERlZmF1bHRXaGl0ZUxpc3QoKTtcbmV4cG9ydHMuZ2V0RGVmYXVsdFdoaXRlTGlzdCA9IGdldERlZmF1bHRXaGl0ZUxpc3Q7XG5leHBvcnRzLm9uQXR0ciA9IG9uQXR0cjtcbmV4cG9ydHMub25JZ25vcmVBdHRyID0gb25JZ25vcmVBdHRyO1xuZXhwb3J0cy5zYWZlQXR0clZhbHVlID0gc2FmZUF0dHJWYWx1ZTtcbiIsIi8qKlxuICogY3NzZmlsdGVyXG4gKlxuICogQGF1dGhvciDogIHpm7c8bGVpem9uZ21pbkBnbWFpbC5jb20+XG4gKi9cblxudmFyIERFRkFVTFQgPSByZXF1aXJlKCcuL2RlZmF1bHQnKTtcbnZhciBGaWx0ZXJDU1MgPSByZXF1aXJlKCcuL2NzcycpO1xuXG5cbi8qKlxuICogWFNT6L+H5rukXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNzcyDopoHov4fmu6TnmoRDU1Pku6PnoIFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOmAiemhue+8mndoaXRlTGlzdCwgb25BdHRyLCBvbklnbm9yZUF0dHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmlsdGVyQ1NTIChodG1sLCBvcHRpb25zKSB7XG4gIHZhciB4c3MgPSBuZXcgRmlsdGVyQ1NTKG9wdGlvbnMpO1xuICByZXR1cm4geHNzLnByb2Nlc3MoaHRtbCk7XG59XG5cblxuLy8g6L6T5Ye6XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmaWx0ZXJDU1M7XG5leHBvcnRzLkZpbHRlckNTUyA9IEZpbHRlckNTUztcbmZvciAodmFyIGkgaW4gREVGQVVMVCkgZXhwb3J0c1tpXSA9IERFRkFVTFRbaV07XG5cbi8vIOWcqOa1j+iniOWZqOerr+S9v+eUqFxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5maWx0ZXJDU1MgPSBtb2R1bGUuZXhwb3J0cztcbn1cbiIsIi8qKlxuICogY3NzZmlsdGVyXG4gKlxuICogQGF1dGhvciDogIHpm7c8bGVpem9uZ21pbkBnbWFpbC5jb20+XG4gKi9cblxudmFyIF8gPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuXG4vKipcbiAqIOino+aekHN0eWxlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb25BdHRyIOWkhOeQhuWxnuaAp+eahOWHveaVsFxuICogICDlj4LmlbDmoLzlvI/vvJogZnVuY3Rpb24gKHNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbiwgbmFtZSwgdmFsdWUsIHNvdXJjZSlcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcGFyc2VTdHlsZSAoY3NzLCBvbkF0dHIpIHtcbiAgY3NzID0gXy50cmltUmlnaHQoY3NzKTtcbiAgaWYgKGNzc1tjc3MubGVuZ3RoIC0gMV0gIT09ICc7JykgY3NzICs9ICc7JztcbiAgdmFyIGNzc0xlbmd0aCA9IGNzcy5sZW5ndGg7XG4gIHZhciBpc1BhcmVudGhlc2lzT3BlbiA9IGZhbHNlO1xuICB2YXIgbGFzdFBvcyA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJldENTUyA9ICcnO1xuXG4gIGZ1bmN0aW9uIGFkZE5ld0F0dHIgKCkge1xuICAgIC8vIOWmguaenOayoeacieato+W4uOeahOmXreWQiOWchuaLrOWPt++8jOWImeebtOaOpeW/veeVpeW9k+WJjeWxnuaAp1xuICAgIGlmICghaXNQYXJlbnRoZXNpc09wZW4pIHtcbiAgICAgIHZhciBzb3VyY2UgPSBfLnRyaW0oY3NzLnNsaWNlKGxhc3RQb3MsIGkpKTtcbiAgICAgIHZhciBqID0gc291cmNlLmluZGV4T2YoJzonKTtcbiAgICAgIGlmIChqICE9PSAtMSkge1xuICAgICAgICB2YXIgbmFtZSA9IF8udHJpbShzb3VyY2Uuc2xpY2UoMCwgaikpO1xuICAgICAgICB2YXIgdmFsdWUgPSBfLnRyaW0oc291cmNlLnNsaWNlKGogKyAxKSk7XG4gICAgICAgIC8vIOW/hemhu+acieWxnuaAp+WQjeensFxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgIHZhciByZXQgPSBvbkF0dHIobGFzdFBvcywgcmV0Q1NTLmxlbmd0aCwgbmFtZSwgdmFsdWUsIHNvdXJjZSk7XG4gICAgICAgICAgaWYgKHJldCkgcmV0Q1NTICs9IHJldCArICc7ICc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdFBvcyA9IGkgKyAxO1xuICB9XG5cbiAgZm9yICg7IGkgPCBjc3NMZW5ndGg7IGkrKykge1xuICAgIHZhciBjID0gY3NzW2ldO1xuICAgIGlmIChjID09PSAnLycgJiYgY3NzW2kgKyAxXSA9PT0gJyonKSB7XG4gICAgICAvLyDlpIfms6jlvIDlp4tcbiAgICAgIHZhciBqID0gY3NzLmluZGV4T2YoJyovJywgaSArIDIpO1xuICAgICAgLy8g5aaC5p6c5rKh5pyJ5q2j5bi455qE5aSH5rOo57uT5p2f77yM5YiZ5ZCO6Z2i55qE6YOo5YiG5YWo6YOo6Lez6L+HXG4gICAgICBpZiAoaiA9PT0gLTEpIGJyZWFrO1xuICAgICAgLy8g55u05o6l5bCG5b2T5YmN5L2N572u6LCD5Yiw5aSH5rOo57uT5bC+77yM5bm25LiU5Yid5aeL5YyW54q25oCBXG4gICAgICBpID0gaiArIDE7XG4gICAgICBsYXN0UG9zID0gaSArIDE7XG4gICAgICBpc1BhcmVudGhlc2lzT3BlbiA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gJygnKSB7XG4gICAgICBpc1BhcmVudGhlc2lzT3BlbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjID09PSAnKScpIHtcbiAgICAgIGlzUGFyZW50aGVzaXNPcGVuID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChjID09PSAnOycpIHtcbiAgICAgIGlmIChpc1BhcmVudGhlc2lzT3Blbikge1xuICAgICAgICAvLyDlnKjlnIbmi6zlj7fph4zpnaLvvIzlv73nlaVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZE5ld0F0dHIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGMgPT09ICdcXG4nKSB7XG4gICAgICBhZGROZXdBdHRyKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF8udHJpbShyZXRDU1MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlU3R5bGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gKGFyciwgaXRlbSkge1xuICAgIHZhciBpLCBqO1xuICAgIGlmIChBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgICAgcmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwLCBqID0gYXJyLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgaWYgKGFycltpXSA9PT0gaXRlbSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9LFxuICBmb3JFYWNoOiBmdW5jdGlvbiAoYXJyLCBmbiwgc2NvcGUpIHtcbiAgICB2YXIgaSwgajtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICAgIHJldHVybiBhcnIuZm9yRWFjaChmbiwgc2NvcGUpO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwLCBqID0gYXJyLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgZm4uY2FsbChzY29wZSwgYXJyW2ldLCBpLCBhcnIpO1xuICAgIH1cbiAgfSxcbiAgdHJpbTogZnVuY3Rpb24gKHN0cikge1xuICAgIGlmIChTdHJpbmcucHJvdG90eXBlLnRyaW0pIHtcbiAgICAgIHJldHVybiBzdHIudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCAnJyk7XG4gIH0sXG4gIHRyaW1SaWdodDogZnVuY3Rpb24gKHN0cikge1xuICAgIGlmIChTdHJpbmcucHJvdG90eXBlLnRyaW1SaWdodCkge1xuICAgICAgcmV0dXJuIHN0ci50cmltUmlnaHQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxzKiQpL2csICcnKTtcbiAgfVxufTtcbiIsIi8qKlxuICogbWFya2VkIC0gYSBtYXJrZG93biBwYXJzZXJcbiAqIENvcHlyaWdodCAoYykgMjAxMS0yMDE4LCBDaHJpc3RvcGhlciBKZWZmcmV5LiAoTUlUIExpY2Vuc2VkKVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcmtlZGpzL21hcmtlZFxuICovXG5cbjsoZnVuY3Rpb24ocm9vdCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEJsb2NrLUxldmVsIEdyYW1tYXJcbiAqL1xuXG52YXIgYmxvY2sgPSB7XG4gIG5ld2xpbmU6IC9eXFxuKy8sXG4gIGNvZGU6IC9eKCB7NH1bXlxcbl0rXFxuKikrLyxcbiAgZmVuY2VzOiBub29wLFxuICBocjogL14gezAsM30oKD86LSAqKXszLH18KD86XyAqKXszLH18KD86XFwqICopezMsfSkoPzpcXG4rfCQpLyxcbiAgaGVhZGluZzogL14gKigjezEsNn0pICooW15cXG5dKz8pICooPzojKyAqKT8oPzpcXG4rfCQpLyxcbiAgbnB0YWJsZTogbm9vcCxcbiAgYmxvY2txdW90ZTogL14oIHswLDN9PiA/KHBhcmFncmFwaHxbXlxcbl0qKSg/OlxcbnwkKSkrLyxcbiAgbGlzdDogL14oIHswLDN9KShidWxsKSBbXFxzXFxTXSs/KD86aHJ8ZGVmfFxcbnsyLH0oPyEgKSg/IVxcMWJ1bGwgKVxcbip8XFxzKiQpLyxcbiAgaHRtbDogJ14gezAsM30oPzonIC8vIG9wdGlvbmFsIGluZGVudGF0aW9uXG4gICAgKyAnPChzY3JpcHR8cHJlfHN0eWxlKVtcXFxccz5dW1xcXFxzXFxcXFNdKj8oPzo8L1xcXFwxPlteXFxcXG5dKlxcXFxuK3wkKScgLy8gKDEpXG4gICAgKyAnfGNvbW1lbnRbXlxcXFxuXSooXFxcXG4rfCQpJyAvLyAoMilcbiAgICArICd8PFxcXFw/W1xcXFxzXFxcXFNdKj9cXFxcPz5cXFxcbionIC8vICgzKVxuICAgICsgJ3w8IVtBLVpdW1xcXFxzXFxcXFNdKj8+XFxcXG4qJyAvLyAoNClcbiAgICArICd8PCFcXFxcW0NEQVRBXFxcXFtbXFxcXHNcXFxcU10qP1xcXFxdXFxcXF0+XFxcXG4qJyAvLyAoNSlcbiAgICArICd8PC8/KHRhZykoPzogK3xcXFxcbnwvPz4pW1xcXFxzXFxcXFNdKj8oPzpcXFxcbnsyLH18JCknIC8vICg2KVxuICAgICsgJ3w8KD8hc2NyaXB0fHByZXxzdHlsZSkoW2Etel1bXFxcXHctXSopKD86YXR0cmlidXRlKSo/ICovPz4oPz1bIFxcXFx0XSooPzpcXFxcbnwkKSlbXFxcXHNcXFxcU10qPyg/OlxcXFxuezIsfXwkKScgLy8gKDcpIG9wZW4gdGFnXG4gICAgKyAnfDwvKD8hc2NyaXB0fHByZXxzdHlsZSlbYS16XVtcXFxcdy1dKlxcXFxzKj4oPz1bIFxcXFx0XSooPzpcXFxcbnwkKSlbXFxcXHNcXFxcU10qPyg/OlxcXFxuezIsfXwkKScgLy8gKDcpIGNsb3NpbmcgdGFnXG4gICAgKyAnKScsXG4gIGRlZjogL14gezAsM31cXFsobGFiZWwpXFxdOiAqXFxuPyAqPD8oW15cXHM+XSspPj8oPzooPzogK1xcbj8gKnwgKlxcbiAqKSh0aXRsZSkpPyAqKD86XFxuK3wkKS8sXG4gIHRhYmxlOiBub29wLFxuICBsaGVhZGluZzogL14oW15cXG5dKylcXG4gKig9fC0pezIsfSAqKD86XFxuK3wkKS8sXG4gIHBhcmFncmFwaDogL14oW15cXG5dKyg/Olxcbig/IWhyfGhlYWRpbmd8bGhlYWRpbmd8IHswLDN9Pnw8XFwvPyg/OnRhZykoPzogK3xcXG58XFwvPz4pfDwoPzpzY3JpcHR8cHJlfHN0eWxlfCEtLSkpW15cXG5dKykqKS8sXG4gIHRleHQ6IC9eW15cXG5dKy9cbn07XG5cbmJsb2NrLl9sYWJlbCA9IC8oPyFcXHMqXFxdKSg/OlxcXFxbXFxbXFxdXXxbXlxcW1xcXV0pKy87XG5ibG9jay5fdGl0bGUgPSAvKD86XCIoPzpcXFxcXCI/fFteXCJcXFxcXSkqXCJ8J1teJ1xcbl0qKD86XFxuW14nXFxuXSspKlxcbj8nfFxcKFteKCldKlxcKSkvO1xuYmxvY2suZGVmID0gZWRpdChibG9jay5kZWYpXG4gIC5yZXBsYWNlKCdsYWJlbCcsIGJsb2NrLl9sYWJlbClcbiAgLnJlcGxhY2UoJ3RpdGxlJywgYmxvY2suX3RpdGxlKVxuICAuZ2V0UmVnZXgoKTtcblxuYmxvY2suYnVsbGV0ID0gLyg/OlsqKy1dfFxcZHsxLDl9XFwuKS87XG5ibG9jay5pdGVtID0gL14oICopKGJ1bGwpID9bXlxcbl0qKD86XFxuKD8hXFwxYnVsbCA/KVteXFxuXSopKi87XG5ibG9jay5pdGVtID0gZWRpdChibG9jay5pdGVtLCAnZ20nKVxuICAucmVwbGFjZSgvYnVsbC9nLCBibG9jay5idWxsZXQpXG4gIC5nZXRSZWdleCgpO1xuXG5ibG9jay5saXN0ID0gZWRpdChibG9jay5saXN0KVxuICAucmVwbGFjZSgvYnVsbC9nLCBibG9jay5idWxsZXQpXG4gIC5yZXBsYWNlKCdocicsICdcXFxcbisoPz1cXFxcMT8oPzooPzotICopezMsfXwoPzpfICopezMsfXwoPzpcXFxcKiAqKXszLH0pKD86XFxcXG4rfCQpKScpXG4gIC5yZXBsYWNlKCdkZWYnLCAnXFxcXG4rKD89JyArIGJsb2NrLmRlZi5zb3VyY2UgKyAnKScpXG4gIC5nZXRSZWdleCgpO1xuXG5ibG9jay5fdGFnID0gJ2FkZHJlc3N8YXJ0aWNsZXxhc2lkZXxiYXNlfGJhc2Vmb250fGJsb2NrcXVvdGV8Ym9keXxjYXB0aW9uJ1xuICArICd8Y2VudGVyfGNvbHxjb2xncm91cHxkZHxkZXRhaWxzfGRpYWxvZ3xkaXJ8ZGl2fGRsfGR0fGZpZWxkc2V0fGZpZ2NhcHRpb24nXG4gICsgJ3xmaWd1cmV8Zm9vdGVyfGZvcm18ZnJhbWV8ZnJhbWVzZXR8aFsxLTZdfGhlYWR8aGVhZGVyfGhyfGh0bWx8aWZyYW1lJ1xuICArICd8bGVnZW5kfGxpfGxpbmt8bWFpbnxtZW51fG1lbnVpdGVtfG1ldGF8bmF2fG5vZnJhbWVzfG9sfG9wdGdyb3VwfG9wdGlvbidcbiAgKyAnfHB8cGFyYW18c2VjdGlvbnxzb3VyY2V8c3VtbWFyeXx0YWJsZXx0Ym9keXx0ZHx0Zm9vdHx0aHx0aGVhZHx0aXRsZXx0cidcbiAgKyAnfHRyYWNrfHVsJztcbmJsb2NrLl9jb21tZW50ID0gLzwhLS0oPyEtPz4pW1xcc1xcU10qPy0tPi87XG5ibG9jay5odG1sID0gZWRpdChibG9jay5odG1sLCAnaScpXG4gIC5yZXBsYWNlKCdjb21tZW50JywgYmxvY2suX2NvbW1lbnQpXG4gIC5yZXBsYWNlKCd0YWcnLCBibG9jay5fdGFnKVxuICAucmVwbGFjZSgnYXR0cmlidXRlJywgLyArW2EtekEtWjpfXVtcXHcuOi1dKig/OiAqPSAqXCJbXlwiXFxuXSpcInwgKj0gKidbXidcXG5dKid8ICo9ICpbXlxcc1wiJz08PmBdKyk/LylcbiAgLmdldFJlZ2V4KCk7XG5cbmJsb2NrLnBhcmFncmFwaCA9IGVkaXQoYmxvY2sucGFyYWdyYXBoKVxuICAucmVwbGFjZSgnaHInLCBibG9jay5ocilcbiAgLnJlcGxhY2UoJ2hlYWRpbmcnLCBibG9jay5oZWFkaW5nKVxuICAucmVwbGFjZSgnbGhlYWRpbmcnLCBibG9jay5saGVhZGluZylcbiAgLnJlcGxhY2UoJ3RhZycsIGJsb2NrLl90YWcpIC8vIHBhcnMgY2FuIGJlIGludGVycnVwdGVkIGJ5IHR5cGUgKDYpIGh0bWwgYmxvY2tzXG4gIC5nZXRSZWdleCgpO1xuXG5ibG9jay5ibG9ja3F1b3RlID0gZWRpdChibG9jay5ibG9ja3F1b3RlKVxuICAucmVwbGFjZSgncGFyYWdyYXBoJywgYmxvY2sucGFyYWdyYXBoKVxuICAuZ2V0UmVnZXgoKTtcblxuLyoqXG4gKiBOb3JtYWwgQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLm5vcm1hbCA9IG1lcmdlKHt9LCBibG9jayk7XG5cbi8qKlxuICogR0ZNIEJsb2NrIEdyYW1tYXJcbiAqL1xuXG5ibG9jay5nZm0gPSBtZXJnZSh7fSwgYmxvY2subm9ybWFsLCB7XG4gIGZlbmNlczogL14gezAsM30oYHszLH18fnszLH0pKFteYFxcbl0qKVxcbig/OnwoW1xcc1xcU10qPylcXG4pKD86IHswLDN9XFwxW35gXSogKig/Olxcbit8JCl8JCkvLFxuICBwYXJhZ3JhcGg6IC9eLyxcbiAgaGVhZGluZzogL14gKigjezEsNn0pICsoW15cXG5dKz8pICojKiAqKD86XFxuK3wkKS9cbn0pO1xuXG5ibG9jay5nZm0ucGFyYWdyYXBoID0gZWRpdChibG9jay5wYXJhZ3JhcGgpXG4gIC5yZXBsYWNlKCcoPyEnLCAnKD8hJ1xuICAgICsgYmxvY2suZ2ZtLmZlbmNlcy5zb3VyY2UucmVwbGFjZSgnXFxcXDEnLCAnXFxcXDInKSArICd8J1xuICAgICsgYmxvY2subGlzdC5zb3VyY2UucmVwbGFjZSgnXFxcXDEnLCAnXFxcXDMnKSArICd8JylcbiAgLmdldFJlZ2V4KCk7XG5cbi8qKlxuICogR0ZNICsgVGFibGVzIEJsb2NrIEdyYW1tYXJcbiAqL1xuXG5ibG9jay50YWJsZXMgPSBtZXJnZSh7fSwgYmxvY2suZ2ZtLCB7XG4gIG5wdGFibGU6IC9eICooW158XFxuIF0uKlxcfC4qKVxcbiAqKFstOl0rICpcXHxbLXwgOl0qKSg/OlxcbigoPzouKltePlxcbiBdLiooPzpcXG58JCkpKilcXG4qfCQpLyxcbiAgdGFibGU6IC9eICpcXHwoLispXFxuICpcXHw/KCAqWy06XStbLXwgOl0qKSg/OlxcbigoPzogKltePlxcbiBdLiooPzpcXG58JCkpKilcXG4qfCQpL1xufSk7XG5cbi8qKlxuICogUGVkYW50aWMgZ3JhbW1hclxuICovXG5cbmJsb2NrLnBlZGFudGljID0gbWVyZ2Uoe30sIGJsb2NrLm5vcm1hbCwge1xuICBodG1sOiBlZGl0KFxuICAgICdeICooPzpjb21tZW50ICooPzpcXFxcbnxcXFxccyokKSdcbiAgICArICd8PCh0YWcpW1xcXFxzXFxcXFNdKz88L1xcXFwxPiAqKD86XFxcXG57Mix9fFxcXFxzKiQpJyAvLyBjbG9zZWQgdGFnXG4gICAgKyAnfDx0YWcoPzpcIlteXCJdKlwifFxcJ1teXFwnXSpcXCd8XFxcXHNbXlxcJ1wiLz5cXFxcc10qKSo/Lz8+ICooPzpcXFxcbnsyLH18XFxcXHMqJCkpJylcbiAgICAucmVwbGFjZSgnY29tbWVudCcsIGJsb2NrLl9jb21tZW50KVxuICAgIC5yZXBsYWNlKC90YWcvZywgJyg/ISg/OidcbiAgICAgICsgJ2F8ZW18c3Ryb25nfHNtYWxsfHN8Y2l0ZXxxfGRmbnxhYmJyfGRhdGF8dGltZXxjb2RlfHZhcnxzYW1wfGtiZHxzdWInXG4gICAgICArICd8c3VwfGl8Ynx1fG1hcmt8cnVieXxydHxycHxiZGl8YmRvfHNwYW58YnJ8d2JyfGluc3xkZWx8aW1nKSdcbiAgICAgICsgJ1xcXFxiKVxcXFx3Kyg/ITp8W15cXFxcd1xcXFxzQF0qQClcXFxcYicpXG4gICAgLmdldFJlZ2V4KCksXG4gIGRlZjogL14gKlxcWyhbXlxcXV0rKVxcXTogKjw/KFteXFxzPl0rKT4/KD86ICsoW1wiKF1bXlxcbl0rW1wiKV0pKT8gKig/Olxcbit8JCkvXG59KTtcblxuLyoqXG4gKiBCbG9jayBMZXhlclxuICovXG5cbmZ1bmN0aW9uIExleGVyKG9wdGlvbnMpIHtcbiAgdGhpcy50b2tlbnMgPSBbXTtcbiAgdGhpcy50b2tlbnMubGlua3MgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5ydWxlcyA9IGJsb2NrLm5vcm1hbDtcblxuICBpZiAodGhpcy5vcHRpb25zLnBlZGFudGljKSB7XG4gICAgdGhpcy5ydWxlcyA9IGJsb2NrLnBlZGFudGljO1xuICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRhYmxlcykge1xuICAgICAgdGhpcy5ydWxlcyA9IGJsb2NrLnRhYmxlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcyA9IGJsb2NrLmdmbTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBFeHBvc2UgQmxvY2sgUnVsZXNcbiAqL1xuXG5MZXhlci5ydWxlcyA9IGJsb2NrO1xuXG4vKipcbiAqIFN0YXRpYyBMZXggTWV0aG9kXG4gKi9cblxuTGV4ZXIubGV4ID0gZnVuY3Rpb24oc3JjLCBvcHRpb25zKSB7XG4gIHZhciBsZXhlciA9IG5ldyBMZXhlcihvcHRpb25zKTtcbiAgcmV0dXJuIGxleGVyLmxleChzcmMpO1xufTtcblxuLyoqXG4gKiBQcmVwcm9jZXNzaW5nXG4gKi9cblxuTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uKHNyYykge1xuICBzcmMgPSBzcmNcbiAgICAucmVwbGFjZSgvXFxyXFxufFxcci9nLCAnXFxuJylcbiAgICAucmVwbGFjZSgvXFx0L2csICcgICAgJylcbiAgICAucmVwbGFjZSgvXFx1MDBhMC9nLCAnICcpXG4gICAgLnJlcGxhY2UoL1xcdTI0MjQvZywgJ1xcbicpO1xuXG4gIHJldHVybiB0aGlzLnRva2VuKHNyYywgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIExleGluZ1xuICovXG5cbkxleGVyLnByb3RvdHlwZS50b2tlbiA9IGZ1bmN0aW9uKHNyYywgdG9wKSB7XG4gIHNyYyA9IHNyYy5yZXBsYWNlKC9eICskL2dtLCAnJyk7XG4gIHZhciBuZXh0LFxuICAgICAgbG9vc2UsXG4gICAgICBjYXAsXG4gICAgICBidWxsLFxuICAgICAgYixcbiAgICAgIGl0ZW0sXG4gICAgICBsaXN0U3RhcnQsXG4gICAgICBsaXN0SXRlbXMsXG4gICAgICB0LFxuICAgICAgc3BhY2UsXG4gICAgICBpLFxuICAgICAgdGFnLFxuICAgICAgbCxcbiAgICAgIGlzb3JkZXJlZCxcbiAgICAgIGlzdGFzayxcbiAgICAgIGlzY2hlY2tlZDtcblxuICB3aGlsZSAoc3JjKSB7XG4gICAgLy8gbmV3bGluZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLm5ld2xpbmUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgaWYgKGNhcFswXS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdzcGFjZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29kZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmNvZGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgY2FwID0gY2FwWzBdLnJlcGxhY2UoL14gezR9L2dtLCAnJyk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgICB0ZXh0OiAhdGhpcy5vcHRpb25zLnBlZGFudGljXG4gICAgICAgICAgPyBydHJpbShjYXAsICdcXG4nKVxuICAgICAgICAgIDogY2FwXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGZlbmNlcyAoZ2ZtKVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmZlbmNlcy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgICBsYW5nOiBjYXBbMl0gPyBjYXBbMl0udHJpbSgpIDogY2FwWzJdLFxuICAgICAgICB0ZXh0OiBjYXBbM10gfHwgJydcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gaGVhZGluZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmhlYWRpbmcuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICAgICAgZGVwdGg6IGNhcFsxXS5sZW5ndGgsXG4gICAgICAgIHRleHQ6IGNhcFsyXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWJsZSBubyBsZWFkaW5nIHBpcGUgKGdmbSlcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5ucHRhYmxlLmV4ZWMoc3JjKSkge1xuICAgICAgaXRlbSA9IHtcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgaGVhZGVyOiBzcGxpdENlbGxzKGNhcFsxXS5yZXBsYWNlKC9eICp8ICpcXHwgKiQvZywgJycpKSxcbiAgICAgICAgYWxpZ246IGNhcFsyXS5yZXBsYWNlKC9eICp8XFx8ICokL2csICcnKS5zcGxpdCgvICpcXHwgKi8pLFxuICAgICAgICBjZWxsczogY2FwWzNdID8gY2FwWzNdLnJlcGxhY2UoL1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpIDogW11cbiAgICAgIH07XG5cbiAgICAgIGlmIChpdGVtLmhlYWRlci5sZW5ndGggPT09IGl0ZW0uYWxpZ24ubGVuZ3RoKSB7XG4gICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uYWxpZ24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoL14gKi0rOiAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdyaWdodCc7XG4gICAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rOiAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdjZW50ZXInO1xuICAgICAgICAgIH0gZWxzZSBpZiAoL14gKjotKyAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdsZWZ0JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5hbGlnbltpXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpdGVtLmNlbGxzW2ldID0gc3BsaXRDZWxscyhpdGVtLmNlbGxzW2ldLCBpdGVtLmhlYWRlci5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChpdGVtKTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBoclxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmhyLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnaHInXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGJsb2NrcXVvdGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5ibG9ja3F1b3RlLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdibG9ja3F1b3RlX3N0YXJ0J1xuICAgICAgfSk7XG5cbiAgICAgIGNhcCA9IGNhcFswXS5yZXBsYWNlKC9eICo+ID8vZ20sICcnKTtcblxuICAgICAgLy8gUGFzcyBgdG9wYCB0byBrZWVwIHRoZSBjdXJyZW50XG4gICAgICAvLyBcInRvcGxldmVsXCIgc3RhdGUuIFRoaXMgaXMgZXhhY3RseVxuICAgICAgLy8gaG93IG1hcmtkb3duLnBsIHdvcmtzLlxuICAgICAgdGhpcy50b2tlbihjYXAsIHRvcCk7XG5cbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnYmxvY2txdW90ZV9lbmQnXG4gICAgICB9KTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gbGlzdFxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmxpc3QuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgYnVsbCA9IGNhcFsyXTtcbiAgICAgIGlzb3JkZXJlZCA9IGJ1bGwubGVuZ3RoID4gMTtcblxuICAgICAgbGlzdFN0YXJ0ID0ge1xuICAgICAgICB0eXBlOiAnbGlzdF9zdGFydCcsXG4gICAgICAgIG9yZGVyZWQ6IGlzb3JkZXJlZCxcbiAgICAgICAgc3RhcnQ6IGlzb3JkZXJlZCA/ICtidWxsIDogJycsXG4gICAgICAgIGxvb3NlOiBmYWxzZVxuICAgICAgfTtcblxuICAgICAgdGhpcy50b2tlbnMucHVzaChsaXN0U3RhcnQpO1xuXG4gICAgICAvLyBHZXQgZWFjaCB0b3AtbGV2ZWwgaXRlbS5cbiAgICAgIGNhcCA9IGNhcFswXS5tYXRjaCh0aGlzLnJ1bGVzLml0ZW0pO1xuXG4gICAgICBsaXN0SXRlbXMgPSBbXTtcbiAgICAgIG5leHQgPSBmYWxzZTtcbiAgICAgIGwgPSBjYXAubGVuZ3RoO1xuICAgICAgaSA9IDA7XG5cbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGl0ZW0gPSBjYXBbaV07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBsaXN0IGl0ZW0ncyBidWxsZXRcbiAgICAgICAgLy8gc28gaXQgaXMgc2VlbiBhcyB0aGUgbmV4dCB0b2tlbi5cbiAgICAgICAgc3BhY2UgPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgaXRlbSA9IGl0ZW0ucmVwbGFjZSgvXiAqKFsqKy1dfFxcZCtcXC4pICovLCAnJyk7XG5cbiAgICAgICAgLy8gT3V0ZGVudCB3aGF0ZXZlciB0aGVcbiAgICAgICAgLy8gbGlzdCBpdGVtIGNvbnRhaW5zLiBIYWNreS5cbiAgICAgICAgaWYgKH5pdGVtLmluZGV4T2YoJ1xcbiAnKSkge1xuICAgICAgICAgIHNwYWNlIC09IGl0ZW0ubGVuZ3RoO1xuICAgICAgICAgIGl0ZW0gPSAhdGhpcy5vcHRpb25zLnBlZGFudGljXG4gICAgICAgICAgICA/IGl0ZW0ucmVwbGFjZShuZXcgUmVnRXhwKCdeIHsxLCcgKyBzcGFjZSArICd9JywgJ2dtJyksICcnKVxuICAgICAgICAgICAgOiBpdGVtLnJlcGxhY2UoL14gezEsNH0vZ20sICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERldGVybWluZSB3aGV0aGVyIHRoZSBuZXh0IGxpc3QgaXRlbSBiZWxvbmdzIGhlcmUuXG4gICAgICAgIC8vIEJhY2twZWRhbCBpZiBpdCBkb2VzIG5vdCBiZWxvbmcgaW4gdGhpcyBsaXN0LlxuICAgICAgICBpZiAoaSAhPT0gbCAtIDEpIHtcbiAgICAgICAgICBiID0gYmxvY2suYnVsbGV0LmV4ZWMoY2FwW2kgKyAxXSlbMF07XG4gICAgICAgICAgaWYgKGJ1bGwubGVuZ3RoID4gMSA/IGIubGVuZ3RoID09PSAxXG4gICAgICAgICAgICA6IChiLmxlbmd0aCA+IDEgfHwgKHRoaXMub3B0aW9ucy5zbWFydExpc3RzICYmIGIgIT09IGJ1bGwpKSkge1xuICAgICAgICAgICAgc3JjID0gY2FwLnNsaWNlKGkgKyAxKS5qb2luKCdcXG4nKSArIHNyYztcbiAgICAgICAgICAgIGkgPSBsIC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciBpdGVtIGlzIGxvb3NlIG9yIG5vdC5cbiAgICAgICAgLy8gVXNlOiAvKF58XFxuKSg/ISApW15cXG5dK1xcblxcbig/IVxccyokKS9cbiAgICAgICAgLy8gZm9yIGRpc2NvdW50IGJlaGF2aW9yLlxuICAgICAgICBsb29zZSA9IG5leHQgfHwgL1xcblxcbig/IVxccyokKS8udGVzdChpdGVtKTtcbiAgICAgICAgaWYgKGkgIT09IGwgLSAxKSB7XG4gICAgICAgICAgbmV4dCA9IGl0ZW0uY2hhckF0KGl0ZW0ubGVuZ3RoIC0gMSkgPT09ICdcXG4nO1xuICAgICAgICAgIGlmICghbG9vc2UpIGxvb3NlID0gbmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb29zZSkge1xuICAgICAgICAgIGxpc3RTdGFydC5sb29zZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgdGFzayBsaXN0IGl0ZW1zXG4gICAgICAgIGlzdGFzayA9IC9eXFxbWyB4WF1cXF0gLy50ZXN0KGl0ZW0pO1xuICAgICAgICBpc2NoZWNrZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChpc3Rhc2spIHtcbiAgICAgICAgICBpc2NoZWNrZWQgPSBpdGVtWzFdICE9PSAnICc7XG4gICAgICAgICAgaXRlbSA9IGl0ZW0ucmVwbGFjZSgvXlxcW1sgeFhdXFxdICsvLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0ID0ge1xuICAgICAgICAgIHR5cGU6ICdsaXN0X2l0ZW1fc3RhcnQnLFxuICAgICAgICAgIHRhc2s6IGlzdGFzayxcbiAgICAgICAgICBjaGVja2VkOiBpc2NoZWNrZWQsXG4gICAgICAgICAgbG9vc2U6IGxvb3NlXG4gICAgICAgIH07XG5cbiAgICAgICAgbGlzdEl0ZW1zLnB1c2godCk7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2godCk7XG5cbiAgICAgICAgLy8gUmVjdXJzZS5cbiAgICAgICAgdGhpcy50b2tlbihpdGVtLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2xpc3RfaXRlbV9lbmQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdFN0YXJ0Lmxvb3NlKSB7XG4gICAgICAgIGwgPSBsaXN0SXRlbXMubGVuZ3RoO1xuICAgICAgICBpID0gMDtcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBsaXN0SXRlbXNbaV0ubG9vc2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnbGlzdF9lbmQnXG4gICAgICB9KTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gaHRtbFxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmh0bWwuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6IHRoaXMub3B0aW9ucy5zYW5pdGl6ZVxuICAgICAgICAgID8gJ3BhcmFncmFwaCdcbiAgICAgICAgICA6ICdodG1sJyxcbiAgICAgICAgcHJlOiAhdGhpcy5vcHRpb25zLnNhbml0aXplclxuICAgICAgICAgICYmIChjYXBbMV0gPT09ICdwcmUnIHx8IGNhcFsxXSA9PT0gJ3NjcmlwdCcgfHwgY2FwWzFdID09PSAnc3R5bGUnKSxcbiAgICAgICAgdGV4dDogY2FwWzBdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGRlZlxuICAgIGlmICh0b3AgJiYgKGNhcCA9IHRoaXMucnVsZXMuZGVmLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBpZiAoY2FwWzNdKSBjYXBbM10gPSBjYXBbM10uc3Vic3RyaW5nKDEsIGNhcFszXS5sZW5ndGggLSAxKTtcbiAgICAgIHRhZyA9IGNhcFsxXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJyAnKTtcbiAgICAgIGlmICghdGhpcy50b2tlbnMubGlua3NbdGFnXSkge1xuICAgICAgICB0aGlzLnRva2Vucy5saW5rc1t0YWddID0ge1xuICAgICAgICAgIGhyZWY6IGNhcFsyXSxcbiAgICAgICAgICB0aXRsZTogY2FwWzNdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWJsZSAoZ2ZtKVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLnRhYmxlLmV4ZWMoc3JjKSkge1xuICAgICAgaXRlbSA9IHtcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgaGVhZGVyOiBzcGxpdENlbGxzKGNhcFsxXS5yZXBsYWNlKC9eICp8ICpcXHwgKiQvZywgJycpKSxcbiAgICAgICAgYWxpZ246IGNhcFsyXS5yZXBsYWNlKC9eICp8XFx8ICokL2csICcnKS5zcGxpdCgvICpcXHwgKi8pLFxuICAgICAgICBjZWxsczogY2FwWzNdID8gY2FwWzNdLnJlcGxhY2UoL1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpIDogW11cbiAgICAgIH07XG5cbiAgICAgIGlmIChpdGVtLmhlYWRlci5sZW5ndGggPT09IGl0ZW0uYWxpZ24ubGVuZ3RoKSB7XG4gICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uYWxpZ24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoL14gKi0rOiAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdyaWdodCc7XG4gICAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rOiAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdjZW50ZXInO1xuICAgICAgICAgIH0gZWxzZSBpZiAoL14gKjotKyAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdsZWZ0JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5hbGlnbltpXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpdGVtLmNlbGxzW2ldID0gc3BsaXRDZWxscyhcbiAgICAgICAgICAgIGl0ZW0uY2VsbHNbaV0ucmVwbGFjZSgvXiAqXFx8ICp8ICpcXHwgKiQvZywgJycpLFxuICAgICAgICAgICAgaXRlbS5oZWFkZXIubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbGhlYWRpbmdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5saGVhZGluZy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgICAgICBkZXB0aDogY2FwWzJdID09PSAnPScgPyAxIDogMixcbiAgICAgICAgdGV4dDogY2FwWzFdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRvcC1sZXZlbCBwYXJhZ3JhcGhcbiAgICBpZiAodG9wICYmIChjYXAgPSB0aGlzLnJ1bGVzLnBhcmFncmFwaC5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICB0ZXh0OiBjYXBbMV0uY2hhckF0KGNhcFsxXS5sZW5ndGggLSAxKSA9PT0gJ1xcbidcbiAgICAgICAgICA/IGNhcFsxXS5zbGljZSgwLCAtMSlcbiAgICAgICAgICA6IGNhcFsxXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0ZXh0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMudGV4dC5leGVjKHNyYykpIHtcbiAgICAgIC8vIFRvcC1sZXZlbCBzaG91bGQgbmV2ZXIgcmVhY2ggaGVyZS5cbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiBjYXBbMF1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0ZSBsb29wIG9uIGJ5dGU6ICcgKyBzcmMuY2hhckNvZGVBdCgwKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMudG9rZW5zO1xufTtcblxuLyoqXG4gKiBJbmxpbmUtTGV2ZWwgR3JhbW1hclxuICovXG5cbnZhciBpbmxpbmUgPSB7XG4gIGVzY2FwZTogL15cXFxcKFshXCIjJCUmJygpKissXFwtLi86Ozw9Pj9AXFxbXFxdXFxcXF5fYHt8fX5dKS8sXG4gIGF1dG9saW5rOiAvXjwoc2NoZW1lOlteXFxzXFx4MDAtXFx4MWY8Pl0qfGVtYWlsKT4vLFxuICB1cmw6IG5vb3AsXG4gIHRhZzogJ15jb21tZW50J1xuICAgICsgJ3xePC9bYS16QS1aXVtcXFxcdzotXSpcXFxccyo+JyAvLyBzZWxmLWNsb3NpbmcgdGFnXG4gICAgKyAnfF48W2EtekEtWl1bXFxcXHctXSooPzphdHRyaWJ1dGUpKj9cXFxccyovPz4nIC8vIG9wZW4gdGFnXG4gICAgKyAnfF48XFxcXD9bXFxcXHNcXFxcU10qP1xcXFw/PicgLy8gcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiwgZS5nLiA8P3BocCA/PlxuICAgICsgJ3xePCFbYS16QS1aXStcXFxcc1tcXFxcc1xcXFxTXSo/PicgLy8gZGVjbGFyYXRpb24sIGUuZy4gPCFET0NUWVBFIGh0bWw+XG4gICAgKyAnfF48IVxcXFxbQ0RBVEFcXFxcW1tcXFxcc1xcXFxTXSo/XFxcXF1cXFxcXT4nLCAvLyBDREFUQSBzZWN0aW9uXG4gIGxpbms6IC9eIT9cXFsobGFiZWwpXFxdXFwoaHJlZig/OlxccysodGl0bGUpKT9cXHMqXFwpLyxcbiAgcmVmbGluazogL14hP1xcWyhsYWJlbClcXF1cXFsoPyFcXHMqXFxdKSgoPzpcXFxcW1xcW1xcXV0/fFteXFxbXFxdXFxcXF0pKylcXF0vLFxuICBub2xpbms6IC9eIT9cXFsoPyFcXHMqXFxdKSgoPzpcXFtbXlxcW1xcXV0qXFxdfFxcXFxbXFxbXFxdXXxbXlxcW1xcXV0pKilcXF0oPzpcXFtcXF0pPy8sXG4gIHN0cm9uZzogL15fXyhbXlxcc19dKV9fKD8hXyl8XlxcKlxcKihbXlxccypdKVxcKlxcKig/IVxcKil8Xl9fKFteXFxzXVtcXHNcXFNdKj9bXlxcc10pX18oPyFfKXxeXFwqXFwqKFteXFxzXVtcXHNcXFNdKj9bXlxcc10pXFwqXFwqKD8hXFwqKS8sXG4gIGVtOiAvXl8oW15cXHNfXSlfKD8hXyl8XlxcKihbXlxccypcIjxcXFtdKVxcKig/IVxcKil8Xl8oW15cXHNdW1xcc1xcU10qP1teXFxzX10pXyg/IV98W15cXHNwdW5jdHVhdGlvbl0pfF5fKFteXFxzX11bXFxzXFxTXSo/W15cXHNdKV8oPyFffFteXFxzcHVuY3R1YXRpb25dKXxeXFwqKFteXFxzXCI8XFxbXVtcXHNcXFNdKj9bXlxccypdKVxcKig/IVxcKil8XlxcKihbXlxccypcIjxcXFtdW1xcc1xcU10qP1teXFxzXSlcXCooPyFcXCopLyxcbiAgY29kZTogL14oYCspKFteYF18W15gXVtcXHNcXFNdKj9bXmBdKVxcMSg/IWApLyxcbiAgYnI6IC9eKCB7Mix9fFxcXFwpXFxuKD8hXFxzKiQpLyxcbiAgZGVsOiBub29wLFxuICB0ZXh0OiAvXihgK3xbXmBdKSg/OltcXHNcXFNdKj8oPzooPz1bXFxcXDwhXFxbYCpdfFxcYl98JCl8W14gXSg/PSB7Mix9XFxuKSl8KD89IHsyLH1cXG4pKS9cbn07XG5cbi8vIGxpc3Qgb2YgcHVuY3R1YXRpb24gbWFya3MgZnJvbSBjb21tb24gbWFyayBzcGVjXG4vLyB3aXRob3V0IGAgYW5kIF0gdG8gd29ya2Fyb3VuZCBSdWxlIDE3IChpbmxpbmUgY29kZSBibG9ja3MvbGlua3MpXG5pbmxpbmUuX3B1bmN0dWF0aW9uID0gJyFcIiMkJSZcXCcoKSorLFxcXFwtLi86Ozw9Pj9AXFxcXFteX3t8fX4nO1xuaW5saW5lLmVtID0gZWRpdChpbmxpbmUuZW0pLnJlcGxhY2UoL3B1bmN0dWF0aW9uL2csIGlubGluZS5fcHVuY3R1YXRpb24pLmdldFJlZ2V4KCk7XG5cbmlubGluZS5fZXNjYXBlcyA9IC9cXFxcKFshXCIjJCUmJygpKissXFwtLi86Ozw9Pj9AXFxbXFxdXFxcXF5fYHt8fX5dKS9nO1xuXG5pbmxpbmUuX3NjaGVtZSA9IC9bYS16QS1aXVthLXpBLVowLTkrLi1dezEsMzF9LztcbmlubGluZS5fZW1haWwgPSAvW2EtekEtWjAtOS4hIyQlJicqKy89P15fYHt8fX4tXSsoQClbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKyg/IVstX10pLztcbmlubGluZS5hdXRvbGluayA9IGVkaXQoaW5saW5lLmF1dG9saW5rKVxuICAucmVwbGFjZSgnc2NoZW1lJywgaW5saW5lLl9zY2hlbWUpXG4gIC5yZXBsYWNlKCdlbWFpbCcsIGlubGluZS5fZW1haWwpXG4gIC5nZXRSZWdleCgpO1xuXG5pbmxpbmUuX2F0dHJpYnV0ZSA9IC9cXHMrW2EtekEtWjpfXVtcXHcuOi1dKig/Olxccyo9XFxzKlwiW15cIl0qXCJ8XFxzKj1cXHMqJ1teJ10qJ3xcXHMqPVxccypbXlxcc1wiJz08PmBdKyk/LztcblxuaW5saW5lLnRhZyA9IGVkaXQoaW5saW5lLnRhZylcbiAgLnJlcGxhY2UoJ2NvbW1lbnQnLCBibG9jay5fY29tbWVudClcbiAgLnJlcGxhY2UoJ2F0dHJpYnV0ZScsIGlubGluZS5fYXR0cmlidXRlKVxuICAuZ2V0UmVnZXgoKTtcblxuaW5saW5lLl9sYWJlbCA9IC8oPzpcXFtbXlxcW1xcXV0qXFxdfFxcXFxbXFxbXFxdXT98YFteYF0qYHxgKD8hYCl8W15cXFtcXF1cXFxcYF0pKj8vO1xuaW5saW5lLl9ocmVmID0gL1xccyooPCg/OlxcXFxbPD5dP3xbXlxcczw+XFxcXF0pKj58W15cXHNcXHgwMC1cXHgxZl0qKS87XG5pbmxpbmUuX3RpdGxlID0gL1wiKD86XFxcXFwiP3xbXlwiXFxcXF0pKlwifCcoPzpcXFxcJz98W14nXFxcXF0pKid8XFwoKD86XFxcXFxcKT98W14pXFxcXF0pKlxcKS87XG5cbmlubGluZS5saW5rID0gZWRpdChpbmxpbmUubGluaylcbiAgLnJlcGxhY2UoJ2xhYmVsJywgaW5saW5lLl9sYWJlbClcbiAgLnJlcGxhY2UoJ2hyZWYnLCBpbmxpbmUuX2hyZWYpXG4gIC5yZXBsYWNlKCd0aXRsZScsIGlubGluZS5fdGl0bGUpXG4gIC5nZXRSZWdleCgpO1xuXG5pbmxpbmUucmVmbGluayA9IGVkaXQoaW5saW5lLnJlZmxpbmspXG4gIC5yZXBsYWNlKCdsYWJlbCcsIGlubGluZS5fbGFiZWwpXG4gIC5nZXRSZWdleCgpO1xuXG4vKipcbiAqIE5vcm1hbCBJbmxpbmUgR3JhbW1hclxuICovXG5cbmlubGluZS5ub3JtYWwgPSBtZXJnZSh7fSwgaW5saW5lKTtcblxuLyoqXG4gKiBQZWRhbnRpYyBJbmxpbmUgR3JhbW1hclxuICovXG5cbmlubGluZS5wZWRhbnRpYyA9IG1lcmdlKHt9LCBpbmxpbmUubm9ybWFsLCB7XG4gIHN0cm9uZzogL15fXyg/PVxcUykoW1xcc1xcU10qP1xcUylfXyg/IV8pfF5cXCpcXCooPz1cXFMpKFtcXHNcXFNdKj9cXFMpXFwqXFwqKD8hXFwqKS8sXG4gIGVtOiAvXl8oPz1cXFMpKFtcXHNcXFNdKj9cXFMpXyg/IV8pfF5cXCooPz1cXFMpKFtcXHNcXFNdKj9cXFMpXFwqKD8hXFwqKS8sXG4gIGxpbms6IGVkaXQoL14hP1xcWyhsYWJlbClcXF1cXCgoLio/KVxcKS8pXG4gICAgLnJlcGxhY2UoJ2xhYmVsJywgaW5saW5lLl9sYWJlbClcbiAgICAuZ2V0UmVnZXgoKSxcbiAgcmVmbGluazogZWRpdCgvXiE/XFxbKGxhYmVsKVxcXVxccypcXFsoW15cXF1dKilcXF0vKVxuICAgIC5yZXBsYWNlKCdsYWJlbCcsIGlubGluZS5fbGFiZWwpXG4gICAgLmdldFJlZ2V4KClcbn0pO1xuXG4vKipcbiAqIEdGTSBJbmxpbmUgR3JhbW1hclxuICovXG5cbmlubGluZS5nZm0gPSBtZXJnZSh7fSwgaW5saW5lLm5vcm1hbCwge1xuICBlc2NhcGU6IGVkaXQoaW5saW5lLmVzY2FwZSkucmVwbGFjZSgnXSknLCAnfnxdKScpLmdldFJlZ2V4KCksXG4gIF9leHRlbmRlZF9lbWFpbDogL1tBLVphLXowLTkuXystXSsoQClbYS16QS1aMC05LV9dKyg/OlxcLlthLXpBLVowLTktX10qW2EtekEtWjAtOV0pKyg/IVstX10pLyxcbiAgdXJsOiAvXigoPzpmdHB8aHR0cHM/KTpcXC9cXC98d3d3XFwuKSg/OlthLXpBLVowLTlcXC1dK1xcLj8pK1teXFxzPF0qfF5lbWFpbC8sXG4gIF9iYWNrcGVkYWw6IC8oPzpbXj8hLiw6OypffigpJl0rfFxcKFteKV0qXFwpfCYoPyFbYS16QS1aMC05XSs7JCl8Wz8hLiw6OypffildKyg/ISQpKSsvLFxuICBkZWw6IC9efisoPz1cXFMpKFtcXHNcXFNdKj9cXFMpfisvLFxuICB0ZXh0OiAvXihgK3xbXmBdKSg/OltcXHNcXFNdKj8oPzooPz1bXFxcXDwhXFxbYCp+XXxcXGJffGh0dHBzPzpcXC9cXC98ZnRwOlxcL1xcL3x3d3dcXC58JCl8W14gXSg/PSB7Mix9XFxuKXxbXmEtekEtWjAtOS4hIyQlJicqK1xcLz0/X2B7XFx8fX4tXSg/PVthLXpBLVowLTkuISMkJSYnKitcXC89P19ge1xcfH1+LV0rQCkpfCg/PSB7Mix9XFxufFthLXpBLVowLTkuISMkJSYnKitcXC89P19ge1xcfH1+LV0rQCkpL1xufSk7XG5cbmlubGluZS5nZm0udXJsID0gZWRpdChpbmxpbmUuZ2ZtLnVybCwgJ2knKVxuICAucmVwbGFjZSgnZW1haWwnLCBpbmxpbmUuZ2ZtLl9leHRlbmRlZF9lbWFpbClcbiAgLmdldFJlZ2V4KCk7XG4vKipcbiAqIEdGTSArIExpbmUgQnJlYWtzIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLmJyZWFrcyA9IG1lcmdlKHt9LCBpbmxpbmUuZ2ZtLCB7XG4gIGJyOiBlZGl0KGlubGluZS5icikucmVwbGFjZSgnezIsfScsICcqJykuZ2V0UmVnZXgoKSxcbiAgdGV4dDogZWRpdChpbmxpbmUuZ2ZtLnRleHQpLnJlcGxhY2UoL1xcezIsXFx9L2csICcqJykuZ2V0UmVnZXgoKVxufSk7XG5cbi8qKlxuICogSW5saW5lIExleGVyICYgQ29tcGlsZXJcbiAqL1xuXG5mdW5jdGlvbiBJbmxpbmVMZXhlcihsaW5rcywgb3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5saW5rcyA9IGxpbmtzO1xuICB0aGlzLnJ1bGVzID0gaW5saW5lLm5vcm1hbDtcbiAgdGhpcy5yZW5kZXJlciA9IHRoaXMub3B0aW9ucy5yZW5kZXJlciB8fCBuZXcgUmVuZGVyZXIoKTtcbiAgdGhpcy5yZW5kZXJlci5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gIGlmICghdGhpcy5saW5rcykge1xuICAgIHRocm93IG5ldyBFcnJvcignVG9rZW5zIGFycmF5IHJlcXVpcmVzIGEgYGxpbmtzYCBwcm9wZXJ0eS4nKTtcbiAgfVxuXG4gIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICB0aGlzLnJ1bGVzID0gaW5saW5lLnBlZGFudGljO1xuICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmJyZWFrcykge1xuICAgICAgdGhpcy5ydWxlcyA9IGlubGluZS5icmVha3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucnVsZXMgPSBpbmxpbmUuZ2ZtO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBJbmxpbmUgUnVsZXNcbiAqL1xuXG5JbmxpbmVMZXhlci5ydWxlcyA9IGlubGluZTtcblxuLyoqXG4gKiBTdGF0aWMgTGV4aW5nL0NvbXBpbGluZyBNZXRob2RcbiAqL1xuXG5JbmxpbmVMZXhlci5vdXRwdXQgPSBmdW5jdGlvbihzcmMsIGxpbmtzLCBvcHRpb25zKSB7XG4gIHZhciBpbmxpbmUgPSBuZXcgSW5saW5lTGV4ZXIobGlua3MsIG9wdGlvbnMpO1xuICByZXR1cm4gaW5saW5lLm91dHB1dChzcmMpO1xufTtcblxuLyoqXG4gKiBMZXhpbmcvQ29tcGlsaW5nXG4gKi9cblxuSW5saW5lTGV4ZXIucHJvdG90eXBlLm91dHB1dCA9IGZ1bmN0aW9uKHNyYykge1xuICB2YXIgb3V0ID0gJycsXG4gICAgICBsaW5rLFxuICAgICAgdGV4dCxcbiAgICAgIGhyZWYsXG4gICAgICB0aXRsZSxcbiAgICAgIGNhcCxcbiAgICAgIHByZXZDYXBaZXJvO1xuXG4gIHdoaWxlIChzcmMpIHtcbiAgICAvLyBlc2NhcGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5lc2NhcGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IGVzY2FwZShjYXBbMV0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGFnXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMudGFnLmV4ZWMoc3JjKSkge1xuICAgICAgaWYgKCF0aGlzLmluTGluayAmJiAvXjxhIC9pLnRlc3QoY2FwWzBdKSkge1xuICAgICAgICB0aGlzLmluTGluayA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5MaW5rICYmIC9ePFxcL2E+L2kudGVzdChjYXBbMF0pKSB7XG4gICAgICAgIHRoaXMuaW5MaW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaW5SYXdCbG9jayAmJiAvXjwocHJlfGNvZGV8a2JkfHNjcmlwdCkoXFxzfD4pL2kudGVzdChjYXBbMF0pKSB7XG4gICAgICAgIHRoaXMuaW5SYXdCbG9jayA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5SYXdCbG9jayAmJiAvXjxcXC8ocHJlfGNvZGV8a2JkfHNjcmlwdCkoXFxzfD4pL2kudGVzdChjYXBbMF0pKSB7XG4gICAgICAgIHRoaXMuaW5SYXdCbG9jayA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMub3B0aW9ucy5zYW5pdGl6ZVxuICAgICAgICA/IHRoaXMub3B0aW9ucy5zYW5pdGl6ZXJcbiAgICAgICAgICA/IHRoaXMub3B0aW9ucy5zYW5pdGl6ZXIoY2FwWzBdKVxuICAgICAgICAgIDogZXNjYXBlKGNhcFswXSlcbiAgICAgICAgOiBjYXBbMF07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBsaW5rXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubGluay5leGVjKHNyYykpIHtcbiAgICAgIHZhciBsYXN0UGFyZW5JbmRleCA9IGZpbmRDbG9zaW5nQnJhY2tldChjYXBbMl0sICcoKScpO1xuICAgICAgaWYgKGxhc3RQYXJlbkluZGV4ID4gLTEpIHtcbiAgICAgICAgdmFyIGxpbmtMZW4gPSBjYXBbMF0ubGVuZ3RoIC0gKGNhcFsyXS5sZW5ndGggLSBsYXN0UGFyZW5JbmRleCkgLSAoY2FwWzNdIHx8ICcnKS5sZW5ndGg7XG4gICAgICAgIGNhcFsyXSA9IGNhcFsyXS5zdWJzdHJpbmcoMCwgbGFzdFBhcmVuSW5kZXgpO1xuICAgICAgICBjYXBbMF0gPSBjYXBbMF0uc3Vic3RyaW5nKDAsIGxpbmtMZW4pLnRyaW0oKTtcbiAgICAgICAgY2FwWzNdID0gJyc7XG4gICAgICB9XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy5pbkxpbmsgPSB0cnVlO1xuICAgICAgaHJlZiA9IGNhcFsyXTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICAgICAgbGluayA9IC9eKFteJ1wiXSpbXlxcc10pXFxzKyhbJ1wiXSkoLiopXFwyLy5leGVjKGhyZWYpO1xuXG4gICAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgICAgaHJlZiA9IGxpbmtbMV07XG4gICAgICAgICAgdGl0bGUgPSBsaW5rWzNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpdGxlID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlID0gY2FwWzNdID8gY2FwWzNdLnNsaWNlKDEsIC0xKSA6ICcnO1xuICAgICAgfVxuICAgICAgaHJlZiA9IGhyZWYudHJpbSgpLnJlcGxhY2UoL148KFtcXHNcXFNdKik+JC8sICckMScpO1xuICAgICAgb3V0ICs9IHRoaXMub3V0cHV0TGluayhjYXAsIHtcbiAgICAgICAgaHJlZjogSW5saW5lTGV4ZXIuZXNjYXBlcyhocmVmKSxcbiAgICAgICAgdGl0bGU6IElubGluZUxleGVyLmVzY2FwZXModGl0bGUpXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5MaW5rID0gZmFsc2U7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyByZWZsaW5rLCBub2xpbmtcbiAgICBpZiAoKGNhcCA9IHRoaXMucnVsZXMucmVmbGluay5leGVjKHNyYykpXG4gICAgICAgIHx8IChjYXAgPSB0aGlzLnJ1bGVzLm5vbGluay5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgbGluayA9IChjYXBbMl0gfHwgY2FwWzFdKS5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG4gICAgICBsaW5rID0gdGhpcy5saW5rc1tsaW5rLnRvTG93ZXJDYXNlKCldO1xuICAgICAgaWYgKCFsaW5rIHx8ICFsaW5rLmhyZWYpIHtcbiAgICAgICAgb3V0ICs9IGNhcFswXS5jaGFyQXQoMCk7XG4gICAgICAgIHNyYyA9IGNhcFswXS5zdWJzdHJpbmcoMSkgKyBzcmM7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5pbkxpbmsgPSB0cnVlO1xuICAgICAgb3V0ICs9IHRoaXMub3V0cHV0TGluayhjYXAsIGxpbmspO1xuICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHN0cm9uZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLnN0cm9uZy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5zdHJvbmcodGhpcy5vdXRwdXQoY2FwWzRdIHx8IGNhcFszXSB8fCBjYXBbMl0gfHwgY2FwWzFdKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBlbVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmVtLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmVtKHRoaXMub3V0cHV0KGNhcFs2XSB8fCBjYXBbNV0gfHwgY2FwWzRdIHx8IGNhcFszXSB8fCBjYXBbMl0gfHwgY2FwWzFdKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBjb2RlXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuY29kZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5jb2Rlc3Bhbihlc2NhcGUoY2FwWzJdLnRyaW0oKSwgdHJ1ZSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gYnJcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5ici5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5icigpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZGVsIChnZm0pXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuZGVsLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmRlbCh0aGlzLm91dHB1dChjYXBbMV0pKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGF1dG9saW5rXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuYXV0b2xpbmsuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgaWYgKGNhcFsyXSA9PT0gJ0AnKSB7XG4gICAgICAgIHRleHQgPSBlc2NhcGUodGhpcy5tYW5nbGUoY2FwWzFdKSk7XG4gICAgICAgIGhyZWYgPSAnbWFpbHRvOicgKyB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCA9IGVzY2FwZShjYXBbMV0pO1xuICAgICAgICBocmVmID0gdGV4dDtcbiAgICAgIH1cbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmxpbmsoaHJlZiwgbnVsbCwgdGV4dCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB1cmwgKGdmbSlcbiAgICBpZiAoIXRoaXMuaW5MaW5rICYmIChjYXAgPSB0aGlzLnJ1bGVzLnVybC5leGVjKHNyYykpKSB7XG4gICAgICBpZiAoY2FwWzJdID09PSAnQCcpIHtcbiAgICAgICAgdGV4dCA9IGVzY2FwZShjYXBbMF0pO1xuICAgICAgICBocmVmID0gJ21haWx0bzonICsgdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRvIGV4dGVuZGVkIGF1dG9saW5rIHBhdGggdmFsaWRhdGlvblxuICAgICAgICBkbyB7XG4gICAgICAgICAgcHJldkNhcFplcm8gPSBjYXBbMF07XG4gICAgICAgICAgY2FwWzBdID0gdGhpcy5ydWxlcy5fYmFja3BlZGFsLmV4ZWMoY2FwWzBdKVswXTtcbiAgICAgICAgfSB3aGlsZSAocHJldkNhcFplcm8gIT09IGNhcFswXSk7XG4gICAgICAgIHRleHQgPSBlc2NhcGUoY2FwWzBdKTtcbiAgICAgICAgaWYgKGNhcFsxXSA9PT0gJ3d3dy4nKSB7XG4gICAgICAgICAgaHJlZiA9ICdodHRwOi8vJyArIHRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHJlZiA9IHRleHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5saW5rKGhyZWYsIG51bGwsIHRleHQpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGV4dFxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLnRleHQuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgaWYgKHRoaXMuaW5SYXdCbG9jaykge1xuICAgICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci50ZXh0KGNhcFswXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci50ZXh0KGVzY2FwZSh0aGlzLnNtYXJ0eXBhbnRzKGNhcFswXSkpKTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdGUgbG9vcCBvbiBieXRlOiAnICsgc3JjLmNoYXJDb2RlQXQoMCkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59O1xuXG5JbmxpbmVMZXhlci5lc2NhcGVzID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gdGV4dCA/IHRleHQucmVwbGFjZShJbmxpbmVMZXhlci5ydWxlcy5fZXNjYXBlcywgJyQxJykgOiB0ZXh0O1xufTtcblxuLyoqXG4gKiBDb21waWxlIExpbmtcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUub3V0cHV0TGluayA9IGZ1bmN0aW9uKGNhcCwgbGluaykge1xuICB2YXIgaHJlZiA9IGxpbmsuaHJlZixcbiAgICAgIHRpdGxlID0gbGluay50aXRsZSA/IGVzY2FwZShsaW5rLnRpdGxlKSA6IG51bGw7XG5cbiAgcmV0dXJuIGNhcFswXS5jaGFyQXQoMCkgIT09ICchJ1xuICAgID8gdGhpcy5yZW5kZXJlci5saW5rKGhyZWYsIHRpdGxlLCB0aGlzLm91dHB1dChjYXBbMV0pKVxuICAgIDogdGhpcy5yZW5kZXJlci5pbWFnZShocmVmLCB0aXRsZSwgZXNjYXBlKGNhcFsxXSkpO1xufTtcblxuLyoqXG4gKiBTbWFydHlwYW50cyBUcmFuc2Zvcm1hdGlvbnNcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUuc21hcnR5cGFudHMgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIGlmICghdGhpcy5vcHRpb25zLnNtYXJ0eXBhbnRzKSByZXR1cm4gdGV4dDtcbiAgcmV0dXJuIHRleHRcbiAgICAvLyBlbS1kYXNoZXNcbiAgICAucmVwbGFjZSgvLS0tL2csICdcXHUyMDE0JylcbiAgICAvLyBlbi1kYXNoZXNcbiAgICAucmVwbGFjZSgvLS0vZywgJ1xcdTIwMTMnKVxuICAgIC8vIG9wZW5pbmcgc2luZ2xlc1xuICAgIC5yZXBsYWNlKC8oXnxbLVxcdTIwMTQvKFxcW3tcIlxcc10pJy9nLCAnJDFcXHUyMDE4JylcbiAgICAvLyBjbG9zaW5nIHNpbmdsZXMgJiBhcG9zdHJvcGhlc1xuICAgIC5yZXBsYWNlKC8nL2csICdcXHUyMDE5JylcbiAgICAvLyBvcGVuaW5nIGRvdWJsZXNcbiAgICAucmVwbGFjZSgvKF58Wy1cXHUyMDE0LyhcXFt7XFx1MjAxOFxcc10pXCIvZywgJyQxXFx1MjAxYycpXG4gICAgLy8gY2xvc2luZyBkb3VibGVzXG4gICAgLnJlcGxhY2UoL1wiL2csICdcXHUyMDFkJylcbiAgICAvLyBlbGxpcHNlc1xuICAgIC5yZXBsYWNlKC9cXC57M30vZywgJ1xcdTIwMjYnKTtcbn07XG5cbi8qKlxuICogTWFuZ2xlIExpbmtzXG4gKi9cblxuSW5saW5lTGV4ZXIucHJvdG90eXBlLm1hbmdsZSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgaWYgKCF0aGlzLm9wdGlvbnMubWFuZ2xlKSByZXR1cm4gdGV4dDtcbiAgdmFyIG91dCA9ICcnLFxuICAgICAgbCA9IHRleHQubGVuZ3RoLFxuICAgICAgaSA9IDAsXG4gICAgICBjaDtcblxuICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgIGNoID0gdGV4dC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICBjaCA9ICd4JyArIGNoLnRvU3RyaW5nKDE2KTtcbiAgICB9XG4gICAgb3V0ICs9ICcmIycgKyBjaCArICc7JztcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFJlbmRlcmVyXG4gKi9cblxuZnVuY3Rpb24gUmVuZGVyZXIob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbn1cblxuUmVuZGVyZXIucHJvdG90eXBlLmNvZGUgPSBmdW5jdGlvbihjb2RlLCBpbmZvc3RyaW5nLCBlc2NhcGVkKSB7XG4gIHZhciBsYW5nID0gKGluZm9zdHJpbmcgfHwgJycpLm1hdGNoKC9cXFMqLylbMF07XG4gIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KSB7XG4gICAgdmFyIG91dCA9IHRoaXMub3B0aW9ucy5oaWdobGlnaHQoY29kZSwgbGFuZyk7XG4gICAgaWYgKG91dCAhPSBudWxsICYmIG91dCAhPT0gY29kZSkge1xuICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICBjb2RlID0gb3V0O1xuICAgIH1cbiAgfVxuXG4gIGlmICghbGFuZykge1xuICAgIHJldHVybiAnPHByZT48Y29kZT4nXG4gICAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICAgICsgJzwvY29kZT48L3ByZT4nO1xuICB9XG5cbiAgcmV0dXJuICc8cHJlPjxjb2RlIGNsYXNzPVwiJ1xuICAgICsgdGhpcy5vcHRpb25zLmxhbmdQcmVmaXhcbiAgICArIGVzY2FwZShsYW5nLCB0cnVlKVxuICAgICsgJ1wiPidcbiAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICArICc8L2NvZGU+PC9wcmU+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5ibG9ja3F1b3RlID0gZnVuY3Rpb24ocXVvdGUpIHtcbiAgcmV0dXJuICc8YmxvY2txdW90ZT5cXG4nICsgcXVvdGUgKyAnPC9ibG9ja3F1b3RlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWw7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaGVhZGluZyA9IGZ1bmN0aW9uKHRleHQsIGxldmVsLCByYXcsIHNsdWdnZXIpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5oZWFkZXJJZHMpIHtcbiAgICByZXR1cm4gJzxoJ1xuICAgICAgKyBsZXZlbFxuICAgICAgKyAnIGlkPVwiJ1xuICAgICAgKyB0aGlzLm9wdGlvbnMuaGVhZGVyUHJlZml4XG4gICAgICArIHNsdWdnZXIuc2x1ZyhyYXcpXG4gICAgICArICdcIj4nXG4gICAgICArIHRleHRcbiAgICAgICsgJzwvaCdcbiAgICAgICsgbGV2ZWxcbiAgICAgICsgJz5cXG4nO1xuICB9XG4gIC8vIGlnbm9yZSBJRHNcbiAgcmV0dXJuICc8aCcgKyBsZXZlbCArICc+JyArIHRleHQgKyAnPC9oJyArIGxldmVsICsgJz5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmhyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLm9wdGlvbnMueGh0bWwgPyAnPGhyLz5cXG4nIDogJzxocj5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbihib2R5LCBvcmRlcmVkLCBzdGFydCkge1xuICB2YXIgdHlwZSA9IG9yZGVyZWQgPyAnb2wnIDogJ3VsJyxcbiAgICAgIHN0YXJ0YXR0ID0gKG9yZGVyZWQgJiYgc3RhcnQgIT09IDEpID8gKCcgc3RhcnQ9XCInICsgc3RhcnQgKyAnXCInKSA6ICcnO1xuICByZXR1cm4gJzwnICsgdHlwZSArIHN0YXJ0YXR0ICsgJz5cXG4nICsgYm9keSArICc8LycgKyB0eXBlICsgJz5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmxpc3RpdGVtID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxsaT4nICsgdGV4dCArICc8L2xpPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuY2hlY2tib3ggPSBmdW5jdGlvbihjaGVja2VkKSB7XG4gIHJldHVybiAnPGlucHV0ICdcbiAgICArIChjaGVja2VkID8gJ2NoZWNrZWQ9XCJcIiAnIDogJycpXG4gICAgKyAnZGlzYWJsZWQ9XCJcIiB0eXBlPVwiY2hlY2tib3hcIidcbiAgICArICh0aGlzLm9wdGlvbnMueGh0bWwgPyAnIC8nIDogJycpXG4gICAgKyAnPiAnO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnBhcmFncmFwaCA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8cD4nICsgdGV4dCArICc8L3A+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS50YWJsZSA9IGZ1bmN0aW9uKGhlYWRlciwgYm9keSkge1xuICBpZiAoYm9keSkgYm9keSA9ICc8dGJvZHk+JyArIGJvZHkgKyAnPC90Ym9keT4nO1xuXG4gIHJldHVybiAnPHRhYmxlPlxcbidcbiAgICArICc8dGhlYWQ+XFxuJ1xuICAgICsgaGVhZGVyXG4gICAgKyAnPC90aGVhZD5cXG4nXG4gICAgKyBib2R5XG4gICAgKyAnPC90YWJsZT5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRhYmxlcm93ID0gZnVuY3Rpb24oY29udGVudCkge1xuICByZXR1cm4gJzx0cj5cXG4nICsgY29udGVudCArICc8L3RyPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudGFibGVjZWxsID0gZnVuY3Rpb24oY29udGVudCwgZmxhZ3MpIHtcbiAgdmFyIHR5cGUgPSBmbGFncy5oZWFkZXIgPyAndGgnIDogJ3RkJztcbiAgdmFyIHRhZyA9IGZsYWdzLmFsaWduXG4gICAgPyAnPCcgKyB0eXBlICsgJyBhbGlnbj1cIicgKyBmbGFncy5hbGlnbiArICdcIj4nXG4gICAgOiAnPCcgKyB0eXBlICsgJz4nO1xuICByZXR1cm4gdGFnICsgY29udGVudCArICc8LycgKyB0eXBlICsgJz5cXG4nO1xufTtcblxuLy8gc3BhbiBsZXZlbCByZW5kZXJlclxuUmVuZGVyZXIucHJvdG90eXBlLnN0cm9uZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8c3Ryb25nPicgKyB0ZXh0ICsgJzwvc3Ryb25nPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuZW0gPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPGVtPicgKyB0ZXh0ICsgJzwvZW0+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5jb2Rlc3BhbiA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8Y29kZT4nICsgdGV4dCArICc8L2NvZGU+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5iciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5vcHRpb25zLnhodG1sID8gJzxici8+JyA6ICc8YnI+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5kZWwgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPGRlbD4nICsgdGV4dCArICc8L2RlbD4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmxpbmsgPSBmdW5jdGlvbihocmVmLCB0aXRsZSwgdGV4dCkge1xuICBocmVmID0gY2xlYW5VcmwodGhpcy5vcHRpb25zLnNhbml0aXplLCB0aGlzLm9wdGlvbnMuYmFzZVVybCwgaHJlZik7XG4gIGlmIChocmVmID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cbiAgdmFyIG91dCA9ICc8YSBocmVmPVwiJyArIGVzY2FwZShocmVmKSArICdcIic7XG4gIGlmICh0aXRsZSkge1xuICAgIG91dCArPSAnIHRpdGxlPVwiJyArIHRpdGxlICsgJ1wiJztcbiAgfVxuICBvdXQgKz0gJz4nICsgdGV4dCArICc8L2E+JztcbiAgcmV0dXJuIG91dDtcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5pbWFnZSA9IGZ1bmN0aW9uKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gIGhyZWYgPSBjbGVhblVybCh0aGlzLm9wdGlvbnMuc2FuaXRpemUsIHRoaXMub3B0aW9ucy5iYXNlVXJsLCBocmVmKTtcbiAgaWYgKGhyZWYgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHZhciBvdXQgPSAnPGltZyBzcmM9XCInICsgaHJlZiArICdcIiBhbHQ9XCInICsgdGV4dCArICdcIic7XG4gIGlmICh0aXRsZSkge1xuICAgIG91dCArPSAnIHRpdGxlPVwiJyArIHRpdGxlICsgJ1wiJztcbiAgfVxuICBvdXQgKz0gdGhpcy5vcHRpb25zLnhodG1sID8gJy8+JyA6ICc+JztcbiAgcmV0dXJuIG91dDtcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gdGV4dDtcbn07XG5cbi8qKlxuICogVGV4dFJlbmRlcmVyXG4gKiByZXR1cm5zIG9ubHkgdGhlIHRleHR1YWwgcGFydCBvZiB0aGUgdG9rZW5cbiAqL1xuXG5mdW5jdGlvbiBUZXh0UmVuZGVyZXIoKSB7fVxuXG4vLyBubyBuZWVkIGZvciBibG9jayBsZXZlbCByZW5kZXJlcnNcblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5zdHJvbmcgPVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5lbSA9XG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmNvZGVzcGFuID1cblRleHRSZW5kZXJlci5wcm90b3R5cGUuZGVsID1cblRleHRSZW5kZXJlci5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0O1xufTtcblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5saW5rID1cblRleHRSZW5kZXJlci5wcm90b3R5cGUuaW1hZ2UgPSBmdW5jdGlvbihocmVmLCB0aXRsZSwgdGV4dCkge1xuICByZXR1cm4gJycgKyB0ZXh0O1xufTtcblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5iciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJyc7XG59O1xuXG4vKipcbiAqIFBhcnNpbmcgJiBDb21waWxpbmdcbiAqL1xuXG5mdW5jdGlvbiBQYXJzZXIob3B0aW9ucykge1xuICB0aGlzLnRva2VucyA9IFtdO1xuICB0aGlzLnRva2VuID0gbnVsbDtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCBtYXJrZWQuZGVmYXVsdHM7XG4gIHRoaXMub3B0aW9ucy5yZW5kZXJlciA9IHRoaXMub3B0aW9ucy5yZW5kZXJlciB8fCBuZXcgUmVuZGVyZXIoKTtcbiAgdGhpcy5yZW5kZXJlciA9IHRoaXMub3B0aW9ucy5yZW5kZXJlcjtcbiAgdGhpcy5yZW5kZXJlci5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICB0aGlzLnNsdWdnZXIgPSBuZXcgU2x1Z2dlcigpO1xufVxuXG4vKipcbiAqIFN0YXRpYyBQYXJzZSBNZXRob2RcbiAqL1xuXG5QYXJzZXIucGFyc2UgPSBmdW5jdGlvbihzcmMsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIob3B0aW9ucyk7XG4gIHJldHVybiBwYXJzZXIucGFyc2Uoc3JjKTtcbn07XG5cbi8qKlxuICogUGFyc2UgTG9vcFxuICovXG5cblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihzcmMpIHtcbiAgdGhpcy5pbmxpbmUgPSBuZXcgSW5saW5lTGV4ZXIoc3JjLmxpbmtzLCB0aGlzLm9wdGlvbnMpO1xuICAvLyB1c2UgYW4gSW5saW5lTGV4ZXIgd2l0aCBhIFRleHRSZW5kZXJlciB0byBleHRyYWN0IHB1cmUgdGV4dFxuICB0aGlzLmlubGluZVRleHQgPSBuZXcgSW5saW5lTGV4ZXIoXG4gICAgc3JjLmxpbmtzLFxuICAgIG1lcmdlKHt9LCB0aGlzLm9wdGlvbnMsIHtyZW5kZXJlcjogbmV3IFRleHRSZW5kZXJlcigpfSlcbiAgKTtcbiAgdGhpcy50b2tlbnMgPSBzcmMucmV2ZXJzZSgpO1xuXG4gIHZhciBvdXQgPSAnJztcbiAgd2hpbGUgKHRoaXMubmV4dCgpKSB7XG4gICAgb3V0ICs9IHRoaXMudG9rKCk7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBOZXh0IFRva2VuXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRva2VuID0gdGhpcy50b2tlbnMucG9wKCk7XG59O1xuXG4vKipcbiAqIFByZXZpZXcgTmV4dCBUb2tlblxuICovXG5cblBhcnNlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy50b2tlbnMubGVuZ3RoIC0gMV0gfHwgMDtcbn07XG5cbi8qKlxuICogUGFyc2UgVGV4dCBUb2tlbnNcbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYm9keSA9IHRoaXMudG9rZW4udGV4dDtcblxuICB3aGlsZSAodGhpcy5wZWVrKCkudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgYm9keSArPSAnXFxuJyArIHRoaXMubmV4dCgpLnRleHQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5pbmxpbmUub3V0cHV0KGJvZHkpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBDdXJyZW50IFRva2VuXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS50b2sgPSBmdW5jdGlvbigpIHtcbiAgc3dpdGNoICh0aGlzLnRva2VuLnR5cGUpIHtcbiAgICBjYXNlICdzcGFjZSc6IHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY2FzZSAnaHInOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5ocigpO1xuICAgIH1cbiAgICBjYXNlICdoZWFkaW5nJzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuaGVhZGluZyhcbiAgICAgICAgdGhpcy5pbmxpbmUub3V0cHV0KHRoaXMudG9rZW4udGV4dCksXG4gICAgICAgIHRoaXMudG9rZW4uZGVwdGgsXG4gICAgICAgIHVuZXNjYXBlKHRoaXMuaW5saW5lVGV4dC5vdXRwdXQodGhpcy50b2tlbi50ZXh0KSksXG4gICAgICAgIHRoaXMuc2x1Z2dlcik7XG4gICAgfVxuICAgIGNhc2UgJ2NvZGUnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5jb2RlKHRoaXMudG9rZW4udGV4dCxcbiAgICAgICAgdGhpcy50b2tlbi5sYW5nLFxuICAgICAgICB0aGlzLnRva2VuLmVzY2FwZWQpO1xuICAgIH1cbiAgICBjYXNlICd0YWJsZSc6IHtcbiAgICAgIHZhciBoZWFkZXIgPSAnJyxcbiAgICAgICAgICBib2R5ID0gJycsXG4gICAgICAgICAgaSxcbiAgICAgICAgICByb3csXG4gICAgICAgICAgY2VsbCxcbiAgICAgICAgICBqO1xuXG4gICAgICAvLyBoZWFkZXJcbiAgICAgIGNlbGwgPSAnJztcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRva2VuLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjZWxsICs9IHRoaXMucmVuZGVyZXIudGFibGVjZWxsKFxuICAgICAgICAgIHRoaXMuaW5saW5lLm91dHB1dCh0aGlzLnRva2VuLmhlYWRlcltpXSksXG4gICAgICAgICAgeyBoZWFkZXI6IHRydWUsIGFsaWduOiB0aGlzLnRva2VuLmFsaWduW2ldIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGhlYWRlciArPSB0aGlzLnJlbmRlcmVyLnRhYmxlcm93KGNlbGwpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50b2tlbi5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICByb3cgPSB0aGlzLnRva2VuLmNlbGxzW2ldO1xuXG4gICAgICAgIGNlbGwgPSAnJztcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNlbGwgKz0gdGhpcy5yZW5kZXJlci50YWJsZWNlbGwoXG4gICAgICAgICAgICB0aGlzLmlubGluZS5vdXRwdXQocm93W2pdKSxcbiAgICAgICAgICAgIHsgaGVhZGVyOiBmYWxzZSwgYWxpZ246IHRoaXMudG9rZW4uYWxpZ25bal0gfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5ICs9IHRoaXMucmVuZGVyZXIudGFibGVyb3coY2VsbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci50YWJsZShoZWFkZXIsIGJvZHkpO1xuICAgIH1cbiAgICBjYXNlICdibG9ja3F1b3RlX3N0YXJ0Jzoge1xuICAgICAgYm9keSA9ICcnO1xuXG4gICAgICB3aGlsZSAodGhpcy5uZXh0KCkudHlwZSAhPT0gJ2Jsb2NrcXVvdGVfZW5kJykge1xuICAgICAgICBib2R5ICs9IHRoaXMudG9rKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmJsb2NrcXVvdGUoYm9keSk7XG4gICAgfVxuICAgIGNhc2UgJ2xpc3Rfc3RhcnQnOiB7XG4gICAgICBib2R5ID0gJyc7XG4gICAgICB2YXIgb3JkZXJlZCA9IHRoaXMudG9rZW4ub3JkZXJlZCxcbiAgICAgICAgICBzdGFydCA9IHRoaXMudG9rZW4uc3RhcnQ7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnbGlzdF9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdChib2R5LCBvcmRlcmVkLCBzdGFydCk7XG4gICAgfVxuICAgIGNhc2UgJ2xpc3RfaXRlbV9zdGFydCc6IHtcbiAgICAgIGJvZHkgPSAnJztcbiAgICAgIHZhciBsb29zZSA9IHRoaXMudG9rZW4ubG9vc2U7XG4gICAgICB2YXIgY2hlY2tlZCA9IHRoaXMudG9rZW4uY2hlY2tlZDtcbiAgICAgIHZhciB0YXNrID0gdGhpcy50b2tlbi50YXNrO1xuXG4gICAgICBpZiAodGhpcy50b2tlbi50YXNrKSB7XG4gICAgICAgIGJvZHkgKz0gdGhpcy5yZW5kZXJlci5jaGVja2JveChjaGVja2VkKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRoaXMubmV4dCgpLnR5cGUgIT09ICdsaXN0X2l0ZW1fZW5kJykge1xuICAgICAgICBib2R5ICs9ICFsb29zZSAmJiB0aGlzLnRva2VuLnR5cGUgPT09ICd0ZXh0J1xuICAgICAgICAgID8gdGhpcy5wYXJzZVRleHQoKVxuICAgICAgICAgIDogdGhpcy50b2soKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmxpc3RpdGVtKGJvZHksIHRhc2ssIGNoZWNrZWQpO1xuICAgIH1cbiAgICBjYXNlICdodG1sJzoge1xuICAgICAgLy8gVE9ETyBwYXJzZSBpbmxpbmUgY29udGVudCBpZiBwYXJhbWV0ZXIgbWFya2Rvd249MVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuaHRtbCh0aGlzLnRva2VuLnRleHQpO1xuICAgIH1cbiAgICBjYXNlICdwYXJhZ3JhcGgnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wYXJhZ3JhcGgodGhpcy5pbmxpbmUub3V0cHV0KHRoaXMudG9rZW4udGV4dCkpO1xuICAgIH1cbiAgICBjYXNlICd0ZXh0Jzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGFyYWdyYXBoKHRoaXMucGFyc2VUZXh0KCkpO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB2YXIgZXJyTXNnID0gJ1Rva2VuIHdpdGggXCInICsgdGhpcy50b2tlbi50eXBlICsgJ1wiIHR5cGUgd2FzIG5vdCBmb3VuZC4nO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyTXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJNc2cpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTbHVnZ2VyIGdlbmVyYXRlcyBoZWFkZXIgaWRcbiAqL1xuXG5mdW5jdGlvbiBTbHVnZ2VyICgpIHtcbiAgdGhpcy5zZWVuID0ge307XG59XG5cbi8qKlxuICogQ29udmVydCBzdHJpbmcgdG8gdW5pcXVlIGlkXG4gKi9cblxuU2x1Z2dlci5wcm90b3R5cGUuc2x1ZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgc2x1ZyA9IHZhbHVlXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAudHJpbSgpXG4gICAgLnJlcGxhY2UoL1tcXHUyMDAwLVxcdTIwNkZcXHUyRTAwLVxcdTJFN0ZcXFxcJyFcIiMkJSYoKSorLC4vOjs8PT4/QFtcXF1eYHt8fX5dL2csICcnKVxuICAgIC5yZXBsYWNlKC9cXHMvZywgJy0nKTtcblxuICBpZiAodGhpcy5zZWVuLmhhc093blByb3BlcnR5KHNsdWcpKSB7XG4gICAgdmFyIG9yaWdpbmFsU2x1ZyA9IHNsdWc7XG4gICAgZG8ge1xuICAgICAgdGhpcy5zZWVuW29yaWdpbmFsU2x1Z10rKztcbiAgICAgIHNsdWcgPSBvcmlnaW5hbFNsdWcgKyAnLScgKyB0aGlzLnNlZW5bb3JpZ2luYWxTbHVnXTtcbiAgICB9IHdoaWxlICh0aGlzLnNlZW4uaGFzT3duUHJvcGVydHkoc2x1ZykpO1xuICB9XG4gIHRoaXMuc2VlbltzbHVnXSA9IDA7XG5cbiAgcmV0dXJuIHNsdWc7XG59O1xuXG4vKipcbiAqIEhlbHBlcnNcbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoaHRtbCwgZW5jb2RlKSB7XG4gIGlmIChlbmNvZGUpIHtcbiAgICBpZiAoZXNjYXBlLmVzY2FwZVRlc3QudGVzdChodG1sKSkge1xuICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZShlc2NhcGUuZXNjYXBlUmVwbGFjZSwgZnVuY3Rpb24gKGNoKSB7IHJldHVybiBlc2NhcGUucmVwbGFjZW1lbnRzW2NoXTsgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChlc2NhcGUuZXNjYXBlVGVzdE5vRW5jb2RlLnRlc3QoaHRtbCkpIHtcbiAgICAgIHJldHVybiBodG1sLnJlcGxhY2UoZXNjYXBlLmVzY2FwZVJlcGxhY2VOb0VuY29kZSwgZnVuY3Rpb24gKGNoKSB7IHJldHVybiBlc2NhcGUucmVwbGFjZW1lbnRzW2NoXTsgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGh0bWw7XG59XG5cbmVzY2FwZS5lc2NhcGVUZXN0ID0gL1smPD5cIiddLztcbmVzY2FwZS5lc2NhcGVSZXBsYWNlID0gL1smPD5cIiddL2c7XG5lc2NhcGUucmVwbGFjZW1lbnRzID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJiMzOTsnXG59O1xuXG5lc2NhcGUuZXNjYXBlVGVzdE5vRW5jb2RlID0gL1s8PlwiJ118Jig/ISM/XFx3KzspLztcbmVzY2FwZS5lc2NhcGVSZXBsYWNlTm9FbmNvZGUgPSAvWzw+XCInXXwmKD8hIz9cXHcrOykvZztcblxuZnVuY3Rpb24gdW5lc2NhcGUoaHRtbCkge1xuICAvLyBleHBsaWNpdGx5IG1hdGNoIGRlY2ltYWwsIGhleCwgYW5kIG5hbWVkIEhUTUwgZW50aXRpZXNcbiAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJigjKD86XFxkKyl8KD86I3hbMC05QS1GYS1mXSspfCg/OlxcdyspKTs/L2lnLCBmdW5jdGlvbihfLCBuKSB7XG4gICAgbiA9IG4udG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobiA9PT0gJ2NvbG9uJykgcmV0dXJuICc6JztcbiAgICBpZiAobi5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgcmV0dXJuIG4uY2hhckF0KDEpID09PSAneCdcbiAgICAgICAgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KG4uc3Vic3RyaW5nKDIpLCAxNikpXG4gICAgICAgIDogU3RyaW5nLmZyb21DaGFyQ29kZSgrbi5zdWJzdHJpbmcoMSkpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0KHJlZ2V4LCBvcHQpIHtcbiAgcmVnZXggPSByZWdleC5zb3VyY2UgfHwgcmVnZXg7XG4gIG9wdCA9IG9wdCB8fCAnJztcbiAgcmV0dXJuIHtcbiAgICByZXBsYWNlOiBmdW5jdGlvbihuYW1lLCB2YWwpIHtcbiAgICAgIHZhbCA9IHZhbC5zb3VyY2UgfHwgdmFsO1xuICAgICAgdmFsID0gdmFsLnJlcGxhY2UoLyhefFteXFxbXSlcXF4vZywgJyQxJyk7XG4gICAgICByZWdleCA9IHJlZ2V4LnJlcGxhY2UobmFtZSwgdmFsKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZ2V0UmVnZXg6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgsIG9wdCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjbGVhblVybChzYW5pdGl6ZSwgYmFzZSwgaHJlZikge1xuICBpZiAoc2FuaXRpemUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHByb3QgPSBkZWNvZGVVUklDb21wb25lbnQodW5lc2NhcGUoaHJlZikpXG4gICAgICAgIC5yZXBsYWNlKC9bXlxcdzpdL2csICcnKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHByb3QuaW5kZXhPZignamF2YXNjcmlwdDonKSA9PT0gMCB8fCBwcm90LmluZGV4T2YoJ3Zic2NyaXB0OicpID09PSAwIHx8IHByb3QuaW5kZXhPZignZGF0YTonKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGlmIChiYXNlICYmICFvcmlnaW5JbmRlcGVuZGVudFVybC50ZXN0KGhyZWYpKSB7XG4gICAgaHJlZiA9IHJlc29sdmVVcmwoYmFzZSwgaHJlZik7XG4gIH1cbiAgdHJ5IHtcbiAgICBocmVmID0gZW5jb2RlVVJJKGhyZWYpLnJlcGxhY2UoLyUyNS9nLCAnJScpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGhyZWY7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVVcmwoYmFzZSwgaHJlZikge1xuICBpZiAoIWJhc2VVcmxzWycgJyArIGJhc2VdKSB7XG4gICAgLy8gd2UgY2FuIGlnbm9yZSBldmVyeXRoaW5nIGluIGJhc2UgYWZ0ZXIgdGhlIGxhc3Qgc2xhc2ggb2YgaXRzIHBhdGggY29tcG9uZW50LFxuICAgIC8vIGJ1dCB3ZSBtaWdodCBuZWVkIHRvIGFkZCBfdGhhdF9cbiAgICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTNcbiAgICBpZiAoL15bXjpdKzpcXC8qW14vXSokLy50ZXN0KGJhc2UpKSB7XG4gICAgICBiYXNlVXJsc1snICcgKyBiYXNlXSA9IGJhc2UgKyAnLyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2VVcmxzWycgJyArIGJhc2VdID0gcnRyaW0oYmFzZSwgJy8nLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgYmFzZSA9IGJhc2VVcmxzWycgJyArIGJhc2VdO1xuXG4gIGlmIChocmVmLnNsaWNlKDAsIDIpID09PSAnLy8nKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvOltcXHNcXFNdKi8sICc6JykgKyBocmVmO1xuICB9IGVsc2UgaWYgKGhyZWYuY2hhckF0KDApID09PSAnLycpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC8oOlxcLypbXi9dKilbXFxzXFxTXSovLCAnJDEnKSArIGhyZWY7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2UgKyBocmVmO1xuICB9XG59XG52YXIgYmFzZVVybHMgPSB7fTtcbnZhciBvcmlnaW5JbmRlcGVuZGVudFVybCA9IC9eJHxeW2Etel1bYS16MC05Ky4tXSo6fF5bPyNdL2k7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxubm9vcC5leGVjID0gbm9vcDtcblxuZnVuY3Rpb24gbWVyZ2Uob2JqKSB7XG4gIHZhciBpID0gMSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGtleTtcblxuICBmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHRhcmdldCA9IGFyZ3VtZW50c1tpXTtcbiAgICBmb3IgKGtleSBpbiB0YXJnZXQpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgIG9ialtrZXldID0gdGFyZ2V0W2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gc3BsaXRDZWxscyh0YWJsZVJvdywgY291bnQpIHtcbiAgLy8gZW5zdXJlIHRoYXQgZXZlcnkgY2VsbC1kZWxpbWl0aW5nIHBpcGUgaGFzIGEgc3BhY2VcbiAgLy8gYmVmb3JlIGl0IHRvIGRpc3Rpbmd1aXNoIGl0IGZyb20gYW4gZXNjYXBlZCBwaXBlXG4gIHZhciByb3cgPSB0YWJsZVJvdy5yZXBsYWNlKC9cXHwvZywgZnVuY3Rpb24gKG1hdGNoLCBvZmZzZXQsIHN0cikge1xuICAgICAgICB2YXIgZXNjYXBlZCA9IGZhbHNlLFxuICAgICAgICAgICAgY3VyciA9IG9mZnNldDtcbiAgICAgICAgd2hpbGUgKC0tY3VyciA+PSAwICYmIHN0cltjdXJyXSA9PT0gJ1xcXFwnKSBlc2NhcGVkID0gIWVzY2FwZWQ7XG4gICAgICAgIGlmIChlc2NhcGVkKSB7XG4gICAgICAgICAgLy8gb2RkIG51bWJlciBvZiBzbGFzaGVzIG1lYW5zIHwgaXMgZXNjYXBlZFxuICAgICAgICAgIC8vIHNvIHdlIGxlYXZlIGl0IGFsb25lXG4gICAgICAgICAgcmV0dXJuICd8JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhZGQgc3BhY2UgYmVmb3JlIHVuZXNjYXBlZCB8XG4gICAgICAgICAgcmV0dXJuICcgfCc7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgY2VsbHMgPSByb3cuc3BsaXQoLyBcXHwvKSxcbiAgICAgIGkgPSAwO1xuXG4gIGlmIChjZWxscy5sZW5ndGggPiBjb3VudCkge1xuICAgIGNlbGxzLnNwbGljZShjb3VudCk7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKGNlbGxzLmxlbmd0aCA8IGNvdW50KSBjZWxscy5wdXNoKCcnKTtcbiAgfVxuXG4gIGZvciAoOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBsZWFkaW5nIG9yIHRyYWlsaW5nIHdoaXRlc3BhY2UgaXMgaWdub3JlZCBwZXIgdGhlIGdmbSBzcGVjXG4gICAgY2VsbHNbaV0gPSBjZWxsc1tpXS50cmltKCkucmVwbGFjZSgvXFxcXFxcfC9nLCAnfCcpO1xuICB9XG4gIHJldHVybiBjZWxscztcbn1cblxuLy8gUmVtb3ZlIHRyYWlsaW5nICdjJ3MuIEVxdWl2YWxlbnQgdG8gc3RyLnJlcGxhY2UoL2MqJC8sICcnKS5cbi8vIC9jKiQvIGlzIHZ1bG5lcmFibGUgdG8gUkVET1MuXG4vLyBpbnZlcnQ6IFJlbW92ZSBzdWZmaXggb2Ygbm9uLWMgY2hhcnMgaW5zdGVhZC4gRGVmYXVsdCBmYWxzZXkuXG5mdW5jdGlvbiBydHJpbShzdHIsIGMsIGludmVydCkge1xuICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIExlbmd0aCBvZiBzdWZmaXggbWF0Y2hpbmcgdGhlIGludmVydCBjb25kaXRpb24uXG4gIHZhciBzdWZmTGVuID0gMDtcblxuICAvLyBTdGVwIGxlZnQgdW50aWwgd2UgZmFpbCB0byBtYXRjaCB0aGUgaW52ZXJ0IGNvbmRpdGlvbi5cbiAgd2hpbGUgKHN1ZmZMZW4gPCBzdHIubGVuZ3RoKSB7XG4gICAgdmFyIGN1cnJDaGFyID0gc3RyLmNoYXJBdChzdHIubGVuZ3RoIC0gc3VmZkxlbiAtIDEpO1xuICAgIGlmIChjdXJyQ2hhciA9PT0gYyAmJiAhaW52ZXJ0KSB7XG4gICAgICBzdWZmTGVuKys7XG4gICAgfSBlbHNlIGlmIChjdXJyQ2hhciAhPT0gYyAmJiBpbnZlcnQpIHtcbiAgICAgIHN1ZmZMZW4rKztcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAtIHN1ZmZMZW4pO1xufVxuXG5mdW5jdGlvbiBmaW5kQ2xvc2luZ0JyYWNrZXQoc3RyLCBiKSB7XG4gIGlmIChzdHIuaW5kZXhPZihiWzFdKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgdmFyIGxldmVsID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcpIHtcbiAgICAgIGkrKztcbiAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gYlswXSkge1xuICAgICAgbGV2ZWwrKztcbiAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gYlsxXSkge1xuICAgICAgbGV2ZWwtLTtcbiAgICAgIGlmIChsZXZlbCA8IDApIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBNYXJrZWRcbiAqL1xuXG5mdW5jdGlvbiBtYXJrZWQoc3JjLCBvcHQsIGNhbGxiYWNrKSB7XG4gIC8vIHRocm93IGVycm9yIGluIGNhc2Ugb2Ygbm9uIHN0cmluZyBpbnB1dFxuICBpZiAodHlwZW9mIHNyYyA9PT0gJ3VuZGVmaW5lZCcgfHwgc3JjID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtYXJrZWQoKTogaW5wdXQgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBudWxsJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzcmMgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtYXJrZWQoKTogaW5wdXQgcGFyYW1ldGVyIGlzIG9mIHR5cGUgJ1xuICAgICAgKyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3JjKSArICcsIHN0cmluZyBleHBlY3RlZCcpO1xuICB9XG5cbiAgaWYgKGNhbGxiYWNrIHx8IHR5cGVvZiBvcHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdDtcbiAgICAgIG9wdCA9IG51bGw7XG4gICAgfVxuXG4gICAgb3B0ID0gbWVyZ2Uoe30sIG1hcmtlZC5kZWZhdWx0cywgb3B0IHx8IHt9KTtcblxuICAgIHZhciBoaWdobGlnaHQgPSBvcHQuaGlnaGxpZ2h0LFxuICAgICAgICB0b2tlbnMsXG4gICAgICAgIHBlbmRpbmcsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRva2VucyA9IExleGVyLmxleChzcmMsIG9wdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGUpO1xuICAgIH1cblxuICAgIHBlbmRpbmcgPSB0b2tlbnMubGVuZ3RoO1xuXG4gICAgdmFyIGRvbmUgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgb3B0LmhpZ2hsaWdodCA9IGhpZ2hsaWdodDtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICB9XG5cbiAgICAgIHZhciBvdXQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIG91dCA9IFBhcnNlci5wYXJzZSh0b2tlbnMsIG9wdCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVyciA9IGU7XG4gICAgICB9XG5cbiAgICAgIG9wdC5oaWdobGlnaHQgPSBoaWdobGlnaHQ7XG5cbiAgICAgIHJldHVybiBlcnJcbiAgICAgICAgPyBjYWxsYmFjayhlcnIpXG4gICAgICAgIDogY2FsbGJhY2sobnVsbCwgb3V0KTtcbiAgICB9O1xuXG4gICAgaWYgKCFoaWdobGlnaHQgfHwgaGlnaGxpZ2h0Lmxlbmd0aCA8IDMpIHtcbiAgICAgIHJldHVybiBkb25lKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIG9wdC5oaWdobGlnaHQ7XG5cbiAgICBpZiAoIXBlbmRpbmcpIHJldHVybiBkb25lKCk7XG5cbiAgICBmb3IgKDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlbi50eXBlICE9PSAnY29kZScpIHtcbiAgICAgICAgICByZXR1cm4gLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGlnaGxpZ2h0KHRva2VuLnRleHQsIHRva2VuLmxhbmcsIGZ1bmN0aW9uKGVyciwgY29kZSkge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgaWYgKGNvZGUgPT0gbnVsbCB8fCBjb2RlID09PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9rZW4udGV4dCA9IGNvZGU7XG4gICAgICAgICAgdG9rZW4uZXNjYXBlZCA9IHRydWU7XG4gICAgICAgICAgLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSh0b2tlbnNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHQpIG9wdCA9IG1lcmdlKHt9LCBtYXJrZWQuZGVmYXVsdHMsIG9wdCk7XG4gICAgcmV0dXJuIFBhcnNlci5wYXJzZShMZXhlci5sZXgoc3JjLCBvcHQpLCBvcHQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZS5tZXNzYWdlICs9ICdcXG5QbGVhc2UgcmVwb3J0IHRoaXMgdG8gaHR0cHM6Ly9naXRodWIuY29tL21hcmtlZGpzL21hcmtlZC4nO1xuICAgIGlmICgob3B0IHx8IG1hcmtlZC5kZWZhdWx0cykuc2lsZW50KSB7XG4gICAgICByZXR1cm4gJzxwPkFuIGVycm9yIG9jY3VycmVkOjwvcD48cHJlPidcbiAgICAgICAgKyBlc2NhcGUoZS5tZXNzYWdlICsgJycsIHRydWUpXG4gICAgICAgICsgJzwvcHJlPic7XG4gICAgfVxuICAgIHRocm93IGU7XG4gIH1cbn1cblxuLyoqXG4gKiBPcHRpb25zXG4gKi9cblxubWFya2VkLm9wdGlvbnMgPVxubWFya2VkLnNldE9wdGlvbnMgPSBmdW5jdGlvbihvcHQpIHtcbiAgbWVyZ2UobWFya2VkLmRlZmF1bHRzLCBvcHQpO1xuICByZXR1cm4gbWFya2VkO1xufTtcblxubWFya2VkLmdldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGJhc2VVcmw6IG51bGwsXG4gICAgYnJlYWtzOiBmYWxzZSxcbiAgICBnZm06IHRydWUsXG4gICAgaGVhZGVySWRzOiB0cnVlLFxuICAgIGhlYWRlclByZWZpeDogJycsXG4gICAgaGlnaGxpZ2h0OiBudWxsLFxuICAgIGxhbmdQcmVmaXg6ICdsYW5ndWFnZS0nLFxuICAgIG1hbmdsZTogdHJ1ZSxcbiAgICBwZWRhbnRpYzogZmFsc2UsXG4gICAgcmVuZGVyZXI6IG5ldyBSZW5kZXJlcigpLFxuICAgIHNhbml0aXplOiBmYWxzZSxcbiAgICBzYW5pdGl6ZXI6IG51bGwsXG4gICAgc2lsZW50OiBmYWxzZSxcbiAgICBzbWFydExpc3RzOiBmYWxzZSxcbiAgICBzbWFydHlwYW50czogZmFsc2UsXG4gICAgdGFibGVzOiB0cnVlLFxuICAgIHhodG1sOiBmYWxzZVxuICB9O1xufTtcblxubWFya2VkLmRlZmF1bHRzID0gbWFya2VkLmdldERlZmF1bHRzKCk7XG5cbi8qKlxuICogRXhwb3NlXG4gKi9cblxubWFya2VkLlBhcnNlciA9IFBhcnNlcjtcbm1hcmtlZC5wYXJzZXIgPSBQYXJzZXIucGFyc2U7XG5cbm1hcmtlZC5SZW5kZXJlciA9IFJlbmRlcmVyO1xubWFya2VkLlRleHRSZW5kZXJlciA9IFRleHRSZW5kZXJlcjtcblxubWFya2VkLkxleGVyID0gTGV4ZXI7XG5tYXJrZWQubGV4ZXIgPSBMZXhlci5sZXg7XG5cbm1hcmtlZC5JbmxpbmVMZXhlciA9IElubGluZUxleGVyO1xubWFya2VkLmlubGluZUxleGVyID0gSW5saW5lTGV4ZXIub3V0cHV0O1xuXG5tYXJrZWQuU2x1Z2dlciA9IFNsdWdnZXI7XG5cbm1hcmtlZC5wYXJzZSA9IG1hcmtlZDtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICBtb2R1bGUuZXhwb3J0cyA9IG1hcmtlZDtcbn0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIG1hcmtlZDsgfSk7XG59IGVsc2Uge1xuICByb290Lm1hcmtlZCA9IG1hcmtlZDtcbn1cbn0pKHRoaXMgfHwgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgbWFya2VkIGZyb20gXCJtYXJrZWRcIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBmaWx0ZXJYU1MgZnJvbSBcInhzc1wiO1xubGV0IHdoaXRlTGlzdE5vcm1hbDtcbmxldCB3aGl0ZUxpc3RTdmc7XG5leHBvcnQgY29uc3QgcmVuZGVyTWFya2Rvd24gPSAoY29udGVudCwgbWFya2VkT3B0aW9ucywgaGFzc09wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGlmICghd2hpdGVMaXN0Tm9ybWFsKSB7XG4gICAgICAgIHdoaXRlTGlzdE5vcm1hbCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmlsdGVyWFNTLndoaXRlTGlzdCksIHsgXCJoYS1pY29uXCI6IFtcImljb25cIl0gfSk7XG4gICAgfVxuICAgIGxldCB3aGl0ZUxpc3Q7XG4gICAgaWYgKGhhc3NPcHRpb25zLmFsbG93U3ZnKSB7XG4gICAgICAgIGlmICghd2hpdGVMaXN0U3ZnKSB7XG4gICAgICAgICAgICB3aGl0ZUxpc3RTdmcgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHdoaXRlTGlzdE5vcm1hbCksIHsgc3ZnOiBbXCJ4bWxuc1wiLCBcImhlaWdodFwiLCBcIndpZHRoXCJdLCBwYXRoOiBbXCJ0cmFuc2Zvcm1cIiwgXCJzdHJva2VcIiwgXCJkXCJdIH0pO1xuICAgICAgICB9XG4gICAgICAgIHdoaXRlTGlzdCA9IHdoaXRlTGlzdFN2ZztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHdoaXRlTGlzdCA9IHdoaXRlTGlzdE5vcm1hbDtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlclhTUyhtYXJrZWQoY29udGVudCwgbWFya2VkT3B0aW9ucyksIHtcbiAgICAgICAgd2hpdGVMaXN0LFxuICAgIH0pO1xufTtcblxuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7dmFyIHJlZiA9IGUuZGF0YTt2YXIgdHlwZSA9IHJlZi50eXBlO3ZhciBtZXRob2QgPSByZWYubWV0aG9kO3ZhciBpZCA9IHJlZi5pZDt2YXIgcGFyYW1zID0gcmVmLnBhcmFtczt2YXIgZixwO2lmICh0eXBlID09PSAnUlBDJyAmJiBtZXRob2QpIHtpZiAoZiA9IF9fd2VicGFja19leHBvcnRzX19bbWV0aG9kXSkge3AgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGYuYXBwbHkoX193ZWJwYWNrX2V4cG9ydHNfXywgcGFyYW1zKTsgfSk7fSBlbHNlIHtwID0gUHJvbWlzZS5yZWplY3QoJ05vIHN1Y2ggbWV0aG9kJyk7fXAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7cG9zdE1lc3NhZ2Uoe3R5cGU6ICdSUEMnLGlkOiBpZCxyZXN1bHQ6IHJlc3VsdH0pO30pLmNhdGNoKGZ1bmN0aW9uIChlKSB7dmFyIGVycm9yID0ge21lc3NhZ2U6IGV9O2lmIChlLnN0YWNrKSB7ZXJyb3IubWVzc2FnZSA9IGUubWVzc2FnZTtlcnJvci5zdGFjayA9IGUuc3RhY2s7ZXJyb3IubmFtZSA9IGUubmFtZTt9cG9zdE1lc3NhZ2Uoe3R5cGU6ICdSUEMnLGlkOiBpZCxlcnJvcjogZXJyb3J9KTt9KTt9fSk7cG9zdE1lc3NhZ2Uoe3R5cGU6ICdSUEMnLG1ldGhvZDogJ3JlYWR5J30pOyIsIi8qKlxuICogZGVmYXVsdCBzZXR0aW5nc1xuICpcbiAqIEBhdXRob3IgWm9uZ21pbiBMZWk8bGVpem9uZ21pbkBnbWFpbC5jb20+XG4gKi9cblxudmFyIEZpbHRlckNTUyA9IHJlcXVpcmUoXCJjc3NmaWx0ZXJcIikuRmlsdGVyQ1NTO1xudmFyIGdldERlZmF1bHRDU1NXaGl0ZUxpc3QgPSByZXF1aXJlKFwiY3NzZmlsdGVyXCIpLmdldERlZmF1bHRXaGl0ZUxpc3Q7XG52YXIgXyA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRXaGl0ZUxpc3QoKSB7XG4gIHJldHVybiB7XG4gICAgYTogW1widGFyZ2V0XCIsIFwiaHJlZlwiLCBcInRpdGxlXCJdLFxuICAgIGFiYnI6IFtcInRpdGxlXCJdLFxuICAgIGFkZHJlc3M6IFtdLFxuICAgIGFyZWE6IFtcInNoYXBlXCIsIFwiY29vcmRzXCIsIFwiaHJlZlwiLCBcImFsdFwiXSxcbiAgICBhcnRpY2xlOiBbXSxcbiAgICBhc2lkZTogW10sXG4gICAgYXVkaW86IFtcImF1dG9wbGF5XCIsIFwiY29udHJvbHNcIiwgXCJsb29wXCIsIFwicHJlbG9hZFwiLCBcInNyY1wiXSxcbiAgICBiOiBbXSxcbiAgICBiZGk6IFtcImRpclwiXSxcbiAgICBiZG86IFtcImRpclwiXSxcbiAgICBiaWc6IFtdLFxuICAgIGJsb2NrcXVvdGU6IFtcImNpdGVcIl0sXG4gICAgYnI6IFtdLFxuICAgIGNhcHRpb246IFtdLFxuICAgIGNlbnRlcjogW10sXG4gICAgY2l0ZTogW10sXG4gICAgY29kZTogW10sXG4gICAgY29sOiBbXCJhbGlnblwiLCBcInZhbGlnblwiLCBcInNwYW5cIiwgXCJ3aWR0aFwiXSxcbiAgICBjb2xncm91cDogW1wiYWxpZ25cIiwgXCJ2YWxpZ25cIiwgXCJzcGFuXCIsIFwid2lkdGhcIl0sXG4gICAgZGQ6IFtdLFxuICAgIGRlbDogW1wiZGF0ZXRpbWVcIl0sXG4gICAgZGV0YWlsczogW1wib3BlblwiXSxcbiAgICBkaXY6IFtdLFxuICAgIGRsOiBbXSxcbiAgICBkdDogW10sXG4gICAgZW06IFtdLFxuICAgIGZvbnQ6IFtcImNvbG9yXCIsIFwic2l6ZVwiLCBcImZhY2VcIl0sXG4gICAgZm9vdGVyOiBbXSxcbiAgICBoMTogW10sXG4gICAgaDI6IFtdLFxuICAgIGgzOiBbXSxcbiAgICBoNDogW10sXG4gICAgaDU6IFtdLFxuICAgIGg2OiBbXSxcbiAgICBoZWFkZXI6IFtdLFxuICAgIGhyOiBbXSxcbiAgICBpOiBbXSxcbiAgICBpbWc6IFtcInNyY1wiLCBcImFsdFwiLCBcInRpdGxlXCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIl0sXG4gICAgaW5zOiBbXCJkYXRldGltZVwiXSxcbiAgICBsaTogW10sXG4gICAgbWFyazogW10sXG4gICAgbmF2OiBbXSxcbiAgICBvbDogW10sXG4gICAgcDogW10sXG4gICAgcHJlOiBbXSxcbiAgICBzOiBbXSxcbiAgICBzZWN0aW9uOiBbXSxcbiAgICBzbWFsbDogW10sXG4gICAgc3BhbjogW10sXG4gICAgc3ViOiBbXSxcbiAgICBzdXA6IFtdLFxuICAgIHN0cm9uZzogW10sXG4gICAgdGFibGU6IFtcIndpZHRoXCIsIFwiYm9yZGVyXCIsIFwiYWxpZ25cIiwgXCJ2YWxpZ25cIl0sXG4gICAgdGJvZHk6IFtcImFsaWduXCIsIFwidmFsaWduXCJdLFxuICAgIHRkOiBbXCJ3aWR0aFwiLCBcInJvd3NwYW5cIiwgXCJjb2xzcGFuXCIsIFwiYWxpZ25cIiwgXCJ2YWxpZ25cIl0sXG4gICAgdGZvb3Q6IFtcImFsaWduXCIsIFwidmFsaWduXCJdLFxuICAgIHRoOiBbXCJ3aWR0aFwiLCBcInJvd3NwYW5cIiwgXCJjb2xzcGFuXCIsIFwiYWxpZ25cIiwgXCJ2YWxpZ25cIl0sXG4gICAgdGhlYWQ6IFtcImFsaWduXCIsIFwidmFsaWduXCJdLFxuICAgIHRyOiBbXCJyb3dzcGFuXCIsIFwiYWxpZ25cIiwgXCJ2YWxpZ25cIl0sXG4gICAgdHQ6IFtdLFxuICAgIHU6IFtdLFxuICAgIHVsOiBbXSxcbiAgICB2aWRlbzogW1wiYXV0b3BsYXlcIiwgXCJjb250cm9sc1wiLCBcImxvb3BcIiwgXCJwcmVsb2FkXCIsIFwic3JjXCIsIFwiaGVpZ2h0XCIsIFwid2lkdGhcIl1cbiAgfTtcbn1cblxudmFyIGRlZmF1bHRDU1NGaWx0ZXIgPSBuZXcgRmlsdGVyQ1NTKCk7XG5cbi8qKlxuICogZGVmYXVsdCBvblRhZyBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBvblRhZyh0YWcsIGh0bWwsIG9wdGlvbnMpIHtcbiAgLy8gZG8gbm90aGluZ1xufVxuXG4vKipcbiAqIGRlZmF1bHQgb25JZ25vcmVUYWcgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb25JZ25vcmVUYWcodGFnLCBodG1sLCBvcHRpb25zKSB7XG4gIC8vIGRvIG5vdGhpbmdcbn1cblxuLyoqXG4gKiBkZWZhdWx0IG9uVGFnQXR0ciBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb25UYWdBdHRyKHRhZywgbmFtZSwgdmFsdWUpIHtcbiAgLy8gZG8gbm90aGluZ1xufVxuXG4vKipcbiAqIGRlZmF1bHQgb25JZ25vcmVUYWdBdHRyIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBvbklnbm9yZVRhZ0F0dHIodGFnLCBuYW1lLCB2YWx1ZSkge1xuICAvLyBkbyBub3RoaW5nXG59XG5cbi8qKlxuICogZGVmYXVsdCBlc2NhcGVIdG1sIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqL1xuZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sKSB7XG4gIHJldHVybiBodG1sLnJlcGxhY2UoUkVHRVhQX0xULCBcIiZsdDtcIikucmVwbGFjZShSRUdFWFBfR1QsIFwiJmd0O1wiKTtcbn1cblxuLyoqXG4gKiBkZWZhdWx0IHNhZmVBdHRyVmFsdWUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gY3NzRmlsdGVyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNhZmVBdHRyVmFsdWUodGFnLCBuYW1lLCB2YWx1ZSwgY3NzRmlsdGVyKSB7XG4gIC8vIHVuZXNjYXBlIGF0dHJpYnV0ZSB2YWx1ZSBmaXJzdGx5XG4gIHZhbHVlID0gZnJpZW5kbHlBdHRyVmFsdWUodmFsdWUpO1xuXG4gIGlmIChuYW1lID09PSBcImhyZWZcIiB8fCBuYW1lID09PSBcInNyY1wiKSB7XG4gICAgLy8gZmlsdGVyIGBocmVmYCBhbmQgYHNyY2AgYXR0cmlidXRlXG4gICAgLy8gb25seSBhbGxvdyB0aGUgdmFsdWUgdGhhdCBzdGFydHMgd2l0aCBgaHR0cDovL2AgfCBgaHR0cHM6Ly9gIHwgYG1haWx0bzpgIHwgYC9gIHwgYCNgXG4gICAgdmFsdWUgPSBfLnRyaW0odmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PT0gXCIjXCIpIHJldHVybiBcIiNcIjtcbiAgICBpZiAoXG4gICAgICAhKFxuICAgICAgICB2YWx1ZS5zdWJzdHIoMCwgNykgPT09IFwiaHR0cDovL1wiIHx8XG4gICAgICAgIHZhbHVlLnN1YnN0cigwLCA4KSA9PT0gXCJodHRwczovL1wiIHx8XG4gICAgICAgIHZhbHVlLnN1YnN0cigwLCA3KSA9PT0gXCJtYWlsdG86XCIgfHxcbiAgICAgICAgdmFsdWUuc3Vic3RyKDAsIDQpID09PSBcInRlbDpcIiB8fFxuICAgICAgICB2YWx1ZVswXSA9PT0gXCIjXCIgfHxcbiAgICAgICAgdmFsdWVbMF0gPT09IFwiL1wiXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJiYWNrZ3JvdW5kXCIpIHtcbiAgICAvLyBmaWx0ZXIgYGJhY2tncm91bmRgIGF0dHJpYnV0ZSAobWF5YmUgbm8gdXNlKVxuICAgIC8vIGBqYXZhc2NyaXB0OmBcbiAgICBSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl80Lmxhc3RJbmRleCA9IDA7XG4gICAgaWYgKFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzQudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChuYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAvLyBgZXhwcmVzc2lvbigpYFxuICAgIFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzcubGFzdEluZGV4ID0gMDtcbiAgICBpZiAoUkVHRVhQX0RFRkFVTFRfT05fVEFHX0FUVFJfNy50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIC8vIGB1cmwoKWBcbiAgICBSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl84Lmxhc3RJbmRleCA9IDA7XG4gICAgaWYgKFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzgudGVzdCh2YWx1ZSkpIHtcbiAgICAgIFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzQubGFzdEluZGV4ID0gMDtcbiAgICAgIGlmIChSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl80LnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3NzRmlsdGVyICE9PSBmYWxzZSkge1xuICAgICAgY3NzRmlsdGVyID0gY3NzRmlsdGVyIHx8IGRlZmF1bHRDU1NGaWx0ZXI7XG4gICAgICB2YWx1ZSA9IGNzc0ZpbHRlci5wcm9jZXNzKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2NhcGUgYDw+XCJgIGJlZm9yZSByZXR1cm5zXG4gIHZhbHVlID0gZXNjYXBlQXR0clZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vLyBSZWdFeHAgbGlzdFxudmFyIFJFR0VYUF9MVCA9IC88L2c7XG52YXIgUkVHRVhQX0dUID0gLz4vZztcbnZhciBSRUdFWFBfUVVPVEUgPSAvXCIvZztcbnZhciBSRUdFWFBfUVVPVEVfMiA9IC8mcXVvdDsvZztcbnZhciBSRUdFWFBfQVRUUl9WQUxVRV8xID0gLyYjKFthLXpBLVowLTldKik7Py9naW07XG52YXIgUkVHRVhQX0FUVFJfVkFMVUVfQ09MT04gPSAvJmNvbG9uOz8vZ2ltO1xudmFyIFJFR0VYUF9BVFRSX1ZBTFVFX05FV0xJTkUgPSAvJm5ld2xpbmU7Py9naW07XG52YXIgUkVHRVhQX0RFRkFVTFRfT05fVEFHX0FUVFJfMyA9IC9cXC9cXCp8XFwqXFwvL2dtO1xudmFyIFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzQgPSAvKChqXFxzKmFcXHMqdlxccyphfHZcXHMqYnxsXFxzKmlcXHMqdlxccyplKVxccypzXFxzKmNcXHMqclxccyppXFxzKnBcXHMqdFxccyp8bVxccypvXFxzKmNcXHMqaFxccyphKVxcOi9naTtcbnZhciBSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl81ID0gL15bXFxzXCInYF0qKGRcXHMqYVxccyp0XFxzKmFcXHMqKVxcOi9naTtcbnZhciBSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl82ID0gL15bXFxzXCInYF0qKGRcXHMqYVxccyp0XFxzKmFcXHMqKVxcOlxccyppbWFnZVxcLy9naTtcbnZhciBSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl83ID0gL2VcXHMqeFxccypwXFxzKnJcXHMqZVxccypzXFxzKnNcXHMqaVxccypvXFxzKm5cXHMqXFwoLiovZ2k7XG52YXIgUkVHRVhQX0RFRkFVTFRfT05fVEFHX0FUVFJfOCA9IC91XFxzKnJcXHMqbFxccypcXCguKi9naTtcblxuLyoqXG4gKiBlc2NhcGUgZG91YmUgcXVvdGVcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHN0clxuICovXG5mdW5jdGlvbiBlc2NhcGVRdW90ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFR0VYUF9RVU9URSwgXCImcXVvdDtcIik7XG59XG5cbi8qKlxuICogdW5lc2NhcGUgZG91YmxlIHF1b3RlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfSBzdHJcbiAqL1xuZnVuY3Rpb24gdW5lc2NhcGVRdW90ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFR0VYUF9RVU9URV8yLCAnXCInKTtcbn1cblxuLyoqXG4gKiBlc2NhcGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlSHRtbEVudGl0aWVzKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVHRVhQX0FUVFJfVkFMVUVfMSwgZnVuY3Rpb24gcmVwbGFjZVVuaWNvZGUoc3RyLCBjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGVbMF0gPT09IFwieFwiIHx8IGNvZGVbMF0gPT09IFwiWFwiXG4gICAgICA/IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoY29kZS5zdWJzdHIoMSksIDE2KSlcbiAgICAgIDogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChjb2RlLCAxMCkpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBlc2NhcGUgaHRtbDUgbmV3IGRhbmdlciBlbnRpdGllc1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlRGFuZ2VySHRtbDVFbnRpdGllcyhzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKFJFR0VYUF9BVFRSX1ZBTFVFX0NPTE9OLCBcIjpcIilcbiAgICAucmVwbGFjZShSRUdFWFBfQVRUUl9WQUxVRV9ORVdMSU5FLCBcIiBcIik7XG59XG5cbi8qKlxuICogY2xlYXIgbm9ucHJpbnRhYmxlIGNoYXJhY3RlcnNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNsZWFyTm9uUHJpbnRhYmxlQ2hhcmFjdGVyKHN0cikge1xuICB2YXIgc3RyMiA9IFwiXCI7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBzdHIyICs9IHN0ci5jaGFyQ29kZUF0KGkpIDwgMzIgPyBcIiBcIiA6IHN0ci5jaGFyQXQoaSk7XG4gIH1cbiAgcmV0dXJuIF8udHJpbShzdHIyKTtcbn1cblxuLyoqXG4gKiBnZXQgZnJpZW5kbHkgYXR0cmlidXRlIHZhbHVlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBmcmllbmRseUF0dHJWYWx1ZShzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGVRdW90ZShzdHIpO1xuICBzdHIgPSBlc2NhcGVIdG1sRW50aXRpZXMoc3RyKTtcbiAgc3RyID0gZXNjYXBlRGFuZ2VySHRtbDVFbnRpdGllcyhzdHIpO1xuICBzdHIgPSBjbGVhck5vblByaW50YWJsZUNoYXJhY3RlcihzdHIpO1xuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIHVuZXNjYXBlIGF0dHJpYnV0ZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlQXR0clZhbHVlKHN0cikge1xuICBzdHIgPSBlc2NhcGVRdW90ZShzdHIpO1xuICBzdHIgPSBlc2NhcGVIdG1sKHN0cik7XG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogYG9uSWdub3JlVGFnYCBmdW5jdGlvbiBmb3IgcmVtb3ZpbmcgYWxsIHRoZSB0YWdzIHRoYXQgYXJlIG5vdCBpbiB3aGl0ZWxpc3RcbiAqL1xuZnVuY3Rpb24gb25JZ25vcmVUYWdTdHJpcEFsbCgpIHtcbiAgcmV0dXJuIFwiXCI7XG59XG5cbi8qKlxuICogcmVtb3ZlIHRhZyBib2R5XG4gKiBzcGVjaWZ5IGEgYHRhZ3NgIGxpc3QsIGlmIHRoZSB0YWcgaXMgbm90IGluIHRoZSBgdGFnc2AgbGlzdCB0aGVuIHByb2Nlc3MgYnkgdGhlIHNwZWNpZnkgZnVuY3Rpb24gKG9wdGlvbmFsKVxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IHRhZ3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG5leHRcbiAqL1xuZnVuY3Rpb24gU3RyaXBUYWdCb2R5KHRhZ3MsIG5leHQpIHtcbiAgaWYgKHR5cGVvZiBuZXh0ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBuZXh0ID0gZnVuY3Rpb24oKSB7fTtcbiAgfVxuXG4gIHZhciBpc1JlbW92ZUFsbFRhZyA9ICFBcnJheS5pc0FycmF5KHRhZ3MpO1xuICBmdW5jdGlvbiBpc1JlbW92ZVRhZyh0YWcpIHtcbiAgICBpZiAoaXNSZW1vdmVBbGxUYWcpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBfLmluZGV4T2YodGFncywgdGFnKSAhPT0gLTE7XG4gIH1cblxuICB2YXIgcmVtb3ZlTGlzdCA9IFtdO1xuICB2YXIgcG9zU3RhcnQgPSBmYWxzZTtcblxuICByZXR1cm4ge1xuICAgIG9uSWdub3JlVGFnOiBmdW5jdGlvbih0YWcsIGh0bWwsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChpc1JlbW92ZVRhZyh0YWcpKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmlzQ2xvc2luZykge1xuICAgICAgICAgIHZhciByZXQgPSBcIlsvcmVtb3ZlZF1cIjtcbiAgICAgICAgICB2YXIgZW5kID0gb3B0aW9ucy5wb3NpdGlvbiArIHJldC5sZW5ndGg7XG4gICAgICAgICAgcmVtb3ZlTGlzdC5wdXNoKFtcbiAgICAgICAgICAgIHBvc1N0YXJ0ICE9PSBmYWxzZSA/IHBvc1N0YXJ0IDogb3B0aW9ucy5wb3NpdGlvbixcbiAgICAgICAgICAgIGVuZFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHBvc1N0YXJ0ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXBvc1N0YXJ0KSB7XG4gICAgICAgICAgICBwb3NTdGFydCA9IG9wdGlvbnMucG9zaXRpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBcIltyZW1vdmVkXVwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV4dCh0YWcsIGh0bWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihodG1sKSB7XG4gICAgICB2YXIgcmV0aHRtbCA9IFwiXCI7XG4gICAgICB2YXIgbGFzdFBvcyA9IDA7XG4gICAgICBfLmZvckVhY2gocmVtb3ZlTGlzdCwgZnVuY3Rpb24ocG9zKSB7XG4gICAgICAgIHJldGh0bWwgKz0gaHRtbC5zbGljZShsYXN0UG9zLCBwb3NbMF0pO1xuICAgICAgICBsYXN0UG9zID0gcG9zWzFdO1xuICAgICAgfSk7XG4gICAgICByZXRodG1sICs9IGh0bWwuc2xpY2UobGFzdFBvcyk7XG4gICAgICByZXR1cm4gcmV0aHRtbDtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogcmVtb3ZlIGh0bWwgY29tbWVudHNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBzdHJpcENvbW1lbnRUYWcoaHRtbCkge1xuICByZXR1cm4gaHRtbC5yZXBsYWNlKFNUUklQX0NPTU1FTlRfVEFHX1JFR0VYUCwgXCJcIik7XG59XG52YXIgU1RSSVBfQ09NTUVOVF9UQUdfUkVHRVhQID0gLzwhLS1bXFxzXFxTXSo/LS0+L2c7XG5cbi8qKlxuICogcmVtb3ZlIGludmlzaWJsZSBjaGFyYWN0ZXJzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc3RyaXBCbGFua0NoYXIoaHRtbCkge1xuICB2YXIgY2hhcnMgPSBodG1sLnNwbGl0KFwiXCIpO1xuICBjaGFycyA9IGNoYXJzLmZpbHRlcihmdW5jdGlvbihjaGFyKSB7XG4gICAgdmFyIGMgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGMgPT09IDEyNykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChjIDw9IDMxKSB7XG4gICAgICBpZiAoYyA9PT0gMTAgfHwgYyA9PT0gMTMpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiBjaGFycy5qb2luKFwiXCIpO1xufVxuXG5leHBvcnRzLndoaXRlTGlzdCA9IGdldERlZmF1bHRXaGl0ZUxpc3QoKTtcbmV4cG9ydHMuZ2V0RGVmYXVsdFdoaXRlTGlzdCA9IGdldERlZmF1bHRXaGl0ZUxpc3Q7XG5leHBvcnRzLm9uVGFnID0gb25UYWc7XG5leHBvcnRzLm9uSWdub3JlVGFnID0gb25JZ25vcmVUYWc7XG5leHBvcnRzLm9uVGFnQXR0ciA9IG9uVGFnQXR0cjtcbmV4cG9ydHMub25JZ25vcmVUYWdBdHRyID0gb25JZ25vcmVUYWdBdHRyO1xuZXhwb3J0cy5zYWZlQXR0clZhbHVlID0gc2FmZUF0dHJWYWx1ZTtcbmV4cG9ydHMuZXNjYXBlSHRtbCA9IGVzY2FwZUh0bWw7XG5leHBvcnRzLmVzY2FwZVF1b3RlID0gZXNjYXBlUXVvdGU7XG5leHBvcnRzLnVuZXNjYXBlUXVvdGUgPSB1bmVzY2FwZVF1b3RlO1xuZXhwb3J0cy5lc2NhcGVIdG1sRW50aXRpZXMgPSBlc2NhcGVIdG1sRW50aXRpZXM7XG5leHBvcnRzLmVzY2FwZURhbmdlckh0bWw1RW50aXRpZXMgPSBlc2NhcGVEYW5nZXJIdG1sNUVudGl0aWVzO1xuZXhwb3J0cy5jbGVhck5vblByaW50YWJsZUNoYXJhY3RlciA9IGNsZWFyTm9uUHJpbnRhYmxlQ2hhcmFjdGVyO1xuZXhwb3J0cy5mcmllbmRseUF0dHJWYWx1ZSA9IGZyaWVuZGx5QXR0clZhbHVlO1xuZXhwb3J0cy5lc2NhcGVBdHRyVmFsdWUgPSBlc2NhcGVBdHRyVmFsdWU7XG5leHBvcnRzLm9uSWdub3JlVGFnU3RyaXBBbGwgPSBvbklnbm9yZVRhZ1N0cmlwQWxsO1xuZXhwb3J0cy5TdHJpcFRhZ0JvZHkgPSBTdHJpcFRhZ0JvZHk7XG5leHBvcnRzLnN0cmlwQ29tbWVudFRhZyA9IHN0cmlwQ29tbWVudFRhZztcbmV4cG9ydHMuc3RyaXBCbGFua0NoYXIgPSBzdHJpcEJsYW5rQ2hhcjtcbmV4cG9ydHMuY3NzRmlsdGVyID0gZGVmYXVsdENTU0ZpbHRlcjtcbmV4cG9ydHMuZ2V0RGVmYXVsdENTU1doaXRlTGlzdCA9IGdldERlZmF1bHRDU1NXaGl0ZUxpc3Q7XG4iLCIvKipcbiAqIHhzc1xuICpcbiAqIEBhdXRob3IgWm9uZ21pbiBMZWk8bGVpem9uZ21pbkBnbWFpbC5jb20+XG4gKi9cblxudmFyIERFRkFVTFQgPSByZXF1aXJlKFwiLi9kZWZhdWx0XCIpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoXCIuL3BhcnNlclwiKTtcbnZhciBGaWx0ZXJYU1MgPSByZXF1aXJlKFwiLi94c3NcIik7XG5cbi8qKlxuICogZmlsdGVyIHhzcyBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyB7IHdoaXRlTGlzdCwgb25UYWcsIG9uVGFnQXR0ciwgb25JZ25vcmVUYWcsIG9uSWdub3JlVGFnQXR0ciwgc2FmZUF0dHJWYWx1ZSwgZXNjYXBlSHRtbCB9XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZpbHRlclhTUyhodG1sLCBvcHRpb25zKSB7XG4gIHZhciB4c3MgPSBuZXcgRmlsdGVyWFNTKG9wdGlvbnMpO1xuICByZXR1cm4geHNzLnByb2Nlc3MoaHRtbCk7XG59XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZpbHRlclhTUztcbmV4cG9ydHMuZmlsdGVyWFNTID0gZmlsdGVyWFNTO1xuZXhwb3J0cy5GaWx0ZXJYU1MgPSBGaWx0ZXJYU1M7XG5mb3IgKHZhciBpIGluIERFRkFVTFQpIGV4cG9ydHNbaV0gPSBERUZBVUxUW2ldO1xuZm9yICh2YXIgaSBpbiBwYXJzZXIpIGV4cG9ydHNbaV0gPSBwYXJzZXJbaV07XG5cbi8vIHVzaW5nIGB4c3NgIG9uIHRoZSBicm93c2VyLCBvdXRwdXQgYGZpbHRlclhTU2AgdG8gdGhlIGdsb2JhbHNcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHdpbmRvdy5maWx0ZXJYU1MgPSBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gdXNpbmcgYHhzc2Agb24gdGhlIFdlYldvcmtlciwgb3V0cHV0IGBmaWx0ZXJYU1NgIHRvIHRoZSBnbG9iYWxzXG5mdW5jdGlvbiBpc1dvcmtlckVudigpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZTtcbn1cbmlmIChpc1dvcmtlckVudigpKSB7XG4gIHNlbGYuZmlsdGVyWFNTID0gbW9kdWxlLmV4cG9ydHM7XG59XG4iLCIvKipcbiAqIFNpbXBsZSBIVE1MIFBhcnNlclxuICpcbiAqIEBhdXRob3IgWm9uZ21pbiBMZWk8bGVpem9uZ21pbkBnbWFpbC5jb20+XG4gKi9cblxudmFyIF8gPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuXG4vKipcbiAqIGdldCB0YWcgbmFtZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sIGUuZy4gJzxhIGhlZj1cIiNcIj4nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldFRhZ05hbWUoaHRtbCkge1xuICB2YXIgaSA9IF8uc3BhY2VJbmRleChodG1sKTtcbiAgaWYgKGkgPT09IC0xKSB7XG4gICAgdmFyIHRhZ05hbWUgPSBodG1sLnNsaWNlKDEsIC0xKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnTmFtZSA9IGh0bWwuc2xpY2UoMSwgaSArIDEpO1xuICB9XG4gIHRhZ05hbWUgPSBfLnRyaW0odGFnTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHRhZ05hbWUuc2xpY2UoMCwgMSkgPT09IFwiL1wiKSB0YWdOYW1lID0gdGFnTmFtZS5zbGljZSgxKTtcbiAgaWYgKHRhZ05hbWUuc2xpY2UoLTEpID09PSBcIi9cIikgdGFnTmFtZSA9IHRhZ05hbWUuc2xpY2UoMCwgLTEpO1xuICByZXR1cm4gdGFnTmFtZTtcbn1cblxuLyoqXG4gKiBpcyBjbG9zZSB0YWc/XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWwg5aaC77yaJzxhIGhlZj1cIiNcIj4nXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0Nsb3NpbmcoaHRtbCkge1xuICByZXR1cm4gaHRtbC5zbGljZSgwLCAyKSA9PT0gXCI8L1wiO1xufVxuXG4vKipcbiAqIHBhcnNlIGlucHV0IGh0bWwgYW5kIHJldHVybnMgcHJvY2Vzc2VkIGh0bWxcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gb25UYWcgZS5nLiBmdW5jdGlvbiAoc291cmNlUG9zaXRpb24sIHBvc2l0aW9uLCB0YWcsIGh0bWwsIGlzQ2xvc2luZylcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVzY2FwZUh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcGFyc2VUYWcoaHRtbCwgb25UYWcsIGVzY2FwZUh0bWwpIHtcbiAgXCJ1c2VyIHN0cmljdFwiO1xuXG4gIHZhciByZXRodG1sID0gXCJcIjtcbiAgdmFyIGxhc3RQb3MgPSAwO1xuICB2YXIgdGFnU3RhcnQgPSBmYWxzZTtcbiAgdmFyIHF1b3RlU3RhcnQgPSBmYWxzZTtcbiAgdmFyIGN1cnJlbnRQb3MgPSAwO1xuICB2YXIgbGVuID0gaHRtbC5sZW5ndGg7XG4gIHZhciBjdXJyZW50VGFnTmFtZSA9IFwiXCI7XG4gIHZhciBjdXJyZW50SHRtbCA9IFwiXCI7XG5cbiAgZm9yIChjdXJyZW50UG9zID0gMDsgY3VycmVudFBvcyA8IGxlbjsgY3VycmVudFBvcysrKSB7XG4gICAgdmFyIGMgPSBodG1sLmNoYXJBdChjdXJyZW50UG9zKTtcbiAgICBpZiAodGFnU3RhcnQgPT09IGZhbHNlKSB7XG4gICAgICBpZiAoYyA9PT0gXCI8XCIpIHtcbiAgICAgICAgdGFnU3RhcnQgPSBjdXJyZW50UG9zO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHF1b3RlU3RhcnQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChjID09PSBcIjxcIikge1xuICAgICAgICAgIHJldGh0bWwgKz0gZXNjYXBlSHRtbChodG1sLnNsaWNlKGxhc3RQb3MsIGN1cnJlbnRQb3MpKTtcbiAgICAgICAgICB0YWdTdGFydCA9IGN1cnJlbnRQb3M7XG4gICAgICAgICAgbGFzdFBvcyA9IGN1cnJlbnRQb3M7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgICAgcmV0aHRtbCArPSBlc2NhcGVIdG1sKGh0bWwuc2xpY2UobGFzdFBvcywgdGFnU3RhcnQpKTtcbiAgICAgICAgICBjdXJyZW50SHRtbCA9IGh0bWwuc2xpY2UodGFnU3RhcnQsIGN1cnJlbnRQb3MgKyAxKTtcbiAgICAgICAgICBjdXJyZW50VGFnTmFtZSA9IGdldFRhZ05hbWUoY3VycmVudEh0bWwpO1xuICAgICAgICAgIHJldGh0bWwgKz0gb25UYWcoXG4gICAgICAgICAgICB0YWdTdGFydCxcbiAgICAgICAgICAgIHJldGh0bWwubGVuZ3RoLFxuICAgICAgICAgICAgY3VycmVudFRhZ05hbWUsXG4gICAgICAgICAgICBjdXJyZW50SHRtbCxcbiAgICAgICAgICAgIGlzQ2xvc2luZyhjdXJyZW50SHRtbClcbiAgICAgICAgICApO1xuICAgICAgICAgIGxhc3RQb3MgPSBjdXJyZW50UG9zICsgMTtcbiAgICAgICAgICB0YWdTdGFydCA9IGZhbHNlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYyA9PT0gJ1wiJyB8fCBjID09PSBcIidcIikgJiYgaHRtbC5jaGFyQXQoY3VycmVudFBvcyAtIDEpID09PSBcIj1cIikge1xuICAgICAgICAgIHF1b3RlU3RhcnQgPSBjO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYyA9PT0gcXVvdGVTdGFydCkge1xuICAgICAgICAgIHF1b3RlU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAobGFzdFBvcyA8IGh0bWwubGVuZ3RoKSB7XG4gICAgcmV0aHRtbCArPSBlc2NhcGVIdG1sKGh0bWwuc3Vic3RyKGxhc3RQb3MpKTtcbiAgfVxuXG4gIHJldHVybiByZXRodG1sO1xufVxuXG52YXIgUkVHRVhQX0lMTEVHQUxfQVRUUl9OQU1FID0gL1teYS16QS1aMC05XzpcXC5cXC1dL2dpbTtcblxuLyoqXG4gKiBwYXJzZSBpbnB1dCBhdHRyaWJ1dGVzIGFuZCByZXR1cm5zIHByb2Nlc3NlZCBhdHRyaWJ1dGVzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWwgZS5nLiBgaHJlZj1cIiNcIiB0YXJnZXQ9XCJfYmxhbmtcImBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQXR0ciBlLmcuIGBmdW5jdGlvbiAobmFtZSwgdmFsdWUpYFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBwYXJzZUF0dHIoaHRtbCwgb25BdHRyKSB7XG4gIFwidXNlciBzdHJpY3RcIjtcblxuICB2YXIgbGFzdFBvcyA9IDA7XG4gIHZhciByZXRBdHRycyA9IFtdO1xuICB2YXIgdG1wTmFtZSA9IGZhbHNlO1xuICB2YXIgbGVuID0gaHRtbC5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gYWRkQXR0cihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBfLnRyaW0obmFtZSk7XG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZShSRUdFWFBfSUxMRUdBTF9BVFRSX05BTUUsIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG5hbWUubGVuZ3RoIDwgMSkgcmV0dXJuO1xuICAgIHZhciByZXQgPSBvbkF0dHIobmFtZSwgdmFsdWUgfHwgXCJcIik7XG4gICAgaWYgKHJldCkgcmV0QXR0cnMucHVzaChyZXQpO1xuICB9XG5cbiAgLy8g6YCQ5Liq5YiG5p6Q5a2X56ymXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYyA9IGh0bWwuY2hhckF0KGkpO1xuICAgIHZhciB2LCBqO1xuICAgIGlmICh0bXBOYW1lID09PSBmYWxzZSAmJiBjID09PSBcIj1cIikge1xuICAgICAgdG1wTmFtZSA9IGh0bWwuc2xpY2UobGFzdFBvcywgaSk7XG4gICAgICBsYXN0UG9zID0gaSArIDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHRtcE5hbWUgIT09IGZhbHNlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGkgPT09IGxhc3RQb3MgJiZcbiAgICAgICAgKGMgPT09ICdcIicgfHwgYyA9PT0gXCInXCIpICYmXG4gICAgICAgIGh0bWwuY2hhckF0KGkgLSAxKSA9PT0gXCI9XCJcbiAgICAgICkge1xuICAgICAgICBqID0gaHRtbC5pbmRleE9mKGMsIGkgKyAxKTtcbiAgICAgICAgaWYgKGogPT09IC0xKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdiA9IF8udHJpbShodG1sLnNsaWNlKGxhc3RQb3MgKyAxLCBqKSk7XG4gICAgICAgICAgYWRkQXR0cih0bXBOYW1lLCB2KTtcbiAgICAgICAgICB0bXBOYW1lID0gZmFsc2U7XG4gICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAxO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgvXFxzfFxcbnxcXHQvLnRlc3QoYykpIHtcbiAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcc3xcXG58XFx0L2csIFwiIFwiKTtcbiAgICAgIGlmICh0bXBOYW1lID09PSBmYWxzZSkge1xuICAgICAgICBqID0gZmluZE5leHRFcXVhbChodG1sLCBpKTtcbiAgICAgICAgaWYgKGogPT09IC0xKSB7XG4gICAgICAgICAgdiA9IF8udHJpbShodG1sLnNsaWNlKGxhc3RQb3MsIGkpKTtcbiAgICAgICAgICBhZGRBdHRyKHYpO1xuICAgICAgICAgIHRtcE5hbWUgPSBmYWxzZTtcbiAgICAgICAgICBsYXN0UG9zID0gaSArIDE7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaSA9IGogLSAxO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqID0gZmluZEJlZm9yZUVxdWFsKGh0bWwsIGkgLSAxKTtcbiAgICAgICAgaWYgKGogPT09IC0xKSB7XG4gICAgICAgICAgdiA9IF8udHJpbShodG1sLnNsaWNlKGxhc3RQb3MsIGkpKTtcbiAgICAgICAgICB2ID0gc3RyaXBRdW90ZVdyYXAodik7XG4gICAgICAgICAgYWRkQXR0cih0bXBOYW1lLCB2KTtcbiAgICAgICAgICB0bXBOYW1lID0gZmFsc2U7XG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAxO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGxhc3RQb3MgPCBodG1sLmxlbmd0aCkge1xuICAgIGlmICh0bXBOYW1lID09PSBmYWxzZSkge1xuICAgICAgYWRkQXR0cihodG1sLnNsaWNlKGxhc3RQb3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQXR0cih0bXBOYW1lLCBzdHJpcFF1b3RlV3JhcChfLnRyaW0oaHRtbC5zbGljZShsYXN0UG9zKSkpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gXy50cmltKHJldEF0dHJzLmpvaW4oXCIgXCIpKTtcbn1cblxuZnVuY3Rpb24gZmluZE5leHRFcXVhbChzdHIsIGkpIHtcbiAgZm9yICg7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYyA9IHN0cltpXTtcbiAgICBpZiAoYyA9PT0gXCIgXCIpIGNvbnRpbnVlO1xuICAgIGlmIChjID09PSBcIj1cIikgcmV0dXJuIGk7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRCZWZvcmVFcXVhbChzdHIsIGkpIHtcbiAgZm9yICg7IGkgPiAwOyBpLS0pIHtcbiAgICB2YXIgYyA9IHN0cltpXTtcbiAgICBpZiAoYyA9PT0gXCIgXCIpIGNvbnRpbnVlO1xuICAgIGlmIChjID09PSBcIj1cIikgcmV0dXJuIGk7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUXVvdGVXcmFwU3RyaW5nKHRleHQpIHtcbiAgaWYgKFxuICAgICh0ZXh0WzBdID09PSAnXCInICYmIHRleHRbdGV4dC5sZW5ndGggLSAxXSA9PT0gJ1wiJykgfHxcbiAgICAodGV4dFswXSA9PT0gXCInXCIgJiYgdGV4dFt0ZXh0Lmxlbmd0aCAtIDFdID09PSBcIidcIilcbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwUXVvdGVXcmFwKHRleHQpIHtcbiAgaWYgKGlzUXVvdGVXcmFwU3RyaW5nKHRleHQpKSB7XG4gICAgcmV0dXJuIHRleHQuc3Vic3RyKDEsIHRleHQubGVuZ3RoIC0gMik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cbn1cblxuZXhwb3J0cy5wYXJzZVRhZyA9IHBhcnNlVGFnO1xuZXhwb3J0cy5wYXJzZUF0dHIgPSBwYXJzZUF0dHI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5kZXhPZjogZnVuY3Rpb24oYXJyLCBpdGVtKSB7XG4gICAgdmFyIGksIGo7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgICByZXR1cm4gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgfVxuICAgIGZvciAoaSA9IDAsIGogPSBhcnIubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpZiAoYXJyW2ldID09PSBpdGVtKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH0sXG4gIGZvckVhY2g6IGZ1bmN0aW9uKGFyciwgZm4sIHNjb3BlKSB7XG4gICAgdmFyIGksIGo7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgICByZXR1cm4gYXJyLmZvckVhY2goZm4sIHNjb3BlKTtcbiAgICB9XG4gICAgZm9yIChpID0gMCwgaiA9IGFyci5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGZuLmNhbGwoc2NvcGUsIGFycltpXSwgaSwgYXJyKTtcbiAgICB9XG4gIH0sXG4gIHRyaW06IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChTdHJpbmcucHJvdG90eXBlLnRyaW0pIHtcbiAgICAgIHJldHVybiBzdHIudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCBcIlwiKTtcbiAgfSxcbiAgc3BhY2VJbmRleDogZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHJlZyA9IC9cXHN8XFxufFxcdC87XG4gICAgdmFyIG1hdGNoID0gcmVnLmV4ZWMoc3RyKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaC5pbmRleCA6IC0xO1xuICB9XG59O1xuIiwiLyoqXG4gKiBmaWx0ZXIgeHNzXG4gKlxuICogQGF1dGhvciBab25nbWluIExlaTxsZWl6b25nbWluQGdtYWlsLmNvbT5cbiAqL1xuXG52YXIgRmlsdGVyQ1NTID0gcmVxdWlyZShcImNzc2ZpbHRlclwiKS5GaWx0ZXJDU1M7XG52YXIgREVGQVVMVCA9IHJlcXVpcmUoXCIuL2RlZmF1bHRcIik7XG52YXIgcGFyc2VyID0gcmVxdWlyZShcIi4vcGFyc2VyXCIpO1xudmFyIHBhcnNlVGFnID0gcGFyc2VyLnBhcnNlVGFnO1xudmFyIHBhcnNlQXR0ciA9IHBhcnNlci5wYXJzZUF0dHI7XG52YXIgXyA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbi8qKlxuICogcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGB1bmRlZmluZWRgIG9yIGBudWxsYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbDtcbn1cblxuLyoqXG4gKiBnZXQgYXR0cmlidXRlcyBmb3IgYSB0YWdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7T2JqZWN0fVxuICogICAtIHtTdHJpbmd9IGh0bWxcbiAqICAgLSB7Qm9vbGVhbn0gY2xvc2luZ1xuICovXG5mdW5jdGlvbiBnZXRBdHRycyhodG1sKSB7XG4gIHZhciBpID0gXy5zcGFjZUluZGV4KGh0bWwpO1xuICBpZiAoaSA9PT0gLTEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHRtbDogXCJcIixcbiAgICAgIGNsb3Npbmc6IGh0bWxbaHRtbC5sZW5ndGggLSAyXSA9PT0gXCIvXCJcbiAgICB9O1xuICB9XG4gIGh0bWwgPSBfLnRyaW0oaHRtbC5zbGljZShpICsgMSwgLTEpKTtcbiAgdmFyIGlzQ2xvc2luZyA9IGh0bWxbaHRtbC5sZW5ndGggLSAxXSA9PT0gXCIvXCI7XG4gIGlmIChpc0Nsb3NpbmcpIGh0bWwgPSBfLnRyaW0oaHRtbC5zbGljZSgwLCAtMSkpO1xuICByZXR1cm4ge1xuICAgIGh0bWw6IGh0bWwsXG4gICAgY2xvc2luZzogaXNDbG9zaW5nXG4gIH07XG59XG5cbi8qKlxuICogc2hhbGxvdyBjb3B5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBzaGFsbG93Q29weU9iamVjdChvYmopIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIHJldFtpXSA9IG9ialtpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIEZpbHRlclhTUyBjbGFzc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiAgICAgICAgd2hpdGVMaXN0LCBvblRhZywgb25UYWdBdHRyLCBvbklnbm9yZVRhZyxcbiAqICAgICAgICBvbklnbm9yZVRhZ0F0dHIsIHNhZmVBdHRyVmFsdWUsIGVzY2FwZUh0bWxcbiAqICAgICAgICBzdHJpcElnbm9yZVRhZ0JvZHksIGFsbG93Q29tbWVudFRhZywgc3RyaXBCbGFua0NoYXJcbiAqICAgICAgICBjc3N7d2hpdGVMaXN0LCBvbkF0dHIsIG9uSWdub3JlQXR0cn0gYGNzcz1mYWxzZWAgbWVhbnMgZG9uJ3QgdXNlIGBjc3NmaWx0ZXJgXG4gKi9cbmZ1bmN0aW9uIEZpbHRlclhTUyhvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBzaGFsbG93Q29weU9iamVjdChvcHRpb25zIHx8IHt9KTtcblxuICBpZiAob3B0aW9ucy5zdHJpcElnbm9yZVRhZykge1xuICAgIGlmIChvcHRpb25zLm9uSWdub3JlVGFnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnTm90ZXM6IGNhbm5vdCB1c2UgdGhlc2UgdHdvIG9wdGlvbnMgXCJzdHJpcElnbm9yZVRhZ1wiIGFuZCBcIm9uSWdub3JlVGFnXCIgYXQgdGhlIHNhbWUgdGltZSdcbiAgICAgICk7XG4gICAgfVxuICAgIG9wdGlvbnMub25JZ25vcmVUYWcgPSBERUZBVUxULm9uSWdub3JlVGFnU3RyaXBBbGw7XG4gIH1cblxuICBvcHRpb25zLndoaXRlTGlzdCA9IG9wdGlvbnMud2hpdGVMaXN0IHx8IERFRkFVTFQud2hpdGVMaXN0O1xuICBvcHRpb25zLm9uVGFnID0gb3B0aW9ucy5vblRhZyB8fCBERUZBVUxULm9uVGFnO1xuICBvcHRpb25zLm9uVGFnQXR0ciA9IG9wdGlvbnMub25UYWdBdHRyIHx8IERFRkFVTFQub25UYWdBdHRyO1xuICBvcHRpb25zLm9uSWdub3JlVGFnID0gb3B0aW9ucy5vbklnbm9yZVRhZyB8fCBERUZBVUxULm9uSWdub3JlVGFnO1xuICBvcHRpb25zLm9uSWdub3JlVGFnQXR0ciA9IG9wdGlvbnMub25JZ25vcmVUYWdBdHRyIHx8IERFRkFVTFQub25JZ25vcmVUYWdBdHRyO1xuICBvcHRpb25zLnNhZmVBdHRyVmFsdWUgPSBvcHRpb25zLnNhZmVBdHRyVmFsdWUgfHwgREVGQVVMVC5zYWZlQXR0clZhbHVlO1xuICBvcHRpb25zLmVzY2FwZUh0bWwgPSBvcHRpb25zLmVzY2FwZUh0bWwgfHwgREVGQVVMVC5lc2NhcGVIdG1sO1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gIGlmIChvcHRpb25zLmNzcyA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLmNzc0ZpbHRlciA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMuY3NzID0gb3B0aW9ucy5jc3MgfHwge307XG4gICAgdGhpcy5jc3NGaWx0ZXIgPSBuZXcgRmlsdGVyQ1NTKG9wdGlvbnMuY3NzKTtcbiAgfVxufVxuXG4vKipcbiAqIHN0YXJ0IHByb2Nlc3MgYW5kIHJldHVybnMgcmVzdWx0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuRmlsdGVyWFNTLnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24oaHRtbCkge1xuICAvLyBjb21wYXRpYmxlIHdpdGggdGhlIGlucHV0XG4gIGh0bWwgPSBodG1sIHx8IFwiXCI7XG4gIGh0bWwgPSBodG1sLnRvU3RyaW5nKCk7XG4gIGlmICghaHRtbCkgcmV0dXJuIFwiXCI7XG5cbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIG9wdGlvbnMgPSBtZS5vcHRpb25zO1xuICB2YXIgd2hpdGVMaXN0ID0gb3B0aW9ucy53aGl0ZUxpc3Q7XG4gIHZhciBvblRhZyA9IG9wdGlvbnMub25UYWc7XG4gIHZhciBvbklnbm9yZVRhZyA9IG9wdGlvbnMub25JZ25vcmVUYWc7XG4gIHZhciBvblRhZ0F0dHIgPSBvcHRpb25zLm9uVGFnQXR0cjtcbiAgdmFyIG9uSWdub3JlVGFnQXR0ciA9IG9wdGlvbnMub25JZ25vcmVUYWdBdHRyO1xuICB2YXIgc2FmZUF0dHJWYWx1ZSA9IG9wdGlvbnMuc2FmZUF0dHJWYWx1ZTtcbiAgdmFyIGVzY2FwZUh0bWwgPSBvcHRpb25zLmVzY2FwZUh0bWw7XG4gIHZhciBjc3NGaWx0ZXIgPSBtZS5jc3NGaWx0ZXI7XG5cbiAgLy8gcmVtb3ZlIGludmlzaWJsZSBjaGFyYWN0ZXJzXG4gIGlmIChvcHRpb25zLnN0cmlwQmxhbmtDaGFyKSB7XG4gICAgaHRtbCA9IERFRkFVTFQuc3RyaXBCbGFua0NoYXIoaHRtbCk7XG4gIH1cblxuICAvLyByZW1vdmUgaHRtbCBjb21tZW50c1xuICBpZiAoIW9wdGlvbnMuYWxsb3dDb21tZW50VGFnKSB7XG4gICAgaHRtbCA9IERFRkFVTFQuc3RyaXBDb21tZW50VGFnKGh0bWwpO1xuICB9XG5cbiAgLy8gaWYgZW5hYmxlIHN0cmlwSWdub3JlVGFnQm9keVxuICB2YXIgc3RyaXBJZ25vcmVUYWdCb2R5ID0gZmFsc2U7XG4gIGlmIChvcHRpb25zLnN0cmlwSWdub3JlVGFnQm9keSkge1xuICAgIHZhciBzdHJpcElnbm9yZVRhZ0JvZHkgPSBERUZBVUxULlN0cmlwVGFnQm9keShcbiAgICAgIG9wdGlvbnMuc3RyaXBJZ25vcmVUYWdCb2R5LFxuICAgICAgb25JZ25vcmVUYWdcbiAgICApO1xuICAgIG9uSWdub3JlVGFnID0gc3RyaXBJZ25vcmVUYWdCb2R5Lm9uSWdub3JlVGFnO1xuICB9XG5cbiAgdmFyIHJldEh0bWwgPSBwYXJzZVRhZyhcbiAgICBodG1sLFxuICAgIGZ1bmN0aW9uKHNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbiwgdGFnLCBodG1sLCBpc0Nsb3NpbmcpIHtcbiAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICBzb3VyY2VQb3NpdGlvbjogc291cmNlUG9zaXRpb24sXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgaXNDbG9zaW5nOiBpc0Nsb3NpbmcsXG4gICAgICAgIGlzV2hpdGU6IHdoaXRlTGlzdC5oYXNPd25Qcm9wZXJ0eSh0YWcpXG4gICAgICB9O1xuXG4gICAgICAvLyBjYWxsIGBvblRhZygpYFxuICAgICAgdmFyIHJldCA9IG9uVGFnKHRhZywgaHRtbCwgaW5mbyk7XG4gICAgICBpZiAoIWlzTnVsbChyZXQpKSByZXR1cm4gcmV0O1xuXG4gICAgICBpZiAoaW5mby5pc1doaXRlKSB7XG4gICAgICAgIGlmIChpbmZvLmlzQ2xvc2luZykge1xuICAgICAgICAgIHJldHVybiBcIjwvXCIgKyB0YWcgKyBcIj5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhdHRycyA9IGdldEF0dHJzKGh0bWwpO1xuICAgICAgICB2YXIgd2hpdGVBdHRyTGlzdCA9IHdoaXRlTGlzdFt0YWddO1xuICAgICAgICB2YXIgYXR0cnNIdG1sID0gcGFyc2VBdHRyKGF0dHJzLmh0bWwsIGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgLy8gY2FsbCBgb25UYWdBdHRyKClgXG4gICAgICAgICAgdmFyIGlzV2hpdGVBdHRyID0gXy5pbmRleE9mKHdoaXRlQXR0ckxpc3QsIG5hbWUpICE9PSAtMTtcbiAgICAgICAgICB2YXIgcmV0ID0gb25UYWdBdHRyKHRhZywgbmFtZSwgdmFsdWUsIGlzV2hpdGVBdHRyKTtcbiAgICAgICAgICBpZiAoIWlzTnVsbChyZXQpKSByZXR1cm4gcmV0O1xuXG4gICAgICAgICAgaWYgKGlzV2hpdGVBdHRyKSB7XG4gICAgICAgICAgICAvLyBjYWxsIGBzYWZlQXR0clZhbHVlKClgXG4gICAgICAgICAgICB2YWx1ZSA9IHNhZmVBdHRyVmFsdWUodGFnLCBuYW1lLCB2YWx1ZSwgY3NzRmlsdGVyKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gbmFtZSArICc9XCInICsgdmFsdWUgKyAnXCInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNhbGwgYG9uSWdub3JlVGFnQXR0cigpYFxuICAgICAgICAgICAgdmFyIHJldCA9IG9uSWdub3JlVGFnQXR0cih0YWcsIG5hbWUsIHZhbHVlLCBpc1doaXRlQXR0cik7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbChyZXQpKSByZXR1cm4gcmV0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYnVpbGQgbmV3IHRhZyBodG1sXG4gICAgICAgIHZhciBodG1sID0gXCI8XCIgKyB0YWc7XG4gICAgICAgIGlmIChhdHRyc0h0bWwpIGh0bWwgKz0gXCIgXCIgKyBhdHRyc0h0bWw7XG4gICAgICAgIGlmIChhdHRycy5jbG9zaW5nKSBodG1sICs9IFwiIC9cIjtcbiAgICAgICAgaHRtbCArPSBcIj5cIjtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjYWxsIGBvbklnbm9yZVRhZygpYFxuICAgICAgICB2YXIgcmV0ID0gb25JZ25vcmVUYWcodGFnLCBodG1sLCBpbmZvKTtcbiAgICAgICAgaWYgKCFpc051bGwocmV0KSkgcmV0dXJuIHJldDtcbiAgICAgICAgcmV0dXJuIGVzY2FwZUh0bWwoaHRtbCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlc2NhcGVIdG1sXG4gICk7XG5cbiAgLy8gaWYgZW5hYmxlIHN0cmlwSWdub3JlVGFnQm9keVxuICBpZiAoc3RyaXBJZ25vcmVUYWdCb2R5KSB7XG4gICAgcmV0SHRtbCA9IHN0cmlwSWdub3JlVGFnQm9keS5yZW1vdmUocmV0SHRtbCk7XG4gIH1cblxuICByZXR1cm4gcmV0SHRtbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyWFNTO1xuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FJQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeHBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOVpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=