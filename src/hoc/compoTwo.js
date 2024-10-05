import React, { Component } from 'react'
import subjects from './hoc'
 class CompoTwo extends Component {
    state = {
        marks : 0
    }
    markIncrement = () =>{
        this.setState({marks :this.state.marks + 1})
    }
    render() {
        return (
            <div>
                <h2 onMouseOver={this.markIncrement}>arpan mark is  { this.state.marks} of { this.props.hocsub} </h2>
            </div>
        )
    }
}
export default subjects(CompoTwo)

