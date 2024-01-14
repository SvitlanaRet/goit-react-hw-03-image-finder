import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

export const ImageGallery = ({ hits, openModal }) => {
  console.log('ImageGallery', hits);
  return (
    <ul className="ImageGallery">
      {hits.length > 0 &&
        hits.map((hit, index) => (
          <ImageGalleryItem
            hit={hit}
            key={index}
            onClick={() => openModal(hit.largeImageURL)}
            style={{ cursor: 'pointer', margin: '5px' }}
          />
        ))}
    </ul>
  );
};
