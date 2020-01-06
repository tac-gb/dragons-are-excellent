var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

var Image = function (_React$Component) {
    _inherits(Image, _React$Component);

    function Image(props) {
        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

        _this.handlePageChange = _this.handlePageChange.bind(_this);
        return _this;
    }

    _createClass(Image, [{
        key: "handlePageChange",
        value: function handlePageChange(name) {
            this.props.onPageChange(name);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var nameTitle = this.props.name.toTitle();
            var nameLower = this.props.name.toLowerCase();
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h1",
                    null,
                    nameTitle
                ),
                React.createElement("img", { src: "./" + nameLower + ".png", alt: "MS Paint drawing of dragon " + nameTitle }),
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "a",
                        { href: "#", onClick: function onClick() {
                                return _this2.handlePageChange("index");
                            } },
                        "Home"
                    )
                )
            );
        }
    }]);

    return Image;
}(React.Component);

export { Image };