import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        // Images are saved in state and then are passed as props to the ImageList components, which will render the images.
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;