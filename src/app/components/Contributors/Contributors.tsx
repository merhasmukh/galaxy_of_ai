"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const frontendContributors = [
  {
    name: "Hasmukh Mer",
    github: "https://github.com/merhasmukh",
    avatar: "https://github.com/merhasmukh.png",
  }
];

const backendContributors = [
    {
        name: "Hasmukh Mer",
        github: "https://github.com/merhasmukh",
        avatar: "https://github.com/merhasmukh.png",
      }
];

interface Contributor {
    name: string;
    github: string;
    avatar: string;
  }
  

export default function Contributors() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
          🎉 Open Source Contributors
        </h1>
        <p className="text-lg text-gray-300 text-center mt-4 max-w-3xl mx-auto">
          We appreciate all the amazing contributors who have helped build and improve this open-source project! 🚀
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Discord Button */}
          <Link href="https://discord.gg/ygzgDNKgJN" target="_blank" rel="noopener noreferrer">
            <button className="w-full md:w-auto bg-blue-600 hover:bg-green-700 font-bold text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Join Discord Server 🚀
            </button>
          </Link>
        </div>
               {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-xl font-semibold">Want to contribute? 🎯</h2>
          <p className="text-gray-400 mt-2">Choose a repository to contribute:</p>


        </div>

          {/* Button Wrapper - Responsive Flex Layout */}
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
            
            {/* Frontend Button */}
            <Link href="https://github.com/merhasmukh/galaxy_of_ai" target="_blank" rel="noopener noreferrer">
              <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Contribute on Frontend 🚀
              </button>
            </Link>

            {/* Backend Button */}
            <Link href="https://github.com/merhasmukh/Galaxy-Of-AI-API-Hub" target="_blank" rel="noopener noreferrer">
              <button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Contribute on Backend 🚀
              </button>
            </Link>

            

          </div>

        {/* Contributors Grid */}
        <h2 className="text-2xl font-bold text-center mt-12">Frontend Contributors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          {frontendContributors.map((contributor, index) => (
            <ContributorCard key={index} contributor={contributor} />
          ))}
        </div>

        <h2 className="text-2xl font-bold text-center mt-12">Backend Contributors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          {backendContributors.map((contributor, index) => (
            <ContributorCard key={index} contributor={contributor} />
          ))}
        </div>

 


      </div>
    </div>
  );
}

function ContributorCard({ contributor }: { contributor: Contributor }) {
    const [hover, setHover] = useState(false);

  return (
    <Link
      href={contributor.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white/10 p-6 rounded-xl flex flex-col items-center shadow-lg transform hover:scale-105 transition duration-300 hover:border-blue-500 border border-transparent"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={contributor.avatar}
        alt={`${contributor.name} Avatar`}
        width={100}
        height={100}
        className="rounded-full border-4 border-gray-700 group-hover:border-blue-400 transition duration-300"
      />
      <h3 className="text-lg font-semibold text-white mt-4">{contributor.name}</h3>
      <p className="text-blue-400 mt-2 text-sm">{hover ? "View Profile →" : "Contributor"}</p>
    </Link>
  );
}
