import { Col } from "../Col/Col";

export const Row = ({ data }) => {
  return (
    <tr className="row">
      {Object.keys(data).map((item) => (
        <Col key={item} field={item} data={data[item]} />
      ))}
    </tr>
  );
};
