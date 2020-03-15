import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ShoppingPage from './components/ShoppingPage';
import store from './redux/store'
import { Provider } from 'react-redux'


function App() {
  let currentPage = "SHOP"

  store.subscribe(() => {
    console.log("updated")
    console.log(store.getState())
  })

  return (
    <Provider store = {store}>    
      <div className="App">
        <NavBar currentPage={currentPage}/>
        <ShoppingPage />
      </div>
    </Provider>

  );
}

export default App;
