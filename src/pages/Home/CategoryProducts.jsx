import { useEffect, useState } from "react";
import { lightTheme } from "../../components/Colors";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ProductGrid } from "../../components/ProductGrid";


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
            
            <ProductGrid products={props.categoryProducts}/>

            <div className="seeMorecont">
                <NavLink to={`${selectedCategory === 'All Diseases' ?  `/search` : `/search/${selectedCategory}`}`}>
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
                </NavLink>
            </div>
        </div></>
}

export default CategoryProduct;