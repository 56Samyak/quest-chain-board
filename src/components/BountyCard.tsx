
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, User, Star } from "lucide-react";

interface BountyCardProps {
  id: string;
  title: string;
  description: string;
  reward: string;
  currency: string;
  timeLeft: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  poster: string;
  status: "Open" | "In Progress" | "Completed";
}

const BountyCard = ({
  title,
  description,
  reward,
  currency,
  timeLeft,
  difficulty,
  category,
  poster,
  status
}: BountyCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-blue-100 text-blue-800";
      case "In Progress": return "bg-orange-100 text-orange-800";
      case "Completed": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex space-x-2">
            <Badge className={getDifficultyColor(difficulty)}>
              {difficulty}
            </Badge>
            <Badge variant="secondary">{category}</Badge>
          </div>
          <Badge className={getStatusColor(status)}>
            {status}
          </Badge>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{title}</h3>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{poster}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{timeLeft}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-1">
            <DollarSign className="h-5 w-5 text-green-600" />
            <span className="text-xl font-bold text-green-600">{reward}</span>
            <span className="text-sm text-gray-500">{currency}</span>
          </div>
          
          <Button 
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            disabled={status !== "Open"}
          >
            {status === "Open" ? "Claim Bounty" : "View Details"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BountyCard;
