
import { ethers } from 'ethers';
import BountyBoardABI from '../contracts/BountyBoard.json';

const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export class ContractService {
  private contract: ethers.Contract;

  constructor(signer: ethers.JsonRpcSigner) {
    this.contract = new ethers.Contract(CONTRACT_ADDRESS, BountyBoardABI.abi, signer);
  }

  async createBounty(title: string, description: string, reward: string, deadline: number) {
    const rewardInWei = ethers.parseEther(reward);
    const tx = await this.contract.createBounty(title, description, deadline, {
      value: rewardInWei
    });
    await tx.wait();
    return tx;
  }

  async acceptBounty(bountyId: number) {
    const tx = await this.contract.acceptBounty(bountyId);
    await tx.wait();
    return tx;
  }

  async completeBounty(bountyId: number) {
    const tx = await this.contract.completeBounty(bountyId);
    await tx.wait();
    return tx;
  }

  async getAllBounties() {
    const bounties = await this.contract.getAllBounties();
    return bounties.map((bounty: any) => ({
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
  }
}
