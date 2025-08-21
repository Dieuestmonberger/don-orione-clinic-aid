import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Nos services', href: '#services' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground">Clinique Don Orione</h1>
              <p className="text-sm text-muted-foreground">Bonoua, Côte d'Ivoire</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="bg-gradient-hope">
              Faire un don
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="default" className="bg-gradient-hope self-start">
                Faire un don
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;