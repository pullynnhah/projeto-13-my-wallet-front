import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import GlobalContext from "../contexts/GlobalContext";
import Title from "../styles/Title.sc";
import Linker from "../styles/Linker.sc";
import Form from "../styles/Form.sc";

export default function Login() {
  const {setToken} = useContext(GlobalContext);
  const [form, setForm] = useState({email: "", password: ""});

  const inputs = [
    {placeholder: "E-mail", type: "email", name: "email"},
    {placeholder: "Senha", type: "password", password: "password"},
  ];

  async function submitForm(event) {
    event.preventDefault();

    try {
      const token = await axios.post(process.env.REACT_APP_API, form);
      setToken(token);
    } catch (e) {
      alert("Verifique seus dados!");
    }
  }

  return (
    <>
      <Title>MyWallet</Title>
      <Form onSubmit={submitForm}>
        {inputs.map((input, index) => (
          <input
            key={index}
            placeholder={input.placeholder}
            type={input.type}
            value={form[input.name]}
            name={input.name}
            onChange={e => setForm({...form, [e.target.name]: e.target.value})}
            required
          />
        ))}
        <button type={"submit"}>Entrar</button>
      </Form>
      <Linker>
        <Link to={"/sign-up"}>Primeira vez? Cadastre-se!</Link>
      </Linker>
    </>
  );
}
