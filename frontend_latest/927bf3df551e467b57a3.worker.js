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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/ts-loader/index.js?!./src/components/data-table/sort_filter_worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shallowEqual = function shallowEqual(newValue, oldValue) {
  return newValue === oldValue;
};

var simpleIsEqual = function simpleIsEqual(newArgs, lastArgs) {
  return newArgs.length === lastArgs.length && newArgs.every(function (newArg, index) {
    return shallowEqual(newArg, lastArgs[index]);
  });
};

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = simpleIsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/ts-loader/index.js?!./src/components/data-table/sort_filter_worker.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/ts-loader??ref--4-0!./src/components/data-table/sort_filter_worker.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: filterSortData, filterData, sortData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSortData", function() { return filterSortData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterData", function() { return filterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortData", function() { return sortData; });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");

const filterSortData = Object(memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])(async (data, columns, filter, direction, sortColumn) => sortColumn
    ? _memSortData(await _memFilterData(data, columns, filter), columns, direction, sortColumn)
    : _memFilterData(data, columns, filter));
const _memFilterData = Object(memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])(async (data, columns, filter) => {
    if (!filter) {
        return data;
    }
    return filterData(data, columns, filter.toUpperCase());
});
const _memSortData = Object(memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])((data, columns, direction, sortColumn) => {
    return sortData(data, columns[sortColumn], direction, sortColumn);
});
const filterData = (data, columns, filter) => data.filter((row) => {
    return Object.entries(columns).some((columnEntry) => {
        const [key, column] = columnEntry;
        if (column.filterable) {
            if ((column.filterKey ? row[key][column.filterKey] : row[key])
                .toUpperCase()
                .includes(filter)) {
                return true;
            }
        }
        return false;
    });
});
const sortData = (data, column, direction, sortColumn) => data.sort((a, b) => {
    let sort = 1;
    if (direction === "desc") {
        sort = -1;
    }
    let valA = column.filterKey
        ? a[sortColumn][column.filterKey]
        : a[sortColumn];
    let valB = column.filterKey
        ? b[sortColumn][column.filterKey]
        : b[sortColumn];
    if (typeof valA === "string") {
        valA = valA.toUpperCase();
    }
    if (typeof valB === "string") {
        valB = valB.toUpperCase();
    }
    if (valA < valB) {
        return sort * -1;
    }
    if (valA > valB) {
        return sort * 1;
    }
    return 0;
});

