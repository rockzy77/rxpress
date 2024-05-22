import { ProductGrid } from "../../components/ProductGrid";
import PaginationBar from "./PaginationBar";


const ProductsSection = (props) => {
    return <div className="productsBar">
        <h1 className="shopTitle">{props.category}</h1>

        <ProductGrid products={[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}/>

        <div style={{
            height: 20
        }} className="spacer"></div>

        <PaginationBar noOfTile={10}/>

        
    </div>
}

export default ProductsSection;