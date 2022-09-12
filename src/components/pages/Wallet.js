import {useContext} from "react";
import {RiLogoutBoxRLine} from "react-icons/ri";
import GlobalContext from "../contexts/GlobalContext";
import {FiPlusCircle, FiMinusCircle} from "react-icons/fi";
import Page from "../styles/Page.sc";
import {Link} from "react-router-dom";

export default function MyWallet() {
  const {login} = useContext(GlobalContext);

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
