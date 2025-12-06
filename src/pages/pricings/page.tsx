
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { Camera, Heart, Info, Video } from "lucide-react";

import pricingsImg from "../../assets/services/pricings.webp";

import weddingImg from "../../assets/services/wedding.webp";
import videoImg from "../../assets/services/videoboda.webp";
import preWeddingImg from "../../assets/services/preboda.webp"


const Pricingpage = () => {

  useEffect(()=> {
    window.scrollTo(0,0);
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

  const services = [
    {
      id: "wedding",
      title: "Fotografía de Bodas",
      icon: Heart,
      priceRange: "$1,200 - $2,500",
      link: "/servicios/fotografia-bodas",
      image: weddingImg

    },

    {
      id: "video",
      title: "Video de Bodas",
      icon: Video,
      priceRange: "$1,500 - $3,000",
      link: "/servicios/video-bodas",
      image: videoImg

    },

    {
      id: "prewedding",
      title: "Sesión Pre Boda",
      icon: Camera,
      priceRange: "$400 - $900",
      link: "/servicios/sesion-pre-boda",
      image: preWeddingImg

    }
  ];




  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${pricingsImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:*:text-6xl font-serif mb-6 leading-tight">
              Precios y Paquetes
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Encuentra el paquete perfecto para tu evento especial
            </p>
          </div>
        </div>

      </section>


      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ofrezco una variedad de paquetes diseñados para adaptarse a tus necesidades y presupuesto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index)=> (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 flex items-center justify-center bg-primary rounded-full text-white">
                    <service.icon />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-3 text-gray-900">
                    {service.title}
                  </h3>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">
                      {service.priceRange}
                    </span>
                  </div>
                  <Link
                    to={service.link}
                    className="block w-full text-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 font-medium cursor-pointer whitespace-nowrap"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto shadow-md">
            <p className="text-gray-600 text-center inline-flex">
              <Info className="text-primary w-6 h-6 " />
              Nota: Los precios pueden variar según la ubicación y requisitos específicos. Contáctame para un presupuesto personalizado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            ¿Listo para Reservar?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Hablemos sobre tu evento y creemos algo mágico juntos
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-all duration-300 font-medium shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            Contactar Ahora

          </button>
        </div>
      </section>
    </>
  )
}

export default Pricingpage