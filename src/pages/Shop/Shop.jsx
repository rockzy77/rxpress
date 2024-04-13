import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { lightTheme } from "../../components/Colors";
import FilterSection from "./FilterSection";
import ProductsSection from "./ProductsSection";

const Shop = (props) => {

    const location = useLocation();

    const [isCategoryShop, setIsCategoryShop] = useState(false);

    const [locatedCategory, setLocatedCategory] = useState('');

    useEffect(()=>{
        var path = location.pathname;

        if(path.replace("/search", "") === ""){
            setIsCategoryShop(false);
        }
        else{
            setIsCategoryShop(true);
            setLocatedCategory(decodeURI(path.replace("/search/", "")));
        }

    }, [isCategoryShop, location.pathname]);

    return <section style={{
        backgroundColor: lightTheme.primaryColor,
        color: lightTheme.textColor
    }} className="shopSection" id="shopSection">

        {/* Filters */}
        <FilterSection />

        {/* Products */}
        <ProductsSection category={locatedCategory} />

    </section>
}

export default Shop;