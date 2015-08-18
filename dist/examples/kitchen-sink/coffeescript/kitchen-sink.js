/******/ (function(modules) { // webpackBootstrap
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

	var AccountForm, React, div, frig, h2, h3, h4, img, ref;

	__webpack_require__(1).defaultTheme(__webpack_require__(2));

	React = __webpack_require__(3);

	frig = __webpack_require__(1).dsl.frig;

	ref = React.DOM, div = ref.div, h2 = ref.h2, h3 = ref.h3, h4 = ref.h4, img = ref.img;

	AccountForm = React.createClass({
	  mixins: [React.addons.LinkedStateMixin],
	  getInitialState: function() {
	    return {
	      account: {
	        email: "me@test.com",
	        password: "test",
	        shareSketchyInfo: false,
	        addresses: [
	          {
	            address: "55 Actual Place Rd."
	          }, {}
	        ]
	      }
	    };
	  },
	  githubSearchUrl: function(username) {
	    return "https://api.github.com/search/users?q=" + username + "&per_page=30";
	  },
	  parseGithubResponse: function(json) {
	    return json.items.map((function(_this) {
	      return function(user) {
	        return {
	          label: user.login,
	          value: {
	            login: user.login,
	            avatar_url: user.avatar_url
	          }
	        };
	      };
	    })(this));
	  },
	  onSubmit: function(e) {
	    return e.preventDefault();
	  },
	  formOpts: function() {
	    return {
	      data: this.linkState("account"),
	      errors: ["Test Error", "Moo"],
	      onSubmit: this.onSubmit
	    };
	  },
	  render: function() {
	    return frig(this.formOpts(), (function(_this) {
	      return function(f) {
	        return div({}, div({
	          className: "row"
	        }, div({
	          className: "sm-col-12"
	        }, h2({}, "My Account"))), div({
	          className: "row"
	        }, f.errors()), div({
	          className: "row"
	        }, div({
	          className: "col-xs-2 pull-right",
	          style: {
	            textAlign: "center"
	          }
	        }, _this.state.account.githubAccount != null ? img({
	          src: _this.state.account.githubAccount.avatar_url,
	          width: "100%"
	        }) : "No Avatar"), f.input("email", {
	          xs: 10
	        }), f.input("githubAccount", {
	          type: "typeahead",
	          errors: ["test"],
	          remote: {
	            url: _this.githubSearchUrl,
	            parser: _this.parseGithubResponse,
	            maxReqsPerMinute: 10
	          },
	          xs: 10
	        })), div({
	          className: "row"
	        }, f.input("friendsGithubAccounts", {
	          type: "typeahead",
	          multiple: true,
	          remote: {
	            url: _this.githubSearchUrl,
	            parser: _this.parseGithubResponse,
	            maxReqsPerMinute: 20
	          }
	        })), div({
	          className: "row"
	        }, f.input("password", {
	          xs: 6
	        }), f.input("passwordConfirmation", {
	          xs: 6
	        })), div({
	          className: "row"
	        }, f.input("description", {
	          className: "testing-class-name",
	          type: "text",
	          rows: 10
	        })), div({
	          className: "row"
	        }, f.input("time_of_day", {
	          type: "switch",
	          xs: "6",
	          label: "Time of Day",
	          errors: ["This error is an example", "As is this one"]
	        }), f.input("uploadAvatar", {
	          type: "file",
	          xs: "6",
	          label: "Uploading Avatar"
	        })), div({
	          className: "row"
	        }, div({
	          className: "sm-col-12"
	        }, f.input("startTime", {
	          type: "time",
	          xs: "6",
	          placeholder: "12:00pm",
	          label: "Start Time"
	        }))), div({
	          className: "row"
	        }, div({
	          className: "sm-col-12"
	        }, h3({}, "Nested Fields (Eg. Has Many)"), f.nestedFields("addresses", function(f, index) {
	          return div({}, h4({}, "Address #" + (index + 1)), f.input("address"), f.input("city"), f.input("postal_code"));
	        }))), div({
	          className: "row"
	        }, div({
	          className: "sm-col-12"
	        }, h3({}, "Additional Sketchy Info"))), div({
	          className: "row"
	        }, f.input("shareSketchyInfo"), _this.state.account.shareSketchyInfo ? [
	          f.input("socialSecurityNumber"), f.input("fullName"), f.input("eyeColor", {
	            options: ["blue", "green", "red", "left"]
	          })
	        ] : void 0, f.submit("Save")));
	      };
	    })(this));
	  }
	});

	document.addEventListener("DOMContentLoaded", function() {
	  var domElement, reactElement;
	  reactElement = React.createElement(AccountForm);
	  domElement = document.getElementById('example');
	  return React.render(reactElement, domElement);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Frig;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = FriggingBootstrap;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ }
/******/ ]);