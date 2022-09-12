function getMyWalletUser() {
  const data = localStorage.getItem("my-wallet-user");
  return data ? JSON.parse(data) : null;
}

function setMyWalletUser(data) {
  return localStorage.setItem("my-wallet-user", JSON.stringify(data));
}

export {getMyWalletUser, setMyWalletUser};
