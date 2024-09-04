// Crie um componente chamado RealTimeClock.
// Utilize useState para armazenar a hora atual.
// Utilize useEffect para configurar um intervalo que atualiza a hora a cada segundo.
// Certifique-se de limpar o intervalo quando o componente for desmontado para evitar vazamentos de memória.

import { useEffect, useState } from "react"

function RelogioDigital() {
    
    const [segundo, setSegundo] = useState(0)
    const [minuto, setMinuto] = useState(0)
    const [hora, setHora] = useState(0)



    useEffect(() => {

        const atualizarHora = () => {
            const dataAtual = new Date;
            setHora(dataAtual.getHours())
            setMinuto(dataAtual.getMinutes())
            setSegundo(dataAtual.getSeconds())
        }

        const contadorSegundo = setInterval(() => {
            setSegundo(prev => {
                if (prev >= 59){
                    atualizarHora()
                } else {
                    return prev + 1
                }
            });
        },1000)

        return () => {
            clearInterval(contadorSegundo);
            atualizarHora()
        }
    },[])

    return (
        <div>
            <h1>Hora atual</h1>
            <h2>{hora}:{minuto}:{segundo}</h2>
        </div>
    )
}

export default RelogioDigital