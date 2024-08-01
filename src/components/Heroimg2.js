import "./HeroimgStyles2.css";

import React, { Component } from 'react'

class Heroimg2 extends Component {
    render() {
        return (
            <div class="hero-img">
                <div class="heading">
                    <h1>{this.props.head}</h1>
                    <p>{this.props.val}</p>
                </div>
            </div>
        )
    }
}
export default Heroimg2
