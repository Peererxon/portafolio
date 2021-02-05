/* import React from 'react'
import '../styles/services.scss';

function Skills(){
    return(
        <div className="cardCenter">
            <p>sd</p>
        </div>
    )
}

export default Skills; */

import React, { Component } from 'react';
import Slider from "react-slick";
import './styles/Services.scss';
import mobile from '../../shared/Statics/mobile_develop.jpg';
import website from '../../shared/Statics/website_develop.jpg';
import eccomerce from '../../shared/Statics/eccomerce_develop.jpg';
import CarrouselItem from './CarrouselItem';
import CarrouselSyncDescription from './CarrouselSyncDescription';
import { withTranslation } from 'react-i18next';
class AsNavFor extends Component {
  constructor( props ) {
    super( props );
    this.t = this.props.t
    this.state = {
      nav1: null,
      nav2: null,
    };

    this.settings =
    {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      centerMode: true,
      centerPadding: "0px",
      responsive: [
        {
          breakpoint: 992,
          settings:
          {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings:
          {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings:
          {
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            centerMode: false,
          }
        }
        //these breakpoints are made by the sizes of materialize
      ]
    };
  }

  // eslint-disable-next-line brace-style
  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState( {
      nav1: this.slider1,
      nav2: this.slider2
    } );
  }

  // eslint-disable-next-line brace-style
  render() {
    const services = [
      {
        image: mobile,
        title: this.t( "home:servicios:apps" ),
        derechos:
        {
          url: "http://www.freepik.com",
          text: "Image designed by fullvector"
        }
      },
      {
        image: website,
        title: this.t( "home:servicios:paginas" ),
        derechos:
        {
          url: "https://www.freepik.es/vectores/infografia",
          text: "Vector de Infografía creado por fullvector - www.freepik.es"
        }
      },
      {
        image: eccomerce,
        title: this.t( "home:servicios:ecommerces" ),
        derechos:
        {
          url: "http://www.freepik.com",
          text: "Vector de Icono creado por photoroyalty - www.freepik.es"
        }
      },
    ]
    return (
      <div className= "services">
        <h2 className="services__h2">{this.t( "home:servicios:titulo" )}</h2>
        <div className = "carrousel carrousel-fullHeight">
          <Slider
            {...this.settings}
            asNavFor={this.state.nav1}
            ref={slider => ( this.slider2 = slider )}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {
              services.map( ( servicio, index ) => <CarrouselItem key={index} {...servicio} /> )
            }
            {window.innerWidth > 400 ? <></> : null}{/* para poder deslizar los slider en resoluciones grandes */}
          </Slider>

        </div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => ( this.slider1 = slider )}
          arrows={false}
          swipe={false}
        >

          <div>
            <CarrouselSyncDescription descrip={this.t( "home:servicios:descripcionServicios:apps" )}/>
          </div>
          <div>
            <CarrouselSyncDescription descrip={this.t( "home:servicios:descripcionServicios:paginas" )}/>
          </div>
          <div>
            <CarrouselSyncDescription descrip={this.t( "home:servicios:descripcionServicios:ecommerces" )} />
          </div>
        </Slider>
      </div>
    );
  }
}
export default withTranslation()( AsNavFor )
