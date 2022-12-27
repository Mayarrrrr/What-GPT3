import './App.css';
import { Article , Brand, Cta , Feature , Navbar} from './components';
import {WhatGPT3 , Possibility , Header, Footer, Blog, Features} from './containers';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
          <Navbar/>
          <Header/>
      </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
