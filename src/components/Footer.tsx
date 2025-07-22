import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { Separator } from '@/components/ui/separator';
import podcastLogo from '@/assets/podcast-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={podcastLogo} 
                alt="Humans of Telecom" 
                className="h-12 w-12 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-card-foreground">Humans of Telecom</span>
                <span className="text-sm text-muted-foreground">The Unplugged Podcast</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              A podcast that goes beyond our work lives to bring us closer to some of the 
              brightest and most influential members of the telecom community.
            </p>
            
            <SocialLinks variant="footer" size="sm" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/podcasts" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                All Episodes
              </Link>
              <Link 
                to="/articles" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Articles & Blog
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Listen */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Listen</h3>
            <nav className="flex flex-col space-y-2">
              <a 
                href="https://open.spotify.com/show/1catwicFMGl3gKEzBMvgfG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Spotify
              </a>
              <a 
                href="https://podcasts.apple.com/us/podcast/humans-of-telecom/id1669948788"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Apple Podcasts
              </a>
              <a 
                href="https://music.amazon.com/podcasts/ead6a17a-7ea0-4d60-9fd0-28e531e55797/humans-of-telecom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Amazon Music
              </a>
              <Link 
                to="/platforms" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                All Platforms
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Humans of Telecom. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link 
              to="/privacy" 
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;