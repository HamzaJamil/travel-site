"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log('this is the person module');

var Person =
/*#__PURE__*/
function () {
  function Person(name, Color) {
    _classCallCheck(this, Person);

    this.name = name;
    this.favColor = Color;
    this.greet();
  }

  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      console.log('hi there !');
    }
  }, {
    key: "meet",
    value: function meet() {
      console.log('Hello! mera name is ' + this.name + ' and my favorite color is ' + this.favColor + '.');
    }
  }]);

  return Person;
}();

(0, _jquery.default)('h1').on('click touch', function () {
  (0, _jquery.default)('h1').remove();
  console.log('Hi mai Mar gai :D');
});
var _default = Person;
exports.default = _default;
