import { Play, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface EpisodeCardProps {
  title: string;
  guest: string;
  description: string;
  duration: string;
  date: string;
  episodeNumber: number;
  imageUrl?: string;
}

const EpisodeCard = ({ 
  title, 
  guest, 
  description, 
  duration, 
  date, 
  episodeNumber,
  imageUrl 
}: EpisodeCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-elevated transition-smooth group">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Episode Image/Number */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-accent rounded-xl flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-bounce">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={`Episode ${episodeNumber}`}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <span className="text-primary-foreground font-bold text-lg">
                {episodeNumber}
              </span>
            )}
          </div>

          {/* Episode Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1">
                <span className="text-sm text-primary font-medium">
                  Episode {episodeNumber}
                </span>
                <h3 className="text-lg font-bold text-card-foreground mb-1 group-hover:text-primary transition-smooth">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {guest}
                </p>
              </div>
              
              <Button 
                size="sm" 
                variant="ghost"
                className="flex-shrink-0 hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Play className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {description}
            </p>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;