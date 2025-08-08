import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const STEPS = [
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

export default function Process() {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-center text-3xl font-bold">Cómo trabajamos</h2>
        <p className="text-center muted mt-2">
          Proceso simple y efectivo en 3 pasos
        </p>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {STEPS.map((s) => (
            <Card key={s.num} className="p-6">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-300 font-bold grid place-items-center">
                {s.num}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="text-xs muted">{s.time}</p>
              <p className="mt-2 text-sm muted">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
