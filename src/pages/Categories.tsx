import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/Categories/CategoriesSlice";
import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { Loading } from "@components/feedback";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records} = useAppSelector((state) => state.Categories);

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  const categoriesList = records.length > 0 ? records.map((record) => (
    <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={record.id}>
      <Category {...record} />
    </Col>
  )): "There are no Categories";

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <Row>{categoriesList}</Row>
      </Loading>
    </Container>
  );
};

export default Categories;
