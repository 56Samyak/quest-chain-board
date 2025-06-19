
const HeroSection = () => {
  return (
    <div className="mb-12 text-left">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]"> BountyChain</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl drop-shadow-[0_0_5px_rgba(156,163,175,0.5)]">
            The premier decentralized platform for connecting talent with opportunities. Create, discover, and complete bounties in the Web3 ecosystem.
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(147,51,234,0.6)]">
            <span className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">BC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
