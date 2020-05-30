import React from 'react';
import {Container, Col, Nav, Row } from 'react-bootstrap'
import {  Route, Switch, BrowserRouter} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
//import './App.css';
import Countries from './Cases.jsx'

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
      <Container fluid>
        <Row>
          <Col sm={4}>
            <Nav fill variant="tabs" defaultActiveKey="/cases">
              <Nav.Item>
                <LinkContainer to="/cases">
                  <Nav.Link>Cases</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/deaths">
                  <Nav.Link>Deaths</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/recovered">
                  <Nav.Link>Recovered</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <Switch>
              <Route path="/cases">
                <Cases />
                <Countries />
              </Route>
              <Route path="/deaths">
                <Deaths />
              </Route>
              <Route path="/recovered">
                <Recovered />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
      </BrowserRouter>
    )
  }

}



export default App;
