import HttpClient from '../services/HttpClient'
import axios from 'axios'

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
 instancia.isCancel = axios.isCancel;


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


