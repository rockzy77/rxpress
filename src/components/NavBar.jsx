import { lightTheme } from "./Colors"
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import NavSearchBar from "./NavSearchBar";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

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

            <h1>RXPress</h1>

            <div className="nav-opt">
                <NavSearchBar />
                <NavLink to={'/cart'}>
                    <BsCart2 className="nav-opt-icon" />
                </NavLink>
                <div style={{
                    position: 'relative'
                }}>
                    <MdOutlineAccountCircle onMouseEnter={() => {
                        setShowAccountOption(true);
                    }}
                        onMouseLeave={() => {
                            setShowAccountOption(false);
                            setShowChangePassword(false);
                        }}
                        onClick={() => {
                            if (authProvider.user === null) {
                                nav('/signup');
                            }
                        }} className="nav-opt-icon" />

                    {
                        showAccountOption ? <div onMouseEnter={() => {
                            setShowAccountOption(true);
                        }}
                            onMouseLeave={() => {
                                setShowAccountOption(false);
                                setShowChangePassword(false);
                            }}
                            className="accountOption">
                            <p>Ali Mohammed</p>
                            <span style={{
                                fontSize: '0.8em',
                                position: 'relative',
                                top: '-3px'
                            }}>ali@gmail.com</span>

                            <p onClick={()=>{
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
                            <button onClick={()=>{
                                setShowChangePassword(false)
                            }} style={{
                                backgroundColor: lightTheme.sideColor
                            }}>Done</button>
                            <button onClick={()=>{
                                setShowChangePassword(false)
                            }} style={{
                                backgroundColor: lightTheme.sideColor
                            }}>Cancel</button>
                            </div>
                            </> : <></>
                            }
                        </div> : <></>
                    }
                </div>
            </div>
        </nav>
    );
}