import { User } from "@/lib/models";
import dbConnect from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        dbConnect();
        const users = await User.find();
        return NextResponse.json(users);
    }
    catch (err) {
        console.log(err);
    }
}