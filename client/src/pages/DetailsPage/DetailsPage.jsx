import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Loader } from "../../components/Loader/Loader";
import { Container } from "../../components/Container/Container";
import { Details } from "../../components/Details/Details";

import * as detailsActions from "../../modules/details/actions";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading } = useSelector((state) => state.details);

  const fetchData = () => dispatch(detailsActions.fetchDetails(id));

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => () => dispatch(detailsActions.clearDetails()), []);

  return (
    <Container>
      {!loading && <Details data={data} />}
      {loading && <Loader />}
    </Container>
  );
};

export default DetailsPage;
