"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {  PlusCircle, Eye } from "lucide-react";

interface Goal {
  id: number;
  title: string;
  targetAmount: number;
  bank: string;
}

interface Transaction {
  id: number;
  goalId: number;
  amount: number;
  date: string;
}

interface GoalManagerProps {
  accessToken: string;
}

export default function GoalManager({ accessToken }: GoalManagerProps) {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [amount, setAmount] = useState("");

  const fetchGoals = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/goals/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setGoals(res.data);
    } catch (error) {
      console.error("Error fetching goals:", error);
    }
  };

  const fetchTransactions = async (goalId: number) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/goals/${goalId}/transactions/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setTransactions(res.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const createGoal = async () => {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BE_API_URL}/users/goals/`,
      { title, targetAmount: Number(targetAmount) },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    setTitle("");
    setTargetAmount("");
    fetchGoals();
  };

  const addTransaction = async () => {
    if (!selectedGoal) return;
    await axios.post(
      `${process.env.NEXT_PUBLIC_BE_API_URL}/users/goals/${selectedGoal.id}/transactions/`,
      { amount: Number(amount) },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    setAmount("");
    fetchTransactions(selectedGoal.id);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div className="flex flex-col gap-8 bg-gray-900 min-h-screen p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Create Goal</h3>

          <input
            type="text"
            placeholder="Goal Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          />
          <input
            type="number"
            placeholder="Target Amount"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          />
          

          <button
            onClick={createGoal}
            className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            <PlusCircle className="w-5 h-5 mr-2" /> Create Goal
          </button>
        </div>

        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Goals List</h3>
          <ul className="space-y-3">
            {goals.map((goal) => (
              <li
                key={goal.id}
                className="bg-gray-700 p-3 rounded text-white flex justify-between items-center cursor-pointer"
                onClick={() => {
                  setSelectedGoal(goal);
                  fetchTransactions(goal.id);
                }}
              >
                <span>{goal.title}</span>
                <Eye className="w-5 h-5 text-gray-400" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedGoal && (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">{selectedGoal.title} Details</h3>

          <div className="flex items-center gap-4">
            <input
              type="number"
              placeholder="Add Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 p-2 mb-3 rounded bg-gray-700 text-white"
            />
            <button
              onClick={addTransaction}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Add Money
            </button>
          </div>

          <ul className="space-y-3">
            {transactions.map((transaction) => (
              <li key={transaction.id} className="bg-gray-700 p-3 rounded text-white">
                ₹{transaction.amount} - {new Date(transaction.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
