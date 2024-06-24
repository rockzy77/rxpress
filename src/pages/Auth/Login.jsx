import { useContext, useState } from "react";
import { lightTheme } from "../../components/Colors";
import { loginUserDB } from "../../js/userScripts";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Login = (props) => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const AuthData = useContext(AuthContext);

    const nav = useNavigate();

    const loginFunction = async()=>{
        if(email === '' || password === ''){
            return ;
        }

        var res = await loginUserDB({
            email,
            password,
            authType: 'login'
        });

        if(res.success){
            AuthData.setUser(res.user);
            alert("Login Successfully");
            nav("/");
        }
        else{
            alert("Error: "+res.error);
        }
        

    }
    
    return <section style={{
        backgroundColor: lightTheme.secondaryColor
    }} id="login">
        <div className="loginCont">
            <div className="loginBox">
                <h2>Login</h2>
                <div className="spacer">

                </div>
                <form>
                    <label htmlFor="">
                        Email <br />
                        <input onChange={(e)=>{
                            setEmail(e.target.value)
                        }} type="email" name="lemail" id="lemail" />
                    </label>

                    <div className="spacer">

                    </div>

                    <label htmlFor="">
                        Password <br />
                        <input onChange={(e)=>{
                            setPassword(e.target.value);
                        }} type="password" name="lpassword" id="lpassword" />
                    </label>

                    <div className="spacer">

                    </div>

                    <button onClick={(e)=>{
                        e.preventDefault();
                        loginFunction();
                    }} style={{
                        backgroundColor: lightTheme.secondaryColor
                    }}>Log In</button>

                    <div className="spacer">

                    </div>

                    <p>
                        New Here? <span onClick={()=>{
                            props.setIsLogin(false);
                        }} style={{
                            color:lightTheme.sideColor,
                            fontWeight: '600',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }} >Register Now</span>
                    </p>


                </form>
            </div>
        </div>
    </section>
}

export default Login;