import {error, json, type RequestHandler} from "@sveltejs/kit";
import type {CoffeeRecord} from "$lib/types";
import {createPost} from "$lib/server/database";

async function newPost(post: CoffeeRecord): Promise<any> {
    return createPost(post)
}

export const POST: RequestHandler = async({request}) => {
    let data : unknown

    try {
        data = await request.json();
    } catch (e) {
        console.error("JSON 파싱 오류:", e);
        throw error(400, "유효한 JSON 형식이 아닙니다.");
    }

    const recordData: CoffeeRecord = data as CoffeeRecord;

    const post = await newPost(recordData);
    return json(post)
}