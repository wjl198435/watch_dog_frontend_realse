(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"],{

/***/ "./node_modules/superstruct/lib/index.es.js":
/*!**************************************************!*\
  !*** ./node_modules/superstruct/lib/index.es.js ***!
  \**************************************************/
/*! exports provided: struct, superstruct, isStruct, StructError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "struct", function() { return struct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superstruct", function() { return superstruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStruct", function() { return isStruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructError", function() { return StructError; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Define a struct error.
 *
 * @type {StructError}
 */
var StructError =
/*#__PURE__*/
function (_TypeError) {
  _inherits(StructError, _TypeError);

  _createClass(StructError, null, [{
    key: "format",
    value: function format(attrs) {
      var type = attrs.type,
          path = attrs.path,
          value = attrs.value;
      var message = "Expected a value of type `".concat(type, "`").concat(path.length ? " for `".concat(path.join('.'), "`") : '', " but received `").concat(JSON.stringify(value), "`.");
      return message;
    }
  }]);

  function StructError(attrs) {
    var _this;

    _classCallCheck(this, StructError);

    var message = StructError.format(attrs);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(StructError).call(this, message));
    var data = attrs.data,
        path = attrs.path,
        value = attrs.value,
        reason = attrs.reason,
        type = attrs.type,
        _attrs$errors = attrs.errors,
        errors = _attrs$errors === void 0 ? [] : _attrs$errors;
    _this.data = data;
    _this.path = path;
    _this.value = value;
    _this.reason = reason;
    _this.type = type;
    _this.errors = errors;

    if (!errors.length) {
      errors.push(_assertThisInitialized(_this));
    }

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
    } else {
      _this.stack = new Error().stack;
    }

    return _this;
  }

  return StructError;
}(_wrapNativeSuper(TypeError));

var toString = Object.prototype.toString;

var kindOf = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = _typeof(val);

  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';

  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol':
      return 'symbol';

    case 'Promise':
      return 'promise';
    // Set, Map, WeakSet, WeakMap

    case 'WeakMap':
      return 'weakmap';

    case 'WeakSet':
      return 'weakset';

    case 'Map':
      return 'map';

    case 'Set':
      return 'set';
    // 8-bit typed arrays

    case 'Int8Array':
      return 'int8array';

    case 'Uint8Array':
      return 'uint8array';

    case 'Uint8ClampedArray':
      return 'uint8clampedarray';
    // 16-bit typed arrays

    case 'Int16Array':
      return 'int16array';

    case 'Uint16Array':
      return 'uint16array';
    // 32-bit typed arrays

    case 'Int32Array':
      return 'int32array';

    case 'Uint32Array':
      return 'uint32array';

    case 'Float32Array':
      return 'float32array';

    case 'Float64Array':
      return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  } // Non-plain objects


  type = toString.call(val);

  switch (type) {
    case '[object Object]':
      return 'object';
    // iterators

    case '[object Map Iterator]':
      return 'mapiterator';

    case '[object Set Iterator]':
      return 'setiterator';

    case '[object String Iterator]':
      return 'stringiterator';

    case '[object Array Iterator]':
      return 'arrayiterator';
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return val.constructor ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string' && typeof val.ignoreCase === 'boolean' && typeof val.multiline === 'boolean' && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val["throw"] === 'function' && typeof val["return"] === 'function' && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }

  return false;
}
/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */


function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }

  return false;
}
/**
 * A private string to identify structs by.
 *
 * @type {String}
 */


var IS_STRUCT = '@@__STRUCT__@@';
/**
 * A private string to refer to a struct's kind.
 *
 * @type {String}
 */

var KIND = '@@__KIND__@@';
/**
 * Check if a `value` is a struct.
 *
 * @param {Any} value
 * @return {Boolean}
 */

function isStruct(value) {
  return !!(value && value[IS_STRUCT]);
}
/**
 * Resolve `defaults`, for an optional `value`.
 *
 * @param {Function|Any} defaults
 * @param {Any} value
 * @return {Any}
 */


function resolveDefaults(defaults, value) {
  return typeof defaults === 'function' ? defaults(value) : defaults;
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Kind.
 *
 * @type {Kind}
 */


var Kind = function Kind(name, type, validate) {
  _classCallCheck(this, Kind);

  this.name = name;
  this.type = type;
  this.validate = validate;
};
/**
 * Any.
 *
 * @param {Array|Function|Object|String} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function any(schema, defaults$$1, options) {
  if (isStruct(schema)) {
    return schema[KIND];
  }

  if (schema instanceof Kind) {
    return schema;
  }

  switch (kindOf(schema)) {
    case 'array':
      {
        return schema.length > 1 ? tuple(schema, defaults$$1, options) : list(schema, defaults$$1, options);
      }

    case 'function':
      {
        return func(schema, defaults$$1, options);
      }

    case 'object':
      {
        return object(schema, defaults$$1, options);
      }

    case 'string':
      {
        var required = true;
        var type;

        if (schema.endsWith('?')) {
          required = false;
          schema = schema.slice(0, -1);
        }

        if (schema.includes('|')) {
          var scalars = schema.split(/\s*\|\s*/g);
          type = union(scalars, defaults$$1, options);
        } else if (schema.includes('&')) {
          var _scalars = schema.split(/\s*&\s*/g);

          type = intersection(_scalars, defaults$$1, options);
        } else {
          type = scalar(schema, defaults$$1, options);
        }

        if (!required) {
          type = optional(type, undefined, options);
        }

        return type;
      }
  }

  if (true) {
    throw new Error("A schema definition must be an object, array, string or function, but you passed: ".concat(schema));
  } else {}
}
/**
 * Dict.
 *
 * @param {Array} schema
 * @param {Object} defaults
 * @param {Object} options
 */


