import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getResponseData = (response) => response.data;

const getAll = () => axios.get(baseUrl).then(getResponseData);

const create = (person) => axios.post(baseUrl, person).then(getResponseData);

const update = (id, person) =>
  axios.put(`${baseUrl}/${id}`, person).then(getResponseData);

const destroy = (id) => axios.delete(`${baseUrl}/${id}`).then(getResponseData);

export default { getAll, create, update, destroy };
