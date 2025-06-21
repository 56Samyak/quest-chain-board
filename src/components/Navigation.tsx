
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface NavigationProps {
  onCreateBounty: () => void;
}

const Navigation = ({ onCreateBounty }: NavigationProps) => {
  return (
    <aside className="w-64 min-h-screen bg-gray-800/50 backdrop-blur-lg border-r border-gray-700 p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-[0_0_8px_rgba(147,51,234,0.6)]">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <Button 
              className="w-full justify-start bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_20px_rgba(147,51,234,0.8)] transition-all duration-300"
              onClick={onCreateBounty}
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Bounty
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
