
import { useState } from "react";
import Header from "@/components/Header";
import DashboardStats from "@/components/DashboardStats";
import FilterBar from "@/components/FilterBar";
import BountyCard from "@/components/BountyCard";
import CreateBountyForm from "@/components/CreateBountyForm";
import { Button } from "@/components/ui/button";
import { Plus, Grid, List, TrendingUp } from "lucide-react";

const Index = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Sample bounty data - in a real app this would come from your smart contract
  const bounties = [
    {
      id: "1",
      title: "Fix responsive design issues on DeFi dashboard",
      description: "The dashboard doesn't work properly on mobile devices. Need to fix CSS and ensure proper responsive behavior across all screen sizes.",
      reward: "0.5",
      currency: "ETH",
      timeLeft: "5 days",
      difficulty: "Medium" as const,
      category: "Web Development",
      poster: "alice.eth",
      status: "Open" as const
    },
    {
      id: "2", 
      title: "Smart contract security audit",
      description: "Review and audit a DeFi lending protocol smart contract for potential vulnerabilities and gas optimizations.",
      reward: "2.0",
      currency: "ETH",
      timeLeft: "12 days",
      difficulty: "Hard" as const,
      category: "Blockchain",
      poster: "defi_dev.eth",
      status: "Open" as const
    },
    {
      id: "3",
      title: "Create mobile app wireframes",
      description: "Design wireframes for a crypto trading mobile app. Need clean, modern UI/UX design following mobile best practices.",
      reward: "0.8",
      currency: "ETH", 
      timeLeft: "7 days",
      difficulty: "Easy" as const,
      category: "Design",
      poster: "crypto_trader",
      status: "In Progress" as const
    },
    {
      id: "4",
      title: "Implement NFT marketplace search feature",
      description: "Add advanced search and filtering capabilities to an existing NFT marketplace. Must support metadata filtering and price ranges.",
      reward: "1.2",
      currency: "ETH",
      timeLeft: "10 days", 
      difficulty: "Medium" as const,
      category: "Web Development",
      poster: "nft_builder",
      status: "Open" as const
    },
    {
      id: "5",
      title: "Bug fix: Transaction history not loading",
      description: "Users report that transaction history page is not loading properly. Need to debug and fix the API integration issue.",
      reward: "0.3",
      currency: "ETH",
      timeLeft: "3 days",
      difficulty: "Easy" as const,
      category: "Web Development", 
      poster: "webapp_dev",
      status: "Completed" as const
    },
    {
      id: "6",
      title: "AI-powered trading bot development",
      description: "Create a trading bot that uses machine learning to analyze market trends and execute trades automatically on DEX platforms.",
      reward: "5.0",
      currency: "ETH",
      timeLeft: "30 days",
      difficulty: "Hard" as const,
      category: "AI/ML",
      poster: "quant_trader",
      status: "Open" as const
    }
  ];

  if (showCreateForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setShowCreateForm(false)}
              className="mb-4 border-purple-500 text-black hover:bg-purple-600 hover:text-white bg-white"
            >
              ← Back to Dashboard
            </Button>
          </div>
          <CreateBountyForm />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header />
      
      {/* Sidebar Navigation */}
      <div className="flex">
        <aside className="w-64 min-h-screen bg-gray-800/50 backdrop-blur-lg border-r border-gray-700 p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  className="w-full justify-start bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black"
                  onClick={() => setShowCreateForm(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Bounty
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-600 text-black hover:bg-gray-700 hover:text-white bg-white">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">View Options</h3>
              <div className="flex space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' 
                    ? "bg-purple-600 text-white" 
                    : "border-gray-600 text-black hover:bg-gray-700 hover:text-white bg-white"
                  }
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' 
                    ? "bg-purple-600 text-white" 
                    : "border-gray-600 text-black hover:bg-gray-700 hover:text-white bg-white"
                  }
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 px-8 py-8">
          {/* Hero Section - Redesigned */}
          <div className="mb-12 text-left">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-5xl font-bold text-white mb-4">
                  Welcome to
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> BountyChain</span>
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl">
                  The premier decentralized platform for connecting talent with opportunities. Create, discover, and complete bounties in the Web3 ecosystem.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">BC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Stats - Horizontal Layout */}
          <div className="mb-8">
            <DashboardStats />
          </div>

          {/* Filter Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Active Bounties</h2>
              <Button variant="outline" size="sm" className="border-gray-600 text-black hover:bg-gray-700 hover:text-white bg-white">
                View All Categories
              </Button>
            </div>
            <FilterBar />
          </div>

          {/* Bounties Section */}
          <div className="space-y-8">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {bounties.map((bounty) => (
                  <BountyCard key={bounty.id} {...bounty} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {bounties.map((bounty) => (
                  <div key={bounty.id} className="w-full">
                    <BountyCard {...bounty} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Load More Section */}
          <div className="flex justify-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-purple-500 text-black hover:bg-purple-600 hover:text-white bg-white px-8"
            >
              Load More Bounties
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
