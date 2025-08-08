import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export default function CaseStudy() {
  return (
    <section className="py-12">
      <Container>
        <Card className="p-8 text-center">
          <h2 className="text-3xl font-bold">Casos de éxito destacados</h2>
          <div className="mt-6 text-6xl font-extrabold text-indigo-300">
            300
          </div>
          <p className="mt-2 muted">
            clientes potenciales atendidos diariamente
          </p>
          <p className="mt-4 muted max-w-2xl mx-auto">
            Integramos un chat de inteligencia artificial que resolvió el
            problema de ~300 clientes potenciales que quedaban sin atención
            diariamente. La solución redujo la carga de trabajo de los
            vendedores y funciona como filtro inteligente para calificar leads.
          </p>
          <a
            href="#contacto"
            className="pill inline-flex items-center justify-center cta-btn font-medium px-6 py-3 mt-6"
          >
            Quiero una solución como esta
          </a>
        </Card>
      </Container>
    </section>
  );
}
