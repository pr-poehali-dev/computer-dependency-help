import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProblemsSection = () => {
  return (
    <section id="problems" className="py-16 scroll-mt-16">
      <div className="container max-w-6xl">
        <h3 className="text-4xl font-bold mb-12 text-center text-secondary">Масштаб проблемы</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Users" className="text-primary" size={24} />
              </div>
              <CardTitle className="text-3xl font-bold text-primary">38%</CardTitle>
              <CardDescription>населения подвержены риску</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                По данным исследований, более трети населения проводят за компьютером более 8 часов в день
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="TrendingUp" className="text-primary" size={24} />
              </div>
              <CardTitle className="text-3xl font-bold text-primary">+42%</CardTitle>
              <CardDescription>рост за последние 5 лет</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Количество случаев компьютерной зависимости стремительно растёт с развитием технологий
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="AlertCircle" className="text-primary" size={24} />
              </div>
              <CardTitle className="text-3xl font-bold text-primary">62%</CardTitle>
              <CardDescription>испытывают последствия</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Большинство зависимых отмечают негативное влияние на работу, учёбу и личную жизнь
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
