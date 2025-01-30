import { Client, Account, Databases, ID } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID as string); // Replace with your project ID

const databases = new Databases(client);
export const account = new Account(client);

const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID as string; // Replace with your database ID
const taskId = process.env.NEXT_PUBLIC_TASK_COLLECTION_ID as string;

export const Appwrite = {
  client,
  ID,
  databases,
  account,
  databaseId,
  collections: {
    task: {
      name: "Task",
      id: taskId,
    },
  },
};

// Initialize Database service
