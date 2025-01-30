"use client";
import { useEffect, useState } from "react";
import TaskForm from "@/components/tasks/TaskForm";
import TaskList from "@/components/tasks/TaskList";
import { ITask } from "../../lib/types/task";
import { Appwrite } from "../../lib/config/appwrite";
import { Models, Query } from "appwrite";

export default function Home() {
  const [tasks, setTasks] = useState<Models.Document[]>([]);

  const [showForm, setShowForm] = useState(false);

  const addTask = async (newTask: ITask) => {
    const result = await Appwrite.databases.createDocument(
      Appwrite.databaseId,
      Appwrite.collections.task.id,
      Appwrite.ID.unique(),
      newTask
    );
    console.log(result);
    refetch();
    setShowForm(false);
  };

  const refetch = async () => {
    const result: Models.DocumentList<Models.Document> =
      await Appwrite.databases.listDocuments(
        Appwrite.databaseId,
        Appwrite.collections.task.id,
        [Query.orderDesc("date")]
      );
    if (result?.documents?.length > 0) {
      setTasks(result.documents);
    }
  };

  useEffect(() => {
    refetch();
  }, []);
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
