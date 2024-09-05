"use client"

import React from 'react'
import { useState } from 'react';
// import { ethers } from 'ethers';
import Web3 from 'web3';
import Image from 'next/image'
import { useRouter } from "next/navigation";

const Landing = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const router = useRouter();

  let web3 = new Web3(window.ethereum);

  // let contract = web3.eth.Contract(ContractABI,contractAddress);
 
  // async function requestAccount(){
  //   console.log("Requesting account...");
  //   if(window.ethereum){
  //     try{
  //       console.log("metamask detected");
  //       const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  //       // console.log("metamsk accounts",accounts);
  //        setWalletAddress(accounts[0]);

  //       // Save the wallet address in local storage
  //       localStorage.setItem('walletAddress', accounts[0]);

  //       // Redirect to profile page if wallet is connected
  //       if (accounts.length > 0) {
  //         router.push("/profile");
  //       } else {
  //         console.log("No accounts found.");
  //       }

  //     }catch(err){
  //        if (err.code === 4001) {
  //          // EIP-1193 userRejectedRequest error.
  //           console.log("Please connect to MetaMask.");
  //         } else {
  //               console.error(err);
  //           }
  //     }
      
  //   }else{
  //     console.log("metamask not detected");
  //     alert("Please install metamask and connect to a network");
  //   }
  // }

  return (
      <div
        className='h-screen w-6/12 p-6 border-2 rounded-xl flex justify-center items-center'
    >
        <div
            className='flex flex-col items-center'
        >
            <p
                className='font-bold text-6xl text-white mb-4 text-center'
            >
                Social Interaction Made Fun
            </p>

          
        </div>
    </div>
  )
}

export default Landing
