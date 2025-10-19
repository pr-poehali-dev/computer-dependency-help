import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container max-w-4xl text-center">
        <h2 className="text-5xl font-bold mb-6 text-secondary">Компьютерная зависимость</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Современная проблема, требующая внимания и системного подхода к решению
        </p>
        <Button size="lg" onClick={() => onNavigate("test")} className="font-semibold">
          Пройти тест
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
