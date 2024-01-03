import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

export const ImageGallery = ({ hits }) => {
  return (
    <ul className="ImageGallery">
      {hits && hits.map(hit => <ImageGalleryItem hit={hit} key={hit.id} />)}
    </ul>
  );
};
