export function UploadForm() {

    return (
        <div className='border-primary border-dashed border-2 rounded-2xl bg-blue-50 min-w-full h-30 flex justify-center items-center mb-32 mt-13'>
            <form action="" className="my-8">
                <input type="file" name="image" id="image" />
                <button className="p-2 ml-1 bg-slate-600 text-white rounded">
                    Enviar Imagem
                </button>
            </form>
        </div>
    );
}


