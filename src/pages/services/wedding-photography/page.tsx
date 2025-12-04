
import { Link } from "react-router-dom";
import { useEffect } from "react";

import weddingImg from "../../../assets/services/wedding.webp"
import { ArrowLeft, Clock, Aperture, Brush, Rocket, Check, ArrowRight } from "lucide-react";

const WeddingPhotographyPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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



    const features = [
        {
            title: "Cobertura Completa",
            description: "Desde los preparativos hasta el último baile, estaré ahí para capturar cada momento importante.",
            icon: Clock
        },

        {
            title: "Estilo Natural",
            description: "Fotografías espontáneas y auténticas que reflejan las emociones reales de tu día.",
            icon: Aperture
        },

        {
            title: "Edición Profesional",
            description: "Cada imagen es cuidadosamente editada para lograr el mejor resultado posible.",
            icon: Brush
        },

        {
            title: "Entrega Rápida",
            description: "Recibirás tus fotos editadas en 4-6 semanas en una galería online privada.",
            icon: Rocket
        }
    ];

    const packages = [
        {
            name: "Paquete Básico",
            price: "$1,200",
            features: [
                "6 horas de cobertura",
                "200+ fotos editadas",
                "Galería online privada",
                "Entrega en 4-6 semanas"
            ]
        },

        {
            name: "Paquete Estándar",
            price: "$1,800",
            features: [
                "8 horas de cobertura",
                "300+ fotos editadas",
                "Sesión de compromiso incluida",
                "Álbum digital de alta resolución",
                "Entrega en 4-6 semanas"
            ],
            popular: true
        },

        {
            name: "Paquete Premium",
            price: "$2,500",
            features: [
                "Cobertura ilimitada",
                "400+ fotos editadas",
                "Segundo fotógrafo",
                "Sesión de compromiso incluida",
                "Álbum impreso premium 30x30cm",
                "Entrega en 3-4 semanas"
            ]
        }
    ]

    return (
        <>
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url(${weddingImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >

                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-3xl">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors cursor-pointer whitespace-nowrap"
                        >
                            <ArrowLeft />
                            Volver a Servicios
                        </Link>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
                            Fotografía de Bodas
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                            Capturando la magia de tu día especial
                        </p>
                    </div>
                </div>

            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed mb-16 text-center">
                            Capturamos cada emoción de tu día más especial. Nuestro objetivo es que revivas tu boda cada vez que veas tus fotos: la sonrisa, las lágrimas y la magia de ese momento único.
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
                            {packages.map((pkg, index)=> (
                                <div
                                    key={index}
                                    className={`relative bg-white rounded-lg p-8 border-2 ${
                                        pkg.popular ? 'border-primary shadow-2xl scale-105': 'border-gray-200 shadow-lg'
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
                                <ArrowRight className='h-4 w-4' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WeddingPhotographyPage