import { NextResponse } from "next/server";
import { todos } from "../todo";


export async function GET(request, { params }) {
    const { id } = await params;
    const index = todos.findIndex((item) => item.id === +id)
    if (index === -1) return NextResponse.json({ message: "no todo found" }, { status: 404 })

    return NextResponse.json({
        message: "dynamic route",
        todo: todos[index],
    })
}


// leetcode 
// edit 
export async function PUT(request, { params }) {
    // for getting id
    const { id } = await params;
    // for getting data from body in nextjs
    const data = await request.json()
    // for searching index
    const index = todos.findIndex((item) => item.id === +id)
    // conditons
    if (index === -1) return NextResponse.json({ message: "no todo found" }, { status: 404 })
    if (!data) return NextResponse.json({ message: "data is required" }, { status: 404 })
    // for making updated title equals to previous title oe replacing previous title with updated
    todos[index].title = data.title
    return NextResponse.json({
        message: "edited successfully",
        todo: todos[index]
    })
}







// delete 
export async function DELETE(request, { params }) {
    const { id } = await params;
    const index = todos.findIndex((item) => item.id === +id)
    if (index === -1) return NextResponse.json({ message: "no todo found" }, { status: 404 })


    todos.splice(index, 1)
    return NextResponse.json({
        message: "todo deleted successfully",
        todo: todos,
    })
}