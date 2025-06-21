
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface NavigationProps {
  onCreateBounty: () => void;
}

const Navigation = ({ onCreateBounty }: NavigationProps) => {
  return (
    <aside className="w-64 min-h-screen bg-gray-800/40 backdrop-blur-xl border-r border-gray-700/50 p-6 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(147,51,234,0.6)]">
            Quick Actions
          </h3>
          <div className="space-y-4">
            <Button 
              className="w-full justify-start bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white font-medium shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.8)] transition-all duration-300 transform hover:scale-105 border border-purple-500/30"
              onClick={onCreateBounty}
            >
              <Plus className="h-4 w-4 mr-3" />
              Create New Bounty
            </Button>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700/50">
          <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
            Categories
          </h4>
          <div className="space-y-2">
            {['Development', 'Design', 'Research', 'Writing', 'Marketing'].map((category) => (
              <button
                key={category}
                className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200 text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
