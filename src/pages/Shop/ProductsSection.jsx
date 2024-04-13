import { ProductGrid } from "../../components/ProductGrid";


const ProductsSection = (props) => {
    return <div className="productsBar">
        <h1 className="shopTitle">{props.category}</h1>

        <ProductGrid products={[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}/>

        
    </div>
}

export default ProductsSection;