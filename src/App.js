import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CustomCakeContainer from './components/CustomCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <CustomCakeContainer/>
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
