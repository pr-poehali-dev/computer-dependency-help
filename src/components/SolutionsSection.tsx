import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-16 scroll-mt-16">
      <div className="container max-w-4xl">
        <h3 className="text-4xl font-bold mb-12 text-center text-secondary">Пути решения</h3>
        
        <div className="space-y-6">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">Контроль времени</CardTitle>
                  <CardDescription className="text-base">
                    Установите чёткие временные рамки для использования компьютера. Используйте таймеры и приложения для отслеживания экранного времени.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Activity" className="text-primary" size={24} />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">Физическая активность</CardTitle>
                  <CardDescription className="text-base">
                    Регулярные физические упражнения помогают переключить внимание и улучшить общее самочувствие. Минимум 30 минут активности в день.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">Социальные связи</CardTitle>
                  <CardDescription className="text-base">
                    Уделяйте время живому общению с друзьями и семьёй. Офлайн-взаимодействие критически важно для психологического здоровья.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" className="text-primary" size={24} />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">Новые хобби</CardTitle>
                  <CardDescription className="text-base">
                    Найдите интересы вне компьютера: спорт, музыка, рисование, чтение. Разнообразие занятий снижает зависимость от одного источника удовольствия.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" className="text-primary" size={24} />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">Профессиональная помощь</CardTitle>
                  <CardDescription className="text-base">
                    При серьёзных проблемах обратитесь к психологу или психотерапевту. Когнитивно-поведенческая терапия показывает высокую эффективность.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