function dict(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'array' || schema.length !== 2) {
    if (true) {
      throw new Error("Dict structs must be defined as an array with two elements, but you passed: ".concat(schema));
    } else {}
  }

  var obj = scalar('object', undefined, options);
  var keys = any(schema[0], undefined, options);
  var values = any(schema[1], undefined, options);
  var name = 'dict';
  var type = "dict<".concat(keys.type, ",").concat(values.type, ">");

  var validate = function validate(value) {
    var resolved = resolveDefaults(defaults$$1);
    value = resolved ? _extends({}, resolved, value) : value;

    var _obj$validate = obj.validate(value),
        _obj$validate2 = _slicedToArray(_obj$validate, 1),
        error = _obj$validate2[0];

    if (error) {
      error.type = type;
      return [error];
    }

    var ret = {};
    var errors = [];

    var _loop = function _loop(_k) {
      var v = value[_k];

      var _keys$validate = keys.validate(_k),
          _keys$validate2 = _slicedToArray(_keys$validate, 2),
          e = _keys$validate2[0],
          r = _keys$validate2[1];

      if (e) {
        var allE = e.errors || [e];
        allE.forEach(function (singleE) {
          singleE.path = [_k].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        k = _k;
        return "continue";
      }

      _k = r;

      var _values$validate = values.validate(v),
          _values$validate2 = _slicedToArray(_values$validate, 2),
          e2 = _values$validate2[0],
          r2 = _values$validate2[1];

      if (e2) {
        var allE2 = e2.errors || [e2];
        allE2.forEach(function (singleE) {
          singleE.path = [_k].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        k = _k;
        return "continue";
      }

      ret[_k] = r2;
      k = _k;
    };

    for (var k in value) {
      var _ret = _loop(k);

      if (_ret === "continue") continue;
    }

    if (errors.length) {
      var first = errors[0];
      first.errors = errors;
      return [first];
    }

    return [undefined, ret];
  };

  return new Kind(name, type, validate);
}
/**
 * Enum.
 *
 * @param {Array} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function en(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'array') {
    if (true) {
      throw new Error("Enum structs must be defined as an array, but you passed: ".concat(schema));
    } else {}
  }

  var name = 'enum';
  var type = schema.map(function (s) {
    try {
      return JSON.stringify(s);
    } catch (e) {
      return String(s);
    }
  }).join(' | ');

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    return schema.includes(value) ? [undefined, value] : [{
      data: value,
      path: [],
      value: value,
      type: type
    }];
  };

  return new Kind(name, type, validate);
}
/**
 * Enums.
 *
 * @param {Array} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function enums(schema, defaults$$1, options) {
  var e = en(schema, undefined, options);
  var l = list([e], defaults$$1, options);
  return l;
}
/**
 * Function.
 *
 * @param {Function} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function func(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'function') {
    if (true) {
      throw new Error("Function structs must be defined as a function, but you passed: ".concat(schema));
    } else {}
  }

  var name = 'function';
  var type = '<function>';

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    var data = arguments.length > 1 ? arguments[1] : undefined;
    var result = schema(value, data);
    var failure = {
      path: [],
      reason: null
    };
    var isValid;

    switch (kindOf(result)) {
      case 'boolean':
        {
          isValid = result;
          break;
        }

      case 'string':
        {
          isValid = false;
          failure.reason = result;
          break;
        }

      case 'object':
        {
          isValid = false;
          failure = _extends({}, failure, result);
          break;
        }

      default:
        {
          if (true) {
            throw new Error("Validator functions must return a boolean, an error reason string or an error reason object, but you passed: ".concat(schema));
          } else {}
        }
    }

    return isValid ? [undefined, value] : [_extends({
      type: type,
      value: value,
      data: value
    }, failure)];
  };

  return new Kind(name, type, validate);
}
/**
 * Instance.
 *
 * @param {Array} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function instance(schema, defaults$$1, options) {
  var name = 'instance';
  var type = "instance<".concat(schema.name, ">");

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    return value instanceof schema ? [undefined, value] : [{
      data: value,
      path: [],
      value: value,
      type: type
    }];
  };

  return new Kind(name, type, validate);
}
/**
 * Interface.
 *
 * @param {Object} schema
 * @param {Object} defaults
 * @param {Object} options
 */


function inter(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'object') {
    if (true) {
      throw new Error("Interface structs must be defined as an object, but you passed: ".concat(schema));
    } else {}
  }

  var ks = [];
  var properties = {};

  for (var key in schema) {
    ks.push(key);
    var s = schema[key];
    var kind = any(s, undefined, options);
    properties[key] = kind;
  }

  var name = 'interface';
  var type = "{".concat(ks.join(), "}");

  var validate = function validate(value) {
    var resolved = resolveDefaults(defaults$$1);
    value = resolved ? _extends({}, resolved, value) : value;
    var errors = [];
    var ret = value;

    var _loop2 = function _loop2(_key) {
      var v = value[_key];
      var kind = properties[_key];

      if (v === undefined) {
        var d = defaults$$1 && defaults$$1[_key];
        v = resolveDefaults(d, value);
      }

      var _kind$validate = kind.validate(v, value),
          _kind$validate2 = _slicedToArray(_kind$validate, 2),
          e = _kind$validate2[0],
          r = _kind$validate2[1];

      if (e) {
        var allE = e.errors || [e];
        allE.forEach(function (singleE) {
          singleE.path = [_key].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        return "continue";
      }

      if (_key in value || r !== undefined) {
        ret[_key] = r;
      }
    };

    for (var _key in properties) {
      var _ret2 = _loop2(_key);

      if (_ret2 === "continue") continue;
    }

    if (errors.length) {
      var first = errors[0];
      first.errors = errors;
      return [first];
    }

    return [undefined, ret];
  };

  return new Kind(name, type, validate);
}
/**
 * Lazy.
 *
 * @param {Function} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function lazy(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'function') {
    if (true) {
      throw new Error("Lazy structs must be defined as an function that returns a schema, but you passed: ".concat(schema));
    } else {}
  }

  var kind;
  var struct;
  var name = 'lazy';
  var type = "lazy...";

  var compile = function compile(value) {
    struct = schema();
    kind.name = struct.kind;
    kind.type = struct.type;
    kind.validate = struct.validate;
    return kind.validate(value);
  };

  kind = new Kind(name, type, compile);
  return kind;
}
/**
 * Dynamic.
 *
 * @param {Function} createSchema
 * @param {Any} defaults
 * @param {Object} options
 */


function dynamic(createSchema, defaults$$1, options) {
  if (kindOf(createSchema) !== 'function') {
    if (true) {
      throw new Error("Dynamic structs must be defined as a function, but you passed: ".concat(createSchema));
    } else {}
  }

  var name = 'dynamic';
  var type = 'dynamic...';

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    var data = arguments.length > 1 ? arguments[1] : undefined;
    var schema = createSchema(value, data);

    if (kindOf(schema) !== 'function') {
      if (true) {
        throw new Error("Dynamic structs must return a schema, but you passed: ".concat(schema));
      } else {}
    }

    var _schema$validate = schema.validate(value),
        _schema$validate2 = _slicedToArray(_schema$validate, 2),
        error = _schema$validate2[0],
        result = _schema$validate2[1];

    if (error) {
      return [error];
    }

    return [undefined, result];
  };

  return new Kind(name, type, validate);
}
/**
 * List.
 *
 * @param {Array} schema
 * @param {Array} defaults
 * @param {Object} options
 */


function list(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'array' || schema.length !== 1) {
    if (true) {
      throw new Error("List structs must be defined as an array with a single element, but you passed: ".concat(schema));
    } else {}
  }

  var array = scalar('array', undefined, options);
  var element = any(schema[0], undefined, options);
  var name = 'list';
  var type = "[".concat(element.type, "]");

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);

    var _array$validate = array.validate(value),
        _array$validate2 = _slicedToArray(_array$validate, 2),
        error = _array$validate2[0],
        result = _array$validate2[1];

    if (error) {
      error.type = type;
      return [error];
    }

    value = result;
    var errors = [];
    var ret = [];

    var _loop3 = function _loop3(i) {
      var v = value[i];

      var _element$validate = element.validate(v),
          _element$validate2 = _slicedToArray(_element$validate, 2),
          e = _element$validate2[0],
          r = _element$validate2[1];

      if (e) {
        var allE = e.errors || [e];
        allE.forEach(function (singleE) {
          singleE.path = [i].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        return "continue";
      }

      ret[i] = r;
    };

    for (var i = 0; i < value.length; i++) {
      var _ret3 = _loop3(i);

      if (_ret3 === "continue") continue;
    }

    if (errors.length) {
      var first = errors[0];
      first.errors = errors;
      return [first];
    }

    return [undefined, ret];
  };

  return new Kind(name, type, validate);
}
/**
 * Literal.
 *
 * @param {Array} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function literal(schema, defaults$$1, options) {
  var name = 'literal';
  var type = "literal: ".concat(JSON.stringify(schema));

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    return value === schema ? [undefined, value] : [{
      data: value,
      path: [],
      value: value,
      type: type
    }];
  };

  return new Kind(name, type, validate);
}
/**
 * Object.
 *
 * @param {Object} schema
 * @param {Object} defaults
 * @param {Object} options
 */


function object(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'object') {
    if (true) {
      throw new Error("Object structs must be defined as an object, but you passed: ".concat(schema));
    } else {}
  }

  var obj = scalar('object', undefined, options);
  var ks = [];
  var properties = {};

  for (var key in schema) {
    ks.push(key);
    var s = schema[key];
    var kind = any(s, undefined, options);
    properties[key] = kind;
  }

  var name = 'object';
  var type = "{".concat(ks.join(), "}");

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);

    var _obj$validate3 = obj.validate(value),
        _obj$validate4 = _slicedToArray(_obj$validate3, 1),
        error = _obj$validate4[0];

    if (error) {
      error.type = type;
      return [error];
    }

    var errors = [];
    var ret = {};
    var valueKeys = Object.keys(value);
    var propertiesKeys = Object.keys(properties);
    var keys = new Set(valueKeys.concat(propertiesKeys));
    keys.forEach(function (key) {
      var v = value[key];
      var kind = properties[key];

      if (v === undefined) {
        var d = defaults$$1 && defaults$$1[key];
        v = resolveDefaults(d, value);
      }

      if (!kind) {
        var _e2 = {
          data: value,
          path: [key],
          value: v
        };
        errors.push(_e2);
        return;
      }

      var _kind$validate3 = kind.validate(v, value),
          _kind$validate4 = _slicedToArray(_kind$validate3, 2),
          e = _kind$validate4[0],
          r = _kind$validate4[1];

      if (e) {
        var allE = e.errors || [e];
        allE.forEach(function (singleE) {
          singleE.path = [key].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        return;
      }

      if (key in value || r !== undefined) {
        ret[key] = r;
      }
    });

    if (errors.length) {
      var first = errors[0];
      first.errors = errors;
      return [first];
    }

    return [undefined, ret];
  };

  return new Kind(name, type, validate);
}
/**
 * Optional.
 *
 * @param {Any} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function optional(schema, defaults$$1, options) {
  return union([schema, 'undefined'], defaults$$1, options);
}
/**
 * Partial.
 *
 * @param {Object} schema
 * @param {Object} defaults
 * @param {Object} options
 */


function partial(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'object') {
    if (true) {
      throw new Error("Partial structs must be defined as an object, but you passed: ".concat(schema));
    } else {}
  }

  var obj = scalar('object', undefined, options);
  var ks = [];
  var properties = {};

  for (var key in schema) {
    ks.push(key);
    var s = schema[key];
    var kind = any(s, undefined, options);
    properties[key] = kind;
  }

  var name = 'partial';
  var type = "{".concat(ks.join(), ",...}");

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);

    var _obj$validate5 = obj.validate(value),
        _obj$validate6 = _slicedToArray(_obj$validate5, 1),
        error = _obj$validate6[0];

    if (error) {
      error.type = type;
      return [error];
    }

    var errors = [];
    var ret = {};

    var _loop4 = function _loop4(_key2) {
      var v = value[_key2];
      var kind = properties[_key2];

      if (v === undefined) {
        var d = defaults$$1 && defaults$$1[_key2];
        v = resolveDefaults(d, value);
      }

      var _kind$validate5 = kind.validate(v, value),
          _kind$validate6 = _slicedToArray(_kind$validate5, 2),
          e = _kind$validate6[0],
          r = _kind$validate6[1];

      if (e) {
        var allE = e.errors || [e];
        allE.forEach(function (singleE) {
          singleE.path = [_key2].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        return "continue";
      }

      if (_key2 in value || r !== undefined) {
        ret[_key2] = r;
      }
    };

    for (var _key2 in properties) {
      var _ret4 = _loop4(_key2);

      if (_ret4 === "continue") continue;
    }

    if (errors.length) {
      var first = errors[0];
      first.errors = errors;
      return [first];
    }

    return [undefined, ret];
  };

  return new Kind(name, type, validate);
}
/**
 * Scalar.
 *
 * @param {String} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function scalar(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'string') {
    if (true) {
      throw new Error("Scalar structs must be defined as a string, but you passed: ".concat(schema));
    } else {}
  }

  var types = options.types;
  var fn = types[schema];

  if (kindOf(fn) !== 'function') {
    if (true) {
      throw new Error("No struct validator function found for type \"".concat(schema, "\"."));
    } else {}
  }

  var kind = func(fn, defaults$$1, options);
  var name = 'scalar';
  var type = schema;

  var validate = function validate(value) {
    var _kind$validate7 = kind.validate(value),
        _kind$validate8 = _slicedToArray(_kind$validate7, 2),
        error = _kind$validate8[0],
        result = _kind$validate8[1];

    if (error) {
      error.type = type;
      return [error];
    }

    return [undefined, result];
  };

  return new Kind(name, type, validate);
}
/**
 * Tuple.
 *
 * @param {Array} schema
 * @param {Array} defaults
 * @param {Object} options
 */


