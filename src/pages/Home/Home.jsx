import { lightTheme } from "../../components/Colors";
import CategoryProduct from "./CategoryProducts";
// import Brands from "./Brands";
import Footer from "../../components/Footer";
import { NavBar } from "../../components/NavBar";


const Home = () => {

    const healthCategories = [
        'Diabetes Care',
        'Heart Care',
        'Liver Care',
        'Stomach Care',
        'Kidney Care',
        'Bone & Muscles Care',
        'Eye Care',
        'Respiratory Care'
    ];

    const generalCategories = [
        'Vitamins & Suppliments',
        'Personal Care',
        'Baby Care',
        'Medical Supplies',
        'Ayurvedic',
        'Sexual Wellness'
    ];


    return <section style={{
        backgroundColor: lightTheme.primaryColor,
        color: lightTheme.textColor
    }} className="homeSection" id="homeSection">
        <NavBar />


        <div style={{
            height: 69
        }}></div>
        {/* Home Main Section */}
        <main className="homeMainSection">
            <div className="hmS-image">
                <img src={process.env.PUBLIC_URL + "/Assets/main.jpg"} alt="" />
            </div>
            <div className="hmS-content">
                <span style={{
                    color: lightTheme.secondaryColor
                }}>Special Offer</span>
                <h1>Premium CBD Oil 1000mg</h1>
                <p style={{
                    color: lightTheme.sideColor
                }} className="hmS-price">&#x20B9; 200 <span>&#x20B9; 500</span></p>
                <button style={{
                    backgroundColor: lightTheme.sideColor
                }}>Buy Now</button>
            </div>
        </main>

        {/* Health Category Section */}
        <CategoryProduct categories={healthCategories} pup={true} title={"Shop By Health Problems"} categoryProducts={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />

        {/* General Category Section */}
        <CategoryProduct categories={generalCategories} pup={false} title={"Shop By Categories"} categoryProducts={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />


        {/* Partner Section */}
        {/* <Brands /> */}


        <Footer />




    </section>
}

export default Home;