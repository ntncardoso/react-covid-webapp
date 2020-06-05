import React from 'react';
import Search from './Search';

const URI = 'https://disease.sh/v2/countries'



function CountryGrid(props) {
  
  return(
    <div className="card h-100 border-0 rounded-0">
      <Search />
      <ul className="list-group list-group-flush overflow-auto h-100" >
                {props.countries.map(({country, countryInfo, cases, deaths, recovered}) => (
                  <a className="text-decoration-none" href="" key={country} >
                    <li className="list-group-item p-0 border-0" >
                      <div className="d-flex justify-content-center align-items-center list-group-item justify-content-between rounded-0 bg-light">
                        <span className="text-dark">
                          <span className="text-info"> 
                            {cases} </span>
                          in {country}
                        </span>
                        <img className="flag float-right" style={{height: 'auto', margin: '5px 0', width: '10%'}}src={countryInfo.flag} alt={country}/>
                      </div>
                    </li>
                  </a>
                ))}

      </ul>
    </div>
  )
}

class CountryList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            loading: true,
            countries: [],
            activeCase: 'cases',
        }

        this.getData = this.getData.bind(this)
        this.handleSelectLanguage = this.handleSelectLanguage.bind(this)
    }

    getData = () => {
        fetch(URI)
          .then((response) => response.json())
          .then(countr => {
              this.setState({
                  countries: countr
              })
          })
        
    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate() {
        
    }

     handleSelectLanguage(option) {
        this.setState({
          activeCase: option
        })
      }
    

    render(props){
      
        return(
            <CountryGrid className="h-95" countries={this.state.countries} activeCase={this.state.activeCase} onSelectLanguage={this.handleSelectLanguage} />
        )
    }

}

export default CountryList;