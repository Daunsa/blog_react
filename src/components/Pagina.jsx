import { api } from "../funciones/constGlobales";

import Card from "./Card";
import Card3 from "./Card3";
import Popular from "./Popular";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pagina() {

    const { id } = useParams();

    const [dataPosts, setDataPosts] = useState([]);
    const [dataTemas, setDataTemas] = useState([]);


    useEffect(() => {
        inicio();
    }, [id]);

    const inicio = () => {
        axios.get(`${api}/articulosOrganizacion/${id}/`)
            .then(res => {
                setDataPosts(res.data);
            })
            .catch(error => {
                console.error(error.response.status);
            });
        axios.get(`${api}/temas/`)
            .then(res => {
                setDataTemas(res.data);
            })
            .catch(error => {
                console.error(error.response.status);
            });
    };


    return (
        <>
            <div className="flex xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
                <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                        <img src="https://i.imgur.com/efGBeIF.png" alt="image of profile" className="w-full h-full flex-shrink-0 object-fit" />
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                        <div>
                            <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
                                National
                                <br />
                                Geographic
                            </h1>
                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, minima. Cumque, necessitatibus distinctio earum eum possimus ipsam facere, quaerat recusandae hic, excepturi aperiam aut temporibus laborum aliquid assumenda consequatur sapiente.</p>
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