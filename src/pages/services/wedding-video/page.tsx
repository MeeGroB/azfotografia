
import { Link } from "react-router-dom";
import { useEffect } from "react";

import videoWeddingImg from "../../../assets/services/videoWedding.webp"
import { ArrowLeft, Film, Drone, LucideMusic, Video, Check, ArrowRight } from "lucide-react";

const WeddingVideoPage = () => {

    useEffect(()=> {
        window.scrollTo(0,0);
    }, []);

    const features = [
        {
            title: "Estilo Cinematográfico",
            description: "Videos con calidad de película que cuentan tu historia de manera emotiva y artística.",
            icon: Film
        },

        {
            title: "Grabación con Drones",
            description: "Tomas aéreas espectaculares que añaden una dimensión única a tu video.",
            icon: Drone
        },

        {
            title: "Edición Profesional",
            description: "Música, color y ritmo perfectamente sincronizados para crear una obra maestra.",
            icon: LucideMusic
        },

        {
            title: "Video Completo",
            description: "Además del video editado, recibirás el video completo sin editar de tu ceremonia.",
            icon: Video
        }
    ];

    const packages = [
        {
            name: "Video Highlight",
            price: "$1,500",
            features: [
                "Video de 8-10 minutos",
                "Grabación con drones",
                "Música licenciada",
                "Entrega digital"
            ]
        },

        {
            name: "Video Completo",
            price: "$2,200",
            features: [
                "Video editado de 15-20 minutos",
                "Grabación con drones",
                "Video completo de ceremonia",
                "Música licenciada",
                "Entrega en USB premium"
            ],
            popular: true
        },

        {
            name: "Video Premium",
            price: "$3,000",
            features: [
                "Video editado de 20-30 minutos",
                "Segundo camarógrafo",
                "Grabación con drones",
                "Videos completos sin editar",
                "Entrevistas pre-boda",
                "Entrega en USB premium + Blu-ray"
            ]
        },
    ];

    const scrollToContact = ()=> {
        window.REACT_APP_NAVIGATE('/');
        setTimeout(() => {
            const element = document.getElementById("contact");
            if(element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }
        }, 100);
    }

    return (
        <>
            <section
                className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url(${videoWeddingImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-3xl">
                        <Link
                            to="/#services"
                            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors cursor-pointer whitespace-nowrap"
                        >
                            <ArrowLeft />
                            Volver a Servicios
                        </Link>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
                            Video de Bodas
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                            Tu historia de amor en movimiento
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed mb-16 text-center">
                            No solo registramos tu boda, la convertimos en una película. Nuestros videos cuentan tu historia con un estilo cinematográfico, capturando cada detalle para que lo revivas una y otra vez.
                        </p>

                        <h2 className="text-4xl font-serif mb-12 text-center text-gray-900">
                            Qué Incluye
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                            {features.map((feature, index)=> (
                                <div
                                    key={index}
                                    className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-white shrink-0">
                                        <feature.icon />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                            {feature.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-4xl font-serif mb-12 text-center text-gray-900">
                            Precios
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {packages.map((pkg, idx)=> (
                                <div
                                    key={idx}
                                    className={`relative bg-white rounded-lg p-8 border-2 ${
                                        pkg.popular ? 'border-primary shadow-2xl scale-105' : 'border-gray-200 shadow-lg'
                                    } hover:shadow-2xl transition-all duration-300`}
                                >
                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                                            Más Popular
                                        </div>
                                    )}

                                    <h3 className="text-2xl font-serif mb-4 text-gray-900">
                                        {pkg.name}
                                    </h3>

                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-primary">
                                            {pkg.price}
                                        </span>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx)=> (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-2 text-gray-700"
                                            >
                                                <Check className="text-primary" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={scrollToContact}
                                        className={`w-full px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                                            pkg.popular ?
                                                'bg-primary text-white hover:bg-primary-dark' :
                                                'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                    >
                                        Reservar Ahora

                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="text-center bg-gray-50 rounded-lg p-8">
                            <p className="text-gray-700 mb-4">
                                Contáctame para más información
                            </p>

                            <button
                                onClick={scrollToContact}
                                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 cursor-pointer whitespace-nowrap"
                            >
                                Contáctame
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WeddingVideoPage