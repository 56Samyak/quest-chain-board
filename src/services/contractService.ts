
import { ethers } from 'ethers';
import BountyBoardABI from '../contracts/BountyBoard.json';

const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export class ContractService {
  private contract: ethers.Contract;

  constructor(signer: ethers.JsonRpcSigner) {
    console.log('Initializing contract with address:', CONTRACT_ADDRESS);
    this.contract = new ethers.Contract(CONTRACT_ADDRESS, BountyBoardABI.abi, signer);
  }

  async createBounty(title: string, description: string, reward: string, deadline: number) {
    try {
      const rewardInWei = ethers.parseEther(reward);
      console.log('Creating bounty with reward:', rewardInWei.toString());
      
      const tx = await this.contract.createBounty(title, description, deadline, {
        value: rewardInWei
      });
      
      console.log('Transaction sent:', tx.hash);
      const receipt = await tx.wait();
      console.log('Transaction confirmed:', receipt);
      
      return tx;
    } catch (error) {
      console.error('Error creating bounty:', error);
      throw error;
    }
  }

  async acceptBounty(bountyId: number) {
    try {
      const tx = await this.contract.acceptBounty(bountyId);
      await tx.wait();
      return tx;
    } catch (error) {
      console.error('Error accepting bounty:', error);
      throw error;
    }
  }

  async completeBounty(bountyId: number) {
    try {
      const tx = await this.contract.completeBounty(bountyId);
      await tx.wait();
      return tx;
    } catch (error) {
      console.error('Error completing bounty:', error);
      throw error;
    }
  }

  async getBountyCount() {
    try {
      const count = await this.contract.bountyCounter();
      console.log('Total bounty count:', Number(count));
      return Number(count);
    } catch (error) {
      console.error('Error getting bounty count:', error);
      return 0;
    }
  }

  async getAllBounties() {
    try {
      console.log('Fetching all bounties...');
      
      // First check if contract is deployed by getting bounty count
      const bountyCount = await this.getBountyCount();
      
      if (bountyCount === 0) {
        console.log('No bounties created yet');
        return [];
      }

      // Try to get individual bounties instead of using getAllBounties
      const bounties = [];
      for (let i = 1; i <= bountyCount; i++) {
        try {
          const bounty = await this.contract.bounties(i);
          console.log(`Bounty ${i}:`, bounty);
          
          bounties.push({
            id: Number(bounty.id),
            title: bounty.title,
            description: bounty.description,
            reward: ethers.formatEther(bounty.reward),
            poster: bounty.poster,
            hunter: bounty.hunter,
            isCompleted: bounty.isCompleted,
            isActive: bounty.isActive,
            deadline: Number(bounty.deadline)
          });
        } catch (bountyError) {
          console.error(`Error fetching bounty ${i}:`, bountyError);
        }
      }
      
      console.log('Formatted bounties:', bounties);
      return bounties;
    } catch (error) {
      console.error('Error fetching bounties:', error);
      // Return empty array instead of throwing to prevent UI crash
      return [];
    }
  }
}
