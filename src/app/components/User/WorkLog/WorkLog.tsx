"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipboardList } from "lucide-react";

interface WorkLog {
  id: number;
  date: string;
  start_time: string;
  end_time: string;
  duration_hours: number;
  description: string;
}
interface WorkLogProps {
  accessToken: string;
}
export default function WorkLogManager({ accessToken }: WorkLogProps) {
  const [workLogs, setWorkLogs] = useState<WorkLog[]>([]);
  const [date, setDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [filterDate, setFilterDate] = useState<string>("");

  const fetchWorkLogs = async (filterByDate = "") => {
    const url = filterByDate
      ? `${process.env.NEXT_PUBLIC_BE_API_URL}/users/worklogs/?date=${filterByDate}`
      : `${process.env.NEXT_PUBLIC_BE_API_URL}/users/worklogs/`;
  
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setWorkLogs(res.data);
    } catch (error) {
      console.error("Error fetching work logs:", error);
    }
  };
  

  const calculateDuration = (start: string, end: string): number => {
    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);
    const startMinutes = startH * 60 + startM;
    const endMinutes = endH * 60 + endM;
    const duration = (endMinutes - startMinutes) / 60;
    return Math.round(duration * 100) / 100; // Rounded to 2 decimal places
  };
  

  const addWorkLog = async () => {
    if (!date || !startTime || !endTime || !description) return;
    const duration_hours = calculateDuration(startTime, endTime);
    await axios.post(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/worklogs/`, {
      date,
      start_time: startTime,
      end_time: endTime,
      duration_hours,
      description,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    setDate("");
    setStartTime("");
    setEndTime("");
    setDescription("");
    fetchWorkLogs();
  };

  useEffect(() => {
    fetchWorkLogs();
  }, []);

  return (
    <div className="flex flex-col gap-8 bg-gray-900 min-h-screen p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Log Your Work</h3>

          <label className="block text-sm text-white mb-1">Select Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 mb-3 rounded bg-gray-700 text-white" />

          <label className="block text-sm text-white mb-1">Select Start Time</label>
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="w-full p-2 mb-3 rounded bg-gray-700 text-white" />

          <label className="block text-sm text-white mb-1">Select End Time</label>
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="w-full p-2 mb-3 rounded bg-gray-700 text-white" />

          <label className="block text-sm text-white mb-1">Work Description</label>
          <textarea placeholder="What did you do?" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="w-full p-2 mb-4 rounded bg-gray-700 text-white resize-none" />

          <button onClick={addWorkLog} className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            <ClipboardList className="w-5 h-5 mr-2" /> Submit Log
          </button>
        </div>

        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">My Work Logs</h3>
            <input type="date" value={filterDate} onChange={(e) => {
              setFilterDate(e.target.value);
              fetchWorkLogs(e.target.value);
            }} className="bg-gray-700 text-white p-2 rounded" />
          </div>
          <ul className="space-y-4">
            {workLogs.map((log) => (
              <li key={log.id} className="bg-gray-700 p-3 rounded text-white">
                <div className="flex justify-between">
                  <p className="font-semibold">{log.date}</p>
                  <p className="text-sm text-gray-300">{log.start_time} - {log.end_time} ({log.duration_hours} hrs)</p>
                </div>
                <p className="mt-1 text-sm">{log.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

