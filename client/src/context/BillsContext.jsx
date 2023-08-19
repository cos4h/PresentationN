import { createContext, useContext, useState } from "react";
import { createBillRequest} from "../api/bills.js";

const BillContext = createContext();

export const useBills = () => {
  const context = useContext(BillContext);
  if (!context) {
    throw new Error("useBills must be used within an BillProvider");
  }
  return context;
}
export const BillProvider = ({ children}) => {
  const [bills, setBills] = useState([]);

  const createBill = async (bill) => {
    const res = await createBillRequest(bill);
    console.log(res);
  }
  return(
    <BillContext.Provider value={{
      bills,
      createBill
    }}>
      {children}
    </BillContext.Provider>
  )
}