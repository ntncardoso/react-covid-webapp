import React from 'react';
import {Container} from 'react-bootstrap'
import {  Route, Switch, BrowserRouter} from 'react-router-dom'
//import './App.css';
import NavRender from './Nav'

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

    return(
      <BrowserRouter>
      <Container className="container-fluid h-100 bg-dark">
        <div className="row h-100 p-2">
          <div className="col-md-3 h-100 p-2">
            <div className="h-5">
             <NavRender />
            </div>
            <div className="h-95">
              <Switch>
                <Route path="/Cases">
                </Route>
                <Route path="/Deaths">
                </Route>
                <Route path="/Recovered">
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Container>
      </BrowserRouter>
    )
  }

}



export default App;
