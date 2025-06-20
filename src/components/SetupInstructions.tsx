
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, Copy } from "lucide-react";
import { useWeb3 } from "@/hooks/useWeb3";
import { useState } from "react";

const SetupInstructions = () => {
  const { account } = useWeb3();
  const [copied, setCopied] = useState(false);
  
  const ganacheRPCUrl = "http://127.0.0.1:7545";
  const chainId = "1337";
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (account) {
    return (
      <Card className="bg-green-900/20 border-green-500/50">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-green-300">Wallet Connected! You can now create and interact with bounties.</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-yellow-900/20 border-yellow-500/50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-yellow-300">
          <AlertCircle className="h-5 w-5" />
          <span>Setup Required</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-yellow-200">
          <p className="mb-4">To use this bounty board, please follow these steps:</p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-blue-300">1. Start Ganache</h4>
              <p className="text-sm text-gray-300">Launch Ganache on port 7545 with network ID 1337</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-purple-300">2. Deploy Smart Contract</h4>
              <div className="bg-gray-800 p-3 rounded mt-2">
                <code className="text-sm text-green-400">
                  npx hardhat compile<br/>
                  npx hardhat run scripts/deploy.js --network ganache
                </code>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-green-300">3. Configure MetaMask</h4>
              <div className="space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">RPC URL:</span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-xs">{ganacheRPCUrl}</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(ganacheRPCUrl)}
                    className="h-6 w-6 p-0"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Chain ID:</span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-xs">{chainId}</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(chainId)}
                    className="h-6 w-6 p-0"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-orange-300">4. Update Contract Address</h4>
              <p className="text-sm text-gray-300 mb-2">After deployment, update the contract address in contractService.ts:</p>
              <div className="flex items-center space-x-2">
                <code className="bg-gray-800 px-2 py-1 rounded text-xs">{contractAddress}</code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(contractAddress)}
                  className="h-6 w-6 p-0"
                >
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          {copied && (
            <div className="mt-4 text-green-400 text-sm">✓ Copied to clipboard!</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SetupInstructions;
