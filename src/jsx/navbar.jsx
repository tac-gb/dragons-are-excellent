import React from "react";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(name) {
        this.props.onPageChange(name);
    }

    items = this.props.items;
    jsxItems = this.items.map((item) => (<li className={"navbar-item"} key={item}>
        <a href="#" onClick={() => (this.handlePageChange(item.toLowerCase()))}>
            {item.toUpperCase()}
        </a>
    </li>));

    render() {
        return (<ul className="navbar">
            <li className="navbar-title">available dragons:</li>
            {this.jsxItems}
        </ul>);
    }
}

export { Navbar };