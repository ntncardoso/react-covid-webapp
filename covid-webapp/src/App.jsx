import React from 'react';
import {Container, Col, Nav, Row } from 'react-bootstrap'
import {  Route, Switch, BrowserRouter} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
//import './App.css';
import CasesList from './Cases.jsx'
import DeathsList from './Deaths'
import RecoveredList from './Recovers'

const URI = 'https://disease.sh/v2/all'

class App extends React.Component {

  state = {
    data: {},
  }

  getData = () => {
    fetch(URI)
      .then(response => response.json())
      .then(num => {
        this.setState({ data: num})
      })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    let Cases = () => <h1>{this.state.data.cases}</h1>
    let Deaths = () => <h1>{this.state.data.deaths}</h1>
    let Recovered = () => <h1>{this.state.data.recovered}</h1>

    return(
      <BrowserRouter>
      <Container className="container-fluid h-100 bg-dark">
        <Row className="row h-100 p-2">
          <Col className="col-md-3 h-100 p-2">
            <div className="h-5">
              <Nav className="nav nav-tabs h-100 border-0 d-flex bg-light" defaultActiveKey="/cases">
                <Nav.Item className="nav-item h-100 flex-fill m-0">
                  <LinkContainer to="/cases">
                    <Nav.Link>Cases</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item className="nav-item h-100 flex-fill m-0" >
                  <LinkContainer to="/deaths">
                    <Nav.Link>Deaths</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item className="nav-item h-100 flex-fill m-0">
                  <LinkContainer to="/recovered">
                    <Nav.Link>Recovered</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </Nav>
            </div>
            <div className="h-95">
              <Switch>
                <Route path="/cases">
                  <CasesList />
                </Route>
                <Route path="/deaths">
                  <DeathsList />
                </Route>
                <Route path="/recovered">
                  <RecoveredList  />
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
      </BrowserRouter>
    )
  }

}



export default App;
