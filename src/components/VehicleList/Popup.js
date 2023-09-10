import React from 'react';

const Popup = (props) => {
  // console.log(props.url)
  
  const { id, description } = props;


  return (
    <div className="popupInner">
      <div>
        <h3>{id}</h3>
        <p>{description}</p>
      </div>

    </div>
  );
};

export default Popup;