function tuple(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'array') {
    if (true) {
      throw new Error("Tuple structs must be defined as an array, but you passed: ".concat(schema));
    } else {}
  }

  var kinds = schema.map(function (s) {
    return any(s, undefined, options);
  });
  var array = scalar('array', undefined, options);
  var name = 'tuple';
  var type = "[".concat(kinds.map(function (k) {
    return k.type;
  }).join(), "]");

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);

    var _array$validate3 = array.validate(value),
        _array$validate4 = _slicedToArray(_array$validate3, 1),
        error = _array$validate4[0];

    if (error) {
      error.type = type;
      return [error];
    }

    var ret = [];
    var errors = [];
    var length = Math.max(value.length, kinds.length);

    var _loop5 = function _loop5(i) {
      var kind = kinds[i];
      var v = value[i];

      if (!kind) {
        var _e3 = {
          data: value,
          path: [i],
          value: v
        };
        errors.push(_e3);
        return "continue";
      }

      var _kind$validate9 = kind.validate(v),
          _kind$validate10 = _slicedToArray(_kind$validate9, 2),
          e = _kind$validate10[0],
          r = _kind$validate10[1];

      if (e) {
        var allE = e.errors || [e];
        allE.forEach(function (singleE) {
          singleE.path = [i].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        return "continue";
      }

      ret[i] = r;
    };

    for (var i = 0; i < length; i++) {
      var _ret5 = _loop5(i);

      if (_ret5 === "continue") continue;
    }

    if (errors.length) {
      var first = errors[0];
      first.errors = errors;
      return [first];
    }

    return [undefined, ret];
  };

  return new Kind(name, type, validate);
}
/**
 * Union.
 *
 * @param {Array} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function union(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'array') {
    if (true) {
      throw new Error("Union structs must be defined as an array, but you passed: ".concat(schema));
    } else {}
  }

  var kinds = schema.map(function (s) {
    return any(s, undefined, options);
  });
  var name = 'union';
  var type = kinds.map(function (k) {
    return k.type;
  }).join(' | ');

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    var errors = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = kinds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _k2 = _step.value;

        var _k2$validate = _k2.validate(value),
            _k2$validate2 = _slicedToArray(_k2$validate, 2),
            e = _k2$validate2[0],
            r = _k2$validate2[1];

        if (!e) {
          return [undefined, r];
        }

        errors.push(e);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    errors[0].type = type;
    return errors;
  };

  return new Kind(name, type, validate);
}
/**
 * Intersection.
 *
 * @param {Array} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function intersection(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'array') {
    if (true) {
      throw new Error("Intersection structs must be defined as an array, but you passed: ".concat(schema));
    } else {}
  }

  var types = schema.map(function (s) {
    return any(s, undefined, options);
  });
  var name = 'intersection';
  var type = types.map(function (t) {
    return t.type;
  }).join(' & ');

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    var v = value;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = types[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var t = _step2.value;

        var _t$validate = t.validate(v),
            _t$validate2 = _slicedToArray(_t$validate, 2),
            e = _t$validate2[0],
            r = _t$validate2[1];

        if (e) {
          e.type = type;
          return [e];
        }

        v = r;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return [undefined, v];
  };

  return new Kind(name, type, validate);
}
/**
 * Kinds.
 *
 * @type {Object}
 */


var Kinds = {
  any: any,
  dict: dict,
  "enum": en,
  enums: enums,
  "function": func,
  instance: instance,
  "interface": inter,
  lazy: lazy,
  list: list,
  literal: literal,
  object: object,
  optional: optional,
  partial: partial,
  scalar: scalar,
  tuple: tuple,
  union: union,
  intersection: intersection,
  dynamic: dynamic
  /**
   * Export.
   *
   * @type {Object}
   */

};
/**
 * The types that `kind-of` supports.
 *
 * @type {Array}
 */

var TYPES = ['arguments', 'array', 'boolean', 'buffer', 'error', 'float32array', 'float64array', 'function', 'generatorfunction', 'int16array', 'int32array', 'int8array', 'map', 'null', 'number', 'object', 'promise', 'regexp', 'set', 'string', 'symbol', 'uint16array', 'uint32array', 'uint8array', 'uint8clampedarray', 'undefined', 'weakmap', 'weakset'];
/**
 * The default types that Superstruct ships with.
 *
 * @type {Object}
 */

var Types = {
  any: function any(value) {
    return value !== undefined;
  }
};
TYPES.forEach(function (type) {
  Types[type] = function (value) {
    return kindOf(value) === type;
  };
});
/**
 * Handle the 'date' case specially, to throw out invalid `Date` objects.
 *
 * @param {Mixed} value
 * @return {Boolean}
 */

Types.date = function (value) {
  return kindOf(value) === 'date' && !isNaN(value);
};
/**
 * Create a struct factory with a `config`.
 *
 * @param {Object} config
 * @return {Function}
 */


function superstruct() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var types = _extends({}, Types, config.types || {});
  /**
   * Create a `kind` struct with `schema`, `defaults` and `options`.
   *
   * @param {Any} schema
   * @param {Any} defaults
   * @param {Object} options
   * @return {Function}
   */


  function struct(schema, defaults$$1) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (isStruct(schema)) {
      schema = schema.schema;
    }

    var kind = Kinds.any(schema, defaults$$1, _extends({}, options, {
      types: types
    }));

    function Struct(data) {
      if (this instanceof Struct) {
        if (true) {
          throw new Error('The `Struct` creation function should not be used with the `new` keyword.');
        } else {}
      }

      return Struct.assert(data);
    }

    Object.defineProperty(Struct, IS_STRUCT, {
      value: true
    });
    Object.defineProperty(Struct, KIND, {
      value: kind
    });
    Struct.kind = kind.name;
    Struct.type = kind.type;
    Struct.schema = schema;
    Struct.defaults = defaults$$1;
    Struct.options = options;

    Struct.assert = function (value) {
      var _kind$validate11 = kind.validate(value),
          _kind$validate12 = _slicedToArray(_kind$validate11, 2),
          error = _kind$validate12[0],
          result = _kind$validate12[1];

      if (error) {
        throw new StructError(error);
      }

      return result;
    };

    Struct.test = function (value) {
      var _kind$validate13 = kind.validate(value),
          _kind$validate14 = _slicedToArray(_kind$validate13, 1),
          error = _kind$validate14[0];

      return !error;
    };

    Struct.validate = function (value) {
      var _kind$validate15 = kind.validate(value),
          _kind$validate16 = _slicedToArray(_kind$validate15, 2),
          error = _kind$validate16[0],
          result = _kind$validate16[1];

      if (error) {
        return [new StructError(error)];
      }

      return [undefined, result];
    };

    return Struct;
  }
  /**
   * Mix in a factory for each specific kind of struct.
   */


  Object.keys(Kinds).forEach(function (name) {
    var kind = Kinds[name];

    struct[name] = function (schema, defaults$$1, options) {
      var type = kind(schema, defaults$$1, _extends({}, options, {
        types: types
      }));
      var s = struct(type, defaults$$1, options);
      return s;
    };
  });
  /**
   * Return the struct factory.
   */

  return struct;
}
/**
 * Create a convenience `struct` factory for the default types.
 *
 * @type {Function}
 */


