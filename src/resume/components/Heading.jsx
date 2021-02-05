import React from 'react';
import './styles/Heading.scss';

export const Heading = ( { title, body } ) => (
  <div className = "Heading">
    <section>

      <div className = "encabezado">
        <h2 className = "encabezado__title" > {title} </h2>
      </div>

      <p className = "Heading__p"> {body}</p>
    </section>
  </div>
);

