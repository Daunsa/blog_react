import { api } from "../funciones/constGlobales";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from "./Card";
import Mapa from "./Mapa";
import Popular from "./Popular";
import Instagram from "./Instagram";
import HojaDeVida from "./HojaDeVida";
import Contact from "./Contact";

import axios from 'axios';

import { useState, useEffect } from "react";

function Index() {

  const [dataDestacados, setDataDestacados] = useState([]);
  const [dataLocalizacion, setDataLocalizacion] = useState([]);
  
  useEffect(() => {
    inicio();
  }, []);

  const inicio = () => {
    axios.get(api + '/articulosDestacado/')
      .then(res => {
        setDataDestacados(res.data);
      })
      .catch(error => {
        console.error(error.response.status);
      });

    axios.get(api + '/articulosLocalizacion/')
      .then(res => {
        setDataLocalizacion(res.data);
      })
      .catch(error => {
        console.error(error.response.status);
      });
  };

  return (
    <>
      <div id="content">

        {/* hero big grid */}
        <div className="bg-gray-100 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src="logo_sin_fondo.png" alt="Logo" className="max-w-80" />
          </div>
          <Carousel autoPlay dynamicHeight emulateTouch infiniteLoop showThumbs={false}>
            <div>
              <img alt="" src="https://i.imgur.com/UNmsjGS.jpeg" className="object-cover lg:h-screen xl:h-screen" />
            </div>
            <div>
              <img alt="" src="https://i.imgur.com/qCx0LTO.jpeg" className="object-cover lg:h-screen xl:h-screen" />
            </div>
            <div>
              <img alt="" src="https://i.imgur.com/mzfLfzr.jpeg" className="object-cover lg:h-screen xl:h-screen" />
            </div>
          </Carousel>
        </div>


        <section className="bg-gray-50 border-b py-8">
          <HojaDeVida />
        </section>

        <div className="bg-gray-100 p-6">
          <Mapa data={dataLocalizacion} />
        </div>

        <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
          <Instagram />
        </div>

        {/* destacados */}
        <div className="bg-gray-100 py-6">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              {/* Left */}
              <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-gray-800 text-2xl font-bold">
                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Destacados
                  </h2>
                </div>
                <div className="flex flex-row flex-wrap -mx-3">
                  {dataDestacados.map((data) => (
                    <Card key={data?.id} data={data} />
                  ))}
                </div>
              </div>
              {/* right */}
              <Popular data={'articulosPopulares'} />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
          <Contact />
        </div>

      </div>
    </>
  );
}

export default Index;