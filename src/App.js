import React, {Component} from 'react';
import CRouter from './routes';

import "./style/container.css";

// import {connect} from 'react-redux'; import {bindActionCreators} from
// 'redux'; import {receiveData} from './action';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
//  import logo from './logo.svg';
import './App.css';

// // redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
console.log(store.getState());

class App extends Component {

  render() {
    return (

      <div className="App">

        <Provider store={store}>
          <CRouter></CRouter>
        </Provider>
      </div>

    );
  }
}

// const mapStateToProps = state => {   const data = state.data;   return
// {data}; }; const mapDispatchToProps = dispatch => ({   receiveData:
// bindActionCreators(receiveData, dispatch) }); export default
// connect(mapStateToProps, mapDispatchToProps)(App);
export default App