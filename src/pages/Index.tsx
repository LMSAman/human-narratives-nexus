import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EpisodeCard from '@/components/EpisodeCard';
import ArticleCard from '@/components/ArticleCard';
import PlatformLinks from '@/components/PlatformLinks';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data - in a real app, this would come from an API or CMS
const featuredEpisodes = [
  {
    title: "Simona Maga, Head of Sales and Operations Mobile Services",
    guest: "Simona Maga at Sparkle",
    description: "Life is not a race. There is always time to grow, and always a chance to start again. — Simona Maga, Head of Sales and Operations at Sparkle, in conversation with...",
    duration: "23:47",
    date: "Jul 22, 2025",
    episodeNumber: 65
  },
  {
    title: "Sam Evans, Senior Managing Director at FTI Delta",
    guest: "Sam Evans at FTI Delta", 
    description: "Join us for an inspiring conversation with Sam Evans, Senior Managing Director at FTI Delta, as we explore the intersection of telecommunications and strategic consulting.",
    duration: "31:24",
    date: "Jul 07, 2025",
    episodeNumber: 64
  },
  {
    title: "Innovation in 5G Networks",
    guest: "Dr. Maria Rodriguez",
    description: "Exploring the latest developments in 5G technology and what it means for the future of telecommunications infrastructure worldwide.",
    duration: "28:15",
    date: "Jun 23, 2025", 
    episodeNumber: 63
  }
];

const featuredArticles = [
  {
    title: "The Future of Telecommunications: What to Expect in 2025",
    excerpt: "As we advance through 2025, the telecommunications industry continues to evolve at breakneck speed. From 5G expansion to edge computing, here's what industry leaders need to know.",
    author: "Humans of Telecom Team",
    publishDate: "Jan 15, 2025",
    readTime: "5 min",
    category: "Industry Trends"
  },
  {
    title: "Building Resilient Networks: Lessons from Industry Veterans",
    excerpt: "Network resilience has never been more critical. We spoke with industry veterans to understand the key principles of building infrastructure that can weather any storm.",
    author: "Sarah Johnson",
    publishDate: "Jan 12, 2025", 
    readTime: "8 min",
    category: "Infrastructure"
  },
  {
    title: "The Human Side of Digital Transformation",
    excerpt: "Behind every major technology shift are the people making it happen. This deep dive explores how telecom professionals are adapting to the digital revolution.",
    author: "Michael Chen",
    publishDate: "Jan 08, 2025",
    readTime: "6 min",
    category: "Leadership"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Featured Episodes Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Latest Episodes</h2>
              <p className="text-muted-foreground">
                Discover the stories behind the telecom industry's brightest minds
              </p>
            </div>
            <Link to="/podcasts">
              <Button variant="outline">
                View All Episodes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredEpisodes.map((episode, index) => (
              <EpisodeCard key={index} {...episode} />
            ))}
          </div>
        </div>
      </section>

      {/* Platform Links */}
      <PlatformLinks />

      {/* Featured Articles Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
              <p className="text-muted-foreground">
                In-depth analysis and insights from the telecom industry
              </p>
            </div>
            <Link to="/articles">
              <Button variant="outline">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;