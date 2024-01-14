import axios from 'axios';

const API_KEY = '40081863-88b07571bc5633de8dffbf4dc';

export const getItems = async (page, q) => {
  const link = `https://pixabay.com/api/?q=${q}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const { data } = await axios.get(link);

  return data;
};
