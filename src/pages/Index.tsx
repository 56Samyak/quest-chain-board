
import { useState } from "react";
import Header from "@/components/Header";
import DashboardStats from "@/components/DashboardStats";
import FilterBar from "@/components/FilterBar";
import BountyCard from "@/components/BountyCard";
import CreateBountyForm from "@/components/CreateBountyForm";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

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
              className="mb-4 border-purple-500 text-white hover:bg-purple-600 hover:text-white bg-gray-800/60 shadow-[0_0_10px_rgba(147,51,234,0.4)]"
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
      
      <div className="flex">
        <Navigation onCreateBounty={() => setShowCreateForm(true)} />

        <main className="flex-1 px-8 py-8">
          <HeroSection />

          {/* Dashboard Stats - Horizontal Layout */}
          <div className="mb-8">
            <DashboardStats />
          </div>

          {/* Filter Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Active Bounties</h2>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-600 text-white hover:bg-gray-700 hover:text-white bg-gray-800/60 shadow-[0_0_8px_rgba(34,197,94,0.4)] hover:shadow-[0_0_12px_rgba(34,197,94,0.6)]"
              >
                View All Categories
              </Button>
            </div>
            <FilterBar />
          </div>

          {/* Bounties Section */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {bounties.map((bounty) => (
                <BountyCard key={bounty.id} {...bounty} />
              ))}
            </div>
          </div>

          {/* Load More Section */}
          <div className="flex justify-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-purple-500 text-white hover:bg-purple-600 hover:text-white bg-gray-800/60 px-8 shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_20px_rgba(147,51,234,0.8)]"
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
