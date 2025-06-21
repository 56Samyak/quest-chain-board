
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import DashboardStats from "@/components/DashboardStats";
import FilterBar from "@/components/FilterBar";
import BountyCard from "@/components/BountyCard";
import CreateBountyForm from "@/components/CreateBountyForm";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BountyHeroMessage from "@/components/BountyHeroMessage";
import { Button } from "@/components/ui/button";
import { useWeb3 } from "@/hooks/useWeb3";
import { ContractService } from "@/services/contractService";
import { gsap } from "gsap";

interface Bounty {
  id: number;
  title: string;
  description: string;
  reward: string;
  poster: string;
  hunter: string;
  isCompleted: boolean;
  isActive: boolean;
  deadline: number;
}

const Index = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [bounties, setBounties] = useState<Bounty[]>([]);
  const [loading, setLoading] = useState(false);
  const { signer, account } = useWeb3();

  useEffect(() => {
    gsap.fromTo(".fade-in", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 });
  }, []);

  useEffect(() => {
    if (signer && account) {
      loadBounties();
    }
  }, [signer, account]);

  const loadBounties = async () => {
    if (!signer) {
      console.log('No signer available');
      return;
    }

    setLoading(true);
    try {
      console.log('Loading bounties...');
      const contractService = new ContractService(signer);
      const contractBounties = await contractService.getAllBounties();
      console.log('Loaded bounties:', contractBounties);
      setBounties(contractBounties);
    } catch (error) {
      console.error('Error loading bounties:', error);
      setBounties([]);
    } finally {
      setLoading(false);
    }
  };

  const handleBountyCreated = async () => {
    console.log('Bounty created, refreshing list...');
    await loadBounties();
    setShowCreateForm(false);
  };

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
          <CreateBountyForm onBountyCreated={handleBountyCreated} />
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
          <div className="fade-in">
            <HeroSection />
          </div>

          <div className="fade-in">
            <BountyHeroMessage />
          </div>

          {account && (
            <>
              <div className="fade-in mb-8">
                <DashboardStats />
              </div>

              <div className="fade-in mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    Active Bounties {loading && "(Loading...)"}
                  </h2>
                </div>
                <FilterBar />
              </div>

              <div className="fade-in space-y-8">
                {bounties.length === 0 && !loading ? (
                  <div className="text-center py-12">
                    <p className="text-gray-400 text-lg">No bounties found. Create the first one!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {bounties.map((bounty) => (
                      <BountyCard 
                        key={bounty.id}
                        id={bounty.id.toString()}
                        title={bounty.title}
                        description={bounty.description}
                        reward={bounty.reward}
                        currency="ETH"
                        timeLeft={`${Math.max(0, Math.ceil((bounty.deadline - Date.now()) / (1000 * 60 * 60 * 24)))} days`}
                        difficulty="Medium"
                        category="Blockchain"
                        poster={`${bounty.poster.slice(0, 6)}...${bounty.poster.slice(-4)}`}
                        status={bounty.isCompleted ? "Completed" : bounty.hunter !== "0x0000000000000000000000000000000000000000" ? "In Progress" : "Open"}
                        onRefresh={loadBounties}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="fade-in flex justify-center mt-12">
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={loadBounties}
                  disabled={loading}
                  className="border-purple-500 text-white hover:bg-purple-600 hover:text-white bg-gray-800/60 px-8 shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_20px_rgba(147,51,234,0.8)]"
                >
                  {loading ? "Loading..." : "Refresh Bounties"}
                </Button>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
