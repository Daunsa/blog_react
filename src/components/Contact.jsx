import React from "react";
import { useMediaQuery } from '@mui/material';

export default function Contact() {

    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const tamanoForm = isSmallScreen ? ['320', '642'] : ['640', '642'];

    return (
        <>
            <div className="py-4 lg:py-8  relative">
                <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden" alt="map" />
                <div className="xl:mx-auto xl:container  relative ">
                    <div className="flex flex-wrap xl:mx-auto xl:container">
                        <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
                            <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden" alt="map" />
                            <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                                <div className="w-full 2xl:pl-48 xl:pt-1">
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">Ubicanos</h1>
                                    <div className="w-full md:w-10/12 mt-3">
                                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">Creemos que la innovación digital está en el corazón de todo éxito empresarial</h2>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-red-700 font-semibold">Direccion</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">Office #13, NSTP, NUST University H-12 Sector, Islamabad</h2>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-red-700 font-semibold">Telefonos</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+92 051 4567890 (Phone)</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+92 123 4567890 (Cell)</h2>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-red-700 font-semibold">Correo electronico</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">alphasquad@example.com</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
                            <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-red-700">Hablemos</h1>
                                <div className="w-full 2xl:w-8/12 mt-3">
                                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfM6DsRpC5y4ZE76YiksbS5CjHnGMnbXGzwnB2rVlblZuvejw/viewform?embedded=true" width={tamanoForm[0]} height={tamanoForm[1]} frameBorder="0" marginHeight="0" marginWidth="0">Cargando…</iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
