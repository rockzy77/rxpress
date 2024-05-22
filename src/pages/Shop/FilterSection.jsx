import { useState } from "react";
import { NavLink } from "react-router-dom";


const FilterSection = (props) => {

    const categories = [
        'Diabetes Care',
        'Heart Care',
        'Liver Care',
        'Stomach Care',
        'Kidney Care',
        'Eye Care',
        'Respiratory Care'
    ];

    const brands = [
        'ABC',
        'XYZ',
        "HJFS",
        "HYSFY"
    ];

    const priceRange = [
        'Rs 400 - Rs 1500',
        'Rs 1500 - Rs 3500',
        'Rs 3500 - Rs 5000',
        'Rs 5000 +',
    ];


    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState([]);

    return <div className="sideBar">
        <h3 className="filterTitle">Filters</h3>
        {/* Category */}
        <h4 className="filterSubTitle">Categories</h4>
        <ul className="filterList">

            {
                categories.map((item) => {
                    return <li><NavLink className={`filterListA ${props.category === item ? 'selected' : ''}`}>{item}</NavLink></li>
                })
            }
        </ul>

        {/* Brands */}
        <h4 className="filterSubTitle">Brands</h4>

        {
            brands.map((item) => {
                return <div className="category">
                    <input onChange={(e) => {
                        if (e.target.checked) {
                            var t = selectedCategories;
                            t.push(item);
                            setSelectedCategories(t);
                        }
                        else {
                            var t1 = selectedCategories;
                            var ind = t1.indexOf(item);
                            t1 = t1.slice(ind, 1);
                            setSelectedCategories(t1);
                        }
                    }} defaultChecked={selectedCategories.includes(item)} type="checkbox" name="cat" id={item + "cat"} />
                    <label className={`catlab light`} htmlFor={item + "cat"}>{item}</label>
                </div>
            })
        }


        {/* Price Range */}
        <h4 className="filterSubTitle">Price Range</h4>

        {
            priceRange.map((item) => {
                return <div className="category">
                    <input onChange={(e) => {
                        if (e.target.checked) {
                            var t2 = selectedPriceRange;
                            t2.push(item);
                            setSelectedPriceRange(t2);
                        }
                        else {
                            var t3 = selectedCategories;
                            var ind = t3.indexOf(item);
                            t3 = t3.slice(ind, 1);
                            setSelectedPriceRange(t3);
                        }
                    }} defaultChecked={selectedPriceRange.includes(item)} type="checkbox" name="cat" id={item + "cat"} />
                    <label className={`catlab light`} htmlFor={item + "cat"}>{item}</label>
                </div>
            })
        }


    </div>
}

export default FilterSection;