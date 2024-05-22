import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { lightTheme } from "../../components/Colors";
import Footer from "../../components/Footer";
import { useLocation, useNavigate} from "react-router-dom";


const Checkout = (props) => {

    const nav = useNavigate();

    const [isAddressSection, setIsAddressSection] = useState(true);

    const [addressSet, setAddressSet] = useState(false);

    const location = useLocation();

    const [paymentMode, setPaymentMode] = useState(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        pincode: '',
        locality: '',
        address: '',
        city: '',
        state: '',
        landmark: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const SetAddress = () => {
        setAddressSet(true);
        setIsAddressSection(false);
    };

    const SetPayment = (mode) => {
        setPaymentMode(mode);
    }

    useEffect(()=>{
        console.log(location)
    })

    return <section className="checkoutSection" id="checkoutSection">
        <NavBar />


        <div style={{
            height: 69
        }}></div>



        <div className="checkoutRow">
            <div className="checkoutDetailSection">
                <div style={{
                    backgroundColor: lightTheme.primaryColor
                }} className="checkoutHeader">
                    <p className={`${isAddressSection ? 'active' : ''}`} onClick={() => {
                        setIsAddressSection(true)
                    }}>Delivery Address</p>

                    <div className="vr"></div>

                    <p className={`${isAddressSection ? '' : 'active'}`} onClick={() => {
                        if (addressSet) {
                            setIsAddressSection(false)
                        }
                        else {
                            alert("Enter an address to continue")
                        }
                    }}>Payment Option</p>
                </div>

                {
                    isAddressSection ? <AddressSection formData={formData} handleChange={handleChange} setAddress={SetAddress} /> : <PaymentSection mode={paymentMode} setPaymentMode={SetPayment} />
                }




            </div>


            <div className="checkoutConfirmationSection">
            <div className="cart-checkout-cont">
                   

                    <div style={{
                        color: lightTheme.textColor
                    }} className="checkout-box">
                        <h4>Price Details</h4>
                        <hr />
                        <div className="price-row">
                            <p>Items</p>
                            <p>2</p>
                        </div>

                        <div className="price-row">
                            <p>Price</p>
                            <p>Rs 0</p>
                        </div>

                        <div className="price-row">
                            <p>Discount</p>
                            <p>Rs 0</p>
                        </div>


                        <div className="price-row">
                            <p>Delivery Charge</p>
                            <p>Rs 0</p>
                        </div>

                        <hr />

                        <div className="price-row">
                            <p>Total Amount</p>
                            <p>1</p>
                        </div>

                    </div>

                    <button onClick={()=>{
                        if(!isAddressSection){
                            nav("/orderSuccess", {
                                state: {
                                    orderId: 1234
                                },
                                replace: true
                            })
                        }
                        else{
                            setAddressSet(true);
                            setIsAddressSection(false);
                        }
                    }} className="checkoutbtn" style={{
                        backgroundColor: lightTheme.secondaryColor
                    }}>{!isAddressSection ? 'Checkout' : 'Continue'}</button>
                </div>
            </div>
        </div>

        <Footer />

    </section>
}

const AddressSection = (props) => {

    return <div style={{
        backgroundColor: lightTheme.primaryColor
    }} className="addressSection">
        <form>
            <div className="f-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: '0 0 48%' }}>
                    <label>
                        First Name: <br />
                        <input
                            type="text"
                            name="firstName"
                            value={props.formData.firstName}
                            onChange={props.handleChange}
                            required
                        />
                    </label>
                </div>
                <div style={{ flex: '0 0 48%' }}>
                    <label>
                        Last Name: <br />
                        <input
                            type="text"
                            name="lastName"
                            value={props.formData.lastName}
                            onChange={props.handleChange}
                            required
                        />
                    </label>
                </div>
            </div>

            <div className="f-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: '0 0 48%' }}>
                    <label>
                        Pincode: <br />
                        <input
                            type="text"
                            name="pincode"
                            value={props.formData.pincode}
                            onChange={props.handleChange}
                            required
                        />
                    </label>
                </div>
                <div style={{ flex: '0 0 48%' }}>
                    <label>
                        Locality: <br />
                        <input
                            type="text"
                            name="locality"
                            value={props.formData.locality}
                            onChange={props.handleChange}
                            required
                        />
                    </label>
                </div>
            </div>

            <div className="f-row" >
                <label>
                    Address: <br />
                    <textarea
                        name="address"
                        value={props.formData.address}
                        onChange={props.handleChange}
                        required
                        style={{ width: '100%', height: '100px' }}
                    />
                </label>
            </div>

            <div className="f-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: '0 0 48%' }}>
                    <label>
                        City/ District/ Town: <br />
                        <input
                            type="text"
                            name="city"
                            value={props.formData.city}
                            onChange={props.handleChange}
                            required
                        />
                    </label>
                </div>
                <div style={{ flex: '0 0 48%' }}>
                    <label>
                        State: <br />
                        <input
                            type="text"
                            name="state"
                            value={props.formData.state}
                            onChange={props.handleChange}
                            required
                        />
                    </label>
                </div>
            </div>

            <div className="f-row" style={{ display: 'flex', gap: '2em', justifyContent: 'space-between' }}>
                <div style={{ flex: '0 0 48%' }}>
                    <label>
                        LandMark (Optional): <br />
                        <input
                            type="text"
                            name="landmark"
                            value={props.formData.landmark}
                            onChange={props.handleChange}
                        />
                    </label>
                </div>
                <div style={{ flex: '0 0 48%' }}>
                    <label>
                        Phone: <br />
                        <input
                            type="text"
                            name="phone"
                            value={props.formData.phone}
                            onChange={props.handleChange}
                            required
                        />
                    </label>
                </div>
            </div>

            <div className="f-row">
                <button onClick={(e) => {
                    e.preventDefault();
                    props.setAddress();
                }} style={{
                    backgroundColor: lightTheme.secondaryColor
                }} type="submit">Continue</button>
            </div>
        </form>
    </div>


}

const PaymentSection = (props) => {
    return <>
        <div style={{
            backgroundColor: lightTheme.primaryColor
        }} className="paymentSection">
            <div className="payment-option">
                <label className="custom-radio">
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="COD"
                        checked={props.mode === 'COD'}
                        onChange={() => {
                            props.setPaymentMode("COD");
                        }}
                        required
                    />
                    <span className="checkmark"></span>
                    Cash on Delivery (COD)
                </label>
            </div>


        </div>
        <div style={{
            height: '50vh'
        }}></div>
    </>

}
export default Checkout;