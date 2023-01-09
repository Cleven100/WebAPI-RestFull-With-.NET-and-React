export const initialState = {
    user: {
        name: "",
        nickname: "",
        email: "",
        usarname: "",
        image: ""
    },
    authentication: false
}

export const  sessionUserReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case "INITIAL_SESSION":
         return {
            ...state,
               user : action.session,
               authentication: action.authentication
         };
         case "CLOSE_SESSION": 
            return {
                ...state,
                user: action.newUser,
                authentication: action.authentication
            }
         ;
         case "UPDATE_USER": 
            return {
                ...state,
                user: action.newUser,
                authentication: action.authentication
            }
         ;
         default: return state;
    }

} 

