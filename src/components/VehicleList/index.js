import React from 'react';
import useData from './useData';
import Overlay from './Overlay';
import './style.scss';

const VehicleList = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  if (vehicles) {

  return (
    <div data-testid="results">
    <main className="main" >
      {vehicles.map((vehicle) => {
        return (
          <section className="main__row" key={vehicle.id}>

            {vehicle.media.map((media, index) => {
              return (index === 0)
                ? (
                  <div className="relative" key={vehicle.id}>
                    <div className="main__col">
                      <div>
                        <img src={media.url} alt="vehicle" />
                      </div>
                      <div className="card">
                        <p className="title">
                          <span>
                            {media.name}
                            {' '}
                            name
                          </span>
                        </p>
                        <p>
                          From
                          <span className="price">{vehicle.price}</span>
                        </p>
                        <p>The pinnacle of refined capability</p>
                      </div>
                    </div>
                    <div className="overlay">
                      <Overlay
                        template={vehicle.meta.emissions.template}
                        value={vehicle.meta.emissions.value}
                        id={vehicle.id}
                        description={vehicle.description}
                      />
                    </div>
                  </div>
                )
                : '';
            })}
          </section>
        );
      })}
    </main>
    </div>
  );
};
}
export default VehicleList;
