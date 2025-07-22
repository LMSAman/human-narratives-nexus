import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Platform {
  name: string;
  url: string;
  icon: string;
  color: string;
}

const platforms: Platform[] = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/show/1catwicFMGl3gKEzBMvgfG',
    icon: '🎵',
    color: 'bg-[#1DB954] hover:bg-[#1ed760]'
  },
  {
    name: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/us/podcast/humans-of-telecom/id1669948788',
    icon: '🎧',
    color: 'bg-[#A855F7] hover:bg-[#9333EA]'
  },
  {
    name: 'Amazon Music',
    url: 'https://music.amazon.com/podcasts/ead6a17a-7ea0-4d60-9fd0-28e531e55797/humans-of-telecom',
    icon: '🎼',
    color: 'bg-[#FF9900] hover:bg-[#FF8C00]'
  },
  {
    name: 'Pocket Casts',
    url: 'https://pca.st/q10scav3',
    icon: '📱',
    color: 'bg-[#F43F5E] hover:bg-[#E11D48]'
  },
  {
    name: 'Castbox',
    url: 'https://castbox.fm/channel/Humans-of-Telecom-id5306754',
    icon: '📻',
    color: 'bg-[#10B981] hover:bg-[#059669]'
  },
  {
    name: 'RadioPublic',
    url: 'https://radiopublic.com/humans-of-telecom-6027K0',
    icon: '📡',
    color: 'bg-[#6366F1] hover:bg-[#4F46E5]'
  }
];

const PlatformLinks = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Listen Everywhere
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find Humans of Telecom on all major podcast platforms. Choose your preferred way to listen and never miss an episode.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="outline"
                className={`w-full h-20 flex flex-col items-center justify-center gap-2 ${platform.color} text-white border-none hover:scale-105 transition-bounce`}
              >
                <span className="text-2xl">{platform.icon}</span>
                <span className="text-xs font-medium text-center leading-tight">
                  {platform.name}
                </span>
              </Button>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            <ExternalLink className="mr-2 h-4 w-4" />
            RSS Feed
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlatformLinks;