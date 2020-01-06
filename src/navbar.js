var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

        _this.items = _this.props.items;
        _this.jsxItems = _this.items.map(function (item) {
            return React.createElement(
                "li",
                { className: "navbar-item", key: item },
                React.createElement(
                    "a",
                    { href: "#", onClick: function onClick() {
                            return _this.handlePageChange(item.toLowerCase());
                        } },
                    item.toUpperCase()
                )
            );
        });

        _this.handlePageChange = _this.handlePageChange.bind(_this);
        return _this;
    }

    _createClass(Navbar, [{
        key: "handlePageChange",
        value: function handlePageChange(name) {
            this.props.onPageChange(name);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "ul",
                { className: "navbar" },
                React.createElement(
                    "li",
                    { className: "navbar-title" },
                    "available dragons:"
                ),
                this.jsxItems
            );
        }
    }]);

    return Navbar;
}(React.Component);

export { Navbar };