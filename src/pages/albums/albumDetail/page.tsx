import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { albumsData } from "../../../data/albums";
import { ArrowLeft, Calendar, Images, MapPin, X, ZoomIn } from "lucide-react";

const AlbumDetailPage = () => {

    const { id } = useParams();
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    const album = albumsData.find(a => a.id === Number(id));

    useEffect(()=> {
        window.scrollTo(0,0);
    },[]);


    if(!album) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">
                        Álbum no encontrado
                    </h1>
                    <Link
                        to="/"
                        className="text-primary hover:underline cursor-pointer whitespace-nowrap"
                    >
                        Volver al inicio
                    
                    </Link>
                </div>

            </div>
        );
    }

  return (
    <>
        <section className="pt-32 pb-20 bg-linear-to-r from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors whitespace-nowrap"
                    onClick={()=> {
                        setTimeout(() => {
                            const element = document.getElementById("albums");
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
                    }}
                >
                    <ArrowLeft />
                    Volver a Álbumes
                </Link>

                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-900">
                        {album.coupleName}
                    </h1>

                    <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="text-primary" />
                            <span><strong>Fecha: </strong>{album.date}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin className="text-primary" />
                            <span><strong>Lugar: </strong>{album.location}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Images className="text-primary" />
                            <span>{album.photoCount} fotos</span>
                        </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Su historia: </strong>
                        {album.description}
                    </p>
                </div>

                {/* Galeria estilo Polaroid  */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                        {album.photos && album.photos.length > 0 ? (
                            album.photos.map((photo, index)=> (
                                <div
                                    key={index}
                                    className="cursor-pointer"
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        transform: `rotate(${(index % 3 -1) *2}deg)`
                                    }}
                                    onClick={()=> setSelectedPhoto(photo)}
                                >
                                    {/* Frame Polaroid */}
                                    <div className="bg-white p-4 pb-16 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:rotate-0 relative group">
                                        {/* Foto */}
                                        <div className="relative overflow-hidden bg-gray-100">
                                            <img 
                                                src={photo}
                                                alt={`${album.coupleName} - Foto ${index +1}`}
                                                className="w-full aspect-4/3 object-cover object-center"
                                                loading="lazy"
                                            />
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                                <ZoomIn className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        </div>

                                        {/* Texto Polaroid */}
                                        <div className="absolute bottom-4 left-4 right-4 h-12 flex items-center justify-center">
                                            <p className="text-gray-600 text-sm">
                                                {album.coupleName}
                                            </p>
                                        </div>

                                        {/* Efecto Cinta */}
                                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm border border-gray-200/50 rotate-0 shadow-sm"></div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-500">
                                    No hay fotos disponibles
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sección CTA */}
                <div className="max-w-3xl mx-auto text-center mt-20 bg-amber-50 rounded-2xl p-12">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">
                        ¿Te gustaría un álbum así?
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Cada boda es única y merece ser capturada con el mismo amor y dedicación
                    </p>

                    <Link
                        to="/"
                        onClick={()=> {
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
                        }}
                        className="inline-block px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 font-medium shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
                    >
                        Contáctame
                    </Link>
                </div>
            </div>
        </section>

        {/* Lightbox */}
        {selectedPhoto && (
            <div
                className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                onClick={()=> setSelectedPhoto(null)}
            >
                <button
                    onClick={()=> setSelectedPhoto(null)}
                    className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-all cursor-pointer z-10"
                >
                    <X />
                </button>
                <img 
                    src={selectedPhoto}
                    alt="Vista ampliada"
                    className="max-w-full max-h-full object-contain"
                    onClick={(e)=> e.stopPropagation()}
                />
            </div>
        )}
    </>
  )
}

export default AlbumDetailPage