import { api } from "../funciones/constGlobales";

import Card from "./Card";
import Card3 from "./Card3";
import Popular from "./Popular";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pagina() {

    const { id } = useParams();

    const dataPaginas = [{'imagen':"https://i.imgur.com/efGBeIF.png", 'titulo':['National', 'Geographic'], 'descripcion':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, minima. Cumque, necessitatibus distinctio earum eum possimus ipsam facere, quaerat recusandae hic, excepturi aperiam aut temporibus laborum aliquid assumenda consequatur sapiente."},
                        {'imagen':"https://i.imgur.com/GqqWzJS.png", 'titulo':['Nat Geo', 'Travel'], 'descripcion':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, minima. Cumque, necessitatibus distinctio earum eum possimus ipsam facere, quaerat recusandae hic, excepturi aperiam aut temporibus laborum aliquid assumenda consequatur sapiente."},
                        {'imagen':"https://i.imgur.com/sXuBdnr.png", 'titulo':['Rainforest', 'Alliance'], 'descripcion':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, minima. Cumque, necessitatibus distinctio earum eum possimus ipsam facere, quaerat recusandae hic, excepturi aperiam aut temporibus laborum aliquid assumenda consequatur sapiente."}
                        ];

    const [dataPosts, setDataPosts] = useState([
        {
            "id": 1,
            "titulo": "prueba 1",
            "imagen_promocional": "https://i.imgur.com/SR04reG.jpeg",
            "contenido": "dasdfgfhjksaddjhgsfdtrgef",
            "organizacion": "ra",
            "tema": 2
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
            "id": 5,
            "titulo": "prueba 5",
            "imagen_promocional": "https://i.imgur.com/A3DgRy3.jpeg",
            "contenido": "dftyuiol,m  cftyukm cfhtyutiokm, mbvgfhtghkn  vbnghfyukhj,nm bvnghjyu",
            "organizacion": "ra",
            "tema": 1
        },
        {
            "id": 6,
            "titulo": "prueba 6",
            "imagen_promocional": "https://i.imgur.com/RSRKn76.jpeg",
            "contenido": "edtrfygvb nohuikjbmn ighvjm bncgfnv boljkn,bm dyfchgvn bkfvh n",
            "organizacion": "ra",
            "tema": 2
        },
        {
            "id": 7,
            "titulo": "prueba 7",
            "imagen_promocional": "https://i.imgur.com/q1PLiVI.jpeg",
            "contenido": "rdtrfyguhijkn mn;polkikjhugvb sdfghjbnkm, noplikujyhftgcvb oiujyghvbn",
            "organizacion": "ra",
            "tema": 2
        },
        {
            "id": 8,
            "titulo": "prueba 8",
            "imagen_promocional": "https://i.imgur.com/06uS2oo.jpeg",
            "contenido": "redtfyguhijoklm, ;pkoljihugyfcvb dfgvhbjknml, ;olkjiuhgcbv ikuhgvbn kjhgvb",
            "organizacion": "ra",
            "tema": 2
        },
        {
            "id": 10,
            "titulo": "prueba 10",
            "imagen_promocional": "https://i.imgur.com/1zqsyah.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 1
        },
        {
            "id": 11,
            "titulo": "prueba 11",
            "imagen_promocional": "https://i.imgur.com/4zJEe2x.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 1
        },
        {
            "id": 12,
            "titulo": "prueba 12",
            "imagen_promocional": "https://i.imgur.com/1ko2lbN.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 1
        },
        {
            "id": 13,
            "titulo": "prueba 13",
            "imagen_promocional": "https://i.imgur.com/sduLRvf.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 1
        },
        {
            "id": 14,
            "titulo": "prueba 14",
            "imagen_promocional": "https://i.imgur.com/tXtwrPd.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 1
        },
        {
            "id": 16,
            "titulo": "prueba 16",
            "imagen_promocional": "https://i.imgur.com/Xulubox.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 2
        },
        {
            "id": 17,
            "titulo": "prueba 17",
            "imagen_promocional": "https://i.imgur.com/yxovJ4S.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 2
        },
        {
            "id": 18,
            "titulo": "prueba 18",
            "imagen_promocional": "https://i.imgur.com/fNXT1wc.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 2
        },
        {
            "id": 19,
            "titulo": "prueba 19",
            "imagen_promocional": "https://i.imgur.com/gjEZAJ7.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 2
        },
        {
            "id": 20,
            "titulo": "prueba 20",
            "imagen_promocional": "https://i.imgur.com/dkV5le5.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 3
        },
        {
            "id": 21,
            "titulo": "prueba 21",
            "imagen_promocional": "https://i.imgur.com/iNM4eIa.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 3
        },
        {
            "id": 22,
            "titulo": "prueba 22",
            "imagen_promocional": "https://i.imgur.com/M50O5pj.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 3
        },
        {
            "id": 23,
            "titulo": "prueba 23",
            "imagen_promocional": "https://i.imgur.com/TvY6Ynf.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 3
        },
        {
            "id": 24,
            "titulo": "prueba 24",
            "imagen_promocional": "https://i.imgur.com/VRcVIoj.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 3
        },
        {
            "id": 25,
            "titulo": "prueba 25",
            "imagen_promocional": "https://i.imgur.com/jedKbER.jpeg",
            "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
            "organizacion": "ra",
            "tema": 3
        }
    ]);
    const [dataTemas, setDataTemas] = useState([
        {
            "id": 1,
            "nombre": "Vida marina"
        },
        {
            "id": 2,
            "nombre": "Microbiologia"
        },
        {
            "id": 3,
            "nombre": "Ecosistema"
        }
    ]);
    const [dataPagina, setDataPagina] = useState({'imagen':"", 'titulo':['', ''], 'descripcion':""});


    useEffect(() => {
        inicio();
    }, [id]);

    const inicio = () => {
        /*axios.get(`${api}/articulosOrganizacion/${id}/`)
            .then(res => {
                setDataPosts(res.data);
                console.log("pagina1");
                console.log(res.data);
            })
            .catch(error => {
                console.error(error.response.status);
            });
        axios.get(`${api}/temas/`)
            .then(res => {
                setDataTemas(res.data);
                console.log("pagina 2");
                console.log(res.data);
            })
            .catch(error => {
                console.error(error.response.status);
            });*/
        switch (id) {
            case 'ng':
                setDataPagina(dataPaginas[0])
                break;
            case 'nt':
                setDataPagina(dataPaginas[1])
                break;
            case 'ra':
                setDataPagina(dataPaginas[2])
                break;
        }
    };


    return (
        <>
            <div className="flex xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
                <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                        <img src={dataPagina.imagen} alt="image of profile" className="w-full h-full flex-shrink-0 object-fit" />
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                        <div>
                            <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
                                {dataPagina.titulo[0]}
                                <br />
                                {dataPagina.titulo[1]}
                            </h1>
                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">{dataPagina.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* block news */}
            <div className="bg-gray-50 py-6">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        {/* Left */}
                        <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
                            <div className="w-full py-3">
                                <h2 className="text-gray-800 text-2xl font-bold">
                                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Recientes
                                </h2>
                            </div>
                            <div className="flex flex-row flex-wrap -mx-3">
                                {dataPosts.slice(0, 6).map((data) => (
                                    <Card data={data} />
                                ))}
                            </div>
                        </div>
                        {/* right */}
                        <Popular data={`articulosPopularesOrganizacion/${id}`} />
                    </div>
                </div>
            </div>
            {/* block news */}
            {dataTemas.filter((tema) => dataPosts.some((post) => post.tema === tema.id)).map((tema, index) => (
                <div id={`${tema.id}-seccion`} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'} py-6`}>
                    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                        <div className="flex flex-row flex-wrap">
                            {/* Left */}
                            <div className="flex-shrink max-w-full w-full overflow-hidden">
                                <div className="w-full py-3">
                                    <h2 className="text-gray-800 text-2xl font-bold">
                                        <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>{tema.nombre}
                                    </h2>
                                </div>
                                <div className="flex flex-row flex-wrap -mx-3">
                                    {dataPosts.filter((post) => post.tema === tema.id).map((data) => (
                                        <Card3 data={data} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    );
}

export default Pagina;