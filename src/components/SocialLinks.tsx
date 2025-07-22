import { Facebook, Instagram, Twitter, Youtube, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/humans.of.telecom',
    icon: Facebook,
    color: 'hover:text-[#1877F2]'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/humans_of_telecom',
    icon: Instagram,
    color: 'hover:text-[#E4405F]'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/humans_telecom',
    icon: Twitter,
    color: 'hover:text-[#1DA1F2]'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@humansoftelecom',
    icon: Youtube,
    color: 'hover:text-[#FF0000]'
  },
  {
    name: 'Website',
    url: 'http://www.humansoftelecom.life/',
    icon: Globe,
    color: 'hover:text-primary'
  }
];

interface SocialLinksProps {
  variant?: 'default' | 'footer';
  size?: 'sm' | 'md' | 'lg';
}

const SocialLinks = ({ variant = 'default', size = 'md' }: SocialLinksProps) => {
  const buttonSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default';
  
  return (
    <div className={`flex items-center gap-2 ${variant === 'footer' ? 'justify-center md:justify-start' : 'justify-center'}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${social.name}`}
          >
            <Button
              variant="ghost"
              size={buttonSize}
              className={`transition-smooth ${social.color} ${variant === 'footer' ? 'text-muted-foreground' : ''}`}
            >
              <Icon className={`${size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'}`} />
            </Button>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;