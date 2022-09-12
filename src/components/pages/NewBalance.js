import {useContext, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import GlobalContext from "../contexts/GlobalContext";
import Form from "../styles/Form.sc";
import BalanceTitle from "../styles/BalanceTitle.sc";
import {makeTransaction} from "../../services/api";

export default function NewBalance() {
  const {login} = useContext(GlobalContext);
  const {type} = useParams();
  const [form, setForm] = useState({amount: "", description: ""});

  const title = type === "income" ? "entrada" : "saída";
  const inputs = [
    {placeholder: "Valor", name: "amount"},
    {placeholder: "Descrição", name: "description"},
  ];

  const navigate = useNavigate();
  async function submitForm(event) {
    event.preventDefault();
    await makeTransaction({...form, type}, login.token);
    navigate("/wallet");
  }

  return (
    <>
      <BalanceTitle>{`Nova ${title}`}</BalanceTitle>
      <Form onSubmit={submitForm}>
        {inputs.map((input, index) => (
          <input
            key={index}
            placeholder={input.placeholder}
            type={"text"}
            name={input.name}
            value={form[input.name]}
            onChange={e => setForm({...form, [e.target.name]: e.target.value})}
            required
          />
        ))}
        <button>{`Salvar ${title}`}</button>
      </Form>
    </>
  );
}
