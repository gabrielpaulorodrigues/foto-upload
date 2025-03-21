"use server"

import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { s3Client } from "./lib/s3Client";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadImage(formData: FormData) {
   
    const image = formData.get('image') as File;
  
    const arrayBuffer = await image.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);
  
    const params = {
        Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME!,
        Key: nanoid() + '.jpg',
        Body: imageBuffer,
      };
      
      const command = new PutObjectCommand(params);
      
      try {
        await s3Client.send(command);
        revalidatePath('/');
        return { success: true };
      } catch (e) {
        return { success: false, message: 'Alguma coisa deu errado.' };
      }
}