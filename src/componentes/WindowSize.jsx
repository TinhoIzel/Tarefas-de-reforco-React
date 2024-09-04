
// Crie um componente chamado WindowSize.
// Utilize useState para armazenar a largura atual da janela.
// Utilize useEffect para adicionar e remover um event listener que atualiza o estado sempre que a janela é redimensionada.
// Exiba a largura atual da janela.

import { useState, useEffect } from "react";

function TamanhoJanela() {

    const [largura, setLargura] = useState(null)



    const janelaListener = () => {
        setLargura(window.innerWidth)
    }

    useEffect( () => {
        
        window.addEventListener("resize", janelaListener);
        console.log("aconteceu1");
        

        return () => {
            
            janelaListener()
            window.removeEventListener("resize", janelaListener);
            console.log("aconteceu2");
            

        }
    },[])

    return (
        <div>
            <h2>Sua janela tem {largura}px de largura</h2>
        </div>
    )
}

export default TamanhoJanela