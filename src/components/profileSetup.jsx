"use client"
import { useState, useEffect } from 'react';
import Web3 from "web3";
import { SwisstronikPlugin } from "@swisstronik/web3-plugin-swisstronik";
import ABI from '@/scripts/userProfile/abi.mjs';
import BYTECODE from '@/scripts/userProfile/bytecode.mjs';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Header from './header';
import { IoClose } from "react-icons/io5";


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
    <div className="w-full">
      <div className="w-full h-screen fixed bg-black/50 flex justify-center items-center">
      <div className="bg-[#101828] w-4/12 rounded-xl p-4">
       <div className="border-b border-[#344054] flex flex-row justify-center items-center h-[80px] mb-4">
        {/* <p>Account: {walletAddress}</p> */}
        <p className="text-2xl font-bold text-white"> Create your profile</p>
        <Link href={"/"}><IoClose className="text-white font-medium ml-8 text-xl" /></Link>  
      </div>

        <div>
            
            {userProfile && (
              <div>
                <h2>User Profile:</h2>
                <p>{JSON.stringify(userProfile)}</p>
              </div>
            )}
        </div>

          <form onSubmit={handleSubmit} >
            <div  className="flex flex-col mb-4 w-full"> <label className="text-[#EAECF0] text-lg font-medium mb-2">Name</label>
             <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="outline-none bg-[#1D2939] h-[52px] rounded-lg border-2 border-[#344054] p-2"
            />
            </div>

            <div  className="flex flex-col mb-4 w-full">
              <label  className="text-[#EAECF0] text-lg font-medium mb-2">Bio</label>
              <textarea rows={5} className="outline-none bg-[#1D2939] rounded-lg border-2 border-[#344054] p-2" value={bio}
              onChange={(e) => setBio(e.target.value)}></textarea>
            </div>
         
            {/* <input
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Biography"
              required
              className="block w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            /> */}
            <button
              type="submit"
             className='w-full h-[52px] bg-slate-500/50 py-2 px-4 rounded-xl text-white font-medium text-lg'
            >
              Create Profile
            </button>
            <div className="border-t border-[#344054] flex flex-row justify-center items-center h-[80px] mt-4">
              <p className="font-normal text-xs text-[#98A2B3] text-center">By connecting your wallet, you agree to our Terms of Service and Privacy Policy</p>
            </div>
          </form>
       </div>
       </div>
        <Header />
        <div className="p-4 w-full flex flex-row justify-center">
          {/* <Social/> */}
        </div>

  </div>
      
     

    
 
       

   
);
}





