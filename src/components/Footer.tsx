import { Button } from '@/components/ui/button';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Nos services', href: '#services' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Clinique Don Orione</h3>
                <p className="text-background/70">Bonoua, Côte d'Ivoire</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              Depuis 1980, nous accompagnons les personnes handicapées et démunies 
              avec des soins spécialisés et solidaires. Notre mission est de rendre 
              les soins de qualité accessibles à tous.
            </p>
            <Button className="bg-gradient-hope">
              <Heart className="w-4 h-4 mr-2" />
              Faire un don
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens rapides</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-background/80 hover:text-background transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-background/60 mt-0.5 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  Centre Ville BP 221<br />
                  Bonoua, Côte d'Ivoire
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-background/60 mt-0.5 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  +225 27 21 30 07 32<br />
                  +225 07 47 90 87 19
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-background/60 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  contact@clinique-donorione.ci
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2025 Clinique Don Orione – Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-background/60 text-sm">Suivez-nous:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5 text-background/80" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-medical rounded-full flex items-center justify-center shadow-medical hover:shadow-lg transition-all duration-200"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-6 h-6 text-primary-foreground" />
      </button>
    </footer>
  );
};

export default Footer;