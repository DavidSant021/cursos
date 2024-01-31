import { Spaceship } from "./export.ts";
import * as lodash from "lodash"
// Para bibliotecas que não tem tipo e não foram feitas pensando no typescript uso como por ex:
// npm i -D @types/lodash

interface BattleSpaceship extends Spaceship {
    weapons: number
}

let xwing: BattleSpaceship = {
    name: "X-wing",
    pilot: 'Luke Skywalker',
    speed: 50,
    weapons: 4
}

console.log(lodash.camelCase('ola, mundo!'))
