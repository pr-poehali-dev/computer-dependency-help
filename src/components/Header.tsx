interface HeaderProps {
  onNavigate: (id: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <h1 className="text-xl font-bold text-primary">Компьютерная зависимость</h1>
        <nav className="flex gap-6">
          <button onClick={() => onNavigate("problems")} className="text-sm font-medium hover:text-primary transition-colors">
            Проблемы
          </button>
          <button onClick={() => onNavigate("symptoms")} className="text-sm font-medium hover:text-primary transition-colors">
            Симптомы
          </button>
          <button onClick={() => onNavigate("solutions")} className="text-sm font-medium hover:text-primary transition-colors">
            Решения
          </button>
          <button onClick={() => onNavigate("test")} className="text-sm font-medium hover:text-primary transition-colors">
            Тест
          </button>
          <button onClick={() => onNavigate("contacts")} className="text-sm font-medium hover:text-primary transition-colors">
            Специалисты
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
