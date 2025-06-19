
import { Button } from "@/components/ui/button";
import { Wallet, Plus, User, Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                BountyChain
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Browse Bounties
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              My Bounties
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Dashboard
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-2 border-gray-600 text-gray-300 hover:bg-gray-800">
              <Plus className="h-4 w-4" />
              <span>Create Bounty</span>
            </Button>
            
            <Button variant="outline" size="sm" className="flex items-center space-x-2 border-gray-600 text-gray-300 hover:bg-gray-800">
              <Wallet className="h-4 w-4" />
              <span>Connect Wallet</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-gray-300 hover:bg-gray-800">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
