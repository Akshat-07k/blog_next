import { User } from "@/lib/models";
import dbConnect from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    try {
        // console.log(params.slug);
        // console.log(params.slug);
        const id = params.slug;
        console.log(id);
        dbConnect();
        const user = await User.find({ username: id })
        return NextResponse.json({ user });
    }
    catch (err) {
        // console.log(err);
        return NextResponse.json(err);
    }
}