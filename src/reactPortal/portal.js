import React, { Component } from 'react'
import ReactDom from 'react-dom';

export default class ReactPortal extends Component {
    render() {
    return ReactDom.createPortal(
        <h1> this is out of root</h1>,
        document.getElementById('other-root')
        
    )
    }
}
