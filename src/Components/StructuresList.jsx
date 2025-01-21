import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function StructuresList() {
  let pageSlice = useSelector((state) => state.page.page);
  const responseSlice = useSelector((state) => state.response.responses);

  if (!responseSlice[pageSlice]) {
    return null;
  }
  return (
    <>
      <Row>
        <Col span={8}>entry_id</Col>
        <Col span={8}>name</Col>
        <Col span={8}>spacegroup</Col>
      </Row>
      {responseSlice[pageSlice].data.map((value, index) => {
        let link = `${pageSlice}/${index}`;

        return (
          <Link to={link}>
            <Row key={value.entry_id}>
              <Col span={8}>
                <p>{value.entry_id}</p>
              </Col>
              <Col span={8}>
                <p>{value.name}</p>
              </Col>
              <Col span={8}>
                <p>{value.spacegroup}</p>
              </Col>
            </Row>
          </Link>
        );
      })}
    </>
  );
}
