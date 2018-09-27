'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

console.log('this is the person module');

var Person = function () {
    function Person(name, Color) {
        _classCallCheck(this, Person);

        this.name = name;
        this.favColor = Color;
        this.greet();
    }

    _createClass(Person, [{
        key: 'greet',
        value: function greet() {
            console.log('hi there !');
        }
    }, {
        key: 'meet',
        value: function meet() {
            console.log('Hello! mera name is ' + this.name + ' and my favorite color is ' + this.favColor + '.');
        }
    }]);

    return Person;
}();

(0, _jquery2.default)('h1').on('click touch', function () {
    (0, _jquery2.default)('h1').remove();
    console.log('Hi mai Mar gai :D');
});

exports.default = Person;