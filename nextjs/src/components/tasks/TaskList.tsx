import { format } from "date-fns";

export default function TaskList({ tasks }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Start Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              End Date
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="px-6 py-4 whitespace-nowrap">{task.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : task.status === "Accepted"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {task.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(new Date(task.date), "PPP")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(new Date(task.start_date), "PPP")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(new Date(task.end_date), "PPP")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
