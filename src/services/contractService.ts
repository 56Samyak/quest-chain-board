
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

  async getAllBounties() {
    try {
      console.log('Fetching all bounties...');
      const bounties = await this.contract.getAllBounties();
      console.log('Raw bounties from contract:', bounties);
      
      const formattedBounties = bounties.map((bounty: any) => ({
        id: Number(bounty.id),
        title: bounty.title,
        description: bounty.description,
        reward: ethers.formatEther(bounty.reward),
        poster: bounty.poster,
        hunter: bounty.hunter,
        isCompleted: bounty.isCompleted,
        isActive: bounty.isActive,
        deadline: Number(bounty.deadline)
      }));
      
      console.log('Formatted bounties:', formattedBounties);
      return formattedBounties;
    } catch (error) {
      console.error('Error fetching bounties:', error);
      throw error;
    }
  }
}
