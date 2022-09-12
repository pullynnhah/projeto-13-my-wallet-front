import {VscChromeClose} from "react-icons/vsc";
import WrapperTransaction from "./styles/WrapperTransaction.sc";

export default function Transaction({date, description, amount, type}) {
  return (
    <WrapperTransaction type={type}>
      <div>
        <p className={"date"}>{date}</p>
        <p className={"description"}>{description}</p>
      </div>
      <div>
        <p className={"amount"}>{amount}</p>
        <VscChromeClose className={"icon"} />
      </div>
    </WrapperTransaction>
  );
}
