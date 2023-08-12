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

  const [dataDestacados, setDataDestacados] = useState([
    {
        "id": 1,
        "titulo": "prueba 1",
        "imagen_promocional": "https://i.imgur.com/SR04reG.jpeg",
        "contenido": "dasdfgfhjksaddjhgsfdtrgef",
        "organizacion": "ra",
        "tema": 2
    },
    {
        "id": 2,
        "titulo": "prueba 2",
        "imagen_promocional": "https://i.imgur.com/cYYrJvY.jpeg",
        "contenido": "dasghjgklh;iuiyutytfvbvnmkoiuyturgfvbgnhr",
        "organizacion": "nt",
        "tema": 1
    },
    {
        "id": 3,
        "titulo": "prueba 3",
        "imagen_promocional": "https://i.imgur.com/2YQAdPl.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
        "organizacion": "ra",
        "tema": 2
    },
    {
        "id": 4,
        "titulo": "prueba 4",
        "imagen_promocional": "https://i.imgur.com/6gzLJlt.jpeg",
        "contenido": "ewrhtjklpoiujhbvfdertyuhjklkjnbvgfdertgfcdr",
        "organizacion": "ng",
        "tema": 1
    }
]);
  const [dataLocalizacion, setDataLocalizacion] = useState([
    {
        "id": 1,
        "localizacion": "37.808600, -122.409800",
        "titulo": "prueba 1",
        "imagen_promocional": "https://i.imgur.com/SR04reG.jpeg",
        "contenido": "dasdfgfhjksaddjhgsfdtrgef"
    },
    {
        "id": 2,
        "localizacion": "40.755205, -73.982997",
        "titulo": "prueba 2",
        "imagen_promocional": "https://i.imgur.com/cYYrJvY.jpeg",
        "contenido": "dasghjgklh;iuiyutytfvbvnmkoiuyturgfvbgnhr"
    },
    {
        "id": 3,
        "localizacion": "-30.031016, -51.234585",
        "titulo": "prueba 3",
        "imagen_promocional": "https://i.imgur.com/2YQAdPl.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 4,
        "localizacion": "-23.551200, -46.658400",
        "titulo": "prueba 4",
        "imagen_promocional": "https://i.imgur.com/6gzLJlt.jpeg",
        "contenido": "ewrhtjklpoiujhbvfdertyuhjklkjnbvgfdertgfcdr"
    },
    {
        "id": 5,
        "localizacion": "-23.551200, -46.658400",
        "titulo": "prueba 5",
        "imagen_promocional": "https://i.imgur.com/A3DgRy3.jpeg",
        "contenido": "dftyuiol,m  cftyukm cfhtyutiokm, mbvgfhtghkn  vbnghfyukhj,nm bvnghjyu"
    },
    {
        "id": 6,
        "localizacion": "41.6616, -0.8946",
        "titulo": "prueba 6",
        "imagen_promocional": "https://i.imgur.com/RSRKn76.jpeg",
        "contenido": "edtrfygvb nohuikjbmn ighvjm bncgfnv boljkn,bm dyfchgvn bkfvh n"
    },
    {
        "id": 7,
        "localizacion": "51.505, -0.09",
        "titulo": "prueba 7",
        "imagen_promocional": "https://i.imgur.com/q1PLiVI.jpeg",
        "contenido": "rdtrfyguhijkn mn;polkikjhugvb sdfghjbnkm, noplikujyhftgcvb oiujyghvbn"
    },
    {
        "id": 8,
        "localizacion": "-26.89319, -49.22981",
        "titulo": "prueba 8",
        "imagen_promocional": "https://i.imgur.com/06uS2oo.jpeg",
        "contenido": "redtfyguhijoklm, ;pkoljihugyfcvb dfgvhbjknml, ;olkjiuhgcbv ikuhgvbn kjhgvb"
    },
    {
        "id": 9,
        "localizacion": "35.669590, 139.699690",
        "titulo": "prueba 9",
        "imagen_promocional": "https://i.imgur.com/TovrGdi.jpeg",
        "contenido": "srdetfyguhjnk ;kojlihujgv xdcfgvhjknm ljkhbgvb ikuyhgfcfgvbnhm kjhngvb"
    },
    {
        "id": 10,
        "localizacion": "-34.6037, -58.3816",
        "titulo": "prueba 10",
        "imagen_promocional": "https://i.imgur.com/1zqsyah.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 11,
        "localizacion": "-35.2809, 149.1300",
        "titulo": "prueba 11",
        "imagen_promocional": "https://i.imgur.com/4zJEe2x.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 12,
        "localizacion": "-15.7942, -47.8822",
        "titulo": "prueba 12",
        "imagen_promocional": "https://i.imgur.com/1ko2lbN.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 13,
        "localizacion": "45.4215, -75.6972",
        "titulo": "prueba 13",
        "imagen_promocional": "https://i.imgur.com/sduLRvf.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 14,
        "localizacion": "39.9042, 116.4074",
        "titulo": "prueba 14",
        "imagen_promocional": "https://i.imgur.com/tXtwrPd.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 15,
        "localizacion": "4.7109, -74.0721",
        "titulo": "prueba 15",
        "imagen_promocional": "https://i.imgur.com/QguApMA.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 16,
        "localizacion": "30.0444, 31.2357",
        "titulo": "prueba 16",
        "imagen_promocional": "https://i.imgur.com/Xulubox.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 17,
        "localizacion": "40.4168, -3.7038",
        "titulo": "prueba 17",
        "imagen_promocional": "https://i.imgur.com/yxovJ4S.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 18,
        "localizacion": "38.9072, -77.0369",
        "titulo": "prueba 18",
        "imagen_promocional": "https://i.imgur.com/fNXT1wc.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 19,
        "localizacion": "48.8566, 2.3522",
        "titulo": "prueba 19",
        "imagen_promocional": "https://i.imgur.com/gjEZAJ7.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 20,
        "localizacion": "59.3293, 18.0686",
        "titulo": "prueba 20",
        "imagen_promocional": "https://i.imgur.com/dkV5le5.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 21,
        "localizacion": "46.9479, 7.4446",
        "titulo": "prueba 21",
        "imagen_promocional": "https://i.imgur.com/iNM4eIa.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 22,
        "localizacion": "13.7563, 100.5018",
        "titulo": "prueba 22",
        "imagen_promocional": "https://i.imgur.com/M50O5pj.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 23,
        "localizacion": "39.9334, 32.8597",
        "titulo": "prueba 23",
        "imagen_promocional": "https://i.imgur.com/TvY6Ynf.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 24,
        "localizacion": "-34.9011, -56.1645",
        "titulo": "prueba 24",
        "imagen_promocional": "https://i.imgur.com/VRcVIoj.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 25,
        "localizacion": "10.4806, -66.9036",
        "titulo": "prueba 25",
        "imagen_promocional": "https://i.imgur.com/jedKbER.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa."
    },
    {
        "id": 26,
        "localizacion": "-13.545704698517078, -71.96259569056402",
        "titulo": "prueba 26",
        "imagen_promocional": "https://i.imgur.com/n0tlFba.jpeg",
        "contenido": "En resumen, mientras que el emprendimiento se enfoca en la creación y el desarrollo de nuevas empresas, el negocio se enfoca en la gestión y la operación de una empresa ya existente."
    }
]);
  
  useEffect(() => {
    inicio();
  }, []);

  const inicio = () => {
    /*axios.get(api + '/articulosDestacado/')
      .then(res => {
        setDataDestacados(res.data);
        console.log("index");
        console.log(res.data);
      })
      .catch(error => {
        console.error(error.response.status);
      });

    axios.get(api + '/articulosLocalizacion/')
      .then(res => {
        setDataLocalizacion(res.data);
        console.log("index2");
        console.log(res.data);
      })
      .catch(error => {
        console.error(error.response.status);
      });*/
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