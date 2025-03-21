import Image from "next/image";
import Test from "@/app/favicon.ico";

export function Gallery() {
  const itemList = [Test, Test, Test, Test, Test];

  return (
    <>
      <h2 className="text-2xl font-bold text-slate-600 mb-5 mt-4">
        Galeria de Imagens
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {itemList.map((item, index) => (
          <div
            key={index}
            className="border-10 border-white rounded-xl max-w-70"
          >
            <Image src={item} alt={""} width={260} height={260} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </>
  );
}