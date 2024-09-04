"use client"
import { useState } from 'react';

export default function CreateProfile() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async () => {
    e.preventDefault();
    // TODO: Call smart contract to create profile
    console.log('Creating profile:', { name, bio });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl mb-4">Create Your Profile</h1>
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
          type="bio"
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
  );
}
