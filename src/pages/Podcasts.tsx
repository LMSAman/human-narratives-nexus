import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EpisodeCard from '@/components/EpisodeCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';

// Extended episodes data
const allEpisodes = [
  {
    title: "Simona Maga, Head of Sales and Operations Mobile Services",
    guest: "Simona Maga at Sparkle",
    description: "Life is not a race. There is always time to grow, and always a chance to start again. — Simona Maga, Head of Sales and Operations at Sparkle, in conversation with our host about career growth, leadership challenges, and the evolving landscape of mobile services in the telecommunications industry.",
    duration: "23:47",
    date: "Jul 22, 2025",
    episodeNumber: 65
  },
  {
    title: "Sam Evans, Senior Managing Director at FTI Delta",
    guest: "Sam Evans at FTI Delta", 
    description: "Join us for an inspiring conversation with Sam Evans, Senior Managing Director at FTI Delta, as we explore the intersection of telecommunications and strategic consulting. Sam shares insights on market transformation, digital innovation, and the future of telecom advisory services.",
    duration: "31:24",
    date: "Jul 07, 2025",
    episodeNumber: 64
  },
  {
    title: "Innovation in 5G Networks with Dr. Maria Rodriguez",
    guest: "Dr. Maria Rodriguez",
    description: "Exploring the latest developments in 5G technology and what it means for the future of telecommunications infrastructure worldwide. Dr. Rodriguez discusses the technical challenges, deployment strategies, and the transformative potential of next-generation networks.",
    duration: "28:15",
    date: "Jun 23, 2025", 
    episodeNumber: 63
  },
  {
    title: "The Art of Network Operations",
    guest: "James Thompson",
    description: "Network operations center management and the skills needed to keep global telecommunications running smoothly. James Thompson, a veteran NOC manager, shares his expertise in incident response, team leadership, and operational excellence.",
    duration: "26:33",
    date: "Jun 09, 2025",
    episodeNumber: 62
  },
  {
    title: "Building Tomorrow's Internet Infrastructure",
    guest: "Lisa Chen",
    description: "From fiber optics to edge computing, Lisa Chen discusses the infrastructure investments shaping the future of global connectivity. This episode covers deployment strategies, technology choices, and the business case for next-generation networks.",
    duration: "35:18",
    date: "May 26, 2025",
    episodeNumber: 61
  },
  {
    title: "Cybersecurity in Telecommunications",
    guest: "David Park",
    description: "David Park, Chief Security Officer at a major carrier, discusses the unique cybersecurity challenges facing telecommunications companies today. From protecting critical infrastructure to securing customer data, this conversation covers it all.",
    duration: "29:42",
    date: "May 12, 2025",
    episodeNumber: 60
  }
];

const Podcasts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredEpisodes = allEpisodes.filter(episode =>
    episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    episode.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
    episode.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              All Episodes
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dive deep into conversations with telecommunications industry leaders, 
              innovators, and visionaries who are shaping our connected world.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search episodes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {filteredEpisodes.length} Episode{filteredEpisodes.length !== 1 ? 's' : ''}
              {searchTerm && (
                <span className="text-muted-foreground font-normal ml-2">
                  matching "{searchTerm}"
                </span>
              )}
            </h2>
            
            {searchTerm && (
              <Button 
                variant="ghost" 
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </Button>
            )}
          </div>
          
          {filteredEpisodes.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredEpisodes.map((episode, index) => (
                <EpisodeCard key={index} {...episode} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">
                No episodes found matching your search.
              </p>
              <Button 
                variant="outline"
                onClick={() => setSearchTerm('')}
              >
                View All Episodes
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Podcasts;