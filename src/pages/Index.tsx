import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SymptomsSection from "@/components/SymptomsSection";
import SolutionsSection from "@/components/SolutionsSection";
import TestSection from "@/components/TestSection";
import ContactsSection from "@/components/ContactsSection";

const Index = () => {
  const [testAnswers, setTestAnswers] = useState<Record<number, number>>({});
  const [testResult, setTestResult] = useState<number | null>(null);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAnswerChange = (questionId: number, value: number) => {
    setTestAnswers({ ...testAnswers, [questionId]: value });
  };

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
      <Header onNavigate={handleScroll} />
      <HeroSection onNavigate={handleScroll} />
      <ProblemsSection />
      <SymptomsSection />
      <SolutionsSection />
      <TestSection
        testAnswers={testAnswers}
        testResult={testResult}
        onAnswerChange={handleAnswerChange}
        onCalculate={calculateTest}
        getTestResultText={getTestResultText}
      />
      <ContactsSection />
      
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
