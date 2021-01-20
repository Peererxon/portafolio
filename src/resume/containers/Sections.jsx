import React from 'react';

// eslint-disable-next-line brace-style
export const Sections = ( { children } ) => {
  return (
    <div className ="container">
      <div className="row">
        {children}

      </div>
    </div>
  )
}
