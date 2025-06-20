
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const useWeb3 = () => {
  const [account, setAccount] = useState<string>('');
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask to use this application');
      return;
    }

    setIsConnecting(true);
    try {
      console.log('Requesting wallet connection...');
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      
      console.log('Connected accounts:', accounts);
      setAccount(accounts[0]);
      
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(web3Provider);
      
      const web3Signer = await web3Provider.getSigner();
      setSigner(web3Signer);
      
      console.log('Wallet connected successfully');
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          const web3Provider = new ethers.BrowserProvider(window.ethereum);
          setProvider(web3Provider);
          const web3Signer = await web3Provider.getSigner();
          setSigner(web3Signer);
        }
      } catch (error) {
        console.error('Error checking connection:', error);
      }
    }
  };

  useEffect(() => {
    checkConnection();
    
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        console.log('Account changed:', accounts);
        setAccount(accounts[0] || '');
        if (accounts.length === 0) {
          setProvider(null);
          setSigner(null);
        } else {
          checkConnection();
        }
      });

      window.ethereum.on('chainChanged', () => {
        console.log('Chain changed, reloading...');
        window.location.reload();
      });
    }
  }, []);

  return { account, provider, signer, connectWallet, isConnecting };
};
