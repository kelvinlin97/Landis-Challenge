import Card from 'react-bootstrap/Card'
import ProgressBar from './Indicator.js'
import ReactTooltip from "react-tooltip";

const AccountCard = (props) => {
  const account = props.account.data;
  const strNumber = JSON.stringify(account.phone)
  const phoneNumber = strNumber.slice(0, 3) + '-' + strNumber.slice(3, 6) + '-' + strNumber.slice(6, strNumber.length)
  const indicateMortgage = props.indicateMortgage;
  const mortgageReadiness = indicateMortgage(account.credit, account.balance)
  return (
    <div>
      <Card
        bg='primary'
        text='white'
        style={{ width: '14rem' }}
        id="container-card"
      >
        <Card.Body id="card-body">
          <Card.Title id="card-title">{account.name_first + " " + account.name_last}</Card.Title>
          <Card.Img variant="top" src={account.picture} id="card-image" />
          <Card.Link> {account.email} </Card.Link>
          <Card.Subtitle> {phoneNumber} </Card.Subtitle>
            <ProgressBar bgcolor="#6203fc" completed={mortgageReadiness} />
            <img src="https://i.imgur.com/8zIgiMB.png" id="question-mark" data-tip data-for="mortgageTip" class="help-tip"></img>
            <ReactTooltip
            id="mortgageTip"
            place="top"
            effect="solid">
              The mortgage indicator is calculated using the account's credit score and savings balance.
          </ReactTooltip>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AccountCard
