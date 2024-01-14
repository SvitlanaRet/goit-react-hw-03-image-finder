import './ImageGalleryItem.css';

export const ImageGalleryItem = ({ hit, onClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={onClick}>
      <img className="ImageGalleryItem-image" src={hit.webformatURL} alt="" />
    </li>
  );
};
