import { MagnifyingGlass } from 'react-loader-spinner';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="Spinner">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};
