import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/Categories/CategoriesSlice";
import { Container } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records} = useAppSelector((state) => state.Categories);

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  // const categoriesList = records.length > 0 ? records.map((record) => (
  //   <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={record.id}>
  //     <Category {...record} />
  //   </Col>
  // )): "There are no Categories";

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList records={records} renderItem={(record) => <Category {...record} />} />
      </Loading>
    </Container>
  );
};

export default Categories;
