import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import podcastLogo from '@/assets/podcast-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={podcastLogo} 
              alt="Humans of Telecom" 
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Humans of Telecom</span>
              <span className="text-xs text-muted-foreground">The Unplugged Podcast</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Home
            </Link>
            <Link 
              to="/podcasts" 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Episodes
            </Link>
            <Link 
              to="/articles" 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Articles
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-smooth"
            >
              About
            </Link>
            <Button variant="default" size="sm">
              Listen on Spotify
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/podcasts" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Episodes
              </Link>
              <Link 
                to="/articles" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Button variant="default" size="sm" className="w-fit">
                Listen on Spotify
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;