import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            term: ''
        }
    }

    onInputChange(e){
        this.setState({
            term: e.target.value
        })
        console.log(e.target.value);
    }

    render(){
        return (
            <div>  
                {this.state.term}
                <input                     
                    className="form-control"
                    onChange={this.onInputChange.bind(this)}
                    value={this.state.term} />
            </div>
        )
    }
    
}

export default SearchBar;