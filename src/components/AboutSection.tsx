import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Award, Globe } from 'lucide-react';
import doctorConsultation from '@/assets/doctor-consultation.jpg';

const AboutSection = () => {
  const milestones = [
    {
      year: '1980',
      title: 'Création de la clinique',
      description: 'Dédiée aux handicapés moteurs avec un service d\'orthopédie',
      icon: Calendar,
    },
    {
      year: '1992',
      title: 'Extension des services',
      description: 'Ajout de la consultation et chirurgie ophtalmologique',
      icon: Award,
    },
    {
      year: 'Aujourd\'hui',
      title: '300+ patients par jour',
      description: 'Patients venant de Côte d\'Ivoire et d\'autres pays africains',
      icon: Globe,
    },
  ];

  const values = [
    {
      title: 'Solidarité',
      description: 'Nous croyons en l\'importance de soutenir ceux qui en ont le plus besoin',
      icon: Users,
    },
    {
      title: 'Dignité',
      description: 'Chaque patient est traité avec respect et considération',
      icon: Award,
    },
    {
      title: 'Accessibilité',
      description: 'Des soins de qualité pour tous, indépendamment des moyens financiers',
      icon: Globe,
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            À propos de la Clinique Don Orione
          </h2>
          <p className="text-lg text-muted-foreground">
            Plus de quatre décennies d'engagement au service des plus vulnérables
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={doctorConsultation}
              alt="Dr Anatole Monsia en consultation - Direction médicale de la Clinique Don Orione"
              className="w-full h-[400px] object-cover rounded-2xl shadow-soft"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Notre histoire</h3>
            <p className="text-muted-foreground leading-relaxed">
              Créée en 1980, la Clinique Don Orione était initialement dédiée aux handicapés 
              moteurs avec un service d'orthopédie spécialisé. Notre mission s'est élargie en 1992 
              avec l'ajout de la consultation et de la chirurgie ophtalmologique.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aujourd'hui, nous accueillons plus de 300 patients chaque jour, venus non seulement 
              de Côte d'Ivoire mais aussi d'autres pays africains, témoignant de la reconnaissance 
              de notre expertise médicale et de notre approche solidaire.
            </p>
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h4 className="font-semibold text-foreground mb-2">Direction médicale</h4>
              <p className="text-muted-foreground">
                <strong>Dr Anatole Monsia</strong> - Spécialiste en chirurgie orthopédique 
                et traumatologie, dirige notre équipe médicale avec expertise et compassion.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Nos étapes clés
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <Card key={index} className="text-center shadow-soft hover:shadow-medical transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h4 className="font-semibold text-foreground mb-2">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Nos valeurs
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center shadow-soft hover:shadow-medical transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-hope rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;