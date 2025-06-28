import { Row, Col } from "react-bootstrap";

type GridListProps<T> = {
    records: T[],
    renderItem: (record: T) => React.ReactNode;
}
type HasId = {id?: number};
const GridList = <T extends HasId>({ records, renderItem }: GridListProps<T>) => {
    const CategoriesList = (records.length > 0
        ? records.map((record) => (
            <Col
                xs={6}
                md={3}
                className="d-flex justify-content-center mb-5 mt-2"
                key={record.id}
            >
                {renderItem(record)}
            </Col>
        ))
        : "There are no Categories"
    );
    return <Row>{CategoriesList}</Row>;
};

export default GridList
