import { uploadFile } from "@/lib/uploadFile"

export async function POST(req) {
    //bisa menerima file
    const formData = await req.formData()

    const file = formData.get("file")
    console.log(file)

    await uploadFile({ key: file.name, folder: "test", body: file })

    return Response.json({ message: "Good!" })
}