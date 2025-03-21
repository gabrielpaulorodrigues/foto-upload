import Image from "next/image";
import { s3Client } from "@/app/lib/s3Client";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";

export async function Gallery() {
  const params = {
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME!,
  };

  const command = new ListObjectsV2Command(params);

  const response = await s3Client.send(command);

  const imageList = response.Contents?.map((object) => object.Key);

  return (
    <>
      <h2 className="text-2xl font-bold text-slate-600 mb-5 mt-4">
        Galeria de Imagens
      </h2>

      {imageList && imageList.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {imageList.map((imagem, index) => (
            <div key={index} className="border-10 border-white rounded-xl max-w-70">
              <Image
                src={`https://${process.env.NEXT_AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${imagem}`}
                alt=""
                width={260}
                height={260}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-600">Nenhuma imagem encontrada</p>
      )}
    </>
  );
}
