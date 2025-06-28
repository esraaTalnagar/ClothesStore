import Logo from "@assets/svg/logo.svg?react";
import { useAppSelector } from "@store/hooks";
import styles from "./styles.module.css";

const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  const CartItem = useAppSelector((state) => state.Cart.items);
  console.log(CartItem);
  const totalQuantity = Object.values(CartItem).reduce((acc, val) => {return acc + val}, 0);
  console.log(totalQuantity);
  return (
    <div className={basketContainer}>
      <Logo />
      <div className={basketQuantity}>0</div>
    </div>
  );
};

export default HeaderBasket;
