import axios from "./axios.js";

export const getBillsRequest = () => axios.get("/bills");

export const getBillRequest = (id) => axios.get(`/bills/${id}`);

export const createBillRequest = (bill) => axios.post("/bills", bill);

export const updateBillRequest = (bill) =>
  axios.put(`/bills/${bill._id}`, bill);

export const deleteBillRequest = (id) => axios.delete(`/bills/${id}`);
