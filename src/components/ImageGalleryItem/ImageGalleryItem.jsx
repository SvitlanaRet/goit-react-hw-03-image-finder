const ImageGalleryItem = ({ hit }) => {
  return (
    <li className="gallery-item">
      <img src={hit.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
