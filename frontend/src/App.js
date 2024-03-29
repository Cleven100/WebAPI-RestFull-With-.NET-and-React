import React, { useEffect, useState } from 'react';
import Login from './components/security/Login';
import RegisterUser from './components/security/RegisterUser';
import MenuAppBar from './components/navigation/MenuAppBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import listProducts from './components/views/admin/listProducts';
import AddProduct from './components/views/admin/AddProduct';
import EditProduct from './components/views/admin/EditProduct';
import ListOrders from './components/views/admin/ListOrders';
import MenuPublic from './components/navigation/desktop/MenuPublic';
import { getUser } from './actions/UserAction';
import { useStateValue } from './context/store';
import { getCart } from './actions/CartAction';
import { v4 as uuidv4} from 'uuid'
import { Snackbar } from '@material-ui/core';



function App() {

  const [{ sessionUser, openSnackbar }, dispatch] = useStateValue();

  const [servidorResponse, setServidorResponse] = useState(false);


  useEffect( async () => {

      let cartId = window.localStorage.getItem('cart');

     if(!cartId) {
       cartId =  uuidv4();
       window.localStorage.setItem('cart', cartId);
     }


    if (!servidorResponse) {

   
     await getUser(dispatch);
     await getCart(dispatch, cartId)
     setServidorResponse(true)
       
        
      

      
    } 



  }, [servidorResponse])




  return (
    <div>
      <Snackbar
      anchorOrigin={{vertical: "bottom", horizontaol:"center"}}
      open = {openSnackbar ? openSnackbar.open : false}
      autoHideDuration={3000}
      ContentProps={{"aria-describedby" : "message-id"}}
      message={
        <span id="message-id">
          {openSnackbar ? openSnackbar.message : ""}
        </span>
      }
      onClose={() => 
        dispatch({
          type: "OPEN_SNACKBAR",
          openMessage: {
            open: false,
            message: ""
          }
        })
      }
      >

      </Snackbar>
      <Router>
        <MenuAppBar />
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
          <Route path="/admin/listProducts" component={listProducts} />
          <Route path="/admin/addproducts" component={AddProduct} />
          <Route path="/admin/editproducts/:id" component={EditProduct} />
          <Route path="/admin/listorders" component={ListOrders} />
          <Route path="/" component={Products} />
        </Switch>
      </Router>



    </div>


  );
}

export default App;
