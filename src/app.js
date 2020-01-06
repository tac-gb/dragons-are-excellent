var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import ReactDOM from "react-dom";
import { Image } from "./image";
import { Navbar } from "./navbar";

String.prototype.toTitle = function () {
    return this.replace(/(^|\s)\S/g, function (t) {
        return t.toUpperCase();
    });
};

function Index() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "h1",
            null,
            "Dragons"
        ),
        React.createElement(
            "p",
            null,
            "Dragons are a ",
            React.createElement(
                "del",
                null,
                "mythical"
            ),
            " creature."
        ),
        React.createElement(
            "h2",
            null,
            "Advantages of being a dragon"
        ),
        React.createElement(
            "ul",
            null,
            React.createElement(
                "li",
                null,
                "Fearsome"
            ),
            React.createElement(
                "li",
                null,
                "Long-lived"
            ),
            React.createElement(
                "li",
                null,
                "Numerous progression options"
            )
        )
    );
}

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            dragons: ["alpha", "epsilon", "omega"],
            current_page: "index"
        };
        _this.handlePageChange = _this.handlePageChange.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "handlePageChange",
        value: function handlePageChange(name) {
            this.setState({ current_page: name });
        }
    }, {
        key: "render",
        value: function render() {
            var page = null;
            if (this.state.current_page === "index") {
                page = React.createElement(Index, null);
            } else {
                page = React.createElement(Image, {
                    name: this.state.current_page,
                    onPageChange: this.handlePageChange });
            }

            return React.createElement(
                "div",
                null,
                React.createElement(Navbar, {
                    items: this.state.dragons,
                    onPageChange: this.handlePageChange }),
                page
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));