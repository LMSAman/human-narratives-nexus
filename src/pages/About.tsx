import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Headphones, Globe, Heart } from 'lucide-react';
import podcastLogo from '@/assets/podcast-logo.png';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src={podcastLogo} 
                alt="Humans of Telecom" 
                className="h-24 w-24 rounded-full shadow-elevated"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Humans of Telecom
            </h1>
            <p className="text-xl text-muted-foreground">
              The stories behind the people shaping our connected world
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Humans of Telecom exists to go beyond our work lives and bring us closer to 
                some of the brightest and most influential members of the telecom community. 
                We believe that behind every technological advancement, network deployment, 
                and industry innovation are real people with fascinating stories to tell.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center shadow-card hover:shadow-elevated transition-smooth">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Human Stories</h3>
                  <p className="text-sm text-muted-foreground">
                    Sharing the personal journeys of telecom professionals
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card hover:shadow-elevated transition-smooth">
                <CardContent className="p-6">
                  <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Expert Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep conversations with industry leaders and innovators
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card hover:shadow-elevated transition-smooth">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Global Perspective</h3>
                  <p className="text-sm text-muted-foreground">
                    Voices from telecommunications professionals worldwide
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card hover:shadow-elevated transition-smooth">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Building connections within the telecom ecosystem
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What We Do</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Podcast Episodes</h3>
                  <p className="text-muted-foreground mb-6">
                    Our weekly podcast features in-depth conversations with telecommunications 
                    professionals from around the world. From network engineers to C-suite executives, 
                    from startup founders to industry veterans, we explore their career journeys, 
                    challenges, successes, and insights into the future of telecommunications.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 65+ episodes and growing</li>
                    <li>• Available on all major platforms</li>
                    <li>• Weekly releases</li>
                    <li>• Global audience reach</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Articles & Insights</h3>
                  <p className="text-muted-foreground mb-6">
                    Beyond our podcast, we publish thoughtful articles and industry analysis 
                    that dive deeper into the topics and trends shaping telecommunications. 
                    Our written content explores technical innovations, industry trends, 
                    career advice, and the human stories behind the technology.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Industry analysis and trends</li>
                    <li>• Technical deep dives</li>
                    <li>• Career guidance</li>
                    <li>• Guest contributor pieces</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Connect With Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our growing community of telecommunications professionals. 
              Follow us on social media, subscribe to our podcast, and be part of the conversation.
            </p>
            
            <SocialLinks size="lg" />
            
            <div className="mt-12 p-8 bg-secondary/30 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4">Want to be a guest?</h3>
              <p className="text-muted-foreground">
                We're always looking for fascinating people in telecommunications to feature on our podcast. 
                If you have an interesting story to tell or insights to share, we'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;