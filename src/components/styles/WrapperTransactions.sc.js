import styled from "styled-components";

const WrapperTransactions = styled.div`
  padding: 20px 10px;
  height: 100%;
  position: relative;

  .bank {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 20px;
    left: 10px;
    right: 10px;
  }

  h2 {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
  }

  .bank p {
    font-size: 17px;
    line-height: 20px;
    color: ${props => (props.isPositive ? props.theme.green : props.theme.red)};
  }
`;

export default WrapperTransactions;
