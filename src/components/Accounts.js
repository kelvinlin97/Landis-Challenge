/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { connect } from "react-redux";
import { fetchAccounts } from "../redux/accounts"
import AccountCard from './Cards'
import { Container, Row, Col } from "react-bootstrap";

class Accounts extends React.Component {
  constructor(props){
    super(props);
    this.indicateMortgage = this.indicateMortgage.bind(this);
  }
  indicateMortgage(score, balance) {
    //Mortgage likelihood is scaled from 0 - 100 with equal weight given to balance and credit score
    const typeConvertedBal = Number(balance);
    const scaledCreditScore = score / 850;
    const weightedCredit = scaledCreditScore * 50;
    const scaledBalance = typeConvertedBal / 20000
    const weightedBalance = scaledBalance * 50;
    return Math.floor(weightedCredit + weightedBalance)
  }
  componentDidMount() {
    this.props.getAccounts();
  }
  render() {
    let accounts = this.props.accounts;
    return (
      <Container>
      <Row xs={1} md={2} className="g-4">
        {accounts.map((account, index) => {
          return (
            <Col class="col-md-3">
            <AccountCard account={account} indicateMortgage={this.indicateMortgage} key={index}/>
            </Col>
          )
        })}
      </Row>
      </Container>
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
