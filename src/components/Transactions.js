import {useContext, useEffect, useState} from "react";
import GlobalContext from "./contexts/GlobalContext";
import {listTransactions} from "../services/api";
import Transaction from "./Transaction";
import WrapperTransactions from "./styles/WrapperTransactions.sc";

export default function Transactions() {
  const [transactions, setTransactions] = useState(null);
  const {login} = useContext(GlobalContext);

  useEffect(() => {
    const promise = listTransactions(login.token);
    promise.then(response => setTransactions(response.data));
  }, []);

  return (
    <WrapperTransactions>
      {!transactions ? "" : transactions.map(transaction => <Transaction {...transaction} />)}
    </WrapperTransactions>
  );
}
