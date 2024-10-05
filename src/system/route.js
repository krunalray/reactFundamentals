import React from 'react';
import { Router, Link } from "@reach/router"
import Home from '../home';
// example
import UseRefExample from '../useRef/userefexample';
import UseContextExample from '../useContext/usecontext';
import UseMemo from '../useMemo/usememo';
import HocHome from '../hoc/hochome';
import ReactPortal from '../reactPortal/portal';
import UseCallbackDemo from '../useCallback/withCallback';
import UseReducer from '../useReducer/usereducer';
import UseDispatch from '../useDispatch/usedispatch';
import ReactFragment from '../reactFragment/react_fragment';
import ErrorBoundary from '../error_boundaries/app';
import StrictMode from '../strict_mode/strict_mode';
import PropTypesExa from '../proptypes/proptypes';
import ReactLifeCycleEx from '../reactCycle/explanationView';
import ReactLocalization from '../Localization/react_localization';
import ReactNextGrid from '../NextGrid/react_next_grid';
import ReactCascade from '../ReactCascade/react_cascade';
import ReactStyling from '../reactStyling/react_style';
import LiftingStateUp from '../LiftingStateUp/App';

const rootRoute = (
  <Router>
    <Home path="/" />

    <HocHome path="/example/hoc" />
    <UseRefExample path="/example/useref" />
    <UseContextExample path="/example/usecontext" />
    <UseMemo path="/example/usemomo" />
    <UseCallbackDemo path="/example/usecallback" />
    <UseReducer path="/example/usereducer" />
    <UseDispatch path="/example/usedispatch" />
    <ReactFragment path="/example/fragment" />
    <ErrorBoundary path="/example/error_boundaries" />
    <StrictMode path="/example/strict_mode" />
    <PropTypesExa path="/example/proptypes" />
    <ReactPortal path="/example/react_portal" />
    <ReactLifeCycleEx path="/example/react_cycle" />
    <ReactLocalization path="/npm/localization" />
    <ReactNextGrid path="/npm/react-grid" />
    <ReactCascade path="/npm/react-cascade" />
    <ReactStyling path="/react_style" />
    <LiftingStateUp path="/lifting_state" />
    
  </Router>

);

export default rootRoute;
