import { useState } from 'react'

export default function App() {

  const [password, setPassword] = useState('');
  const [copyText, setCopyText] = useState('Copiar!');
  const [passwordSize, setPasswordSize] = useState(12);

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText('Copiar!')
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText('Copiado!')
  }

  return (
    <div className="app">
      <img 
        src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/react/react-original.svg" alt="Logo React"
        style={{
          width: "100px",
          marginBottom: "1rem"
        }}
      />
      <h1 className="titleContent">Gerador de senhas React</h1>
      <div>
        <label htmlFor="passwordSize">Size:</label>
        <input 
          type="number" 
          id="passwordSize" 
          min={1}
          max={30}
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)} />
      </div>
      <div>
        <button className="button button-1" onClick={generate}>Gerar!</button>
        <button className="button button-2" onClick={copyToClipboard}>{copyText}</button>
      </div>
      <div>{password}</div>
    </div>
  )
}