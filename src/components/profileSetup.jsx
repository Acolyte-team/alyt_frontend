"use client"
import { useState, useEffect } from 'react';
import Web3 from "web3";
import { SwisstronikPlugin } from "@swisstronik/web3-plugin-swisstronik";
import ABI from '@/scripts/userProfile/abi.mjs';
import BYTECODE from '@/scripts/userProfile/bytecode.mjs';
import { useRouter } from "next/navigation";


const USERPROFILE_CONTRACT_ADDRESS = "0x625B284f8CDD5D90CbC0Ee517870b6EBaD7c076D";
export default function CreateProfile() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  
  const [account, setAccount] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  
  const router = useRouter();

  useEffect(() => {
    // Retrieve the wallet address from local storage when the page loads
    const storedWallet = localStorage.getItem('walletAddress');
    if (storedWallet) {
      setWalletAddress(storedWallet);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!walletAddress) {
      console.error('No wallet connected');
      return;
    }

    try {
      // Connect to Web3 with the Swisstronik plugin
      const web3 = new Web3(window.ethereum);
      web3.registerPlugin(new SwisstronikPlugin());

      const contract = new web3.eth.Contract(ABI, USERPROFILE_CONTRACT_ADDRESS);

      // MetaMask will prompt user to sign the transaction
      const createProfileTx = await contract.methods
        .createAccount(name, bio)
        .send({ from: walletAddress });

      console.log("Profile created:", createProfileTx); 

      // Redirect to dashboard after profile creation
      router.push('/dashboard'); // Assuming your dashboard route is /dashboard
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  useEffect(() => {
    const loadBlockchainData = async () => {
      if (window.ethereum) {
        try {
          // Request account access if needed
          await window.ethereum.request({ method: "eth_requestAccounts" });

          // Connect to Web3 with the Swisstronik plugin
          const web3 = new Web3("https://json-rpc.testnet.swisstronik.com/");
          web3.registerPlugin(new SwisstronikPlugin());

          // Get the user's account
          const accounts = await web3.eth.getAccounts();

          setAccount(accounts[0]);

          // Create a contract instance
          const contract = new web3.eth.Contract(ABI, USERPROFILE_CONTRACT_ADDRESS);

          // Fetch the user profile
          const profile = await contract.methods.getUser().call();
          setUserProfile(profile);
          console.log("User Profile: ", profile);
        } catch (error) {
          console.error("Error connecting to blockchain: ", error);
        }
      } else {
        console.log("Please install MetaMask!");
      }
    };

    loadBlockchainData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl mb-4">Create Your Profile</h1>

        <div>
            <p>Account: {walletAddress}</p>
            {userProfile && (
              <div>
                <h2>User Profile:</h2>
                <p>{JSON.stringify(userProfile)}</p>
              </div>
            )}
        </div>

        <div> 
          <form onSubmit={handleSubmit} className="w-full max-w-md">
          <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="block w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Biography"
              required
              className="block w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create Profile
            </button>
          </form>
      </div>
    </div>
  );
}


