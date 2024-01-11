import axios from 'axios';

const API_KEY = '40081863-88b07571bc5633de8dffbf4dc';
// axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const getItems = async (page, q) => {
  // console.log(page);
  const link = `https://pixabay.com/api/?q=${q}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const { data } = await axios.get(link);
  // console.log('data', data);
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
