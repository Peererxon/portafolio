import React from 'react';

export const Sections = ( {children} ) => {
    return (
        <div className ="container">
            <div className="row">
                {children}

            </div>
        </div>
    )
}