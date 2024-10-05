import React from "react";

import CodeEditor from "../components/editor/code_editor";
import ReactLifeCycle from "./react_cycle";
export default function ReactLifeCycleEx() {
  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="text-center mb-5">
          <h1>React lifeCycle</h1>
        </div>
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <div className="card  border shadow-none mb-4">
              <div className="card-header">
                <h5>Demo Implementation</h5>
              </div>
              <div className="card-body">
                <ReactLifeCycle />
              </div>
            </div>
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
      {/* Code Start */}
      <div className="container">
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <div className="card-body">
              <div className="step-0">
                <h5 className="my-4">
                  <span className="text-danger">React Lifecycle methods</span>
                </h5>
                <CodeEditor
                  code={`
import React, { Component } from 'react'
class ReactLifeCycle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Dixit'
		}
		console.log('Lifecycle -  constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Lifecycle -  getDerivedStateFromProps')
		return null
	}

	componentDidMount() {
		console.log('Lifecycle -  componentDidMount')
	}

	shouldComponentUpdate() {
		console.log('Lifecycle -  shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Lifecycle -  getSnapshotBeforeUpdate')
		return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('Lifecycle -  componentDidUpdate')
	}

	changeState = () => {
		this.setState({
			name: 'Ronak'
		})
	}

	render() {
		console.log('Lifecycle -  render')
		return (
			<div>
				<button onClick={this.changeState} className="btn btn-primary m-3">Change state</button>
				Lifecycle -  {this.state.name}
			</div>
		)
	}
}

export default ReactLifeCycle


`}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
    </React.Fragment>
  );
}
