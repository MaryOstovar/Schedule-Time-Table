import APIClient from "./apiClient.ts";

export interface Activity {
    id: number;
    title: string;
    body: string;
    date: string;
    time: string;
}
export default new APIClient<Activity>('/posts');