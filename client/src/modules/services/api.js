import { callApi } from "../../shared/helpers";
import { apiConfig } from "../../shared/constants";

export const fetchServices = () =>
  callApi(apiConfig.services, {
    method: "GET",
  });
