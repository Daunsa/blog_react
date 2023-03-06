import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";

function Pagina() {
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
                            <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">Erik Pinedo Journalism</h1>
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
                                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Bloque 1
                                </h2>
                            </div>
                            <div className="flex flex-row flex-wrap -mx-3">
                                {["https://i.imgur.com/SR04reG.jpeg", "https://i.imgur.com/cYYrJvY.jpeg", "https://i.imgur.com/2YQAdPl.jpeg", "https://i.imgur.com/6gzLJlt.jpeg"].map((data) => (
                                    <Card data={data} />
                                ))}
                            </div>
                        </div>
                        {/* right */}
                        <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
                            <div className="w-full bg-white">
                                <div className="mb-6">
                                    <div className="p-4 bg-gray-100">
                                        <h2 className="text-lg font-bold">Mas popular</h2>
                                    </div>
                                    <ul className="post-number">
                                        <li className="border-b border-gray-100 hover:bg-gray-50">
                                            <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Lorem ipsum dolor sit
                                                amet consectetur adipisicing elit.</a>
                                        </li>
                                        <li className="border-b border-gray-100 hover:bg-gray-50">
                                            <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Lorem ipsum dolor sit
                                                amet consectetur adipisicing elit.</a>
                                        </li>
                                        <li className="border-b border-gray-100 hover:bg-gray-50">
                                            <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Lorem ipsum dolor sit
                                                amet consectetur adipisicing elit.</a>
                                        </li>
                                        <li className="border-b border-gray-100 hover:bg-gray-50">
                                            <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Lorem ipsum dolor sit
                                                amet consectetur adipisicing elit.</a>
                                        </li>
                                        <li className="border-b border-gray-100 hover:bg-gray-50">
                                            <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Lorem ipsum dolor sit
                                                amet consectetur adipisicing elit.</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-sm py-6 sticky">
                                <div className="w-full text-center">
                                    <a className="uppercase" href="#">Advertisement</a>
                                    <a href="#">
                                        <img className="mx-auto" src="src/img/ads/250.jpg" alt="advertisement area" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* block news */}
            <div className="bg-gray-50 py-6">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        {/* Left */}
                        <div className="flex-shrink max-w-full w-full   overflow-hidden">
                            <div className="w-full py-3">
                                <h2 className="text-gray-800 text-2xl font-bold">
                                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Bloque 2
                                </h2>
                            </div>
                            <div className="flex flex-row flex-wrap -mx-3">
                                {["https://i.imgur.com/A3DgRy3.jpeg", "https://i.imgur.com/RSRKn76.jpeg", "https://i.imgur.com/q1PLiVI.jpeg", "https://i.imgur.com/06uS2oo.jpeg", "https://i.imgur.com/TovrGdi.jpeg", "https://i.imgur.com/1zqsyah.jpeg","https://i.imgur.com/4zJEe2x.jpeg","https://i.imgur.com/1ko2lbN.jpeg"
                                ].map((data) => (
                                    <Card3 data={data} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* block news */}
            <div className="bg-gray-50 py-6">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        {/* Left */}
                        <div className="flex-shrink max-w-full w-full   overflow-hidden">
                            <div className="w-full py-3">
                                <h2 className="text-gray-800 text-2xl font-bold">
                                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Bloque 3
                                </h2>
                            </div>
                            <div className="flex flex-row flex-wrap -mx-3">
                                {["https://i.imgur.com/sduLRvf.jpeg", "https://i.imgur.com/tXtwrPd.jpeg", "https://i.imgur.com/IVyU5Im.jpeg", "https://i.imgur.com/QguApMA.jpeg", "https://i.imgur.com/Xulubox.jpeg", "https://i.imgur.com/yxovJ4S.jpeg","https://i.imgur.com/fNXT1wc.jpeg","https://i.imgur.com/gjEZAJ7.jpeg"].map((data) => (
                                    <Card3 data={data} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* block news */}
            <div className="bg-gray-50 py-6">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        {/* Left */}
                        <div className="flex-shrink max-w-full w-full   overflow-hidden">
                            <div className="w-full py-3">
                                <h2 className="text-gray-800 text-2xl font-bold">
                                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Bloque 4
                                </h2>
                            </div>
                            <div className="flex flex-row flex-wrap -mx-3">
                                {["https://i.imgur.com/dkV5le5.jpeg", "https://i.imgur.com/iNM4eIa.jpeg", "https://i.imgur.com/M50O5pj.jpeg", "https://i.imgur.com/TvY6Ynf.jpeg", "https://i.imgur.com/VRcVIoj.jpeg", "https://i.imgur.com/jedKbER.jpeg", "https://i.imgur.com/R4YgEev.jpeg", "https://i.imgur.com/LIAKlHY.jpeg"].map((data) => (
                                    <Card3 data={data} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pagina;