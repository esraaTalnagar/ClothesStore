import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import {
  actGetProductByCatPrefix,
  cleanUp,
} from "@store/Products/ProductsSlice";
import { Container } from "react-bootstrap";
import { GridList, Heading } from "@components/common";
import { Loading } from "@components/feedback";
import { Product } from "@components/ecommerce";

const Products = () => {
  const Params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.Products);
  const cartItems = useAppSelector((state) => state.Cart.items);

  const productFullInfo = records.map((el) => ({
    ...el,
    quantity: el.id !== undefined ? cartItems[el.id as keyof typeof cartItems] || 0 : 0,
  }));

  useEffect(() => {
    dispatch(actGetProductByCatPrefix(Params.prefix as string));
    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch, Params]);

  return (
    <>
      <Heading><span className="text-capitalize">{Params.prefix}</span> Products</Heading>
      <Container>
        <Loading loading={loading} error={error}>
          <GridList
            records={productFullInfo} // use productFullInfo instead of records
            renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
    </>
  );
};

export default Products;
