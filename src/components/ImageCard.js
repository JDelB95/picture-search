import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.state = { spans: 0 };

        // Allows us to reference a DOM node.
        this.imageRef = React.createRef();
    }

    setSpans = () => {
        // Get the height of the image.
        /* 
        If you try to access image height from componentDidMount the
        the height will be 0 because the image will not have been downloaded yet.
        */
        const height = this.imageRef.current.clientHeight;

        // Divide height by the value of grid auto rows. 
        const spans = Math.ceil(height / 10);
        this.setState({ spans: spans });
    }

    componentDidMount() {
        // Event listener will wait for the image to load.
        // Callbacks have to be bound, so make sure the callback is an arrow function.
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                ref={this.imageRef} // ref is a jsx tag that will be turned into a DOM element.
                alt={description} 
                src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;