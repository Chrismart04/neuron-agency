import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="hero-gradient pt-16 pb-10">
      <Container className="text-center">
        <div className="inline-block px-4 py-2 rounded-full text-xs tag">
          Consultoría y Construcción de IA a la medida
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground">
          Aumenta tu productividad hasta{" "}
          <span className="text-indigo-300">40%</span> con IA a medida
        </h1>
        <p className="mt-4 muted max-w-[760px] mx-auto">
          Transformamos tu negocio con soluciones de inteligencia artificial
          personalizadas que automatizan procesos y optimizan resultados.
        </p>
        <div className="mt-8">
          <a
            href="#contacto"
            className="pill inline-flex items-center justify-center cta-btn font-medium px-6 py-3 shadow-elevated"
          >
            Obten una propuesta gratuita
          </a>
        </div>
      </Container>
    </section>
  );
}
