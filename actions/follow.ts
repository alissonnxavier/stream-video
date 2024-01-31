"use server";

import { db } from "@/lib/db";

export const onFollow = async (id: string, name: string) => {
    try {
        await db.test.create({
            data: {
                name,
            }
        })
        console.log("I am the same as an API Call", id);
    } catch (erro) {
        throw new Error("Internal Error");
    }
}