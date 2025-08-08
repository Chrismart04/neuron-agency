import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export default function Clients() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-center text-3xl font-bold">
          Nuestros clientes confían en nosotros
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 opacity-80">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="h-20" />
          ))}
        </div>
        <Card className="p-6 mt-8">
          <p className="italic text-foreground">
            “Llevaba años buscando un servicio ágil y que me entendiera para el
            diseño de página web. Profesional desde el inicio, y atención
            enfocada a los detalles más relevantes. En 5 días logré lo que
            busqué por 3 años.”
          </p>
          <p className="mt-3 text-sm text-foreground">
            — Luis Armando Bravo, Director
          </p>
        </Card>
      </Container>
    </section>
  );
}
