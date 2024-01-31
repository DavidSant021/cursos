class Spaceship {
  // No typescript eu preciso declarar as propriedades fora do construtor
  private _name: string // name por ser privado só é acessivel dentro da própria classe
  protected captain: string // já captain por ser protegido só pode ser acessivel na classe e na suas subclasses
  protected speed: number

  get name() {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  constructor(name: string, captain: string) {
    this._name = name
    this.captain = captain
    this.speed = 0
  }
  
  public accelerate(rate: number, time: number) {
    this.speed = rate * time
  }
}
  
class Fighter extends Spaceship {
  weapons: number

  constructor(name: string, captain: string, weapons: number) {
    super(name, captain)
    this.weapons = weapons
  }
  
  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log('Pew!')
    }
  }
  
  erase() {
    //this.name = '' // gera erro pois name só é acessivel em Spaceship
    this.captain = ''
  }
}
  
let ship = new Spaceship('USS Enterprise', 'James T. Kirk')
  
//ship.speed = 50 // Gera erro pois só é acessivel dentro das classes e subclasses
ship.accelerate(50, 10)