import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import { useState } from 'react';

// Sample articles data
const allArticles = [
  {
    title: "The Future of Telecommunications: What to Expect in 2025",
    excerpt: "As we advance through 2025, the telecommunications industry continues to evolve at breakneck speed. From 5G expansion to edge computing, satellite internet to AI-driven network management, the landscape is transforming rapidly. Industry leaders must stay ahead of these changes to remain competitive and deliver exceptional services to customers.",
    author: "Humans of Telecom Team",
    publishDate: "Jan 15, 2025",
    readTime: "5 min",
    category: "Industry Trends"
  },
  {
    title: "Building Resilient Networks: Lessons from Industry Veterans",
    excerpt: "Network resilience has never been more critical as our world becomes increasingly dependent on digital connectivity. We spoke with industry veterans who have weathered multiple technological storms to understand the key principles of building infrastructure that can weather any crisis, from natural disasters to cyber attacks.",
    author: "Sarah Johnson",
    publishDate: "Jan 12, 2025", 
    readTime: "8 min",
    category: "Infrastructure"
  },
  {
    title: "The Human Side of Digital Transformation",
    excerpt: "Behind every major technology shift are the people making it happen. This deep dive explores how telecom professionals are adapting to the digital revolution, the skills they're developing, and the challenges they face in an industry that never stops evolving.",
    author: "Michael Chen",
    publishDate: "Jan 08, 2025",
    readTime: "6 min",
    category: "Leadership"
  },
  {
    title: "5G Deployment Strategies: A Global Perspective",
    excerpt: "The rollout of 5G networks varies significantly across different markets and regions. From dense urban deployments to rural connectivity challenges, we examine the diverse strategies telecommunications companies are employing to bring next-generation wireless technology to their customers.",
    author: "Dr. Amanda Foster",
    publishDate: "Jan 05, 2025",
    readTime: "7 min",
    category: "Technology"
  },
  {
    title: "Sustainability in Telecommunications: Going Green",
    excerpt: "Environmental responsibility is becoming a key priority for telecommunications companies worldwide. From reducing energy consumption in data centers to implementing circular economy principles in device manufacturing, the industry is finding innovative ways to minimize its environmental impact.",
    author: "Robert Kim",
    publishDate: "Dec 28, 2024",
    readTime: "6 min",
    category: "Sustainability"
  },
  {
    title: "Edge Computing and the Telecom Revolution",
    excerpt: "Edge computing is reshaping how telecommunications companies deliver services and process data. By moving computation closer to end users, carriers can reduce latency, improve performance, and enable new applications that were previously impossible.",
    author: "Jennifer Liu",
    publishDate: "Dec 22, 2024",
    readTime: "9 min",
    category: "Technology"
  },
  {
    title: "Customer Experience in the Digital Age",
    excerpt: "As customer expectations continue to rise, telecommunications companies are investing heavily in digital transformation to improve service delivery. From AI-powered customer support to personalized service offerings, the focus is on creating seamless, intuitive experiences.",
    author: "Carlos Rodriguez",
    publishDate: "Dec 18, 2024",
    readTime: "5 min",
    category: "Customer Experience"
  },
  {
    title: "The Rise of Private 5G Networks",
    excerpt: "Private 5G networks are gaining traction across industries, from manufacturing to healthcare. These dedicated networks offer enhanced security, reliability, and customization options that public networks cannot match, opening new revenue opportunities for telecom providers.",
    author: "Emma Thompson",
    publishDate: "Dec 15, 2024",
    readTime: "8 min",
    category: "Enterprise"
  }
];

const categories = ['All', 'Industry Trends', 'Infrastructure', 'Leadership', 'Technology', 'Sustainability', 'Customer Experience', 'Enterprise'];

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Articles & Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              In-depth analysis, industry insights, and thought leadership from 
              telecommunications professionals around the globe.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`cursor-pointer transition-smooth px-4 py-2 ${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground hover:bg-accent' 
                    : 'hover:bg-secondary'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {filteredArticles.length} Article{filteredArticles.length !== 1 ? 's' : ''}
              {searchTerm && (
                <span className="text-muted-foreground font-normal ml-2">
                  matching "{searchTerm}"
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span className="text-muted-foreground font-normal ml-2">
                  in {selectedCategory}
                </span>
              )}
            </h2>
            
            {(searchTerm || selectedCategory !== 'All') && (
              <Button 
                variant="ghost" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
          
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">
                No articles found matching your criteria.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;