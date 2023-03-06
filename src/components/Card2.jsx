import { Link } from "react-router-dom";

function Card2(props) {
    return (
        <>
            <div className="flex-shrink max-w-full w-full px-3 pb-5">
                <div className="relative hover-img max-h-98 overflow-hidden">
                    {/*thumbnail*/}
                    <Link to="/post">
                        <img className="max-w-full w-full mx-auto h-auto" src={props.data} alt="Image description" />
                    </Link>
                    <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                        {/*title*/}
                        <Link to="/post">
                            <h2 className="text-3xl font-bold capitalize text-white mb-3">===Amazon Shoppers Are Ditching Designer
                                Belts for This Best-Selling</h2>
                        </Link>
                        <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a
                            natural lead-in to additional content. This very helpfull for generate default content..</p>
                        {/* author and date */}
                        <div className="pt-2">
                            <div className="text-gray-100">
                                <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>National Geographic
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card2;