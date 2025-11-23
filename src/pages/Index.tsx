import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, message });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            EduAI Platform
          </h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="gradient-primary border-0">Начать</Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Твой личный
              <br />
              <span className="gradient-primary bg-clip-text text-transparent">
                ИИ-репетитор
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Анализируем YouTube, конспекты и лекции. Создаём персональный учебный план, 
              интеллект-карты и адаптивные тесты для уверенной сдачи экзаменов
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gradient-primary border-0 text-lg px-8 py-6 hover-scale">
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="mt-20 relative animate-slide-up">
            <div className="absolute inset-0 gradient-primary blur-3xl opacity-20 rounded-3xl"></div>
            <div className="relative glass rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-muted-foreground mt-2">Точность анализа</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-secondary bg-clip-text text-transparent">2 мин</div>
                  <div className="text-sm text-muted-foreground mt-2">Генерация конспекта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">15 тыс</div>
                  <div className="text-sm text-muted-foreground mt-2">Студентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-secondary bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-muted-foreground mt-2">Доступность</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Возможности платформы</h3>
            <p className="text-xl text-muted-foreground">Всё необходимое для эффективного обучения</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass border-white/10 hover-scale group">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name="Youtube" size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Анализ YouTube</CardTitle>
                <CardDescription className="text-base">
                  ИИ извлекает ключевую информацию из любого образовательного видео за минуты
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass border-white/10 hover-scale group">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl gradient-secondary flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name="FileText" size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Умные конспекты</CardTitle>
                <CardDescription className="text-base">
                  Автоматическая генерация структурированных заметок с формулами и определениями
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass border-white/10 hover-scale group">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name="Brain" size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Интеллект-карты</CardTitle>
                <CardDescription className="text-base">
                  Визуализация связей между темами для лучшего понимания материала
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass border-white/10 hover-scale group">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl gradient-secondary flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name="Upload" size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Загрузка материалов</CardTitle>
                <CardDescription className="text-base">
                  Добавляйте свои лекции, презентации и заметки для полного анализа
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass border-white/10 hover-scale group">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name="Target" size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Поиск пробелов</CardTitle>
                <CardDescription className="text-base">
                  ИИ выявляет слабые места в знаниях и предлагает материалы для их устранения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass border-white/10 hover-scale group">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl gradient-secondary flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name="CheckCircle" size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Адаптивное тестирование</CardTitle>
                <CardDescription className="text-base">
                  Персонализированные тесты, которые подстраиваются под ваш уровень знаний
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h3>
            <p className="text-xl text-muted-foreground">Доступная подписка для студентов</p>
          </div>

          <Card className="glass border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 gradient-primary blur-3xl opacity-20"></div>
            <CardHeader className="text-center relative">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm mb-4">
                Лучшее предложение
              </div>
              <CardTitle className="text-3xl mb-2">Студенческая подписка</CardTitle>
              <div className="text-6xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                290₽
              </div>
              <CardDescription className="text-lg">в месяц</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Безлимитный анализ YouTube видео</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Генерация конспектов и интеллект-карт</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Загрузка собственных материалов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Адаптивные тесты и выявление пробелов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Персональный учебный план</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Приоритетная поддержка</span>
                </li>
              </ul>
              <Button size="lg" className="w-full gradient-primary border-0 text-lg py-6 hover-scale">
                Оформить подписку
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Цена определена на основе опроса студентов
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h3>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="glass border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-lg hover:no-underline">
                Как работает анализ видео с YouTube?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Наш ИИ извлекает аудио из видео, транскрибирует его и анализирует содержание. Затем система
                выделяет ключевые темы, термины, формулы и создает структурированный конспект с таймкодами
                для быстрого перехода к важным моментам.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="glass border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-lg hover:no-underline">
                Можно ли загружать свои материалы?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, вы можете загружать лекции в формате PDF, презентации PowerPoint, текстовые заметки
                и даже собственные видеозаписи. ИИ проанализирует их и интегрирует в ваш учебный план.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="glass border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-lg hover:no-underline">
                Как система находит пробелы в знаниях?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                После прохождения адаптивного теста ИИ анализирует ваши ответы и определяет темы,
                которые требуют дополнительного изучения. Система автоматически подбирает материалы
                для закрытия этих пробелов и корректирует учебный план.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="glass border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-lg hover:no-underline">
                Есть ли бесплатный период?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы предоставляем 7 дней бесплатного доступа ко всем функциям платформы.
                Вы сможете оценить возможности системы перед оформлением подписки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="glass border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-lg hover:no-underline">
                Подходит ли платформа для всех предметов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Наш ИИ эффективно работает с точными науками (математика, физика, химия),
                гуманитарными дисциплинами (история, литература), программированием и языками.
                Система постоянно обучается на новых материалах.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h3>
            <p className="text-xl text-muted-foreground">Остались вопросы? Напишите нам!</p>
          </div>

          <Card className="glass border-white/10">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="glass border-white/10"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Ваш вопрос или предложение..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="glass border-white/10 min-h-32"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gradient-primary border-0 hover-scale">
                  Отправить
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex justify-center gap-6">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Mail" size={24} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="MessageCircle" size={24} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Send" size={24} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            EduAI Platform
          </h2>
          <p className="text-muted-foreground mb-4">
            Персональный ИИ-помощник для эффективного обучения студентов
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 EduAI Platform. Проект в разработке.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
