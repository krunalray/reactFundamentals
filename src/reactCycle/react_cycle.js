import React, { Component } from 'react'
class ReactLifeCycle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Dixit'
		}
		console.log('Lifecycle - A constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Lifecycle - A getDerivedStateFromProps')
		return null
	}

	componentDidMount() {
		console.log('Lifecycle - A componentDidMount')
	}

	shouldComponentUpdate() {
		console.log('Lifecycle - A shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Lifecycle - A getSnapshotBeforeUpdate')
		return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('Lifecycle - A componentDidUpdate')
	}

	changeState = () => {
		this.setState({
			name: 'Ronak'
		})
	}

	render() {
		console.log('Lifecycle - A render')
		return (
			<div>
				<button onClick={this.changeState} className="btn btn-primary m-3">Change state</button>
				Lifecycle - A {this.state.name}
			</div>
		)
	}
}

export default ReactLifeCycle
