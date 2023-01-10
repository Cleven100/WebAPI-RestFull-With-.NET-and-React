import HttpClient from '../services/HttpClient'
import axios from 'axios'

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
 instancia.isCancel = axios.isCancel;

 export const getCart = (dispatch, id) => {
   return new Promise((resolve, eject) =>{
       

    instancia.get(`/api/cart/?id=${id}`)
      .then(response => {
         dispatch({
            type: "CART_SESSION",
            id: response.data.id,
            item: response.data.item
         });
         resolve(response)
      })
        .catch(error => {
            resolve(error.response);
        })

   });


 }


 export const setCart = (dispatch, cart) => {
    return new Promise((resolve, eject) => {
        instancia.post(`/api/cart`, cart)
          .then(response => {
            dispatch({
                type: "CART_SESSION",
                id: response.data.id,
                item: response.data.item
            })
            resolve(response);
          })
           .catch(error => {
            resolve(error.response);
           })
    })
 }


 export const addItem = (cart, item, dispatch) => {
    if(!cart.item) {
       cart.item = [];
    }

  const indice =  cart.item.findIndex(i => i.id === item.id);

   if(indice === -1) {
    cart.item.push(item);
   }
    else {
        cart.item[indice].amount += item.amount
    }
    setCart(dispatch, cart);
 } 