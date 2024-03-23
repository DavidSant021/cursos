import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import UseGameCollection from "./hooks/useGameCollection"

export default function App() {

  const { games, addGame, removeGame} = UseGameCollection()

  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.map((game) => ( // Uso os parenteses para entender que é o retorno 
          <Game 
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}/>
        ))}
      </div>
    </div>
  )
}