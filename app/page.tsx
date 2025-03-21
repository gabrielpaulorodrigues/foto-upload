import {Gallery} from "./components/Gallery";
import { UploadForm } from "./components/UploadForm";

export default function Home() {
  return (
    <>
      <main className="flex-1 max-w-250 mx-auto px-4 py-8 text-center">
        <header className="border-b-1 mt-16 max-w-132 m-auto">
          <h1 className="text-5xl font-black text-slate-600 mb-4">
            Foto Upload
          </h1>
          <p className="text-base text-gray-600 mb-3 font-light">
            Galeria de fotos com <span className="text-gray-600 font-bold">Next.js, upload de imagens e S3</span>
          </p>
        </header>

        <UploadForm/>

        <Gallery/>

      </main>
      <footer className="bg-slate-600 py-4 w-full"></footer>
    </>
  );
}