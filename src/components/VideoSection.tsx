import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export default function VideoSection() {
  return (
    <section className="py-10">
      <Container>
        <Card className="p-4 md:p-6">
          <p className="text-center font-semibold mb-4">
            ¿Qué puede hacer la IA? Que la misma IA te lo diga ↓
          </p>
          <div className="relative w-full overflow-hidden rounded-xl bg-black aspect-video">
            <video controls className="w-full h-full">
              <source src="" />
            </video>
          </div>
        </Card>
      </Container>
    </section>
  );
}
