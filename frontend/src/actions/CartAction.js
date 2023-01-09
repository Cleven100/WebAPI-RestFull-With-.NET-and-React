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