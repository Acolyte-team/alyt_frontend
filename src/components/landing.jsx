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

            <div
                className='w-8/12 border-2 rounded-xl p-2 flex flex-row justify-between items-center'
            >
                <Image 
                    src='/assets/Images/qr-code.png'
                    className='h-[96px] w-[96px]'
                    width={100}
                    height={100}
                    alt=''
                />

                <div>
                    <p
                        className='font-semibold text-sm text-white w-10/12 mb-2'
                    >
                    Scan QR code and Login to Acolyte
                    </p>

                    {/* <button onClick={requestAccount}
                        className='flex flex-row justify-between items-center h-[30px] bg-slate-500/50 py-2 px-2 rounded-xl text-white font-bold text-base'
                    >
                        <Image
                            src="/assets/Images/wallets.png" 
                            className="mr-2"
                            width={100}
                            height={100}
                            alt=''
                        /> 
                        Connect Metamask
                    </button> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
