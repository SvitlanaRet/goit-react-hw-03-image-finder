import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

export const ImageGallery = ({ hits }) => {
  console.log('ImageGallery', hits);
  return (
    <ul className="ImageGallery">
      {hits.length > 0 &&
        hits.map((hit, index) => <ImageGalleryItem hit={hit} key={index} />)}
    </ul>
  );
};
