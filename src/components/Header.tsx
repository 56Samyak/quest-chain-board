
import { Button } from "@/components/ui/button";
import { Wallet, Plus, Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.6)]">
                <Shield className="h-6 w-6 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
                BountyChain
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-[0_0_5px_rgba(147,51,234,0.3)]">
              Browse Bounties
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-[0_0_5px_rgba(147,51,234,0.3)]">
              My Bounties
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-[0_0_5px_rgba(147,51,234,0.3)]">
              Dashboard
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center space-x-2 border-gray-600 text-white hover:bg-gray-800 hover:text-white bg-gray-800/60 shadow-[0_0_8px_rgba(34,197,94,0.4)] hover:shadow-[0_0_12px_rgba(34,197,94,0.6)]"
            >
              <Plus className="h-4 w-4" />
              <span>Create Bounty</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center space-x-2 border-gray-600 text-white hover:bg-gray-800 hover:text-white bg-gray-800/60 shadow-[0_0_8px_rgba(251,191,36,0.4)] hover:shadow-[0_0_12px_rgba(251,191,36,0.6)]"
            >
              <Wallet className="h-4 w-4" />
              <span>Connect Wallet</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
