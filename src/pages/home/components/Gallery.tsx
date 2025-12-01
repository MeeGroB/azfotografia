import { useState } from "react";
import { X } from "lucide-react";

import imgGaleria1 from '../../../assets/gallery/banner.webp';
import imgGaleria2 from '../../../assets/gallery/preboda1.webp';
import imgGaleria3 from '../../../assets/gallery/preboda2.webp';
import imgGaleria4 from '../../../assets/gallery/preboda3.webp';
import imgGaleria5 from '../../../assets/gallery/boda1.webp';
import imgGaleria6 from '../../../assets/gallery/boda2.webp';
import imgGaleria7 from '../../../assets/gallery/boda3.webp';
import imgGaleria8 from '../../../assets/gallery/preboda5.webp';


const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      url: imgGaleria1,
      title: "Pie de foto"
    },

    {
      url: imgGaleria2,
      title: "Pie de foto"
    },

    {
      url: imgGaleria3,
      title: "Pie de foto"
    },

    {
      url: imgGaleria4,
      title: "Pie de foto"
    },

    {
      url: imgGaleria5,
      title: "Pie de foto"
    },

    {
      url: imgGaleria6,
      title: "Pie de foto"
    },

    {
      url: imgGaleria7,
      title: "Pie de foto"
    },

    {
      url: imgGaleria8,
      title: "Pie de foto"
    }
  ];

  return (
    <section id='gallery' className='py-24 bg-white'>

      {/* Titulo */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">
            Mis Mejores Trabajos
          </h2>
          <p className="text-lg text-gray-600">
            Una selección de momentos inolvidables
          </p>
        </div>

        {/* Galeria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.title}</p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Imagen seleccionada */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-60 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div onClick={(e)=> e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full h-full object-contain"
            />
          </div>
        </div>
      )}

    </section>
  )
}

export default Gallery