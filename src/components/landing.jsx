"use client"

import React from 'react'
import { useState } from 'react';
// import { ethers } from 'ethers';
import Web3 from 'web3';
import { useRouter } from "next/navigation";



const Landing = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const router = useRouter();

  let web3 = new Web3(window.ethereum);

  // let contract = web3.eth.Contract(ContractABI,contractAddress);
 
  async function requestAccount(){
    console.log("Requesting account...");
    if(window.ethereum){
      try{
        console.log("metamask detected");
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        // console.log("metamsk accounts",accounts);
         setWalletAddress(accounts[0]);

          router.push("/profile");

      }catch(err){
         if (err.code === 4001) {
           // EIP-1193 userRejectedRequest error.
            console.log("Please connect to MetaMask.");
          } else {
                console.error(err);
            }
      }
      
    }else{
      console.log("metamask not detected");
      alert("Please install metamask and connect to a network");
    }
  }

  return (
      <div className='container'>
        <h1>Alyte App</h1>
       
        <div id="connectMessage">Please connect your Wallet</div>
        <h3>Wallet Address: {walletAddress}</h3>
        <div id='connectWalletBtn'>
          <button onClick={requestAccount}>Connect Wallet</button>

        </div>
        <div id='tweetsContainer'></div>
     </div>
  )
}

export default Landing
