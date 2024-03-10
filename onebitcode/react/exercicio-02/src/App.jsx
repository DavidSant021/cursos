import Card from "./components/Card"
import starWarsPoster from "../public/starwars.jpg"
import empirePoster from "../public/empire.jpg"
import jediPoster from "../public/jedi.jpg"

export default function App() {
  return (
    <>
      <Card title="Pôster: Star Wars (1977)" img={starWarsPoster} />
      <Card title="Pôster: Empire Stikes Back (1980)" img={empirePoster} />
      <Card title="Pôster: Return of the Jedi (1983)" img={jediPoster} />
    </>
  )
}

// import { Fragment } from "react"
// <Fragment></Fragment> no lugar do <> </>