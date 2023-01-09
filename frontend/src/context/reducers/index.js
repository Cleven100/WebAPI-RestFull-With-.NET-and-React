import sessionCartReducer from "./sessionCartReducer"
import { sessionUserReducer } from "./sessionUserReducer"




export const mainReducer = ({sessionUser, sessionCart}, action) =>{
      return {
        sessionUser: sessionUserReducer(sessionUser, action),
        sessionCart:  sessionCartReducer(sessionCart, action)
      }
}