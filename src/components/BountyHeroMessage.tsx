
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Trophy } from "lucide-react";

const BountyHeroMessage = () => {
  return (
    <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg border-gray-700/50 mb-8 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all duration-500">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 drop-shadow-[0_0_15px_rgba(147,51,234,0.6)]">
            Ready to Earn Crypto?
          </h2>
          <p className="text-gray-300 text-lg">Join thousands of skilled problem solvers earning rewards on the blockchain</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full mb-4 shadow-[0_0_15px_rgba(147,51,234,0.5)]">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Find Challenges</h3>
            <p className="text-purple-300 text-sm">Discover exciting bounties that match your skills and interests</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-4 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Solve & Earn</h3>
            <p className="text-blue-300 text-sm">Complete tasks and get instantly rewarded in cryptocurrency</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
            <div className="p-3 bg-gradient-to-r from-green-600 to-green-700 rounded-full mb-4 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Build Reputation</h3>
            <p className="text-green-300 text-sm">Establish yourself as a trusted solver in the community</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BountyHeroMessage;
