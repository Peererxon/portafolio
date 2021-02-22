import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

// eslint-disable-next-line brace-style
const Layout = ( { children } ) => {
  // eslint-disable-next-line brace-style
  useEffect( () => {
    import ( 'materialize-css/dist/js/materialize.min.js' ).then( M =>
    {
      const elem = document.querySelector( ".sidenav" );
      const elem2 = document.querySelector( ".tooltipped" );
      M.Sidenav.init( elem, {
        Edge: "left",
        inDuration: 250
      } );

      M.Tooltip.init( elem2, { transitionMovement: 20 } );

    } )
  }, [] );
  return (
    <>
      <Header/>
      <div style ={{ minHeight: "100vh" }}>
        {children}
      </div>
      <Footer/>
    </>
  )
};

export default Layout;