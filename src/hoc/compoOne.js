import React, { Component } from 'react'
import subjects from './hoc'
 class CompoOne extends Component {
    state = {
        marks : 0
    }
    markIncrement = () =>{
        this.setState({marks :this.state.marks + 1})
    }
    render() {
        return (
            <div>
                <h2 onMouseOver={this.markIncrement}>dixit mark is  { this.state.marks} of { this.props.hocsub} </h2>
            </div>
        )
    }
}
export default subjects(CompoOne)

