import styled from "styled-components";

const WrapperTransaction = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .date {
    color: ${props => props.theme.lightGray};
  }

  .description {
    color: ${props => props.theme.black};
  }

  .amount {
    justify-self: end;
    color: ${props => (props.type === "income" ? props.theme.green : props.theme.red)};
  }

  .icon {
    font-size: 16px;
    color: ${props => props.theme.lightGray};
  }
`;

export default WrapperTransaction;
