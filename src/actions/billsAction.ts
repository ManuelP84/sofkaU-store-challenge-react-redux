import { createAsyncThunk } from "@reduxjs/toolkit";
import { billType } from "../state/billSlice";

const GET_ALL_BILLS =
  "https://store-management-challenge.herokuapp.com/v1/api/get/bills";
const POST_BILL_URL =
  "https://store-management-challenge.herokuapp.com/v1/api/save/bill/";

//GET Action
const getAllBills = createAsyncThunk("getAllBills", async () => {
  const response = await fetch(GET_ALL_BILLS);
  return (await response.json()) as billType[];
});

//POST Action
const postBill = createAsyncThunk("saveBill", async (bill: billType) => {
  const response = await fetch(POST_BILL_URL, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(bill),
  });
  return (await response.json()) as billType;
});

export { getAllBills };
export { postBill };
