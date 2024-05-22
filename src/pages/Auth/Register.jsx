import { lightTheme } from "../../components/Colors";


const Register = (props) => {
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
                        <input type="text" name="rname" id="rname" />
                    </label>

                    <div className="spacer">

                    </div>


                    <label htmlFor="">
                        Email <br />
                        <input type="email" name="remail" id="remail" />
                    </label>

                    <div className="spacer">

                    </div>

                    <label htmlFor="">
                        Password <br />
                        <input type="password" name="rpassword" id="rpassword" />
                    </label>

                    <div className="spacer">

                    </div>

                    <label htmlFor="">
                        Confirm Password <br />
                        <input type="password" name="rcpassword" id="rcpassword" />
                    </label>

                    <div className="spacer">

                    </div>

                    <button style={{
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