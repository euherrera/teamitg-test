import React from 'react';
import useData from './useData';

const Overlay = (props) => {
  // console.log(props.url)
  const [loading, error] = useData();
  const { template, value } = props;
  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }
  return (
    <div className="partial">
      <div>
        <h1>{template}</h1>
        <h1>{value}</h1>
      </div>

    </div>
  );
};

export default Overlay;
