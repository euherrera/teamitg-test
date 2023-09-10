import React, {useState} from 'react';
import useData  from './useData';
import Popup from './Popup';

const Overlay = (props) => {
  // console.log(props.url)
  const [loading, error] = useData();
  const { template, value, id, description } = props;

  const [showModal, setShowModal] = useState(false);

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }


  return (
    <div className="overlayInner">
      <div>
        <h1>{template}</h1>
        <h2>{value}</h2>
        <a onClick={() => setShowModal(!showModal)}>
          
        
        {showModal && 
        <Popup 
          setShowModal={setShowModal}
          id={id}
          description={description}
        />
        
        }Read more...</a>
      </div>
     
    </div>
  );
};

export default Overlay;
