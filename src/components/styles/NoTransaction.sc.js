import styled from "styled-components";

const NoTransaction = styled.p`
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  font-size: 20px;
  line-height: 23px;
  color: ${props => props.theme.gray};
`;

export default NoTransaction;
