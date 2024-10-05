import React from 'react';
import rootRoute from './system/route';
import './App.css'
import Header from './common/header';
import Footer from './common/footer';
function App() {
  return (
    <div className="app">
      <Header/>
      { rootRoute}
      <Footer/>
    </div>
  );
}

export default App;
