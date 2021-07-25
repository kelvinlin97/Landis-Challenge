import React from 'react'
import { connect } from "react-redux";
import { fetchAccounts } from "../redux/accounts"
import { Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import { Doughnut, Scatter } from 'react-chartjs-2'

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: {},
      doughnutData: [],
      scatterData: []
    }
    this.creditStats = this.creditStats.bind(this);
    this.barGraph = this.barGraph.bind(this)
  }

  creditStats(accounts) {
    let averageCredit = 0;
    let averageBalance = 0;
    let totalBalance = 0;
    let totalCredit = 0;
    let dollarUSLocale = Intl.NumberFormat('en-US');
    let balanceDistribution = { '<5k': 0, '5k-15k': 0, '15k+': 0 }
    let plotData = [];
    for (const account of accounts) {
      let curBalance = Number(account.data.balance)
      if (curBalance <= 5000) {
        balanceDistribution['<5k'] += 1
      } else if (curBalance <= 15000) {
        balanceDistribution['5k-15k'] += 1
      } else {
        balanceDistribution['15k+'] += 1
      }
      plotData.push({ x: account.data.credit, y: curBalance })
      totalCredit += account.data.credit
      totalBalance += curBalance
    }
    averageCredit = Math.floor(totalCredit / accounts.length);
    averageBalance = "$" + dollarUSLocale.format(Math.floor(totalBalance / accounts.length))

    let stats = { averageCredit: averageCredit, averageBalance: averageBalance }
    this.barGraph(balanceDistribution)
    this.scatterPlot(plotData)
    this.setState({
      stats: stats
    })
  }
  barGraph(stats) {
    const data = {
      labels: [
        'Less than 5,000',
        '5,000 - 15,000',
        '15,000 and higher'
      ],
      datasets: [{
        label: 'Mortgage scores',
        data: [stats['<5k'], stats['5k-15k'], stats['15k+']],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    }
    this.setState({
      doughnutData: data
    })
  }
  scatterPlot(data) {
    this.setState({ scatterData: data })
  }
  async componentDidMount() {
    await this.props.getAccounts();
    this.creditStats(this.props.accounts)
  }
  render() {
    const doughnutData = this.state.doughnutData
    const scatterData = this.state.scatterData
    console.log(scatterData)
    return (
      <Container fluid={true} id="container">
        <Row md={4} id="row" style={{ display: "flex" }}>
          <Card
            bg='primary'
            text='white'
            id="container-stats"
          >
            <Card.Body id="card-body">
              <Card.Title id="card-balance-title">{this.state.stats.averageBalance} </Card.Title>
              <Card.Subtitle> Average Balance
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card
            bg='primary'
            text='white'
            id="container-stats"
          >
            <Card.Body id="card-body">
              <Card.Title id="card-credit-title">                {this.state.stats.averageCredit}</Card.Title>
              <Card.Subtitle>
                Average Credit
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Row>
        <div className="chart-container">
          <Doughnut
            data={doughnutData}
            options={{
              title: {
                display: true,
                text: 'Average Rainfall per month',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />
        </div>
        <div className="plot-container">
        <Scatter
        data={{
          label: 'Scatter Graph',
          datasets: [{
            data: scatterData,
            label: 'Credit Score (x) and Income (y)',
            borderColor: '#8db1c2',
          }],
          options: {
            showLines: false,
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Income'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Credit Score'
                }
              }]
            }
          }
        }}
      />
        </div>
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

export default connect(mapState, mapDispatch)(Analytics)
