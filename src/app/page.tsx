//

function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm/30">
      <div className="container-page px-4">
        <nav className="glass-card pill mt-5 mb-6 px-5 py-3 flex items-center justify-between">
          <div className="text-[15px] font-semibold tracking-tight">
            Neuron Agency
          </div>
          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">
              Sobre Nosotros
            </a>
            <a href="#services" className="hover:text-white">
              Servicios
            </a>
            <a href="#portfolio" className="hover:text-white">
              Portafolio
            </a>
          </div>
          <a
            href="#contacto"
            className="pill bg-white/10 hover:bg-white/15 text-white text-sm px-4 py-2 transition-colors"
          >
            Quiero una propuesta
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-gradient pt-16 pb-10">
      <div className="container-page px-4 text-center">
        <div className="inline-block px-4 py-2 rounded-full text-xs bg-white/10 text-white/80 ring-1 ring-white/15">
          Consultoría y Construcción de IA a la medida
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Aumenta tu productividad hasta{" "}
          <span className="text-indigo-300">40%</span> con IA a medida
        </h1>
        <p className="mt-4 text-slate-300 max-w-[760px] mx-auto">
          Transformamos tu negocio con soluciones de inteligencia artificial
          personalizadas que automatizan procesos y optimizan resultados.
        </p>
        <div className="mt-8">
          <a
            href="#contacto"
            className="pill inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-6 py-3 shadow-elevated"
          >
            Obten una propuesta gratuita
          </a>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="py-10">
      <div className="container-page px-4">
        <div className="glass-card p-4 md:p-6">
          <p className="text-center font-semibold mb-4">
            ¿Qué puede hacer la IA? Que la misma IA te lo diga ↓
          </p>
          <div className="relative w-full overflow-hidden rounded-xl bg-black aspect-video">
            <video controls className="w-full h-full">
              <source src="" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      title: "Productividad",
      metric: "+30%",
      desc: "Automatiza tareas repetitivas y libera tiempo para actividades estratégicas de alto valor",
      accent: "from-emerald-400/20 to-transparent",
    },
    {
      title: "Costos",
      metric: "-40%",
      desc: "Reduce gastos operativos significativamente con procesos automatizados y optimizados",
      accent: "from-amber-400/25 to-transparent",
    },
    {
      title: "Decisiones Inteligentes",
      metric: "100%",
      desc: "Obtén insights precisos y análisis profundos para tomar mejores decisiones de negocio",
      accent: "from-indigo-400/25 to-transparent",
    },
  ];
  return (
    <section className="py-10">
      <div className="container-page px-4">
        <h2 className="text-center text-3xl font-bold">¿Por qué elegir IA?</h2>
        <p className="text-center text-slate-300 mt-2">
          Beneficios comprobados que transforman tu negocio
        </p>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {items.map((b) => (
            <div key={b.title} className="glass-card p-6">
              <div
                className={`h-10 w-10 rounded-full bg-gradient-to-b ${b.accent} mb-3`}
              />
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <div className="text-2xl font-bold text-indigo-300 mt-1">
                {b.metric}
              </div>
              <p className="text-sm text-slate-300 mt-2">{b.desc}</p>
              <div className="mt-4 h-1 w-full bg-white/10 rounded-full">
                <div className="h-1 bg-indigo-400/70 rounded-full w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      num: 1,
      title: "Descubrimiento",
      time: "1-2 semanas",
      desc: "Analizamos tu negocio e identificamos oportunidades de automatización con IA",
    },
    {
      num: 2,
      title: "Prototipo",
      time: "2-3 meses",
      desc: "Desarrollamos una solución personalizada y la probamos contigo en tiempo real",
    },
    {
      num: 3,
      title: "Ejecución",
      time: "Variable",
      desc: "Implementamos la solución y te acompañamos en todo el proceso de adopción",
    },
  ];
  return (
    <section className="py-10">
      <div className="container-page px-4">
        <h2 className="text-center text-3xl font-bold">Cómo trabajamos</h2>
        <p className="text-center text-slate-300 mt-2">
          Proceso simple y efectivo en 3 pasos
        </p>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {steps.map((s) => (
            <div key={s.num} className="glass-card p-6">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-300 font-bold grid place-items-center">
                {s.num}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="text-xs text-slate-400">{s.time}</p>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsTestimonial() {
  return (
    <section className="py-12">
      <div className="container-page px-4">
        <h2 className="text-center text-3xl font-bold">
          Nuestros clientes confían en nosotros
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 opacity-80">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card h-20" />
          ))}
        </div>
        <div className="glass-card p-6 mt-8">
          <p className="italic text-slate-300">
            “Llevaba años buscando un servicio ágil y que me entendiera para el
            diseño de página web. Profesional desde el inicio, y atención
            enfocada a los detalles más relevantes. En 5 días logré lo que
            busqué por 3 años.”
          </p>
          <p className="mt-3 text-sm text-slate-400">
            — Luis Armando Bravo, Director
          </p>
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section className="py-12">
      <div className="container-page px-4">
        <div className="glass-card p-8 text-center">
          <h2 className="text-3xl font-bold">Casos de éxito destacados</h2>
          <div className="mt-6 text-6xl font-extrabold text-indigo-300">
            300
          </div>
          <p className="mt-2 text-slate-300">
            clientes potenciales atendidos diariamente
          </p>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Integramos un chat de inteligencia artificial que resolvió el
            problema de ~300 clientes potenciales que quedaban sin atención
            diariamente. La solución redujo la carga de trabajo de los
            vendedores y funciona como filtro inteligente para calificar leads.
          </p>
          <a
            href="#contacto"
            className="pill inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-6 py-3 mt-6"
          >
            Quiero una solución como esta
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="container-page px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="text-lg font-semibold">Neuron Agency</div>
          <p className="mt-2 text-slate-300">
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
          <ul className="mt-2 space-y-2 text-slate-300">
            <li>
              <a href="#about" className="hover:text-white">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Servicios
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-white">
                Portafolio
              </a>
            </li>
          </ul>
        </div>
        <div id="contacto">
          <div className="font-semibold">Contacto</div>
          <ul className="mt-2 space-y-2 text-slate-300">
            <li>contacto@jcagency.tech</li>
            <li>León, Guanajuato, México</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-400 pb-8">
        © 2025 Neuron Agency. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoSection />
      <Benefits />
      <Process />
      <ClientsTestimonial />
      <CaseStudy />
      <Footer />
    </div>
  );
}
