import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { lightTheme } from "../../components/Colors";
import FilterSection from "./FilterSection";
import ProductsSection from "./ProductsSection";
import Footer from "../../components/Footer";
import { NavBar } from "../../components/NavBar";

const Shop = (props) => {

    const location = useLocation();

    const [isCategoryShop, setIsCategoryShop] = useState(false);

    const [locatedCategory, setLocatedCategory] = useState('');

    useEffect(() => {
        var path = location.pathname;

        if (path.replace("/search", "") === "") {
            setIsCategoryShop(false);
        }
        else {
            setIsCategoryShop(true);
            setLocatedCategory(decodeURI(path.replace("/search/", "")));
        }

    }, [isCategoryShop, location.pathname]);

    return <section className="shopSection" id="shopSection">

        <NavBar />


        <div style={{
            height: 69
        }}></div>
        <div style={{
            backgroundColor: lightTheme.primaryColor,
            color: lightTheme.textColor
        }} className="shopRow">

            {/* Filters */}
            <FilterSection category={locatedCategory} />

            {/* Products */}
            <ProductsSection category={locatedCategory} />





        </div>

        <Footer />
    </section>
}

export default Shop;