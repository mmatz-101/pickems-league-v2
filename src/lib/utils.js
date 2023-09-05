import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
export const currentWeek = writable(1);
const records = await pb.collection("current").getFullList()
currentWeek.set(records[0].current_week)

const { randomBytes } = await import("node:crypto")

export const generateUsername = (name) => {
    const id = randomBytes(2).toString("hex")
    return `${name.slice(0, 5)}${id}`
}


export const userPicks = writable();


export function formatDate(date) {
    const timestamp = Date.parse(String(date))
    const dateObj = new Date(timestamp)
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hours = dateObj.getHours();
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedDate = `${month}/${day} ${hours % 12 || 12}:${minutes} ${ampm}`;
    return formattedDate;
}
