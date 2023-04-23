import { api } from "../funciones/constGlobales";

import {
    Link
} from "react-router-dom";

import axios from "axios";

import { useState, useEffect } from "react";

function Menu() {

    const [dataTemas, setDataTemas] = useState([]);
    const [dataPostsNg, setDataPostsNg] = useState([]);
    const [dataPostsNt, setDataPostsNt] = useState([]);
    const [dataPostsRa, setDataPostsRa] = useState([]);
    const [menuState, setMenuState] = useState(false);
    const empresas = ['ng', 'nt', 'ra'];

    useEffect(() => {
        inicio();
    }, []);

    const inicio = () => {
        axios.get(`${api}/temas/`)
            .then(res => {
                setDataTemas(res.data);
            })
            .catch(error => {
                console.error(error.response.status);
            });

        empresas.forEach(empresa => {
            axios.get(`${api}/articulosMenu/${empresa}/`)
                .then(res => {
                    switch (empresa) {
                        case 'ng':
                            setDataPostsNg(res.data);
                            break;
                        case 'nt':
                            setDataPostsNt(res.data);
                            break;
                        case 'ra':
                            setDataPostsRa(res.data);
                            break;
                        default:
                            break;
                    }
                })
                .catch(error => {
                    console.error(error.response.status);
                });
        });

    };

    const cambiarMenuState = () => {
        setMenuState(!menuState);
    }

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50">
                <nav className="bg-black">
                    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                        <div className="flex justify-between">
                            <div className="mx-w-10 text-2xl font-bold capitalize text-white flex items-center">Pagina</div>

                            <div className="flex flex-row">
                                {/* nav menu */}
                                <ul className="navbar hidden lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">
                                    <li key="inicio" className="relative border-l border-gray-800 hover:bg-gray-900">
                                        <Link className="block py-3 px-6 border-b-2 border-transparent" to="/">Inicio</Link>
                                    </li>
                                    <li key="ng" className="dropdown relative border-l border-gray-800 hover:bg-gray-900">
                                        <Link className="block py-3 px-6 border-b-2 border-transparent" to="/revista/ng">National geograpihc español</Link>

                                        <ul
                                            className="dropdown-menu font-normal absolute left-0 right-auto top-full z-50 border-b-0 text-left bg-white text-gray-700 border border-gray-100"
                                            style={{ "minWidth": "12rem" }}>
                                            {dataTemas.map(tema => {
                                                const filteredPosts = dataPostsNg.filter(item => item.tema_id === tema.id);
                                                return (
                                                    <li key={`ng${tema.id}`} className="subdropdown relative hover:bg-gray-50">
                                                        <Link className="block py-2 px-6 border-b border-gray-100" to={`/revista/ra`}>
                                                            {tema.nombre}
                                                        </Link>

                                                        {/* dropdown submenu */}
                                                        {filteredPosts.length !== 0 &&
                                                            <ul
                                                                className="dropdown-menu absolute left-full right-auto transform top-full z-50 border-b-0 text-left -mt-10 ml-0 mr-0 bg-white border border-gray-100"
                                                                style={{ "minWidth": "12rem" }}>
                                                                {filteredPosts.map(item => (
                                                                    <li key={`ng${tema.id}${item.id}`} className="relative hover:bg-gray-50">
                                                                        <Link className="block py-2 px-6 border-b border-gray-100" to={`/post/${item.id}`}>{item.titulo}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        }
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                    <li key="nt" className="dropdown relative border-l border-gray-800 hover:bg-gray-900">
                                        <Link className="block py-3 px-6 border-b-2 border-transparent" to="/revista/nt">Nat Geo Travel</Link>
                                        <ul
                                            className="dropdown-menu font-normal absolute left-0 right-auto top-full z-50 border-b-0 text-left bg-white text-gray-700 border border-gray-100"
                                            style={{ "minWidth": "12rem" }}>
                                            {dataTemas.map(tema => {
                                                const filteredPosts = dataPostsNt.filter(item => item.tema_id === tema.id);
                                                return (
                                                    <li key={`nt${tema.id}`} className="subdropdown relative hover:bg-gray-50">
                                                        <Link className="block py-2 px-6 border-b border-gray-100" to={`/revista/ra`}>
                                                            {tema.nombre}
                                                        </Link>

                                                        {/* dropdown submenu */}
                                                        {filteredPosts.length !== 0 &&
                                                            <ul
                                                                className="dropdown-menu absolute left-full right-auto transform top-full z-50 border-b-0 text-left -mt-10 ml-0 mr-0 bg-white border border-gray-100"
                                                                style={{ "minWidth": "12rem" }}>
                                                                {filteredPosts.map(item => (
                                                                    <li key={`nt${tema.id}${item.id}`} className="relative hover:bg-gray-50">
                                                                        <Link className="block py-2 px-6 border-b border-gray-100" to={`/post/${item.id}`}>{item.titulo}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        }
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                    <li key="ra" className="dropdown relative border-l border-gray-800 hover:bg-gray-900">
                                        <Link className="block py-3 px-6 border-b-2 border-transparent" to="/revista/ra">Rainforest Alliance</Link>

                                        <ul
                                            className="dropdown-menu font-normal absolute left-0 right-auto top-full z-50 border-b-0 text-left bg-white text-gray-700 border border-gray-100"
                                            style={{ "minWidth": "12rem" }}>
                                            {dataTemas.map(tema => {
                                                const filteredPosts = dataPostsRa.filter(item => item.tema_id === tema.id);
                                                return (
                                                    <li key={`ra${tema.id}`} className="subdropdown relative hover:bg-gray-50">
                                                        <Link className="block py-2 px-6 border-b border-gray-100" to={`/revista/ra`}>
                                                            {tema.nombre}
                                                        </Link>

                                                        {/* dropdown submenu */}
                                                        {filteredPosts.length !== 0 &&
                                                            <ul
                                                                className="dropdown-menu absolute left-full right-auto transform top-full z-50 border-b-0 text-left -mt-10 ml-0 mr-0 bg-white border border-gray-100"
                                                                style={{ "minWidth": "12rem" }}>
                                                                {filteredPosts.map(item => (
                                                                    <li key={`ra${tema.id}${item.id}`} className="relative hover:bg-gray-50">
                                                                        <Link className="block py-2 px-6 border-b border-gray-100" to={`/post/${item.id}`}>{item.titulo}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        }
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                    <li key="sn" className="relative border-l border-gray-800 hover:bg-gray-900">
                                        <Link className="block py-3 px-6 border-b-2 border-transparent" to="/sobreNosotros">Sobre nosotros</Link>
                                    </li>
                                    <li key="contac" className="relative border-l border-gray-800 hover:bg-gray-900">
                                        <Link className="block py-3 px-6 border-b-2 border-transparent" to="/contactanos">Contactanos</Link>
                                    </li>
                                </ul>

                                {/* search form & mobile nav */}
                                <div className="flex flex-row items-center text-gray-300">
                                    <div className="search-dropdown relative border-r lg:border-l border-gray-800 hover:bg-gray-900">
                                        
                                        <div
                                            className="dropdown-menu absolute left-auto right-0 top-full z-50 text-left bg-white text-gray-700 border border-gray-100 mt-1 p-3"
                                            style={{ "minWidth": "15rem" }}>
                                            <div className="flex flex-wrap items-stretch w-full relative">
                                                <input type="text"
                                                    className="flex-shrink flex-grow flex-shrink max-w-full leading-5 w-px flex-1 relative py-2 px-5 text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                                                    name="text" placeholder="Search..." aria-label="search" />
                                                <div className="flex -mr-px">
                                                    <button
                                                        className="flex items-center py-2 px-5 -ml-1 leading-5 text-gray-100 bg-black hover:text-white hover:bg-gray-900 hover:ring-0 focus:outline-none focus:ring-0"
                                                        type="submit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                            className="bi bi-search" viewBox="0 0 16 16">
                                                            <path
                                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative hover:bg-gray-800 block lg:hidden">
                                        <button onClick={cambiarMenuState} type="button" className="menu-mobile block py-3 px-6 border-b-2 border-transparent">
                                            <span className="sr-only">Mobile menu</span>
                                            <svg className="inline-block h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                                                </path>
                                            </svg> Menu
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {/* Mobile menu */}
            <div className={`side-area ${menuState ? 'show' : ''} fixed w-full h-full inset-0 z-50`}>
                {/* bg open */}
                <div onClick={cambiarMenuState} className="back-menu fixed bg-gray-900 bg-opacity-70 w-full h-full inset-x-0 top-0">
                    <div className="cursor-pointer text-white absolute right-64 p-2">
                        <svg className="bi bi-x" width="2rem" height="2rem" viewBox="0 0 16 16" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                                clipRule="evenodd"></path>
                            <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                                clipRule="evenodd"></path>
                        </svg>
                    </div>
                </div>

                {/* Mobile navbar */}
                <nav id="mobile-nav"
                    className={`side-menu ${menuState ? 'show' : ''} flex flex-col right-0 w-64 fixed top-0 bg-white h-full overflow-auto z-40`}>
                    <div className="mb-auto">
                        {/*navigation*/}
                        <nav className="relative flex flex-wrap">
                            <div className="text-center py-4 w-full font-bold border-b border-gray-100">PAGINA</div>
                            <ul id="side-menu" className="w-full float-none flex flex-col">
                                <li key="inicioM" className="relative">
                                    <Link onClick={cambiarMenuState} to="/" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">Inicio</Link>
                                </li>

                                {/* dropdown with submenu*/}
                                <li key="ngM" className="dropdown relative">
                                    <Link onClick={cambiarMenuState} className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50" to="/revista/ng">
                                        National geograpihc español
                                    </Link>
                                </li>
                                <li key="ntM" className="dropdown relative">
                                    <Link onClick={cambiarMenuState} className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50" to="/revista/nt">
                                        Nat Geo Travel
                                    </Link>
                                </li>
                                <li key="raM" className="dropdown relative">
                                    <Link onClick={cambiarMenuState} className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50" to="/revista/ra">
                                        Rainforest Alliance
                                    </Link>
                                </li>
                                <li key="snM" className="dropdown relative">
                                    <Link onClick={cambiarMenuState} className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50" to="/sobreNosotros">
                                        Sobre Nosotros
                                    </Link>
                                </li>
                                <li key="contacM" className="dropdown relative">
                                    <Link onClick={cambiarMenuState} className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50" to="/contactanos">
                                        Contactanos
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* copyright */}
                    <div className="py-4 px-6 text-sm mt-6 text-center">
                        <p>Copyright <Link to="#">Pagina</Link> - All right reserved</p>
                    </div>
                </nav>
            </div>
            {/* End Mobile menu */}
        </>
    )
}

export default Menu;