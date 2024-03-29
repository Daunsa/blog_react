import { Link } from "react-router-dom";
function Card3(props) {
    return (
        <>
            <div
                className="flex-shrink max-w-full w-full sm:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                <div className="flex flex-row sm:block hover-img">
                    <Link to={`/post/${props.data?.id}`}>
                        <img className="max-w-full w-full mx-auto" src={props.data?.imagen_promocional} alt="alt title" />
                    </Link>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <Link to={`/post/${props.data?.id}`}>{props.data?.titulo}</Link>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">{props.data?.contenido}</p>
                        <a className="text-gray-500" href="#"><span
                            className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                            {props.data?.organizacion === 'ng' ? 'National Geographic' : props.data?.organizacion === 'nt' ? 'Natgeo Travel' : props.data?.organizacion === 'ra' ? 'Rainforest Alliance' : 'Por definir'}
                        </a>
                    </div>
                </div>
            </div>
        </>);
}

export default Card3;