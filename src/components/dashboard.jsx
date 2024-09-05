"use client";

import React, { useState, useEffect } from 'react'
import { SwisstronikPlugin } from "@swisstronik/web3-plugin-swisstronik";
import Web3 from 'web3';
import ABI from "@/scripts/content/abi.mjs";

const CONTENT_CONTRACT_ADDRESS = "0x115639e3f0d4A4419E69D303e36e1683217bA444";
const Dashboard = () => {
  const [contents, setContents] = useState([]);
  const [contentType, setContentType] = useState("");
  const [account, setAccount] = useState(null);
   const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    // Retrieve the wallet address from local storage when the page loads
    const storedWallet = localStorage.getItem('walletAddress');
    if (storedWallet) {
      setWalletAddress(storedWallet);
    }
  }, []);
  
  const handleCreateContent = async () => {


     if (!walletAddress) {
      console.error('No wallet connected');
      return;
    }

    const web3 = new Web3("https://json-rpc.testnet.swisstronik.com/");
    web3.registerPlugin(new SwisstronikPlugin());

    const contract = new web3.eth.Contract(ABI, CONTENT_CONTRACT_ADDRESS);
    await contract.methods.createContent(contentType).send({ from: walletAddress });
   
  };

 useEffect(() => {
    const loadBlockchainData = async () => {
      if (window.ethereum) {
        try {
          // Request account access if needed
          await window.ethereum.request({ method: "eth_requestAccounts" });

          // Connect to Web3 with the Swisstronik plugin
          const web3 = new Web3(window.ethereum); // Make sure you use MetaMask provider
          web3.registerPlugin(new SwisstronikPlugin()); ;

          // Get the user's account
          const accounts = await web3.eth.getAccounts();

          setAccount(accounts[0]);

          // Create a contract instance
          const contract = new web3.eth.Contract(ABI, CONTENT_CONTRACT_ADDRESS);

          // Fetch the user content
          const content = await contract.methods.getContent().call();
          setContents(content);
          console.log("User content: ", content);
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
      <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Account: {walletAddress}</p>
      
      <div className="flex">
        <div className="w-1/3 p-4 border-r">
          <h2 className="text-2xl">Create Content</h2>
          <input
            type="text"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            placeholder="Content Type"
            className="block w-full px-3 py-2 mt-2 border rounded-lg"
          />
          <button
            onClick={handleCreateContent}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create
          </button>
        </div>

        <div className="w-2/3 p-4">
          <h2 className="text-2xl mb-4">Content Feed</h2>
          {contents.map((content, index) => (
            <div key={index} className="border-b p-2">
              <p><strong>ID:</strong> {content.id}</p>
              <p><strong>Creator:</strong> {content.creator}</p>
              <p><strong>Content Type:</strong> {content.contentType}</p>
              <p><strong>Likes:</strong> {content.likes}</p>
              <p><strong>Shares:</strong> {content.shares}</p>
              <p><strong>Timestamp:</strong> {new Date(content.timestamp * 1000).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
