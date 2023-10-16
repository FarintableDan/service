import { callApi } from "../../shared/helpers";
import { apiConfig } from "../../shared/constants";

export const fetchDetails = (params) =>
  callApi(apiConfig.services + params.id, {
    method: "GET",
    params,
  });
