"use client";

import { useState } from "react";

export default function TaskForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    status: "Pending",
    date: "",
    start_date: "",
    end_date: "",
    description: "",
    image: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6">Create New Task</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* Status Select */}
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Status
          </label>
          <select
            id="status"
            className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          >
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Date Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Date *
            </label>
            <input
              type="datetime-local"
              id="date"
              required
              className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="start_date"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Start Date *
            </label>
            <input
              type="datetime-local"
              id="start_date"
              required
              className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.start_date}
              onChange={(e) =>
                setFormData({ ...formData, start_date: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="end_date"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              End Date *
            </label>
            <input
              type="datetime-local"
              id="end_date"
              required
              className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.end_date}
              onChange={(e) =>
                setFormData({ ...formData, end_date: e.target.value })
              }
            />
          </div>
        </div>

        {/* Description Textarea */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Description *
          </label>
          <textarea
            id="description"
            required
            rows={4}
            className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        {/* Image Upload */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Image *
          </label>
          <input
            type="file"
            id="image"
            required
            accept="image/*"
            className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-gray-100 hover:file:bg-blue-700"
            onChange={(e) =>
              setFormData({
                ...formData,
                image: e.target.files?.[0]?.name || "",
              })
            }
          />
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
