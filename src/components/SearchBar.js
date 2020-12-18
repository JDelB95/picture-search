import React from 'react';

class SearchBar extends React.Component {
    
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault(); // Keeps the browser from automatically submitting the form

        // Use the 'this' keyword when referencing props in a class
        // Calls the onSubmit function (Api Call) that was passed as props from App.js.
        this.props.onSubmit(this.state.term); 
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={event => this.setState({ term: event.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;