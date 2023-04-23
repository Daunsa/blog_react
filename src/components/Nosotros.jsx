import Instagram from "./Instagram";
import HojaDeVida from "./HojaDeVida";

function Nosotros() {
    return (
        <>
            <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
                <Instagram />
            </div>
            <section className="bg-gray-100 border-b py-8">
                <HojaDeVida />
            </section>
        </>
    )
}

export default Nosotros;