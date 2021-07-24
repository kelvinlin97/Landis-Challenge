import React from "react"
import { connect } from "react-redux";
import { fetchAccounts } from "../redux/accounts"

class Accounts extends React.Component {
  componentDidMount() {
    this.props.getAccounts();
  }
  render(){
    let accounts = this.props.accounts;
    console.log(accounts)
    return (
      'no'
    )
  }
}

const mapState = (state) => {
  return {
    accounts: state.accounts,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getAccounts: () => dispatch(fetchAccounts())
  }
}

export default connect(mapState, mapDispatch)(Accounts)
