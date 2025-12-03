import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Albums from "./components/Albums";

export default function HomePage() {
    return (
        <main>
            <Hero />
            <About />
            <Gallery />
            <Services />
            <Albums />
        </main>
    )
}