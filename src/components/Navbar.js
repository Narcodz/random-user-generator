import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "./logo.png"

const Navbar = ({ getUsers }) => {
    const urlData = useLocation()
    const navigate = useNavigate();
    useEffect(() => {
        console.log('urlData', urlData)
        return
    }, [urlData])

    let pathName = urlData.pathname
    let result = pathName.startsWith("/user");

    const goBack = () => {
        navigate('/', { replace: true });
    };

    return (
        <div className="navbar">
            <p className="logo"><img src={logo} alt="" /></p>
            {result ? true &&
                <button className="back-button" onClick={goBack}>BACK</button>
                :
                <button className="generate-button" onClick={getUsers}>GENERATE NEW USERS</button>}

        </div>
    )
}

export default Navbar;