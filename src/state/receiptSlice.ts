import { createSlice } from "@reduxjs/toolkit";
import { stateType } from "./store";
import { statusOption } from "../actions/statusOption";
import { productType } from "./productSlice";
import { getAllReceipts, postReceipt } from "../actions/receiptsAction";

type receiptType = {
  id?: number | string;
  product: productType;
  quantityAdded: number;
  date?: string;
};

interface initialStateType {
  receipts: receiptType[];
  status: statusOption;
  error: string | null;
}

const initialState: initialStateType = {
  receipts: [],
  status: statusOption.IDLE,
  error: null,
};

const receiptSlice = createSlice({
  name: "receipt",
  initialState,
  reducers: {},
  //GET RECEIPTS
  extraReducers: (builder) => {
    builder.addCase(getAllReceipts.pending, (state, action) => {
      state.status = statusOption.LOADING;
    });
    builder.addCase(getAllReceipts.fulfilled, (state, action) => {
      state.status = statusOption.SUCCEEDED;
      state.receipts = action.payload;
    });
    builder.addCase(getAllReceipts.rejected, (state, action) => {
      state.status = statusOption.FAILED;
      state.receipts = [];
    });

    //POST RECEIPTS
    builder.addCase(postReceipt.pending, (state) => {
      state.status = statusOption.LOADING;
    });
    builder.addCase(postReceipt.fulfilled, (state, action) => {
      state.status = statusOption.SUCCEEDED;
      state.receipts.push(action.payload);
    });
    builder.addCase(postReceipt.rejected, (state) => {
      state.status = statusOption.FAILED;
      state.error = "Sorry, something went wrong!";
    });
  },
});

export default receiptSlice.reducer;

export type { receiptType };

export const getReceipts = (state: stateType) => state.receipts.receipts;
export const getReceiptStatus = (state: stateType) => state.receipts.status;
export const getReceiptError = (state: stateType) => state.receipts.error;
