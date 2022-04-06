import {
    Navigate ,
    useLocation
  } from "react-router-dom";


export const removeToken = (token) =>{
    // set token in localStorage
    localStorage.removeItem('TBD_Token')
}

export const setToken = (token) =>{
    // set token in localStorage
    localStorage.setItem('TBD_Token', token)
}

export const fetchToken = (token) =>{
    // fetch the token
    return localStorage.getItem('TBD_Token')
}


// This function is the one to keep the routes protected. 
// If a token isn't saved, then "/" route will be displayed. 
export function RequireToken({children}) {
    
    let auth = fetchToken()
    let location = useLocation();
  
    if (!auth) {
      
      return <Navigate to="/" state={{ from: location }} />;
    }
  
    return children;
}