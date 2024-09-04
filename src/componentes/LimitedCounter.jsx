// Crie um componente chamado LimitedCounter.
// Use useState para armazenar o valor do contador.
// Adicione botões para incrementar e decrementar o contador.
// Não permita que o contador ultrapasse o valor 10 e exiba uma mensagem quando o limite for atingido.

import { useState } from "react"

function ContadorLimitado() {

    const [contador, setContador] = useState(0)


    const mudarContador = (event) => {
        const valor = event.target.value === "+" ? true : false;

        // se for +1
        if (valor) {
            contador !== 10 ? setContador(contador + 1) : alert("Valor chegou no limite!")
        } else {
            contador !== 0 ? setContador(contador - 1) : alert("Valor não pode mais diminuir!")
        }

    }

    return (
        <div>
            <h2>O contador está em {contador}</h2>
            <button onClick={mudarContador} value="+">+</button>
            <button onClick={mudarContador} value="-">-</button>
        </div>
    )
}

export default ContadorLimitado
