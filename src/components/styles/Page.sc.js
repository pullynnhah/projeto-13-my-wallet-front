import styled from "styled-components";

const Page = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "title logout"
    "entries entries"
    "new-entry new-exit";
  padding: 24px;
  gap: 18px;
  align-items: center;

  h1 {
    color: ${props => props.theme.white};
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
  }

  .icon {
    justify-self: end;
    color: ${props => props.theme.white};
    font-size: 24px;
  }
  div {
    grid-area: entries;
    background-color: ${props => props.theme.white};
    height: calc(100vh - 220px);
    border-radius: 5px;
  }

  button {
    width: 100%;
    height: 114px;
    background-color: ${props => props.theme.violet};
    color: ${props => props.theme.white};
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;

    display: flex;
    flex-direction: column;
    padding: 11px;
    justify-content: space-between;
    border-radius: 5px;
  }
`;
export default Page;
