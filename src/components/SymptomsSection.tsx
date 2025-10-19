import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const SymptomsSection = () => {
  return (
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
  );
};

export default SymptomsSection;
