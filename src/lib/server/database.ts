import type {CoffeeRecord} from "$lib/types";

var database: CoffeeRecord[] = [];

export function createPost(post: CoffeeRecord): CoffeeRecord {
    database.push(post)
    return post
}

export function getAllPosts() {
    return database;
}

