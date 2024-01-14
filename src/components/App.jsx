import { Component } from 'react';
import { getItems } from 'Services/items';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import CustomModal from './Modal/Modal';
import { Notify } from 'notiflix';

export class App extends Component {
  state = {
    isLoading: false,
    error: '',
    hits: [],
    page: 1,
    search: '',
    modalIsOpen: false,
    selectedImage: null,
  };

  handleItems = async key => {
    try {
      this.setState({ isLoading: true });
      const data = await getItems(this.state.page, key);
      let hits = [];
      let page = this.state.page;
      if (this.state.search.includes(key.toLocaleLowerCase())) {
        hits = [...this.state.hits, ...data.hits];
      } else if (data.hits.length === 0) {
        Notify.warning('Sorry, there is no images on query');
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
      this.setState({
        error: Notify.failure('Something wrong, try later'),
        isLoading: false,
      });
    }
  };

  updateSearch = key => {
    let searchKey = key.length < 1 ? this.state.search : key;
    this.handleItems(searchKey);
  };

  openModal = imageSrc => {
    this.setState({ modalIsOpen: true, selectedImage: imageSrc });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, selectedImage: null });
  };

  handleClick = () => {
    this.handleItems(this.state.search);
  };

  render() {
    const { hits, isLoading, error, modalIsOpen, selectedImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.updateSearch} />
        {error && <h1>{error}</h1>}
        {isLoading && <Loader />}
        <ImageGallery hits={hits} openModal={this.openModal} />
        <CustomModal
          isOpen={modalIsOpen}
          closeModal={this.closeModal}
          imageSrc={selectedImage}
        />
        <Button handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;
