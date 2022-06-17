import * as React from "react";
import Receipt from "../components/Receipt";
import { dispatchWithType } from "../state/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { statusOption } from "../actions/statusOption";
import { getAllReceipts } from "../actions/receiptsAction";
import ReceiptForm from "./ReceiptForm";
import {
  getReceipts,
  getReceiptStatus,
  getReceiptError,
  receiptType,
} from "../state/receiptSlice";

interface IReceiptListProps {}

const ReceiptList: React.FunctionComponent<IReceiptListProps> = (props) => {
  const dispatch = dispatchWithType();
  const receipts = useSelector(getReceipts);
  const receiptsStatus = useSelector(getReceiptStatus);
  const receiptError = useSelector(getReceiptError);

  useEffect(() => {
    if (receiptsStatus === statusOption.IDLE) {
      dispatch(getAllReceipts());
    }
  }, [dispatch]);

  return (
    <>
      <ReceiptForm />
      <div className="row">
        <div className="col-md">
          <div className="card card-body">
            <h5>Receipts</h5>
          </div>
          <div className="card card-body">
            <table className="justTable">
              <tbody>
                <tr>
                  <th>Receipt Id</th>
                  <th>Provider Id</th>
                  <th>Provider name</th>
                  <th>Product name</th>
                  <th>Product quantity</th>
                  <th>Date</th>
                </tr>
              </tbody>
              <tbody>
                {!receiptError &&
                  receipts.map((receipt: receiptType) => (
                    <Receipt key={receipt.id} receipt={receipt} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiptList;
