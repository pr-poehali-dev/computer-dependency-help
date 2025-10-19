import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-16 scroll-mt-16">
      <div className="container max-w-5xl">
        <h3 className="text-4xl font-bold mb-4 text-center text-secondary">Контакты специалистов</h3>
        <p className="text-center text-muted-foreground mb-12">
          Профессиональная помощь психологов и психотерапевтов
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="UserRound" className="text-primary" size={28} />
                </div>
                <div>
                  <CardTitle className="text-xl mb-1">Центр психологической помощи</CardTitle>
                  <CardDescription>Когнитивно-поведенческая терапия</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-muted-foreground" size={18} />
                <a href="tel:+74951234567" className="text-foreground hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-muted-foreground" size={18} />
                <a href="mailto:help@psycho-center.ru" className="text-foreground hover:text-primary transition-colors">
                  help@psycho-center.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" className="text-muted-foreground" size={18} />
                <span className="text-foreground">Москва, ул. Примерная, 10</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="text-muted-foreground" size={18} />
                <span className="text-foreground">Пн-Пт: 9:00-20:00, Сб: 10:00-18:00</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="UserRound" className="text-primary" size={28} />
                </div>
                <div>
                  <CardTitle className="text-xl mb-1">Клиника "Путь к себе"</CardTitle>
                  <CardDescription>Комплексная терапия зависимостей</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-muted-foreground" size={18} />
                <a href="tel:+74957654321" className="text-foreground hover:text-primary transition-colors">
                  +7 (495) 765-43-21
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-muted-foreground" size={18} />
                <a href="mailto:info@path-clinic.ru" className="text-foreground hover:text-primary transition-colors">
                  info@path-clinic.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" className="text-muted-foreground" size={18} />
                <span className="text-foreground">Москва, пр-т Центральный, 25</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="text-muted-foreground" size={18} />
                <span className="text-foreground">Круглосуточно</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="UserRound" className="text-primary" size={28} />
                </div>
                <div>
                  <CardTitle className="text-xl mb-1">Психолог Анна Иванова</CardTitle>
                  <CardDescription>Индивидуальные консультации онлайн</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-muted-foreground" size={18} />
                <a href="tel:+79161234567" className="text-foreground hover:text-primary transition-colors">
                  +7 (916) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-muted-foreground" size={18} />
                <a href="mailto:anna.psycho@mail.ru" className="text-foreground hover:text-primary transition-colors">
                  anna.psycho@mail.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Video" className="text-muted-foreground" size={18} />
                <span className="text-foreground">Консультации по Zoom / Skype</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="text-muted-foreground" size={18} />
                <span className="text-foreground">Пн-Сб: 10:00-21:00</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <div>
                  <CardTitle className="text-xl mb-1">Телефон доверия</CardTitle>
                  <CardDescription>Бесплатная анонимная помощь 24/7</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-muted-foreground" size={18} />
                <a href="tel:88002000122" className="text-foreground hover:text-primary transition-colors text-lg font-semibold">
                  8-800-2000-122
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MessageCircle" className="text-muted-foreground" size={18} />
                <span className="text-foreground">Анонимный чат на сайте</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Shield" className="text-muted-foreground" size={18} />
                <span className="text-foreground">Полная конфиденциальность</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="text-muted-foreground" size={18} />
                <span className="text-foreground">Круглосуточно, без выходных</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex gap-4 items-start">
              <Icon name="Info" className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold text-foreground mb-2">Важная информация</p>
                <p className="text-sm text-muted-foreground">
                  Все специалисты имеют профессиональное образование и опыт работы с проблемой компьютерной зависимости. 
                  Первичная консультация обычно проводится бесплатно. Не стесняйтесь обращаться за помощью — 
                  это первый шаг к решению проблемы.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactsSection;
