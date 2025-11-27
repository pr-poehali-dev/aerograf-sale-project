import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  return (
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
                onClick={() => onNavigate(item.toLowerCase())}
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
  );
};

export default Header;
