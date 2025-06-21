
import { Button } from "@/components/ui/button";
import { Wallet, LogOut, Shield } from "lucide-react";
import { useWeb3 } from "@/hooks/useWeb3";

const Header = () => {
  const { account, connectWallet, disconnectWallet, isConnecting } = useWeb3();

  return (
    <header className="bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.6)] hover:shadow-[0_0_25px_rgba(147,51,234,0.8)] transition-all duration-300">
                <Shield className="h-6 w-6 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                BountyChain
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-900/20 drop-shadow-[0_0_5px_rgba(147,51,234,0.3)]">
              Browse Bounties
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-900/20 drop-shadow-[0_0_5px_rgba(147,51,234,0.3)]">
              My Bounties
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-900/20 drop-shadow-[0_0_5px_rgba(147,51,234,0.3)]">
              Dashboard
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {account ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-3 py-1 bg-gray-800/60 rounded-lg border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_6px_rgba(34,197,94,0.6)]"></div>
                  <span className="text-green-300 text-sm font-medium">
                    {`${account.slice(0, 6)}...${account.slice(-4)}`}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={disconnectWallet}
                  className="flex items-center space-x-2 border-red-500/50 text-red-300 hover:bg-red-900/20 hover:text-red-200 bg-gray-800/60 shadow-[0_0_10px_rgba(239,68,68,0.4)] hover:shadow-[0_0_15px_rgba(239,68,68,0.6)] transition-all duration-300"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Disconnect</span>
                </Button>
              </div>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={connectWallet}
                disabled={isConnecting}
                className="flex items-center space-x-2 border-purple-500/50 text-purple-300 hover:bg-purple-900/20 hover:text-purple-200 bg-gray-800/60 shadow-[0_0_12px_rgba(147,51,234,0.4)] hover:shadow-[0_0_18px_rgba(147,51,234,0.6)] transition-all duration-300"
              >
                <Wallet className="h-4 w-4" />
                <span>
                  {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
