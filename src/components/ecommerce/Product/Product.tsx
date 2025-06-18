import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import type { TProduct } from "@customTypes/product";
const { product, productImg, addToCart } = styles;


const Product = ({title, price, img}: TProduct) => {
  console.log("img:", img);
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <h2>{title}</h2>
      <h3>{price} EG</h3>
      <Button variant="info" className={addToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
