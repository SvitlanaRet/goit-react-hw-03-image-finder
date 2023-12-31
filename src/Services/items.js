import axios from 'axios';

const API_KEY = '40081863-88b07571bc5633de8dffbf4dc';
axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const getItems = async () => {
  const { data } = await axios.get();
  return data;
};

// const API_KEY = '40081863-88b07571bc5633de8dffbf4dc';
// axios.defaults.baseURL = 'https://pixabay.com/api';

// axios.defaults.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// export async function getItems(query, page) {
//   try {
//     const { data } = await axios(`/?q=${query}&page=${page}`);
//     return data;
//   } catch (error) {
//     this.setState({ error: 'Sorry, try later' });
//   }
// }
