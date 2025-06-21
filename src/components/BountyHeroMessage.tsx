
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Trophy } from "lucide-react";

const BountyHeroMessage = () => {
  return (
    <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30 mb-8">
      <CardContent className="p-6">
        <div className="flex items-center justify-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-600/20 rounded-full">
              <Target className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Find Your Next Challenge</h3>
              <p className="text-purple-300 text-sm">Discover exciting bounties waiting for skilled solvers</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600/20 rounded-full">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Earn While You Learn</h3>
              <p className="text-blue-300 text-sm">Get rewarded for your expertise and problem-solving skills</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-600/20 rounded-full">
              <Trophy className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Build Your Reputation</h3>
              <p className="text-green-300 text-sm">Complete bounties and establish yourself in the community</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BountyHeroMessage;
