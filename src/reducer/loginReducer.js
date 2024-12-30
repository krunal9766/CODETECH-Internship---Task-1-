const initialData = {
    isLoggedIn : false, 
}

var loginreducer=(state=initialData,action)=>{
    switch(action.type){
        case "LOGOUT":
            state = {
                isLoggedIn : action.payload
            }
            break;
        
        case "LOGIN":
            state = {
                isLoggedIn : action.payload
            }
    }

    return state;
}

export default loginreducer