import { Route, Routes } from "react-router-dom";

import { Layout } from "../../components/Layout/Layout";

import DetailsPage from "../../pages/DetailsPage/DetailsPage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import { ErrorPopup } from "../ErrorPopup/ErrorPopup";
import { useSelector } from "react-redux";

const App = () => {
  const requests = useSelector((state) => state.errorHandlers.requests);
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<ServicesPage />} />
        <Route path={"/:id/details"} element={<DetailsPage />} />
      </Routes>
      {!!requests.length && <ErrorPopup requests={requests} />}
    </Layout>
  );
};

export default App;
