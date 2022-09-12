import {useContext, useEffect, useState} from "react";
import GlobalContext from "./contexts/GlobalContext";
import {listTransactions} from "../services/api";
import Transaction from "./Transaction";
import WrapperTransactions from "./styles/WrapperTransactions.sc";
import NoTransaction from "./styles/NoTransaction.sc";

export default function Transactions() {
  const [transactions, setTransactions] = useState(null);
  const {login} = useContext(GlobalContext);

  useEffect(() => {
    const promise = listTransactions(login.token);
    promise.then(response => setTransactions(response.data));
  }, []);

  let saldo = 0;
  if (transactions) {
    saldo = transactions.reduce((ac, transaction) => {
      if (transaction.type === "income") {
        return ac + transaction.amount;
      }
      return ac - transaction.amount;
    }, 0);
  }

  return (
    <WrapperTransactions isPositive={saldo >= 0}>
      {!transactions ? (
        ""
      ) : transactions.length === 0 ? (
        <NoTransaction>Não há registros de entrada ou saída</NoTransaction>
      ) : (
        transactions.map(transaction => (
          <Transaction key={transaction._id} {...transaction} setTransactions={setTransactions} />
        ))
      )}
      {transactions && transactions.length !== 0 ? (
        <div className={"bank"}>
          <h2>Saldo</h2>
          <p>{saldo.toFixed(2).replace(".", ",")}</p>
        </div>
      ) : (
        ""
      )}
    </WrapperTransactions>
  );
}
