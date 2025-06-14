import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
const { product, productImg, addToCart } = styles;

const Product = () => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src="/public/images/santhosh-kumar-RqYTuWkTdEs-unsplash.jpg"
          alt="not found"
        />
      </div>
      <h2>Product Title</h2>
      <h3>10 EGP</h3>
      <Button variant="info" className={addToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
