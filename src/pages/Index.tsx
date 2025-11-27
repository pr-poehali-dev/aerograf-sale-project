import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'AeroMix Pro 3000',
      price: '89 990 ₽',
      image: 'https://cdn.poehali.dev/projects/96975428-fa1f-430b-9bf1-2e179012a3d2/files/60954bfc-c9d6-4e9e-b4be-27328795b6d0.jpg',
      description: 'Профессиональный аэрограф с автоматическим смешиванием 8 цветов',
      features: ['8 цветов', 'Точность 0.1мм', 'Bluetooth'],
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'AeroMix Studio 5000',
      price: '149 990 ₽',
      image: 'https://cdn.poehali.dev/projects/96975428-fa1f-430b-9bf1-2e179012a3d2/files/8704c382-c76f-4260-ad6a-581aa05c3725.jpg',
      description: 'Студийная модель с расширенной палитрой и AI-ассистентом',
      features: ['16 цветов', 'AI смешивание', 'Сенсорный экран'],
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'AeroMix Artist X',
      price: '199 990 ₽',
      image: 'https://cdn.poehali.dev/projects/96975428-fa1f-430b-9bf1-2e179012a3d2/files/42f9abcb-c8ad-4868-a741-7f4a927200a4.jpg',
      description: 'Флагманская модель для профессиональных художников',
      features: ['24 цвета', 'Облачная синхронизация', 'Набор насадок'],
      badge: 'Premium'
    }
  ];

  const reviews = [
    {
      name: 'Мария Соколова',
      rating: 5,
      text: 'Невероятная точность смешивания! Работаю над миниатюрами, и AeroMix Pro экономит мне часы работы.',
      role: 'Художник миниатюр'
    },
    {
      name: 'Алексей Петров',
      rating: 5,
      text: 'Купил для автотюнинга. Функция автоматического подбора цвета просто спасение!',
      role: 'Автомаляр'
    },
    {
      name: 'Ирина Волкова',
      rating: 5,
      text: 'Studio 5000 превзошёл все ожидания. AI помощник подсказывает идеальные пропорции.',
      role: 'Профессиональный художник'
    }
  ];

  const blogPosts = [
    {
      title: 'Как работает автоматическое смешивание красок',
      date: '15 ноября 2024',
      excerpt: 'Разбираем технологию, которая изменила индустрию аэрографии',
      image: 'https://cdn.poehali.dev/projects/96975428-fa1f-430b-9bf1-2e179012a3d2/files/8704c382-c76f-4260-ad6a-581aa05c3725.jpg'
    },
    {
      title: '5 советов для начинающих аэрографистов',
      date: '10 ноября 2024',
      excerpt: 'С чего начать свой путь в мире аэрографии с AeroMix',
      image: 'https://cdn.poehali.dev/projects/96975428-fa1f-430b-9bf1-2e179012a3d2/files/60954bfc-c9d6-4e9e-b4be-27328795b6d0.jpg'
    },
    {
      title: 'История создания технологии AeroMix',
      date: '5 ноября 2024',
      excerpt: 'От идеи до революции в аэрографии - наш путь',
      image: 'https://cdn.poehali.dev/projects/96975428-fa1f-430b-9bf1-2e179012a3d2/files/42f9abcb-c8ad-4868-a741-7f4a927200a4.jpg'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Droplet" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AeroMix
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Каталог', 'Технологии', 'Отзывы', 'Блог', 'Поддержка', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="hidden md:flex">Заказать звонок</Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground">Революция в аэрографии</Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Аэрографы будущего уже
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> сегодня</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Автоматическое смешивание красок, точность до 0.1мм и AI-ассистент для идеального результата
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="group" onClick={() => scrollToSection('каталог')}>
                  Смотреть каталог
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('технологии')}>
                  Как это работает
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Точность смешивания</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/96975428-fa1f-430b-9bf1-2e179012a3d2/files/60954bfc-c9d6-4e9e-b4be-27328795b6d0.jpg"
                alt="AeroMix Pro"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="каталог" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Наша продукция</Badge>
            <h2 className="text-4xl font-bold mb-4">Каталог аэрографов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите модель под ваши задачи - от начинающих до профессионалов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden">
                  <Badge className="absolute top-4 right-4 z-10 bg-secondary">{product.badge}</Badge>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-primary">{product.price}</div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1">
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    В корзину
                  </Button>
                  <Button variant="outline">
                    <Icon name="Info" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="технологии" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary">Инновации</Badge>
            <h2 className="text-4xl font-bold mb-4">Технология AeroMix</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Революционная система автоматического смешивания красок
            </p>
          </div>
          <Tabs defaultValue="mixing" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="mixing">
                <Icon name="Droplets" className="mr-2" size={18} />
                Смешивание
              </TabsTrigger>
              <TabsTrigger value="ai">
                <Icon name="Cpu" className="mr-2" size={18} />
                AI-Помощник
              </TabsTrigger>
              <TabsTrigger value="precision">
                <Icon name="Target" className="mr-2" size={18} />
                Точность
              </TabsTrigger>
            </TabsList>
            <TabsContent value="mixing" className="space-y-4 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Автоматическое смешивание красок</CardTitle>
                  <CardDescription>Запатентованная технология микрофлюидики</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Система точных дозаторов смешивает краски в нужных пропорциях прямо в процессе работы. 
                    Вы выбираете цвет на экране или в приложении, а аэрограф создаёт его автоматически.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">0.001 мл</div>
                      <div className="text-sm text-muted-foreground">Точность дозирования</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">&lt;1 сек</div>
                      <div className="text-sm text-muted-foreground">Время смешивания</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">16M</div>
                      <div className="text-sm text-muted-foreground">Возможных оттенков</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ai" className="space-y-4 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>AI-ассистент художника</CardTitle>
                  <CardDescription>Умный помощник для идеального результата</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Искусственный интеллект анализирует вашу работу и предлагает оптимальные цветовые решения.
                    Загрузите эскиз, и система автоматически подготовит палитру для его реализации.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Image" className="text-primary" size={18} />
                      </div>
                      <div>
                        <div className="font-medium">Распознавание цвета по фото</div>
                        <div className="text-sm text-muted-foreground">Наведите камеру на объект и получите точную формулу цвета</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Palette" className="text-primary" size={18} />
                      </div>
                      <div>
                        <div className="font-medium">Умные палитры</div>
                        <div className="text-sm text-muted-foreground">AI предлагает гармоничные цветовые сочетания</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Cloud" className="text-primary" size={18} />
                      </div>
                      <div>
                        <div className="font-medium">Облачная библиотека</div>
                        <div className="text-sm text-muted-foreground">Сохраняйте и синхронизируйте свои цветовые формулы</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="precision" className="space-y-4 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Непревзойдённая точность</CardTitle>
                  <CardDescription>Профессиональный результат в каждом распылении</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Прецизионные компоненты и система стабилизации обеспечивают идеальную линию от 0.1 мм.
                    Встроенные сенсоры контролируют давление, расход и температуру в реальном времени.
                  </p>
                  <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-6 rounded-lg mt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="Gauge" className="text-primary" size={20} />
                          <span className="font-medium">Контроль давления</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Автоматическая регулировка для равномерного распыления</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="Thermometer" className="text-primary" size={20} />
                          <span className="font-medium">Температурная стабилизация</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Поддержание оптимальной вязкости краски</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 5000 профессионалов уже используют AeroMix
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="блог" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary">Блог</Badge>
            <h2 className="text-4xl font-bold mb-4">Новости и статьи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полезные материалы об аэрографии и наших технологиях
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="group/btn">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="поддержка" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о наших аэрографах
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Icon name="HelpCircle" className="text-primary" size={20} />
                  <span>Как долго служит система смешивания?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-9">
                Система рассчитана на 50,000+ циклов смешивания. При обычном использовании это около 5-7 лет работы. 
                На все компоненты распространяется гарантия 3 года.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Icon name="Droplet" className="text-primary" size={20} />
                  <span>Какие краски можно использовать?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-9">
                AeroMix работает с красками на водной и акриловой основе. Мы рекомендуем использовать нашу линейку красок AeroMix Colors, 
                но система совместима с большинством профессиональных марок.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Icon name="Wrench" className="text-primary" size={20} />
                  <span>Сложно ли обслуживать аэрограф?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-9">
                Обслуживание максимально простое. После каждой сессии достаточно промыть систему нашим очистителем (10 минут). 
                Глубокая чистка требуется раз в месяц и занимает около 30 минут. В комплекте идёт подробная инструкция.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Icon name="Smartphone" className="text-primary" size={20} />
                  <span>Нужно ли приложение для работы?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-9">
                Нет, аэрограф полностью функционален автономно. Приложение открывает дополнительные возможности: 
                облачные палитры, AI-подбор цвета по фото, статистику использования и удалённые обновления.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Icon name="Truck" className="text-primary" size={20} />
                  <span>Доставка и гарантия?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-9">
                Бесплатная доставка по всей России за 2-5 дней. Гарантия 3 года на все модели. 
                14 дней на возврат без объяснения причин. Служба поддержки работает 24/7.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Мы всегда готовы ответить на ваши вопросы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
                <CardDescription>Выберите удобный способ связи</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    <div className="text-sm text-muted-foreground">Пн-Пт 9:00-21:00, Сб-Вс 10:00-18:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">support@aeromix.ru</div>
                    <div className="text-sm text-muted-foreground">Ответим в течение 2 часов</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Инновационная, д. 42</div>
                    <div className="text-sm text-muted-foreground">Шоурум работает с 10:00 до 20:00</div>
                  </div>
                </div>
                <div className="pt-4 flex gap-3">
                  <Button variant="outline" size="icon">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Send" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Youtube" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email или телефон</label>
                  <input
                    type="text"
                    placeholder="+7 (999) 123-45-67"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <textarea
                    placeholder="Расскажите, чем мы можем помочь"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <Button className="w-full">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Droplet" className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold">AeroMix</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Инновационные аэрографы с автоматическим смешиванием красок
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="hover:text-primary cursor-pointer transition-colors">AeroMix Pro 3000</div>
                <div className="hover:text-primary cursor-pointer transition-colors">AeroMix Studio 5000</div>
                <div className="hover:text-primary cursor-pointer transition-colors">AeroMix Artist X</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Аксессуары</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="hover:text-primary cursor-pointer transition-colors">База знаний</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Гарантия</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Доставка и оплата</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Контакты</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="hover:text-primary cursor-pointer transition-colors">О нас</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Технологии</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Блог</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Вакансии</div>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2024 AeroMix. Все права защищены.</div>
            <div className="flex gap-6">
              <span className="hover:text-primary cursor-pointer transition-colors">Политика конфиденциальности</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Условия использования</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
