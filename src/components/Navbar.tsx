import Container from "@/components/ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm/30">
      <Container>
        <nav className="glass-card pill mt-5 mb-6 px-5 py-3 flex items-center justify-between">
          <div className="text-[15px] font-semibold tracking-tight">
            Neuron Agency
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="nav-link">
              Sobre Nosotros
            </a>
            <a href="#services" className="nav-link">
              Servicios
            </a>
            <a href="#portfolio" className="nav-link">
              Portafolio
            </a>
          </div>
          <a
            href="#contacto"
            className="pill cta-btn text-sm px-4 py-2 transition-colors"
          >
            Quiero una propuesta
          </a>
        </nav>
      </Container>
    </header>
  );
}
