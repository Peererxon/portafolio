import React from 'react';
import './styles/ServiceCard.scss';

// eslint-disable-next-line brace-style
export default function ServiceCard( { service } ) {
  return (
    <div className="row">
      <div className="col s12">
        <div className="cardServices">
          <img src={service.image} alt="" className="cardServices__img"/>

          <h2 className="cardServices__h2">
            {service.title}
          </h2>

          <p className="cardServices__p">
            {service.description}
          </p>

        </div>
      </div>
    </div>
  )
}

