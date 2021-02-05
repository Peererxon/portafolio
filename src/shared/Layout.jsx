import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ( { children } ) => {
  useEffect( () => {
    var elem = document.querySelector( ".sidenav" );
    var elem2 = document.querySelector( ".tooltipped" );
    import ( 'materialize-css/dist/js/materialize.min.js' ).then( M => {
      const side= M.Sidenav.init( elem, {
        Edge: "left",
        inDuration: 250
      } );
      M.Tooltip.init( elem2,{
        transitionMovement:20,

      } );

    } )
  },[] );
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