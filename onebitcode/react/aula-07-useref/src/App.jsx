import { useRef, useState } from "react"
import RefExample from "./components/RefExample"

export default function App() {

  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValues = () => {
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }

  // Variavel vai ser zerada quando renderizar novamente o componente
  // O Ref consegue persistir o valor mesmo renderizando novamente e att na tela quando é renderizado novamente

  return (
    <div>
      <h2>Exemplo de useRef com o DOM</h2>
      <RefExample />
      <hr />
      <h2>Conheçendo o useRef</h2>
      <hr />
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>

      <button onClick={() => variable++}>
        Aumentar Variável
      </button>

      <button onClick={() => ref.current++}>
        Aumentar Ref
      </button>

      <button onClick={() => setState(state => state + 1)}>
        Aumentar State
      </button>

      <hr />
      <button onClick={showValues}>Exibir valores</button>
    </div>
  )
}