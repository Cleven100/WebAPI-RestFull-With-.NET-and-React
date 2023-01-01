import React, {useState} from 'react';
import Login from './components/security/Login';
import RegisterUser from './components/security/RegisterUser';
import MenuAppBar from './components/navigation/MenuAppBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import home from './components/teste/home';
import Book from './components/views/Book';

function App() {


  return (
    <div>
      <Router>
         <MenuAppBar/>
         <Switch>
          
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/" component={Book} />

         </Switch>
      </Router>
    
     
    
    </div>

    
  );
}

export default App;
