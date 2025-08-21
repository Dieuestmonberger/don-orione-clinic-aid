import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Users, Heart } from 'lucide-react';
import clinicHero from '@/assets/clinic-hero.jpg';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Depuis 1980 à votre service
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Soins spécialisés et
                <span className="text-primary"> solidaires</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Depuis 1980, la Clinique Don Orione de Bonoua accompagne les personnes 
                handicapées et démunies avec des soins spécialisés et solidaires.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-primary">300+</div>
                <div className="text-sm text-muted-foreground">Patients par jour</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-secondary">45</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-medical shadow-medical">
                <Users className="w-5 h-5 mr-2" />
                Nos services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="w-5 h-5 mr-2" />
                Nous contacter
              </Button>
              <Button size="lg" className="bg-gradient-hope">
                <Heart className="w-5 h-5 mr-2" />
                Faire un don
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-medical">
              <img
                src={clinicHero}
                alt="Clinique Don Orione - Façade moderne de notre établissement médical à Bonoua"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-soft">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-hope rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Mission solidaire</div>
                  <div className="text-sm text-muted-foreground">Soins pour tous</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;