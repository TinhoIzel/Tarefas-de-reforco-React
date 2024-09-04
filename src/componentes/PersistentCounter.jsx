// Crie um componente chamado PersistentCounter.
// Use useState para gerenciar o contador, inicializando-o com o valor do Local Storage, se disponível.
// Use useEffect para atualizar o Local Storage sempre que o contador mudar.
// Exiba o valor do contador e adicione botões para incrementar e decrementar.

import { useState, useEffect } from "react";

function CounterLocal() {

    const valorInicialContador = () => {
        if (localStorage.getItem("contador") === null) {
            console.log("Contador não existe");
            return 0
        } else {
            console.log("Contador já existe, resgatando...");
            
            return localStorage.getItem("contador")
        }
    }

    const [contador, setContador] = useState(valorInicialContador)

    useEffect(() => {

        localStorage.setItem("contador", contador)

    },[contador])


    
    function mudarContador(event) {
        const botao = parseInt(event.target.value)
        setContador(prev => parseInt(prev) + botao);
    }

    return(
        <div>
            <h2>Valor do contador: {contador}</h2>
            <button value='1' onClick={mudarContador}>+</button>
            <button value='-1' onClick={mudarContador}>-</button>
        </div>
    )

}

export default CounterLocal