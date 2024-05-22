import { lightTheme } from "../../components/Colors";


const Login = (props) => {
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
                        <input type="email" name="lemail" id="lemail" />
                    </label>

                    <div className="spacer">

                    </div>

                    <label htmlFor="">
                        Password <br />
                        <input type="password" name="lpassword" id="lpassword" />
                    </label>

                    <div className="spacer">

                    </div>

                    <button style={{
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