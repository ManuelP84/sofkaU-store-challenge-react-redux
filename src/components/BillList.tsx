import * as React from "react";
import { useSelector } from "react-redux";
import { getBills, getBillsStatus, getBillsError } from "../state/billSlice";
import { getAllBills, postBill } from "../actions/billsAction";
import { useEffect } from "react";
import { statusOption } from "../actions/statusOption";
import { dispatchWithType } from "../state/store";
import Bill from "../components/Bill";
import BillForm from "../components/BillForm";

interface IBillListProps {}

const BillList: React.FunctionComponent<IBillListProps> = (props) => {
  const dispatch = dispatchWithType();
  const bills = useSelector(getBills);
  const billStatus = useSelector(getBillsStatus);
  const billError = useSelector(getBillsError);

  useEffect(() => {
    if (billStatus === statusOption.IDLE) {
      dispatch(getAllBills());
    }
  }, [dispatch]);

  return (
    <>
      <BillForm />
      <div className="row">
        <div className="col-md">
          <div className="card card-body">
            <h5>Bills</h5>
          </div>
          <div className="card card-body">
            <table className="justTable">
              <tbody>
                <tr>
                  <th>Customer name:</th>
                  <th>Seller name:</th>
                  <th>Total</th>
                  <th>Date:</th>
                </tr>
              </tbody>
              <tbody>
                {!billError &&
                  bills.map((bill) => <Bill key={bill.id} bill={bill} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillList;
