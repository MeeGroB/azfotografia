import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.webp'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const [isScrolled, setIsScrolled] = useState(false);
    const isHomePage = window.location.pathname === '/';

    const scrollToId = (id: string, delay = 100) => {
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }, delay);
    };

    const navigateToSection = (id: string) => {
        const href = `/#${id}`;

        if (isHomePage) {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.hash = id;
            }
            setMobileMenuOpen(false);
            return;
        }


        if ((window as any).REACT_APP_NAVIGATE) {
            (window as any).REACT_APP_NAVIGATE('/');
            scrollToId(id, 300);
        } else {
            window.location.href = href;
        }

        setMobileMenuOpen(false);
    };



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const navbarClasses = isHomePage && !isScrolled ?
        'bg-transparent text-white' :
        'bg-white text-gray-800 shadow-md'

    const linkClasses = isHomePage && !isScrolled ?
        'text-white hover:text-primary' :
        'tex-gray-700 hover:text-primary';


    return (
        <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${navbarClasses}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    {/* Logo */}
                    <a
                        href='/'
                        className='flex items-center cursor-pointer'
                    >
                        <img src={logoImg} alt="AZ Fotografía Logo" className={`h-12 transition-all duration-300 ${isHomePage && !isScrolled ? 'logo-inverted' : ''}`} />
                    </a>


                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/#home" className={`font-medium transition-colors cursor-pointer whitespace-nowrap ${linkClasses}`} onClick={(e)=> {
                            e.preventDefault();
                            navigateToSection('home');
                        }}>Inicio</a>

                        <a href="/#about" className={`font-medium transition-colors cursor-pointer whitespace-nowrap ${linkClasses}`} onClick={(e)=> {
                            e.preventDefault();
                            navigateToSection('about');
                        }}>Sobre Mi</a>

                        <a href="/#services" className={`font-medium transition-colors cursor-pointer whitespace-nowrap ${linkClasses}`} onClick={(e)=> {
                            e.preventDefault();
                            navigateToSection('services')
                        }}>Servicios</a>

                        <a href="/precios" className={`font-medium transition-colors cursor-pointer whitespace-nowrap ${linkClasses}`} >Precios</a>

                        <a href="/#gallery" className={`font-medium transition-colors cursor-pointer whitespace-nowrap ${linkClasses}`} onClick={(e)=> {
                            e.preventDefault();
                            navigateToSection('gallery');
                        }}>Galería</a>

                        <a href="/#albums" className={`font-medium transition-colors cursor-pointer whitespace-nowrap ${linkClasses}`} onClick={(e)=> {
                            e.preventDefault();
                            navigateToSection('albums');
                        }}>Álbumes</a>

                        <a href="/#contact" className='bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors cursor-pointer whitespace-nowrap' onClick={(e)=> {
                            e.preventDefault();
                            navigateToSection('contact');
                        }}>Contacto</a>
                    </div>

                    <button
                        onClick={()=> setMobileMenuOpen(!mobileMenuOpen)}
                        className='md:hidden text-primary transition-colors'
                    >
                        {mobileMenuOpen? 
                            <X className='h-6 w-6' />: 
                            <Menu className='h-6 w-6' />}
                    </button>

                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-4 py-4 space-y-9 flex flex-col items-center">
                            <a href="/#home" onClick={(e)=> { e.preventDefault(); navigateToSection('home'); }} className='block w-full text-center text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap'>
                            Inicio</a>

                            <a href="/#about" onClick={(e)=> { e.preventDefault(); navigateToSection('about'); }} className='block w-full text-center text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap'>
                            Sobre Mi</a>

                            <a href="/#services" onClick={(e)=> { e.preventDefault(); navigateToSection('services'); }} className='block w-full text-center text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap'>
                            Servicios</a>

                            <a href="/precios" onClick={(e)=> { /* precios es ruta distinta, dejamos normal */ }} className='block w-full text-center text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap'>
                            Precios</a>

                            <a href="/#gallery" onClick={(e)=> { e.preventDefault(); navigateToSection('gallery'); }} className='block w-full text-center text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap'>
                            Galería</a>

                            <a href="/#albums" onClick={(e)=> { e.preventDefault(); navigateToSection('albums'); }} className='block w-full text-center text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap'>
                            Álbumes</a>

                            <a href="/#contact" onClick={(e)=> { e.preventDefault(); navigateToSection('contact'); }} className='inline-block w-auto bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors cursor-pointer whitespace-nowrap text-center mx-auto'>
                            Contacto</a>
                        </div>

                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar