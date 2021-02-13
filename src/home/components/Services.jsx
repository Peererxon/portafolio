import React, { Component } from 'react';
import Slider from "react-slick";
import './styles/Services.scss';
import mobile from '../../shared/Statics/mobile_develop.jpg';
import website from '../../shared/Statics/website_develop.jpg';
import eccomerce from '../../shared/Statics/eccomerce_develop.jpg';
import ServiceCard from './ServiceCard';
import { withTranslation } from 'react-i18next';
import { Zoom } from 'react-awesome-reveal';
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
      dots: true,
      infinite: false,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
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
            arrows: false,
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
        description: this.t( "home:servicios:descripcionServicios:apps" ),
        /*         derechos:
        {
          url: "http://www.freepik.com",
          text: "Image designed by fullvector"
        } */
      },
      {
        image: website,
        title: this.t( "home:servicios:paginas" ),
        description: this.t( "home:servicios:descripcionServicios:paginas" ),
        /*         derechos:
        {
          url: "https://www.freepik.es/vectores/infografia",
          text: "Vector de Infografía creado por fullvector - www.freepik.es"
        } */
      },
      {
        image: eccomerce,
        title: this.t( "home:servicios:ecommerces" ),
        description: this.t( "home:servicios:descripcionServicios:ecommerces" ),
        /*         derechos:
        {
          url: "http://www.freepik.com",
          text: "Vector de Icono creado por photoroyalty - www.freepik.es"
        } */
      },
    ]
    return (
      <div className= "services">
        <Zoom direction="right">
          <h2 className="services__h2">{this.t( "home:servicios:titulo" )}</h2>
        </Zoom>
        <Slider
          {...this.settings}

        >
          {
            services.map( ( servicio, index ) => <ServiceCard key={index} service={servicio} /> )
          }
        </Slider>
      </div>
    );
  }
}
export default withTranslation()( AsNavFor )
