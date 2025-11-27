import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
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
              <Button size="lg" className="group" onClick={() => onNavigate('каталог')}>
                Смотреть каталог
                <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('технологии')}>
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
  );
};

export default HeroSection;
