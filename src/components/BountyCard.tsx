
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, User, CheckCircle } from "lucide-react";
import { useWeb3 } from "@/hooks/useWeb3";
import { ContractService } from "@/services/contractService";

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
  deadline: number;
  hunter: string;
  onRefresh?: () => void;
}

const BountyCard = ({
  id,
  title,
  description,
  reward,
  currency,
  timeLeft,
  difficulty,
  category,
  poster,
  status,
  deadline,
  hunter,
  onRefresh
}: BountyCardProps) => {
  const { signer, account } = useWeb3();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Medium": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Hard": return "bg-red-500/20 text-red-300 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "In Progress": return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      case "Completed": return "bg-green-500/20 text-green-300 border-green-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const isExpired = deadline < Date.now();
  const isClaimable = status === "In Progress" && isExpired;
  const isPoster = account?.toLowerCase() === poster.toLowerCase();
  const isHunter = account?.toLowerCase() === hunter.toLowerCase();

  const handleClaimBounty = async () => {
    if (!signer) {
      alert('Please connect your wallet first');
      return;
    }

    try {
      console.log('Claiming bounty with ID:', id);
      const contractService = new ContractService(signer);
      const tx = await contractService.acceptBounty(Number(id));
      console.log('Bounty claimed successfully:', tx);
      
      if (onRefresh) {
        await onRefresh();
      }
    } catch (error) {
      console.error('Error claiming bounty:', error);
      alert('Failed to claim bounty. Please try again.');
    }
  };

  const handleCompleteBounty = async () => {
    if (!signer) {
      alert('Please connect your wallet first');
      return;
    }

    if (!isPoster) {
      alert('Only the bounty poster can mark bounties as complete');
      return;
    }

    try {
      console.log('Completing bounty with ID:', id);
      const contractService = new ContractService(signer);
      const tx = await contractService.completeBounty(Number(id));
      console.log('Bounty completed successfully:', tx);
      
      if (onRefresh) {
        await onRefresh();
      }
    } catch (error) {
      console.error('Error completing bounty:', error);
      alert('Failed to complete bounty. Please try again.');
    }
  };

  const getActionButton = () => {
    if (status === "Completed") {
      return (
        <Button disabled className="bg-green-600/50 text-green-200">
          <CheckCircle className="h-4 w-4 mr-2" />
          Completed
        </Button>
      );
    }

    if (status === "Open") {
      return (
        <Button 
          onClick={handleClaimBounty}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium shadow-[0_0_12px_rgba(147,51,234,0.5)] hover:shadow-[0_0_16px_rgba(147,51,234,0.7)]"
        >
          Claim Bounty
        </Button>
      );
    }

    if (status === "In Progress") {
      if (isPoster && !isExpired) {
        return (
          <Button 
            onClick={handleCompleteBounty}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium shadow-[0_0_12px_rgba(34,197,94,0.5)] hover:shadow-[0_0_16px_rgba(34,197,94,0.7)]"
          >
            Mark Complete
          </Button>
        );
      }

      if (isClaimable && isHunter) {
        return (
          <Button 
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium shadow-[0_0_12px_rgba(234,88,12,0.5)] hover:shadow-[0_0_16px_rgba(234,88,12,0.7)]"
            disabled
          >
            Expired - Awaiting Resolution
          </Button>
        );
      }

      return (
        <Button disabled className="bg-gray-600/50 text-gray-300">
          In Progress
        </Button>
      );
    }

    return (
      <Button disabled className="bg-gray-600/50 text-gray-300">
        View Details
      </Button>
    );
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-gray-800/40 backdrop-blur-lg border-gray-700/50 hover:border-purple-500/50 relative overflow-hidden shadow-[0_0_20px_rgba(75,85,99,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="pb-3 relative z-10">
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-wrap gap-2">
            <Badge className={`${getDifficultyColor(difficulty)} border font-medium shadow-[0_0_8px_rgba(34,197,94,0.3)]`}>
              {difficulty}
            </Badge>
            <Badge variant="secondary" className="bg-gray-700/50 text-gray-300 border-gray-600/50 shadow-[0_0_6px_rgba(156,163,175,0.3)]">
              {category}
            </Badge>
            {isExpired && (
              <Badge className="bg-red-500/20 text-red-300 border-red-500/30 font-medium">
                Expired
              </Badge>
            )}
          </div>
          <Badge className={`${getStatusColor(status)} border font-medium shadow-[0_0_8px_rgba(59,130,246,0.3)]`}>
            {status}
          </Badge>
        </div>
        <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-purple-300 transition-colors drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="pb-4 relative z-10">
        <p className="text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2 text-gray-400">
            <User className="h-4 w-4 text-purple-400 drop-shadow-[0_0_3px_rgba(147,51,234,0.5)]" />
            <span className="truncate">{`${poster.slice(0, 6)}...${poster.slice(-4)}`}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Clock className="h-4 w-4 text-blue-400 drop-shadow-[0_0_3px_rgba(59,130,246,0.5)]" />
            <span>{timeLeft}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 relative z-10">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-6 w-6 text-green-400 drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]" />
            <span className="text-2xl font-bold text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">{reward}</span>
            <span className="text-sm text-gray-400 font-medium">{currency}</span>
          </div>
          
          {getActionButton()}
        </div>
      </CardFooter>
    </Card>
  );
};

export default BountyCard;
