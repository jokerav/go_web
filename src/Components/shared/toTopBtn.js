import React, { Component } from "react";
import BackToTop from "react-back-to-top-button";

class ToTopBtn extends Component {
    render() {
        return (
            <BackToTop
                showOnScrollUp
                showAt={100}
                speed={1500}
                easing="easeInOutQuint"
                style={{color: "lime"}}
            >
                <span>&#11014;</span>

            </BackToTop>
        );
    }
}
export default ToTopBtn