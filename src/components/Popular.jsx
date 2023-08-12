import { api } from "../funciones/constGlobales";
import React from "react";

import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Popular(props) {

    const [dataPopular, setDataPopular] = useState([
        {
            "id": 26,
            "titulo": "prueba 26"
        },
        {
            "id": 12,
            "titulo": "prueba 12"
        },
        {
            "id": 13,
            "titulo": "prueba 13"
        },
        {
            "id": 2,
            "titulo": "prueba 2"
        },
        {
            "id": 5,
            "titulo": "prueba 5"
        },
        {
            "id": 8,
            "titulo": "prueba 8"
        },
        {
            "id": 4,
            "titulo": "prueba 4"
        },
        {
            "id": 1,
            "titulo": "prueba 1"
        },
        {
            "id": 9,
            "titulo": "prueba 9"
        },
        {
            "id": 18,
            "titulo": "prueba 18"
        }
    ]);

    useEffect(() => {
        inicio();
    }, [props.data]);

    const inicio = () => {
        /*axios.get(`${api}/${props.data}/`)
            .then(res => {
                setDataPopular(res.data);
                console.log("popular");
                console.log(res.data);
            })
            .catch(error => {
                console.error(error.response.status);
            });*/
    };

    return (
        <>
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
                <div className="w-full bg-white">
                    <div className="mb-6">
                        <div className="p-4 bg-gray-100">
                            <h2 className="text-lg font-bold">Mas popular</h2>
                        </div>
                        <ul className="post-number">
                            {dataPopular.map(popular => (
                                <li key={`popular${popular.id}`} className="border-b border-gray-100 hover:bg-gray-50">
                                    <Link className="text-lg font-bold px-6 py-3 flex flex-row items-center" to={`/post/${popular?.id}`}>{popular?.titulo}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/*<div className="text-sm py-6 sticky">
                    <div className="w-full text-center">
                        <a className="uppercase" href="#">Advertisement</a>
                        <a href="#">
                            <img className="mx-auto" src="src/img/ads/250.jpg" alt="advertisement area" />
                        </a>
                    </div>
                </div>*/}
            </div>
        </>
    )
};

export default Popular;