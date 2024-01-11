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
    // defaultHits: [],
    search: 'dog',
  };

  componentDidMount = () => {
    // this.handleItems();
  };

  handleItems = async (key, add) => {
    // console.log('state', this.state);

    try {
      this.setState({ isLoading: true });
      const data = await getItems(this.state.page, key);
      // console.log('aaaa', this.state.search == key.toLo);
      let hits = [];
      let page = this.state.page;
      if (this.state.search.includes(key.toLocaleLowerCase())) {
        hits = [...this.state.hits, ...data.hits];
      } else {
        hits = data.hits;
        page = 1;
      }

      this.setState({
        hits: hits,
        isLoading: false,
        page: page + 1,
        search: key.toLocaleLowerCase(),
      });
      console.log('state', this.state);
    } catch (error) {
      this.setState({ error: 'Something wrong, try later', isLoading: false });
    }
  };

  updateSearch = key => {
    let searchKey = key.length < 1 ? this.state.search : key;
    this.handleItems(searchKey);
  };

  handleClick = () => {
    this.handleItems(this.state.search);
  };

  render() {
    const { hits, isLoading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.updateSearch} />
        {error && <h1>{error}</h1>}
        {isLoading && <Loader />}
        <ImageGallery hits={hits} />
        <Button handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;
