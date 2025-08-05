import Logo from "@assets/svg/logo.svg?react";
import { useAppSelector } from "@store/hooks";
import styles from "./styles.module.css";
import {getTotalQuantitySelector} from "@store/Cart/selectors/index";
import { useState, useEffect } from "react";

const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } =
  styles;

const HeaderBasket = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const totalQuantity = useAppSelector(getTotalQuantitySelector);

  useEffect(() => {
    if (totalQuantity > 0) {
      setIsAnimated(true);
      const timer = setTimeout(() => {
        setIsAnimated(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [totalQuantity]);

  return (
    <div className={basketContainer}>
      <div className={basketCart}>
        <Logo title="basket icon" />
        <div
          className={`${basketQuantity} ${isAnimated ? pumpCartQuantity : ""}`}
        >
          {totalQuantity}
        </div>
      </div>
      <h3>Basket</h3>
    </div>
  );
};

export default HeaderBasket;
