import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Camera, Video, ArrowRight } from "lucide-react";

import bodaImg from '../../../assets/services/boda.webp';
import prebodaImg from '../../../assets/services/preboda.webp';
import videobodaImg from '../../../assets/services/videoboda.webp';


const Services = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(()=> {
        const observer = new IntersectionObserver(
            ([entry])=> {
                if(entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1}
        );

        if(sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return ()=> {
            if(sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        }
    }, []);


    const services = [
        {
            id: 'wedding',
            title: 'Bodas',
            description: 'Captura cada momento mágico de tu boda con un estilo elegante y atemporal.',
            icon: Heart,
            image: bodaImg,
            link: '/servicios/fotografia-bodas'
        },
        {
            id: 'video',
            title: 'Video de bodas',
            description: 'Revive tu día especial con un video cinematográfico que cuenta tu historia de amor.',
            icon: Video,
            image: videobodaImg,
            link: '/servicios/video-bodas'
        },
        {
            id: 'prewedding',
            title: 'Pre Bodas',
            description: 'Una sesión romántica para capturar la emoción antes del gran día.',
            icon: Camera,
            image: prebodaImg,
            link: '/servicios/pre-boda'
        }
    ]

  return (
    <section id="services"
        ref={sectionRef}
        className="py-20 bg-white"
    >
        <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">
                    Servicios Profesionales
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Descubre cómo puedo hacer tu día especial inolvidable
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {services.map((service, index)=> (
                    <div
                        key={service.id}
                        className={`group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${index *100}ms`}}
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover  group-hover:scale-110 transition-transform duration-500"    
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 w-12 h-12 flex items-center justify-center bg-primary rounded-full text-white">
                                <service.icon className="w-5 h-5 " />
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-serif mb-3 text-gray-900">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <Link
                                to={service.link}
                                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 cursor-pointer whitespace-nowrap"
                            >
                                Ver Detalles
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <Link
                    to="/precios"
                    className="inline-block px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 font-medium shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
                >
                    Ver Todos los Precios
                </Link>
            </div>
        </div>
        
    </section>
  )
}

export default Services