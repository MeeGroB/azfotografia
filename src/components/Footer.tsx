// import { useLocation } from "react-router-dom";
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok   } from "react-icons/fa";

import logoImg from '../assets/logo.webp';

const Footer = () => {

    // const location = useLocation();

    // const scrollToSection = (sectionId: string) => {
    //     if(location.pathname !== '/') {
    //         window.REACT_APP_NAVIGATE('/');
    //         setTimeout(() => {
    //             const element = document.getElementById(sectionId);

    //             if(element) {
    //                 element.scrollIntoView({ behavior: 'smooth'})
    //             }
    //         }, 1000);
    //     } else {
    //         const element = document.getElementById(sectionId);
    //         if(element) {
    //             element.scrollIntoView({ behavior: 'smooth'})
    //         }
    //     }
    // }

    // const navigateToPage = (path: string)=> {
    //     window.REACT_APP_NAVIGATE(path)
    // }

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Logo y Descripción */}
                <div className="col-span-1 md:col-span-2">
                    <img 
                        src={logoImg}
                        alt="AZ Fotografía Logo"
                        className="h-12 mb-4 " 
                    />
                    <p className="text-gray-300 mb-6 leading-relaxed">Contamos Historias</p>

                    <div className="flex space-x-4">
                        <a 
                            href="https://www.instagram.com/azfotografia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-300 cursor-pointer"
                        >
                            <FaInstagram className="h-6 w-6" />
                        </a>

                        <a 
                            href="https://www.facebook.com/alejandrozaratefotografia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-300 cursor-pointer"
                        >
                            <FaFacebook className="h-6 w-6" />
                        </a>

                        <a 
                            href="https://www.youtube.com/channel/UC-7KhBZjAGbniNzOq4tkrEQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-300 cursor-pointer"
                        >
                            <FaYoutube className="h-6 w-6" />
                        </a>

                        <a 
                            href="https://www.tiktok.com/@azfoto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-300 cursor-pointer"
                        >
                            <FaTiktok className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer