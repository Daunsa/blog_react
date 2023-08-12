import axios from "axios";
import { useState, useEffect } from "react";

function Instagram() {

    const [dataInstagram, setDataInstagram] = useState([]);
    const token = 'IGQVJVYWFXLWtyN09UeElyS2JKVmJ2MkxSaVRRQ3JKTFJSNVJ5MTdYYmJQZAW5jeC1TOEduVmJzZAnhEMzBaLVFncDZAXdTVpODVZASE1ZAaVBwUEN2U2kxYWIzeGc1YXRqTmdOMDhvNU5QWm5CZAkI5TmxlagZDZD';

    useEffect(() => {
        inicio();
    },[]);

    const inicio = () => {
        /*axios.get(`https://graph.instagram.com/v12.0/5952335161548643/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=14&access_token=${token}`)
            .then(res => {
                setDataInstagram(res.data.data);
                console.log("instagram");
                console.log(res.data);
            })
            .catch(error => {
                console.error(error.response.status);
            });*/
    };

    const abrirPublicacion = (url) => {
        window.open(url, "_blank");
    };

    const instagram = (<>
        <div className="rounded-lg flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
        <div className="rounded-lg absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
            <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M44 20V20.001" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    </>)

    return (
        <>
            <div className="xl:w-1/2 w-11/12">
                <h1 tabIndex={0} className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
                    Daniel Tapia
                </h1>
                <h2 role="contentinfo" tabIndex={0} className="text-base leading-normal text-center text-gray-600 mt-5">
                    JOURNALISM, MEDIO AMBIENTE, CIENCIA Y EXPLORACION
                </h2>
            </div>
            <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4">
                <div className="mt-24">
                    <div className="flex items-end">
                        <div onClick={() => abrirPublicacion(dataInstagram[0]?.permalink)} className="relative group mr-6">
                            <img alt={`instagram-${dataInstagram[0]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[0]?.permalink)} src={'https://i.imgur.com/UNmsjGS.jpeg'} className="w-20 h-20 rounded-lg object-cover" />
                            {instagram}
                        </div>
                        <div onClick={() => abrirPublicacion(dataInstagram[1]?.permalink)} className="relative group rounded-lg">
                            <img alt={`instagram-${dataInstagram[1]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[1]?.permalink)} src={'https://i.imgur.com/UNmsjGS.jpeg'} className="w-48 h-36 rounded-lg object-cover" />
                            {instagram}
                        </div>
                    </div>
                    <div className="flex items-center justify-end my-6">
                        <div onClick={() => abrirPublicacion(dataInstagram[2]?.permalink)} className="relative group">
                            <img alt={`instagram-${dataInstagram[2]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[2]?.permalink)} src={'https://i.imgur.com/UNmsjGS.jpeg'} className="w-72 h-72 rounded-lg object-cover" />
                            {instagram}
                        </div>
                    </div>
                    <div className="flex items-start rounded-lg">
                        <div onClick={() => abrirPublicacion(dataInstagram[3]?.permalink)} className="relative group">
                            <img alt={`instagram-${dataInstagram[3]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[3]?.permalink)} src={'https://i.imgur.com/UNmsjGS.jpeg'} className="w-48 h-48 rounded-lg object-cover" />
                            {instagram}
                        </div>
                        <div onClick={() => abrirPublicacion(dataInstagram[4]?.permalink)} className="relative group rounded-lg ml-6 flex-shrink-0 object-cover object-fit">
                            <img alt={`instagram-${dataInstagram[4]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[4]?.permalink)} src={'https://i.imgur.com/UNmsjGS.jpeg'} className="w-20 h-20 rounded-lg object-cover" />
                            {instagram}
                        </div>
                    </div>
                </div>
                <div className="ml-6 mt-32 rounded-lg">
                    <div onClick={() => abrirPublicacion(dataInstagram[5]?.permalink)} className="relative group mr-2">
                        <img alt={`instagram-${dataInstagram[5]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[5]?.permalink)} src={'https://i.imgur.com/UNmsjGS.jpeg'} className="w-72 h-80 rounded-lg object-cover" />
                        {instagram}
                    </div>
                    <div className="flex items-start mt-6">
                        <div onClick={() => abrirPublicacion(dataInstagram[6]?.permalink)} className="relative group rounded-lg">
                            <img alt={`instagram-${dataInstagram[6]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[6]?.permalink)} src={'https://i.imgur.com/UNmsjGS.jpeg'} className="w-48 h-48 rounded-lg object-cover" />
                            {instagram}
                        </div>
                        <div onClick={() => abrirPublicacion(dataInstagram[7]?.permalink)} className="relative group rounded-lg ml-6 object-cover object-fit">
                            <img alt={`instagram-${dataInstagram[7]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[7]?.permalink)} src={'https://i.imgur.com/UNmsjGS.jpeg'} className="w-20 h-20 rounded-lg object-cover" />
                            {instagram}
                        </div>
                    </div>
                </div>
                <div className="mt-14 ml-6">
                    <div className="lg:flex ">
                        <div>
                            <div onClick={() => abrirPublicacion(dataInstagram[8]?.permalink)} className="relative group rounded-lg object-center object-fit">
                                <img alt={`instagram-${dataInstagram[8]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[8]?.permalink)} src={'https://i.imgur.com/UNmsjGS.jpeg'} className="w-96 h-72 rounded-lg object-cover" />
                                {instagram}
                            </div>
                        </div>
                        <div>
                            <div className="flex ml-6">
                                <div onClick={() => abrirPublicacion(dataInstagram[9]?.permalink)} className="relative group rounded-lg mt-14">
                                    <img alt={`instagram-${dataInstagram[9]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[9]?.permalink)} src={'https://i.imgur.com/UNmsjGS.jpeg'} className="w-20 h-20 rounded-lg object-cover" />
                                    {instagram}
                                </div>
                                <div onClick={() => abrirPublicacion(dataInstagram[10]?.permalink)} className="relative group rounded-lg mb-10 ml-6">
                                    <img alt={`instagram-${dataInstagram[10]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[10]?.permalink)} src={'https://i.imgur.com/UNmsjGS.jpeg'} className="w-20 h-24 rounded-lg object-cover" />
                                    {instagram}
                                </div>
                            </div>
                            <div onClick={() => abrirPublicacion(dataInstagram[11]?.permalink)} className="relative group rounded-lg sm:ml-6 mt-6 ml-48">
                                <img alt={`instagram-${dataInstagram[11]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[11]?.permalink)} src={'https://i.imgur.com/UNmsjGS.jpeg'} className="w-48 h-32 rounded-lg object-cover" />
                                {instagram}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex">
                        <div onClick={() => abrirPublicacion(dataInstagram[12]?.permalink)} className="relative group rounded-lg mb-8">
                            <img alt={`instagram-${dataInstagram[12]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[12]?.permalink)} className="w-48 h-48 rounded-lg object-cover" src={'https://i.imgur.com/UNmsjGS.jpeg'} />
                            {instagram}
                        </div>
                        <div onClick={() => abrirPublicacion(dataInstagram[13]?.permalink)} className="relative group rounded-lg ml-6">
                            <img alt={`instagram-${dataInstagram[13]?.permalink.replace("https://www.instagram.com/p/", "")}`} tabIndex={0} onClick={() => abrirPublicacion(dataInstagram[13]?.permalink)} className="w-72 h-56 rounded-lg object-cover" src={'https://i.imgur.com/UNmsjGS.jpeg'} />
                            {instagram}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Instagram;