import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  imageUrl?: string;
  slug?: string;
}

const ArticleCard = ({ 
  title, 
  excerpt, 
  author, 
  publishDate, 
  readTime, 
  category,
  imageUrl,
  slug 
}: ArticleCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-elevated transition-smooth group overflow-hidden">
      {/* Article Image */}
      {imageUrl && (
        <div className="relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-bounce"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>
      )}

      <CardContent className="p-6">
        {!imageUrl && (
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium mb-4">
            {category}
          </span>
        )}
        
        <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-smooth line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="font-medium">{author}</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{readTime} read</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          variant="ghost" 
          size="sm"
          className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
        >
          Read Article
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;