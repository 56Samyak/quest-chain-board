
# Decentralized Bounty Board

A blockchain-based bounty platform built with React, Solidity, and Hardhat.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, GSAP
- **Blockchain**: Solidity, Hardhat, Ethers.js
- **Local Development**: Ganache
- **Wallet**: MetaMask

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Ganache**
   - Install Ganache GUI or CLI
   - Create a new workspace with network ID 1337
   - Use port 7545

3. **Deploy Smart Contract**
   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network ganache
   ```

4. **Update Contract Address**
   - Copy the deployed contract address
   - Update `CONTRACT_ADDRESS` in `src/services/contractService.ts`

5. **Configure MetaMask**
   - Add Ganache network: RPC URL `http://127.0.0.1:7545`, Chain ID `1337`
   - Import Ganache accounts using private keys

6. **Start Frontend**
   ```bash
   npm run dev
   ```

## Features

- Create bounties with ETH rewards
- Accept and complete bounties
- MetaMask wallet integration
- Real-time blockchain interaction
- Responsive UI with GSAP animations
