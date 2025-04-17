"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PlusCircle,
  ExternalLink,
} from "lucide-react";

interface Resource {
  id: number;
  title: string;
  url: string;
  type: "blog" | "url";
}
interface ResourceManagementProps {
    accessToken: string;
  }
  
function ResourceManager({ accessToken }: ResourceManagementProps) {
  const [resources, setResources] = useState<Resource[]>([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState<"blog" | "url">("url");

  const fetchResources = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/resources/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setResources(res.data);
  };
  
  const addResource = async () => {
    if (!title || !url) return;
    await axios.post(
      `${process.env.NEXT_PUBLIC_BE_API_URL}/users/resources/`,
      { title, url, type },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setTitle("");
    setUrl("");
    fetchResources();
  };
  
  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <div className="flex h-screen bg-gray-900">
      <main className="flex-1 overflow-y-auto bg-gray-900 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Add New Resource
            </h3>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value as "blog" | "url")}
              className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            >
              <option value="url">General URL</option>
              <option value="blog">Blog URL</option>
            </select>
            <button
              onClick={addResource}
              className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Add Resource
            </button>
          </div>

          <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Saved Resources</h3>
            <ul className="space-y-4">
              {resources.map((resource) => (
                <li
                key={resource.id}
                className="flex items-center justify-between bg-gray-700 p-3 rounded text-white"
              >
                <div>
                  <p className="font-semibold">{resource.title}</p>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline text-sm"
                  >
                    {resource.url}
                  </a>
                </div>
              
                {/* Wrap the icon in an <a> tag so it can open the link */}
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition"
                  title="Open Link"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </li>
              
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResourceManager;