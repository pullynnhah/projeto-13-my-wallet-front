import {VscChromeClose} from "react-icons/vsc";
import WrapperTransaction from "./styles/WrapperTransaction.sc";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import GlobalContext from "./contexts/GlobalContext";
import {delTransaction, listTransactions} from "../services/api";

export default function Transaction({_id, date, description, amount, type, setTransactions}) {
  const {login} = useContext(GlobalContext);
  const navigate = useNavigate();

  async function removeItem() {
    if (window.confirm("Deseja mesmo excluir este item?")) {
      try {
        await delTransaction(_id, login.token);
        const {data} = await listTransactions(login.token);
        setTransactions(data);
      } catch (e) {
        alert("Erro ao remover item!");
      }
    }
  }

  return (
    <WrapperTransaction type={type}>
      <div
        onClick={() =>
          navigate(`/balance/edit/${type}`, {state: {amount, description, walletId: _id}})
        }>
        <p className={"date"}>{date}</p>
        <p className={"description"}>{description}</p>
      </div>
      <div>
        <p className={"amount"}>{amount.toFixed(2).replace(".", ",")}</p>
        <VscChromeClose className={"icon"} onClick={removeItem} />
      </div>
    </WrapperTransaction>
  );
}
