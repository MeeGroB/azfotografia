import React from 'react';
import { ArrowDown } from 'lucide-react';

import heroImg from '../../../assets/hero.webp'

const Hero = () => {
  return (
    <section id='home' className='relative min-h-screen flex items-center justify-center overflow-hidden' style={{backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        
        <div className="absolute inset-0 bg-linear-to-r from-white/60 via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className='w-full max-w-2xl'>
                <p className='text-primary font-medium mb-4 text-lg'>
                    Fotografía y Video Profesional de Bodas
                </p>
                <h1 className="text-5xl md:text-6xl text-gray-700 mb-8 leading-tight">
                    No hago fotos, cuento historias
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                    Transformo los momentos más especiales de tu vida en recuerdos eternos. Con más de 10 años de experiencia, mi pasión es contar tu historia de amor a través de imágenes únicas y emotivas.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href="/#gallery" className='px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 font-medium shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap'>
                        Ver Mi Trabajo
                    </a>

                    <a href="/#contact" className='px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium shadow-lg hover:shadow-xl border border-gray-200 cursor-pointer whitespace-nowrap'>
                        Contacto
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="/#about" className='text-gray-700'>
                <ArrowDown className='w-6 h-6' />
            </a>
        </div>

    </section>
  )
}

export default Hero