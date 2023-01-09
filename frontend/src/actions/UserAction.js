import HttpClient from '../services/HttpClient'
import axios from 'axios'

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
 instancia.isCancel = axios.isCancel;

export const registerUser = (user, dispatch) => {
    return new Promise((resolve, eject) =>{
        instancia.post("/api/user/register", user)
        .then(response => {

            dispatch({
                type: "INITIAL_SESSION",
                session: response.data,
                authentication: true
            })
    
    


            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })
    })
}


export const loginUser = (user, dispatch) => {
 return new Promise((resolve, eject) =>{
    instancia.post("/api/user/login", user)
     .then(response => {

      
        dispatch({
            type: "INITIAL_SESSION",
            session: response.data,
            authentication: true
        })

        resolve(response);
        
     })
      .catch( (error) => {
         resolve(error.response);
      })
 });
}


export const getUser = (dispatch) => {
   return new Promise((resolve, eject) => {
    HttpClient.get("/api/user")
       .then(response => {

          dispatch({
            type: "INITIAL_SESSION",
            session: response.data,
            authentication: true
          })


        resolve(response)
       })
       .catch(error => {
          resolve(error.response);
       })
           
   })
}