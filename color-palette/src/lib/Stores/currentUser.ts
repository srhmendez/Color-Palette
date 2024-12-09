import { writable } from "svelte/store";

// Create a writable store called currentUser
export const currentUser = writable<any>(null);