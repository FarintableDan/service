import { Row } from "../Row/Row";
import { Container } from "../Container/Container";

import "./Table.css";

const Table = ({ data }) => {
  return (
    <Container>
      <table className="table" cellSpacing="0">
          <tbody>
          {data.map((item) => (
              <Row key={item.id} data={item} />
          ))}
          </tbody>
      </table>
    </Container>
  );
};

export default Table;
