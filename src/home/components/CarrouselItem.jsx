import React from 'react';
import CopyRightFreepick from '../../shared/components/CopyRightFreepick';

// eslint-disable-next-line brace-style
function CarrouselItem( { image, title, derechos } ) {
  return (
    <>
      <div className="carrousel__div">
        <img className = "carrousel__img" src={image} alt=""/>
      </div>
      { derechos ? <CopyRightFreepick {...derechos}/> : null}
      <h2 className="carrousel__h2">{title}</h2>
    </>
  )
}

export default CarrouselItem;
