"use server"

import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { s3Client } from "./lib/s3Client";
import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadImage(formData: FormData) {
   
    const image = formData.get('image') as File;

    if (!image.size) {
        return {
          success: false,
          message: 'Você precisa enviar algum arquivo.',
        };
      }
    
      if (!image.type.startsWith('image/')) {
        return {
          success: false,
          message: 'Formato inválido. Envie uma imagem',
        };
      }
    
      if (image.size > 1 * 1024 * 1024) {
        return {
          success: false,
          message: 'Arquivo muito grande (>1mb)',
        };
      }
  
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

export async function deleteImage(key: string) {
    const params = {
        Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME!,
        Key: key}

    const command = new DeleteObjectCommand(params);
    
    try {
      await s3Client.send(command);
      revalidatePath('/');
      return {
        success: true,
      };
    } catch (e) {
      return {
        success: false,
      };
    }
  }