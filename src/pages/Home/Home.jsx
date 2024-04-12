import { useState } from "react";
import { lightTheme } from "../../components/Colors";
import { MdKeyboardArrowRight } from "react-icons/md";


const Home = () => {

    const [selectedHP, setSelectedHP] = useState('All Disease');
    const [selectedCategory, setSelectedCategory] = useState('Vitamins & Suppliments');

    const healthProblems = [
        'All Disease',
        'Diabetes',
        'Heart',
        'Liver',
        'Stomach',
        'Kidney',
        'Bone & Muscles',
        'Eye',
        'Respiratory'
    ];

    const categories = [
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

        {/* Health Problem Browse Section */}
        <div className="categorySection">
            <h2>Shop By Health Problems</h2>
            <div className="categoryRow">

                {
                    healthProblems.map((item) => {
                        return <div onClick={() => {
                            setSelectedHP(item);
                        }} className={`category-item ${selectedHP === item ? 'active' : ''}`}>
                            <span>{item}</span>
                        </div>
                    })
                }
            </div>
        </div>

        {/*  Health Problem Products */}
        <div className="categoryProducts">
            <div className="categoryProductGrid">

                {
                    [0, 0, 0, 0, 0, 0, 0, 0].map(item => {
                        return <div className="product-card">
                            <div className="product-tumb">
                                <img src={process.env.PUBLIC_URL + "/Assets/main.jpg"} alt="" />
                            </div>
                            <div className="product-details">
                                <h4 style={{
                                    color: lightTheme.secondaryColor
                                }}>Women leather bag</h4>
                                <p>Lorem ipsum dolor sit amet</p>
                                <div className="product-bottom-details">
                                    <div style={{
                                        color: lightTheme.sideColor
                                    }} className="product-price">$230.99</div>

                                </div>
                            </div>
                        </div>
                    })
                }



            </div>

            <div className="seeMorecont">
                <span style={{
                    color: lightTheme.sideColor
                }} className="seeMore">See More</span>
                <span>
                <MdKeyboardArrowRight style={{
                    position: 'relative',
                    top: 3,
                    fontSize: 20
                }}/>

                </span>
            </div>
        </div>


        {/* Category Section */}
        <div className="categorySection">
            <h2>Shop By Category</h2>
            <div className="categoryRow">

                {
                    categories.map((item) => {
                        return <div onClick={() => {
                            setSelectedCategory(item);
                        }} className={`category-item ${selectedCategory === item ? 'active' : ''}`}>
                            <span>{item}</span>
                        </div>
                    })
                }
            </div>
        </div>

        {/* Category Products */}
        <div className="categoryProducts">
            <div className="categoryProductGrid">

                {
                    [0, 0, 0, 0, 0, 0, 0, 0].map(item => {
                        return <div className="product-card">
                            <div className="product-tumb">
                                <img src={process.env.PUBLIC_URL + "/Assets/main.jpg"} alt="" />
                            </div>
                            <div className="product-details">
                                <h4 style={{
                                    color: lightTheme.secondaryColor
                                }}>Women leather bag</h4>
                                <p>Lorem ipsum dolor sit amet</p>
                                <div className="product-bottom-details">
                                    <div style={{
                                        color: lightTheme.sideColor
                                    }} className="product-price">$230.99</div>

                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
            <div className="seeMorecont">
                <span style={{
                    color: lightTheme.sideColor
                }} className="seeMore">See More</span>
            </div>
        </div>


        {/* Partner Section */}
        <div className="partnerSection">

        </div>



    </section>
}

export default Home;