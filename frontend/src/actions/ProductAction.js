import { uploadImage } from '../firebase';
import HttpClient from '../services/HttpClient'
import axios from 'axios'

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
 instancia.isCancel = axios.isCancel;


 export const updateProduct = async (id, product) =>{
     
    if(product.file) {
            const urlImage = await uploadImage(product.file);
            product.image = urlImage;
          }
    
    return new Promise( (resolve, eject) => {
        
     

     HttpClient.put(`api/product/${id}`, product)
      .then(response => {
        resolve(response)
      }) 
        .catch(error => {
            resolve(error.response);
        })

       });
 }



 export const registerProduct = async (product) => {

    if(product.file) {
        const urlImage = await uploadImage(product.file);
        product.image = urlImage;
      }


    
    return new Promise((resolve, eject) => {
        HttpClient.post("/api/product", product)
         .then(response => {
            resolve(response);
         })
          .catch(error => {
            resolve(error.response);
          })
    })
 }

export const getProducts = (requestProducts) => {
   
    return new Promise((resolve, eject) => {
        instancia.get(`/api/product?pageIndex=${requestProducts.pageIndex}&pageSize=${requestProducts.pageSize}&search=${requestProducts.search}`)
            .then(response => {
                resolve(response);
            });
    })
};


export const getProduct = id => {
    return new Promise((resolve, eject) => {
        instancia.get(`/api/product/${id}`)
        .then(response => {
            resolve(response);
        })
         .catch(error => {
            resolve(error.response);
         });
    });

}


