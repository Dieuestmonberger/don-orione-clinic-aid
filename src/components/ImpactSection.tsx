import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star, HandHeart, Users, ArrowRight } from 'lucide-react';

const ImpactSection = () => {
  const testimonials = [
    {
      name: 'Amélie Kouassi',
      location: 'Abidjan',
      condition: 'Chirurgie orthopédique',
      quote: 'Grâce à l\'équipe du Dr Monsia, j\'ai retrouvé ma mobilité après mon accident. L\'accompagnement a été exceptionnel du début à la fin.',
      rating: 5,
    },
    {
      name: 'Kwame Asante',
      location: 'Ghana',
      condition: 'Chirurgie ophtalmologique',
      quote: 'Je suis venu du Ghana pour une opération de la cataracte. L\'expertise et la compassion de l\'équipe m\'ont redonné la vue et l\'espoir.',
      rating: 5,
    },
    {
      name: 'Marie Diallo',
      location: 'Bonoua',
      condition: 'Prothèse orthopédique',
      quote: 'Mon fils a reçu sa première prothèse ici. Aujourd\'hui, il peut marcher et jouer comme les autres enfants. Merci infiniment.',
      rating: 5,
    },
  ];

  const stats = [
    {
      number: '15,000+',
      label: 'Patients traités par an',
      icon: Users,
    },
    {
      number: '500+',
      label: 'Chirurgies réalisées',
      icon: HandHeart,
    },
    {
      number: '8',
      label: 'Pays d\'origine des patients',
      icon: Star,
    },
  ];

  return (
    <section id="impact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Notre impact & nos partenaires
          </h2>
          <p className="text-lg text-muted-foreground">
            Des vies transformées grâce à votre soutien et celui de nos partenaires
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center shadow-soft">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Témoignages de nos patients
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medical transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-sm text-primary">{testimonial.condition}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Nos partenaires et soutiens
          </h3>
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Rotary Club d'Abidjan Biétry
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Grâce au généreux don de matériel de traumatologie du Rotary Club d'Abidjan Biétry, 
                    nous avons pu moderniser notre bloc opératoire et améliorer significativement 
                    la qualité de nos interventions chirurgicales.
                  </p>
                </div>
                <div className="bg-gradient-hero p-6 rounded-lg text-center">
                  <HandHeart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">Matériel médical</div>
                  <div className="text-muted-foreground">Don d'équipements de traumatologie</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-medical p-8 rounded-2xl text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">
            Rejoignez notre mission
          </h3>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Votre soutien nous permet de continuer à offrir des soins de qualité aux plus démunis. 
            Ensemble, transformons des vies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-secondary text-secondary-foreground">
              <HandHeart className="w-5 h-5 mr-2" />
              Soutenir notre mission
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Devenir partenaire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;