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
    hits: [],
    page: 1,
  };

  componentDidMount = () => {
    this.handleItems();
  };

  handleItems = async () => {
    console.log(this.state.page);
    try {
      this.setState({ isLoading: true });
      const data = await getItems(this.state.page);
      console.log(data.hits);
      this.setState({
        hits: [...this.state.hits, ...data.hits],
        isLoading: false,
        page: this.state.page + 1,
      });
    } catch (error) {
      this.setState({ error: 'Something wrong, try later', isLoading: false });
    }
  };

  handleClick = () => {
    // console.log(this.state.page);
    this.handleItems();
  };

  render() {
    const { hits, isLoading, error } = this.state;
    return (
      <>
        <Searchbar />
        {error && <h1>{error}</h1>}
        {isLoading && <Loader />}
        <ImageGallery hits={hits} />
        <Button handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;
