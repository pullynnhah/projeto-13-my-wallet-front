import {useState} from "react";

import Title from "../styles/Title.sc";
import {Link, useNavigate} from "react-router-dom";
import Linker from "../styles/Linker.sc";
import Form from "../styles/Form.sc";
import {signup} from "../../services/api";

export default function Signup() {
  const [form, setForm] = useState({name: "", email: "", password: "", repeatPassword: ""});
  const inputs = [
    {placeholder: "Nome", type: "text", name: "name"},
    {placeholder: "E-mail", type: "email", name: "email"},
    {placeholder: "Senha", type: "password", name: "password"},
    {placeholder: "Confirme a senha", type: "password", name: "repeatPassword"},
  ];

  const navigate = useNavigate();
  async function submitForm(event) {
    event.preventDefault();
    if (form.password !== form.repeatPassword) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      await signup(form);
      navigate("/");
    } catch (e) {
      alert("Verifique seus dados!");
    }
    console.log(form);
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
        <button type={"submit"}>Cadastrar</button>
      </Form>
      <Linker>
        <Link to={"/"}>Já tem uma conta? Entre agora!</Link>
      </Linker>
    </>
  );
}
