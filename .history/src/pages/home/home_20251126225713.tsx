import ListaPostagens from "../../assets/components/postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../assets/components/postagem/modalpostagem/ModalPostagem"

function Home() {
  return (
    <>
    <div
        className="bg-indigo-900 flex justify-center"
    >      
    {/* Grid que divide a tela em duas colunas  */}
        <div
            className="container grid grid-cols-2 text-amber-400"
          >
           {/* Coluna esquerda */}
            <div
                className="flex flex-col gap-4 items-center justify-center py-4"
            >
                <h2
                    className="text-5xl font-bold"
                > Seja bem vindo!</h2>
                <p
                    className="text-xl"
                > Expresse aqui seus pensamentos e opiniões</p>
                {/* Link/ botão */}
                <div
                    className="flex justify-around gap-4">
                         <ModalPostagem />
                </div>
            </div>
 
            {/* Coluna direita */}
            <div
                className="flex justify-center"
            >
                <img
                    src="https://ik.imagekit.io/milenasoliv10/imagem1.jpg"
                    alt="Imagem da Página Home"
                    className="w-2/3"
 
                />
            </div> 
        </div>
    </div>
        <ListaPostagens />
    </>
  )
}
 
export default Home