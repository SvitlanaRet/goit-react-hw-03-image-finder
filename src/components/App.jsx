import { Component } from 'react';
import { getItems } from 'Services/items';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';

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

  handleClick = () => {};

  render() {
    const { hits, isLoading, error } = this.state;
    return (
      <>
        <Searchbar />
        {error && <h1>{error}</h1>}
        {isLoading && <Loader />}
        <ImageGallery hits={hits} />
        <Button></Button>
      </>
    );
  }
}

export default App;
