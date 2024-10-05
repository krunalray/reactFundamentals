import React, { Component } from 'react'
import CompoOne from './compoOne';
import CompoTwo from './compoTwo';
 class HocHome extends Component {

    render() {
        return (
            <div>
                <CompoOne></CompoOne>
                <CompoTwo></CompoTwo>
            </div>
        )
    }
}
export default HocHome;

