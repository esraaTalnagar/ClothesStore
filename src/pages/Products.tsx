import {  useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import { actGetProductByCatPrefix , cleanUp } from "@store/Products/ProductsSlice";
import { Container } from "react-bootstrap";
import { GridList } from "@components/common";
import { Loading } from "@components/feedback";
import { Product } from "@components/ecommerce";

const Products = () => {
  const Params = useParams();
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.Products);


  useEffect(() => {
      dispatch(actGetProductByCatPrefix(Params.prefix as string));
      return () => {
        dispatch(cleanUp());
      };
  }, [dispatch, Params ]);
  return (
    <Container>
      <Loading loading={loading} error={error}>
        <Loading loading={loading} error={error}>
          <GridList
            records={records}
            renderItem={(record) => <Product {...record} />}
          />
        </Loading>
      </Loading>
    </Container>
  );
};

export default Products;
