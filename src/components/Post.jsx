import { api } from "../funciones/constGlobales"

import MyPdfComponent from "./MyPdfComponent";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Post(props) {

    const { id } = useParams();

    const [dataPost, setDataPost] = useState({
        "id": 20,
        "titulo": "prueba 20",
        "imagen_promocional": "https://i.imgur.com/dkV5le5.jpeg",
        "contenido": "De esta manera, puedes reutilizar la misma página de detalles de empresa para mostrar información de diferentes empresas, utilizando la misma plantilla genérica pero llenándola con información específica de cada empresa.",
        "localizacion": "59.3293, 18.0686",
        "pdf": "/media/pdfs/S00025_5_iPAE5fS.pdf",
        "video": "https://www.youtube.com/watch?v=8UVNT4wvIGY",
        "organizacion": "ra",
        "destacado": false,
        "popularidad": 2,
        "urls_y_textos": [
            {
                "texto": "",
                "url": ""
            },
            {
                "texto": "",
                "url": ""
            }
        ],
        "fecha_creacion": "2023-03-11T04:13:50.065891Z",
        "tema": 3
    });

    useEffect(() => {
        inicio();
    }, [id]);

    const inicio = () => {
        /*axios.get(`${api}/articulos/${id}/`)
            .then(res => {
                setDataPost(res.data);
                console.log("post");
                console.log(res.data);
            })
            .catch(error => {
                console.error(error.response.status);
            });*/
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    const [showCard, setShowCard] = useState(false);
    const [card, setCard] = useState({});

    const toggleImage = () => {
        setShowCard(!showCard);
    }

    const abrirImagen = (item) => {
        setShowCard(true);
        setCard(item);
    }

    const cerrarImagen = () => {
        setShowCard(false);
    }

    return (
        <>
            <div>
                <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10 ${showCard ? 'visible' : 'invisible'}`} onClick={toggleImage}></div>
                <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 shadow-lg rounded-lg p-4 z-20 max-w-screen-md w-full ${showCard ? 'visible' : 'invisible'}`}>
                    <div className="">
                        <img src={card.url} alt="fingerprint recognition" className="lg:w-full w-auto" />
                        <div className="mt-4">
                            <h1 className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">{card.titulo}</h1>
                            <p className="text-base leading-6 text-gray-600 mt-2">{card.texto}</p>
                        </div>
                        <div onClick={cerrarImagen} className="absolute -top-2 -right-2 bg-gray-100 hover:bg-white hover:border-2 hover:border-black hover:border-solid h-10 w-10 rounded-full flex justify-center items-center ">
                            <svg onClick={cerrarImagen} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path onClick={cerrarImagen} d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-gray-50 border-b py-8">
                <div className="container max-w-5xl mx-auto m-8">
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>

                    {dataPost.id % 2 === 0 ?
                        <div className="flex flex-wrap">
                            <div className="w-5/6 sm:w-1/2 p-6">
                                <h3 className="w-full my-2 text-5xl font-black leading-tight text-gray-800">
                                    {dataPost.titulo}
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    {dataPost.contenido}
                                    <br /><br />

                                    Imagenes de:
                                    <a className="text-orange-500 underline" href="https://undraw.co/">undraw.co</a>
                                </p>
                            </div>
                            <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                <img src={dataPost.imagen_promocional} alt="card of profile" className="w-full h-full flex-shrink-0 object-fit rounded-md" />
                            </div>
                        </div>
                        :
                        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                            <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                <img src={dataPost.imagen_promocional} alt="card of profile" className="w-full h-full flex-shrink-0 object-fit rounded-md" />
                            </div>
                            <div className="w-5/6 sm:w-1/2 p-6">
                                <h3 className="w-full my-2 text-5xl font-black leading-tight text-gray-800">
                                    {dataPost.titulo}
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    {dataPost.contenido}
                                    <br /><br />

                                    Imagenes de:
                                    <a className="text-orange-500 underline" href="https://undraw.co/">undraw.co</a>
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </section>

            <div className="bg-gray-100 border-b py-8 h-full max-h-full w-full max-w-full justify-center items-center flex">
                <MyPdfComponent data={dataPost?.pdf} />
            </div>
            <div className="bg-gray-50 p-4 ">
                {/*convertira carrousel de uno*/}
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        dataPost.urls_y_textos?.map((item) => (
                            <div className="text-center flex justify-center">
                                <img alt="" src={item.url} onClick={() => abrirImagen(item)} />
                            </div>
                        ))
                    }
                </Carousel>

                <div className="align-middle text-center">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        Explora nuestra selección de imágenes destacadas
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Explora una variedad de imágenes que muestran diferentes temas y escenarios.<br />
                        Cada imagen viene acompañada de un título y una descripción que te permitirán conocer más detalles sobre lo que estás viendo.<br />
                        ¡No te pierdas esta oportunidad de explorar nuestra galería de imágenes y encontrar inspiración!<br />
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center py-4 bg-gray-100">
                <div className="flex-shrink  max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100 ">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe src={`https://www.youtube.com/embed/${dataPost?.video?.replace("https://www.youtube.com/watch?v=", '').replace("https://youtu.be/", '')}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <p className="text-gray-600 mb-8">
                        Explora nuestro video destacado y descubre lo mejor de nuestra selección.<br />
                        Mira el video y déjate inspirar por lo que tenemos para ofrecer.<br />
                        No te pierdas esta oportunidad de conocer más sobre nosotros.<br />
                        ¡Dale al play y descubre lo que tenemos preparado para ti!<br /><br />

                        Tambien puedes verlo en:&nbsp;
                        <a className="text-orange-500 underline" target="_blank"  rel="noopener noreferrer" href={dataPost?.video}>{dataPost?.video}</a>
                    </p>

                </div>
            </div>
        </>
    );
}

export default Post;