import axios from 'axios';
axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=40081863-88b07571bc5633de8dffbf4dc&image_type=photo&orientation=horizontal&per_page=12';

export const getItems = async () => {
  const { data } = await axios.get();
  return data;
};
