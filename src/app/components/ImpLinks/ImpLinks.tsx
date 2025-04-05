'use client';

import React, { useState, useEffect } from 'react';

interface Link {
  title: string;
  url: string;
}

interface LinksByUser {
  [username: string]: Link[];
}

const ImpLinks = () => {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState<Link[]>([]);
  const [allData, setAllData] = useState<LinksByUser>({});
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('importantLinks');
    if (stored) {
      setAllData(JSON.parse(stored));
    }
  }, []);

  const saveLink = () => {
    if (!username || !title || !url) return alert('Fill all fields');

    const newLinks = { ...allData };
    const userLinks = newLinks[username] || [];
    userLinks.push({ title, url });
    newLinks[username] = userLinks;

    localStorage.setItem('importantLinks', JSON.stringify(newLinks));
    setAllData(newLinks);
    setTitle('');
    setUrl('');
    alert('Link saved!');
  };

  const getUserLinks = () => {
    if (!username) return alert('Enter a username');
    const userLinks = allData[username] || [];
    setLinks(userLinks);
    setShowLinks(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white py-10 px-4">
      <div className="max-w-2xl mx-auto bg-[#1E293B] p-8 rounded-2xl shadow-lg border border-white/20">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#38BDF8]">Important Blog Links</h1>

        {/* Username Input */}
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-white/10 text-white placeholder-white/50"
        />

        {/* Add Link Section */}
        <input
          type="text"
          placeholder="Enter link title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-white/10 text-white placeholder-white/50"
        />
        <input
          type="text"
          placeholder="Enter link URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-white/10 text-white placeholder-white/50"
        />

        <button
          onClick={saveLink}
          className="w-full bg-[#38BDF8] text-black font-semibold py-2 rounded-lg hover:bg-[#0ea5e9] transition"
        >
          Save Link
        </button>

        {/* Divider */}
        <div className="my-6 border-t border-white/20" />

        {/* View Links */}
        <button
          onClick={getUserLinks}
          className="w-full bg-[#9333EA] text-white font-semibold py-2 rounded-lg hover:bg-[#7e22ce] transition mb-4"
        >
          Show My Links
        </button>

        {showLinks && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-3 text-white/90">Saved Links for <span className="text-[#38BDF8]">{username}</span>:</h2>
            {links.length === 0 ? (
              <p className="text-white/50">No links found.</p>
            ) : (
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#38BDF8] underline hover:text-white transition"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImpLinks;
