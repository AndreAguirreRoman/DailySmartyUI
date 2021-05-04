import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        const size = {
            // Check it exists in the styles, if it doesn´t exist return the value of 105
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105
        }
        return (
            <div className="logo-main">
                <img style={size} alt='daily smarty ui image logo big' src="/assets/ds_circle_logo.png" />
            </div>
        );
    }
}