import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import GlobalContext from "../contexts/GlobalContext";
import Title from "../styles/Title.sc";
import Linker from "../styles/Linker.sc";
import Form from "../styles/Form.sc";
import {login} from "../../services/api";

export default function Login() {
  const {setLogin} = useContext(GlobalContext);
  const [form, setForm] = useState({email: "", password: ""});

  const navigate = useNavigate();
  const inputs = [
    {placeholder: "E-mail", type: "email", name: "email"},
    {placeholder: "Senha", type: "password", name: "password"},
  ];

  async function submitForm(event) {
    event.preventDefault();

    try {
      const {data} = await login(form);
      setLogin(data);
      navigate("/wallet");
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
        <Link to={"/signup"}>Primeira vez? Cadastre-se!</Link>
      </Linker>
    </>
  );
}
