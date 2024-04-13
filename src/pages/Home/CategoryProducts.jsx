import { useEffect, useState } from "react";
import { lightTheme } from "../../components/Colors";
import { MdKeyboardArrowRight } from "react-icons/md";


const CategoryProduct = (props) => {

    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(()=>{
        setSelectedCategory(props.categories[0]);
    }, [props.categories]);


    return <>
    {/* Category Section */}
    <div style={{
        paddingTop: props.pup === false ? 0 : '2%'
    }} className="categorySection">
            <h2>{props.title}</h2>
            <div className="categoryRow">

                {
                    props.categories.map((item) => {
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
                    props.categoryProducts.map(item => {
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
        </div></>
}

export default CategoryProduct;