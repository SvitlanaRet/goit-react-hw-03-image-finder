import { getItems } from 'api/items';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import './ImageGallery.css';
import Loader from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    isLoading: false,
    error: '',
    hits: null,
  };

  componentDidMount = () => {
    this.handleItems();
  };

  handleItems = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getItems();
      this.setState({ hits: data.hits, isLoading: false });
    } catch (error) {
      this.setState({ error: 'Something wrong, try later', isLoading: false });
    }
  };

  render() {
    const { hits, isLoading, error } = this.state;
    return (
      <>
        {error && <h1>{error}</h1>}
        {isLoading && <Loader />}
        <ul className="ImageGallery">
          {hits && hits.map(hit => <ImageGalleryItem hit={hit} key={hit.id} />)}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
