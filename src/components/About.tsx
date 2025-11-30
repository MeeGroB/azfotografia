import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

import alejandroImg from '../assets/alejandro.webp';

const About = () => {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(()=> {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if(sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return ()=> {
      if(sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, []);

  return (
    <section id='about' ref={sectionRef} className='py-20 bg-linear-to-r from-white to-amber-50' >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sobre Mí
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce al fotógrafo detrás de la cámara
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

            {/* Imagen */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative">
                <img 
                  src= {alejandroImg} 
                  alt="Alejandro Zárate" 
                  className='w-full h-auto rounded-2xl shadow-2xl object-cover object-top'
                
                />
              </div>

            </div>

              {/* Texto */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Soy Alejandro, fotógrafo profesional de bodas con más de 10 años de experiencia capturando historias de amor. Mi pasión por la fotografía comenzó cuando era joven, y desde entonces he tenido el privilegio de documentar más de 200 bodas en todo Perú.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Mi filosofía es simple: cada pareja tiene una historia única que merece ser contada de manera auténtica y emotiva. No solo capturo momentos, creo recuerdos que durarán para siempre. Mi estilo combina la elegancia clásica con un toque moderno y natural, siempre buscando la luz perfecta y los momentos más genuinos.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Lo que más amo de mi trabajo es ser testigo del amor en su forma más pura. Cada boda es diferente, cada pareja es especial, y mi objetivo es capturar la esencia única de su día con imágenes que los emocionen cada vez que las vean.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-gray-600">Bodas Capturadas</div>
                </div>

                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Clientes Felices</div>
                </div>
              </div>

            </div>

          </div>

          {/* Proceso de trabajo */}
          <article 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mi Proceso de Trabajo
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cómo trabajo contigo para crear recuerdos perfectos
              </p>
            </div>

            {/* Pasos */}
            <div className="grid md:grid-cols-4 gap-8">

              {/* Paso 1 */}
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                    1
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    Consulta Inicial
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Nos reunimos para conocernos, hablar sobre tu visión y entender qué es lo que buscas para tu día especial.
                  </p>
                </div>

                {/* Flecha */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className='text-5xl text-primary/30' />
                </div>
              </div>

              {/* Paso 2 */}
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                    2
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    Planificación
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Creamos un plan detallado del día, incluyendo locaciones, horarios y momentos clave que no queremos perdernos.
                  </p>
                </div>

                {/* Flecha */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className='text-5xl text-primary/30' />
                </div>
              </div>

              {/* Paso 3 */}
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                    3
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    El Gran Día
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Capturo cada momento importante con discreción y profesionalismo, asegurándome de que te sientas cómodo y natural.
                  </p>
                </div>

                {/* Flecha */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className='text-5xl text-primary/30' />
                </div>
              </div>

              {/* Paso 4 */}
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                    4
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    Edición y Entrega
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Edito cuidadosamente cada imagen y te entrego tu galería completa en 4-6 semanas para que revivas tu día especial.
                  </p>
                </div>

                {/* Flecha */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className='text-5xl text-primary/30' />
                </div>
              </div>


            </div>

          </article>

        </div>
    </section>
  )
}

export default About