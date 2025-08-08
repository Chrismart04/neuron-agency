export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="container-page px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="text-lg font-semibold">Neuron Agency</div>
          <p className="mt-2 muted-strong">
            Transformamos negocios a través de soluciones digitales innovadoras
            y consultoría especializada en IA.
          </p>
          <div className="flex gap-3 mt-4 opacity-80">
            <div className="h-6 w-6 bg-white/15 rounded" />
            <div className="h-6 w-6 bg-white/15 rounded" />
            <div className="h-6 w-6 bg-white/15 rounded" />
          </div>
        </div>
        <div>
          <div className="font-semibold">Enlaces Rápidos</div>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#about" className="muted-strong hover:text-foreground">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="muted-strong hover:text-foreground"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="muted-strong hover:text-foreground"
              >
                Portafolio
              </a>
            </li>
          </ul>
        </div>
        <div id="contacto">
          <div className="font-semibold">Contacto</div>
          <ul className="mt-2 space-y-2">
            <li className="muted-strong">contacto@jcagency.tech</li>
            <li className="muted-strong">León, Guanajuato, México</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-400 pb-8">
        <span className="muted-strong">
          © 2025 Neuron Agency. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
