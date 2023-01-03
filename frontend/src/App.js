import React, {useState} from 'react';
import Login from './components/security/Login';
import RegisterUser from './components/security/RegisterUser';
import MenuAppBar from './components/navigation/MenuAppBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Products from './components/views/Products';
import detailsProduct from './components/views/detailsProduct';
import cart from './components/views/Cart';
import Shipping from './components/views/Shipping';
import Order from './components/views/Order';
import Perfil from './components/security/Perfil';
import MenuAdmin from './components/navigation/desktop/MenuAdmin';
import MenuClient from './components/navigation/desktop/MenuClient';
import User from './components/views/admin/User';
import EditUser from './components/views/admin/EditUser';


function App() {


  return (
    <div>
      <Router>
         <MenuAppBar/>
         <Switch>
          
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/details/:id" component={detailsProduct} />
          <Route path="/cart" component={cart} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/order/:id" component={Order} />
          <Route path="/perfil" component={Perfil} />
          <Route path="/admin/users" component={User} />
          <Route path="/admin/user/:id" component={EditUser} />
          <Route path="/" component={Products} />
         </Switch>
      </Router>
    
     
    
    </div>

    
  );
}

export default App;
