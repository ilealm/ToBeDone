import React from 'react'
import {useNavigate} from "react-router-dom";
import { removeToken } from '../Auth'

export default function LogOut() {
    const navigate = useNavigate();
    
    function handleSubmit(){
        removeToken();        
        navigate("/");
        console.log("TBD_Token removed from local storage.")
    }

    return (
        <>
        <div>
            <h1>
            LogOut
            </h1>
            <button type='submit' onClick={handleSubmit}> Log out </button>
        </div>
    </>
    )
}
