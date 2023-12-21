import { getItems } from 'api/items';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import './ImageGallery.css';

class ImageGallery extends Component {
  state = {
    isLoading: false,
    error: '',
    hits: [],
  };

  componentDidMount = () => {
    this.handleItems();
  };

  handleItems = async () => {
    const data = await getItems();
    this.setState({ hits: data.hits });
  };

  render() {
    return (
      <ul className="ImageGallery">
        {this.state.hits.map(hit => (
          <ImageGalleryItem hit={hit} key={hit.id} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
