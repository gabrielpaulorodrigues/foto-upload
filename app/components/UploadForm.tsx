"use client";

import { uploadImage } from "../actions";

export function UploadForm() {
    
    async function handleSubmit(formData: FormData) {
        const actionResponse = await uploadImage(formData);
    
        if (actionResponse.success) {
          console.log('Imagem enviada com sucesso.');
        } else {
          console.log('Ops... ' + actionResponse.message);
        }
      }

    return (
        <div className='border-primary border-dashed border-2 rounded-2xl bg-blue-50 min-w-full h-30 flex justify-center items-center mb-32 mt-13'>
            <form action={handleSubmit} className="my-8">
                <input type="file" name="image" id="image" />
                <button className="p-2 ml-1 bg-slate-600 text-white rounded">
                    Enviar Imagem
                </button>
            </form>
        </div>
    );
}


