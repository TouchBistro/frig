(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Frig"] = factory(require("React"));
	else
		root["Frig"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Form = __webpack_require__(3);
	var Input = __webpack_require__(4);
	var ValueLinkedSelect = __webpack_require__(10);
	var booleanHOC = __webpack_require__(1);
	var util = __webpack_require__(6);
	var dsl = __webpack_require__(11);
	console.log("FRIG");
	module.exports = {
	  Form: Form,
	  Input: Input,
	  dsl: dsl,
	  util: util,
	  HigherOrderComponents: {
	    Boolean: booleanHOC
	  },
	  // Setter and getter for the Frig default theme
	  defaultTheme: function defaultTheme(theme) {
	    if (theme == null) return form.defaultProps.theme;
	    if (theme.component == null) throw "Invalid theme. Expected an object";
	    Form.defaultProps.theme = theme;
	    Input.defaultProps.theme = theme;
	  }
	};
	console.log(module.exports);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);

	/*
	 * A higher order function wrapper for components that only allow 2 possible
	 * values in their valueLinks (an onValue and an offValue - true and false by
	 * default).
	 *
	 * This component will request a change to the valueLink for any invalid
	 * valueLink value to convert it into the onValue or offValue.
	 */
	console.log("BOOLEAN HOC");
	module.exports = function (componentClass) {
	  var childName = componentClass.prototype.displayName;

	  return (function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), "constructor", this).apply(this, arguments);

	      this.displayName = "Frig.HigherOrderComponents.Boolean(" + childName + ")";
	    }

	    _createClass(_class, [{
	      key: "componentWillMount",
	      value: function componentWillMount() {
	        this._normalizeValue(this.props);
	      }
	    }, {
	      key: "componentWillReceiveProps",
	      value: function componentWillReceiveProps(nextProps) {
	        this._normalizeValue(nextProps);
	      }
	    }, {
	      key: "_normalizeValue",
	      value: function _normalizeValue(nextProps) {
	        var value = nextProps.valueLink.value;
	        if (value !== this.props.offValue && value !== this.props.onValue) {
	          nextProps.valueLink.requestChange(value != null);
	        }
	      }

	      /*
	       * Intercept the nested component's true/false value change and convert it
	       * into an onValue or offValue before relaying it to the valueLink.
	       */
	    }, {
	      key: "_onChange",
	      value: function _onChange(val) {
	        this.props.valueLink.requestChange(val ? this.props.onValue : this.props.offValue);
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var childProps = Object.assign({}, this.props, {
	          valueLink: {
	            value: this.props.valueLink.value === this.props.onValue,
	            requestChange: this._onChange.bind(this)
	          }
	        });
	        return React.createElement(componentClass, childProps);
	      }
	    }], [{
	      key: "propTypes",
	      value: {
	        valueLink: React.PropTypes.object.isRequired,
	        onValue: React.PropTypes.bool.isRequired,
	        offValue: React.PropTypes.bool.isRequired
	      },
	      enumerable: true
	    }, {
	      key: "defaultProps",
	      value: {
	        onValue: true,
	        offValue: false
	      },
	      enumerable: true
	    }]);

	    return _class;
	  })(React.Component);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var frigInput = __webpack_require__(4);
	var propsClosure = __webpack_require__(7);
	var NestedFeildset = __webpack_require__(8);

	/*
	 * A JSX-compatible React DOM Component.
	 * FrigForm should be used as the top level component for Frig forms in JSX.
	 * In coffeescript FrigForm is called by FrigDSL.
	 */

	var FrigForm = (function (_React$Component) {
	  _inherits(FrigForm, _React$Component);

	  function FrigForm() {
	    _classCallCheck(this, FrigForm);

	    _get(Object.getPrototypeOf(FrigForm.prototype), "constructor", this).apply(this, arguments);

	    this._childComponentsByName = [];
	  }

	  _createClass(FrigForm, [{
	    key: "validate",

	    /*
	     * =========================================================================
	     * Public Functions
	     * =========================================================================
	     */

	    value: function validate() {
	      return this._childComponents().filter(function (c) {
	        return c.validate();
	      }).length !== 0;
	    }
	  }, {
	    key: "isValid",
	    value: function isValid() {
	      return this._childComponents().filter(function (c) {
	        return c.isValid();
	      }).length !== 0;
	    }
	  }, {
	    key: "isModified",
	    value: function isModified() {
	      return this._childComponents().filter(function (c) {
	        return c.isModified();
	      }).length !== 0;
	    }

	    /*
	     * =========================================================================
	     * React Lifecycle + Render
	     * =========================================================================
	     */

	  }, {
	    key: "render",
	    value: function render() {
	      // Nested forms (forms inside nested fieldsets)
	      if (this.props.nestedForm) {
	        return React.DOM.div({}, this._friggingChildren());
	      }
	      // Top-level forms
	      else {
	          var themedForm = this.props.theme.component("form");
	          var props = this._themedFormProps();
	          var children = this._friggingChildren();
	          return React.createElement(themedForm, props, children);
	        }
	    }

	    /*
	     * =========================================================================
	     * Private functions
	     * =========================================================================
	     */

	  }, {
	    key: "_themedFormProps",
	    value: function _themedFormProps() {
	      var formProps = Object.assign({}, this.props);
	      formProps.formHtml = Object.assign({}, formProps.formHtml || {}, {
	        ref: "form",
	        onSubmit: this._onSubmit.bind(this)
	      });
	      return formProps;
	    }

	    // Generate the type mapping for an input component
	  }, {
	    key: "_typeMapping",
	    value: function _typeMapping() {
	      return Object.assign({}, __webpack_require__(9), this.props.theme.type_mapping);
	    }

	    /*
	     * Returns a value link-type object regardles of whether the data property is
	     * a value or value link
	     */
	  }, {
	    key: "_dataLink",
	    value: function _dataLink() {
	      var data = this.props.data;
	      return {
	        value: (data.requestChange ? data.value : data) || {},
	        requestChange: data.requestChange || function () {}
	      };
	    }
	  }, {
	    key: "_data",
	    value: function _data() {
	      return this._dataLink().value;
	    }

	    // Generates React DOM elements to pass to the themed form component as
	    // child components.
	  }, {
	    key: "_friggingChildren",
	    value: function _friggingChildren() {
	      return this.props.form(this._componentClasses());
	    }
	  }, {
	    key: "_onChildComponentMount",
	    value: function _onChildComponentMount(name, component) {
	      this._childComponentsByName[name] = component;
	    }
	  }, {
	    key: "_onChildComponentUnmount",
	    value: function _onChildComponentUnmount(name) {
	      delete this._childComponentsByName[name];
	    }
	  }, {
	    key: "_childComponents",
	    value: function _childComponents() {
	      var list = [];
	      var componentsByName = this._childComponentsByName;
	      for (var k in componentsByName) {
	        list.push(componentsByName[k]);
	      }return list;
	    }
	  }, {
	    key: "_onChildRequestChange",
	    value: function _onChildRequestChange(k, v) {
	      // Update the ReactLink with a copy of the existing data merged with this
	      // new input value
	      this._dataLink().requestChange(Object.assign({}, this._data(), _defineProperty({}, k, v)));
	    }
	  }, {
	    key: "_onSubmit",
	    value: function _onSubmit(e) {
	      if (!this.validate()) return e.preventDefault();
	      this.props.onSubmit(e);
	    }
	  }, {
	    key: "_guessInputType",
	    value: function _guessInputType(inputProps) {
	      var jsType = typeof inputProps.valueLink.value;
	      if (inputProps.type != null) {
	        return inputProps.type;
	      } else if (inputProps.multiple || Array.isArray(inputProps.initialValue)) {
	        return "multiselect";
	      } else if (inputProps.options != null) {
	        return "select";
	      } else if (jsType === "boolean") {
	        return "boolean";
	      } else if (jsType === "number") {
	        return "float";
	      } else if (inputProps.name.match(/password$/i)) {
	        return "password";
	      } else {
	        return "string";
	      }
	    }
	  }, {
	    key: "_getThemedInputComponent",
	    value: function _getThemedInputComponent(props, componentName) {
	      if (componentName == null) {
	        throw props.name + ": No type mapping found for type " + props.type;
	      }
	      var component = this.props.theme.component(componentName);
	      if (component == null) {
	        throw props.name + ": No " + componentName + " component found in theme";
	      }
	      return component;
	    }

	    /*
	     * =========================================================================
	     * DSL
	     * =========================================================================
	     */

	    /*
	     * Component classes for children
	     */
	  }, {
	    key: "_componentClasses",
	    value: function _componentClasses() {
	      if (this._componentClassesCache != null) return this._componentClassesCache;
	      return this._componentClassesCache = {
	        errors: this._errorsComponentClass(),
	        input: this._inputComponentClass(),
	        nestedFields: this._nestedFieldsComponentClass(),
	        submit: this._submitComponentClass()
	      };
	    }
	  }, {
	    key: "_errorsComponentClass",
	    value: function _errorsComponentClass() {
	      // Returning a input component modified with this form's defaults and
	      // overrides
	      var mapping = this._typeMapping().errors;
	      var component = this._getThemedInputComponent({}, mapping.component);
	      return propsClosure(component, {
	        defaults: { key: "errors" },
	        overrides: this._errorsOverrides.bind(this)
	      });
	    }
	  }, {
	    key: "_errorsOverrides",
	    value: function _errorsOverrides() {
	      return {
	        type: "errors",
	        errors: this.props.errors
	      };
	    }
	  }, {
	    key: "_nestedFieldsComponentClass",
	    value: function _nestedFieldsComponentClass() {
	      // Returning a frig form component with this form's props set as defaults
	      return propsClosure(NestedFeildset, {
	        defaults: this._nestedFieldsDefaults.bind(this)
	      });
	    }
	  }, {
	    key: "_nestedFieldsDefaults",
	    value: function _nestedFieldsDefaults(_ref) {
	      var name = _ref.name;

	      return {
	        key: name + "-nestedfields",
	        theme: this.props.theme,
	        typeMapping: this.props.typeMapping,
	        onComponentMount: this._onChildComponentMount.bind(this, [name]),
	        onComponentUnmount: this._onChildComponentUnmount.bind(this, [name]),
	        data: {
	          value: this._data()[name] || {},
	          requestChange: this._onChildRequestChange.bind(this, [name])
	        }
	      };
	    }

	    // Create a submit button
	    // value: [STRING] The label text for the submit button
	    // props: [OBJECT] properties to send to the React Component (see input props)
	  }, {
	    key: "_submitComponentClass",
	    value: function _submitComponentClass() {
	      // Returning a input component modified with this form's defaults and
	      // overrides
	      var mapping = this._typeMapping().submit;
	      var component = this._getThemedInputComponent({}, mapping.component);
	      return propsClosure(component, {
	        defaults: { key: "submit" },
	        overrides: this._submitOverrides.bind(this)
	      });
	    }
	  }, {
	    key: "_submitOverrides",
	    value: function _submitOverrides(submitProps) {
	      return {
	        type: "submit",
	        inputHtml: {
	          defaultValue: submitProps.value
	        }
	      };
	    }

	    // Creates a form field
	    // key: [STRING] the name of the field in the data
	    // props:
	    //   required: (default: true)
	    //   inputHtml: specify html attributes for the input React DOM element
	    //   labelHtml: specify html attributes for the label React DOM element
	    //   placeholder:
	    //     true: (default) adds a placeholder with a name based on a humanization
	    //           of the key
	    //     false: disables the placeholder
	    //     [STRING]: sets the placeholder to the given string
	    //  label:
	    //     true: (default) adds a label with a name based on a humanization
	    //           of the key
	    //     false: disables the label
	    //     [STRING]: sets the label to the given string
	  }, {
	    key: "_inputComponentClass",
	    value: function _inputComponentClass() {
	      // Returning a input component modified with this form's defaults and
	      // overrides
	      return propsClosure(frigInput, {
	        defaults: this._inputDefaults.bind(this),
	        overrides: this._inputOverrides.bind(this)
	      });
	    }
	  }, {
	    key: "_inputDefaults",
	    value: function _inputDefaults(_ref2) {
	      var name = _ref2.name;

	      return {
	        name: name,
	        key: name + "-input",
	        valueLink: {
	          value: this._data()[name],
	          requestChange: this._onChildRequestChange.bind(this, [name])
	        },
	        onComponentMount: this._onChildComponentMount.bind(this, [name]),
	        onComponentUnmount: this._onChildComponentUnmount.bind(this, [name])
	      };
	    }
	  }, {
	    key: "_inputOverrides",
	    value: function _inputOverrides(inputProps) {
	      var name = inputProps.name;
	      // Guessing the type and using it to lookup the template
	      var type = this._guessInputType(inputProps);
	      // looking up the template name with the type mappings and the type
	      var mapping = this._typeMapping()[type];
	      var component = this._getThemedInputComponent(inputProps, mapping.component);
	      var inputHtmlDefaults = { type: mapping.htmlInputType };
	      // Generating the overrides object
	      return Object.assign({}, inputProps, {
	        type: type,
	        component: component,
	        ref: name + "Input",
	        inputHtml: Object.assign(inputHtmlDefaults, inputProps.inputHtml)
	      });
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      data: React.PropTypes.object.isRequired,
	      errors: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	      form: React.PropTypes.func.isRequired,
	      theme: React.PropTypes.object.isRequired,
	      typeMapping: React.PropTypes.objectOf(React.PropTypes.string),
	      // Callbacks
	      onSubmit: React.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: {
	      errors: [],
	      theme: undefined,
	      typeMapping: {},
	      onSubmit: function onSubmit() {}
	    },
	    enumerable: true
	  }]);

	  return FrigForm;
	})(React.Component);

	exports["default"] = FrigForm;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var frigValidations = __webpack_require__(5);

	var _require = __webpack_require__(6);

	var entries = _require.entries;
	var humanize = _require.humanize;

	var FrigInput = (function (_React$Component) {
	  _inherits(FrigInput, _React$Component);

	  function FrigInput() {
	    _classCallCheck(this, FrigInput);

	    _get(Object.getPrototypeOf(FrigInput.prototype), "constructor", this).apply(this, arguments);

	    this.state = {};
	  }

	  _createClass(FrigInput, [{
	    key: "validate",

	    /*
	     * =========================================================================
	     * Public Functions
	     * =========================================================================
	     */

	    value: function validate() {
	      this.setState({ validationRequested: true });
	      return this.isValid();
	    }
	  }, {
	    key: "isValid",
	    value: function isValid() {
	      return this._errors() == null;
	    }
	  }, {
	    key: "isModified",
	    value: function isModified() {
	      return this.state.modified != null;
	    }

	    /*
	     * =========================================================================
	     * React Lifecycle + Render
	     * =========================================================================
	     */

	  }, {
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.props.onComponentMount(this);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.props.onComponentUnmount(this);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(this.props.component, this._themedInputProps());
	    }

	    /*
	     * =========================================================================
	     * Private functions
	     * =========================================================================
	     */

	  }, {
	    key: "_errors",
	    value: function _errors() {
	      var value = arguments.length <= 0 || arguments[0] === undefined ? this._value() : arguments[0];

	      var errors = this.props.errors.slice();
	      var validate = (this.isModified() || this.state.validationRequested) && this.props.validate;
	      if (validate) {
	        // Running each validation
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = entries(this._validations())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _step$value = _slicedToArray(_step.value, 2);

	            var k = _step$value[0];
	            var validationOpts = _step$value[1];

	            if (validationOpts === false || validationOpts == null) continue;
	            var opts = {
	              data: this.props.data,
	              name: this.props.name,
	              value: value,
	              opts: validationOpts
	            };
	            errors = errors.concat(frigValidations[k](opts) || []);
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator["return"]) {
	              _iterator["return"]();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	      // If there are no errors then errors should be falsie
	      if (errors.length === 0) errors = undefined;
	      // Return the errors
	      return errors;
	    }
	  }, {
	    key: "_value",
	    value: function _value() {
	      return this.props.valueLink.value;
	    }
	  }, {
	    key: "_themedInputProps",
	    value: function _themedInputProps() {
	      var nextProps = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      var title = nextProps.title || humanize(nextProps.name);
	      // Defaults
	      var defaults = {
	        title: title,
	        label: title,
	        placeholder: title
	      };
	      // Mixing in the defaults
	      var themedProps = Object.assign(defaults, nextProps);
	      // Overrides
	      var overrides = {
	        options: (nextProps.options || []).map(this._normalizeOption),
	        modified: this.isModified(),
	        // DOM attributes for the label element
	        labelHtml: Object.assign({}, themedProps.labelHtml || {}, {
	          htmlFor: themedProps.name
	        }),
	        // DOM attributes + React ref + callbacks for the input element
	        inputHtml: Object.assign({}, themedProps.inputHtml || {}, {
	          onBlur: this._onBlur.bind(this),
	          autoFocus: themedProps.autoFocus,
	          className: themedProps.className,
	          disabled: themedProps.disabled,
	          multiple: themedProps.multiple,
	          name: themedProps.name,
	          placeholder: themedProps.placeholder,
	          // type:          themedProps.typeMapping[themedProps.type].htmlInputType,
	          ref: "input"
	        }),
	        valueLink: {
	          value: this._value(),
	          requestChange: this._onChange.bind(this)
	        },
	        errors: this._errors()
	      };
	      // TODO: Add type mapping
	      return Object.assign(themedProps, overrides);
	    }

	    /*
	     * Normalizes a set of arguments into an object with a value and a label
	     * to be used to generate an option DOM element for use in a select input.
	     * Accepts:
	     * - a string (taken as both the label and value)
	     * - an array of length 1 (first argument is both the label and value)
	     * - an array of length 2 (first argument is the value, second is the label)
	     * - an object with a value and label key (passthrough / no-change)
	     */
	  }, {
	    key: "_normalizeOption",
	    value: function _normalizeOption(option) {
	      if (option == null) return undefined;
	      // if option is an object with a label and a key return it unchanged
	      if (option.label != null && option.value != null) return option;
	      // converting option in the format of [key] to key
	      if (typeof option == "object" && option.length === 1) option = option[0];
	      // if option is in the format [key, value]
	      if (typeof option == "object" && option.length === 2) {
	        return {
	          value: option[0],
	          label: option[1]
	        };
	      }
	      // if option is in the format key
	      else {
	          return {
	            value: option,
	            label: option
	          };
	        }
	    }
	  }, {
	    key: "_validations",
	    value: function _validations() {
	      var nextProps = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      // Validations (these get mixed into the overrides)
	      var defaults = {
	        required: true
	      };
	      var validations = {};
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = entries(frigValidations)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var _step2$value = _slicedToArray(_step2.value, 1);

	          var k = _step2$value[0];

	          validations[k] = nextProps[k] == null ? defaults[k] : nextProps[k];
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	            _iterator2["return"]();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }

	      return validations;
	    }
	  }, {
	    key: "_onChange",
	    value: function _onChange(val) {
	      if (this.props.type === "submit") return;
	      // Set the state and run validations
	      this.setState({ modified: true });
	      var valid = this._errors(val) == null;
	      // Update the value link (used by Frig form components)
	      this.props.valueLink.requestChange(val, valid);
	      // Run the external callbacks (external API, not used by Frig internally)
	      this.props.onChange(val, valid);
	      if (valid) this.props.onValidChange(val, valid);
	    }
	  }, {
	    key: "_onBlur",
	    value: function _onBlur() {
	      this.setState({ modified: true });
	      var inputHtml = this.props.inputHtml;
	      if (inputHtml != null && inputHtml.onBlur != null) inputHtml.onBlur();
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      name: React.PropTypes.string.isRequired,
	      component: React.PropTypes.func.isRequired,
	      valueLink: React.PropTypes.object.isRequired,
	      theme: React.PropTypes.object.isRequired,
	      errors: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	      type: React.PropTypes.string,
	      options: React.PropTypes.array,
	      layout: React.PropTypes.string,
	      className: React.PropTypes.string,
	      disabled: React.PropTypes.bool,
	      multiple: React.PropTypes.bool,
	      validate: React.PropTypes.bool.isRequired,
	      // Callbacks (Public API)
	      onChange: React.PropTypes.func.isRequired,
	      onValidChange: React.PropTypes.func.isRequired,
	      // Callbacks (Private API - reserved for form use only)
	      onComponentMount: React.PropTypes.func.isRequired,
	      onComponentUnmount: React.PropTypes.func.isRequired
	    },
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: {
	      theme: undefined,
	      validate: true,
	      errors: [],
	      onChange: function onChange() {},
	      onValidChange: function onValidChange() {},
	      onComponentMount: function onComponentMount() {},
	      onComponentUnmount: function onComponentUnmount() {}
	    },
	    enumerable: true
	  }]);

	  return FrigInput;
	})(React.Component);

	exports["default"] = FrigInput;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  required: function required(_ref) {
	    var value = _ref.value;

	    if (value != null && value !== "") return undefined;
	    return "This field is required.";
	  },

	  min: function min(_ref2) {
	    var value = _ref2.value;
	    var opts = _ref2.opts;

	    if (value >= opts || value != null || value === "") return undefined;
	    return "Value cannot be less than " + opts;
	  },

	  max: function max(_ref3) {
	    var value = _ref3.value;
	    var opts = _ref3.opts;

	    if (value <= opts || value != null || value === "") return undefined;
	    return "Value cannot be greater than " + opts;
	  }

	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var isConfigObj = undefined,
	    entries = undefined;
	var util = module.exports = {
	  /*
	   * Similar to the ECMA Script 7 proposed Object values function.
	   * Returns an array of [key, value] arrays.
	   * See http://stackoverflow.com/a/16643074/386193
	   */
	  entries: entries = function (object) {
	    var values = [];
	    for (var k in object) {
	      values.push([k, object[k]]);
	    }return values;
	  },

	  isConfigObj: isConfigObj = function (obj) {
	    var type = typeof obj;
	    return type !== "string" && type !== "number" && type !== "boolean" && type !== "function" && type !== "undefined" && obj != null && obj.length == null;
	  },

	  humanize: function humanize(key) {
	    if (key == null) return undefined;
	    var startOfWord = /([A-Z]|[0-9]+|_[a-z])/g;
	    var humanString = key.replace(startOfWord, " $1").replace(/_/g, "");
	    return humanString[0].toUpperCase() + humanString.slice(1).toLowerCase();
	  },

	  clone: function clone(obj) {
	    var objClone = {};
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _step$value = _slicedToArray(_step.value, 2);

	        var k = _step$value[0];
	        var v = _step$value[1];
	        objClone[k] = v;
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator["return"]) {
	          _iterator["return"]();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    return objClone;
	  },

	  merge: function merge(target) {
	    target = target || {};
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        others[_key - 1] = arguments[_key];
	      }

	      for (var _iterator2 = others[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var other = _step2.value;
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;

	        try {
	          for (var _iterator3 = entries(other || {})[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _step3$value = _slicedToArray(_step3.value, 2);

	            var k = _step3$value[0];
	            var v = _step3$value[1];
	            target[k] = v;
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	              _iterator3["return"]();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	          _iterator2["return"]();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }

	    return target;
	  },

	  promisedTimeout: function promisedTimeout(duration) {
	    return new Promise(function (resolve) {
	      return setTimeout(resolve, duration);
	    });
	  },

	  map: function map(array, fn) {
	    var out = [];
	    var _iteratorNormalCompletion4 = true;
	    var _didIteratorError4 = false;
	    var _iteratorError4 = undefined;

	    try {
	      for (var _iterator4 = array[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	        var k = _step4.value;
	        out.push(fn(k));
	      }
	    } catch (err) {
	      _didIteratorError4 = true;
	      _iteratorError4 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	          _iterator4["return"]();
	        }
	      } finally {
	        if (_didIteratorError4) {
	          throw _iteratorError4;
	        }
	      }
	    }

	    return out;
	  },

	  mapObj: function mapObj(obj, fn) {
	    var out = {};
	    var _iteratorNormalCompletion5 = true;
	    var _didIteratorError5 = false;
	    var _iteratorError5 = undefined;

	    try {
	      for (var _iterator5 = entries(obj)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	        var _step5$value = _slicedToArray(_step5.value, 2);

	        var k = _step5$value[0];
	        var v = _step5$value[1];
	        out[k] = fn(k, v);
	      }
	    } catch (err) {
	      _didIteratorError5 = true;
	      _iteratorError5 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
	          _iterator5["return"]();
	        }
	      } finally {
	        if (_didIteratorError5) {
	          throw _iteratorError5;
	        }
	      }
	    }

	    return out;
	  },

	  // Takes a list of defaults to inherit from, the object itself and an optional
	  // callback parameter which can be used to adjust the value of each parameter.
	  // This function operates deeply on nested objects.
	  // The returned value has the following properties:
	  // * The keys are the superset of all keys from all the layer.
	  // * The keys are in the same order as the defaults with keys from other layers
	  //   being appended after the defaults.
	  setDefaults: function setDefaults() {
	    for (var _len2 = arguments.length, layers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      layers[_key2] = arguments[_key2];
	    }

	    var cb = layers.pop();
	    // No callback: Defaulting the callback to a passthrough function
	    if (typeof cb != "function") {
	      layers.push(cb);
	      cb = function (k, v) {
	        return v;
	      };
	    }
	    // setting the target to the first layer
	    var target = layers[layers.length - 1] || {};
	    // cloning and reversing the layers for use in the iterator
	    var reversedLayers = layers.slice(0).reverse();
	    // The iterator is used to set a final value for each key in the returned
	    // object
	    var iterator = function iterator(k) {
	      // Setting the value for non-objects by "failing through" the defaults
	      // until a non-null value is found
	      var val = undefined;
	      var _iteratorNormalCompletion6 = true;
	      var _didIteratorError6 = false;
	      var _iteratorError6 = undefined;

	      try {
	        for (var _iterator6 = reversedLayers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	          var layer = _step6.value;

	          if (val == null) val = layer[k];
	        }
	      } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
	            _iterator6["return"]();
	          }
	        } finally {
	          if (_didIteratorError6) {
	            throw _iteratorError6;
	          }
	        }
	      }

	      return cb(k, val, layers);
	    };
	    // Recursively mapping the iterator over nested objects
	    var _iteratorNormalCompletion7 = true;
	    var _didIteratorError7 = false;
	    var _iteratorError7 = undefined;

	    try {
	      var _loop = function () {
	        var _step7$value = _slicedToArray(_step7.value, 2);

	        var k = _step7$value[0];
	        var v = _step7$value[1];

	        if (isConfigObj(layers[0][k])) {
	          var namespacedLayers = util.map(layers, function (layer) {
	            return layer[k] || {};
	          });
	          v = util.setDefaults.apply(util, _toConsumableArray(namespacedLayers).concat([cb]));
	        } else {
	          v = iterator(k);
	        }
	        target[k] = v;
	      };

	      for (var _iterator7 = entries(util.merge.apply(util, [{}].concat(layers)))[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	        _loop();
	      }
	    } catch (err) {
	      _didIteratorError7 = true;
	      _iteratorError7 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
	          _iterator7["return"]();
	        }
	      } finally {
	        if (_didIteratorError7) {
	          throw _iteratorError7;
	        }
	      }
	    }

	    return target;
	  },

	  capitalize: function capitalize(string) {
	    if (string == null) return undefined;
	    return "" + string[0].toUpperCase() + string.slice(1);
	  }

	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);

	/*
	 * A higher order function wrapper for components that only allow true or false
	 * values in their valueLinks.
	 *
	 * This component will request a change to the valueLink for any non-boolean
	 * valueLink value to convert it into a boolean.
	 */
	module.exports = function (componentClass, opts) {
	  var childName = componentClass.prototype.displayName;

	  return (function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), "constructor", this).apply(this, arguments);

	      this.displayName = "Frig.HigherOrderComponents.PropsClosure(" + childName + ")";
	    }

	    _createClass(_class, [{
	      key: "componentDidMount",
	      value: function componentDidMount() {
	        var _this = this,
	            _arguments2 = arguments;

	        var _loop = function (k) {
	          _this[k] = function () {
	            var _refs$child;

	            return (_refs$child = _this.refs.child)[k].apply(_refs$child, _arguments2);
	          };
	        };

	        // Adding function proxies
	        for (var k in opts.functionProxies || []) {
	          _loop(k);
	        }
	      }
	    }, {
	      key: "_get",
	      value: function _get(k, props) {
	        if (typeof opts[k] == "function") {
	          return opts[k](props);
	        } else {
	          return opts[k];
	        }
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var childProps = {};
	        // Adding the defaults
	        childProps = Object.assign(childProps, this._get("defaults", this.props));
	        // Adding the props
	        childProps = Object.assign(childProps, this.props);
	        // Adding the overrides
	        childProps = Object.assign(childProps, this._get("overrides", childProps));
	        childProps.key = "child";
	        // Rendering
	        return React.createElement(componentClass, childProps);
	      }
	    }], [{
	      key: "defaultProps",
	      value: { ref: opts.ref, key: opts.key },
	      enumerable: true
	    }]);

	    return _class;
	  })(React.Component);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var div = React.DOM.div;

	var NestedFieldset = (function (_React$Component) {
	  _inherits(NestedFieldset, _React$Component);

	  function NestedFieldset() {
	    _classCallCheck(this, NestedFieldset);

	    _get(Object.getPrototypeOf(NestedFieldset.prototype), "constructor", this).apply(this, arguments);

	    this.state = {
	      invalidForms: []
	    };
	  }

	  _createClass(NestedFieldset, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.props.onComponentMount(this);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.props.onComponentUnmount(this);
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      // Truncating the invalid forms list to prevent ghosting of invalid
	      // forms that are removed in the props.
	      var invalidForms = this.state.invalidForms;
	      var numberOfForms = this._dataValues(nextProps).length;
	      invalidForms = invalidForms.slice(0, numberOfForms);
	      this.setState({ invalidForms: invalidForms });
	    }
	  }, {
	    key: "validate",
	    value: function validate() {
	      return this._everyForm("validate");
	    }
	  }, {
	    key: "isValid",
	    value: function isValid() {
	      return this._everyForm("isValid");
	    }
	  }, {
	    key: "isModified",
	    value: function isModified() {
	      return this._everyForm("isModified");
	    }

	    // Returns true if calling the function returns true for every child form
	  }, {
	    key: "_everyForm",
	    value: function _everyForm(fnName) {
	      var forms = [];
	      for (var k in this.refs) {
	        forms.push(this.refs[k]);
	      }return forms.filter(function (c) {
	        return !c[fnName]();
	      }).length === 0;
	    }
	  }, {
	    key: "_formProps",
	    value: function _formProps(_ref) {
	      var _this = this;

	      var data = _ref.data;
	      var key = _ref.key;

	      return Object.assign({}, this.props, {
	        key: key,
	        ref: key,
	        form: function form(f) {
	          return _this.props.form(f, key);
	        },
	        nestedForm: true,
	        data: {
	          value: data,
	          requestChange: this._onFormRequestChange.bind(this, key)
	        }
	      });
	    }
	  }, {
	    key: "_onFormRequestChange",
	    value: function _onFormRequestChange(key, formData, valid) {
	      var data = this.props.data.value;
	      // Combine the updated data from the form with the other forms or if this
	      // is a single form fieldset overwriting the previous form data.
	      if (Array.isArray(data)) {
	        data = data.slice();
	        data[key] = formData;
	      } else {
	        data = formData;
	      }
	      // Combine this valid flag with the other nested form valid flags and relay
	      // a valid state to the upstream only if all nested forms are valid
	      var invalidForms = this.state.invalidForms;
	      if (valid) {
	        invalidForms[key] = true;
	      } else {
	        delete invalidForms[key];
	      }
	      valid = invalidForms.filter(function (invalid) {
	        return invalid === true;
	      }).length === 0;
	      this.setState({ invalidForms: invalidForms });
	      // Relaying the request change to the upstream data
	      this.props.data.requestChange(data, valid);
	    }
	  }, {
	    key: "_dataValues",
	    value: function _dataValues() {
	      var nextProps = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      var dataValues = nextProps.data.value;
	      return Array.isArray(dataValues) ? dataValues : [dataValues];
	    }
	  }, {
	    key: "_renderForm",
	    value: function _renderForm(formProps) {
	      var component = __webpack_require__(3);
	      return React.createElement(component, formProps);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var i = 0;
	      var datas = this._dataValues();
	      return div({}, datas.map(function (data) {
	        return _this2._renderForm(_this2._formProps({ data: data, key: i++ }));
	      }));
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      form: React.PropTypes.func.isRequired,
	      // Provided by the parent Frig Form's HOC props closure
	      data: React.PropTypes.object.isRequired,
	      theme: React.PropTypes.object.isRequired,
	      typeMapping: React.PropTypes.objectOf(React.PropTypes.string)
	    },
	    enumerable: true
	  }]);

	  return NestedFieldset;
	})(React.Component);

	exports["default"] = NestedFieldset;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  form: { component: "form" },
	  errors: { component: "errors" },
	  submit: { component: "submit", htmlInputType: "submit" },
	  string: { component: "input", htmlInputType: "string" },
	  password: { component: "input", htmlInputType: "password" },
	  email: { component: "input", htmlInputType: "email" },
	  url: { component: "input", htmlInputType: "url" },
	  tel: { component: "input", htmlInputType: "tel" },
	  // search:       {component: "input",    htmlInputType: "search"},
	  // uuid:         {component: "input",    htmlInputType: "text"},
	  boolean: { component: "checkbox", htmlInputType: "checkbox" },
	  text: { component: "text" },
	  file: { component: "file", htmlInputType: "file" },
	  // hidden:       {component: "input",    htmlInputType: "hidden"},
	  // integer:      {component: "input",    htmlInputType: "number"},
	  float: { component: "input", htmlInputType: "number" },
	  // decimal:      {component: "input",    htmlInputType: "number"},
	  // range:        {component: "input",    htmlInputType: "range"},
	  "switch": { component: "switch" },
	  // datetime:     {component: "datetime"},
	  // date:         {component: "datetime"},
	  time: { component: "timepicker" },
	  select: { component: "select" },
	  typeahead: { component: "typeahead" }
	};
	// radioButtons: {component: "radioButtons"},
	// checkBoxes:   {component: "checkBoxes"},
	// country:      {component: "country"},
	// timeZone:     {component: "timeZone"},

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var _React$DOM = React.DOM;

	/*
	 * A minimal wrapper for the select component to provide the correct value
	 * for valueLinks.
	 *
	 * Basically it's a solution to this: http://stackoverflow.com/q/24470852/386193
	 *
	 * Note: This class, unlike React.DOM.select, does not expect options to be
	 * passed as child components. Instead you should pass your options as an array
	 * of objects containing a label and a value.
	 *
	 * Example:
	 *
	 * ValueLinkedSelect({
	 *   options: [
	 *     {label: "Canada", value: "CA"}
	 *     {label: "United States", value: "US"}
	 *   ]
	 * })
	 *
	 * Asside from the options change and the fact that valueLink works else should
	 * be the same as React.DOM.select.
	 *
	 */
	var select = _React$DOM.select;
	var option = _React$DOM.option;

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: "_getValue",

	    // Reads the value from the DOM for the select input fields
	    value: function _getValue() {
	      var el = React.findDOMNode(this.refs.input);
	      // The value is cast to a string when we get it from DOM.value. This is a
	      // mapping of those strings to their original values in the options list.
	      var originalValues = {};
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.props.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var _option = _step.value;

	          originalValues[_option.value.toString()] = _option.value;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator["return"]) {
	            _iterator["return"]();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      if (el.type === "select-multiple") {
	        return (function () {
	          var _ref = [];
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = el.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var o = _step2.value;

	              if (o.selected) {
	                _ref.push(originalValues[o.value]);
	              }
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                _iterator2["return"]();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }

	          return _ref;
	        })();
	      } else {
	        return originalValues[el.value] || el.value;
	      }
	    }
	  }, {
	    key: "_onChange",
	    value: function _onChange() {
	      this.props.valueLink.requestChange(this._getValue());
	    }
	  }, {
	    key: "_inputHtml",
	    value: function _inputHtml() {
	      var value = this.props.valueLink.value;
	      if (this.props.multiple) value = value.map(function (o) {
	        return o.value.toString();
	      });
	      var inputHtml = Object.assign({}, this.props, {
	        ref: "input",
	        valueLink: {
	          value: value,
	          requestChange: this._onChange.bind(this)
	        }
	      });
	      for (var k in ["valueLink", "options"]) {
	        delete inputHtml[k];
	      }return inputHtml;
	    }
	  }, {
	    key: "_selectOption",
	    value: function _selectOption(o) {
	      var attrs = {
	        key: "option-" + o.label,
	        value: o.value
	      };
	      return option(attrs, o.label);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return select(this._inputHtml(), this.props.options.map(this._selectOption));
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      options: React.PropTypes.array.isRequired,
	      valueLink: React.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);
	var frigForm = React.createFactory(__webpack_require__(3));
	var dslCallback = undefined;

	/*
	 * The DSL wraps each of the components passed to the frig form's "form"
	 * callback in a simplified interface.
	 *
	 * This is whats used behind the scenes of calls like `f.input("name", props)`
	 */
	var dsl = {
	  errors: function errors(component) {
	    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    props = Object.assign({ key: "frig-errors" }, props);
	    return React.createElement(component, props);
	  },

	  input: function input(component, name) {
	    var props = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    props = Object.assign({ key: "frig-" + name }, props, { name: name });
	    return React.createElement(component, props);
	  },

	  nestedFields: function nestedFields(component, name, props, form) {
	    if (props === undefined) props = {};

	    if (typeof props == "function") {
	      form = props;
	      props = {};
	    }
	    props = Object.assign({ key: "frig-" + name }, props, {
	      name: name,
	      form: dslCallback.bind(window, form)
	    });
	    return React.createElement(component, props);
	  },

	  submit: function submit(component, title) {
	    var props = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    if (arguments.length === 1 && typeof title != "string") {
	      props = title;
	      title = undefined;
	    }
	    props = Object.assign({ key: "frig-submit", title: title }, props);
	    return React.createElement(component, props);
	  }
	};

	/*
	 * Intercepts the "form" callback from a Frig form component and sends a
	 * coffeescript-style DSL to the callback instead of the usual JSX components
	 */
	dslCallback = function (formCallback, components) {
	  var dslInstance = {};
	  for (var k in dsl) {
	    dslInstance[k] = dsl[k].bind(window, components[k]);
	  }

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  return formCallback.apply(undefined, [dslInstance].concat(args));
	};

	module.exports = {
	  frig: function frig(props, form) {
	    // inject the form content into the props
	    var formProps = Object.assign({}, props, {
	      form: dslCallback.bind(window, form)
	    });
	    // return the frig form component
	    return frigForm(formProps);
	  }

	};

/***/ }
/******/ ])
});
;