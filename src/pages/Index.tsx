
import { useState } from "react";
import Header from "@/components/Header";
import DashboardStats from "@/components/DashboardStats";
import FilterBar from "@/components/FilterBar";
import BountyCard from "@/components/BountyCard";
import CreateBountyForm from "@/components/CreateBountyForm";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

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
      <div className="min-h-screen bg-gray-900">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setShowCreateForm(false)}
              className="mb-4 border-gray-600 text-gray-300 hover:bg-gray-800"
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
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Decentralized
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Bounty </span>
            Board
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with talented developers, designers, and creators. Post bounties for your projects or claim existing ones to earn cryptocurrency rewards.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              onClick={() => setShowCreateForm(true)}
            >
              <Plus className="h-5 w-5 mr-2" />
              Create Bounty
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Browse Bounties
            </Button>
          </div>
        </div>

        {/* Dashboard Stats */}
        <DashboardStats />

        {/* Filter Bar */}
        <FilterBar />

        {/* Bounties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bounties.map((bounty) => (
            <BountyCard key={bounty.id} {...bounty} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            Load More Bounties
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
