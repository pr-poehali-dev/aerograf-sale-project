import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
