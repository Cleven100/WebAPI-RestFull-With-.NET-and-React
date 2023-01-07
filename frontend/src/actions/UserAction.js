import HttpClient from '../services/HttpClient'

export const registerUser = user => {
    return new Promise((resolve, eject) =>{
        HttpClient.post("/api/user/register", user)
        .then(response => {
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })
    })
}


export const loginUser = user => {
 return new Promise((resolve, eject) =>{
    HttpClient.post("/api/user/login", user)
     .then(response => {
        resolve(response);
     })
      .catch( (error) => {
         resolve(error.response);
      })
 });
}


export const getUser = () => {
   return new Promise((resolve, eject) => {
        HttpClient.get("/api/user")
         .then(response => {
            resolve(response);
         }).catch(error => {
            resolve(error.resolve);
         })
           
   })
}