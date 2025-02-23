import { Client, Account, Databases, ID } from "appwrite";

export const client = new Client();

const AppwriteEndpoint: string = "https://cloud.appwrite.io/v1";
client
  .setEndpoint(AppwriteEndpoint)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID as string);

const databases = new Databases(client);
export const account = new Account(client);

const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID as string;
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
