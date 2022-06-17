import * as React from "react";
import { billType } from "../state/billSlice";

interface IBillProps {
  bill: billType;
}

const Bill: React.FunctionComponent<IBillProps> = ({ bill }) => {
  return (
    <tr>
      <td>{bill.customerName}</td>
      <td>{bill.sellerName}</td>
      <td>{bill.paid}</td>
      <td>{bill.date}</td>
    </tr>
  );
};

export default Bill;
