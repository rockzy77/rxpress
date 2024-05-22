import { useContext, useEffect, useState } from "react";
import { lightTheme } from "../../components/Colors";
import { NavBar } from "../../components/NavBar";
import { ShopContext } from "../../provider/ShopProvider";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";

const Cart = () => {

    const shopData = useContext(ShopContext);

    const [cartPrice, setCartPrice] = useState(0);

    const [discountAmount, setDiscountAmount] = useState(0);

    const [discountController, setDiscountController] = useState('');

    const increaseCart = (id) => {
        var indM = 0;
        var t = shopData.cartItems;
        for (var i = 0; i < t.length; i++) {
            if (t[i].id === id) {
                indM = i;
            }
        }

        t[indM].quantity = t[indM].quantity + 1;

        shopData.setCartItems([...t]);
    }

    const decreaseCart = (id) => {
        var indM = 0;
        var t = shopData.cartItems;
        for (var i = 0; i < t.length; i++) {
            if (t[i].id === id) {
                indM = i;
            }
        }

        t[indM].quantity = t[indM].quantity - 1;

        shopData.setCartItems([...t]);
    }

    useEffect(()=>{
        var cp= 0;
        for(var i =0;i<shopData.cartItems.length;i++){
            var it = shopData.cartItems[i];
            cp = cp+ (it.price * it.quantity);
        }

        setCartPrice(cp);

        setDiscountAmount(0);
    }, [shopData.cartItems]);

    return <section style={{
        color: lightTheme.textColor
    }} className="cart" id="cart">
        <NavBar />


        <div style={{
            height: 69
        }}></div>


        {/* Cart Row */}
        <div className="cartRow">

            <div className="cart-item-section">
                <div className="cart-item-header">
                    <h3>Cart (2)</h3>
                </div>

                <br />

                <div className="cart-item-col-cont">


                    {
                        shopData.cartItems.map((item, index) => {
                            return <>
                                <div className="cart-items-col">

                                    <div className="cart-item-det-row">
                                        <div className="cart-item-img">
                                            <img src={process.env.PUBLIC_URL + '/assets/main.jpg'} alt="" />
                                        </div>

                                        <div className="cart-det">
                                            <h3>{item.title}</h3>
                                            <p>{item.des}</p>
                                            <p className="cart-price-tag">Rs {item.price}</p>
                                        </div>
                                    </div>

                                    <div className="cart-item-det-row">
                                        <button onClick={() => {
                                            if (item.quantity < item.limit) {
                                                increaseCart(item.id)
                                            }

                                        }} className="incdecBtn">+</button>
                                        <input value={item.quantity} className="cartItemQuantity" type="number" />
                                        <button onClick={() => {
                                            if (item.quantity > 1) {
                                                decreaseCart(item.id);
                                            }
                                        }} className="incdecBtn">-</button>
                                    </div>

                                </div>
                                <br />
                                <hr />
                                <br />  </>
                        })
                    }


                </div>


            </div>

            <div className="cart-checkout-section">
                <div className="cart-checkout-cont">
                    <div className="discount-box">
                        <input onKeyUp={(e)=>{
                                setDiscountController(e.target.value);
                        }} placeholder="Enter Coupon Code" type="text" /> <br />
                        <button onClick={()=>{
                            if(discountController.toLowerCase() === 'enjoy10'){
                                setDiscountAmount(10);
                                alert("Success! Discount has been applied")
                            }
                            else{
                                alert("Failed! Cannot find applied coupon")
                            }
                        }} style={{
                            backgroundColor: lightTheme.secondaryColor
                        }}>Apply Discount</button>
                    </div>

                    <div style={{
                        color: lightTheme.textColor
                    }} className="checkout-box">
                        <h4>Price Details</h4>
                        <hr />
                        <div className="price-row">
                            <p>Items</p>
                            <p>{shopData.cartItems.length}</p>
                        </div>

                        <div className="price-row">
                            <p>Price</p>
                            <p>Rs {cartPrice}</p>
                        </div>

                        <div className="price-row">
                            <p>Discount</p>
                            <p>Rs {discountAmount}</p>
                        </div>

                        <hr />

                        <div className="price-row">
                            <p>Total Amount</p>
                            <p>1</p>
                        </div>

                    </div>

                    <NavLink to={{
                        pathname: '/checkout',
                        state: {
                            checkoutItems: shopData.cart,
                            discountAmount: discountAmount,
                            discountController: discountController
                        }
                    }} >
                    <button className="checkoutbtn" style={{
                        backgroundColor: lightTheme.secondaryColor
                    }}>Checkout</button>
                    </NavLink>
                </div>
            </div>

        </div>

        <Footer />
    </section>
}

export default Cart;