import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Bone, 
  Eye, 
  Activity, 
  Wrench, 
  Users, 
  Heart,
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Orthopédie & Traumatologie',
      description: 'Chirurgie spécialisée des os, articulations et traumatismes avec une expertise reconnue en Afrique de l\'Ouest.',
      icon: Bone,
      features: ['Chirurgie orthopédique', 'Traumatologie', 'Consultations spécialisées'],
    },
    {
      title: 'Consultation & Chirurgie Ophtalmologique',
      description: 'Soins complets de la vue, de la consultation de routine aux interventions chirurgicales complexes.',
      icon: Eye,
      features: ['Consultations oculaires', 'Chirurgie de la cataracte', 'Traitement du glaucome'],
    },
    {
      title: 'Rééducation fonctionnelle & Physiothérapie',
      description: 'Programmes de rééducation personnalisés pour retrouver autonomie et mobilité.',
      icon: Activity,
      features: ['Kinésithérapie', 'Rééducation motrice', 'Thérapie occupationnelle'],
    },
    {
      title: 'Atelier orthopédique',
      description: 'Fabrication sur mesure de prothèses, orthèses et chaussures adaptées aux besoins spécifiques.',
      icon: Wrench,
      features: ['Prothèses sur mesure', 'Orthèses', 'Chaussures adaptées'],
    },
    {
      title: 'Réinsertion sociale',
      description: 'Accompagnement global des enfants atteints de poliomyélite et des handicapés moteurs.',
      icon: Users,
      features: ['Suivi psychosocial', 'Formation professionnelle', 'Accompagnement familial'],
    },
    {
      title: 'Soins solidaires pour malades démunis',
      description: 'Accès aux soins pour tous, avec des tarifs adaptés et un fonds de solidarité.',
      icon: Heart,
      features: ['Tarifs sociaux', 'Fonds de solidarité', 'Soins gratuits'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos services médicaux
          </h2>
          <p className="text-lg text-muted-foreground">
            Une gamme complète de soins spécialisés au service de votre santé et de votre bien-être
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHighlighted = index < 2; // Highlight first two services
            
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-medical transition-all duration-300 ${
                  isHighlighted ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    isHighlighted ? 'bg-gradient-medical' : 'bg-gradient-hope'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Besoin d'une consultation ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nos équipes médicales sont à votre disposition pour vous offrir des soins de qualité. 
            N'hésitez pas à nous contacter pour prendre rendez-vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-medical shadow-medical">
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Nos tarifs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;