import React from 'react';

 
const URI = 'https://disease.sh/v2/countries'

class Countries extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            countries: [],
        }
    }

    getData = () => {
        fetch(URI)
          .then(response => response.json())
          .then(data => {this.setState({ countries: data})
        })
    }

    componentDidMount() {
        this.getData()
        console.log(this.state.countries)
    }

    render(props){
        return(
        <h1>{this.state.countries.country}</h1>
        )
    }

}

export default Countries;

