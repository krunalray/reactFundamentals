import React, { Component } from "react";
import { Link } from "@reach/router";
var ReactRotatingText = require("react-rotating-text");

class CommonHome extends Component {
  render() {
    return (
      <div className="common-home">
        <div className="services-area bg ptb-100 text-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="section-title">
                  <h3>React Fundamentals</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/react_style">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>React Styling</h3>
                    <p className="hidden-lg-down">
                      Way for provide Style in React js
                    </p>
                  </div>
                </Link>
              </div>
              {/* lifting state start */}
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/lifting_state">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>Lifting State in React</h3>
                    <p className="hidden-lg-down">
                      Way for manage common state 
                    </p>
                  </div>
                </Link>
              </div>
              {/* lifting state end */}
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="section-title">
                  <h3>React Hooks</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/usecontext">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>useEffect</h3>
                    <p className="hidden-lg-down">
                      Use for Replacement of React Cycle
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/usecontext">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>useState</h3>
                    <p className="hidden-lg-down">
                      Use to Store Data as Temporary
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/usecontext">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>useContext</h3>
                    <p className="hidden-lg-down">
                      Use for pass data to component
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/useref">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>useRef</h3>
                    <p className="hidden-lg-down">
                      pass data to parent to child
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/usemomo">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>useMemo</h3>
                    <p className="hidden-lg-down">
                      pure component and prevent unuse function call{" "}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/usecallback">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>useCallback</h3>
                    <p className="hidden-lg-down">
                      pure component and prevent unuse function call{" "}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/hoc">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>HOC</h3>
                    <p className="hidden-lg-down">High Order Components</p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/react_portal">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>React Portal</h3>
                    <p className="hidden-lg-down">Write DOM out side</p>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/react_portal">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>useReducer</h3>
                    <p className="hidden-lg-down">
                      use in redux to get store data
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/react_portal">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>useSelector</h3>
                    <p className="hidden-lg-down">use to Select Redux State</p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/react_portal">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>useDispatch</h3>
                    <p className="hidden-lg-down">
                      use in redux to dispatch a data in action type
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="section-title">
                  <h3></h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/fragment">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>React Fragment</h3>
                    <p className="hidden-lg-down">
                      use for prevent unnessasary dom node
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/error_boundaries">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>Error Boundary </h3>
                    <p className="hidden-lg-down">
                      Error boundaries work like a JavaScript catch {} block,
                      but for components.Only class components can be error
                      boundaries or - npm i react-error-boundary{" "}
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/strict_mode">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>React StrictMode</h3>
                    <p className="hidden-lg-down">
                      StrictMode is a tool for highlighting potential problems
                      in an application
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/proptypes">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>React PropTypes</h3>
                    <p className="hidden-lg-down">
                      Typechecking With PropTypes
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/example/react_cycle">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>React Life Cycle</h3>
                    <p className="hidden-lg-down">React Life Cycle</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="section-title">
                  <h3>Special NPM</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <Link to="/npm/localization">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>React Localization</h3>
                    <p className="hidden-lg-down"> react18next</p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="single-services">
                  <Link to="/npm/react-grid">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>React Grid using Material UI</h3>
                    <p className="hidden-lg-down">
                      {" "}
                      react-bootstrap-table-next and material
                    </p>
                  </Link>
                  <a
                    target="_blank"
                    className="link-primary"
                    href="https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/"
                  >
                    Visit
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="single-services">
                  <Link to="/npm/react-grid">
                    <div className="icon">
                      <i className="icon-logo fa fa-list"></i>
                    </div>
                    <h3>React Component use into .ASPX</h3>
                    <p className="hidden-lg-down"></p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommonHome;
