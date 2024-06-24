import { lightTheme } from "./Colors"
import { MdOutlineAccountCircle, MdAdminPanelSettings  } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import NavSearchBar from "./NavSearchBar";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoLogInOutline } from "react-icons/io5";

export const NavBar = () => {

    const nav = useNavigate();

    const authProvider = useContext(AuthContext);

    const [showAccountOption, setShowAccountOption] = useState(false);

    const [showChangePassword, setShowChangePassword] = useState(false);

    return (

        <nav id="navbar" style={{
            backgroundColor: lightTheme.secondaryColor,
            color: lightTheme.textColor
        }} className="navbar">

            <h1 style={{
                cursor: 'pointer'
            }} onClick={()=>{
                nav("/");
            }}>RXPress</h1>

            <div className="nav-opt">
                <NavSearchBar />
                <NavLink to={'/cart'}>
                    <BsCart2 className="nav-opt-icon" />
                </NavLink>
                
                <div style={{
                    position: 'relative'
                }}>

                    

                    {
                        !authProvider.user ? <IoLogInOutline onClick={() => {
                            nav('/signup');
                        }} className="nav-opt-icon" /> :

                            <MdOutlineAccountCircle onMouseEnter={() => {
                                if (authProvider.user) {
                                    setShowAccountOption(true);
                                }
                            }}
                                onMouseLeave={() => {
                                    setShowAccountOption(false);
                                    setShowChangePassword(false);
                                }}
                                className="nav-opt-icon" />

                    }

                    {
                        showAccountOption ? <div onMouseEnter={() => {
                            setShowAccountOption(true);
                        }}
                            onMouseLeave={() => {
                                setShowAccountOption(false);
                                setShowChangePassword(false);
                            }}
                            className="accountOption">
                            <p>{authProvider.user.name}</p>
                            <span style={{
                                fontSize: '0.8em',
                                position: 'relative',
                                top: '-3px'
                            }}>{authProvider.user.email}</span>

                            <p onClick={() => {
                                setShowChangePassword(true);
                            }} style={{
                                cursor: 'pointer',
                                color: lightTheme.sideColor
                            }} className={'cplink'}>Change Password</p>


                            {
                                showChangePassword ? <>
                                    <input placeholder="Current Password" autoComplete="new-password" type="password" />
                                    <input placeholder="New Password" autoComplete="new-password" type="password" />
                                    <input placeholder="Confirm New Password" autoComplete="new-password" type="password" />
                                    <div className="buttonFlex">
                                        <button onClick={() => {
                                            setShowChangePassword(false)
                                        }} style={{
                                            backgroundColor: lightTheme.sideColor
                                        }}>Done</button>
                                        <button onClick={() => {
                                            setShowChangePassword(false)
                                        }} style={{
                                            backgroundColor: lightTheme.sideColor
                                        }}>Cancel</button>
                                    </div>
                                </> : <></>
                            }

                            <p onClick={() => {
                                localStorage.removeItem("token");
                                authProvider.setUser(null);
                                setShowAccountOption(false);
                                alert("Logout successfully")
                            }} style={{
                                cursor: 'pointer',
                                color: 'red'
                            }} className={'cplink'}>LogOut</p>
                        </div> : <></>
                    }
                </div>

               {
                 authProvider.user ? authProvider.user.role === 'admin' ?  <MdAdminPanelSettings onClick={()=>{
                    nav("/admin/productManagement")
                }} style={{
                    position: 'relative',
                    bottom: 3
                }} className="nav-opt-icon"/> : '' : ''
               }

            </div>
        </nav>
    );
}