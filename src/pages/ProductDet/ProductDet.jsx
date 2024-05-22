import { lightTheme } from "../../components/Colors";
import Footer from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import CommentSection from "./CommentSection";

const ProductDet = () => {
    return <section style={{
        backgroundColor: lightTheme.primaryColor,
        color: lightTheme.textColor
    }} id="productDet" className="productDet">

<NavBar />


<div style={{
    height: 69
}}></div>


        <div className="productDetRow">
            <div className="productDetImage">
                <div className="mainImage">
                    <img src={process.env.PUBLIC_URL + "/Assets/main.jpg"} alt="" />
                </div>
                <div className="sideImagesRow">
                    <div className="imgRow">
                        <img src={process.env.PUBLIC_URL + "/Assets/main.jpg"} alt="" />
                    </div>

                    <div className="imgRow">
                        <img src={process.env.PUBLIC_URL + "/Assets/main.jpg"} alt="" />
                    </div>


                    <div className="imgRow">
                        <img src={process.env.PUBLIC_URL + "/Assets/main.jpg"} alt="" />
                    </div>

                    <div className="imgRow">
                        <img src={process.env.PUBLIC_URL + "/Assets/main.jpg"} alt="" />
                    </div>
                </div>
            </div>

            <div className="productDetContent">
                <h1 className="product-name">Premium CBD Oil 1000mg</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, explicabo assumenda beatae, consequatur pariatur
                    libero culpa ipsa .</p>
                <div className="product-price">
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: '1.2em'
                    }}>&#x20B9; 200</p>
                    <p style={{
                        fontWeight: '400',
                        fontSize: '1.2em'
                    }}>MRP</p>
                    <p style={{
                        fontWeight: '400',
                        fontSize: '1.2em',
                        textDecoration: 'line-through'
                    }}>&#x20B9; 500</p>
                    <p style={{
                        fontWeight: '600',
                        fontSize: '1.2em',
                        color: lightTheme.sideColor
                    }}>(30% OFF)</p>
                </div>
                <span className="txSpan">Inclusive of all taxes</span>

                <div className="addcartcont">
                    <button style={{
                        backgroundColor: lightTheme.sideColor,
                        color: '#ffffff',
                        border: '1px solid ' + lightTheme.sideColor,
                    }}>Add To Cart</button>
                    <button style={{
                         backgroundColor: lightTheme.primaryColor,
                         color: '#232323',
                         border: '2px solid ' + lightTheme.sideColor,
                    }}>Buy Now</button>
                </div>

                <h4 className="product-subtitle">Info</h4>
                <p className="product-subdes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut repellendus ex iste accusamus sequi rerum reiciendis voluptatibus eveniet doloribus! Porro quo nostrum necessitatibus aperiam beatae possimus, temporibus recusandae nam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, rerum dolor tempore asperiores est suscipit, animi officia quam, minus deserunt porro possimus quas! Molestias nisi, officiis incidunt reiciendis quidem blanditiis.</p>

                <h4 className="product-subtitle">Ingredients</h4>
                <ul className="product-item-list">
                    <li>Ingredient 1</li>
                    <li>Ingredient 1</li>
                    <li>Ingredient 1</li>
                    <li>Ingredient 1</li>
                </ul>

                <h4 className="product-subtitle">Benefits</h4>
                <ul className="product-item-list">
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quas aspernatur nihil iste vel placeat est iusto debitis sims</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quas aspernatur nihil iste vel placeat est iusto debitis sims</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quas aspernatur nihil iste vel placeat est iusto debitis sims</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quas aspernatur nihil iste vel placeat est iusto debitis sims</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quas aspernatur nihil iste vel placeat est iusto debitis sims</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quas aspernatur nihil iste vel placeat est iusto debitis sims</li>
                </ul>

                <h4 className="product-subtitle">User Feedbacks</h4>

                <CommentSection comments={[
                    {
                        id: 0,
                        comment: 'lorem ipsum...',
                        user: 'someone_1',
                        timestamp: 'April 8 2023',
                        rating: 3
                    },
                    {
                        id: 1,
                        comment: 'lorem ipsum...',
                        user: 'someone_2',
                        timestamp: 'April 8 2023',
                        rating: 4
                    },
                ]}/>

            </div>
        </div>


        <Footer />
    </section>
}


export default ProductDet;