addEventListener('message', function (e) {var ref = e.data;var type = ref.type;var method = ref.method;var id = ref.id;var params = ref.params;var f,p;if (type === 'RPC' && method) {if (f = __webpack_exports__[method]) {p = Promise.resolve().then(function () { return f.apply(__webpack_exports__, params); });} else {p = Promise.reject('No such method');}p.then(function (result) {postMessage({type: 'RPC',id: id,result: result});}).catch(function (e) {var error = {message: e};if (e.stack) {error.message = e.message;error.stack = e.stack;error.name = e.name;}postMessage({type: 'RPC',id: id,error: error});});}});postMessage({type: 'RPC',method: 'ready'});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTI3YmYzZGY1NTFlNDY3YjU3YTMud29ya2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tZW1vaXplLW9uZS9kaXN0L21lbW9pemUtb25lLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kYXRhLXRhYmxlL3NvcnRfZmlsdGVyX3dvcmtlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9mcm9udGVuZF9sYXRlc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL3dvcmtlcml6ZS1sb2FkZXIvZGlzdC9ycGMtd29ya2VyLWxvYWRlci5qcyEuL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZGF0YS10YWJsZS9zb3J0X2ZpbHRlcl93b3JrZXIudHNcIik7XG4iLCJ2YXIgc2hhbGxvd0VxdWFsID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICByZXR1cm4gbmV3VmFsdWUgPT09IG9sZFZhbHVlO1xufTtcblxudmFyIHNpbXBsZUlzRXF1YWwgPSBmdW5jdGlvbiBzaW1wbGVJc0VxdWFsKG5ld0FyZ3MsIGxhc3RBcmdzKSB7XG4gIHJldHVybiBuZXdBcmdzLmxlbmd0aCA9PT0gbGFzdEFyZ3MubGVuZ3RoICYmIG5ld0FyZ3MuZXZlcnkoZnVuY3Rpb24gKG5ld0FyZywgaW5kZXgpIHtcbiAgICByZXR1cm4gc2hhbGxvd0VxdWFsKG5ld0FyZywgbGFzdEFyZ3NbaW5kZXhdKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBpbmRleCAocmVzdWx0Rm4sIGlzRXF1YWwpIHtcbiAgaWYgKGlzRXF1YWwgPT09IHZvaWQgMCkge1xuICAgIGlzRXF1YWwgPSBzaW1wbGVJc0VxdWFsO1xuICB9XG5cbiAgdmFyIGxhc3RUaGlzO1xuICB2YXIgbGFzdEFyZ3MgPSBbXTtcbiAgdmFyIGxhc3RSZXN1bHQ7XG4gIHZhciBjYWxsZWRPbmNlID0gZmFsc2U7XG5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbmV3QXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIG5ld0FyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGNhbGxlZE9uY2UgJiYgbGFzdFRoaXMgPT09IHRoaXMgJiYgaXNFcXVhbChuZXdBcmdzLCBsYXN0QXJncykpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cblxuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRGbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICBjYWxsZWRPbmNlID0gdHJ1ZTtcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdEFyZ3MgPSBuZXdBcmdzO1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5leHBvcnQgY29uc3QgZmlsdGVyU29ydERhdGEgPSBtZW1vaXplT25lKGFzeW5jIChkYXRhLCBjb2x1bW5zLCBmaWx0ZXIsIGRpcmVjdGlvbiwgc29ydENvbHVtbikgPT4gc29ydENvbHVtblxuICAgID8gX21lbVNvcnREYXRhKGF3YWl0IF9tZW1GaWx0ZXJEYXRhKGRhdGEsIGNvbHVtbnMsIGZpbHRlciksIGNvbHVtbnMsIGRpcmVjdGlvbiwgc29ydENvbHVtbilcbiAgICA6IF9tZW1GaWx0ZXJEYXRhKGRhdGEsIGNvbHVtbnMsIGZpbHRlcikpO1xuY29uc3QgX21lbUZpbHRlckRhdGEgPSBtZW1vaXplT25lKGFzeW5jIChkYXRhLCBjb2x1bW5zLCBmaWx0ZXIpID0+IHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlckRhdGEoZGF0YSwgY29sdW1ucywgZmlsdGVyLnRvVXBwZXJDYXNlKCkpO1xufSk7XG5jb25zdCBfbWVtU29ydERhdGEgPSBtZW1vaXplT25lKChkYXRhLCBjb2x1bW5zLCBkaXJlY3Rpb24sIHNvcnRDb2x1bW4pID0+IHtcbiAgICByZXR1cm4gc29ydERhdGEoZGF0YSwgY29sdW1uc1tzb3J0Q29sdW1uXSwgZGlyZWN0aW9uLCBzb3J0Q29sdW1uKTtcbn0pO1xuZXhwb3J0IGNvbnN0IGZpbHRlckRhdGEgPSAoZGF0YSwgY29sdW1ucywgZmlsdGVyKSA9PiBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNvbHVtbnMpLnNvbWUoKGNvbHVtbkVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IFtrZXksIGNvbHVtbl0gPSBjb2x1bW5FbnRyeTtcbiAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJhYmxlKSB7XG4gICAgICAgICAgICBpZiAoKGNvbHVtbi5maWx0ZXJLZXkgPyByb3dba2V5XVtjb2x1bW4uZmlsdGVyS2V5XSA6IHJvd1trZXldKVxuICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgLmluY2x1ZGVzKGZpbHRlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59KTtcbmV4cG9ydCBjb25zdCBzb3J0RGF0YSA9IChkYXRhLCBjb2x1bW4sIGRpcmVjdGlvbiwgc29ydENvbHVtbikgPT4gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IHNvcnQgPSAxO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZGVzY1wiKSB7XG4gICAgICAgIHNvcnQgPSAtMTtcbiAgICB9XG4gICAgbGV0IHZhbEEgPSBjb2x1bW4uZmlsdGVyS2V5XG4gICAgICAgID8gYVtzb3J0Q29sdW1uXVtjb2x1bW4uZmlsdGVyS2V5XVxuICAgICAgICA6IGFbc29ydENvbHVtbl07XG4gICAgbGV0IHZhbEIgPSBjb2x1bW4uZmlsdGVyS2V5XG4gICAgICAgID8gYltzb3J0Q29sdW1uXVtjb2x1bW4uZmlsdGVyS2V5XVxuICAgICAgICA6IGJbc29ydENvbHVtbl07XG4gICAgaWYgKHR5cGVvZiB2YWxBID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHZhbEEgPSB2YWxBLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsQiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YWxCID0gdmFsQi50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBpZiAodmFsQSA8IHZhbEIpIHtcbiAgICAgICAgcmV0dXJuIHNvcnQgKiAtMTtcbiAgICB9XG4gICAgaWYgKHZhbEEgPiB2YWxCKSB7XG4gICAgICAgIHJldHVybiBzb3J0ICogMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59KTtcblxuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7dmFyIHJlZiA9IGUuZGF0YTt2YXIgdHlwZSA9IHJlZi50eXBlO3ZhciBtZXRob2QgPSByZWYubWV0aG9kO3ZhciBpZCA9IHJlZi5pZDt2YXIgcGFyYW1zID0gcmVmLnBhcmFtczt2YXIgZixwO2lmICh0eXBlID09PSAnUlBDJyAmJiBtZXRob2QpIHtpZiAoZiA9IF9fd2VicGFja19leHBvcnRzX19bbWV0aG9kXSkge3AgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGYuYXBwbHkoX193ZWJwYWNrX2V4cG9ydHNfXywgcGFyYW1zKTsgfSk7fSBlbHNlIHtwID0gUHJvbWlzZS5yZWplY3QoJ05vIHN1Y2ggbWV0aG9kJyk7fXAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7cG9zdE1lc3NhZ2Uoe3R5cGU6ICdSUEMnLGlkOiBpZCxyZXN1bHQ6IHJlc3VsdH0pO30pLmNhdGNoKGZ1bmN0aW9uIChlKSB7dmFyIGVycm9yID0ge21lc3NhZ2U6IGV9O2lmIChlLnN0YWNrKSB7ZXJyb3IubWVzc2FnZSA9IGUubWVzc2FnZTtlcnJvci5zdGFjayA9IGUuc3RhY2s7ZXJyb3IubmFtZSA9IGUubmFtZTt9cG9zdE1lc3NhZ2Uoe3R5cGU6ICdSUEMnLGlkOiBpZCxlcnJvcjogZXJyb3J9KTt9KTt9fSk7cG9zdE1lc3NhZ2Uoe3R5cGU6ICdSUEMnLG1ldGhvZDogJ3JlYWR5J30pOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9