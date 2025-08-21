import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Send,
  Navigation
} from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Centre Ville BP 221', 'Bonoua, Côte d\'Ivoire'],
    },
    {
      icon: Phone,
      title: 'Téléphones',
      details: [
        '+225 27 21 30 07 32',
        '+225 27 21 30 07 31',
        '+225 07 47 90 87 19'
      ],
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: [
        'Lundi - Vendredi: 7h00 - 18h00',
        'Samedi: 8h00 - 16h00',
        'Urgences: 24h/24'
      ],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-muted-foreground">
            Notre équipe est là pour répondre à vos questions et vous accompagner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informations de contact
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="shadow-soft">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <Navigation className="w-5 h-5 mr-2" />
                  Localisation
                </h4>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Carte Google Maps</p>
                    <p className="text-sm">Centre Ville, Bonoua</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Navigation className="w-4 h-4 mr-2" />
                  Voir sur Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Envoyez-nous un message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" placeholder="Votre prénom" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input id="lastName" placeholder="Votre nom" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre.email@exemple.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone (optionnel)</Label>
                    <Input id="phone" type="tel" placeholder="+225 XX XX XX XX XX" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" placeholder="Objet de votre message" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Décrivez votre demande ou vos questions..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-gradient-medical shadow-medical">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="mt-6 shadow-soft bg-gradient-hero">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">Urgences médicales</h4>
                <p className="text-muted-foreground mb-4">
                  En cas d'urgence, contactez-nous immédiatement
                </p>
                <Button size="lg" className="bg-destructive text-destructive-foreground">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler d'urgence
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;