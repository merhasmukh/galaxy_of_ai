"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlusCircle, Trash } from "lucide-react";

interface Milestone {
  id: number;
  title: string;
  description: string;
  status: "planned" | "in-progress" | "completed";
  due_date: string;
}

interface ProjectRoadmapProps {
  accessToken: string;
}

export default function ProjectRoadmap({ accessToken }: ProjectRoadmapProps) {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState<string>("");

  const fetchMilestones = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/milestones/`,{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setMilestones(res.data);
  };

  const addMilestone = async () => {
    if (!title || !description || !dueDate) return;
    await axios.post(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/milestones/`, {
      title,
      description,
      status: "planned",
      due_date: dueDate,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setTitle("");
    setDescription("");
    setDueDate("");
    fetchMilestones();
  };

  const updateStatus = async (id: number, status: Milestone["status"]) => {
    await axios.patch(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/milestones/${id}/`, { status },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
    );
    fetchMilestones();
  };

  const deleteMilestone = async (id: number) => {
    await axios.delete(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/milestones/${id}/`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
      
    );
    fetchMilestones();
  };

  useEffect(() => {
    fetchMilestones();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold text-white mb-4">Define Project Roadmap</h3>

        <label className="block text-sm text-white mb-1">Milestone Title</label>
        <input
          type="text"
          placeholder="e.g., Finalize UI Design"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
        />

        <label className="block text-sm text-white mb-1">Description</label>
        <textarea
          placeholder="Describe the milestone..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
        />

        <label className="block text-sm text-white mb-1">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        />

        <button
          onClick={addMilestone}
          className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          <PlusCircle className="w-5 h-5 mr-2" /> Add Milestone
        </button>
      </div>

      <div className="mt-8 max-w-4xl mx-auto space-y-4">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow flex flex-col md:flex-row md:justify-between md:items-center gap-3"
          >
            <div className="flex-1">
              <h4 className="text-white font-semibold">{milestone.title}</h4>
              <p className="text-sm text-gray-400">{milestone.description}</p>
              <p className="text-xs text-gray-500 mt-1">Due: {milestone.due_date}</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <select
                value={milestone.status}
                onChange={(e) => updateStatus(milestone.id, e.target.value as Milestone["status"])}
                className="bg-gray-700 text-white rounded px-2 py-1"
              >
                <option value="planned">Planned</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <button onClick={() => deleteMilestone(milestone.id)} className="text-red-500 hover:text-red-700">
                <Trash className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

