import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">Humans of Telecom</span>
            <br />
            <span className="text-foreground">The Unplugged Podcast</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A podcast that goes beyond our work lives to bring us closer to some of the 
            brightest and most influential members of the telecom community!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-accent text-primary-foreground transition-bounce"
            >
              <Play className="mr-2 h-5 w-5" />
              Listen to Latest Episode
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View All Episodes
            </Button>
          </div>

          {/* Featured Episode Card */}
          <div className="bg-card/80 backdrop-blur rounded-2xl p-6 md:p-8 shadow-elevated max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-xl flex-shrink-0 flex items-center justify-center">
                <Play className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl font-bold mb-2 text-card-foreground">
                  Latest Episode: Simona Maga
                </h3>
                <p className="text-muted-foreground mb-4">
                  Head of Sales and Operations Mobile Services at Sparkle
                </p>
                <div className="flex flex-col sm:flex-row gap-2 items-center justify-center md:justify-start">
                  <span className="text-sm text-muted-foreground">23:47 mins</span>
                  <span className="hidden sm:block text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">Jul 22, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;