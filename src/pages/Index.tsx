import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [testAnswers, setTestAnswers] = useState<Record<number, number>>({});
  const [testResult, setTestResult] = useState<number | null>(null);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const testQuestions = [
    { id: 1, text: "Как часто вы проводите за компьютером больше времени, чем планировали?" },
    { id: 2, text: "Как часто вы пренебрегаете домашними делами из-за компьютера?" },
    { id: 3, text: "Как часто вы чувствуете раздражение при необходимости прервать работу за компьютером?" },
    { id: 4, text: "Как часто страдает ваш сон из-за позднего времяпрепровождения за компьютером?" },
    { id: 5, text: "Как часто вы думаете о компьютере, когда занимаетесь другими делами?" },
  ];

  const calculateTest = () => {
    const total = Object.values(testAnswers).reduce((sum, val) => sum + val, 0);
    setTestResult(total);
  };

  const getTestResultText = (score: number) => {
    if (score <= 10) return { level: "Низкий уровень", color: "text-green-600", description: "Вы контролируете использование компьютера" };
    if (score <= 15) return { level: "Средний уровень", color: "text-yellow-600", description: "Есть признаки формирования зависимости" };
    return { level: "Высокий уровень", color: "text-red-600", description: "Рекомендуется обратиться к специалисту" };
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Компьютерная зависимость</h1>
          <nav className="flex gap-6">
            <button onClick={() => handleScroll("problems")} className="text-sm font-medium hover:text-primary transition-colors">
              Проблемы
            </button>
            <button onClick={() => handleScroll("symptoms")} className="text-sm font-medium hover:text-primary transition-colors">
              Симптомы
            </button>
            <button onClick={() => handleScroll("solutions")} className="text-sm font-medium hover:text-primary transition-colors">
              Решения
            </button>
            <button onClick={() => handleScroll("test")} className="text-sm font-medium hover:text-primary transition-colors">
              Тест
            </button>
          </nav>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6 text-secondary">Компьютерная зависимость</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Современная проблема, требующая внимания и системного подхода к решению
          </p>
          <Button size="lg" onClick={() => handleScroll("test")} className="font-semibold">
            Пройти тест
          </Button>
        </div>
      </section>

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

      <section id="symptoms" className="py-16 bg-secondary/5 scroll-mt-16">
        <div className="container max-w-4xl">
          <h3 className="text-4xl font-bold mb-12 text-center text-secondary">Основные симптомы</h3>
          
          <Tabs defaultValue="psychological" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="psychological">Психологические</TabsTrigger>
              <TabsTrigger value="physical">Физические</TabsTrigger>
              <TabsTrigger value="social">Социальные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="psychological" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {[
                      "Навязчивое желание проверять компьютер или смартфон",
                      "Раздражительность при невозможности использовать устройства",
                      "Потеря чувства времени при работе за компьютером",
                      "Использование компьютера как способ избежать проблем",
                      "Чувство эйфории во время использования компьютера"
                    ].map((symptom, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <p className="text-foreground">{symptom}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="physical" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {[
                      "Синдром карпального канала (боль в запястьях)",
                      "Сухость глаз, головные боли, проблемы со зрением",
                      "Нарушения сна и режима питания",
                      "Боли в спине и шее из-за неправильной осанки",
                      "Снижение физической активности и набор веса"
                    ].map((symptom, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <p className="text-foreground">{symptom}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="social" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {[
                      "Снижение качества общения с близкими людьми",
                      "Пренебрежение семейными и социальными обязанностями",
                      "Ухудшение успеваемости или производительности на работе",
                      "Сокращение времени на хобби и внешние интересы",
                      "Изоляция от реального социального взаимодействия"
                    ].map((symptom, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <p className="text-foreground">{symptom}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

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

      <section id="test" className="py-16 bg-secondary/5 scroll-mt-16">
        <div className="container max-w-3xl">
          <h3 className="text-4xl font-bold mb-4 text-center text-secondary">Тест на компьютерную зависимость</h3>
          <p className="text-center text-muted-foreground mb-12">
            Ответьте на вопросы, используя шкалу от 1 (никогда) до 5 (очень часто)
          </p>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="space-y-8">
                {testQuestions.map((question) => (
                  <div key={question.id} className="space-y-4">
                    <p className="font-medium text-foreground">{question.id}. {question.text}</p>
                    <RadioGroup
                      value={testAnswers[question.id]?.toString()}
                      onValueChange={(value) => setTestAnswers({ ...testAnswers, [question.id]: parseInt(value) })}
                    >
                      <div className="flex gap-4 justify-between">
                        {[1, 2, 3, 4, 5].map((value) => (
                          <div key={value} className="flex flex-col items-center gap-2">
                            <RadioGroupItem value={value.toString()} id={`q${question.id}-${value}`} />
                            <Label htmlFor={`q${question.id}-${value}`} className="text-sm cursor-pointer">
                              {value === 1 && "Никогда"}
                              {value === 2 && "Редко"}
                              {value === 3 && "Иногда"}
                              {value === 4 && "Часто"}
                              {value === 5 && "Очень часто"}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              onClick={calculateTest}
              disabled={Object.keys(testAnswers).length < testQuestions.length}
              className="font-semibold"
            >
              Получить результат
            </Button>
          </div>

          {testResult !== null && (
            <Card className="border-2 border-primary/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Ваш результат: {testResult} из 25</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Progress value={(testResult / 25) * 100} className="h-3" />
                </div>
                <div className="text-center">
                  <p className={`text-xl font-bold mb-2 ${getTestResultText(testResult).color}`}>
                    {getTestResultText(testResult).level}
                  </p>
                  <p className="text-muted-foreground">
                    {getTestResultText(testResult).description}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <footer className="py-12 border-t bg-white">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            Помните: осознание проблемы — первый шаг к её решению
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
