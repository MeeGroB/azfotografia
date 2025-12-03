
import { Link } from "react-router-dom"
import { albumsData } from "../../../data/albums"
import { Calendar, MapPin } from "lucide-react"


function Albums() {
    return (
        <section
            id="albums"
            className="py-24 bg-white"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 ">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">
                        Álbumes de Bodas
                    </h2>
                    <p className="text-lg text-gray-600">
                        Historias de amor que he tenido el honor de capturar
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {albumsData.map((album, index) => (
                        <Link
                            key={album.id}
                            to={`/album/${album.id}`}
                            className="group cursor-pointer"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                                <img
                                    src={album.coverImage}
                                    alt={album.coupleName}
                                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <p className="font-medium mb-1">Ver Álbum Completo</p>
                                        <p className="text-sm opacity-90">
                                            {album.photoCount} fotos
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-serif mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                                {album.coupleName}
                            </h3>

                            <p className="text-gray-600 text-sm mb-1 flex gap-2 items-center">
                                <MapPin className="w-4 h-4" />
                                {album.location}
                            </p>

                            <p className="text-gray-600 text-sm flex gap-2 items-center">
                                <Calendar className="w-4 h4" />
                                {album.date}
                            </p>


                        </Link>
                    ))}
                </div>
            </div>


        </section>
    )
}

export default Albums