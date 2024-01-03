import './Button.css';

export const Button = ({ onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      Load more
    </button>
  );
};
