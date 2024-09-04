
// Crie um componente chamado TitleUpdater.
// Use useState para criar uma variável de estado number.
// Use useEffect para atualizar o título da aba do navegador toda vez que number mudar.
// Adicione botões para incrementar e decrementar number.

import { useState, useEffect } from "react";

function AtualizadorTitulo() {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log(document.title);

        document.title = "Título "+ number;
    },[number])

    function Incrementar() {
        setNumber(number + 1);
    }

    function Decrementar() {
        setNumber(number - 1);
    }

    return (
        <div>
            <h2>Atualizador de título da página</h2>
            <button onClick={Incrementar}>+</button>
            <button onClick={Decrementar}>-</button>
        </div>
    )
}

export default AtualizadorTitulo