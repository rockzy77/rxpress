import { lightTheme } from "./Colors";


const ProductGrid = (props) => {
    return  <div className="categoryProductGrid">
    {
        props.products.map(item => {
            return <ProductCard 
            image={process.env.PUBLIC_URL + "/Assets/main.jpg"}
            title={"Women leather bag"}
            des={"Lorem ipsum dolor sit amet"}
            price={230.99}
            />
        })
    }
</div>
}

const ProductCard = (props) => {
    return <div className="product-card">
    <div className="product-tumb">
        <img src={props.image} alt="" />
    </div>
    <div className="product-details">
        <h4 style={{
            color: lightTheme.secondaryColor
        }}>{props.title}</h4>
        <p>{props.des}</p>
        <div className="product-bottom-details">
            <div style={{
                color: lightTheme.sideColor
            }} className="product-price">${props.price}</div>

        </div>
    </div>
</div>
}

export {ProductCard, ProductGrid};