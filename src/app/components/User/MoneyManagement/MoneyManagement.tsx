"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PlusCircle,
  Pencil,
  Trash2,
  Banknote,
  PiggyBank,
  Wallet,
} from "lucide-react";

interface Transaction {
  id: number;
  category: "income" | "expense" | "saving";
  amount: number;
  description: string;
  timestamp: string;
}

interface ExpenseManagementProps {
  accessToken: string;
}

export default function MoneyManagement({ accessToken }: ExpenseManagementProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit">("add");
  const [currentData, setCurrentData] = useState<Partial<Transaction>>({});

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/money_management/expense/list/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setTransactions(res.data.expenses || []);
    } catch (err) {
      console.error("Failed to fetch transactions:", err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const openModal = (type: "add" | "edit", data?: Transaction) => {
    setModalType(type);
    setCurrentData(data || {});
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BE_API_URL}/users/money_management/expense/delete/${id}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      fetchTransactions();
    } catch (err) {
      console.error("Failed to delete transaction:", err);
    }
  };

  const toUTCISOString = (localDateTime: string) => {
    const local = new Date(localDateTime);
    return local.toISOString(); // Converts to UTC and includes timezone info (ends with "Z")
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (modalType === "add") {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BE_API_URL}/users/money_management/expense/add/`,
          {
            amount: currentData.amount,
            category: currentData.category,
            description: currentData.description,
            timestamp: toUTCISOString(currentData.timestamp as string),
        },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      } else {
        await axios.put(
          `${process.env.NEXT_PUBLIC_BE_API_URL}/users/money_management/expense/update/${currentData.id}/`,
          {
            amount: currentData.amount,
            category: currentData.category,
            description: currentData.description,
            timestamp: currentData.timestamp,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      }
      setIsModalOpen(false);
      fetchTransactions();
    } catch (err) {
      console.error("Failed to submit transaction:", err);
    }
  };

  const grouped = {
    income: transactions.filter((t) => t.category === "income"),
    expense: transactions.filter((t) => t.category === "expense"),
    saving: transactions.filter((t) => t.category === "saving"),
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { category: "income", label: "Income", icon: <Banknote /> },
          { category: "expense", label: "Expenses", icon: <Wallet /> },
          { category: "saving", label: "Savings", icon: <PiggyBank /> },
        ].map(({ category, label, icon }) => (
          <div key={category} className="bg-gray-800 rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                {icon} {label}
              </h3>
              <button
                onClick={() => openModal("add", { category } as Transaction)}
                className="text-sm text-blue-500 hover:underline"
              >
                <PlusCircle className="w-5 h-5" />
              </button>
            </div>
            <ul className="mt-4 space-y-2">
              {grouped[category as keyof typeof grouped].map((tx) => (
                <li
                  key={tx.id}
                  className="flex justify-between bg-gray-700 px-3 py-2 rounded-md"
                >
                  <div>
                    <div className="text-sm font-medium">{tx.description}</div>
                    <div className="text-xs text-gray-400">
                      {new Date(tx.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">₹ {tx.amount}</div>
                    <div className="flex gap-2 mt-1 text-sm">
                      <Pencil
                        className="cursor-pointer hover:text-yellow-400"
                        onClick={() => openModal("edit", tx)}
                      />
                      <Trash2
                        className="cursor-pointer hover:text-red-400"
                        onClick={() => handleDelete(tx.id)}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <h4 className="text-xl font-bold mb-4">
              {modalType === "add" ? "Add" : "Edit"} Transaction
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Description"
                value={currentData.description || ""}
                onChange={(e) =>
                  setCurrentData({ ...currentData, description: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                required
              />
              <input
                type="number"
                placeholder="Amount"
                value={currentData.amount?.toString() || ""}
                onChange={(e) =>
                  setCurrentData({ ...currentData, amount: +e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                required
              />
              <select
                value={currentData.category || "income"}
                onChange={(e) =>
                  setCurrentData({
                    ...currentData,
                    category: e.target.value as Transaction["category"],
                  })
                }
                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
                <option value="saving">Saving</option>
              </select>
              <input
                    type="datetime-local"
                    value={
                        currentData.timestamp
                        ? currentData.timestamp.slice(0, 16) // format for input (YYYY-MM-DDTHH:MM)
                        : ""
                    }
                    onChange={(e) =>
                        setCurrentData({ ...currentData, timestamp: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                    required
                    />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  {modalType === "add" ? "Add" : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
