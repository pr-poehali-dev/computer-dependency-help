import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface TestSectionProps {
  testAnswers: Record<number, number>;
  testResult: number | null;
  onAnswerChange: (questionId: number, value: number) => void;
  onCalculate: () => void;
  getTestResultText: (score: number) => { level: string; color: string; description: string };
}

const TestSection = ({ 
  testAnswers, 
  testResult, 
  onAnswerChange, 
  onCalculate,
  getTestResultText 
}: TestSectionProps) => {
  const testQuestions = [
    { id: 1, text: "Как часто вы проводите за компьютером больше времени, чем планировали?" },
    { id: 2, text: "Как часто вы пренебрегаете домашними делами из-за компьютера?" },
    { id: 3, text: "Как часто вы чувствуете раздражение при необходимости прервать работу за компьютером?" },
    { id: 4, text: "Как часто страдает ваш сон из-за позднего времяпрепровождения за компьютером?" },
    { id: 5, text: "Как часто вы думаете о компьютере, когда занимаетесь другими делами?" },
  ];

  return (
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
                    onValueChange={(value) => onAnswerChange(question.id, parseInt(value))}
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
            onClick={onCalculate}
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
  );
};

export default TestSection;
