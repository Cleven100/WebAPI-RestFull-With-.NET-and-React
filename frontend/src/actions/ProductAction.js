import HttpClient from '../services/HttpClient'

export const getProducts = (requestProducts) => {
   
    return new Promise((resolve, eject) => {
          HttpClient.get(`/api/product?pageIndex=${requestProducts.pageIndex}&pageSize=${requestProducts.pageSize}&search=${requestProducts.search}`)
            .then(response => {
                resolve(response);
            });
    })
};




