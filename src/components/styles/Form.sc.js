import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;

  input {
    width: 87vw;
    height: 58px;

    background: ${props => props.theme.white};
    color: ${props => props.theme.black};
    font: 20px/23px "Raleway", sans-serif;
    border-radius: 5px;
    padding-left: 15px;
    text-align: left;
  }

  input::placeholder {
    color: ${props => props.theme.gray};
    font: 20px/23px "Raleway", sans-serif;
  }

  button {
    width: 87vw;
    height: 46px;

    color: ${props => props.theme.white};
    background: ${props => props.theme.violet};

    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    display: block;
    border-radius: 5px;
    margin: 0 auto 36px;
  }
`;

export default Form;
