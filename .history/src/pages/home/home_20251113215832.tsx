function Home() {
    return (
        <div className="bg-purple-50 flex justify-center min-h-screen">
            <div className="container grid grid-cols-1 md:grid-cols-2 text-white">
                <div className="flex flex-col gap-4 items-center justify-center py-4 px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-950 text-center">
                        Seu Hub de Ideias
                    </h2>
                    <p className="text-lg md:text-xl text-purple-950 text-center">
                        Onde cada post encontra seu lugar.
                    </p>
                    <div className="flex justify-around gap-4 mt-4">
                        <button className="rounded text-purple-950 bg-white border-purple-950 border-solid border-2 py-2 px-4 hover:bg-purple-950 hover:text-white transition-colors duration-300 font-semibold">
                            Nova Postagem
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center py-8 px-4">
                    <img 
                        src="https://i.imgur.com/56pPCUE.png" 
                        alt="Imagem da Página Home" 
                        className="w-full md:w-2/3 rounded-[8%_60%_45%_45%_/_40%_45%_8%_45%] shadow-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
