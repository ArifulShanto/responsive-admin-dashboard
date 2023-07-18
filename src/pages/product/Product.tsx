import Single from "../../component/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

const Product = () => {

    //fetch data and send to single

    return (
        <div className="product">
            <Single {...singleProduct} />
        </div>
    );
};

export default Product;