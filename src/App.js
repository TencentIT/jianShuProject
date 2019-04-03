import React, { Component } from 'react';
import Header from './common/header'
import {GlobalStyle} from "./style";
import {GlobalStyleIcon} from "./statics/iconfont/iconfont";
import store from './store'
import {Provider} from 'react-redux'
 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div> 
           <GlobalStyle/>
          <GlobalStyleIcon/>
          <Header/>
        </div>
      </Provider>
      
    );
  }
}

export default App;
