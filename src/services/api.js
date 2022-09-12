import axios from "axios";

function login(data) {
  return axios.post(`${process.env.REACT_APP_API}/login`, data);
}

function signup(data) {
  return axios.post(`${process.env.REACT_APP_API}/signup`, data);
}

function logout(token) {
  return axios.post(
    `${process.env.REACT_APP_API}/logout`,
    {},
    {
      headers: {Authorization: `Bearer ${token}`},
    }
  );
}

function listTransactions(token) {
  return axios.get(`${process.env.REACT_APP_API}/transaction`, {
    headers: {Authorization: `Bearer ${token}`},
  });
}

function makeTransaction(data, token) {
  return axios.post(`${process.env.REACT_APP_API}/transaction`, data, {
    headers: {Authorization: `Bearer ${token}`},
  });
}

function editTransaction(data, walletId, token) {
  return axios.put(`${process.env.REACT_APP_API}/transaction`, data, {
    headers: {Authorization: `Bearer ${token}`, Wallet: walletId},
  });
}

function delTransaction(walletId, token) {
  return axios.delete(`${process.env.REACT_APP_API}/transaction`, {
    headers: {Authorization: `Bearer ${token}`, Wallet: walletId},
  });
}

export {login, signup, logout, makeTransaction, editTransaction, listTransactions, delTransaction};
