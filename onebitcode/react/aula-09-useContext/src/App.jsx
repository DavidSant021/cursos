import Header from "./components/Header"
import UserInfo from "./components/UserInfo"
import UserContext from "./contexts/UserContext"

export default function App() {

  const user = {
    name: 'João',
    email: 'joao@email.com'
  }

  return (
    <>
      <UserContext.Provider value={user}>
        <Header>
          <hr />
        </Header>
        <h1>Usando Contexto</h1>
        <UserInfo />
      </UserContext.Provider>
      <div>
        {/* não há acesso ao contexto */}
      </div>
    </>
  )
}