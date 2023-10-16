import { Link } from "react-router-dom";

import "./Col.css";

export const Col = ({ data, field }) => {
  if (field === "id") {
    return (
      <td className={`col col_${field}`}>
        <Link to={`/${data}/details`}>{data}</Link>
      </td>
    );
  }
  return <td className={`col col_${field}`}>{data}</td>;
};
