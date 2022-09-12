import {useContext} from "react";
import {Link} from "react-router-dom";
import {RiLogoutBoxRLine} from "react-icons/ri";
import {FiPlusCircle, FiMinusCircle} from "react-icons/fi";

import GlobalContext from "../contexts/GlobalContext";
import Page from "../styles/Page.sc";

export default function Wallet() {
  const {login} = useContext(GlobalContext);

  console.log(login);
  return (
    <Page>
      <h1>Olá, {login.name}</h1>
      <RiLogoutBoxRLine className={"icon"} />

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
