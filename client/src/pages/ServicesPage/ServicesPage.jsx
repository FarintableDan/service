import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Table from "../../components/Table/Table";
import { Loader } from "../../components/Loader/Loader";

import * as servicesActions from "../../modules/services/actions";

const ServicesPage = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.services);

  const fetchData = () => dispatch(servicesActions.fetchServices());

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => () => dispatch(servicesActions.clearServices()), []);

  return (
    <>
      {loading && <Loader />}
      {!loading && <Table data={data} />}
    </>
  );
};

export default ServicesPage;
