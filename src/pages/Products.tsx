import {  useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import { actGetProductByCatPrefix , cleanUp } from "@store/Products/ProductsSlice";
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedback";

const Products = () => {
  const Params = useParams();
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.Products);
  const ProductsList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
            key={record.id}
          >
            <Product {...record} />
          </Col>
        ))
      : "There are no Products";

  useEffect(() => {
      dispatch(actGetProductByCatPrefix(Params.prefix as string));
      return () => {
        dispatch(cleanUp());
      };
  }, [dispatch, Params ]);
  return (
    <Container>
      <Loading loading={loading} error={error}>
      <Row>{ProductsList}</Row>
    </Loading>
    </Container>
  );
};

export default Products;
