import React from 'react';

const URI = 'https://disease.sh/v2/all'

class Search extends React.Component {

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
            <div className="card-header text-center p-0 pt-2 rounded-0 border-0 bg-light">
                <h3 className="font-wright-bold mb-2 m-3 text-info">{this.state.data.cases}</h3>
                <div className="input-group">
                    <div className="input-group-prepend bg-dark">
                        <span className="input-group-text btn rounded-0 border bg-dark text-white">
                            <svg className="bi bi-arrow-up" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 001.5-.5z" fillRule="evenodd" clipRule="evenodd"></path>
                                <path d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </div>
                    <input className="form-control rounded-0 border bg-light text-dark" type="text"
                    placeholder="search..." value=""/>
                </div>
            </div>
        )
    }

}


export default Search;