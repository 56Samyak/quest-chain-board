
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
      case "Easy": return "bg-green-900 text-green-300 border-green-700";
      case "Medium": return "bg-yellow-900 text-yellow-300 border-yellow-700";
      case "Hard": return "bg-red-900 text-red-300 border-red-700";
      default: return "bg-gray-800 text-gray-300 border-gray-700";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-blue-900 text-blue-300 border-blue-700";
      case "In Progress": return "bg-orange-900 text-orange-300 border-orange-700";
      case "Completed": return "bg-green-900 text-green-300 border-green-700";
      default: return "bg-gray-800 text-gray-300 border-gray-700";
    }
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-gray-800 border-gray-700">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex space-x-2">
            <Badge className={getDifficultyColor(difficulty)}>
              {difficulty}
            </Badge>
            <Badge variant="secondary" className="bg-gray-700 text-gray-300 border-gray-600">{category}</Badge>
          </div>
          <Badge className={getStatusColor(status)}>
            {status}
          </Badge>
        </div>
        <h3 className="text-lg font-semibold text-white line-clamp-2">{title}</h3>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
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
            <DollarSign className="h-5 w-5 text-green-400" />
            <span className="text-xl font-bold text-green-400">{reward}</span>
            <span className="text-sm text-gray-400">{currency}</span>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
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
