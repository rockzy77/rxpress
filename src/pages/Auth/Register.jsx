import { useState } from "react";
import { lightTheme } from "../../components/Colors";
import { registerUserDB } from "../../js/userScripts";


const Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const registerFunction = async() => {
        if(name === '' || email === '' || password === '' || cpassword === ''){
            return;
        }

        if(password !== cpassword){
            alert("Password do not match!");
            return ;
        }

        var map = {
            name: name,
            email: email,
            password: password,
            role: 'customer',
            authType: 'register'
        };
        
        var res = await registerUserDB(map);

        if(res.success){
            alert("Register Success. Please log in.");
            props.setIsLogin(true);
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
                <h2>Register</h2>
                <div className="spacer">

                </div>
                <form>
                <label htmlFor="">
                        Name <br />
                        <input onChange={(e)=>{
                            setName(e.target.value);
                        }} type="text" name="rname" id="rname" />
                    </label>

                    <div className="spacer">

                    </div>


                    <label htmlFor="">
                        Email <br />
                        <input onChange={(e)=>{
                            setEmail(e.target.value);
                        }} type="email" name="remail" id="remail" />
                    </label>

                    <div className="spacer">

                    </div>

                    <label htmlFor="">
                        Password <br />
                        <input onChange={(e)=>{
                            setPassword(e.target.value);
                        }} type="password" name="rpassword" id="rpassword" />
                    </label>

                    <div className="spacer">

                    </div>

                    <label htmlFor="">
                        Confirm Password <br />
                        <input onChange={(e)=>{
                            setCPassword(e.target.value);
                        }} type="password" name="rcpassword" id="rcpassword" />
                    </label>

                    <div className="spacer">

                    </div>

                    <button onClick={(e)=>{
                        e.preventDefault();
                        registerFunction();
                    }} style={{
                        backgroundColor: lightTheme.secondaryColor
                    }}>Register</button>

                    <div className="spacer">

                    </div>

                    <p>
                        Already Registered? <span onClick={()=>{
                            props.setIsLogin(true);
                        }} style={{
                            color:lightTheme.sideColor,
                            fontWeight: '600',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }} >Login</span>
                    </p>


                </form>
            </div>
        </div>
    </section>
}

export default Register;