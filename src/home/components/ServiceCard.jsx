import React from 'react';
import './styles/ServiceCard.scss';
import { Roll } from "react-awesome-reveal";

// eslint-disable-next-line brace-style
export default function ServiceCard( { service } ) {
  return (
    <div className="row">
      <div className="col s12">
        <div className="cardServices">
          <Roll cascade triggerOnce>
            <img src={service.image} alt="" className="cardServices__img"/>

            <h3 className="cardServices__h3"> {service.title} </h3>

            <p className="cardServices__p">
              {service.description}
            </p>
          </Roll>
        </div>
      </div>
    </div>
  )
}

