import axios from "axios";
const GET_ACCOUNTS = "GET_ACCOUNTS";

export const setAccounts = (accounts) => {
  return {type: GET_ACCOUNTS, accounts}
}

export const fetchAccounts = () => {
  return async(dispatch) => {
    try {
      const { data } = await axios.get("/api/accounts")
      console.log(data)
      dispatch(setAccounts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = [];

export default function accountsReducer(state = initialState, action) {
  switch(action.type){
    case GET_ACCOUNTS:
      return action.accounts;
    default:
      return state;
  }
}
