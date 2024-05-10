import { s3Client } from "@/utils/aws";
import { S3Client } from "@aws-sdk/client-s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";


export async function uploadFile({ key, folder, body }) {
    // 1. Siapin file sesuai format yang diminta oleh AWS/R2
    const bytes = await body.arrayBuffer();
    const buffer = Buffer.from(bytes);
    // 2 Send command (command untuk upload file)
    try {
        await s3Client.send(
            new PutObjectCommand({
                Bucket: "ecohelp",
                Key: `${folder}/${key}`,
                ContentType: body.type,
                Body: buffer,
            })
        );
        console.log("upload ok")

    } catch (e) {
        console.log(e)

    }

}