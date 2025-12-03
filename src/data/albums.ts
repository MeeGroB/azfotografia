
import fotoMC1 from "../assets/albumsData/MariaCarlos/foto1.webp";
import fotoMC2 from "../assets/albumsData/MariaCarlos/foto2.webp";
import fotoMC3 from "../assets/albumsData/MariaCarlos/foto3.webp";
import fotoMC4 from "../assets/albumsData/MariaCarlos/foto4.webp";
import fotoMC5 from "../assets/albumsData/MariaCarlos/foto5.webp";
import fotoMC6 from "../assets/albumsData/MariaCarlos/foto6.webp";
import fotoMC7 from "../assets/albumsData/MariaCarlos/foto6.webp";

import fotoAR1 from "../assets/albumsData/AnaRoberto/foto1.webp";
import fotoAR2 from "../assets/albumsData/AnaRoberto/foto2.webp";
import fotoAR3 from "../assets/albumsData/AnaRoberto/foto3.webp";
import fotoAR4 from "../assets/albumsData/AnaRoberto/foto4.webp";
import fotoAR5 from "../assets/albumsData/AnaRoberto/foto5.webp";
import fotoAR6 from "../assets/albumsData/AnaRoberto/foto6.webp";

export const albumsData = [
    {
        id: 1,
        coupleName: "María & Carlos",
        location: "Parque de la Amistad, Surco",
        date: "15 de Junio, 2024",
        coverImage: fotoMC1,
        photoCount: 123,
        description: "Una boda mágica en una iglesia de Surco llena de historia y romance",
        photos: [
            fotoMC1,
            fotoMC2,
            fotoMC3,
            fotoMC4,
            fotoMC5,
            fotoMC6,
            fotoMC7
        ]
    },

    {
        id:2,
        coupleName: "Ana & Roberto",
        location: "Huacachina, Ica",
        date: "25 de Agosto, 2025",
        coverImage: fotoAR5,
        photoCount: 85,
        description: "Una ceremonia íntima frente al oasis de la Huacachina con una puesta de sol inolvidable",
        photos: [
            fotoAR1,
            fotoAR2,
            fotoAR3,
            fotoAR4,
            fotoAR5,
            fotoAR6
        ]
    }


]