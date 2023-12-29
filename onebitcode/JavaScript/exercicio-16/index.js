const dayjs = require('dayjs')

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const currentAge = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(currentAge + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

    console.log(`Sua idade atual é: ${currentAge} anos.`)
    console.log(`Sua próxima data de aniversário é em: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Para você completar ${currentAge + 1} anos faltam ${daysToNextBirthday} dias.`)
}

birthday('2002-05-08')