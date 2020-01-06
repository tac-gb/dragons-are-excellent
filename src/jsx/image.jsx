import React from "react";

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(name) {
        this.props.onPageChange(name);
    }

    render() {
        const nameTitle = this.props.name.toTitle();
        const nameLower = this.props.name.toLowerCase();
        return (<React.Fragment>
            <h1>
                {nameTitle}
            </h1>
            <img src={"./" + nameLower + ".png"} alt={"MS Paint drawing of dragon " + nameTitle} />

            <p><a href="#" onClick={() => (this.handlePageChange("index"))}>Home</a>
            </p>
        </React.Fragment>);
    }
}

export { Image };