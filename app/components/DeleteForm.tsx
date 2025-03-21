'use client';

import { BiTrash } from 'react-icons/bi';
import { deleteImage } from '@/app/actions';

export function DeleteForm({ imageKey }: { imageKey: string }) {

  async function handleSubmit(formData: FormData) {

    const actionRes = await deleteImage(imageKey);
    
    if (actionRes.success) {
      console.log('Imagem apagada com sucesso!');
    } else {
      console.log('Ops.. ocorreu um erro!');
    }
  }

  return (
    <form action={handleSubmit}>
      <button type="submit" className="bg-red-50 text-red-700 p-4 rounded">
        <BiTrash className="w-6 h-6" />
      </button>
    </form>
  );
}
