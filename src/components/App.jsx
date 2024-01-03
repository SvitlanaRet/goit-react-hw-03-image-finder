import { Component } from 'react';
import { getItems } from 'api/items';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

export class App extends Component {
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
        <ImageGallery hits={hits} />
      </>
    );
  }
}

export default App;
