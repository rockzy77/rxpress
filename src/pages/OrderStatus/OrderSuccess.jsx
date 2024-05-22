import { useNavigate } from "react-router-dom";
import { lightTheme } from "../../components/Colors";
import { NavBar } from "../../components/NavBar";

const OrderSuccess = (props) => {

    const nav = useNavigate();

    return <div id="orderStatus">
        <NavBar />
        <div style={{
            height: 69
        }}></div>
        
        <div className="orderStatusCont">
            <div style={{
                backgroundColor: lightTheme.primaryColor
            }} className="orderStatusBox">
                <div className="orderStatusHead success">
                    <h2>Order placed successfully</h2>
                    <h3>Order Id: #1234</h3>
                    <p>Thankyou for shopping with us. We have recieved your order and soon it will be ready for shipping. Your delivery can be expected within 3 to 4 business days.</p>
                </div>

                <div className="orderStatusDetails">
                    <h4>Order Details</h4>
                    <p>Name: Ali Mohammed Manzooe</p>
                    <p>Address: Ali Mohammed Manzooe</p>
                    <p>Phone: +91 9747805159</p>
                    <p>Order Items: 2</p>
                    <p>Order Total: 2400</p>
                    <button onClick={()=>{
                        nav('/', {
                            replace: true
                        });
                    }} style={{
                        backgroundColor: lightTheme.secondaryColor
                    }}>Continue Shopping</button>
                </div>

               
            </div>
        </div>
    </div>

};

export default OrderSuccess;