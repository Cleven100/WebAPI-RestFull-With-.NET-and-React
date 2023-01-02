import React, {useState} from 'react';
import Login from './components/security/Login';
import RegisterUser from './components/security/RegisterUser';
import MenuAppBar from './components/navigation/MenuAppBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Products from './components/views/Products';
import detailsProduct from './components/views/detailsProduct';

function App() {


  return (
    <div>
      <Router>
         <MenuAppBar/>
         <Switch>
          
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/details/:id" component={detailsProduct} />
          <Route path="/" component={Products} />
         </Switch>
      </Router>
    
     
    
    </div>

    
  );
}

export default App;
