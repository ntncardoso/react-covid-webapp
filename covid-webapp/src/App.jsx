import React from 'react';
import {  Route, Switch, BrowserRouter} from 'react-router-dom'
//import './App.css';
import NavRender from './Nav'
import CountryList from './CountryList'

const URI = 'https://disease.sh/v2/all'

class App extends React.Component {
  constructor(props){
    super(props)
    
    
    this.state = {
      data: {},
      activeCase: 'cases',
    }

    this.handleSelectLanguage = this.handleSelectLanguage.bind(this)

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

   handleSelectLanguage(choise) {
        this.setState({
          activeCase: choise
        })
      }

  render() {
    
    return(
      <BrowserRouter>
      <div className="container-fluid h-100 bg-dark">
        <div className="row h-100 p-2">
          <div className="col-md-3 h-100 p-2">
            <div className="h-5">
             <NavRender onSelectLanguage={this.handleSelectLanguage}/>
            </div>
            <div className="h-95" style={{height: '95%'}}>
              <Switch>
                <Route path={'/' + this.state.activeCase}>
                  <CountryList newCase={this.state.activeCase}/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
    )
  }

}



export default App;
