import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

import TopMenu from './components/TopMenu';
import SideMenu from './components/SideMenu';
import MainContent from './components/MainContent';

class App extends Component{
  render =() =>{
    return (
      <div className="App">
        <header className="App-header">
          <TopMenu></TopMenu>
          <div class="container-fluid">
            <div class="row vh-100">
              <SideMenu></SideMenu>
              <MainContent></MainContent>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