var struct = superstruct();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktYWxhcm0tcGFuZWwtY2FyZC1lZGl0b3J+aHVpLWVudGl0aWVzLWNhcmQtZWRpdG9yfmh1aS1lbnRpdHktYnV0dG9uLWNhcmQtZWRpdG9yfmh1aS1nYXVnZX5lOTZjMjhjMS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdXBlcnN0cnVjdC9saWIvaW5kZXguZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEZWZpbmUgYSBzdHJ1Y3QgZXJyb3IuXG4gKlxuICogQHR5cGUge1N0cnVjdEVycm9yfVxuICovXG5cbmNsYXNzIFN0cnVjdEVycm9yIGV4dGVuZHMgVHlwZUVycm9yIHtcbiAgc3RhdGljIGZvcm1hdChhdHRycykge1xuICAgIGNvbnN0IHsgdHlwZSwgcGF0aCwgdmFsdWUgfSA9IGF0dHJzO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgRXhwZWN0ZWQgYSB2YWx1ZSBvZiB0eXBlIFxcYCR7dHlwZX1cXGAke3BhdGgubGVuZ3RoID8gYCBmb3IgXFxgJHtwYXRoLmpvaW4oJy4nKX1cXGBgIDogJyd9IGJ1dCByZWNlaXZlZCBcXGAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX1cXGAuYDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGF0dHJzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IFN0cnVjdEVycm9yLmZvcm1hdChhdHRycyk7XG4gICAgc3VwZXIobWVzc2FnZSk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHBhdGgsIHZhbHVlLCByZWFzb24sIHR5cGUsIGVycm9ycyA9IFtdIH0gPSBhdHRycztcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucmVhc29uID0gcmVhc29uO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG5cbiAgICBpZiAoIWVycm9ycy5sZW5ndGgpIHtcbiAgICAgIGVycm9ycy5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICB9XG4gIH1cbn1cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGtpbmRPZiA9IGZ1bmN0aW9uIGtpbmRPZih2YWwpIHtcbiAgaWYgKHZhbCA9PT0gdm9pZCAwKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIGlmICh2YWwgPT09IG51bGwpIHJldHVybiAnbnVsbCc7XG5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gJ2Jvb2xlYW4nO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiAnc3RyaW5nJztcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKSByZXR1cm4gJ251bWJlcic7XG4gIGlmICh0eXBlID09PSAnc3ltYm9sJykgcmV0dXJuICdzeW1ib2wnO1xuICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpc0dlbmVyYXRvckZuKHZhbCkgPyAnZ2VuZXJhdG9yZnVuY3Rpb24nIDogJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlmIChpc0FycmF5KHZhbCkpIHJldHVybiAnYXJyYXknO1xuICBpZiAoaXNCdWZmZXIodmFsKSkgcmV0dXJuICdidWZmZXInO1xuICBpZiAoaXNBcmd1bWVudHModmFsKSkgcmV0dXJuICdhcmd1bWVudHMnO1xuICBpZiAoaXNEYXRlKHZhbCkpIHJldHVybiAnZGF0ZSc7XG4gIGlmIChpc0Vycm9yKHZhbCkpIHJldHVybiAnZXJyb3InO1xuICBpZiAoaXNSZWdleHAodmFsKSkgcmV0dXJuICdyZWdleHAnO1xuXG4gIHN3aXRjaCAoY3Rvck5hbWUodmFsKSkge1xuICAgIGNhc2UgJ1N5bWJvbCc6IHJldHVybiAnc3ltYm9sJztcbiAgICBjYXNlICdQcm9taXNlJzogcmV0dXJuICdwcm9taXNlJztcblxuICAgIC8vIFNldCwgTWFwLCBXZWFrU2V0LCBXZWFrTWFwXG4gICAgY2FzZSAnV2Vha01hcCc6IHJldHVybiAnd2Vha21hcCc7XG4gICAgY2FzZSAnV2Vha1NldCc6IHJldHVybiAnd2Vha3NldCc7XG4gICAgY2FzZSAnTWFwJzogcmV0dXJuICdtYXAnO1xuICAgIGNhc2UgJ1NldCc6IHJldHVybiAnc2V0JztcblxuICAgIC8vIDgtYml0IHR5cGVkIGFycmF5c1xuICAgIGNhc2UgJ0ludDhBcnJheSc6IHJldHVybiAnaW50OGFycmF5JztcbiAgICBjYXNlICdVaW50OEFycmF5JzogcmV0dXJuICd1aW50OGFycmF5JztcbiAgICBjYXNlICdVaW50OENsYW1wZWRBcnJheSc6IHJldHVybiAndWludDhjbGFtcGVkYXJyYXknO1xuXG4gICAgLy8gMTYtYml0IHR5cGVkIGFycmF5c1xuICAgIGNhc2UgJ0ludDE2QXJyYXknOiByZXR1cm4gJ2ludDE2YXJyYXknO1xuICAgIGNhc2UgJ1VpbnQxNkFycmF5JzogcmV0dXJuICd1aW50MTZhcnJheSc7XG5cbiAgICAvLyAzMi1iaXQgdHlwZWQgYXJyYXlzXG4gICAgY2FzZSAnSW50MzJBcnJheSc6IHJldHVybiAnaW50MzJhcnJheSc7XG4gICAgY2FzZSAnVWludDMyQXJyYXknOiByZXR1cm4gJ3VpbnQzMmFycmF5JztcbiAgICBjYXNlICdGbG9hdDMyQXJyYXknOiByZXR1cm4gJ2Zsb2F0MzJhcnJheSc7XG4gICAgY2FzZSAnRmxvYXQ2NEFycmF5JzogcmV0dXJuICdmbG9hdDY0YXJyYXknO1xuICB9XG5cbiAgaWYgKGlzR2VuZXJhdG9yT2JqKHZhbCkpIHtcbiAgICByZXR1cm4gJ2dlbmVyYXRvcic7XG4gIH1cblxuICAvLyBOb24tcGxhaW4gb2JqZWN0c1xuICB0eXBlID0gdG9TdHJpbmcuY2FsbCh2YWwpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOiByZXR1cm4gJ29iamVjdCc7XG4gICAgLy8gaXRlcmF0b3JzXG4gICAgY2FzZSAnW29iamVjdCBNYXAgSXRlcmF0b3JdJzogcmV0dXJuICdtYXBpdGVyYXRvcic7XG4gICAgY2FzZSAnW29iamVjdCBTZXQgSXRlcmF0b3JdJzogcmV0dXJuICdzZXRpdGVyYXRvcic7XG4gICAgY2FzZSAnW29iamVjdCBTdHJpbmcgSXRlcmF0b3JdJzogcmV0dXJuICdzdHJpbmdpdGVyYXRvcic7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheSBJdGVyYXRvcl0nOiByZXR1cm4gJ2FycmF5aXRlcmF0b3InO1xuICB9XG5cbiAgLy8gb3RoZXJcbiAgcmV0dXJuIHR5cGUuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKTtcbn07XG5cbmZ1bmN0aW9uIGN0b3JOYW1lKHZhbCkge1xuICByZXR1cm4gdmFsLmNvbnN0cnVjdG9yID8gdmFsLmNvbnN0cnVjdG9yLm5hbWUgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheSkgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKTtcbiAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIEFycmF5O1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yKHZhbCkge1xuICByZXR1cm4gdmFsIGluc3RhbmNlb2YgRXJyb3IgfHwgKHR5cGVvZiB2YWwubWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgdmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3Iuc3RhY2tUcmFjZUxpbWl0ID09PSAnbnVtYmVyJyk7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHJldHVybiB0cnVlO1xuICByZXR1cm4gdHlwZW9mIHZhbC50b0RhdGVTdHJpbmcgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgdmFsLmdldERhdGUgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgdmFsLnNldERhdGUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnZXhwKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiB2YWwuZmxhZ3MgPT09ICdzdHJpbmcnXG4gICAgJiYgdHlwZW9mIHZhbC5pZ25vcmVDYXNlID09PSAnYm9vbGVhbidcbiAgICAmJiB0eXBlb2YgdmFsLm11bHRpbGluZSA9PT0gJ2Jvb2xlYW4nXG4gICAgJiYgdHlwZW9mIHZhbC5nbG9iYWwgPT09ICdib29sZWFuJztcbn1cblxuZnVuY3Rpb24gaXNHZW5lcmF0b3JGbihuYW1lLCB2YWwpIHtcbiAgcmV0dXJuIGN0b3JOYW1lKG5hbWUpID09PSAnR2VuZXJhdG9yRnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc0dlbmVyYXRvck9iaih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwudGhyb3cgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgdmFsLnJldHVybiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiB2YWwubmV4dCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiB2YWwubGVuZ3RoID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsLmNhbGxlZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2FsbGVlJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIElmIHlvdSBuZWVkIHRvIHN1cHBvcnQgU2FmYXJpIDUtNyAoOC0xMCB5ci1vbGQgYnJvd3NlciksXG4gKiB0YWtlIGEgbG9vayBhdCBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2lzLWJ1ZmZlclxuICovXG5cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICBpZiAodmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEEgcHJpdmF0ZSBzdHJpbmcgdG8gaWRlbnRpZnkgc3RydWN0cyBieS5cbiAqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICovXG5cbmNvbnN0IElTX1NUUlVDVCA9ICdAQF9fU1RSVUNUX19AQCc7XG5cbi8qKlxuICogQSBwcml2YXRlIHN0cmluZyB0byByZWZlciB0byBhIHN0cnVjdCdzIGtpbmQuXG4gKlxuICogQHR5cGUge1N0cmluZ31cbiAqL1xuXG5jb25zdCBLSU5EID0gJ0BAX19LSU5EX19AQCc7XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBgdmFsdWVgIGlzIGEgc3RydWN0LlxuICpcbiAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc1N0cnVjdCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWVbSVNfU1RSVUNUXSk7XG59XG5cbi8qKlxuICogUmVzb2x2ZSBgZGVmYXVsdHNgLCBmb3IgYW4gb3B0aW9uYWwgYHZhbHVlYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufEFueX0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICogQHJldHVybiB7QW55fVxuICovXG5cbmZ1bmN0aW9uIHJlc29sdmVEZWZhdWx0cyhkZWZhdWx0cywgdmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiBkZWZhdWx0cyA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRzKHZhbHVlKSA6IGRlZmF1bHRzO1xufVxuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuLyoqXG4gKiBLaW5kLlxuICpcbiAqIEB0eXBlIHtLaW5kfVxuICovXG5cbmNsYXNzIEtpbmQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCB2YWxpZGF0ZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnZhbGlkYXRlID0gdmFsaWRhdGU7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnkuXG4gKlxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbnxPYmplY3R8U3RyaW5nfSBzY2hlbWFcbiAqIEBwYXJhbSB7QW55fSBkZWZhdWx0c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBhbnkoc2NoZW1hLCBkZWZhdWx0cyQkMSwgb3B0aW9ucykge1xuICBpZiAoaXNTdHJ1Y3Qoc2NoZW1hKSkge1xuICAgIHJldHVybiBzY2hlbWFbS0lORF07XG4gIH1cblxuICBpZiAoc2NoZW1hIGluc3RhbmNlb2YgS2luZCkge1xuICAgIHJldHVybiBzY2hlbWE7XG4gIH1cblxuICBzd2l0Y2ggKGtpbmRPZihzY2hlbWEpKSB7XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAge1xuICAgICAgICByZXR1cm4gc2NoZW1hLmxlbmd0aCA+IDEgPyB0dXBsZShzY2hlbWEsIGRlZmF1bHRzJCQxLCBvcHRpb25zKSA6IGxpc3Qoc2NoZW1hLCBkZWZhdWx0cyQkMSwgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBmdW5jKHNjaGVtYSwgZGVmYXVsdHMkJDEsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdChzY2hlbWEsIGRlZmF1bHRzJCQxLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICB7XG4gICAgICAgIGxldCByZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGxldCB0eXBlO1xuXG4gICAgICAgIGlmIChzY2hlbWEuZW5kc1dpdGgoJz8nKSkge1xuICAgICAgICAgIHJlcXVpcmVkID0gZmFsc2U7XG4gICAgICAgICAgc2NoZW1hID0gc2NoZW1hLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY2hlbWEuaW5jbHVkZXMoJ3wnKSkge1xuICAgICAgICAgIGNvbnN0IHNjYWxhcnMgPSBzY2hlbWEuc3BsaXQoL1xccypcXHxcXHMqL2cpO1xuICAgICAgICAgIHR5cGUgPSB1bmlvbihzY2FsYXJzLCBkZWZhdWx0cyQkMSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2NoZW1hLmluY2x1ZGVzKCcmJykpIHtcbiAgICAgICAgICBjb25zdCBzY2FsYXJzID0gc2NoZW1hLnNwbGl0KC9cXHMqJlxccyovZyk7XG4gICAgICAgICAgdHlwZSA9IGludGVyc2VjdGlvbihzY2FsYXJzLCBkZWZhdWx0cyQkMSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZSA9IHNjYWxhcihzY2hlbWEsIGRlZmF1bHRzJCQxLCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVxdWlyZWQpIHtcbiAgICAgICAgICB0eXBlID0gb3B0aW9uYWwodHlwZSwgdW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEEgc2NoZW1hIGRlZmluaXRpb24gbXVzdCBiZSBhbiBvYmplY3QsIGFycmF5LCBzdHJpbmcgb3IgZnVuY3Rpb24sIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2NoZW1hOiAke3NjaGVtYX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIERpY3QuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gZGljdChzY2hlbWEsIGRlZmF1bHRzJCQxLCBvcHRpb25zKSB7XG4gIGlmIChraW5kT2Yoc2NoZW1hKSAhPT0gJ2FycmF5JyB8fCBzY2hlbWEubGVuZ3RoICE9PSAyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGljdCBzdHJ1Y3RzIG11c3QgYmUgZGVmaW5lZCBhcyBhbiBhcnJheSB3aXRoIHR3byBlbGVtZW50cywgYnV0IHlvdSBwYXNzZWQ6ICR7c2NoZW1hfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2NoZW1hOiAke3NjaGVtYX1gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBvYmogPSBzY2FsYXIoJ29iamVjdCcsIHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gIGNvbnN0IGtleXMgPSBhbnkoc2NoZW1hWzBdLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICBjb25zdCB2YWx1ZXMgPSBhbnkoc2NoZW1hWzFdLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICBjb25zdCBuYW1lID0gJ2RpY3QnO1xuICBjb25zdCB0eXBlID0gYGRpY3Q8JHtrZXlzLnR5cGV9LCR7dmFsdWVzLnR5cGV9PmA7XG4gIGNvbnN0IHZhbGlkYXRlID0gdmFsdWUgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzJCQxKTtcbiAgICB2YWx1ZSA9IHJlc29sdmVkID8gX2V4dGVuZHMoe30sIHJlc29sdmVkLCB2YWx1ZSkgOiB2YWx1ZTtcbiAgICBjb25zdCBbZXJyb3JdID0gb2JqLnZhbGlkYXRlKHZhbHVlKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgZXJyb3IudHlwZSA9IHR5cGU7XG4gICAgICByZXR1cm4gW2Vycm9yXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXQgPSB7fTtcbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcblxuICAgIGZvciAobGV0IGsgaW4gdmFsdWUpIHtcbiAgICAgIGNvbnN0IHYgPSB2YWx1ZVtrXTtcbiAgICAgIGNvbnN0IFtlLCByXSA9IGtleXMudmFsaWRhdGUoayk7XG5cbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGNvbnN0IGFsbEUgPSBlLmVycm9ycyB8fCBbZV07XG4gICAgICAgIGFsbEUuZm9yRWFjaChzaW5nbGVFID0+IHtcbiAgICAgICAgICBzaW5nbGVFLnBhdGggPSBba10uY29uY2F0KHNpbmdsZUUucGF0aCk7XG4gICAgICAgICAgc2luZ2xlRS5kYXRhID0gdmFsdWU7XG4gICAgICAgICAgZXJyb3JzLnB1c2goc2luZ2xlRSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgayA9IHI7XG4gICAgICBjb25zdCBbZTIsIHIyXSA9IHZhbHVlcy52YWxpZGF0ZSh2KTtcblxuICAgICAgaWYgKGUyKSB7XG4gICAgICAgIGNvbnN0IGFsbEUyID0gZTIuZXJyb3JzIHx8IFtlMl07XG4gICAgICAgIGFsbEUyLmZvckVhY2goc2luZ2xlRSA9PiB7XG4gICAgICAgICAgc2luZ2xlRS5wYXRoID0gW2tdLmNvbmNhdChzaW5nbGVFLnBhdGgpO1xuICAgICAgICAgIHNpbmdsZUUuZGF0YSA9IHZhbHVlO1xuICAgICAgICAgIGVycm9ycy5wdXNoKHNpbmdsZUUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHJldFtrXSA9IHIyO1xuICAgIH1cblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmaXJzdCA9IGVycm9yc1swXTtcbiAgICAgIGZpcnN0LmVycm9ycyA9IGVycm9ycztcbiAgICAgIHJldHVybiBbZmlyc3RdO1xuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCByZXRdO1xuICB9O1xuXG4gIHJldHVybiBuZXcgS2luZChuYW1lLCB0eXBlLCB2YWxpZGF0ZSk7XG59XG5cbi8qKlxuICogRW51bS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzY2hlbWFcbiAqIEBwYXJhbSB7QW55fSBkZWZhdWx0c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBlbihzY2hlbWEsIGRlZmF1bHRzJCQxLCBvcHRpb25zKSB7XG4gIGlmIChraW5kT2Yoc2NoZW1hKSAhPT0gJ2FycmF5Jykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVudW0gc3RydWN0cyBtdXN0IGJlIGRlZmluZWQgYXMgYW4gYXJyYXksIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNjaGVtYTogJHtzY2hlbWF9YCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmFtZSA9ICdlbnVtJztcbiAgY29uc3QgdHlwZSA9IHNjaGVtYS5tYXAocyA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKHMpO1xuICAgIH1cbiAgfSkuam9pbignIHwgJyk7XG5cbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWUgPSByZXNvbHZlRGVmYXVsdHMoZGVmYXVsdHMkJDEpKSA9PiB7XG4gICAgcmV0dXJuIHNjaGVtYS5pbmNsdWRlcyh2YWx1ZSkgPyBbdW5kZWZpbmVkLCB2YWx1ZV0gOiBbeyBkYXRhOiB2YWx1ZSwgcGF0aDogW10sIHZhbHVlLCB0eXBlIH1dO1xuICB9O1xuXG4gIHJldHVybiBuZXcgS2luZChuYW1lLCB0eXBlLCB2YWxpZGF0ZSk7XG59XG5cbi8qKlxuICogRW51bXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2NoZW1hXG4gKiBAcGFyYW0ge0FueX0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gZW51bXMoc2NoZW1hLCBkZWZhdWx0cyQkMSwgb3B0aW9ucykge1xuICBjb25zdCBlID0gZW4oc2NoZW1hLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICBjb25zdCBsID0gbGlzdChbZV0sIGRlZmF1bHRzJCQxLCBvcHRpb25zKTtcbiAgcmV0dXJuIGw7XG59XG5cbi8qKlxuICogRnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2NoZW1hXG4gKiBAcGFyYW0ge0FueX0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gZnVuYyhzY2hlbWEsIGRlZmF1bHRzJCQxLCBvcHRpb25zKSB7XG4gIGlmIChraW5kT2Yoc2NoZW1hKSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZ1bmN0aW9uIHN0cnVjdHMgbXVzdCBiZSBkZWZpbmVkIGFzIGEgZnVuY3Rpb24sIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNjaGVtYTogJHtzY2hlbWF9YCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmFtZSA9ICdmdW5jdGlvbic7XG4gIGNvbnN0IHR5cGUgPSAnPGZ1bmN0aW9uPic7XG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzJCQxKSwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHNjaGVtYSh2YWx1ZSwgZGF0YSk7XG4gICAgbGV0IGZhaWx1cmUgPSB7IHBhdGg6IFtdLCByZWFzb246IG51bGwgfTtcbiAgICBsZXQgaXNWYWxpZDtcblxuICAgIHN3aXRjaCAoa2luZE9mKHJlc3VsdCkpIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICB7XG4gICAgICAgICAgaXNWYWxpZCA9IHJlc3VsdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAge1xuICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICBmYWlsdXJlLnJlYXNvbiA9IHJlc3VsdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICBmYWlsdXJlID0gX2V4dGVuZHMoe30sIGZhaWx1cmUsIHJlc3VsdCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWxpZGF0b3IgZnVuY3Rpb25zIG11c3QgcmV0dXJuIGEgYm9vbGVhbiwgYW4gZXJyb3IgcmVhc29uIHN0cmluZyBvciBhbiBlcnJvciByZWFzb24gb2JqZWN0LCBidXQgeW91IHBhc3NlZDogJHtzY2hlbWF9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCByZXN1bHQ6ICR7cmVzdWx0fWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc1ZhbGlkID8gW3VuZGVmaW5lZCwgdmFsdWVdIDogW19leHRlbmRzKHsgdHlwZSwgdmFsdWUsIGRhdGE6IHZhbHVlIH0sIGZhaWx1cmUpXTtcbiAgfTtcblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpO1xufVxuXG4vKipcbiAqIEluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNjaGVtYVxuICogQHBhcmFtIHtBbnl9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGluc3RhbmNlKHNjaGVtYSwgZGVmYXVsdHMkJDEsIG9wdGlvbnMpIHtcbiAgY29uc3QgbmFtZSA9ICdpbnN0YW5jZSc7XG4gIGNvbnN0IHR5cGUgPSBgaW5zdGFuY2U8JHtzY2hlbWEubmFtZX0+YDtcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWUgPSByZXNvbHZlRGVmYXVsdHMoZGVmYXVsdHMkJDEpKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2Ygc2NoZW1hID8gW3VuZGVmaW5lZCwgdmFsdWVdIDogW3sgZGF0YTogdmFsdWUsIHBhdGg6IFtdLCB2YWx1ZSwgdHlwZSB9XTtcbiAgfTtcblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpO1xufVxuXG4vKipcbiAqIEludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gaW50ZXIoc2NoZW1hLCBkZWZhdWx0cyQkMSwgb3B0aW9ucykge1xuICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdvYmplY3QnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW50ZXJmYWNlIHN0cnVjdHMgbXVzdCBiZSBkZWZpbmVkIGFzIGFuIG9iamVjdCwgYnV0IHlvdSBwYXNzZWQ6ICR7c2NoZW1hfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2NoZW1hOiAke3NjaGVtYX1gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBrcyA9IFtdO1xuICBjb25zdCBwcm9wZXJ0aWVzID0ge307XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gc2NoZW1hKSB7XG4gICAga3MucHVzaChrZXkpO1xuICAgIGNvbnN0IHMgPSBzY2hlbWFba2V5XTtcbiAgICBjb25zdCBraW5kID0gYW55KHMsIHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gICAgcHJvcGVydGllc1trZXldID0ga2luZDtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSAnaW50ZXJmYWNlJztcbiAgY29uc3QgdHlwZSA9IGB7JHtrcy5qb2luKCl9fWA7XG4gIGNvbnN0IHZhbGlkYXRlID0gdmFsdWUgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzJCQxKTtcbiAgICB2YWx1ZSA9IHJlc29sdmVkID8gX2V4dGVuZHMoe30sIHJlc29sdmVkLCB2YWx1ZSkgOiB2YWx1ZTtcbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICBjb25zdCByZXQgPSB2YWx1ZTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgIGxldCB2ID0gdmFsdWVba2V5XTtcbiAgICAgIGNvbnN0IGtpbmQgPSBwcm9wZXJ0aWVzW2tleV07XG5cbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZCA9IGRlZmF1bHRzJCQxICYmIGRlZmF1bHRzJCQxW2tleV07XG4gICAgICAgIHYgPSByZXNvbHZlRGVmYXVsdHMoZCwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBbZSwgcl0gPSBraW5kLnZhbGlkYXRlKHYsIHZhbHVlKTtcblxuICAgICAgaWYgKGUpIHtcbiAgICAgICAgY29uc3QgYWxsRSA9IGUuZXJyb3JzIHx8IFtlXTtcbiAgICAgICAgYWxsRS5mb3JFYWNoKHNpbmdsZUUgPT4ge1xuICAgICAgICAgIHNpbmdsZUUucGF0aCA9IFtrZXldLmNvbmNhdChzaW5nbGVFLnBhdGgpO1xuICAgICAgICAgIHNpbmdsZUUuZGF0YSA9IHZhbHVlO1xuICAgICAgICAgIGVycm9ycy5wdXNoKHNpbmdsZUUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgaW4gdmFsdWUgfHwgciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldFtrZXldID0gcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZmlyc3QgPSBlcnJvcnNbMF07XG4gICAgICBmaXJzdC5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICByZXR1cm4gW2ZpcnN0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3VuZGVmaW5lZCwgcmV0XTtcbiAgfTtcblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpO1xufVxuXG4vKipcbiAqIExhenkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2NoZW1hXG4gKiBAcGFyYW0ge0FueX0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gbGF6eShzY2hlbWEsIGRlZmF1bHRzJCQxLCBvcHRpb25zKSB7XG4gIGlmIChraW5kT2Yoc2NoZW1hKSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYExhenkgc3RydWN0cyBtdXN0IGJlIGRlZmluZWQgYXMgYW4gZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc2NoZW1hLCBidXQgeW91IHBhc3NlZDogJHtzY2hlbWF9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzY2hlbWE6ICR7c2NoZW1hfWApO1xuICAgIH1cbiAgfVxuXG4gIGxldCBraW5kO1xuICBsZXQgc3RydWN0O1xuICBjb25zdCBuYW1lID0gJ2xhenknO1xuICBjb25zdCB0eXBlID0gYGxhenkuLi5gO1xuICBjb25zdCBjb21waWxlID0gdmFsdWUgPT4ge1xuICAgIHN0cnVjdCA9IHNjaGVtYSgpO1xuICAgIGtpbmQubmFtZSA9IHN0cnVjdC5raW5kO1xuICAgIGtpbmQudHlwZSA9IHN0cnVjdC50eXBlO1xuICAgIGtpbmQudmFsaWRhdGUgPSBzdHJ1Y3QudmFsaWRhdGU7XG4gICAgcmV0dXJuIGtpbmQudmFsaWRhdGUodmFsdWUpO1xuICB9O1xuXG4gIGtpbmQgPSBuZXcgS2luZChuYW1lLCB0eXBlLCBjb21waWxlKTtcbiAgcmV0dXJuIGtpbmQ7XG59XG5cbi8qKlxuICogRHluYW1pYy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjcmVhdGVTY2hlbWFcbiAqIEBwYXJhbSB7QW55fSBkZWZhdWx0c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBkeW5hbWljKGNyZWF0ZVNjaGVtYSwgZGVmYXVsdHMkJDEsIG9wdGlvbnMpIHtcbiAgaWYgKGtpbmRPZihjcmVhdGVTY2hlbWEpICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRHluYW1pYyBzdHJ1Y3RzIG11c3QgYmUgZGVmaW5lZCBhcyBhIGZ1bmN0aW9uLCBidXQgeW91IHBhc3NlZDogJHtjcmVhdGVTY2hlbWF9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzY2hlbWE6ICR7Y3JlYXRlU2NoZW1hfWApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSAnZHluYW1pYyc7XG4gIGNvbnN0IHR5cGUgPSAnZHluYW1pYy4uLic7XG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzJCQxKSwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHNjaGVtYSA9IGNyZWF0ZVNjaGVtYSh2YWx1ZSwgZGF0YSk7XG5cbiAgICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRHluYW1pYyBzdHJ1Y3RzIG11c3QgcmV0dXJuIGEgc2NoZW1hLCBidXQgeW91IHBhc3NlZDogJHtzY2hlbWF9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2NoZW1hOiAke3NjaGVtYX1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBbZXJyb3IsIHJlc3VsdF0gPSBzY2hlbWEudmFsaWRhdGUodmFsdWUpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gW2Vycm9yXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3VuZGVmaW5lZCwgcmVzdWx0XTtcbiAgfTtcblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpO1xufVxuXG4vKipcbiAqIExpc3QuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2NoZW1hXG4gKiBAcGFyYW0ge0FycmF5fSBkZWZhdWx0c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBsaXN0KHNjaGVtYSwgZGVmYXVsdHMkJDEsIG9wdGlvbnMpIHtcbiAgaWYgKGtpbmRPZihzY2hlbWEpICE9PSAnYXJyYXknIHx8IHNjaGVtYS5sZW5ndGggIT09IDEpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBMaXN0IHN0cnVjdHMgbXVzdCBiZSBkZWZpbmVkIGFzIGFuIGFycmF5IHdpdGggYSBzaW5nbGUgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQ6ICR7c2NoZW1hfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2NoZW1hOiAke3NjaGVtYX1gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBhcnJheSA9IHNjYWxhcignYXJyYXknLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICBjb25zdCBlbGVtZW50ID0gYW55KHNjaGVtYVswXSwgdW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgY29uc3QgbmFtZSA9ICdsaXN0JztcbiAgY29uc3QgdHlwZSA9IGBbJHtlbGVtZW50LnR5cGV9XWA7XG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzJCQxKSkgPT4ge1xuICAgIGNvbnN0IFtlcnJvciwgcmVzdWx0XSA9IGFycmF5LnZhbGlkYXRlKHZhbHVlKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgZXJyb3IudHlwZSA9IHR5cGU7XG4gICAgICByZXR1cm4gW2Vycm9yXTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHJlc3VsdDtcbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICBjb25zdCByZXQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSB2YWx1ZVtpXTtcbiAgICAgIGNvbnN0IFtlLCByXSA9IGVsZW1lbnQudmFsaWRhdGUodik7XG5cbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGNvbnN0IGFsbEUgPSBlLmVycm9ycyB8fCBbZV07XG4gICAgICAgIGFsbEUuZm9yRWFjaChzaW5nbGVFID0+IHtcbiAgICAgICAgICBzaW5nbGVFLnBhdGggPSBbaV0uY29uY2F0KHNpbmdsZUUucGF0aCk7XG4gICAgICAgICAgc2luZ2xlRS5kYXRhID0gdmFsdWU7XG4gICAgICAgICAgZXJyb3JzLnB1c2goc2luZ2xlRSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcmV0W2ldID0gcjtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZmlyc3QgPSBlcnJvcnNbMF07XG4gICAgICBmaXJzdC5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICByZXR1cm4gW2ZpcnN0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3VuZGVmaW5lZCwgcmV0XTtcbiAgfTtcblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpO1xufVxuXG4vKipcbiAqIExpdGVyYWwuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2NoZW1hXG4gKiBAcGFyYW0ge0FueX0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gbGl0ZXJhbChzY2hlbWEsIGRlZmF1bHRzJCQxLCBvcHRpb25zKSB7XG4gIGNvbnN0IG5hbWUgPSAnbGl0ZXJhbCc7XG4gIGNvbnN0IHR5cGUgPSBgbGl0ZXJhbDogJHtKU09OLnN0cmluZ2lmeShzY2hlbWEpfWA7XG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzJCQxKSkgPT4ge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gc2NoZW1hID8gW3VuZGVmaW5lZCwgdmFsdWVdIDogW3sgZGF0YTogdmFsdWUsIHBhdGg6IFtdLCB2YWx1ZSwgdHlwZSB9XTtcbiAgfTtcblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpO1xufVxuXG4vKipcbiAqIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gb2JqZWN0KHNjaGVtYSwgZGVmYXVsdHMkJDEsIG9wdGlvbnMpIHtcbiAgaWYgKGtpbmRPZihzY2hlbWEpICE9PSAnb2JqZWN0Jykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9iamVjdCBzdHJ1Y3RzIG11c3QgYmUgZGVmaW5lZCBhcyBhbiBvYmplY3QsIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNjaGVtYTogJHtzY2hlbWF9YCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb2JqID0gc2NhbGFyKCdvYmplY3QnLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICBjb25zdCBrcyA9IFtdO1xuICBjb25zdCBwcm9wZXJ0aWVzID0ge307XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gc2NoZW1hKSB7XG4gICAga3MucHVzaChrZXkpO1xuICAgIGNvbnN0IHMgPSBzY2hlbWFba2V5XTtcbiAgICBjb25zdCBraW5kID0gYW55KHMsIHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gICAgcHJvcGVydGllc1trZXldID0ga2luZDtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSAnb2JqZWN0JztcbiAgY29uc3QgdHlwZSA9IGB7JHtrcy5qb2luKCl9fWA7XG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzJCQxKSkgPT4ge1xuICAgIGNvbnN0IFtlcnJvcl0gPSBvYmoudmFsaWRhdGUodmFsdWUpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBlcnJvci50eXBlID0gdHlwZTtcbiAgICAgIHJldHVybiBbZXJyb3JdO1xuICAgIH1cblxuICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgIGNvbnN0IHJldCA9IHt9O1xuICAgIGNvbnN0IHZhbHVlS2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICBjb25zdCBwcm9wZXJ0aWVzS2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpO1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KHZhbHVlS2V5cy5jb25jYXQocHJvcGVydGllc0tleXMpKTtcblxuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IHYgPSB2YWx1ZVtrZXldO1xuICAgICAgY29uc3Qga2luZCA9IHByb3BlcnRpZXNba2V5XTtcblxuICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkID0gZGVmYXVsdHMkJDEgJiYgZGVmYXVsdHMkJDFba2V5XTtcbiAgICAgICAgdiA9IHJlc29sdmVEZWZhdWx0cyhkLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgha2luZCkge1xuICAgICAgICBjb25zdCBlID0geyBkYXRhOiB2YWx1ZSwgcGF0aDogW2tleV0sIHZhbHVlOiB2IH07XG4gICAgICAgIGVycm9ycy5wdXNoKGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFtlLCByXSA9IGtpbmQudmFsaWRhdGUodiwgdmFsdWUpO1xuXG4gICAgICBpZiAoZSkge1xuICAgICAgICBjb25zdCBhbGxFID0gZS5lcnJvcnMgfHwgW2VdO1xuICAgICAgICBhbGxFLmZvckVhY2goc2luZ2xlRSA9PiB7XG4gICAgICAgICAgc2luZ2xlRS5wYXRoID0gW2tleV0uY29uY2F0KHNpbmdsZUUucGF0aCk7XG4gICAgICAgICAgc2luZ2xlRS5kYXRhID0gdmFsdWU7XG4gICAgICAgICAgZXJyb3JzLnB1c2goc2luZ2xlRSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgaW4gdmFsdWUgfHwgciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldFtrZXldID0gcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmaXJzdCA9IGVycm9yc1swXTtcbiAgICAgIGZpcnN0LmVycm9ycyA9IGVycm9ycztcbiAgICAgIHJldHVybiBbZmlyc3RdO1xuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCByZXRdO1xuICB9O1xuXG4gIHJldHVybiBuZXcgS2luZChuYW1lLCB0eXBlLCB2YWxpZGF0ZSk7XG59XG5cbi8qKlxuICogT3B0aW9uYWwuXG4gKlxuICogQHBhcmFtIHtBbnl9IHNjaGVtYVxuICogQHBhcmFtIHtBbnl9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIG9wdGlvbmFsKHNjaGVtYSwgZGVmYXVsdHMkJDEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHVuaW9uKFtzY2hlbWEsICd1bmRlZmluZWQnXSwgZGVmYXVsdHMkJDEsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFBhcnRpYWwuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYVxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIHBhcnRpYWwoc2NoZW1hLCBkZWZhdWx0cyQkMSwgb3B0aW9ucykge1xuICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdvYmplY3QnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFydGlhbCBzdHJ1Y3RzIG11c3QgYmUgZGVmaW5lZCBhcyBhbiBvYmplY3QsIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNjaGVtYTogJHtzY2hlbWF9YCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb2JqID0gc2NhbGFyKCdvYmplY3QnLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICBjb25zdCBrcyA9IFtdO1xuICBjb25zdCBwcm9wZXJ0aWVzID0ge307XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gc2NoZW1hKSB7XG4gICAga3MucHVzaChrZXkpO1xuICAgIGNvbnN0IHMgPSBzY2hlbWFba2V5XTtcbiAgICBjb25zdCBraW5kID0gYW55KHMsIHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gICAgcHJvcGVydGllc1trZXldID0ga2luZDtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSAncGFydGlhbCc7XG4gIGNvbnN0IHR5cGUgPSBgeyR7a3Muam9pbigpfSwuLi59YDtcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWUgPSByZXNvbHZlRGVmYXVsdHMoZGVmYXVsdHMkJDEpKSA9PiB7XG4gICAgY29uc3QgW2Vycm9yXSA9IG9iai52YWxpZGF0ZSh2YWx1ZSk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGVycm9yLnR5cGUgPSB0eXBlO1xuICAgICAgcmV0dXJuIFtlcnJvcl07XG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gW107XG4gICAgY29uc3QgcmV0ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICBsZXQgdiA9IHZhbHVlW2tleV07XG4gICAgICBjb25zdCBraW5kID0gcHJvcGVydGllc1trZXldO1xuXG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGQgPSBkZWZhdWx0cyQkMSAmJiBkZWZhdWx0cyQkMVtrZXldO1xuICAgICAgICB2ID0gcmVzb2x2ZURlZmF1bHRzKGQsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgW2UsIHJdID0ga2luZC52YWxpZGF0ZSh2LCB2YWx1ZSk7XG5cbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGNvbnN0IGFsbEUgPSBlLmVycm9ycyB8fCBbZV07XG4gICAgICAgIGFsbEUuZm9yRWFjaChzaW5nbGVFID0+IHtcbiAgICAgICAgICBzaW5nbGVFLnBhdGggPSBba2V5XS5jb25jYXQoc2luZ2xlRS5wYXRoKTtcbiAgICAgICAgICBzaW5nbGVFLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgICBlcnJvcnMucHVzaChzaW5nbGVFKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5IGluIHZhbHVlIHx8IHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXRba2V5XSA9IHI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGZpcnN0ID0gZXJyb3JzWzBdO1xuICAgICAgZmlyc3QuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgcmV0dXJuIFtmaXJzdF07XG4gICAgfVxuXG4gICAgcmV0dXJuIFt1bmRlZmluZWQsIHJldF07XG4gIH07XG5cbiAgcmV0dXJuIG5ldyBLaW5kKG5hbWUsIHR5cGUsIHZhbGlkYXRlKTtcbn1cblxuLyoqXG4gKiBTY2FsYXIuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNjaGVtYVxuICogQHBhcmFtIHtBbnl9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIHNjYWxhcihzY2hlbWEsIGRlZmF1bHRzJCQxLCBvcHRpb25zKSB7XG4gIGlmIChraW5kT2Yoc2NoZW1hKSAhPT0gJ3N0cmluZycpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTY2FsYXIgc3RydWN0cyBtdXN0IGJlIGRlZmluZWQgYXMgYSBzdHJpbmcsIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNjaGVtYTogJHtzY2hlbWF9YCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgeyB0eXBlcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgZm4gPSB0eXBlc1tzY2hlbWFdO1xuXG4gIGlmIChraW5kT2YoZm4pICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gc3RydWN0IHZhbGlkYXRvciBmdW5jdGlvbiBmb3VuZCBmb3IgdHlwZSBcIiR7c2NoZW1hfVwiLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdHlwZTogJHtzY2hlbWF9YCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qga2luZCA9IGZ1bmMoZm4sIGRlZmF1bHRzJCQxLCBvcHRpb25zKTtcbiAgY29uc3QgbmFtZSA9ICdzY2FsYXInO1xuICBjb25zdCB0eXBlID0gc2NoZW1hO1xuICBjb25zdCB2YWxpZGF0ZSA9IHZhbHVlID0+IHtcbiAgICBjb25zdCBbZXJyb3IsIHJlc3VsdF0gPSBraW5kLnZhbGlkYXRlKHZhbHVlKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgZXJyb3IudHlwZSA9IHR5cGU7XG4gICAgICByZXR1cm4gW2Vycm9yXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3VuZGVmaW5lZCwgcmVzdWx0XTtcbiAgfTtcblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpO1xufVxuXG4vKipcbiAqIFR1cGxlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNjaGVtYVxuICogQHBhcmFtIHtBcnJheX0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gdHVwbGUoc2NoZW1hLCBkZWZhdWx0cyQkMSwgb3B0aW9ucykge1xuICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdhcnJheScpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUdXBsZSBzdHJ1Y3RzIG11c3QgYmUgZGVmaW5lZCBhcyBhbiBhcnJheSwgYnV0IHlvdSBwYXNzZWQ6ICR7c2NoZW1hfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2NoZW1hOiAke3NjaGVtYX1gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBraW5kcyA9IHNjaGVtYS5tYXAocyA9PiBhbnkocywgdW5kZWZpbmVkLCBvcHRpb25zKSk7XG4gIGNvbnN0IGFycmF5ID0gc2NhbGFyKCdhcnJheScsIHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gIGNvbnN0IG5hbWUgPSAndHVwbGUnO1xuICBjb25zdCB0eXBlID0gYFske2tpbmRzLm1hcChrID0+IGsudHlwZSkuam9pbigpfV1gO1xuICBjb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZSA9IHJlc29sdmVEZWZhdWx0cyhkZWZhdWx0cyQkMSkpID0+IHtcbiAgICBjb25zdCBbZXJyb3JdID0gYXJyYXkudmFsaWRhdGUodmFsdWUpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBlcnJvci50eXBlID0gdHlwZTtcbiAgICAgIHJldHVybiBbZXJyb3JdO1xuICAgIH1cblxuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgubWF4KHZhbHVlLmxlbmd0aCwga2luZHMubGVuZ3RoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtpbmQgPSBraW5kc1tpXTtcbiAgICAgIGNvbnN0IHYgPSB2YWx1ZVtpXTtcblxuICAgICAgaWYgKCFraW5kKSB7XG4gICAgICAgIGNvbnN0IGUgPSB7IGRhdGE6IHZhbHVlLCBwYXRoOiBbaV0sIHZhbHVlOiB2IH07XG4gICAgICAgIGVycm9ycy5wdXNoKGUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgW2UsIHJdID0ga2luZC52YWxpZGF0ZSh2KTtcblxuICAgICAgaWYgKGUpIHtcbiAgICAgICAgY29uc3QgYWxsRSA9IGUuZXJyb3JzIHx8IFtlXTtcbiAgICAgICAgYWxsRS5mb3JFYWNoKHNpbmdsZUUgPT4ge1xuICAgICAgICAgIHNpbmdsZUUucGF0aCA9IFtpXS5jb25jYXQoc2luZ2xlRS5wYXRoKTtcbiAgICAgICAgICBzaW5nbGVFLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgICBlcnJvcnMucHVzaChzaW5nbGVFKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICByZXRbaV0gPSByO1xuICAgIH1cblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmaXJzdCA9IGVycm9yc1swXTtcbiAgICAgIGZpcnN0LmVycm9ycyA9IGVycm9ycztcbiAgICAgIHJldHVybiBbZmlyc3RdO1xuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCByZXRdO1xuICB9O1xuXG4gIHJldHVybiBuZXcgS2luZChuYW1lLCB0eXBlLCB2YWxpZGF0ZSk7XG59XG5cbi8qKlxuICogVW5pb24uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2NoZW1hXG4gKiBAcGFyYW0ge0FueX0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gdW5pb24oc2NoZW1hLCBkZWZhdWx0cyQkMSwgb3B0aW9ucykge1xuICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdhcnJheScpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmlvbiBzdHJ1Y3RzIG11c3QgYmUgZGVmaW5lZCBhcyBhbiBhcnJheSwgYnV0IHlvdSBwYXNzZWQ6ICR7c2NoZW1hfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2NoZW1hOiAke3NjaGVtYX1gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBraW5kcyA9IHNjaGVtYS5tYXAocyA9PiBhbnkocywgdW5kZWZpbmVkLCBvcHRpb25zKSk7XG4gIGNvbnN0IG5hbWUgPSAndW5pb24nO1xuICBjb25zdCB0eXBlID0ga2luZHMubWFwKGsgPT4gay50eXBlKS5qb2luKCcgfCAnKTtcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWUgPSByZXNvbHZlRGVmYXVsdHMoZGVmYXVsdHMkJDEpKSA9PiB7XG4gICAgY29uc3QgZXJyb3JzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGsgb2Yga2luZHMpIHtcbiAgICAgIGNvbnN0IFtlLCByXSA9IGsudmFsaWRhdGUodmFsdWUpO1xuXG4gICAgICBpZiAoIWUpIHtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHJdO1xuICAgICAgfVxuXG4gICAgICBlcnJvcnMucHVzaChlKTtcbiAgICB9XG4gICAgZXJyb3JzWzBdLnR5cGUgPSB0eXBlO1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgcmV0dXJuIG5ldyBLaW5kKG5hbWUsIHR5cGUsIHZhbGlkYXRlKTtcbn1cblxuLyoqXG4gKiBJbnRlcnNlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2NoZW1hXG4gKiBAcGFyYW0ge0FueX0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gaW50ZXJzZWN0aW9uKHNjaGVtYSwgZGVmYXVsdHMkJDEsIG9wdGlvbnMpIHtcbiAgaWYgKGtpbmRPZihzY2hlbWEpICE9PSAnYXJyYXknKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW50ZXJzZWN0aW9uIHN0cnVjdHMgbXVzdCBiZSBkZWZpbmVkIGFzIGFuIGFycmF5LCBidXQgeW91IHBhc3NlZDogJHtzY2hlbWF9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzY2hlbWE6ICR7c2NoZW1hfWApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHR5cGVzID0gc2NoZW1hLm1hcChzID0+IGFueShzLCB1bmRlZmluZWQsIG9wdGlvbnMpKTtcbiAgY29uc3QgbmFtZSA9ICdpbnRlcnNlY3Rpb24nO1xuICBjb25zdCB0eXBlID0gdHlwZXMubWFwKHQgPT4gdC50eXBlKS5qb2luKCcgJiAnKTtcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWUgPSByZXNvbHZlRGVmYXVsdHMoZGVmYXVsdHMkJDEpKSA9PiB7XG4gICAgbGV0IHYgPSB2YWx1ZTtcblxuICAgIGZvciAoY29uc3QgdCBvZiB0eXBlcykge1xuICAgICAgY29uc3QgW2UsIHJdID0gdC52YWxpZGF0ZSh2KTtcblxuICAgICAgaWYgKGUpIHtcbiAgICAgICAgZS50eXBlID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIFtlXTtcbiAgICAgIH1cblxuICAgICAgdiA9IHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFt1bmRlZmluZWQsIHZdO1xuICB9O1xuXG4gIHJldHVybiBuZXcgS2luZChuYW1lLCB0eXBlLCB2YWxpZGF0ZSk7XG59XG5cbi8qKlxuICogS2luZHMuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuXG5jb25zdCBLaW5kcyA9IHtcbiAgYW55LFxuICBkaWN0LFxuICBlbnVtOiBlbixcbiAgZW51bXMsXG4gIGZ1bmN0aW9uOiBmdW5jLFxuICBpbnN0YW5jZSxcbiAgaW50ZXJmYWNlOiBpbnRlcixcbiAgbGF6eSxcbiAgbGlzdCxcbiAgbGl0ZXJhbCxcbiAgb2JqZWN0LFxuICBvcHRpb25hbCxcbiAgcGFydGlhbCxcbiAgc2NhbGFyLFxuICB0dXBsZSxcbiAgdW5pb24sXG4gIGludGVyc2VjdGlvbixcbiAgZHluYW1pY1xuXG4gIC8qKlxuICAgKiBFeHBvcnQuXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuXG59O1xuXG4vKipcbiAqIFRoZSB0eXBlcyB0aGF0IGBraW5kLW9mYCBzdXBwb3J0cy5cbiAqXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cblxuY29uc3QgVFlQRVMgPSBbJ2FyZ3VtZW50cycsICdhcnJheScsICdib29sZWFuJywgJ2J1ZmZlcicsICdlcnJvcicsICdmbG9hdDMyYXJyYXknLCAnZmxvYXQ2NGFycmF5JywgJ2Z1bmN0aW9uJywgJ2dlbmVyYXRvcmZ1bmN0aW9uJywgJ2ludDE2YXJyYXknLCAnaW50MzJhcnJheScsICdpbnQ4YXJyYXknLCAnbWFwJywgJ251bGwnLCAnbnVtYmVyJywgJ29iamVjdCcsICdwcm9taXNlJywgJ3JlZ2V4cCcsICdzZXQnLCAnc3RyaW5nJywgJ3N5bWJvbCcsICd1aW50MTZhcnJheScsICd1aW50MzJhcnJheScsICd1aW50OGFycmF5JywgJ3VpbnQ4Y2xhbXBlZGFycmF5JywgJ3VuZGVmaW5lZCcsICd3ZWFrbWFwJywgJ3dlYWtzZXQnXTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCB0eXBlcyB0aGF0IFN1cGVyc3RydWN0IHNoaXBzIHdpdGguXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuXG5jb25zdCBUeXBlcyA9IHtcbiAgYW55OiB2YWx1ZSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG59O1xuXG5UWVBFUy5mb3JFYWNoKHR5cGUgPT4ge1xuICBUeXBlc1t0eXBlXSA9IHZhbHVlID0+IGtpbmRPZih2YWx1ZSkgPT09IHR5cGU7XG59KTtcblxuLyoqXG4gKiBIYW5kbGUgdGhlICdkYXRlJyBjYXNlIHNwZWNpYWxseSwgdG8gdGhyb3cgb3V0IGludmFsaWQgYERhdGVgIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuVHlwZXMuZGF0ZSA9IHZhbHVlID0+IGtpbmRPZih2YWx1ZSkgPT09ICdkYXRlJyAmJiAhaXNOYU4odmFsdWUpO1xuXG4vKipcbiAqIENyZWF0ZSBhIHN0cnVjdCBmYWN0b3J5IHdpdGggYSBgY29uZmlnYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBzdXBlcnN0cnVjdChjb25maWcgPSB7fSkge1xuICBjb25zdCB0eXBlcyA9IF9leHRlbmRzKHt9LCBUeXBlcywgY29uZmlnLnR5cGVzIHx8IHt9KTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgYGtpbmRgIHN0cnVjdCB3aXRoIGBzY2hlbWFgLCBgZGVmYXVsdHNgIGFuZCBgb3B0aW9uc2AuXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSBzY2hlbWFcbiAgICogQHBhcmFtIHtBbnl9IGRlZmF1bHRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgKi9cblxuICBmdW5jdGlvbiBzdHJ1Y3Qoc2NoZW1hLCBkZWZhdWx0cyQkMSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKGlzU3RydWN0KHNjaGVtYSkpIHtcbiAgICAgIHNjaGVtYSA9IHNjaGVtYS5zY2hlbWE7XG4gICAgfVxuXG4gICAgY29uc3Qga2luZCA9IEtpbmRzLmFueShzY2hlbWEsIGRlZmF1bHRzJCQxLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywgeyB0eXBlcyB9KSk7XG5cbiAgICBmdW5jdGlvbiBTdHJ1Y3QoZGF0YSkge1xuICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBTdHJ1Y3QpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgU3RydWN0YCBjcmVhdGlvbiBmdW5jdGlvbiBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCB0aGUgYG5ld2Aga2V5d29yZC4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYG5ld2Aga2V5d29yZCEnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gU3RydWN0LmFzc2VydChkYXRhKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RydWN0LCBJU19TVFJVQ1QsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cnVjdCwgS0lORCwgeyB2YWx1ZToga2luZCB9KTtcblxuICAgIFN0cnVjdC5raW5kID0ga2luZC5uYW1lO1xuICAgIFN0cnVjdC50eXBlID0ga2luZC50eXBlO1xuICAgIFN0cnVjdC5zY2hlbWEgPSBzY2hlbWE7XG4gICAgU3RydWN0LmRlZmF1bHRzID0gZGVmYXVsdHMkJDE7XG4gICAgU3RydWN0Lm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgU3RydWN0LmFzc2VydCA9IHZhbHVlID0+IHtcbiAgICAgIGNvbnN0IFtlcnJvciwgcmVzdWx0XSA9IGtpbmQudmFsaWRhdGUodmFsdWUpO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IFN0cnVjdEVycm9yKGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgU3RydWN0LnRlc3QgPSB2YWx1ZSA9PiB7XG4gICAgICBjb25zdCBbZXJyb3JdID0ga2luZC52YWxpZGF0ZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gIWVycm9yO1xuICAgIH07XG5cbiAgICBTdHJ1Y3QudmFsaWRhdGUgPSB2YWx1ZSA9PiB7XG4gICAgICBjb25zdCBbZXJyb3IsIHJlc3VsdF0gPSBraW5kLnZhbGlkYXRlKHZhbHVlKTtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBbbmV3IFN0cnVjdEVycm9yKGVycm9yKV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbdW5kZWZpbmVkLCByZXN1bHRdO1xuICAgIH07XG5cbiAgICByZXR1cm4gU3RydWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1peCBpbiBhIGZhY3RvcnkgZm9yIGVhY2ggc3BlY2lmaWMga2luZCBvZiBzdHJ1Y3QuXG4gICAqL1xuXG4gIE9iamVjdC5rZXlzKEtpbmRzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGNvbnN0IGtpbmQgPSBLaW5kc1tuYW1lXTtcblxuICAgIHN0cnVjdFtuYW1lXSA9IChzY2hlbWEsIGRlZmF1bHRzJCQxLCBvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0ga2luZChzY2hlbWEsIGRlZmF1bHRzJCQxLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywgeyB0eXBlcyB9KSk7XG4gICAgICBjb25zdCBzID0gc3RydWN0KHR5cGUsIGRlZmF1bHRzJCQxLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBzO1xuICAgIH07XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHN0cnVjdCBmYWN0b3J5LlxuICAgKi9cblxuICByZXR1cm4gc3RydWN0O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNvbnZlbmllbmNlIGBzdHJ1Y3RgIGZhY3RvcnkgZm9yIHRoZSBkZWZhdWx0IHR5cGVzLlxuICpcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuXG5jb25zdCBzdHJ1Y3QgPSBzdXBlcnN0cnVjdCgpO1xuXG5leHBvcnQgeyBzdHJ1Y3QsIHN1cGVyc3RydWN0LCBpc1N0cnVjdCwgU3RydWN0RXJyb3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzLmpzLm1hcFxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBTUE7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFxQkE7QUFDQTs7QUE3QkE7QUFDQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQXZCQTtBQUNBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7QUFNQTtBQUVBOzs7Ozs7QUFNQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekNBO0FBQ0E7QUEyQ0E7QUFDQTtBQUNBLFdBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBeENBO0FBQUE7QUFDQTtBQVlBO0FBQUE7QUFDQTtBQURBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUVBO0FBQ0E7QUF6QkE7QUFDQTtBQTJCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdCQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFFQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBQ0E7QUFXQTtBQUFBO0FBQ0E7QUFEQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbENBO0FBQ0E7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRUE7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbENBO0FBQ0E7QUFXQTtBQUFBO0FBQ0E7QUFEQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQXBCQTtBQTRCQTs7Ozs7O0FBTUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQUE7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7QUFNQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==