import './ImageGalleryItem.css';

export const ImageGalleryItem = ({ hit }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={hit.webformatURL} alt="" />
    </li>
  );
};
