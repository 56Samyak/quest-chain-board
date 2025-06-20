
# Decentralized Bounty Board

A fully functional blockchain-based bounty platform built with React, Solidity, and Hardhat.

## 🚀 Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, GSAP
- **Blockchain**: Solidity, Hardhat, Ethers.js
- **Local Development**: Ganache
- **Wallet**: MetaMask

## 📋 Prerequisites

- Node.js (v16 or higher)
- MetaMask browser extension
- Ganache (GUI or CLI)

## 🛠️ Complete Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Ganache
- **Option A: Ganache GUI**
  - Download and install [Ganache GUI](https://trufflesuite.com/ganache/)
  - Create a new workspace
  - Set Server tab: Hostname `127.0.0.1`, Port `7545`
  - Set Chain tab: Network ID `1337`

- **Option B: Ganache CLI**
  ```bash
  npm install -g ganache-cli
  ganache-cli -p 7545 -i 1337
  ```

### 3. Deploy Smart Contract
```bash
# Compile the contract
npx hardhat compile

# Deploy to Ganache
npx hardhat run scripts/deploy.js --network ganache
```

**Important**: Copy the deployed contract address from the terminal output.

### 4. Update Contract Address
- Open `src/services/contractService.ts`
- Replace the `CONTRACT_ADDRESS` with your deployed contract address

### 5. Configure MetaMask

#### Add Ganache Network:
- Open MetaMask
- Click on the network dropdown (usually "Ethereum Mainnet")
- Click "Add Network" → "Add a network manually"
- Fill in:
  - **Network Name**: Ganache Local
  - **New RPC URL**: `http://127.0.0.1:7545`
  - **Chain ID**: `1337`
  - **Currency Symbol**: ETH

#### Import Ganache Account:
- In Ganache, copy a private key from any account
- In MetaMask, click the account icon → "Import Account"
- Paste the private key

### 6. Start the Application
```bash
npm run dev
```

## 🎯 Features

- ✅ **Create Bounties**: Post bounties with ETH rewards
- ✅ **Accept Bounties**: Claim bounties to work on them
- ✅ **Complete Bounties**: Mark bounties as complete and release payments
- ✅ **Real-time Updates**: Live blockchain data integration
- ✅ **Wallet Integration**: Seamless MetaMask connection
- ✅ **Responsive Design**: Works on all devices

## 🔧 Usage

1. **Connect Wallet**: Click "Connect Wallet" and approve the connection
2. **Create Bounty**: Click "Create Bounty" and fill out the form
3. **View Bounties**: Browse all active bounties on the main dashboard
4. **Claim Bounty**: Click "Claim" on any open bounty to accept it
5. **Complete Work**: Submit your work and get paid automatically

## 🐛 Troubleshooting

### Common Issues:

**Contract not found error:**
- Ensure Ganache is running on port 7545
- Check that the contract address in `contractService.ts` matches your deployment

**MetaMask connection issues:**
- Verify the network settings match Ganache exactly
- Try switching networks and back
- Reset MetaMask account if needed

**Transaction failures:**
- Ensure you have sufficient ETH balance
- Check that Ganache accounts are imported correctly

## 📁 Project Structure

```
├── contracts/
│   └── BountyBoard.sol          # Smart contract
├── scripts/
│   └── deploy.js                # Deployment script
├── src/
│   ├── components/              # React components
│   ├── hooks/                   # Custom hooks
│   ├── services/                # Blockchain services
│   └── contracts/               # Contract ABI
├── hardhat.config.js            # Hardhat configuration
└── README.md                    # This file
```

## 🔗 Smart Contract Functions

- `createBounty(title, description, deadline)` - Create a new bounty
- `acceptBounty(bountyId)` - Accept a bounty to work on
- `completeBounty(bountyId)` - Mark bounty as complete (poster only)
- `getAllBounties()` - Get all bounties

## 📝 Development Notes

- The contract stores bounties on-chain with automatic payment handling
- Frontend updates in real-time when bounties are created/updated
- All transactions require gas fees (use Ganache's free ETH)
- Private keys in Ganache are for development only - never use in production

## 🚀 Next Steps

This bounty board is fully functional and ready for use! You can:
- Add more bounty categories
- Implement dispute resolution
- Add file upload capabilities
- Create a reputation system
- Deploy to a testnet or mainnet

Happy bounty hunting! 🎯
```
