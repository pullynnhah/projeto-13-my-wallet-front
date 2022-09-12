import {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {RiLogoutBoxRLine} from "react-icons/ri";
import {FiPlusCircle, FiMinusCircle} from "react-icons/fi";

import GlobalContext from "../contexts/GlobalContext";
import Page from "../styles/Page.sc";
import {logout} from "../../services/api";

export default function Wallet() {
  const {login} = useContext(GlobalContext);

  const navigate = useNavigate();

  async function exit() {
    try {
      if (window.confirm("Deseja mesmo sair?")) {
        await logout(login.token);
        navigate("/");
      }
    } catch (e) {
      alert("Não é possível fazer Logout!");
    }
  }

  return (
    <Page>
      <h1>Olá, {login.name}</h1>
      <RiLogoutBoxRLine className={"icon"} onClick={exit} />

      <div></div>
      <Link to={"/balance/new/income"}>
        <button>
          <FiPlusCircle className={"icon"} />
          Nova
          <br />
          entrada
        </button>
      </Link>
      <Link to={"/balance/new/expense"}>
        <button>
          <FiMinusCircle className={"icon"} />
          Nova
          <br />
          saída
        </button>
      </Link>
    </Page>
  );
}
