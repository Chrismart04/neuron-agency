import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const BENEFITS = [
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

export default function Benefits() {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-center text-3xl font-bold">¿Por qué elegir IA?</h2>
        <p className="text-center muted mt-2">
          Beneficios comprobados que transforman tu negocio
        </p>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {BENEFITS.map((b) => (
            <Card key={b.title} className="p-6">
              <div
                className={`h-10 w-10 rounded-full bg-gradient-to-b ${b.accent} mb-3`}
              />
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <div className="text-2xl font-bold text-indigo-300 mt-1">
                {b.metric}
              </div>
              <p className="text-sm muted mt-2">{b.desc}</p>
              <div className="mt-4 h-1 w-full progress-track rounded-full">
                <div className="h-1 progress-fill rounded-full w-2/3" />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
