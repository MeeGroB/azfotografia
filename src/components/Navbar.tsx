import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.webp'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const [isScrolled, setIsScrolled] = useState(false);
    const isHomePage = location.pathname === '/';

    // useEffect(()=> {
    //     if(mobileMenuOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'unset';
    //     }

    //      return ()=> {
    //         document.body.style.overflow = 'unset';
    //      }
    // }, [mobileMenuOpen]);



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
                        <a href="/#home" className={`font-medium transition-colors cursor-pointer whitespace-nowrap ${linkClasses}`}>Inicio</a>

                        <a href="/#about" className={`font-medium transition-colors cursor-pointer whitespace-nowrap ${linkClasses}`}>Sobre Mi</a>

                        <a href="/#services" className={`font-medium transition-colors cursor-pointer whitespace-nowrap ${linkClasses}`}>Servicios</a>

                        <a href="/pricing" className={`font-medium transition-colors cursor-pointer whitespace-nowrap ${linkClasses}`}>Precios</a>

                        <a href="/#gallery" className={`font-medium transition-colors cursor-pointer whitespace-nowrap ${linkClasses}`}>Galería</a>

                        <a href="/#albums" className={`font-medium transition-colors cursor-pointer whitespace-nowrap ${linkClasses}`}>Álbumes</a>

                        <a href="/#contact" className='bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors cursor-pointer whitespace-nowrap'>Contacto</a>
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
                            <a href="/#home" onClick={() => setMobileMenuOpen(false)} className='block w-full text-center text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap'>
                            Inicio</a>

                            <a href="/#about" onClick={() => setMobileMenuOpen(false)} className='block w-full text-center text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap'>
                            Sobre Mi</a>

                            <a href="/#services" onClick={() => setMobileMenuOpen(false)} className='block w-full text-center text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap'>
                            Servicios</a>

                            <a href="/pricing" onClick={() => setMobileMenuOpen(false)} className='block w-full text-center text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap'>
                            Precios</a>

                            <a href="/#gallery" onClick={() => setMobileMenuOpen(false)} className='block w-full text-center text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap'>
                            Galería</a>

                            <a href="/#albums" onClick={() => setMobileMenuOpen(false)} className='block w-full text-center text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap'>
                            Álbumes</a>

                            <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className='inline-block w-auto bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors cursor-pointer whitespace-nowrap text-center mx-auto'>
                            Contacto</a>
                        </div>

                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar