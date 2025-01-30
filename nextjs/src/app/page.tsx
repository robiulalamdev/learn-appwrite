"use client";
import { useState } from "react";
import { account, ID } from "../../lib/config/appwrite";
import TaskForm from "@/components/tasks/TaskForm";
import TaskList from "@/components/tasks/TaskList";
import { ITask } from "../../lib/types/task";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Complete project proposal",
      status: "Pending",
      date: "2023-06-15T10:00",
      start_date: "2023-06-15T10:00",
      end_date: "2023-06-20T18:00",
      description: "Draft and finalize the project proposal for the client",
      image: "proposal.jpg",
    },
    // Add more sample tasks here
  ]);

  const [showForm, setShowForm] = useState(false);

  const addTask = async (newTask: ITask) => {
    const result = await account.create();
    console.log(result);
    setShowForm(false);
  };
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Task Manager</h1>

        <div className="mb-6">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Create New Task
          </button>
        </div>

        {showForm ? (
          <TaskForm onSubmit={addTask} onCancel={() => setShowForm(false)} />
        ) : (
          <TaskList tasks={tasks} />
        )}
      </div>
    </div>
  );
}
