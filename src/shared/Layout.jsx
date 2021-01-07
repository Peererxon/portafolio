import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from './redux';

const Layout = ( { children } ) => {
  const isOpen = useSelector( state => state.open )
  const dispatch = useDispatch()
  const [menu, setMenu] = useState()
  useEffect( () => {
    var elem = document.querySelector( ".sidenav" );
    var elem2 = document.querySelector( ".tooltipped" );
    import ( 'materialize-css/dist/js/materialize.min.js' ).then( M => {
      const side= M.Sidenav.init( elem, {
        Edge: "left",
        inDuration: 250
      } );
      setMenu( side )
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