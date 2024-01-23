// Primeira forma de evitar a tipagem

function sendSpaceship(spaceship: { pilot: string, copilot?: string }) {
    // ....
}

sendSpaceship({ pilot: 'Han Solo', copilot: 'Chewbacca' })
sendSpaceship({ pilot: 'Luke' })

// Segunda forma de evitar a tipagem

let input: unknown

input = 'Text'
input = 20
input = []

let text: string

//text = input  // gera erro pois o unknown não pode ser atribuido ao tipo string

// Terceira forma, deve ser evitada usar ao máximo

let input2: any

input2 = 'Text'
input2 = 20
input2 = []

let text2: string

text2 = input2

// Quarta forma

function verification(test) {
    if(test) {

    } else {
        let _check: never

        //let text = _check

        //text = ''

        //return _check
    }
}