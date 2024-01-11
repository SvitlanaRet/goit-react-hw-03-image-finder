import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

export const ImageGallery = ({ hits }) => {
  console.log('ImageGallery', hits.length);
  return (
    <ul className="ImageGallery">
      {hits.length > 0 &&
        hits.map(hit => <ImageGalleryItem hit={hit} key={hit.id} />)}
    </ul>
  );
};
