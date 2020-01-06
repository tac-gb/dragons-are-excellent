import React from "react";
import ReactDOM from "react-dom";
import { Image } from "./image";
import { Navbar } from "./navbar";

String.prototype.toTitle = function () {
    return this.replace(/(^|\s)\S/g, function (t) { return t.toUpperCase() });
}

function Index() {
    return (<React.Fragment>
        <h1>
            Dragons
    </h1>
        <p>
            Dragons are a <del>mythical</del> creature.
    </p>
        <h2>
            Advantages of being a dragon
    </h2>
        <ul>
            <li>Fearsome</li>
            <li>Long-lived</li>
            <li>Numerous progression options</li>
        </ul>
    </React.Fragment>);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dragons: ["alpha", "epsilon", "omega"],
            current_page: "index",
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(name) {
        this.setState({ current_page: name });
    }

    render() {
        let page = null;
        if (this.state.current_page === "index") {
            page = (<Index />);
        } else {
            page = (<Image
                name={this.state.current_page}
                onPageChange={this.handlePageChange} />);
        }

        return (<div>
            <Navbar
                items={this.state.dragons}
                onPageChange={this.handlePageChange} />
            {page}
        </div>);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);