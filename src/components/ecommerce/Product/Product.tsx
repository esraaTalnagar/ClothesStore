import { Button , Spinner} from "react-bootstrap";
import { addToCart as AddToCart } from "@store/Cart/CartSlice";
import { useAppDispatch } from "@store/hooks";
import styles from "./styles.module.css";
import type { TProduct } from "@customTypes/product";
import { useEffect, useState, memo } from "react";

const { product, productImg, addToCart , maxQuantity } = styles;


const Product = memo(({ title, price, img, id, max, quantity }: TProduct) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const reamainingQuantity = max - (quantity ?? 0);
  const reachedMax = reamainingQuantity <= 0 ? true : false;

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(AddToCart(id));
    setIsBtnDisabled(true);
  };
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price} EG</h3>
      <p className={reachedMax ? maxQuantity : ""}>
        {reachedMax ? "Reached max quantity" : `You can add ${reamainingQuantity} items`}
      </p>
      <Button
        variant="info"
        className={addToCart}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || reachedMax}
      >
        {isBtnDisabled ? (
          <>
            {" "}
            <Spinner animation="border" size="sm" /> Loading
          </>
        ) : (
          " Add to cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
