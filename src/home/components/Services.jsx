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
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
    this.services = [
      {
        image: mobile,
        title: "Aplicaciones moviles",
        derechos:
        {
          url: "http://www.freepik.com",
          text: "Image designed by fullvector"
        }
      },
      {
        image: website,
        title: "Paginas corporativas",
        derechos:
        {
          url: "https://www.freepik.es/vectores/infografia",
          text: "Vector de Infografía creado por fullvector - www.freepik.es"
        }
      },
      {
        image: eccomerce,
        title: "Tiendas virtuales",
        derechos:
        {
          url: "http://www.freepik.com",
          text: "Vector de Icono creado por photoroyalty - www.freepik.es"
        }
      },
    ]

    this.settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      lazyLoad: true,
      centerMode: true,
      centerPadding: "0px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className= "services">
        <h2 className="services__h2">Servicios</h2>
        <div className = "carrousel carrousel-fullHeight">
          <Slider
            {...this.settings}
            asNavFor={this.state.nav1}
            ref={slider => ( this.slider2 = slider )}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {
              this.services.map( ( servicio, index ) => <CarrouselItem key={index} {...servicio} />
              )
            }
            <div>
              <h3>2 </h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </Slider>

        </div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => ( this.slider1 = slider )}
          arrows={false}
        >

          <div>
            <h1>Aplicaciones móviles</h1>
          </div>
          <div>
            <h1>Paginas corporativas</h1>
          </div>
          <div>
            <h1>Tiendas virtuales</h1>
          </div>
        </Slider>
      </div>
    );
  }
}