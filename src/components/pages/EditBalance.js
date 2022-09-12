import {useContext, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

import GlobalContext from "../contexts/GlobalContext";
import Form from "../styles/Form.sc";
import BalanceTitle from "../styles/BalanceTitle.sc";
import {editTransaction} from "../../services/api";

export default function EditBalance() {
  const {state} = useLocation();
  const {login} = useContext(GlobalContext);
  const {type} = useParams();
  const [form, setForm] = useState({amount: state.amount, description: state.description});

  const title = type === "income" ? "entrada" : "saída";
  const inputs = [
    {placeholder: "Valor", name: "amount"},
    {placeholder: "Descrição", name: "description"},
  ];

  const navigate = useNavigate();

  async function submitForm(event) {
    event.preventDefault();
    try {
      await editTransaction({...form, type}, state.walletId, login.token);
      navigate("/wallet");
    } catch (e) {
      alert("Verifique seus dados!");
    }
  }

  return (
    <>
      <BalanceTitle>{`Editar ${title}`}</BalanceTitle>
      <Form onSubmit={submitForm}>
        {inputs.map((input, index) => (
          <input
            key={index}
            placeholder={input.placeholder}
            type={"text"}
            value={form[input.name]}
            name={input.name}
            onChange={e => setForm({...form, [e.target.name]: e.target.value})}
            required
          />
        ))}
        <button>{`Atualizar ${title}`}</button>
      </Form>
    </>
  );
}
