import { Link } from 'react-router-dom'
import preweddingPageImg from '../../../assets/services/prewedding.webp'
import { ArrowLeft, MapPin, Shirt, Smile, GalleryHorizontal, Check, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'


const PreweddingSessionPage = () => {

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

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
            title: "Locación a Elegir",
            description: "Elige el lugar que tenga un significado especial para ustedes o déjame sugerirte locaciones increíbles.",
            icon: MapPin
        },
        {
            title: "Asesoría de Vestuario",
            description: "Te ayudo a elegir la ropa perfecta para que luzcan increíbles en las fotos.",
            icon: Shirt
        },

        {
            title: "Ambiente Relajado",
            description: "Una sesión sin presiones donde pueden ser ustedes mismos y divertirse.",
            icon: Smile
        },

        {
            title: "Galería Privada",
            description: "Todas tus fotos en una galería online privada para compartir con quien quieras.",
            icon: GalleryHorizontal
        }
    ];

    const packages = [
        {
            name: "Sesión Básica",
            price: "$400",
            features: [
                "1-2 horas de sesión",
                "30+ fotos editadas",
                "1 locación",
                "Galería online privada"
            ]
        },

        {
            name: "Sesión Estándar",
            price: "$600",
            features: [
                "2-3 horas de sesión",
                "50+ fotos editadas",
                "2 locaciones",
                "Asesoría de vestuario",
                "Galería online privada"
            ],
            popular: true
        },

        {
            name: "Sesión Premium",
            price: "$900",
            features: [
                "4 horas de sesión",
                "80+ fotos editadas",
                "3 locaciones",
                "Asesoría completa de vestuario",
                "Álbum impreso 20x20cm",
                "Galería online privada"
            ]
        }

    ]


    return (
        <>

            <section
                className='relative min-h-[70vh] flex items-center justify-center overflow-hidden'
                style={{
                    backgroundImage: `url(${preweddingPageImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >

                <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-3xl">
                        <Link
                            to="/#services"
                            className='inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors cursor-pointer whitespace-nowrap'
                        >
                            <ArrowLeft />
                            Volver a Servicios

                        </Link>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
                            Sesión Pre-Boda
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                            Captura la emoción antes del gran día
                        </p>
                    </div>
                </div>

            </section>

            <section className='py-20 bg-white'>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed mb-16 text-center">
                            Un recuerdo previo a tu gran día. Creamos una sesión divertida, natural y romántica que refleja su esencia como pareja y les permite sentirse cómodos frente a la cámara antes de la boda.
                        </p>

                        <h2 className="text-4xl font-serif mb-12 text-center text-gray-900">
                            Qué Incluye
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                            {features.map((feature,index)=> (
                                <div
                                    key={index}
                                    className='flex gap-4 p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300'
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
                            {packages.map((pack, index)=> (
                                <div
                                    key={index}
                                    className={`relative bg-white rounded-lg p-8 border-2 ${pack.popular ? 'border-primary shadow-2xl scale-101': 'border-gray-200 shadow-lg'} hover:shadow-2xl transition-all duration-300`}
                                >
                                    {pack.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                                            Más Popular
                                        </div>
                                    )}

                                    <h3 className="text-2xl font-serif mb-4 text-gray-900 text-center">
                                        {pack.name}
                                    </h3>

                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-primary text-center block">
                                            {pack.price}
                                        </span>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {pack.features.map((feature, idx)=> (
                                            <li
                                                key={idx}
                                                className='flex items-start gap-2 text-gray-700'
                                            >
                                                <Check className='text-primary' />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                    onClick={scrollToContact}
                                    className={`w-full px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                                        pack.popular ?
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
                                className='inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 cursor-pointer whitespace-nowrap'
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

export default PreweddingSessionPage