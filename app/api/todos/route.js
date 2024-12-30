import { NextResponse } from "next/server";
import { todos, updateTodo } from "./todo";

export async function GET() {
    return NextResponse.json({
        message: "Getting All Todos",
        todos
    },
        { status: 202 }
    )

}

export async function POST(request) {
    const data = await request.json();
    updateTodo([
        ...todos,
        {
            title: data.title,
            id: Date.now()
        }
    ])
    console.log(data)
    return NextResponse.json({
        message: "todo added successfulluy",
        todos
    });
}


