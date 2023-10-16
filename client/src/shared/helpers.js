import { BASE_URL } from "./constants";

export const callApi = (url, params = { method: "GET" }) => {
  return fetch(BASE_URL + url, params);
};

export const onlyUniqueRequests = (currentRequests, newRequests) => {
  if (!currentRequests.length) return [newRequests];
  const result = [...currentRequests];

  currentRequests.forEach((item) => {
    if (item.type !== newRequests.type) {
      result.push(newRequests);
    }
  });
  return result;
};
